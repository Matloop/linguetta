import { error, json } from '@sveltejs/kit';
import { findCourseLesson, saveNoteFicha } from '#lib/server/curso.ts';
import type { RequestHandler } from './$types';

/** "+ Ficha" de uma nota: frente = a fala; verso = tradução, literal e a nota. */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para criar fichas.');
	const found = findCourseLesson(params);
	if (!found) error(404, 'Lição não encontrada.');

	let body: Record<string, unknown>;
	try {
		body = (await request.json()) as Record<string, unknown>;
	} catch {
		error(400, 'Corpo JSON inválido.');
	}
	const index = body.line;
	const line =
		typeof index === 'number' && Number.isInteger(index) ? found.lesson.lines?.[index] : undefined;
	if (!line?.note) error(400, 'Fala sem nota.');
	await saveNoteFicha(locals.supabase, user.id, found.course, line).catch(() => {
		error(500, 'Não deu para criar a ficha agora.');
	});
	return json({ ok: true });
};
