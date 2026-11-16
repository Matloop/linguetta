// A palavra que está num ponto do texto de um capítulo (o toque do leitor). Puro: o
// engine acha o nó e o deslocamento do toque; aqui se decide onde a palavra começa e acaba.

import { segmentWords } from '@linguetta/language';

/**
 * Os limites [start, end) da palavra de `text` que contém `offset` (ou encosta nele, como o
 * caret no fim da palavra), segundo o segmentador do idioma. null se cai em espaço,
 * pontuação ou número solto.
 */
export function wordBounds(
	text: string,
	offset: number,
	language?: string
): { start: number; end: number } | null {
	if (!text) return null;
	const at = Math.max(0, Math.min(offset, text.length));
	let found: { start: number; end: number } | null = null;
	for (const seg of segmentWords(text, language || 'en')) {
		if (!seg.isWord) continue;
		const start = seg.index;
		const end = seg.index + seg.segment.length;
		// O caret entre duas palavras (`a|b`) fica com a que começa ali; no fim, com a anterior.
		if (at >= start && at < end) return { start, end };
		if (at === end) found = { start, end };
	}
	return found;
}
