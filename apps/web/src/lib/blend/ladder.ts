// A escada de rigor do blend de livro.
//
// Quanto mais palavras o usuário pede, mais filtros de qualidade precisam ceder. A escada é a
// lista ORDENADA, do mais rigoroso ao mais frouxo, de combinações desses filtros. Cada degrau
// afrouxa os do anterior (cumulativo), sempre o filtro MENOS importante primeiro; os melhores só
// caem no topo. O blend usa o primeiro degrau que alcança o % pedido (até MAX_COVERAGE, 50%) e
// a tela mostra o que foi liberado.
//
//   0  máximo  tier ≤ 1 (traduções confirmadas), repetição a 6 parágrafos, sem os 300 lemas
//              mais comuns, até 34% do parágrafo, extra só com palavra frequente
//   1  alto    repetição do mesmo lema a 3 parágrafos
//   2  alto    repetição sem espaçamento
//   3  médio   várias trocas por parágrafo (até 40%, extra com qualquer palavra)
//   4  médio   palavras comuns, a partir do posto 100
//   5  médio   palavras comuns, todas
//   6  baixo   tier 2: traduções não confirmadas (avisa: mais trocas erradas)
//   7  mínimo  tier 3: palavras de ligação (para, como), de 3 letras, até 50% do parágrafo
//
// Dentro de cada degrau a nota prefere o tier menor (select.ts), então as melhores traduções
// entram primeiro mesmo quando as piores já estão liberadas.

import type { LexFilter } from './lexicon.ts';
import type { Relax } from './select.ts';

export interface LadderStep {
	filter: LexFilter;
	relax: Relax;
	/** Rigor da tradução e da escolha neste degrau, em uma palavra. */
	rigor: 'máximo' | 'alto' | 'médio' | 'baixo' | 'mínimo';
	/** O que ficou liberado até aqui (acumulado, sem repetir), curto, para a tela. */
	relaxed: readonly string[];
	/** Aviso de qualidade, só nos degraus que aceitam traduções não confirmadas. */
	warning: string | null;
}

interface Patch {
	filter?: Partial<LexFilter>;
	relax?: Partial<Relax>;
	labels: readonly string[];
	rigor: LadderStep['rigor'];
	warning?: string;
}

const BASE = {
	filter: { maxTier: 1, commonSkip: 300, minLetters: 4 } satisfies LexFilter,
	relax: { gap: 6, maxShare: 0.34, extraMin: 1.5 } satisfies Relax
};

const PATCHES: readonly Patch[] = [
	{ labels: [], rigor: 'máximo' },
	{ relax: { gap: 3 }, labels: ['Repetição mais próxima'], rigor: 'alto' },
	{ relax: { gap: 0 }, labels: ['Repetição mais próxima'], rigor: 'alto' },
	{
		relax: { maxShare: 0.4, extraMin: 0 },
		labels: ['Várias trocas por parágrafo'],
		rigor: 'médio'
	},
	{ filter: { commonSkip: 100 }, labels: ['Palavras muito comuns'], rigor: 'médio' },
	{ filter: { commonSkip: 0 }, labels: ['Palavras muito comuns'], rigor: 'médio' },
	{
		filter: { maxTier: 2 },
		labels: ['Traduções não confirmadas'],
		rigor: 'baixo',
		warning: 'Mais trocas erradas: traduções não confirmadas.'
	},
	{
		filter: { maxTier: 3, minLetters: 3 },
		relax: { maxShare: 0.5 },
		labels: ['Palavras de ligação (para, como)', 'Parágrafos mais cheios'],
		rigor: 'mínimo',
		warning: 'Muito mais trocas erradas: traduções não confirmadas e palavras de ligação.'
	}
];

export const LADDER: readonly LadderStep[] = (() => {
	const steps: LadderStep[] = [];
	let filter: LexFilter = BASE.filter;
	let relax: Relax = BASE.relax;
	let relaxed: string[] = [];
	let warning: string | null = null;
	for (const p of PATCHES) {
		filter = { ...filter, ...p.filter };
		relax = { ...relax, ...p.relax };
		relaxed = [...relaxed, ...p.labels.filter((l) => !relaxed.includes(l))];
		warning = p.warning ?? warning;
		steps.push({ filter, relax, rigor: p.rigor, relaxed, warning });
	}
	return steps;
})();

export const LAST_STEP = LADDER.length - 1;

/**
 * O primeiro degrau que alcança `coverage` (fração, 0–1) dado o que cada degrau alcança; sem
 * nenhum que alcance, o último (o mais frouxo, o melhor que dá).
 */
export function stepFor(achievable: readonly number[], coverage: number): number {
	const i = achievable.findIndex((a) => a + 1e-9 >= coverage);
	return i >= 0 ? i : LAST_STEP;
}

/** Garante a ordem não decrescente: afrouxar nunca reduz o alcance mostrado. */
export function monotonic(values: readonly number[]): number[] {
	let top = 0;
	return values.map((v) => (top = Math.max(top, v)));
}

/** Os degraus que valem um botão: cada um que alcança mais % inteiros que o anterior. */
export function ladderMarks(achievable: readonly number[]): { step: number; percent: number }[] {
	const marks: { step: number; percent: number }[] = [];
	let last = 0;
	achievable.forEach((a, step) => {
		const percent = Math.floor(a * 100 + 1e-9);
		if (percent > last) {
			marks.push({ step, percent });
			last = percent;
		}
	});
	return marks;
}

const lower = (s: string) => s.charAt(0).toLocaleLowerCase('pt-BR') + s.slice(1);

/** "Liberado para chegar a 20%: repetição mais próxima, palavras muito comuns"; degrau 0: null. */
export function relaxedSentence(step: number, percent: number): string | null {
	const { relaxed } = LADDER[Math.min(Math.max(step, 0), LAST_STEP)];
	return relaxed.length ? `Liberado para chegar a ${percent}%: ${relaxed.map(lower).join(', ')}.` : null;
}
