// Grifos do leitor: cores, validação do que chega do navegador e como achar o trecho de novo
// no texto do capítulo (por citação + contexto, não por CFI: gerar o livro de novo muda os
// elementos, mas não o texto).

export const HIGHLIGHT_COLORS = ['amarelo', 'verde', 'azul', 'rosa'] as const;
export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number];

export const CONTEXT_CHARS = 48;

export type Highlight = {
	id: string;
	spine: number;
	quote: string;
	prefix: string;
	suffix: string;
	chapter: string;
	percent: number;
	color: HighlightColor;
	note: string;
	createdAt: string;
};

export type NewHighlight = Pick<
	Highlight,
	'spine' | 'quote' | 'prefix' | 'suffix' | 'chapter' | 'percent' | 'color' | 'note'
>;

export const isColor = (v: unknown): v is HighlightColor =>
	typeof v === 'string' && (HIGHLIGHT_COLORS as readonly string[]).includes(v);

const norm = (s: string) => s.replace(/\s+/g, ' ');

/** Valida o corpo de "criar grifo". */
export function parseNewHighlight(body: Record<string, unknown>): NewHighlight | null {
	const str = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '');
	const quote = norm(str(body.quote, 2000)).trim();
	const spine = body.spine;
	if (!quote || typeof spine !== 'number' || !Number.isInteger(spine) || spine < 0) return null;
	const percent = typeof body.percent === 'number' && Number.isFinite(body.percent) ? body.percent : 0;
	return {
		spine,
		quote,
		prefix: norm(str(body.prefix, 64)),
		suffix: norm(str(body.suffix, 64)),
		chapter: str(body.chapter, 200),
		percent: Math.min(100, Math.max(0, percent)),
		color: isColor(body.color) ? body.color : 'amarelo',
		note: str(body.note, 4000)
	};
}

/**
 * Onde o trecho começa no texto do capítulo (espaços já normalizados), ou -1. Com várias
 * ocorrências, vence a que mais combina com o contexto antes e depois.
 */
export function locateQuote(text: string, h: Pick<Highlight, 'quote' | 'prefix' | 'suffix'>): number {
	if (!h.quote) return -1;
	const found: number[] = [];
	for (let i = text.indexOf(h.quote); i !== -1; i = text.indexOf(h.quote, i + 1)) found.push(i);
	if (found.length <= 1) return found[0] ?? -1;
	let best = found[0];
	let bestScore = -1;
	for (const i of found) {
		const before = text.slice(Math.max(0, i - h.prefix.length), i);
		const after = text.slice(i + h.quote.length, i + h.quote.length + h.suffix.length);
		let score = 0;
		for (let k = 1; k <= Math.min(before.length, h.prefix.length); k++) {
			if (before[before.length - k] !== h.prefix[h.prefix.length - k]) break;
			score++;
		}
		for (let k = 0; k < Math.min(after.length, h.suffix.length); k++) {
			if (after[k] !== h.suffix[k]) break;
			score++;
		}
		if (score > bestScore) {
			best = i;
			bestScore = score;
		}
	}
	return best;
}

/** Texto do corpo com os espaços normalizados e, para cada caractere, o nó e o deslocamento. */
export function textIndex(root: Node, doc: Document) {
	const walker = doc.createTreeWalker(root, 4 /* NodeFilter.SHOW_TEXT */);
	let text = '';
	const map: { node: Text; offset: number }[] = [];
	let lastSpace = false;
	for (let n = walker.nextNode() as Text | null; n; n = walker.nextNode() as Text | null) {
		const value = n.nodeValue ?? '';
		for (let i = 0; i < value.length; i++) {
			const isSpace = /\s/.test(value[i]);
			if (isSpace && lastSpace) continue;
			text += isSpace ? ' ' : value[i];
			map.push({ node: n, offset: i });
			lastSpace = isSpace;
		}
	}
	return { text, map };
}

/** Intervalo no documento para um grifo, ou null se o texto não existe mais. */
export function rangeFor(doc: Document, h: Pick<Highlight, 'quote' | 'prefix' | 'suffix'>): Range | null {
	if (!doc.body) return null;
	const { text, map } = textIndex(doc.body, doc);
	const start = locateQuote(text, h);
	if (start < 0) return null;
	const a = map[start];
	const b = map[start + h.quote.length - 1];
	if (!a || !b) return null;
	const range = doc.createRange();
	range.setStart(a.node, a.offset);
	range.setEnd(b.node, b.offset + 1);
	return range;
}

/** Citação e contexto de uma seleção (espaços normalizados). */
export function quoteFromRange(doc: Document, range: Range) {
	const { text } = textIndex(doc.body, doc);
	const pre = doc.createRange();
	pre.selectNodeContents(doc.body);
	pre.setEnd(range.startContainer, range.startOffset);
	const raw = norm(range.toString());
	const quote = raw.trim();
	const from = norm(pre.toString()).length + (raw.length - raw.trimStart().length);
	return {
		quote,
		prefix: text.slice(Math.max(0, from - CONTEXT_CHARS), from),
		suffix: text.slice(from + quote.length, from + quote.length + CONTEXT_CHARS)
	};
}
