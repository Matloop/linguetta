import { expect, test } from 'bun:test';
import { LADDER, LAST_STEP, ladderMarks, monotonic, relaxedSentence, stepFor } from './ladder.ts';

test('cada degrau só afrouxa os anteriores', () => {
	LADDER.slice(1).forEach((s, k) => {
		const p = LADDER[k];
		expect(s.filter.maxTier).toBeGreaterThanOrEqual(p.filter.maxTier);
		expect(s.filter.commonSkip).toBeLessThanOrEqual(p.filter.commonSkip);
		expect(s.filter.minLetters).toBeLessThanOrEqual(p.filter.minLetters);
		expect(s.relax.gap).toBeLessThanOrEqual(p.relax.gap);
		expect(s.relax.maxShare).toBeGreaterThanOrEqual(p.relax.maxShare);
		expect(s.relax.extraMin).toBeLessThanOrEqual(p.relax.extraMin);
		expect(s.relaxed.length).toBeGreaterThanOrEqual(p.relaxed.length);
		p.relaxed.forEach((l) => expect(s.relaxed).toContain(l));
	});
});

test('o degrau 0 é o mais rigoroso e só os últimos avisam de trocas erradas', () => {
	expect(LADDER[0].relaxed).toEqual([]);
	expect(LADDER[0].rigor).toBe('máximo');
	expect(LADDER[LAST_STEP].rigor).toBe('mínimo');
	expect(LADDER.filter((s) => s.warning)).toHaveLength(2);
	expect(LADDER.every((s) => !s.warning || s.filter.maxTier >= 2)).toBe(true);
	expect(LADDER[LAST_STEP].relax.maxShare).toBe(0.5);
});

test('stepFor: o primeiro degrau que alcança, ou o último', () => {
	const a = [0.05, 0.08, 0.08, 0.12, 0.2, 0.2, 0.3, 0.4];
	expect(stepFor(a, 0.05)).toBe(0);
	expect(stepFor(a, 0.06)).toBe(1);
	expect(stepFor(a, 0.2)).toBe(4);
	expect(stepFor(a, 0.5)).toBe(LAST_STEP);
});

test('monotonic e marcas dos degrais que valem um botão', () => {
	expect(monotonic([0.1, 0.09, 0.2])).toEqual([0.1, 0.1, 0.2]);
	expect(ladderMarks([0.054, 0.059, 0.08, 0.08, 0.2])).toEqual([
		{ step: 0, percent: 5 },
		{ step: 2, percent: 8 },
		{ step: 4, percent: 20 }
	]);
});

test('frase do que foi liberado', () => {
	expect(relaxedSentence(0, 10)).toBeNull();
	expect(relaxedSentence(5, 20)).toBe('Liberado para chegar a 20%: repetição mais próxima, várias trocas por parágrafo, palavras muito comuns.');
});
