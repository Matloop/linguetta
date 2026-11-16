import { describe, expect, test } from 'bun:test';
import { locateQuote, parseNewHighlight } from './highlights.ts';

describe('locateQuote', () => {
	const text = 'o gato viu o rato. depois o gato dormiu. o gato comeu.';
	test('acha a única ocorrência', () => {
		expect(locateQuote(text, { quote: 'rato', prefix: '', suffix: '' })).toBe(text.indexOf('rato'));
	});
	test('com várias, o contexto decide', () => {
		const i = locateQuote(text, { quote: 'o gato', prefix: 'depois ', suffix: ' dormiu' });
		expect(i).toBe(text.indexOf('depois o gato') + 'depois '.length);
		const j = locateQuote(text, { quote: 'o gato', prefix: 'dormiu. ', suffix: ' comeu' });
		expect(j).toBe(text.lastIndexOf('o gato'));
	});
	test('sumiu: -1', () => {
		expect(locateQuote(text, { quote: 'cachorro', prefix: '', suffix: '' })).toBe(-1);
	});
});

describe('parseNewHighlight', () => {
	test('exige citação e spine inteiro', () => {
		expect(parseNewHighlight({ quote: '  ', spine: 1 })).toBeNull();
		expect(parseNewHighlight({ quote: 'a', spine: 1.5 })).toBeNull();
	});
	test('cor inválida vira amarelo e espaços se normalizam', () => {
		const h = parseNewHighlight({ quote: 'a\n  b', spine: 0, color: 'roxo', percent: 150 });
		expect(h?.quote).toBe('a b');
		expect(h?.color).toBe('amarelo');
		expect(h?.percent).toBe(100);
	});
});
