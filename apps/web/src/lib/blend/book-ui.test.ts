import { expect, test } from 'bun:test';
import { rangeProgress, rangeState, rangeSummary, swapSegments, type ChapterRow } from './book-ui.ts';

test('prévia: o texto vira trechos, com a troca no lugar da forma', () => {
	const text = 'A casa era grande.';
	const swap = (form: string, target: string) => ({
		form,
		target,
		translation: form,
		start: text.indexOf(form)
	});
	expect(swapSegments(text, [swap('casa', 'casa nuova'), swap('grande', 'grande!')])).toEqual([
		{ text: 'A ' },
		{ text: 'casa nuova', translation: 'casa' },
		{ text: ' era ' },
		{ text: 'grande!', translation: 'grande' },
		{ text: '.' }
	]);
	expect(swapSegments(text, [])).toEqual([{ text }]);
});

const ch = (spine: number, words: number, status: ChapterRow['status'] = 'pendente', partsDone = 0, parts = 0): ChapterRow => ({
	spine,
	title: `C${spine}`,
	words,
	status,
	partsDone,
	parts
});

const chapters = [ch(0, 0, 'feito'), ch(1, 10000, 'feito'), ch(2, 6463, 'pendente', 1, 2), ch(3, 1000)];

test('resumo do intervalo ignora capítulos sem texto', () => {
	expect(rangeSummary(chapters, 0, 2)).toBe('2 capítulos, 16.463 palavras');
	expect(rangeSummary(chapters, 3, 3)).toBe('1 capítulo, 1.000 palavras');
});

test('progresso pesado por palavras', () => {
	expect(rangeProgress(chapters, 1, 2)).toBeCloseTo((10000 + 6463 / 2) / 16463);
	expect(rangeProgress(chapters, 0, 0)).toBe(0);
});

test('estado', () => {
	expect(rangeState(chapters, 0, 3)).toBe('1 de 3 capítulos prontos');
	expect(rangeState(chapters, 1, 1)).toBe('1 capítulo pronto');
});
