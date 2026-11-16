// O léxico do blend de livro: de cada forma flexionada da língua do livro, a palavra
// equivalente na língua-alvo. Construído offline (um arquivo por par, em ./lexicon/) e lido
// pelo servidor (lib/server/lexicon.ts). Aqui só o formato e as candidatas, sem E/S.

import { segmentWords } from '@linguetta/language';
import type { Candidate } from './book.ts';
import type { Frequency } from './select.ts';
import type { XhtmlDoc } from './xhtml.ts';

/** Texto antes da palavra termina num começo de frase (ou de parágrafo). */
export const SENTENCE_START = /(^|[.!?…:;"“”«»—–(\n]\s*)$/;

/**
 * [classe (n substantivo, v verbo, a adjetivo, d advérbio, f palavra de ligação), lema na
 * língua do livro, forma na língua-alvo, lema na língua-alvo, posto, tier]. Tier: 0 = as duas
 * conferências confirmam (melhor), 1 = uma confirma (inclui verbos conjugados desses lemas),
 * 2 = tradução de palavra do OPUS sem confirmação, 3 = palavra de ligação sem confirmação.
 */
export type LexRow = readonly [
	pos: string,
	sourceLemma: string,
	targetForm: string,
	targetLemma: string,
	rank: number,
	tier: number
];

export interface Lexicon {
	version: 2;
	source: string;
	target: string;
	/** Forma (minúscula, NFC) → linhas da melhor para a pior. */
	forms: Record<string, readonly LexRow[]>;
}

/**
 * Os filtros do léxico que a escada afrouxa. Uma candidata passa se o tier é no máximo
 * `maxTier`, o lema não é dos `commonSkip` mais comuns (posto 1 a este valor: artigos, "ser",
 * "ter"...) e a palavra tem ao menos `minLetters` letras.
 */
export interface LexFilter {
	maxTier: number;
	commonSkip: number;
	minLetters: number;
}

/** O filtro mais frouxo: o que `scanChapter` deixa passar e a prévia envia ao navegador. */
export const OPEN_FILTER: LexFilter = { maxTier: 3, commonSkip: 0, minLetters: 3 };

const POS = new Set(['n', 'v', 'a', 'd', 'f']);

const isRow = (r: unknown): r is LexRow =>
	Array.isArray(r) &&
	r.length === 6 &&
	typeof r[0] === 'string' &&
	POS.has(r[0]) &&
	typeof r[1] === 'string' &&
	typeof r[2] === 'string' &&
	typeof r[3] === 'string' &&
	typeof r[4] === 'number' &&
	Number.isInteger(r[5]) &&
	r[5] >= 0 &&
	r[5] <= 3;

/** Confere o JSON do arquivo; erro claro se o formato não é o esperado. */
export function parseLexicon(raw: unknown): Lexicon {
	const l = raw as Partial<Lexicon> | null;
	if (!l || l.version !== 2 || typeof l.source !== 'string' || typeof l.target !== 'string') {
		throw new Error('Léxico inválido: versão, source ou target ausentes.');
	}
	if (!l.forms || typeof l.forms !== 'object') throw new Error('Léxico inválido: sem forms.');
	for (const rows of Object.values(l.forms)) {
		if (!Array.isArray(rows) || !rows.every(isRow)) throw new Error('Léxico inválido: linha malformada.');
	}
	return l as Lexicon;
}

const capitalize = (s: string) => {
	const first = String.fromCodePoint(s.codePointAt(0) ?? 32);
	return first.toLocaleUpperCase() + s.slice(first.length);
};

/** Postos por palavra da língua-alvo (forma e lema): é a "lista de frequência" da escolha. */
export type Ranks = Map<string, number>;

// toLocaleLowerCase é lento e o mesmo vocabulário volta a cada degrau da escada: guarda o resultado.
const lowered = new Map<string, string>();
const lower = (word: string) => {
	let l = lowered.get(word);
	if (l === undefined) {
		l = word.toLocaleLowerCase();
		lowered.set(word, l);
	}
	return l;
};

export function rankFrequency(ranks: Ranks): Frequency {
	const seen = new Map<string, number | null>();
	return {
		rank(word) {
			let r = seen.get(word);
			if (r === undefined) {
				r = ranks.get(lower(word)) ?? null;
				seen.set(word, r);
			}
			return r;
		}
	};
}

function noteRank(ranks: Ranks, word: string, rank: number) {
	if (rank <= 0) return;
	const key = lower(word);
	const old = ranks.get(key);
	if (old === undefined || rank < old) ranks.set(key, rank);
}

/** Uma candidata do léxico com o que os filtros precisam saber. */
export type LexCandidate = Candidate & { start: number; tier: number; rank: number };

/** A candidata passa no filtro? (Servidor e prévia usam a mesma conta.) */
export const passesFilter = (c: { form: string; tier: number; rank: number }, f: LexFilter) =>
	c.tier <= f.maxTier &&
	!(c.rank > 0 && c.rank <= f.commonSkip) &&
	[...c.form].length >= f.minLetters;

/**
 * Candidatas de um capítulo no filtro mais frouxo: cada palavra do texto que o léxico conhece
 * (a primeira linha dela). Pula palavras com número ou hífen, nome próprio (maiúscula fora do
 * começo da frase), a troca que não muda o texto e o trecho que não dá para editar (dentro de
 * link etc.). Cada degrau da escada filtra esta lista com `passesFilter`. Dentro do parágrafo a
 * ordem é a do posto (o desempate da escolha). `start` é a posição no texto do parágrafo.
 */
export function scanChapter(doc: XhtmlDoc, lexicon: Lexicon, bookLanguage: string): LexCandidate[] {
	const out: LexCandidate[] = [];
	const keys = new Map<string, string>();
	const keyOf = (segment: string) => {
		let k = keys.get(segment);
		if (k === undefined) {
			k = segment.normalize('NFC').toLocaleLowerCase(bookLanguage);
			keys.set(segment, k);
		}
		return k;
	};
	doc.paragraphs.forEach((p, para) => {
		const found: LexCandidate[] = [];
		for (const s of segmentWords(p.text, bookLanguage)) {
			if (!s.isWord || [...s.segment].length < OPEN_FILTER.minLetters || /[\p{N}\-‐‑]/u.test(s.segment)) continue;
			const key = keyOf(s.segment);
			const row = lexicon.forms[key]?.[0];
			if (!row) continue;
			const [, sourceLemma, targetForm, targetLemma, rank, tier] = row;
			const first = String.fromCodePoint(s.segment.codePointAt(0) ?? 32);
			const upper = first !== first.toLocaleLowerCase(bookLanguage);
			if (upper && !SENTENCE_START.test(p.text.slice(0, s.index))) continue;
			if (targetForm.toLocaleLowerCase() === key) continue;
			if (!doc.editable(para, s.index, s.index + s.segment.length)) continue;
			found.push({
				para,
				form: s.segment,
				target: upper ? capitalize(targetForm) : targetForm,
				lemma: targetLemma,
				translation: sourceLemma,
				note: '',
				start: s.index,
				tier,
				rank
			});
		}
		// Posto 0 (desconhecido) por último; estável, então o texto desempata.
		found.sort((a, b) => (a.rank || Infinity) - (b.rank || Infinity));
		out.push(...found);
	});
	return out;
}

/** Postos das candidatas (forma e lema na língua-alvo), a "lista de frequência" da escolha. */
export function ranksOf(candidates: readonly { target: string; lemma: string; rank: number }[]): Ranks {
	const ranks: Ranks = new Map();
	for (const c of candidates) {
		noteRank(ranks, c.lemma, c.rank);
		noteRank(ranks, c.target, c.rank);
	}
	return ranks;
}
