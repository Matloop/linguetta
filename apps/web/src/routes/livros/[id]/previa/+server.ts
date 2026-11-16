import { json } from '@sveltejs/kit';
import type { Config } from '@sveltejs/adapter-vercel';
import { parseLanguage } from '#lib/languages.ts';
import { BookError, blendReach, requireBook } from '#lib/server/books.ts';
import type { RequestHandler } from './$types';

export const config: Config = { maxDuration: 30, memory: 2048 };

/**
 * Alcance do blend no trecho: quanto das palavras cada degrau da escada de rigor consegue
 * trocar (ladder.ts) e um parágrafo real de amostra com as candidatas (o navegador escolhe o
 * degrau e as trocas de cada %). O alcance fica em cache por livro, trecho e par. Corpo:
 * { language, bookLanguage, from, to }. Não grava nada.
 */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) return json({ message: 'Entre de novo.' }, { status: 401 });
	const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
	const language = parseLanguage(body?.language);
	const bookLanguage = parseLanguage(body?.bookLanguage);
	const from = body?.from;
	const to = body?.to;
	if (
		!language ||
		!bookLanguage ||
		typeof from !== 'number' ||
		typeof to !== 'number' ||
		!Number.isInteger(from) ||
		!Number.isInteger(to) ||
		from < 0 ||
		to < from
	) {
		return json({ message: 'Requisição inválida.' }, { status: 400 });
	}
	if (language === bookLanguage) {
		return json({ message: 'A língua do livro e a do blend precisam ser diferentes.' }, { status: 400 });
	}
	try {
		const book = await requireBook(locals.supabase, params.id);
		const reach = await blendReach(locals.supabase, book, { language, bookLanguage, from, to });
		return json(reach, { headers: { 'Cache-Control': 'no-store' } });
	} catch (e) {
		if (e instanceof BookError) return json({ message: e.message }, { status: e.status });
		throw e;
	}
};
