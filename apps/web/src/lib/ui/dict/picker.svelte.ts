// Escolha de palavras numa linha para o dicionário, com o dedo ou o mouse.
//
// Marcação: o elemento da linha recebe {@attach picker.group(id)}; cada palavra tocável
// tem data-tok="<índice do token>"; uma lacuna sem resposta tem data-tok-block="<índice>"
// (o arraste para antes dela). Toque (ou Enter num botão) escolhe uma palavra; arrastar
// de uma palavra até outra da mesma linha escolhe a expressão.
//
// No toque, as palavras usam `touch-action: pan-y`: arraste na vertical rola a tela (o
// navegador cancela o ponteiro) e arraste na horizontal escolhe palavras.

import type { Attachment } from 'svelte/attachments';
import { clampSpan, type Span } from './span.ts';

export interface Anchor {
	left: number;
	top: number;
	bottom: number;
	width: number;
}

export interface Pick extends Span {
	group: string;
	/** Onde o trecho está na tela, para o cartão abrir perto. */
	anchor: Anchor;
}

/** Um clique logo depois de um arraste é o próprio arraste: não escolhe de novo. */
const CLICK_AFTER_DRAG_MS = 450;

function tokenOf(el: Element | null, root: HTMLElement): HTMLElement | null {
	const tok = el?.closest<HTMLElement>('[data-tok]') ?? null;
	return tok && root.contains(tok) ? tok : null;
}

function indexes(root: HTMLElement, attr: 'tok' | 'tokBlock'): Set<number> {
	const sel = attr === 'tok' ? '[data-tok]' : '[data-tok-block]';
	return new Set(
		[...root.querySelectorAll<HTMLElement>(sel)].map((el) => Number(el.dataset[attr]))
	);
}

function anchorOf(root: HTMLElement, span: Span): Anchor {
	const rects = [...root.querySelectorAll<HTMLElement>('[data-tok]')]
		.filter((el) => {
			const i = Number(el.dataset.tok);
			return i >= span.from && i <= span.to;
		})
		.map((el) => el.getBoundingClientRect());
	if (rects.length === 0) {
		const r = root.getBoundingClientRect();
		return { left: r.left, top: r.top, bottom: r.bottom, width: r.width };
	}
	const left = Math.min(...rects.map((r) => r.left));
	const right = Math.max(...rects.map((r) => r.right));
	return {
		left,
		width: right - left,
		top: Math.min(...rects.map((r) => r.top)),
		bottom: Math.max(...rects.map((r) => r.bottom))
	};
}

export class WordPicker {
	/** O trecho destacado: durante o arraste e enquanto o cartão está aberto. */
	span = $state<(Span & { group: string }) | null>(null);
	#onpick: (pick: Pick) => void;
	#lastDrag = 0;

	constructor(onpick: (pick: Pick) => void) {
		this.#onpick = onpick;
	}

	has(group: string, token: number): boolean {
		const s = this.span;
		return s !== null && s.group === group && token >= s.from && token <= s.to;
	}

	clear() {
		this.span = null;
	}

	#pick(root: HTMLElement, group: string, span: Span) {
		this.span = { group, ...span };
		this.#onpick({ group, ...span, anchor: anchorOf(root, span) });
	}

	group(id: string): Attachment<HTMLElement> {
		return (root) => {
			let drag: { pointer: number; start: number; moved: boolean } | null = null;

			const stop = () => {
				window.removeEventListener('pointermove', move);
				window.removeEventListener('pointerup', up);
				window.removeEventListener('pointercancel', cancel);
				drag = null;
			};

			const move = (e: PointerEvent) => {
				if (!drag || e.pointerId !== drag.pointer) return;
				const tok = tokenOf(document.elementFromPoint(e.clientX, e.clientY), root);
				if (!tok) return;
				const target = Number(tok.dataset.tok);
				if (!drag.moved && target === drag.start) return;
				drag.moved = true;
				this.span = {
					group: id,
					...clampSpan(drag.start, target, indexes(root, 'tokBlock'), indexes(root, 'tok'))
				};
			};

			const up = (e: PointerEvent) => {
				if (!drag || e.pointerId !== drag.pointer) return;
				const moved = drag.moved;
				stop();
				const s = this.span;
				if (!moved || !s || s.group !== id) return;
				// Arrastou e voltou para a mesma palavra: vale como toque nela.
				this.#lastDrag = performance.now();
				this.#pick(root, id, s);
			};

			const cancel = (e: PointerEvent) => {
				if (!drag || e.pointerId !== drag.pointer) return;
				// O navegador assumiu o gesto (rolagem): nada escolhido.
				if (drag.moved) this.span = null;
				stop();
			};

			const down = (e: PointerEvent) => {
				if (e.button !== 0 || !e.isPrimary) return;
				const tok = tokenOf(e.target as Element, root);
				if (!tok) return;
				stop();
				drag = { pointer: e.pointerId, start: Number(tok.dataset.tok), moved: false };
				// No toque o elemento tocado captura o ponteiro; solto, elementFromPoint acha
				// a palavra sob o dedo.
				if (tok.hasPointerCapture(e.pointerId)) tok.releasePointerCapture(e.pointerId);
				window.addEventListener('pointermove', move);
				window.addEventListener('pointerup', up);
				window.addEventListener('pointercancel', cancel);
			};

			const click = (e: MouseEvent) => {
				const tok = tokenOf(e.target as Element, root);
				if (!tok) return;
				e.stopPropagation();
				if (performance.now() - this.#lastDrag < CLICK_AFTER_DRAG_MS) return;
				const i = Number(tok.dataset.tok);
				this.#pick(root, id, { from: i, to: i });
			};

			root.addEventListener('pointerdown', down);
			root.addEventListener('click', click);
			return () => {
				stop();
				root.removeEventListener('pointerdown', down);
				root.removeEventListener('click', click);
			};
		};
	}
}
