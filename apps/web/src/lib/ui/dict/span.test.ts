import { describe, expect, test } from 'bun:test';
import { clampSpan, spanText, splitLine } from './span.ts';

const none = new Set<number>();
// "Ti", " ", "amo", " ", "davvero", "!"
const tokens = ['Ti', ' ', 'amo', ' ', 'davvero', '!'].map((text) => ({ text }));

describe('clampSpan', () => {
	test('toque: uma palavra só', () => {
		expect(clampSpan(2, 2, none)).toEqual({ from: 2, to: 2 });
	});

	test('arraste para os dois lados', () => {
		expect(clampSpan(0, 4, none)).toEqual({ from: 0, to: 4 });
		expect(clampSpan(4, 0, none)).toEqual({ from: 0, to: 4 });
	});

	test('para antes de uma lacuna', () => {
		expect(clampSpan(0, 6, new Set([4]))).toEqual({ from: 0, to: 3 });
		expect(clampSpan(6, 0, new Set([2]))).toEqual({ from: 3, to: 6 });
	});

	test('com as palavras, a ponta não fica num espaço', () => {
		const words = new Set([0, 2, 4, 6]);
		expect(clampSpan(0, 6, new Set([4]), words)).toEqual({ from: 0, to: 2 });
		expect(clampSpan(6, 0, new Set([2]), words)).toEqual({ from: 4, to: 6 });
	});
});

describe('spanText e splitLine', () => {
	test('o texto do trecho, com o espaço do meio', () => {
		expect(spanText(tokens, { from: 0, to: 2 })).toBe('Ti amo');
		expect(spanText(tokens, { from: 2, to: 3 })).toBe('amo');
	});

	test('a linha em antes / trecho / depois', () => {
		expect(splitLine(tokens, { from: 2, to: 4 })).toEqual({
			before: 'Ti ',
			mark: 'amo davvero',
			after: '!'
		});
	});
});
