import { describe, expect, test } from 'bun:test';
import { countWords } from '@linguetta/language';
import { MAX_COVERAGE, selectSwaps, type Relax, type SelectInput, type Swap } from './select.ts';

const RELAX: Relax = { gap: 6, maxShare: 0.5, extraMin: 1.5 };
const pick = (input: Omit<SelectInput<Swap>, 'relax'> & { relax?: Partial<Relax> }) =>
	selectSwaps({ ...input, relax: { ...RELAX, ...input.relax } });

const para = (i: number) => `parágrafo número ${i} tem a palavra casa e mais algumas outras aqui`;
const cand = (text: string, form: string, lemma: string): Swap => ({
	form,
	target: lemma,
	lemma,
	start: text.indexOf(form)
});

describe('escolha das trocas', () => {
	const texts = Array.from({ length: 40 }, (_, i) => para(i));
	const words = texts.reduce((n, t) => n + countWords(t, 'pt'), 0);

	test('sem cobertura, nada', () => {
		const out = pick({
			texts,
			candidates: texts.map((t) => [cand(t, 'casa', 'casa')]),
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0
		});
		expect(out.flat()).toHaveLength(0);
	});

	test('cobertura baixa: espaçado, uma por parágrafo, perto da cota', () => {
		const coverage = 0.02;
		const out = pick({
			texts,
			candidates: texts.map((t, i) => [cand(t, 'palavra', `p${i}`)]),
			sourceLang: 'pt',
			targetLang: 'it',
			coverage
		});
		const chosen = out.flatMap((a, i) => (a.length ? [i] : []));
		expect(chosen.length).toBe(Math.round(coverage * words));
		expect(out.every((a) => a.length <= 1)).toBe(true);
		const gaps = chosen.slice(1).map((v, k) => v - chosen[k]);
		expect(Math.min(...gaps)).toBeGreaterThanOrEqual(2);
	});

	test('o mesmo lema não volta antes de relax.gap parágrafos', () => {
		const out = pick({
			texts,
			candidates: texts.map((t) => [cand(t, 'casa', 'casa')]),
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.2
		});
		const chosen = out.flatMap((a, i) => (a.length ? [i] : []));
		expect(chosen.length).toBeGreaterThan(1);
		chosen.slice(1).forEach((v, k) => expect(v - chosen[k]).toBeGreaterThanOrEqual(RELAX.gap));
	});

	test('o máximo do pedido é 50%', () => {
		expect(MAX_COVERAGE).toBe(0.5);
	});

	test('o teto do parágrafo é maxShare das palavras dele', () => {
		const t = ['um dois três quatro cinco seis sete oito nove dez'];
		const out = pick({
			texts: t,
			candidates: [t[0].split(' ').map((w) => cand(t[0], w, `x${w}`))],
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.5
		});
		expect(out[0]).toHaveLength(5);
	});

	test('item do banco vem antes da ordem das candidatas', () => {
		const t = [para(0)];
		const out = pick({
			texts: t,
			candidates: [[cand(t[0], 'palavra', 'parola'), cand(t[0], 'casa', 'casa')]],
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.05,
			preferWords: ['Casa']
		});
		expect(out[0].map((s) => s.lemma)).toEqual(['casa']);
	});

	test('sem banco, a ordem das candidatas desempata', () => {
		const t = [para(0)];
		const out = pick({
			texts: t,
			candidates: [[cand(t[0], 'palavra', 'parola'), cand(t[0], 'casa', 'casa')]],
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.05
		});
		expect(out[0].map((s) => s.lemma)).toEqual(['parola']);
	});

	test('trocas no mesmo parágrafo não se sobrepõem e saem em ordem', () => {
		const t = ['de novo ele voltou para casa de novo'];
		const out = pick({
			texts: t,
			candidates: [
				[
					{ form: 'casa', target: 'casa', lemma: 'casa', start: 26 },
					{ form: 'de novo', target: 'di nuovo', lemma: 'di nuovo', start: 0 },
					{ form: 'novo', target: 'nuovo', lemma: 'nuovo', start: 3 }
				]
			],
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.5
		});
		const starts = out[0].map((s) => s.start);
		expect(starts).toEqual([...starts].sort((a, b) => a - b));
		expect(out[0].some((s) => s.lemma === 'nuovo') && out[0].some((s) => s.lemma === 'di nuovo')).toBe(
			false
		);
	});

	describe('filtros afrouxados', () => {
		const same = texts.map((t) => [cand(t, 'casa', 'casa')]);
		const run = (relax: Partial<Relax>, coverage = 0.3) =>
			pick({ texts, candidates: same, sourceLang: 'pt', targetLang: 'it', coverage, relax });
		const total = (o: Swap[][]) => o.flat().length;

		test('gap menor deixa o mesmo lema voltar mais perto e nunca troca menos', () => {
			const counts = [6, 3, 1, 0].map((gap) => total(run({ gap })));
			counts.slice(1).forEach((n, k) => expect(n).toBeGreaterThanOrEqual(counts[k]));
			expect(counts[3]).toBeGreaterThan(counts[0]);
			const chosen = run({ gap: 3 }).flatMap((a, i) => (a.length ? [i] : []));
			chosen.slice(1).forEach((v, k) => expect(v - chosen[k]).toBeGreaterThanOrEqual(3));
		});

		test('maxShare maior deixa mais trocas num parágrafo', () => {
			const t = ['um dois três quatro cinco seis sete oito nove dez'];
			const words = t[0].split(' ').map((w) => cand(t[0], w, `x${w}`));
			const n = (maxShare: number) =>
				pick({ texts: t, candidates: [words], sourceLang: 'pt', targetLang: 'it', coverage: 0.5, relax: { maxShare } })[0]
					.length;
			expect(n(0.2)).toBe(2);
			expect(n(0.34)).toBe(3);
			expect(n(0.5)).toBe(5);
		});

		test('extraMin barra a segunda troca com palavra de posto desconhecido', () => {
			const t = ['um dois três quatro cinco seis sete oito nove dez'];
			const words = t[0].split(' ').map((w) => cand(t[0], w, `x${w}`));
			const n = (extraMin: number) =>
				pick({
					texts: t,
					candidates: [words],
					sourceLang: 'pt',
					targetLang: 'it',
					coverage: 0.5,
					frequency: { rank: () => null },
					relax: { extraMin }
				})[0].length;
			expect(n(1.5)).toBe(1);
			expect(n(0)).toBe(5);
		});
	});

	test('o tier menor ganha dentro do mesmo degrau, mesmo com frequência pior', () => {
		const t = [para(0)];
		const good = { ...cand(t[0], 'palavra', 'parola'), tier: 0 };
		const bad = { ...cand(t[0], 'casa', 'casa'), tier: 2 };
		const out = pick({
			texts: t,
			candidates: [[bad, good]],
			sourceLang: 'pt',
			targetLang: 'it',
			coverage: 0.05,
			frequency: { rank: (w) => (w === 'casa' ? 100 : 20000) }
		});
		expect(out[0].map((s) => s.lemma)).toEqual(['parola']);
	});
});
