import { describe, expect, test } from 'bun:test';
import { strFromU8, unzipSync } from 'fflate';
import {
	buildBlend,
	chapterDoc,
	chapterInfos,
	achievableByStep,
	blendPreview,
	previewParagraph,
	type Candidate
} from './book.ts';
import { openEpub } from './epub.ts';
import { LADDER, LAST_STEP, stepFor } from './ladder.ts';
import { FIXTURE } from './test-lexicon.ts';
import { makeEpub } from './test-epub.ts';

const c = (para: number, form: string, target: string, lemma = target): Candidate => ({
	para,
	form,
	target,
	lemma,
	translation: form,
	note: ''
});

describe('livro', () => {
	const bytes = makeEpub([
		{ title: 'Capítulo I', body: '<p>A casa era grande e o riacho passava perto.</p><p>Então Simão Bacamarte olhou a <a href="n.xhtml">casa</a>.</p>' },
		{ title: 'Capítulo II', body: '<p>No dia seguinte a casa amanheceu fria.</p>' }
	]);

	test('abre metadados, spine e títulos', () => {
		const epub = openEpub(bytes);
		expect(epub.title).toBe('O alienista');
		expect(epub.author).toBe('Machado de Assis');
		expect(epub.language).toBe('pt-BR');
		expect(epub.spine.map((s) => s.nav)).toEqual([true, false, false]);
		const infos = chapterInfos(epub, 'pt');
		expect(infos.map((i) => i.title)).toEqual(['Sumário', 'Capítulo I', 'Capítulo II']);
		expect(infos[0].words).toBe(0);
		expect(infos[1].words).toBeGreaterThan(10);
	});

	test('gera EPUB válido só com os links escolhidos', () => {
		const epub = openEpub(bytes);
		const { bytes: out, links, swaps, words } = buildBlend(epub, [1], {
			bookLanguage: 'pt',
			language: 'it',
			coverage: 0.1,
			lexicon: FIXTURE
		});
		// "casa" é igual nas duas línguas e "Simão" é nome próprio: só "riacho" e "olhou" trocam.
		expect(links).toBe(2);
		expect(swaps).toBe(2);
		expect(words).toBeGreaterThan(10);
		const files = unzipSync(out);
		expect(Object.keys(files)[0]).toBe('mimetype');
		const ch1 = strFromU8(files['OEBPS/text/c0.xhtml']);
		expect(ch1).toContain('<a href="#lb:ruscello|riacho">ruscello</a>');
		expect(ch1).toContain('<a href="#lb:guardare|olhar">guardò</a>');
		expect(ch1).not.toContain('Simone');
		expect(ch1).toContain('<h1>Capítulo I</h1>');
		// Fora do intervalo: os bytes não mudam.
		expect(strFromU8(files['OEBPS/text/c1.xhtml'])).toBe(strFromU8(epub.files['OEBPS/text/c1.xhtml']));
		// Reabre o resultado.
		expect(openEpub(out).spine).toHaveLength(3);
	});

	test('sem como chegar ao pedido, usa o degrau mais frouxo e diz o que liberou', () => {
		const built = buildBlend(openEpub(bytes), [1], { bookLanguage: 'pt', language: 'it', coverage: 0.5, lexicon: FIXTURE });
		expect(built.swaps).toBe(2);
		expect(built.step).toBe(LAST_STEP);
		expect(built.relaxed).toEqual([...LADDER[LAST_STEP].relaxed]);
	});
});

describe('escada', () => {
	const body = Array.from({ length: 12 }, () => '<p>O riacho e a cidade perto da colina como a pedra.</p>').join('');
	const epub = openEpub(makeEpub([{ title: 'I', body }]));
	const o = { bookLanguage: 'pt', language: 'it', lexicon: FIXTURE };
	const reach = achievableByStep(epub, [1], o);

	test('o alcance por degrau nunca diminui e o último passa do primeiro', () => {
		expect(reach.fractions).toHaveLength(LADDER.length);
		reach.fractions.slice(1).forEach((f, k) => expect(f).toBeGreaterThanOrEqual(reach.fractions[k]));
		expect(reach.fractions[LAST_STEP]).toBeGreaterThan(reach.fractions[0]);
		expect(reach.fractions[0]).toBeGreaterThan(0);
	});

	test('pedido pequeno fica no degrau 0, sem liberar nada', () => {
		const built = buildBlend(epub, [1], { ...o, coverage: 0.02 });
		expect(built.step).toBe(0);
		expect(built.relaxed).toEqual([]);
	});

	test('cada pedido usa o primeiro degrau que o alcança, e o resultado fecha a cota', () => {
		for (let step = 1; step <= LAST_STEP; step++) {
			if (reach.fractions[step] <= reach.fractions[step - 1] + 0.005) continue;
			// Um pouco acima do que o degrau anterior alcança.
			const coverage = Math.min(0.5, reach.fractions[step - 1] + 0.004);
			const built = buildBlend(epub, [1], { ...o, coverage });
			expect(built.step).toBeGreaterThanOrEqual(step);
			expect(built.step).toBe(stepFor(reach.fractions, coverage));
			expect(built.relaxed).toEqual([...LADDER[built.step].relaxed]);
			expect(built.swaps / built.words).toBeGreaterThanOrEqual(coverage - 1 / built.words);
		}
	});

	test('começar de um degrau acima do necessário só usa filtros mais frouxos', () => {
		const built = buildBlend(epub, [1], { ...o, coverage: 0.02, startStep: 3 });
		expect(built.step).toBe(3);
		expect(built.relaxed).toEqual([...LADDER[3].relaxed]);
	});

	test('o degrau 6 aceita a tradução não confirmada e o 0 não', () => {
		const text = (coverage: number, step: number) =>
			strFromU8(unzipSync(buildBlend(epub, [1], { ...o, coverage, startStep: step }).bytes)['OEBPS/text/c0.xhtml']);
		expect(text(0.02, 0)).not.toContain('collina');
		expect(text(0.5, 6)).toContain('collina');
	});
});

describe('prévia', () => {
	const medio = Array.from({ length: 40 }, (_, i) => `palavra${i}`).join(' ');
	const longo = Array.from({ length: 90 }, (_, i) => `termo${i}`).join(' ');
	const docOf = (body: string) => {
		const epub = openEpub(makeEpub([{ title: 'I', body }]));
		return chapterDoc(epub, epub.spine[1])!;
	};

	test('escolhe o primeiro parágrafo de 30 a 60 palavras', () => {
		expect(previewParagraph(docOf(`<p>Curto aqui.</p><p>${longo}</p><p>${medio}</p>`), 'pt')).toBe(2);
	});

	test('sem parágrafo médio, fica com o mais longo', () => {
		expect(previewParagraph(docOf(`<p>Curto aqui.</p><p>${longo}</p><p>Outro curto.</p>`), 'pt')).toBe(1);
	});

	test('capítulo sem texto não tem prévia', () => {
		expect(previewParagraph(docOf('<p></p>'), 'pt')).toBeNull();
	});
});

describe('prévia do léxico', () => {
	test('um parágrafo real com as candidatas e a posição', () => {
		const epub = openEpub(makeEpub([{ title: 'I', body: '<p>O riacho e a janela fria de manhã.</p>' }]));
		const prev = blendPreview(epub, 1, { bookLanguage: 'pt', language: 'it', lexicon: FIXTURE })!;
		expect(prev.text).toBe('O riacho e a janela fria de manhã.');
		expect(prev.candidates.map((c) => [c.form, c.target, prev.text.indexOf(c.form) === c.start])).toEqual([
			['fria', 'fredda', true],
			['janela', 'finestra', true],
			['riacho', 'ruscello', true]
		]);
		expect(blendPreview(epub, 0, { bookLanguage: 'pt', language: 'it', lexicon: FIXTURE })).toBeNull();
	});
});
