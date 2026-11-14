import { error, json } from '@sveltejs/kit';
import { findCourseLesson, parseCourseWord, saveCourseWord } from '#lib/server/curso.ts';
import type { RequestHandler } from './$types';

/** Guarda uma palavra tocada numa fala da lição, com a fala como frase do encontro. */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para guardar palavras.');
	const found = findCourseLesson(params);
	if (!found) error(404, 'Lição não encontrada.');

	let raw: unknown;
	try {
		raw = await request.json();
	} catch {
		error(400, 'Corpo JSON inválido.');
	}
	const word = parseCourseWord(raw, found.lesson);
	if (!word) error(400, 'Palavra inválida.');
	const saved = await saveCourseWord(locals.supabase, found.course, found.lesson, word).catch(
		() => {
			error(500, 'Não deu para guardar agora. Tente de novo.');
		}
	);
	return json(saved);
};
