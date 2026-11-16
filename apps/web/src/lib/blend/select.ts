// Quais parágrafos ganham troca e qual palavra entra em cada um: o porte do select.js do
// LingoBlend (packages/stremio-server/server/src/blend/select.js), com o parágrafo no lugar da
// fala da legenda. Mesmas regras:
//
//   1. cobertura: coverage (0–MAX_COVERAGE) é a parte das PALAVRAS trocadas; a cota é
//      round(coverage × palavras), contando todas as palavras da troca ("de novo" vale 2).
//   2. curva: enquanto a cota cabe em uma troca por parágrafo, parte dos parágrafos ganha uma,
//      espaçados em janelas (parágrafos/cota parágrafos pela posição global). Acima disso todo
//      parágrafo ganha troca e o teto dele é round(coverage × palavras dele), no mínimo 1 e no
//      máximo relax.maxShare das palavras dele.
//   3. o teto é limite, não obrigação: troca extra num parágrafo só com candidata boa
//      (frequência ≥ relax.extraMin).
//   4. compensação: o que faltou vai para o parágrafo sem troca mais longe dos escolhidos; sem
//      parágrafo livre, para o com mais espaço proporcional, até o máximo da regra 2.
//   5. nota: item do banco do usuário muito acima de tudo; depois a confiança da tradução (tier:
//      quanto menor, melhor, acima da frequência); depois a frequência do lema, pela lista que
//      a chamada traz (no sem lista toda candidata vale 2). O desempate é a ordem das candidatas.
//   6. repetição: o mesmo lema só volta a relax.gap parágrafos da última vez. Na legenda eram 20
//      falas (~1–2 min); no livro o padrão é 6 parágrafos (uma ou duas páginas).
//
// As regras 2, 3 e 6 são os filtros que a escada do livro (ladder.ts) afrouxa: vêm em `relax`.

import { countWords, lemmaKey } from '@linguetta/language';

export const DEFAULT_COVERAGE = 0.1;
export const MAX_COVERAGE = 0.5;
export const VERY_COMMON = 300;
export const COMMON = 5000;

const BANK = 100;
/** Cada degrau de tier custa isto na nota: passa a frequência, não passa o banco do usuário. */
const TIER_PENALTY = 10;

/** Os filtros da escolha que dá para afrouxar. */
export interface Relax {
	/** Distância mínima, em parágrafos, entre duas trocas do mesmo lema (0 = sem espaçamento). */
	gap: number;
	/** Parte máxima das palavras de um parágrafo que pode ser trocada. */
	maxShare: number;
	/** Frequência mínima (frequencyScore) da troca extra num parágrafo que já tem uma. */
	extraMin: number;
}

export interface Frequency {
	rank(word: string): number | null;
}

/** O mínimo que a escolha precisa de uma candidata. */
export interface Swap {
	/** Trecho do texto original que sai. */
	form: string;
	/** Palavra na língua-alvo que entra (texto do link). */
	target: string;
	lemma: string;
	/** Confiança da tradução, 0 (melhor) a 3. Sem ela, 0. */
	tier?: number;
	/** Posição do trecho no parágrafo (ordena o resultado). */
	start: number;
}

export function frequencyScore(frequency: Frequency | null, ...words: string[]): number {
	if (!frequency) return 2;
	const ranks = words
		.filter(Boolean)
		.map((w) => frequency.rank(w))
		.filter((r): r is number => r !== null);
	if (!ranks.length) return 0.5;
	const r = Math.min(...ranks);
	if (r <= VERY_COMMON) return 2;
	if (r <= COMMON) return 3;
	return 1.5;
}

/** Máximo de palavras trocadas num parágrafo. */
const ceilingOf = (words: number, maxShare: number) => Math.max(1, Math.floor(words * maxShare));

export function blendPlan(texts: readonly string[], sourceLang: string, coverage: number, relax: Relax) {
	const perText = texts.map((t) => countWords(t, sourceLang));
	const words = perText.reduce((a, b) => a + b, 0);
	const quota = coverage > 0 ? Math.round(coverage * words) : 0;
	const perCue = quota > texts.length;
	const caps = perText.map((w) =>
		perCue ? Math.max(1, Math.min(ceilingOf(w, relax.maxShare), Math.round(coverage * w))) : 1
	);
	return {
		perText,
		words,
		quota,
		perCue,
		cueFraction: texts.length ? Math.min(1, quota / texts.length) : 0,
		caps
	};
}

export interface SelectInput<T extends Swap> {
	texts: readonly string[];
	/** Por parágrafo, as candidatas já validadas, na ordem de preferência. */
	candidates: readonly (readonly T[])[];
	sourceLang: string;
	targetLang: string;
	coverage: number;
	/** Filtros desta escolha (um degrau da escada). */
	relax: Relax;
	/** Lemas dos itens em estudo do usuário no idioma-alvo. */
	preferWords?: readonly string[];
	frequency?: Frequency | null;
}

type Scored<T> = { ann: T; key: string; quality: number; score: number; words: number };

export function selectSwaps<T extends Swap>(input: SelectInput<T>): T[][] {
	const { texts, candidates, sourceLang, targetLang, coverage, relax } = input;
	const frequency = input.frequency ?? null;
	const out: T[][] = texts.map(() => []);
	const plan = blendPlan(texts, sourceLang, coverage, relax);
	if (!plan.quota) return out;
	const prefer = new Set((input.preferWords ?? []).map((w) => lemmaKey(w, targetLang)));
	const keys = new Map<string, string>();
	const keyOf = (lemma: string) => {
		let k = keys.get(lemma);
		if (k === undefined) keys.set(lemma, (k = lemmaKey(lemma, targetLang)));
		return k;
	};
	const scored: Scored<T>[][] = texts.map((_, i) =>
		(candidates[i] ?? []).map((ann, k) => {
			const key = keyOf(ann.lemma);
			const quality = (prefer.has(key) ? BANK : 0) + frequencyScore(frequency, ann.lemma, ann.target);
			return {
				ann,
				key,
				quality,
				score: quality - (ann.tier ?? 0) * TIER_PENALTY - k * 0.01,
				words: Math.max(1, countWords(ann.form, sourceLang))
			};
		})
	);

	const seenAt = new Map<string, number[]>();
	const used = texts.map(() => 0);
	// Distância de cada parágrafo ao mais próximo já escolhido; só importa até o fim da fase dos
	// parágrafos sem troca (depois disso não é mais lida e atualizá-la custaria um laço por troca).
	const dist = texts.map(() => Infinity);
	let trackDist = true;
	let total = 0;
	const eligible = (c: Scored<T>, g: number) =>
		(seenAt.get(c.key) ?? []).every((p) => Math.abs(g - p) >= relax.gap);
	// Duas trocas no mesmo parágrafo não podem disputar o mesmo trecho.
	const overlaps = (i: number, c: Scored<T>) =>
		out[i].some(
			(a) =>
				c.ann.start < a.start + a.form.length && a.start < c.ann.start + c.ann.form.length
		);
	// A melhor candidata de cada parágrafo só muda quando uma troca cai nele ou perto dele (o
	// espaçamento do lema): guardar o resultado evita varrer o livro inteiro a cada troca.
	const memo: (Scored<T> | null | undefined)[] = texts.map(() => undefined);
	const best = (i: number) => {
		if (memo[i] === undefined) memo[i] = pickBest(i);
		return memo[i]!;
	};
	const pickBest = (i: number) => {
		const first = out[i].length === 0;
		let top: Scored<T> | null = null;
		for (const c of scored[i]) {
			if (out[i].includes(c.ann) || !eligible(c, i) || overlaps(i, c)) continue;
			if (!first && (c.quality < relax.extraMin || used[i] + c.words > ceilingOf(plan.perText[i], relax.maxShare))) continue;
			if (!top || c.score > top.score) top = c;
		}
		return top;
	};
	const take = (i: number, c: Scored<T>) => {
		out[i].push(c.ann);
		used[i] += c.words;
		total += c.words;
		seenAt.set(c.key, [...(seenAt.get(c.key) ?? []), i]);
		if (trackDist) for (let j = 0; j < texts.length; j++) dist[j] = Math.min(dist[j], Math.abs(i - j));
		const reach = Math.max(1, relax.gap);
		for (let j = Math.max(0, i - reach + 1); j < Math.min(texts.length, i + reach); j++) memo[j] = undefined;
	};

	// Primeira passada: uma troca por janela, a melhor delas.
	const f = plan.cueFraction;
	const windows = new Map<number, number[]>();
	texts.forEach((_, i) => {
		const k = Math.floor(i * f + 1e-9);
		if (!windows.has(k)) windows.set(k, []);
		windows.get(k)!.push(i);
	});
	for (const cues of windows.values()) {
		let pick: { i: number; c: Scored<T> } | null = null;
		for (const i of cues) {
			const c = best(i);
			if (c && (!pick || c.score > pick.c.score)) pick = { i, c };
		}
		if (pick) take(pick.i, pick.c);
	}

	// Depois, até fechar a cota. Primeiro os parágrafos ainda sem troca (o mais longe dos já
	// escolhidos, depois a melhor nota); quando esses acabam, os que já têm uma (o que ainda tem
	// espaço na meta, o menos cheio, a melhor nota). Quem fica sem candidata não volta a ter.
	let free: number[] = texts.map((_, i) => i).filter((i) => out[i].length === 0);
	while (total < plan.quota && free.length) {
		let pick: { i: number; c: Scored<T> } | null = null;
		let at = 0;
		for (const i of free) {
			const c = best(i);
			if (!c) continue;
			free[at++] = i;
			if (!pick || dist[i] > dist[pick.i] || (dist[i] === dist[pick.i] && c.score > pick.c.score)) {
				pick = { i, c };
			}
		}
		free.length = at;
		if (!pick) break;
		take(pick.i, pick.c);
		free = free.filter((i) => i !== pick!.i);
	}

	trackDist = false;

	// Ordem da fila dos parágrafos com troca: maior primeiro, o índice menor desempata.
	type Entry = { i: number; version: number; a1: number; a2: number; a3: number };
	const before = (x: Entry, y: Entry) =>
		x.a1 !== y.a1 ? x.a1 > y.a1 : x.a2 !== y.a2 ? x.a2 > y.a2 : x.a3 !== y.a3 ? x.a3 > y.a3 : x.i < y.i;
	const heap: Entry[] = [];
	const push = (e: Entry) => {
		let k = heap.push(e) - 1;
		while (k > 0) {
			const up = (k - 1) >> 1;
			if (!before(heap[k], heap[up])) break;
			[heap[k], heap[up]] = [heap[up], heap[k]];
			k = up;
		}
	};
	const popTop = () => {
		const top = heap[0];
		const last = heap.pop()!;
		if (heap.length) {
			heap[0] = last;
			let k = 0;
			for (;;) {
				const l = 2 * k + 1;
				const r = l + 1;
				let m = k;
				if (l < heap.length && before(heap[l], heap[m])) m = l;
				if (r < heap.length && before(heap[r], heap[m])) m = r;
				if (m === k) break;
				[heap[k], heap[m]] = [heap[m], heap[k]];
				k = m;
			}
		}
		return top;
	};
	const version = texts.map(() => 0);
	const enqueue = (i: number) => {
		version[i]++;
		const c = best(i);
		if (!c) return;
		push({
			i,
			version: version[i],
			a1: out[i].length < plan.caps[i] ? 1 : 0,
			a2: -(used[i] + c.words) / Math.max(1, plan.perText[i]),
			a3: c.score
		});
	};
	for (let i = 0; i < texts.length; i++) if (out[i].length) enqueue(i);
	while (total < plan.quota && heap.length) {
		const e = popTop();
		if (e.version !== version[e.i]) continue;
		const c = best(e.i);
		if (!c) continue;
		take(e.i, c);
		// A troca mexe na própria nota do parágrafo e na dos vizinhos (espaçamento do lema).
		const reach = Math.max(1, relax.gap);
		for (let j = Math.max(0, e.i - reach + 1); j < Math.min(texts.length, e.i + reach); j++) {
			if (out[j].length) enqueue(j);
		}
	}
	return out.map((anns) => anns.sort((a, b) => a.start - b.start));
}
