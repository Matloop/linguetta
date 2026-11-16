import { json } from '@sveltejs/kit';
import { MAX_COVERAGE } from '#lib/blend/select.ts';
import { parseLanguage } from '#lib/languages.ts';
import { loadSettings } from '#lib/server/settings.ts';
import { BookError, chapterRows, requireBook } from '#lib/server/books.ts';
import type { RequestHandler } from './$types';

/** Dados do modal de blend: o livro e os capítulos. */
export const GET: RequestHandler = async ({ locals, params }) => {
	const user = await locals.getUser();
	if (!user) return json({ message: 'Entre para ver seus livros.' }, { status: 401 });
	try {
		const book = await requireBook(locals.supabase, params.id);
		const chapters = await chapterRows(locals.supabase, [book.id]);
		return json({
			book: {
				id: book.id,
				title: book.title,
				author: book.author,
				bookLanguage: book.book_language,
				language: book.language,
				coverage: book.coverage,
				rangeFrom: book.range_from,
				rangeTo: book.range_to,
				onDevice: book.on_device,
				version: book.current_version
			},
			chapters
		});
	} catch (e) {
		if (e instanceof BookError) return json({ message: e.message }, { status: e.status });
		throw e;
	}
};

/** Grava língua, cobertura e intervalo do blend. */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) return json({ message: 'Entre de novo.' }, { status: 401 });
	const { studyLanguages } = await loadSettings(
		locals.supabase,
		user.id,
		request.headers.get('accept-language')
	);
	const form = (await request.json().catch(() => null)) as Record<string, unknown> | null;
	if (!form) return json({ message: 'Pedido inválido.' }, { status: 400 });
	let book;
	try {
		book = await requireBook(locals.supabase, params.id);
	} catch (e) {
		if (e instanceof BookError) return json({ message: e.message }, { status: e.status });
		throw e;
	}
	const language = parseLanguage(form.language);
	if (!language || !studyLanguages.includes(language)) {
		return json({ message: 'Escolha um dos seus idiomas de estudo.' }, { status: 400 });
	}
	const bookLanguage = parseLanguage(form.bookLanguage);
	if (!bookLanguage) {
		return json({ message: 'Língua do livro inválida (use it, pt-BR, en...).' }, { status: 400 });
	}
	if (bookLanguage === language) {
		return json({ message: 'A língua do livro e a do blend precisam ser diferentes.' }, { status: 400 });
	}
	const percent = Number(form.coverage);
	if (!Number.isFinite(percent) || percent < 1 || percent > MAX_COVERAGE * 100) {
		return json({ message: `Quanto: de 1% a ${MAX_COVERAGE * 100}%.` }, { status: 400 });
	}
	const coverage = Math.round(percent) / 100;
	const from = Number(form.from);
	const to = Number(form.to);
	if (!Number.isInteger(from) || !Number.isInteger(to) || from < 0 || to < from) {
		return json({ message: 'Intervalo de capítulos inválido.' }, { status: 400 });
	}
	const { error: dbError } = await locals.supabase
		.from('books')
		.update({
			language,
			book_language: bookLanguage,
			coverage,
			range_from: from,
			range_to: to
		})
		.eq('id', book.id);
	if (dbError) return json({ message: 'Não deu para salvar agora.' }, { status: 500 });
	return json({});
};
