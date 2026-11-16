import { describe, expect, test } from 'bun:test';
import { chapterDoc } from './book.ts';
import { openEpub } from './epub.ts';
import { OPEN_FILTER, parseLexicon, passesFilter, rankFrequency, ranksOf, scanChapter } from './lexicon.ts';
import { LADDER } from './ladder.ts';
import { FIXTURE } from './test-lexicon.ts';
import { makeEpub } from './test-epub.ts';

const docOf = (body: string) => {
	const epub = openEpub(makeEpub([{ title: 'I', body }]));
	return chapterDoc(epub, epub.spine[1])!;
};

const at = (step: number, doc: ReturnType<typeof docOf>) =>
	scanChapter(doc, FIXTURE, 'pt').filter((c) => passesFilter(c, LADDER[step].filter));
const forms = (doc: ReturnType<typeof docOf>, step = 0) =>
	at(step, doc).map((c) => [c.para, c.form, c.target, c.lemma, c.translation]);

describe('léxico', () => {
	test('parseLexicon aceita o formato v2 e recusa o resto', () => {
		const ok = parseLexicon(JSON.parse(JSON.stringify(FIXTURE)));
		expect(ok.forms.riacho[0][2]).toBe('ruscello');
		expect(ok.forms.para[0][5]).toBe(3);
		expect(() => parseLexicon({ ...FIXTURE, version: 1 })).toThrow();
		expect(() => parseLexicon({ version: 2, source: 'pt', target: 'it', forms: { a: [['n', 'x']] } })).toThrow();
		// v1 (5 colunas, sem tier) não é aceito.
		expect(() => parseLexicon({ version: 2, source: 'pt', target: 'it', forms: { a: [['n', 'x', 'y', 'z', 5]] } })).toThrow();
		expect(() => parseLexicon({ version: 2, source: 'pt', target: 'it', forms: { a: [['n', 'x', 'y', 'z', 5, 4]] } })).toThrow();
		expect(() => parseLexicon({ version: 2, source: 'pt', target: 'it', forms: { a: [['q', 'x', 'y', 'z', 5, 1]] } })).toThrow();
	});

	test('candidatas: forma exata, alvo, lema e sentido; a ordem é a do posto', () => {
		const doc = docOf('<p>O riacho passava ao lado da janela. Olhou os riachos.</p>');
		expect(forms(doc)).toEqual([
			[0, 'Olhou', 'Guardò', 'guardare', 'olhar'], // começo de frase: alvo com maiúscula
			[0, 'janela', 'finestra', 'finestra', 'janela'],
			[0, 'riacho', 'ruscello', 'ruscello', 'riacho'],
			[0, 'riachos', 'ruscelli', 'ruscello', 'riacho']
		]);
	});

	test('degrau 0 pula comuns, curtas, de ligação, números, hífen, nome próprio e troca igual', () => {
		const doc = docOf('<p>O tempo era grande. A casa fria, o rio, o mar, o 1mar e o mar-azul. Disse Mar e o mar para.</p>');
		// tempo e grande são comuns, casa é igual, rio é curto, Mar é nome próprio, para é de ligação.
		expect(forms(doc).map((r) => r[1])).toEqual(['fria']);
	});

	test('cada degrau só acrescenta candidatas', () => {
		const doc = docOf('<p>A pedra, a estrada, a colina, a cidade, o rio, como a janela. Para onde? O tempo.</p>');
		const sets = LADDER.map((_, i) => at(i, doc).map((c) => c.form));
		sets.slice(1).forEach((s, k) => sets[k].forEach((f) => expect(s).toContain(f)));
		expect(sets[0]).toEqual(['cidade', 'janela']);
		expect(sets[4]).toContain('pedra'); // posto 250 passa com commonSkip 100
		expect(sets[4]).not.toContain('estrada'); // posto 90
		expect(sets[5]).toContain('estrada');
		expect(sets[5]).not.toContain('colina');
		expect(sets[6]).toContain('colina');
		expect(sets[6]).not.toContain('como');
		expect(sets[7]).toEqual(expect.arrayContaining(['como', 'Para', 'rio']));
	});

	test('o filtro aberto deixa tudo passar', () => {
		expect(OPEN_FILTER.maxTier).toBe(3);
		expect(passesFilter({ form: 'rio', tier: 3, rank: 5 }, OPEN_FILTER)).toBe(true);
	});

	test('posto 0 (desconhecido) entra no fim do parágrafo e não vira posto', () => {
		const doc = docOf('<p>A casa cheia e a janela fria.</p><p>O barco.</p>');
		expect(forms(doc).map((r) => r[1])).toEqual(['fria', 'janela', 'cheia', 'barco']);
		const ranks = ranksOf(at(0, doc));
		expect(ranks.get('fredda')).toBe(1500);
		expect(ranks.has('piena')).toBe(false);
		expect(rankFrequency(ranks).rank('Finestra')).toBe(1800);
		expect(rankFrequency(ranks).rank('piena')).toBeNull();
	});
});
