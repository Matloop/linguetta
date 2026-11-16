import { describe, expect, test } from 'bun:test';
import { MAX_SENTENCE, sentenceAround, sentenceContext } from './sentence';

/** Posição do trecho `form` em `text` (a primeira ocorrência). */
function around(text: string, form: string, locale = 'pt') {
	const start = text.indexOf(form);
	return sentenceAround(text, start, start + form.length, locale);
}

describe('sentenceAround', () => {
	const text =
		'Era tarde. Ela ficou olhando para il mare e começou a sorridere. Depois foi embora!';

	test('a frase que contém o link', () => {
		expect(around(text, 'il mare')).toBe('Ela ficou olhando para il mare e começou a sorridere.');
		expect(around(text, 'Era')).toBe('Era tarde.');
		expect(around(text, 'embora')).toBe('Depois foi embora!');
	});

	test('colapsa espaços e quebras de linha', () => {
		expect(around('Ela  ficou\n   olhando para\til mare.', 'il mare')).toBe(
			'Ela ficou olhando para il mare.'
		);
	});

	test('link que atravessa frases junta as duas', () => {
		const t = 'Primeira frase. Segunda frase. Terceira.';
		const start = t.indexOf('frase.');
		const end = t.indexOf('Segunda') + 'Segunda'.length;
		expect(sentenceAround(t, start, end, 'pt')).toBe('Primeira frase. Segunda frase.');
	});

	test('texto vazio ou posição fora do texto', () => {
		expect(sentenceAround('', 0, 0)).toBe('');
		expect(sentenceAround('Só uma.', 50, 60, 'pt')).toBe('Só uma.');
	});

	test('frase longa vira janela de até 500 code points em volta do link', () => {
		const word = 'palavra';
		const left = Array.from({ length: 80 }, () => word).join(' ');
		const right = Array.from({ length: 80 }, () => word).join(' ');
		const long = `${left} sorridere ${right}.`;
		const out = around(long, 'sorridere');
		expect([...out].length).toBeLessThanOrEqual(MAX_SENTENCE);
		expect(out).toContain(' sorridere ');
		// Não corta palavra no meio.
		expect(out.split(' ').every((w) => w === word || w === 'sorridere')).toBe(true);
	});

	test('conta code points, não unidades UTF-16', () => {
		const emoji = Array.from({ length: 300 }, () => '😀').join(' ');
		const out = around(`${emoji} gatto ${emoji}`, 'gatto');
		expect([...out].length).toBeLessThanOrEqual(MAX_SENTENCE);
		expect(out).toContain('gatto');
	});
});

describe('sentenceContext', () => {
	const raw = 'Prima frase. Qui la parola sta. Ultima frase.';
	test('devolve a frase tocada com a anterior e a seguinte', () => {
		const start = raw.indexOf('parola');
		expect(sentenceContext(raw, start, start + 6, 'it')).toEqual({
			sentence: 'Qui la parola sta.',
			before: 'Prima frase.',
			after: 'Ultima frase.'
		});
	});
	test('sem vizinhas nas pontas', () => {
		expect(sentenceContext(raw, 0, 5, 'it')).toMatchObject({ before: '', after: 'Qui la parola sta.' });
		const end = raw.length - 3;
		expect(sentenceContext(raw, end, end + 2, 'it')).toMatchObject({ after: '' });
	});
	test('seleção que atravessa frases junta e deixa as de fora como contexto', () => {
		const start = raw.indexOf('frase.');
		const to = raw.indexOf('Qui') + 3;
		const r = sentenceContext(raw, start, to, 'it');
		expect(r.sentence).toBe('Prima frase. Qui la parola sta.');
		expect(r.after).toBe('Ultima frase.');
	});
});
