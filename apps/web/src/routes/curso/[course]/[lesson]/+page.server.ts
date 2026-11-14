import { error, redirect } from '@sveltejs/kit';
import { canDoWave, canOpen, completesNew } from '#lib/curso/progress.ts';
import { findCourseLesson, loadCourseState, studyToday } from '#lib/server/curso.ts';
import type { PageServerLoad } from './$types';

/**
 * Player de uma lição. Abre a lição já feita (revisão) ou a próxima; com ?onda, a onda
 * pendente. O resto volta para a trilha.
 */
export const load: PageServerLoad = async ({ locals, params, url, parent }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para fazer a lição.');
	const { shell } = await parent();
	if (!shell) error(401, 'Entre para fazer a lição.');
	const found = findCourseLesson(params);
	if (!found) error(404, 'Lição não encontrada.');
	const { course, lesson } = found;

	const today = studyToday(new Date(), shell.clock);
	const state = await loadCourseState(locals.supabase, user.id, course, today).catch(() => {
		error(500, 'Não deu para carregar a lição agora.');
	});
	const mode = url.searchParams.has('onda') ? 'onda' : 'licao';
	if (mode === 'onda' ? !canDoWave(state, lesson.no) : !canOpen(state, lesson.no))
		redirect(303, '/curso');

	const isNew = completesNew(state, lesson.no);
	// A onda pendente é oferecida no fim de cada lição nova.
	const wave = mode === 'licao' && isNew ? state.wave : null;

	return {
		course: { id: course.id, title: course.title, language: course.language },
		lesson,
		mode,
		isNew,
		wave
	} as const;
};
