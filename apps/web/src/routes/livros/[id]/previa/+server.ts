import { json } from '@sveltejs/kit';
import type { Config } from '@sveltejs/adapter-vercel';
import { countWords } from '@linguetta/language';
import { chapterDoc, locatedCandidates, previewParagraph } from '#lib/blend/book.ts';
import { parseLanguage } from '#lib/languages.ts';
import { ai, aiFailure } from '#lib/server/ai-chain.ts';
import { partRequest } from '#lib/server/book-ai.ts';
import { BookError, loadOriginal, requireBook } from '#lib/server/books.ts';
import type { RequestHandler } from './$types';

// Dois providers de até 25 s cada.
export const config: Config = { maxDuration: 60 };

/**
 * Prévia do blend: um parágrafo real do capítulo `spine` com candidata para cada palavra
 * (até 60). O navegador escolhe as trocas de cada % com selectSwaps, sem nova chamada.
 * Corpo: { spine, language, bookLanguage }. Não grava nada.
 */
export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) return json({ message: 'Entre de novo.' }, { status: 401 });
	const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
	const spine = body?.spine;
	const language = parseLanguage(body?.language);
	const bookLanguage = parseLanguage(body?.bookLanguage);
	if (typeof spine !== 'number' || !Number.isInteger(spine) || spine < 0 || !language || !bookLanguage) {
		return json({ message: 'Requisição inválida.' }, { status: 400 });
	}
	if (language === bookLanguage) {
		return json({ message: 'A língua do livro e a do blend precisam ser diferentes.' }, { status: 400 });
	}
	try {
		const book = await requireBook(locals.supabase, params.id);
		const epub = await loadOriginal(locals.supabase, book);
		const item = epub.spine[spine];
		const doc = item ? chapterDoc(epub, item) : null;
		const para = doc ? previewParagraph(doc, bookLanguage) : null;
		if (!doc || para === null) return json({ message: 'Capítulo sem texto.' }, { status: 404 });
		const text = doc.paragraphs[para].text;
		const candidates = await ai.json(
			partRequest({
				bookLanguage,
				language,
				paragraphs: [{ para, text }],
				wanted: Math.min(60, Math.max(3, countWords(text, bookLanguage)))
			})
		);
		const located = locatedCandidates(doc, para, candidates, bookLanguage).map(
			({ form, target, lemma, translation, start }) => ({ form, target, lemma, translation, start })
		);
		return json({ text, candidates: located }, { headers: { 'Cache-Control': 'no-store' } });
	} catch (e) {
		if (e instanceof BookError) return json({ message: e.message }, { status: e.status });
		return aiFailure(e, 'livros/previa');
	}
};
