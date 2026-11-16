// Camada fina sobre o foliate-js (vendorizado em ./foliate): abre o EPUB paginado, avisa
// a posição, os toques nos links do blend e nas bordas da página. Só no navegador.

import { readBlendLink, type BlendLink } from './blend-link.ts';
import { Overlayer } from './foliate/overlayer.js';
import { wordBounds } from './word-hit.ts';
import { createPaging } from './paging.ts';
import { rangeContext } from './sentence.ts';
import { quoteFromRange, rangeFor, type Highlight } from './highlights.ts';
import { FONTS, FONT_STEPS, layoutAttributes, type ReaderSettings } from './settings.ts';

export type TocEntry = { label: string; href: string; depth: number; spine: number };

export type Relocation = {
	spine: number;
	/** 0–1 dentro do capítulo. */
	chapterFraction: number;
	/** 0–1 no livro. */
	bookFraction: number;
	chapter: string;
	/** Página estimada (1…totalPages) e o total: mudam com a letra e as margens. */
	page: number;
	totalPages: number;
};

export type BlendTap = {
	link: BlendLink;
	/** Texto do link como está na página (a forma). */
	form: string;
	/** O elemento, no documento do capítulo (para achar a frase). */
	anchor: HTMLAnchorElement;
	/** Onde o link está na janela, para o cartão não cobrir a palavra. */
	rect: { top: number; bottom: number; left: number; right: number };
};

export type WordTap = {
	text: string;
	sentence: string;
	/** Frases vizinhas (contexto da consulta). */
	before: string;
	after: string;
	rect: { top: number; bottom: number; left: number; right: number };
};

export type TextSelection = {
	spine: number;
	/** A frase em volta (e as vizinhas), para o dicionário. */
	sentence: string;
	before: string;
	after: string;
	quote: string;
	prefix: string;
	suffix: string;
	/** Onde a seleção está na janela, para a barra de ações não cobri-la. */
	rect: { top: number; bottom: number; left: number; right: number };
};

export type EngineEvents = {
	/** Toque numa palavra comum do texto (não é link do blend). */
	onWordTap: (w: WordTap) => void;
	/** Seleção de texto feita (ou desfeita: null) no capítulo aberto. */
	onSelect: (s: TextSelection | null) => void;
	/** Toque num grifo já feito. */
	onHighlightTap: (id: string) => void;
	onRelocate: (r: Relocation) => void;
	onBlendTap: (tap: BlendTap) => void;
	/** Clique ou toque fora de link: bordas esquerda e direita, ou o meio. */
	onTap: (zone: 'left' | 'right' | 'middle') => void;
	onKey: (e: KeyboardEvent) => void;
};

export type Engine = {
	toc: TocEntry[];
	language: string;
	goToHref: (href: string) => Promise<void>;
	/** Página estimada do começo de uma seção, e o total de páginas. */
	pageOfSpine: (spine: number) => number;
	totalPages: () => number;
	goToPage: (page: number) => Promise<void>;
	goToFraction: (fraction: number) => Promise<void>;
	goToPosition: (spine: number, chapterFraction: number) => Promise<void>;
	start: () => Promise<void>;
	prev: () => Promise<void>;
	next: () => Promise<void>;
	/** Vira para o lado (no livro da direita para a esquerda, esquerda é avançar). */
	goLeft: () => Promise<void>;
	goRight: () => Promise<void>;
	setStyles: (css: string) => void;
	setLayout: (s: ReaderSettings) => void;
	/** Troca a lista de grifos desenhados (acha cada trecho de novo pelo texto). */
	setHighlights: (list: Highlight[]) => void;
	goToHighlight: (h: Highlight) => Promise<void>;
	clearSelection: () => void;
	destroy: () => void;
};

/* O foliate não tem tipos: o mínimo que usamos dele. */
type FoliateRenderer = HTMLElement & {
	goTo: (t: { index: number; anchor?: number | ((doc: Document) => Range | Node) }) => Promise<void>;
	setStyles?: (css: string) => void;
	pages: number;
	getContents: () => { index: number; doc: Document; overlayer?: Overlayer }[];
	destroy?: () => void;
};
type FoliateView = HTMLElement & {
	open: (file: Blob) => Promise<void>;
	close: () => void;
	init: (o: { showTextStart?: boolean }) => Promise<void>;
	goTo: (href: string) => Promise<unknown>;
	resolveNavigation: (target: string) => { index: number } | undefined;
	goLeft: () => Promise<void>;
	goRight: () => Promise<void>;
	prev: () => Promise<void>;
	next: () => Promise<void>;
	renderer: FoliateRenderer;
	lastLocation?: { tocItem?: { label?: string } | null };
	book: {
		dir?: string;
		sections: { linear?: string; size?: number }[];
		metadata?: { language?: string | string[] };
		toc?: { label?: string; href?: string; subitems?: unknown[] }[];
	};
};

function flattenToc(
	items: FoliateView['book']['toc'],
	spineOf: (href: string) => number,
	depth = 0,
	out: TocEntry[] = []
) {
	for (const item of items ?? []) {
		if (item.href) {
			out.push({
				label: (item.label ?? '').trim() || '—',
				href: item.href,
				depth,
				spine: spineOf(item.href)
			});
		}
		flattenToc(item.subitems as FoliateView['book']['toc'], spineOf, depth + 1, out);
	}
	return out;
}

/** A palavra sob o ponto (coordenadas do iframe), ou null se o toque caiu fora do texto. */
function wordAt(doc: Document, x: number, y: number, language: string): Range | null {
	const caret = (
		doc as Document & {
			caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
		}
	).caretPositionFromPoint?.(x, y);
	const pos = caret
		? { node: caret.offsetNode, offset: caret.offset }
		: (() => {
				const r = doc.caretRangeFromPoint?.(x, y);
				return r ? { node: r.startContainer, offset: r.startOffset } : null;
			})();
	if (!pos || pos.node.nodeType !== 3) return null;
	const text = pos.node.nodeValue ?? '';
	const bounds = wordBounds(text, pos.offset, language);
	if (!bounds) return null;
	const { start: a, end: b } = bounds;
	const range = doc.createRange();
	range.setStart(pos.node, a);
	range.setEnd(pos.node, b);
	// O caret cai na palavra mais perto: só vale se o toque foi em cima dela.
	const hit = [...range.getClientRects()].some(
		(r) => x >= r.left - 2 && x <= r.right + 2 && y >= r.top - 2 && y <= r.bottom + 2
	);
	return hit ? range : null;
}

/** Fração da borda que vira página no toque (cada lado). */
const EDGE = 0.28;
/** Em tela estreita (celular) as bordas encolhem: sobra mais texto tocável para o dicionário. */
const edgeFor = (width: number) => (width < 700 ? 0.16 : EDGE);

export async function openBook(
	container: HTMLElement,
	file: Blob,
	/** Língua do livro (a do cadastro; a do EPUB erra com frequência). */
	bookLanguage: string,
	events: EngineEvents
): Promise<Engine> {
	await import('./foliate/view.js');
	const view = document.createElement('foliate-view') as FoliateView;
	view.style.display = 'block';
	view.style.width = '100%';
	view.style.height = '100%';
	container.append(view);
	await view.open(file);

	const renderer = view.renderer;
	renderer.setAttribute('gap', '6%');
	const setLayout = (s: ReaderSettings) => {
		const l = layoutAttributes(s);
		renderer.setAttribute('flow', l.flow);
		renderer.setAttribute('max-inline-size', `${l.maxInline}px`);
		renderer.setAttribute('max-column-count', String(l.columns));
		renderer.setAttribute('margin', `${l.margin}px`);
	};

	const lang = view.book.metadata?.language;
	const language = bookLanguage || ((Array.isArray(lang) ? lang[0] : lang) ?? '');

	// Fração no livro pelo começo da página (a do foliate conta até o fim da página: a
	// primeira página de um capítulo curto já daria 90%). Mesmo peso por tamanho que ele usa.
	const sizes = view.book.sections.map((s) => (s.linear !== 'no' && (s.size ?? 0) > 0 ? s.size! : 0));
	const paging = createPaging(sizes);
	const total = sizes.reduce((a, b) => a + b, 0);
	const bookFraction = (index: number, inSection: number) => {
		if (!total) return 0;
		const before = sizes.slice(0, index).reduce((a, b) => a + b, 0);
		return Math.min(1, (before + inSection * (sizes[index] ?? 0)) / total);
	};

	// Posição: o renderer dá o capítulo e a fração nele; a view, o item do sumário (ela
	// ouve o renderer antes, então lastLocation já está atualizada).
	renderer.addEventListener('relocate', (e) => {
		const { index, fraction } = (e as CustomEvent<{ index: number; fraction: number }>).detail;
		const inSection = Number.isFinite(fraction) ? fraction : 0;
		// Só capítulos longos calibram a página: os curtinhos (rosto, créditos) enganam.
		if ((sizes[index] ?? 0) >= 6000 && renderer.pages > 2) paging.measure(index, renderer.pages - 2);
		events.onRelocate({
			spine: index,
			chapterFraction: inSection,
			bookFraction: bookFraction(index, inSection),
			chapter: view.lastLocation?.tocItem?.label?.trim() ?? '',
			page: paging.pageAt(index, inSection),
			totalPages: paging.totalPages
		});
	});

	// Link do blend não navega: vira cartão. Os outros seguem o foliate.
	view.addEventListener('link', (e) => {
		const { a } = (e as CustomEvent<{ a: HTMLAnchorElement }>).detail;
		const link = readBlendLink(a.getAttribute('href'));
		if (!link) return;
		e.preventDefault();
		const frame = a.ownerDocument.defaultView?.frameElement?.getBoundingClientRect();
		const r = a.getBoundingClientRect();
		const dx = frame?.left ?? 0;
		const dy = frame?.top ?? 0;
		events.onBlendTap({
			link,
			form: (a.textContent ?? '').replace(/\s+/g, ' ').trim(),
			anchor: a,
			rect: { top: r.top + dy, bottom: r.bottom + dy, left: r.left + dx, right: r.right + dx }
		});
	});

	// ---------- Grifos ----------

	let highlights: Highlight[] = [];
	let selectedDoc: Document | null = null;

	const drawOne = (h: Highlight, contents: { index: number; doc: Document; overlayer?: Overlayer }) => {
		if (contents.index !== h.spine || !contents.overlayer) return;
		const range = rangeFor(contents.doc, h);
		if (!range) return;
		contents.overlayer.add(h.id, range, Overlayer.highlight, { color: `var(--hl-${h.color}, #f2c94c)` });
	};
	const drawAll = () => {
		for (const c of renderer.getContents()) {
			for (const h of highlights) drawOne(h, c);
		}
	};
	view.addEventListener('create-overlay', () => queueMicrotask(drawAll));
	view.addEventListener('show-annotation', (e) => {
		events.onHighlightTap((e as CustomEvent<{ value: string }>).detail.value);
	});

	function watchSelection(doc: Document, index: number) {
		const check = () => {
			const sel = doc.getSelection();
			if (!sel || sel.isCollapsed || sel.rangeCount === 0) return events.onSelect(null);
			const range = sel.getRangeAt(0);
			const { quote, prefix, suffix } = quoteFromRange(doc, range);
			if (!quote) return events.onSelect(null);
			const frame = doc.defaultView?.frameElement?.getBoundingClientRect();
			const r = range.getBoundingClientRect();
			const dx = frame?.left ?? 0;
			const dy = frame?.top ?? 0;
			selectedDoc = doc;
			events.onSelect({
				spine: index,
				...rangeContext(range, language),
				quote,
				prefix,
				suffix,
				rect: { top: r.top + dy, bottom: r.bottom + dy, left: r.left + dx, right: r.right + dx }
			});
		};
		// Espera o gesto acabar: selectionchange dispara a cada arrasto.
		let timer: ReturnType<typeof setTimeout> | undefined;
		doc.addEventListener('selectionchange', () => {
			clearTimeout(timer);
			timer = setTimeout(check, 250);
		});
	}

	view.addEventListener('load', (e) => {
		const { doc, index } = (e as CustomEvent<{ doc: Document; index: number }>).detail;
		watchSelection(doc, index);
		doc.addEventListener('keydown', (k) => events.onKey(k));
		doc.addEventListener('click', (c) => {
			if (c.defaultPrevented || (c.target as Element | null)?.closest?.('a[href]')) return;
			if (!doc.getSelection()?.isCollapsed) return;
			const frame = doc.defaultView?.frameElement?.getBoundingClientRect();
			const x = (frame?.left ?? 0) + c.clientX;
			const w = window.innerWidth;
			const edge = edgeFor(w);
			if (x >= w * edge && x <= w * (1 - edge)) {
				const hit = wordAt(doc, c.clientX, c.clientY, language);
				if (hit) {
					const r = hit.getBoundingClientRect();
					const dx = frame?.left ?? 0;
					const dy = frame?.top ?? 0;
					events.onWordTap({
						text: hit.toString(),
						...rangeContext(hit, language),
						rect: { top: r.top + dy, bottom: r.bottom + dy, left: r.left + dx, right: r.right + dx }
					});
					return;
				}
			}
			events.onTap(x < w * edge ? 'left' : x > w * (1 - edge) ? 'right' : 'middle');
		});
	});

	return {
		toc: flattenToc(view.book.toc, (href) => view.resolveNavigation(href)?.index ?? 0),
		pageOfSpine: (spine) => paging.pageAt(spine, 0),
		totalPages: () => paging.totalPages,
		goToPage: async (page) => {
			const { index, fraction } = paging.locatePage(page);
			await renderer.goTo({ index, anchor: fraction });
		},
		goToFraction: async (f) => {
			const { index, fraction } = paging.locateFraction(f);
			await renderer.goTo({ index, anchor: fraction });
		},
		language,
		goToHref: async (href) => {
			await view.goTo(href);
		},
		goToPosition: async (spine, chapterFraction) => {
			const last = view.book.sections.length - 1;
			const index = Math.max(0, Math.min(spine, last));
			await renderer.goTo({ index, anchor: Math.max(0, Math.min(1, chapterFraction)) });
		},
		start: () => view.init({ showTextStart: false }),
		prev: () => view.prev(),
		next: () => view.next(),
		goLeft: () => view.goLeft(),
		goRight: () => view.goRight(),
		setStyles: (css) => renderer.setStyles?.(css),
		setLayout,
		goToHighlight: async (h) => {
			await renderer.goTo({ index: h.spine, anchor: (doc: Document) => rangeFor(doc, h) ?? doc.body });
		},
		setHighlights: (list) => {
			for (const c of renderer.getContents()) {
				for (const h of highlights) c.overlayer?.remove(h.id);
			}
			highlights = list;
			drawAll();
		},
		clearSelection: () => {
			selectedDoc?.getSelection()?.removeAllRanges();
			selectedDoc = null;
		},
		destroy: () => {
			view.close();
			view.remove();
		}
	};
}

const fontFaces = (origin: string) =>
	[
		['Linguetta Literata', 'literata-latin-400-normal', 400, 'normal'],
		['Linguetta Literata', 'literata-latin-400-italic', 400, 'italic'],
		['Linguetta Literata', 'literata-latin-700-normal', 700, 'normal'],
		['Linguetta Literata', 'literata-latin-700-italic', 700, 'italic'],
		['Linguetta Inter', 'inter-latin-400-normal', 400, 'normal'],
		['Linguetta Inter', 'inter-latin-700-normal', 700, 'normal'],
		['Linguetta Atkinson', 'atkinson-hyperlegible-latin-400-normal', 400, 'normal'],
		['Linguetta Atkinson', 'atkinson-hyperlegible-latin-700-normal', 700, 'normal']
	]
		.map(
			([family, file, weight, style]) =>
				`@font-face { font-family: '${family}'; src: url('${origin}/fonts/${file}.woff2') format('woff2'); font-weight: ${weight}; font-style: ${style}; font-display: swap; }`
		)
		.join('\n');

/** CSS que entra em cada capítulo: cores do tema, ajustes de leitura e o link do blend. */
export function bookCss(o: {
	ink: string;
	accent: string;
	hl: string;
	settings: ReaderSettings;
	dark: boolean;
	origin: string;
}): string {
	const s = o.settings;
	const stack = FONTS.find((f) => f.id === s.font)?.stack ?? FONTS[0].stack;
	// O color-scheme igual ao da página deixa o iframe transparente (diferente, o navegador
	// pinta um fundo opaco: branco no tema escuro).
	return `
${fontFaces(o.origin)}
:root { color-scheme: ${o.dark ? 'dark' : 'light'}; }
html {
	color: ${o.ink} !important;
	background: transparent !important;
	font-size: ${Math.round(FONT_STEPS[s.fontStep] * 100)}% !important;
	font-family: ${stack};
}
body { color: inherit !important; background: transparent !important; }
p, li, blockquote, dd { line-height: ${s.lineHeight}; text-align: ${s.justify ? 'justify' : 'left'}; hyphens: ${s.hyphenate ? 'auto' : 'manual'}; -webkit-hyphens: ${s.hyphenate ? 'auto' : 'manual'}; }
a[href^="#lb:"] {
	color: inherit !important;
	text-decoration: underline dotted ${o.accent} !important;
	text-decoration-thickness: 1.5px !important;
	text-underline-offset: 0.2em;
	cursor: pointer;
	border-radius: 3px;
	-webkit-tap-highlight-color: transparent;
}
a[href^="#lb:"]:hover, a[href^="#lb:"][data-lb-open] { background: ${o.hl}; }
::selection { background: ${o.hl}; }
`;
}
