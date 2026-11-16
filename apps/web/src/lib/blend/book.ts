// O livro com blend, do EPUB aberto ao EPUB novo: capítulos, candidatas do léxico
// (lexicon.ts), escolha (select.ts) e inserção dos links (xhtml.ts). Tudo puro: o servidor
// só busca e guarda os bytes.

import { countWords } from '@linguetta/language';
import { blendAnchor } from './link.ts';
import { readText, writeEpub, type Epub, type SpineItem } from './epub.ts';
import { LADDER, LAST_STEP, monotonic } from './ladder.ts';
import { passesFilter, rankFrequency, ranksOf, scanChapter, type LexCandidate, type Lexicon, type Ranks } from './lexicon.ts';
import { MAX_COVERAGE, selectSwaps } from './select.ts';
import { parseXhtml, type Replacement, type XhtmlDoc } from './xhtml.ts';

/** O que o léxico propõe para um trecho do parágrafo `para` do capítulo. */
export interface Candidate {
	/** Índice do parágrafo no capítulo. */
	para: number;
	/** Trecho exato do texto do livro que sai. */
	form: string;
	/** Palavra ou expressão na língua-alvo que entra, flexionada para caber na frase. */
	target: string;
	/** Forma de dicionário na língua-alvo. */
	lemma: string;
	/** Sentido curto na língua do livro. */
	translation: string;
	note: string;
}

const XHTML_TYPES = new Set(['application/xhtml+xml', 'text/html', 'application/xml']);

export function isTextChapter(item: SpineItem): boolean {
	return !item.nav && (XHTML_TYPES.has(item.mediaType) || /\.x?html?$/i.test(item.path));
}

export interface ChapterInfo {
	spine: number;
	title: string;
	words: number;
}

const cap = (s: string, max: number) => [...s].slice(0, max).join('').trim();

export function chapterDoc(epub: Epub, item: SpineItem): XhtmlDoc | null {
	return isTextChapter(item) ? parseXhtml(readText(epub, item.path)) : null;
}

/** Título e palavras de cada item do spine (o sumário entra com 0 palavras). */
export function chapterInfos(epub: Epub, bookLanguage: string): ChapterInfo[] {
	return epub.spine.map((item) => {
		const doc = chapterDoc(epub, item);
		const words = doc ? doc.paragraphs.reduce((n, p) => n + countWords(p.text, bookLanguage), 0) : 0;
		const title =
			epub.tocTitles.get(item.path) ||
			doc?.heading ||
			(item.nav ? 'Sumário' : `Capítulo ${item.index + 1}`);
		return { spine: item.index, title: cap(title, 200), words };
	});
}

/** Texto dos primeiros capítulos (até `maxChars`), para descobrir a língua do livro. */
export function bookSampleText(epub: Epub, maxChars = 40_000): string {
	const out: string[] = [];
	let size = 0;
	for (const item of epub.spine) {
		const doc = chapterDoc(epub, item);
		if (!doc) continue;
		for (const p of doc.paragraphs) {
			out.push(p.text);
			size += p.text.length;
			if (size >= maxChars) return out.join('\n');
		}
	}
	return out.join('\n');
}

export interface BuildOptions {
	bookLanguage: string;
	language: string;
	coverage: number;
	lexicon: Lexicon;
	preferWords?: readonly string[];
	/** Degrau da escada por onde começar (o que a prévia já mostrou); se não alcança, sobe. */
	startStep?: number;
}

const PREVIEW_MIN = 30;
const PREVIEW_MAX = 60;

/** Parágrafo da prévia: o primeiro com 30 a 60 palavras; sem nenhum, o mais longo. Sem texto: null. */
export function previewParagraph(doc: XhtmlDoc, bookLanguage: string): number | null {
	const words = doc.paragraphs.map((p) => countWords(p.text, bookLanguage));
	const medium = words.findIndex((w) => w >= PREVIEW_MIN && w <= PREVIEW_MAX);
	if (medium >= 0) return medium;
	const longest = words.indexOf(Math.max(0, ...words));
	return longest >= 0 && words[longest] > 0 ? longest : null;
}

type Located = LexCandidate & { global: number };

/** Os capítulos dados (índices do spine) com as candidatas do léxico, parágrafo a parágrafo. */
function prepare(epub: Epub, spines: readonly number[], opts: Omit<BuildOptions, 'coverage'>) {
	const docs: { item: SpineItem; doc: XhtmlDoc; offset: number }[] = [];
	const texts: string[] = [];
	const candidates: Located[][] = [];
	for (const spine of [...spines].sort((a, b) => a - b)) {
		const item = epub.spine[spine];
		const doc = item ? chapterDoc(epub, item) : null;
		if (!item || !doc) continue;
		const offset = texts.length;
		docs.push({ item, doc, offset });
		const byPara: Located[][] = doc.paragraphs.map(() => []);
		for (const c of scanChapter(doc, opts.lexicon, opts.bookLanguage)) {
			byPara[c.para].push({ ...c, global: offset + c.para });
		}
		doc.paragraphs.forEach((p, para) => {
			texts.push(p.text);
			candidates.push(byPara[para]);
		});
	}
	const words = texts.reduce((n, t) => n + countWords(t, opts.bookLanguage), 0);
	return { docs, texts, candidates, words, byFilter: new Map<string, { candidates: Located[][]; ranks: Ranks }>() };
}

type Prepared = ReturnType<typeof prepare>;

/** Quantas palavras do livro as trocas escolhidas cobrem ("de novo" vale 2). */
const swapWords = (chosen: readonly (readonly { form: string }[])[], lang: string) =>
	chosen.reduce((n, list) => n + list.reduce((m, c) => m + Math.max(1, countWords(c.form, lang)), 0), 0);

/** A escolha das trocas num degrau da escada; as candidatas do filtro do degrau ficam guardadas. */
function chooseAt(
	p: Prepared,
	opts: Omit<BuildOptions, 'coverage'>,
	step: number,
	coverage: number,
	preferWords: readonly string[] | undefined
) {
	const { filter, relax } = LADDER[step];
	const key = JSON.stringify(filter);
	let at = p.byFilter.get(key);
	if (!at) {
		const kept = p.candidates.map((list) => list.filter((c) => passesFilter(c, filter)));
		at = { candidates: kept, ranks: ranksOf(kept.flat()) };
		p.byFilter.set(key, at);
	}
	return selectSwaps({
		texts: p.texts,
		candidates: at.candidates,
		sourceLang: opts.bookLanguage,
		targetLang: opts.language,
		coverage,
		relax,
		preferWords,
		frequency: rankFrequency(at.ranks)
	});
}

/**
 * O que cada degrau da escada entrega nos capítulos: a maior fração das palavras que a
 * escolha consegue trocar naquele degrau (cobertura máxima, uma escolha por degrau). Nunca
 * decresce de um degrau para o seguinte.
 */
export function achievableByStep(
	epub: Epub,
	spines: readonly number[],
	opts: Omit<BuildOptions, 'coverage' | 'startStep'>
): { words: number; fractions: number[] } {
	const p = prepare(epub, spines, opts);
	const raw = LADDER.map((_, step) =>
		p.words ? swapWords(chooseAt(p, opts, step, MAX_COVERAGE, undefined), opts.bookLanguage) / p.words : 0
	);
	return { words: p.words, fractions: monotonic(raw) };
}

/** Um parágrafo real do capítulo com todas as candidatas dele (filtro aberto); a tela filtra e escolhe as trocas de cada %. */
export function blendPreview(epub: Epub, spine: number, opts: Omit<BuildOptions, 'coverage' | 'startStep'>) {
	const item = epub.spine[spine];
	const doc = item ? chapterDoc(epub, item) : null;
	const para = doc ? previewParagraph(doc, opts.bookLanguage) : null;
	if (!doc || para === null) return null;
	const candidates = scanChapter(doc, opts.lexicon, opts.bookLanguage)
		.filter((c) => c.para === para)
		.map(({ form, target, lemma, translation, start, tier, rank }) => ({
			form,
			target,
			lemma,
			translation,
			start,
			tier,
			rank
		}));
	return { text: doc.paragraphs[para].text, candidates };
}

/**
 * O EPUB inteiro com blend nos capítulos dados. A escolha corre sobre todos os parágrafos
 * desses capítulos em sequência, para o espaçamento e a repetição atravessarem capítulos.
 * Usa o primeiro degrau da escada (a partir de `startStep`) cujas trocas fecham o % pedido;
 * sem nenhum, o último. `step` e `relaxed` dizem o que foi liberado. `swaps` são as palavras
 * trocadas; `words`, as palavras dos capítulos.
 */
export function buildBlend(
	epub: Epub,
	spines: readonly number[],
	opts: BuildOptions
): { bytes: Uint8Array; links: number; swaps: number; words: number; step: number; relaxed: string[] } {
	const p = prepare(epub, spines, opts);
	const quota = Math.round(opts.coverage * p.words);
	let step = Math.min(Math.max(opts.startStep ?? 0, 0), LAST_STEP);
	let chosen = chooseAt(p, opts, step, opts.coverage, opts.preferWords);
	while (step < LAST_STEP && swapWords(chosen, opts.bookLanguage) < quota) {
		chosen = chooseAt(p, opts, ++step, opts.coverage, opts.preferWords);
	}

	const changed = new Map<string, string>();
	let links = 0;
	let swaps = 0;
	for (const { item, doc, offset } of p.docs) {
		const replacements: Replacement[] = [];
		doc.paragraphs.forEach((_, para) => {
			for (const c of chosen[offset + para] ?? []) {
				const html = blendAnchor(c.target, c.lemma, c.translation, c.note);
				if (!html) continue;
				swaps += Math.max(1, countWords(c.form, opts.bookLanguage));
				replacements.push({ para, start: c.start, end: c.start + c.form.length, html });
			}
		});
		if (replacements.length === 0) continue;
		links += replacements.length;
		changed.set(item.path, doc.render(replacements));
	}
	return {
		bytes: writeEpub(epub, changed),
		links,
		swaps,
		words: p.words,
		step,
		relaxed: [...LADDER[step].relaxed]
	};
}
