// Curso no banco: progresso (course_progress), palavra guardada numa lição (save_items com
// obra 'curso' e encontro 'curso') e nota virando ficha. As regras ficam em
// lib/curso/progress.ts; aqui só se lê, confere e grava, com o cliente do usuário (RLS).

import type { SupabaseClient } from '@supabase/supabase-js';
import { lemmaKey } from '@linguetta/language';
import type { Database } from '#lib/database.types.ts';
import { studyDayKey } from '#lib/decks.ts';
import { fichaTextToHtml } from '#lib/fichas.ts';
import { LIMITS, charLength, normalizeLemma, normalizeText, type SaveEntry } from '#lib/items.ts';
import { parseLanguage } from '#lib/languages.ts';
import { dayStart, type DayClock } from '#lib/review.ts';
import { findHighlight } from '#lib/sentence.ts';
import { getCourse, getLesson, type Course, type Lesson, type Line } from '#lib/curso/index.ts';
import { plainText } from '#lib/curso/markup.ts';
import {
	canDoWave,
	completesNew,
	courseState,
	type Completion,
	type CourseState
} from '#lib/curso/progress.ts';
import { defaultDeckId } from './decks.ts';

type Client = SupabaseClient<Database>;

/** Dia de estudo de agora, como o progresso grava (YYYY-MM-DD). */
export function studyToday(now: Date, clock: DayClock): string {
	return studyDayKey(dayStart(now, clock), clock.timeZone);
}

export async function loadCompletions(
	supabase: Client,
	userId: string,
	courseId: string
): Promise<Completion[]> {
	const { data, error } = await supabase
		.from('course_progress')
		.select('lesson_no, kind, study_day')
		.eq('user_id', userId)
		.eq('course_id', courseId);
	if (error) throw new Error(`course_progress: ${error.message}`);
	return data.map((r) => ({
		lessonNo: r.lesson_no,
		kind: r.kind === 'onda' ? 'onda' : 'licao',
		studyDay: r.study_day
	}));
}

export async function loadCourseState(
	supabase: Client,
	userId: string,
	course: Course,
	today: string
): Promise<CourseState> {
	return courseState(course, await loadCompletions(supabase, userId, course.id), today);
}

export type CompleteResult = 'gravada' | 'revisao' | 'bloqueada';

/**
 * Conclui uma lição. Só a próxima grava; lição já feita é revisão (nada a
 * gravar); qualquer outra é recusada.
 */
export async function completeLesson(
	supabase: Client,
	userId: string,
	course: Course,
	no: number,
	today: string
): Promise<CompleteResult> {
	const state = await loadCourseState(supabase, userId, course, today);
	if (state.done.has(no)) return 'revisao';
	if (!completesNew(state, no)) return 'bloqueada';
	const { error } = await supabase
		.from('course_progress')
		.insert({
			user_id: userId,
			course_id: course.id,
			lesson_no: no,
			kind: 'licao',
			study_day: today
		});
	if (error && error.code !== '23505') throw new Error(`course_progress: ${error.message}`);
	return 'gravada';
}

/** Conclui a onda pendente (segunda onda), com as falas em que a pessoa travou. */
export async function completeWave(
	supabase: Client,
	userId: string,
	course: Course,
	no: number,
	stuck: number[],
	today: string
): Promise<CompleteResult> {
	const state = await loadCourseState(supabase, userId, course, today);
	if (state.waved.has(no)) return 'revisao';
	if (!canDoWave(state, no)) return 'bloqueada';
	const { error } = await supabase.from('course_progress').insert({
		user_id: userId,
		course_id: course.id,
		lesson_no: no,
		kind: 'onda',
		study_day: today,
		stuck
	});
	if (error && error.code !== '23505') throw new Error(`course_progress: ${error.message}`);
	return 'gravada';
}

// ---------- Palavra e ficha ----------

export interface CourseWord {
	lemma: string;
	sense: string;
	/** A palavra como está na fala. */
	form: string;
	/** Índice da fala no diálogo. */
	line: number;
}

/** Corpo do POST da palavra; null se inválido. A fala precisa existir na lição. */
export function parseCourseWord(raw: unknown, lesson: Lesson): CourseWord | null {
	if (!raw || typeof raw !== 'object') return null;
	const r = raw as Record<string, unknown>;
	const str = (v: unknown) => (typeof v === 'string' ? v : '');
	const lemma = normalizeLemma(str(r.lemma));
	const sense = normalizeText(str(r.sense));
	const form = normalizeLemma(str(r.form));
	const line = r.line;
	if (!lemma || charLength(lemma) > LIMITS.lemma) return null;
	if (charLength(sense) > LIMITS.sense || charLength(form) > LIMITS.form) return null;
	if (typeof line !== 'number' || !Number.isInteger(line) || !lesson.lines?.[line]) return null;
	return { lemma, sense, form, line };
}

/** Obra da lição: uma por lição, achada pelo caminho (ref_key path:curso:<id>:<nº>). */
function lessonWork(course: Course, lesson: Lesson, language: string) {
	return {
		kind: 'curso' as const,
		title: `${course.title} · Lição ${lesson.no}`,
		subtitle: lesson.title,
		refs: { path: `curso:${course.id}:${lesson.no}` },
		language
	};
}

/** Guarda a palavra tocada numa fala, com a fala e a tradução dela como encontro. */
export async function saveCourseWord(
	supabase: Client,
	course: Course,
	lesson: Lesson,
	word: CourseWord
): Promise<{ created: boolean; lemma: string }> {
	const language = parseLanguage(course.language);
	const line = lesson.lines?.[word.line];
	if (!language || !line) throw new Error('curso: idioma ou fala inválidos');
	const sentence = plainText(line.it);
	const entry: SaveEntry = {
		language,
		lemma: word.lemma,
		lemma_key: lemmaKey(word.lemma, language),
		reading: '',
		sense: word.sense,
		note: '',
		ipa: '',
		part_of_speech: '',
		encounter: {
			form: word.form || word.lemma,
			sentence,
			highlight: findHighlight(sentence, [word.form, word.lemma], language),
			sense: word.sense,
			translation: plainText(line.pt),
			position: {},
			origin: 'curso',
			seen_at: null,
			client_id: null
		},
		work: lessonWork(course, lesson, language)
	};
	const { data, error } = await supabase.rpc('save_items', { p_items: [entry] });
	const saved = data?.[0];
	if (error || !saved) throw error ?? new Error('save_items sem resultado');
	return { created: saved.created, lemma: saved.lemma };
}

/** Texto da ficha de uma nota: frente = a fala; verso = tradução, literal e a nota. */
export function noteFicha(line: Line): { front: string; back: string } {
	const back = [plainText(line.pt)];
	if (line.lit) back.push(`Literal: ${plainText(line.lit)}`);
	// *it* vira itálico e **x** negrito, as duas marcas que a ficha guarda.
	if (line.note)
		back.push(
			line.note.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<i>$1</i>')
		);
	return { front: plainText(line.it), back: back.join('\n\n') };
}

/** Grava a nota da fala como ficha no baralho padrão do idioma do curso. */
export async function saveNoteFicha(
	supabase: Client,
	userId: string,
	course: Course,
	line: Line
): Promise<void> {
	const language = parseLanguage(course.language);
	if (!language) throw new Error('curso: idioma inválido');
	const { front, back } = noteFicha(line);
	const deck = await defaultDeckId(supabase, language);
	// O gatilho fichas_sync_flashcards cria o flashcard frente → verso.
	const { error } = await supabase.from('fichas').insert({
		user_id: userId,
		language,
		front: fichaTextToHtml(front),
		back: fichaTextToHtml(back),
		reverse: false,
		tags: ['curso'],
		deck_id: deck
	});
	if (error) throw new Error(`fichas: ${error.message}`);
}

/** Curso e lição dos parâmetros da rota (/curso/<curso>/<nº>), ou null. */
export function findCourseLesson(params: {
	course: string;
	lesson: string;
}): { course: Course; lesson: Lesson } | null {
	const course = getCourse(params.course);
	if (!course || !/^\d{1,3}$/.test(params.lesson)) return null;
	const lesson = getLesson(course, Number(params.lesson));
	return lesson ? { course, lesson } : null;
}
