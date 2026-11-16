import { expect, test } from 'bun:test';
import { rangeSummary, swapSegments, type ChapterRow } from './book-ui.ts';

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

const ch = (spine: number, words: number): ChapterRow => ({ spine, title: `C${spine}`, words });

const chapters = [ch(0, 0), ch(1, 10000), ch(2, 6463), ch(3, 1000)];

test('resumo do intervalo ignora capítulos sem texto', () => {
	expect(rangeSummary(chapters, 0, 2)).toBe('2 capítulos, 16.463 palavras');
	expect(rangeSummary(chapters, 3, 3)).toBe('1 capítulo, 1.000 palavras');
});

