import { describe, expect, test } from 'bun:test';
import { parseMarkup, plainText } from './markup.ts';

const seg = (text: string, em = false, strong = false) => ({ text, em, strong });

describe('parseMarkup', () => {
	test('texto sem marcação vira um trecho', () => {
		expect(parseMarkup('Oi, tudo bem?')).toEqual([seg('Oi, tudo bem?')]);
	});

	test('*palavra* em itálico e **sí** em negrito', () => {
		expect(parseMarkup('*sono* = (eu) sou')).toEqual([seg('sono', true), seg(' = (eu) sou')]);
		expect(parseMarkup('**Cia**o!')).toEqual([seg('Cia', false, true), seg('o!')]);
	});

	test('negrito dentro de itálico', () => {
		expect(parseMarkup('*pro**nun**cia*')).toEqual([
			seg('pro', true),
			seg('nun', true, true),
			seg('cia', true)
		]);
	});

	test('marcador sem par fica como texto', () => {
		expect(parseMarkup('5 * 3')).toEqual([seg('5 * 3')]);
		expect(parseMarkup('a **b')).toEqual([seg('a **b')]);
		expect(parseMarkup('*a* e *b')).toEqual([seg('a', true), seg(' e *b')]);
	});

	test('HTML no conteúdo é só texto', () => {
		expect(parseMarkup('<b>x</b>')).toEqual([seg('<b>x</b>')]);
	});

	test('vazio', () => {
		expect(parseMarkup('')).toEqual([]);
	});
});

test('plainText tira a marcação', () => {
	expect(plainText('*Ne* retoma **algo**.')).toBe('Ne retoma algo.');
});
