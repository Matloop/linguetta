import { describe, expect, test } from 'bun:test';
import { wordBounds } from './word-hit.ts';

const at = (text: string, offset: number, lang = 'it') => {
	const b = wordBounds(text, offset, lang);
	return b ? text.slice(b.start, b.end) : null;
};

describe('wordBounds', () => {
	test('acha a palavra no meio, no começo e no fim', () => {
		const t = 'Don Vito è un uomo.';
		expect(at(t, 5)).toBe('Vito');
		expect(at(t, 0)).toBe('Don');
		expect(at(t, 16)).toBe('uomo');
		expect(at(t, 18)).toBe('uomo');
	});
	test('pontuação e espaço não são palavra', () => {
		expect(at('ciao, mondo', 4)).toBe('ciao');
		expect(at('ciao, mondo', 5)).toBeNull();
		expect(at('a  ,  b', 3)).toBeNull();
		expect(at('', 0)).toBeNull();
	});
	test('elisão do italiano separa o artigo', () => {
		expect(at("l'amico", 4)).toBe('amico');
	});
	test('hífen no meio mantém a palavra inteira', () => {
		expect(at('dammi-lo ora', 2, 'it')).not.toBeNull();
	});
	test('acentos e aspas tipográficas', () => {
		expect(at('«Perché» no', 3)).toBe('Perché');
	});
});
