import { error } from '@sveltejs/kit';
import { COURSES } from '#lib/curso/index.ts';
import { courseState } from '#lib/curso/progress.ts';
import { loadCompletions, studyToday } from '#lib/server/curso.ts';
import type { PageServerLoad } from './$types';

/** Trilha do curso do idioma ativo: lições, o que já foi feito e as conclusões por dia. */
export const load: PageServerLoad = async ({ locals, parent }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para ver o curso.');
	const { shell } = await parent();
	if (!shell) error(401, 'Entre para ver o curso.');

	const all = Object.values(COURSES);
	const primary = (shell.active ?? '').split('-')[0];
	const course = all.find((c) => c.language === primary) ?? all[0];
	if (!course) error(404, 'Nenhum curso disponível.');

	const today = studyToday(new Date(), shell.clock);
	const completions = await loadCompletions(locals.supabase, user.id, course.id).catch(() => {
		error(500, 'Não deu para carregar o curso agora.');
	});
	const state = courseState(course, completions, today);
	const toReview =
		shell.summary?.languages.find((l) => l.language === course.language)?.toReview ?? null;

	return {
		course: {
			id: course.id,
			title: course.title,
			language: course.language,
			planned: course.planned,
			units: course.units,
			lessons: course.lessons.map((l) => ({
				no: l.no,
				kind: l.kind,
				title: l.title,
				titlePt: l.titlePt,
				lines: l.lines?.length ?? 0,
				steps: l.steps.map((s) => s.kind)
			}))
		},
		state: { ...state, done: [...state.done], waved: [...state.waved] },
		completions,
		today,
		toReview
	};
};
