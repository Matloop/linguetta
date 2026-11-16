// A frase real da página que contém o link do blend, para o encontro.

/** Teto da frase do encontro (encounters.sentence), em code points. */
export const MAX_SENTENCE = 500;

function segmenter(locale: string | undefined): Intl.Segmenter {
	try {
		return new Intl.Segmenter(locale || undefined, { granularity: 'sentence' });
	} catch {
		return new Intl.Segmenter(undefined, { granularity: 'sentence' });
	}
}

const collapse = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * A frase de `text` que contém o trecho [start, end) (o texto do link). Se o link
 * atravessa frases, junta as frases que ele toca. Espaços colapsados. Acima de 500
 * code points, fica uma janela em volta do link, cortada em fronteira de palavra.
 */
export function sentenceAround(
	raw: string,
	rawStart: number,
	rawEnd: number,
	locale?: string
): string {
	if (!raw) return '';
	// Quebra de linha no XHTML é só espaço; para o segmentador, seria fim de parágrafo.
	const { text, start, end } = squeeze(raw, rawStart, rawEnd);
	let from = 0;
	let to = text.length;
	let found = false;
	for (const seg of segmenter(locale).segment(text)) {
		const segEnd = seg.index + seg.segment.length;
		if (!found && segEnd > start) {
			from = seg.index;
			found = true;
		}
		if (found && segEnd >= Math.max(end, start + 1)) {
			to = segEnd;
			break;
		}
	}
	const sentence = text.slice(from, to);
	const chars = [...collapse(sentence)];
	if (chars.length <= MAX_SENTENCE) return chars.join('');
	return clipAround(sentence, start - from, end - from);
}

/**
 * A frase do trecho [start, end) e as vizinhas (anterior e seguinte, no mesmo bloco de
 * texto), para o dicionário de contexto. Cada uma até 500 code points.
 */
export function sentenceContext(
	raw: string,
	rawStart: number,
	rawEnd: number,
	locale?: string
): { sentence: string; before: string; after: string } {
	const sentence = sentenceAround(raw, rawStart, rawEnd, locale);
	const { text, start, end } = squeeze(raw, rawStart, rawEnd);
	const parts = [...segmenter(locale).segment(text)];
	const first = parts.findIndex((p) => p.index + p.segment.length > start);
	const last = parts.findIndex((p) => p.index + p.segment.length >= Math.max(end, start + 1));
	const cut = (s: string | undefined) => {
		const chars = [...collapse(s ?? '')];
		return chars.slice(0, MAX_SENTENCE).join('');
	};
	if (first < 0) return { sentence, before: '', after: '' };
	const lastIdx = last < 0 ? parts.length - 1 : last;
	return {
		sentence,
		before: cut(parts[first - 1]?.segment),
		after: cut(parts[lastIdx + 1]?.segment)
	};
}

/** Cada sequência de espaços vira um espaço; [start, end) acompanha. */
function squeeze(raw: string, rawStart: number, rawEnd: number) {
	rawStart = Math.max(0, Math.min(rawStart, raw.length));
	rawEnd = Math.max(rawStart, Math.min(rawEnd, raw.length));
	let text = '';
	let start = 0;
	let end = 0;
	for (let i = 0; i <= raw.length; i++) {
		if (i === rawStart) start = text.length;
		if (i === rawEnd) end = text.length;
		if (i === raw.length) break;
		const ws = /\s/.test(raw[i]);
		if (!ws) text += raw[i];
		else if (!text.endsWith(' ')) text += ' ';
	}
	return { text, start, end: Math.max(start, end) };
}

/** Janela de até 500 code points em volta de [start, end), sem cortar palavra no meio. */
function clipAround(sentence: string, start: number, end: number): string {
	const before = [...collapse(sentence.slice(0, start))];
	const link = [...collapse(sentence.slice(start, end))];
	const after = [...collapse(sentence.slice(end))];
	const gapBefore = /\s$/.test(sentence.slice(0, start)) ? 1 : 0;
	const gapAfter = /^\s/.test(sentence.slice(end)) ? 1 : 0;
	if (link.length >= MAX_SENTENCE) return link.slice(0, MAX_SENTENCE).join('').trim();
	const room = MAX_SENTENCE - link.length - gapBefore - gapAfter;
	let left = Math.min(before.length, Math.floor(room / 2));
	let right = Math.min(after.length, room - left);
	left = Math.min(before.length, room - right);
	let head = before.slice(before.length - left).join('');
	let tail = after.slice(0, right).join('');
	// Corta na fronteira de palavra quando a janela não pegou o lado inteiro.
	if (left < before.length) head = head.replace(/^\S*\s*/, '');
	if (right < after.length) tail = tail.replace(/\s*\S*$/, '');
	const out = `${head}${gapBefore ? ' ' : ''}${link.join('')}${gapAfter ? ' ' : ''}${tail}`;
	return collapse(out);
}

const BLOCKS = 'p, li, blockquote, dd, dt, td, th, h1, h2, h3, h4, h5, h6, figcaption, pre';

/** A frase em volta de um link na página do livro (o elemento vem do iframe do EPUB). */
export function linkSentence(a: Element, locale?: string): string {
	const block = a.closest(BLOCKS) ?? a.closest('div, section, body') ?? a.parentElement;
	if (!block) return collapse(a.textContent ?? '');
	const range = a.ownerDocument.createRange();
	range.setStart(block, 0);
	range.setEndBefore(a);
	const start = range.toString().length;
	const end = start + (a.textContent ?? '').length;
	return sentenceAround(block.textContent ?? '', start, end, locale);
}

/** O bloco de texto do intervalo e onde ele começa e termina nele. */
function rangeInBlock(range: Range): { text: string; start: number; end: number } | null {
	const node = range.startContainer;
	const el = node.nodeType === 1 ? (node as Element) : node.parentElement;
	const doc = range.startContainer.ownerDocument;
	if (!el || !doc) return null;
	const block = el.closest(BLOCKS) ?? el.closest('div, section, body') ?? el;
	const pre = doc.createRange();
	pre.setStart(block, 0);
	pre.setEnd(range.startContainer, range.startOffset);
	const start = pre.toString().length;
	return { text: block.textContent ?? '', start, end: start + range.toString().length };
}

/** A frase de uma seleção ou palavra tocada com a anterior e a seguinte. */
export function rangeContext(range: Range, locale?: string) {
	const at = rangeInBlock(range);
	if (!at) return { sentence: collapse(range.toString()), before: '', after: '' };
	return sentenceContext(at.text, at.start, at.end, locale);
}
