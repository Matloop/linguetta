import { describe, expect, test } from 'bun:test';
import {
	canDoWave,
	canOpen,
	completesNew,
	courseState,
	nodeState,
	monthActivity,
	shiftMonth,
	waveFor,
	type Completion
} from './progress.ts';
import type { Lesson } from './types.ts';

function lesson(no: number, withLines = true): Lesson {
	return {
		no,
		kind: no % 7 === 0 && no > 0 ? 'revisao' : 'licao',
		title: `L${no}`,
		titlePt: `L${no}`,
		lines: withLines ? [{ it: 'Ciao', pt: 'Oi' }] : undefined,
		steps: []
	};
}

/** Lições 0 a `last`; a 0 e as de revisão sem diálogo. */
function course(last: number) {
	return {
		lessons: Array.from({ length: last + 1 }, (_, no) => lesson(no, no !== 0 && no % 7 !== 0))
	};
}

const c8 = course(7);
const done = (lessonNo: number, studyDay: string): Completion => ({
	lessonNo,
	kind: 'licao',
	studyDay
});

describe('courseState', () => {
	test('sem progresso: a lição 0 está liberada', () => {
		const s = courseState(c8, [], '2026-11-14');
		expect(s.next).toBe(0);
		expect(nodeState(s, 0)).toBe('current');
		expect(nodeState(s, 1)).toBe('locked');
		expect(canOpen(s, 1)).toBe(false);
	});

	test('sem limite por dia: concluiu uma, a seguinte já abre no mesmo dia', () => {
		const s = courseState(c8, [done(0, '2026-11-14'), done(1, '2026-11-14')], '2026-11-14');
		expect(s.next).toBe(2);
		expect(s.doneToday).toEqual([0, 1]);
		expect(nodeState(s, 1)).toBe('done');
		expect(nodeState(s, 2)).toBe('current');
		expect(canOpen(s, 2)).toBe(true);
		expect(completesNew(s, 2)).toBe(true);
		// Pular adiante, não.
		expect(canOpen(s, 3)).toBe(false);
		// Revisão da feita continua aberta, mas não grava.
		expect(canOpen(s, 0)).toBe(true);
		expect(completesNew(s, 0)).toBe(false);
	});

	test('doneToday só conta as de hoje', () => {
		const s = courseState(c8, [done(0, '2026-11-13'), done(1, '2026-11-14')], '2026-11-14');
		expect(s.doneToday).toEqual([1]);
	});

	test('curso acabado', () => {
		const all = c8.lessons.map((l, i) => done(l.no, `2026-11-0${i + 1}`));
		const s = courseState(c8, all, '2026-11-14');
		expect(s.next).toBeNull();
		expect(s.wave).toBeNull();
	});

	test('ordem segue o número, não a ordem gravada', () => {
		const s = courseState(c8, [done(1, '2026-11-10')], '2026-11-14');
		expect(s.next).toBe(0);
	});

	test('onda gravada não conta como lição', () => {
		const s = courseState(
			c8,
			[{ lessonNo: 0, kind: 'onda', studyDay: '2026-11-13' }],
			'2026-11-14'
		);
		expect(s.done.size).toBe(0);
		expect(s.next).toBe(0);
	});
});

describe('segunda onda', () => {
	const c60 = course(60);
	const upTo = (n: number) => Array.from({ length: n + 1 }, (_, no) => done(no, '2027-01-01'));
	const onda = (lessonNo: number): Completion => ({ lessonNo, kind: 'onda', studyDay: '2027-01-02' });

	test('waveFor: N − 49 a partir da 50, só com diálogo', () => {
		expect(waveFor(c60, 49)).toBeNull();
		expect(waveFor(c60, 50)).toBe(1);
		expect(waveFor(c60, 55)).toBe(6);
		// 56 − 49 = 7, revisão sem diálogo.
		expect(waveFor(c60, 56)).toBeNull();
		// Lição a refazer que não existe.
		expect(waveFor(course(3), 55)).toBeNull();
	});

	test('a onda da próxima lição já aparece antes de fazê-la', () => {
		const s = courseState(c60, [...upTo(54), ...[1, 2, 3, 4, 5].map(onda)], '2027-01-02');
		expect(s.next).toBe(55);
		expect(s.wave).toBe(6);
		expect(canDoWave(s, 6)).toBe(true);
		expect(canDoWave(s, 5)).toBe(false);
	});

	test('várias lições num dia: a onda pendente é a mais antiga', () => {
		const s = courseState(c60, [...upTo(53), onda(1)], '2027-01-02');
		expect(s.next).toBe(54);
		expect(s.wave).toBe(2);
		const after = courseState(c60, [...upTo(53), onda(1), onda(2)], '2027-01-02');
		expect(after.wave).toBe(3);
		expect(after.waved.has(2)).toBe(true);
	});

	test('todas refeitas: sem onda', () => {
		const s = courseState(c60, [...upTo(51), onda(1), onda(2)], '2027-01-02');
		// 52 é a próxima, e a 3 dela ainda não foi refeita.
		expect(s.wave).toBe(3);
		const all = courseState(c60, [...upTo(51), onda(1), onda(2), onda(3)], '2027-01-02');
		expect(all.wave).toBeNull();
	});

	test('antes da 50 não há onda', () => {
		const s = courseState(c60, upTo(10), '2027-01-01');
		expect(s.wave).toBeNull();
	});
});

describe('monthActivity', () => {
	test('novembro de 2026: começa no domingo, 5 semanas, conta por dia', () => {
		const a = monthActivity(
			[
				done(0, '2026-11-02'),
				done(1, '2026-11-02'),
				done(2, '2026-11-02'),
				done(3, '2026-11-14'),
				{ lessonNo: 1, kind: 'onda', studyDay: '2026-11-14' },
				done(4, '2026-10-31')
			],
			'2026-11',
			'2026-11-14'
		);
		expect(a.cells).toHaveLength(30);
		expect(a.weeks).toBe(5);
		expect(a.cells[0]).toMatchObject({ day: '2026-11-01', col: 0, row: 0, n: 0, level: 0 });
		expect(a.cells[1]).toMatchObject({ day: '2026-11-02', row: 1, n: 3, level: 3 });
		expect(a.cells[13]).toMatchObject({ day: '2026-11-14', col: 1, row: 6, n: 2, future: false });
		expect(a.cells[14].future).toBe(true);
		expect(a.total).toBe(5);
		expect(a.activeDays).toBe(2);
	});

	test('nível satura em 4; mês que começa no sábado ocupa 6 semanas', () => {
		const many = Array.from({ length: 6 }, (_, i) => done(i, '2026-08-01'));
		const a = monthActivity(many, '2026-08', '2026-08-31');
		expect(a.cells[0]).toMatchObject({ row: 6, n: 6, level: 4 });
		expect(a.weeks).toBe(6);
	});

	test('shiftMonth atravessa o ano', () => {
		expect(shiftMonth('2026-01', -1)).toBe('2025-12');
		expect(shiftMonth('2026-12', 1)).toBe('2027-01');
	});
});
