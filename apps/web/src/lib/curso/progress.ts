// Regras do progresso no curso. Puro: recebe as conclusões gravadas e o dia de estudo
// de hoje (YYYY-MM-DD, no fuso e na virada do usuário) e diz o que pode ser aberto.
//
//   - As lições vão em ordem; a próxima é a primeira ainda não feita. Sem limite por dia:
//     concluiu uma, a seguinte já abre.
//   - Lição feita pode ser revista a qualquer hora (não grava de novo).
//   - Segunda onda: cada lição N ≥ 50 traz a lição N − 49 para refazer. A onda pendente é
//     a mais antiga ainda não refeita, entre as lições feitas e a próxima.

import { WAVE_OFFSET, WAVE_START, type Course } from './types.ts';

export type CompletionKind = 'licao' | 'onda';

export interface Completion {
	lessonNo: number;
	kind: CompletionKind;
	/** Dia de estudo em que foi feita (YYYY-MM-DD). */
	studyDay: string;
}

export interface CourseState {
	/** Lições concluídas. */
	done: Set<number>;
	/** Próxima lição nova, ou null se o curso acabou. */
	next: number | null;
	/** Lições novas concluídas hoje, em ordem. */
	doneToday: number[];
	/** Lições refeitas na segunda onda. */
	waved: Set<number>;
	/** Lição a refazer na segunda onda agora, ou null. */
	wave: number | null;
}

export type NodeState = 'done' | 'current' | 'locked';

type CourseLessons = Pick<Course, 'lessons'>;

/** A lição que a segunda onda refaz junto da lição `no`, se existir e tiver diálogo. */
export function waveFor(course: CourseLessons, no: number): number | null {
	if (no < WAVE_START) return null;
	const target = no - WAVE_OFFSET;
	const lesson = course.lessons.find((l) => l.no === target);
	return lesson?.lines?.length ? target : null;
}

export function courseState(
	course: CourseLessons,
	completions: readonly Completion[],
	today: string
): CourseState {
	const lessons = course.lessons.map((l) => l.no).sort((a, b) => a - b);
	const own = completions.filter((c) => c.kind === 'licao');
	const done = new Set(own.map((c) => c.lessonNo));
	const waved = new Set(completions.filter((c) => c.kind === 'onda').map((c) => c.lessonNo));
	const next = lessons.find((no) => !done.has(no)) ?? null;
	const doneToday = [
		...new Set(own.filter((c) => c.studyDay === today).map((c) => c.lessonNo))
	].sort((a, b) => a - b);

	let wave: number | null = null;
	for (const no of lessons) {
		if (!done.has(no) && no !== next) continue;
		const w = waveFor(course, no);
		if (w !== null && !waved.has(w)) {
			wave = w;
			break;
		}
	}
	return { done, next, doneToday, waved, wave };
}

export function nodeState(state: CourseState, no: number): NodeState {
	if (state.done.has(no)) return 'done';
	return no === state.next ? 'current' : 'locked';
}

/** Pode abrir a lição: já feita (revisão) ou a próxima. */
export function canOpen(state: CourseState, no: number): boolean {
	return state.done.has(no) || no === state.next;
}

/** Concluir grava algo novo só para a próxima lição; revisão não grava. */
export function completesNew(state: CourseState, no: number): boolean {
	return no === state.next;
}

export function canDoWave(state: CourseState, no: number): boolean {
	return state.wave === no;
}

// ---------- Calendário do mês ----------

export interface DayCell {
	/** YYYY-MM-DD. */
	day: string;
	/** Coluna (semana do mês, a partir de 0) e linha (0 = domingo). */
	col: number;
	row: number;
	/** Lições feitas no dia (novas e da segunda onda). */
	n: number;
	/** Intensidade da cor, 0 a 4 (4 ou mais lições = 4). */
	level: 0 | 1 | 2 | 3 | 4;
	future: boolean;
}

export interface MonthActivity {
	/** YYYY-MM. */
	month: string;
	cells: DayCell[];
	weeks: number;
	/** Lições feitas no mês. */
	total: number;
	/** Dias do mês com alguma lição. */
	activeDays: number;
}

/** Mês de um dia de estudo (YYYY-MM-DD → YYYY-MM). */
export const monthOf = (day: string) => day.slice(0, 7);

/** Mês deslocado: shiftMonth('2026-01', -1) = '2025-12'. */
export function shiftMonth(month: string, delta: number): string {
	const [y, m] = month.split('-').map(Number);
	const d = new Date(Date.UTC(y, m - 1 + delta, 1));
	return d.toISOString().slice(0, 7);
}

/** Quantas lições foram feitas em cada dia do mês, no formato do calendário do GitHub. */
export function monthActivity(
	completions: readonly Completion[],
	month: string,
	today: string
): MonthActivity {
	const [y, m] = month.split('-').map(Number);
	const length = new Date(Date.UTC(y, m, 0)).getUTCDate();
	const firstWeekday = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
	const perDay = new Map<string, number>();
	for (const c of completions) {
		if (monthOf(c.studyDay) === month) perDay.set(c.studyDay, (perDay.get(c.studyDay) ?? 0) + 1);
	}
	const cells: DayCell[] = [];
	for (let d = 1; d <= length; d++) {
		const day = `${month}-${String(d).padStart(2, '0')}`;
		const slot = firstWeekday + d - 1;
		const n = perDay.get(day) ?? 0;
		cells.push({
			day,
			col: Math.floor(slot / 7),
			row: slot % 7,
			n,
			level: Math.min(4, n) as DayCell['level'],
			future: day > today
		});
	}
	const counts = [...perDay.values()];
	return {
		month,
		cells,
		weeks: Math.floor((firstWeekday + length - 1) / 7) + 1,
		total: counts.reduce((a, b) => a + b, 0),
		activeDays: counts.length
	};
}
