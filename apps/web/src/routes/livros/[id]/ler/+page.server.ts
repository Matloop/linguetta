import { error } from '@sveltejs/kit';
import { BOOKS_BUCKET } from '#lib/server/books.ts';
import { isColor, type Highlight } from '#lib/reader/highlights.ts';
import type { PageServerLoad } from './$types';

/** A URL assinada vale 15 min; o leitor baixa o arquivo inteiro logo ao abrir. */
const SIGNED_SECONDS = 15 * 60;

/** Lê a versão com blend; sem ela, o original enviado (sem links de palavra). */
export const load: PageServerLoad = async ({ locals, params }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para ler.');

	const { data: book } = await locals.supabase
		.from('books')
		.select('id, title, author, book_language, language, original_path, current_version')
		.eq('id', params.id)
		.maybeSingle();
	if (!book) error(404, 'Livro não encontrado.');

	const [{ data: version }, { data: progress }, { data: marks }] = await Promise.all([
		book.current_version
			? locals.supabase
					.from('book_versions')
					.select('path')
					.eq('book_id', book.id)
					.eq('version', book.current_version)
					.maybeSingle()
			: Promise.resolve({ data: null }),
		locals.supabase
			.from('book_progress')
			.select('spine, chapter_percent, percent, at')
			.eq('book_id', book.id)
			.maybeSingle(),
		locals.supabase
			.from('book_highlights')
			.select('id, spine, quote, prefix, suffix, chapter, percent, color, note, created_at')
			.eq('book_id', book.id)
			.order('spine')
			.order('percent')
	]);
	const path = version?.path ?? book.original_path;
	const { data: signed } = await locals.supabase.storage
		.from(BOOKS_BUCKET)
		.createSignedUrl(path, SIGNED_SECONDS);
	if (!signed) error(503, 'Não deu para abrir o arquivo do livro agora.');

	return {
		book: {
			id: book.id,
			title: book.title,
			author: book.author,
			language: book.language,
			bookLanguage: book.book_language
		},
		fileUrl: signed.signedUrl,
		highlights: (marks ?? []).map(
			(m): Highlight => ({
				id: m.id,
				spine: m.spine,
				quote: m.quote,
				prefix: m.prefix,
				suffix: m.suffix,
				chapter: m.chapter,
				percent: m.percent,
				color: isColor(m.color) ? m.color : 'amarelo',
				note: m.note,
				createdAt: m.created_at
			})
		),
		progress: progress
			? {
					spine: progress.spine,
					chapterPercent: progress.chapter_percent,
					percent: progress.percent
				}
			: null
	};
};
