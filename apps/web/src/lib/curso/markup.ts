// Marcação mínima do texto do curso (ver types.ts): *it* → itálico, **x** → negrito.
// Vira uma lista de trechos para a tela renderizar sem {@html}. Marcador sem par fica
// como texto.

import { segmentWords } from '@linguetta/language';

export interface Segment {
	text: string;
	em: boolean;
	strong: boolean;
}

export function parseMarkup(source: string): Segment[] {
	const tokens = source.split(/(\*\*|\*)/);
	// Primeiro acha os pares; marcador sozinho no fim não abre nada.
	const paired = new Set<number>();
	const open: Record<string, number> = { '*': -1, '**': -1 };
	tokens.forEach((t, i) => {
		if (t !== '*' && t !== '**') return;
		if (open[t] >= 0) {
			paired.add(open[t]).add(i);
			open[t] = -1;
		} else open[t] = i;
	});

	const out: Segment[] = [];
	let em = false;
	let strong = false;
	tokens.forEach((t, i) => {
		if (paired.has(i)) {
			if (t === '*') em = !em;
			else strong = !strong;
			return;
		}
		if (!t) return;
		const last = out.at(-1);
		if (last && last.em === em && last.strong === strong) last.text += t;
		else out.push({ text: t, em, strong });
	});
	return out;
}

/** O texto sem marcação (para fichas, rótulos e comparações). */
export function plainText(source: string): string {
	return parseMarkup(source)
		.map((s) => s.text)
		.join('');
}

/** Um token do texto renderizado: palavra ou separador, com os trechos de estilo dele. */
export interface RichToken {
	text: string;
	word: boolean;
	/** O token partido pela marcação ("**Cia**o" = negrito "Cia" + "o"). */
	pieces: Segment[];
}

/**
 * O texto com marcação em palavras e separadores do idioma, para tocar no dicionário.
 * As palavras saem do texto renderizado (sem os asteriscos); cada uma guarda o estilo.
 */
export function richTokens(source: string, language: string): RichToken[] {
	const segments = parseMarkup(source);
	const out: RichToken[] = [];
	let seg = 0;
	let offset = 0;
	for (const w of segmentWords(segments.map((s) => s.text).join(''), language)) {
		const pieces: Segment[] = [];
		let rest = w.segment;
		while (rest && seg < segments.length) {
			const s = segments[seg];
			const take = s.text.slice(offset, offset + rest.length);
			pieces.push({ ...s, text: take });
			rest = rest.slice(take.length);
			offset += take.length;
			if (offset >= s.text.length) {
				seg++;
				offset = 0;
			}
		}
		out.push({ text: w.segment, word: w.isWord, pieces });
	}
	return out;
}
