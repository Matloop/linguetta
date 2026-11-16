// Textos e contas da tela /livros. Puro.

import { plural } from '#lib/decks-ui.ts';

export interface ChapterRow {
	spine: number;
	title: string;
	words: number;
}

/** O que o modal do blend recebe de GET /livros/[id]. */
export interface BookPayload {
	book: {
		id: string;
		title: string;
		author: string | null;
		bookLanguage: string;
		language: string;
		coverage: number;
		rangeFrom: number;
		rangeTo: number;
		onDevice: boolean;
		version: number | null;
	};
	chapters: ChapterRow[];
}

const nf = new Intl.NumberFormat('pt-BR');

/** Capítulos com texto dentro do intervalo (o sumário e páginas vazias ficam de fora). */
export function inRange<T extends { spine: number; words: number }>(
	chapters: readonly T[],
	from: number,
	to: number
): T[] {
	return chapters.filter((c) => c.spine >= from && c.spine <= to && c.words > 0);
}

/** "13 capítulos, 16.463 palavras". */
export function rangeSummary(chapters: readonly ChapterRow[], from: number, to: number): string {
	const list = inRange(chapters, from, to);
	const words = list.reduce((n, c) => n + c.words, 0);
	return `${plural(list.length, 'capítulo', 'capítulos')}, ${nf.format(words)} ${words === 1 ? 'palavra' : 'palavras'}`;
}

export type PreviewSegment = { text: string; translation?: string };

/** Texto da prévia em trechos: as trocas (em ordem, sem sobrepor) no lugar da forma. */
export function swapSegments(
	text: string,
	swaps: readonly { start: number; form: string; target: string; translation: string }[]
): PreviewSegment[] {
	const out: PreviewSegment[] = [];
	let at = 0;
	for (const s of swaps) {
		if (s.start > at) out.push({ text: text.slice(at, s.start) });
		out.push({ text: s.target, translation: s.translation });
		at = s.start + s.form.length;
	}
	if (at < text.length || out.length === 0) out.push({ text: text.slice(at) });
	return out;
}
