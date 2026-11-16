// Dicionário dentro da lição: o player cria um CourseDict e o põe no contexto; cada
// TapText se registra como uma linha tocável (tokens, tradução da lição, vizinhas). O
// cartão é um só, desenhado pelo player.
//
// Salvar: fala do diálogo vai por /curso/<curso>/<nº>/palavra (encontro de origem
// 'curso' ligado à obra da lição). Frase de fora do diálogo (exemplos, frases soltas,
// exercícios) não tem fala para apontar: vai pelo Guardar comum (/palavras?/add), com
// a frase e a tradução, sem obra.

import { getContext, setContext } from 'svelte';
import type { DictQuery } from '#lib/dictionary.ts';
import type { Line } from '#lib/curso/index.ts';
import { plainText, type RichToken } from '#lib/curso/markup.ts';
import { toast } from '#lib/ui/app-state.svelte.ts';
import { postAction } from '#lib/ui/post-action.ts';
import { WordPicker, type Anchor, type Pick } from '#lib/ui/dict/picker.svelte.ts';
import { spanText, splitLine } from '#lib/ui/dict/span.ts';

export interface TapSource {
	tokens: RichToken[];
	/** Tradução da frase, do próprio conteúdo da lição. */
	pt: string;
	/** Índice da fala em lesson.lines, quando a frase é do diálogo. */
	line?: number;
	before?: string;
	after?: string;
}

export interface CourseCard {
	query: DictQuery;
	line: { before: string; mark: string; after: string };
	translation: string;
	anchor: Anchor;
	source: TapSource;
}

const KEY = Symbol('curso-dict');

/** Falas vizinhas no diálogo (texto puro), sem atravessar a separação de blocos. */
export function dialogNeighbours(lines: readonly Line[], i: number) {
	const prev = lines[i]?.sep ? undefined : lines[i - 1];
	const next = lines[i + 1]?.sep ? undefined : lines[i + 1];
	return {
		before: prev ? plainText(prev.it) : undefined,
		after: next ? plainText(next.it) : undefined
	};
}

export class CourseDict {
	card = $state<CourseCard | null>(null);
	saving = $state(false);
	message = $state('');
	readonly picker = new WordPicker((p) => this.#open(p));
	// eslint-disable-next-line svelte/prefer-svelte-reactivity -- registro, não é estado da tela
	#sources = new Map<string, () => TapSource>();
	#next = 0;
	#language: () => string;
	#base: () => string;
	#onsaved: (form: string) => void;

	constructor(opts: {
		language: () => string;
		/** URL da lição, base do POST de palavra. */
		base: () => string;
		/** Forma guardada (para a contagem do fim da lição). */
		onsaved: (form: string) => void;
	}) {
		this.#language = opts.language;
		this.#base = opts.base;
		this.#onsaved = opts.onsaved;
	}

	/** Registra uma linha tocável; devolve o id do grupo e como desfazer o registro. */
	register(source: () => TapSource): { id: string; unregister: () => void } {
		const id = `c${this.#next++}`;
		this.#sources.set(id, source);
		return { id, unregister: () => this.#sources.delete(id) };
	}

	#open(pick: Pick) {
		const source = this.#sources.get(pick.group)?.();
		if (!source) return;
		const text = spanText(source.tokens, pick);
		if (!text) return;
		this.message = '';
		this.card = {
			query: {
				language: this.#language(),
				text,
				sentence: source.tokens.map((t) => t.text).join(''),
				before: source.before,
				after: source.after,
				translateSentence: false
			},
			line: splitLine(source.tokens, pick),
			translation: source.pt,
			anchor: pick.anchor,
			source
		};
	}

	close() {
		this.card = null;
		this.message = '';
		this.picker.clear();
	}

	async save(input: { lemma: string; reading: string; sense: string }) {
		const card = this.card;
		if (!card || this.saving) return;
		const language = this.#language();
		const form = card.query.text;
		// Sem lema do dicionário, a forma vista; clítico elidido ("l'") sem o apóstrofo.
		const lemma =
			input.lemma.trim() ||
			form.normalize('NFC').toLocaleLowerCase(language).replace(/’/g, "'").replace(/'$/, '');
		this.saving = true;
		this.message = '';
		try {
			const note =
				card.source.line === undefined
					? await this.#saveManual(card, { ...input, lemma })
					: await this.#saveLine(card.source.line, form, { lemma, sense: input.sense });
			this.#onsaved(form.toLocaleLowerCase(language));
			toast(note);
			if (this.card === card) this.close();
		} catch (e) {
			this.message = e instanceof Error ? e.message : 'Não deu para guardar agora.';
		} finally {
			this.saving = false;
		}
	}

	async #saveLine(line: number, form: string, w: { lemma: string; sense: string }) {
		const res = await fetch(`${this.#base()}/palavra`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ lemma: w.lemma, sense: w.sense, form, line })
		}).catch(() => null);
		if (!res?.ok) throw new Error('Não deu para guardar agora. Tente de novo.');
		const out = (await res.json()) as { created: boolean; lemma: string };
		return out.created
			? `"${out.lemma}" guardada em Minhas palavras, com a frase`
			: `"${out.lemma}" já estava no banco; a frase entrou junto`;
	}

	async #saveManual(card: CourseCard, w: { lemma: string; reading: string; sense: string }) {
		const r = await postAction(
			'/palavras?/add',
			{
				language: this.#language(),
				lemma: w.lemma,
				reading: w.reading,
				sense: w.sense,
				sentence: card.query.sentence,
				translation: card.translation
			},
			{ reload: false }
		);
		if (!r.ok) {
			const errors = (r.data?.errors ?? {}) as Record<string, string>;
			throw new Error(Object.values(errors)[0] ?? r.message);
		}
		const message = r.data.message;
		return typeof message === 'string' ? message : `"${w.lemma}" guardada.`;
	}
}

export function setCourseDict(dict: CourseDict) {
	setContext(KEY, dict);
}

export function getCourseDict(): CourseDict | undefined {
	return getContext<CourseDict | undefined>(KEY);
}
