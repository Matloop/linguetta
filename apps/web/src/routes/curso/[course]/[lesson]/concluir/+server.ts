import { error, json } from '@sveltejs/kit';
import { loadReviewSettings } from '#lib/server/settings.ts';
import { completeLesson, completeWave, findCourseLesson, studyToday } from '#lib/server/curso.ts';
import type { RequestHandler } from './$types';

/**
 * Conclui a lição (ou, com `onda: true`, a segunda onda de hoje, com as falas em que travou).
 * Responde `result`: gravada, revisao (já feita, nada a gravar) ou bloqueada.
 */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para concluir a lição.');
	const found = findCourseLesson(params);
	if (!found) error(404, 'Lição não encontrada.');
	const { course, lesson } = found;

	let body: Record<string, unknown> = {};
	try {
		body = ((await request.json()) ?? {}) as Record<string, unknown>;
	} catch {
		error(400, 'Corpo JSON inválido.');
	}
	const { clock } = await loadReviewSettings(locals.supabase, user.id);
	const today = studyToday(new Date(), clock);

	try {
		if (body.onda === true) {
			const count = lesson.lines?.length ?? 0;
			const raw = Array.isArray(body.stuck) ? body.stuck : [];
			const stuck = [
				...new Set(raw.filter((n): n is number => Number.isInteger(n) && n >= 0 && n < count))
			];
			const result = await completeWave(locals.supabase, user.id, course, lesson.no, stuck, today);
			return json({ result });
		}
		const result = await completeLesson(locals.supabase, user.id, course, lesson.no, today);
		return json({ result });
	} catch {
		error(500, 'Não deu para gravar agora. Tente de novo.');
	}
};
