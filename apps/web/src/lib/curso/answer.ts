// Conferência das lacunas do exercício "Completar". O acento conta (è não é e); caixa,
// espaços nas pontas e o tipo de apóstrofo não.

import type { ClozeItem } from './types.ts';

const APOSTROPHES = /[’‘ʼ`´]/g;

export function normalizeAnswer(s: string): string {
	return s
		.normalize('NFC')
		.replace(APOSTROPHES, "'")
		.trim()
		.replace(/\s+/g, ' ')
		.toLocaleLowerCase('it');
}

export function isRightAnswer(given: string, expected: string): boolean {
	return normalizeAnswer(given) === normalizeAnswer(expected);
}

/** Uma marca por lacuna. */
export function checkCloze(item: ClozeItem, given: readonly string[]): boolean[] {
	return item.answers.map((a, i) => isRightAnswer(given[i] ?? '', a));
}

/** A frase com as respostas no lugar das lacunas. */
export function fillCloze(item: ClozeItem): string {
	let k = 0;
	return item.parts.map((p) => (p === null ? (item.answers[k++] ?? '') : p)).join('');
}
