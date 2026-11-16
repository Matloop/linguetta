// Livros com blend no servidor: registrar o EPUB enviado, montar uma versão com o léxico
// e apagar. Tudo com o cliente da sessão (RLS do dono); o original
// fica no Storage e é baixado de novo a cada função fria (cache curto entre pedidos).

import type { SupabaseClient } from '@supabase/supabase-js';
import { achievableByStep, blendPreview, bookSampleText, buildBlend, chapterDoc, chapterInfos } from '#lib/blend/book.ts';
import { detectBookLanguage } from '#lib/blend/detect-language.ts';
import { EpubError, openEpub, type Epub } from '#lib/blend/epub.ts';
import { stepFor } from '#lib/blend/ladder.ts';
import { koHash } from '#lib/blend/kohash.ts';
import type { Database, Json } from '#lib/database.types.ts';
import { languageLabel, parseLanguage, type Language } from '#lib/languages.ts';
import { loadLexicon } from './lexicon.ts';

type Client = SupabaseClient<Database>;
export type BookRow = Database['public']['Tables']['books']['Row'];

export const BOOKS_BUCKET = 'books';
export const EPUB_TYPE = 'application/epub+zip';
export const MAX_EPUB_BYTES = 50 * 1024 * 1024;

export class BookError extends Error {
	constructor(
		message: string,
		readonly status = 400
	) {
		super(message);
	}
}

export const originalPath = (userId: string, bookId: string) =>
	`${userId}/${bookId}/original.epub`;
export const versionPath = (userId: string, bookId: string, version: number) =>
	`${userId}/${bookId}/v${version}.epub`;

// ---------- Original ----------

/** Último original aberto: as chamadas seguidas do mesmo livro reaproveitam. */
let cached: { path: string; size: number; epub: Epub } | null = null;

async function download(supabase: Client, path: string): Promise<Uint8Array> {
	const { data, error } = await supabase.storage.from(BOOKS_BUCKET).download(path);
	if (error || !data) throw new BookError('Não deu para baixar o arquivo do livro.', 502);
	return new Uint8Array(await data.arrayBuffer());
}

export async function loadOriginal(supabase: Client, book: BookRow): Promise<Epub> {
	if (cached && cached.path === book.original_path && cached.size === book.original_size) {
		return cached.epub;
	}
	const epub = openEpub(await download(supabase, book.original_path));
	cached = { path: book.original_path, size: book.original_size, epub };
	return epub;
}

// ---------- Registrar ----------

/**
 * O navegador já subiu o original em <user>/<id>/original.epub: abre, lê metadados e
 * capítulos e cria o livro. EPUB inválido apaga o arquivo enviado.
 */
export async function registerBook(
	supabase: Client,
	userId: string,
	id: string,
	opts: { language: Language; fallbackLanguage: Language }
): Promise<string> {
	const path = originalPath(userId, id);
	const bytes = await download(supabase, path);
	let epub: Epub;
	try {
		epub = openEpub(bytes);
	} catch (e) {
		await supabase.storage.from(BOOKS_BUCKET).remove([path]);
		throw e instanceof EpubError ? new BookError(e.message) : e;
	}
	// O dc:language erra em edições convertidas (vem "en" num livro em português): o texto manda.
	const declared = parseLanguage(epub.language);
	const bookLanguage =
		parseLanguage(detectBookLanguage(bookSampleText(epub), declared)) ?? declared ?? opts.fallbackLanguage;
	const chapters = chapterInfos(epub, bookLanguage);
	if (!chapters.some((c) => c.words > 0)) {
		await supabase.storage.from(BOOKS_BUCKET).remove([path]);
		throw new BookError('Não achei texto nos capítulos deste EPUB.');
	}
	const title = [...(epub.title || 'Sem título').replace(/\s+/g, ' ').trim()].slice(0, 200).join('');
	const author = [...epub.author.replace(/\s+/g, ' ').trim()].slice(0, 200).join('');
	const { error } = await supabase.rpc('create_book', {
		p_id: id,
		p_title: title,
		p_author: author,
		p_book_language: bookLanguage,
		p_language: opts.language,
		p_original_size: bytes.length,
		p_chapters: chapters as unknown as Json
	});
	if (error) {
		await supabase.storage.from(BOOKS_BUCKET).remove([path]);
		throw new BookError('Não deu para guardar o livro agora.', 500);
	}
	cached = { path, size: bytes.length, epub };
	return id;
}

// ---------- Léxico ----------

/** O léxico do par do livro; sem arquivo para o par, o erro diz isso (não há plano B). */
async function lexiconOf(book: Pick<BookRow, 'book_language' | 'language'>) {
	const lexicon = await loadLexicon(book.book_language, book.language);
	if (!lexicon) {
		throw new BookError(
			`Ainda não temos o par ${languageLabel(book.book_language, 'pt')} → ${languageLabel(book.language, 'pt')} para misturar livros.`,
			422
		);
	}
	return lexicon;
}

/** Capítulos com texto entre `from` e `to` (índices do spine). */
function textSpines(epub: Epub, from: number, to: number): number[] {
	return epub.spine.filter((s) => s.index >= from && s.index <= to && chapterDoc(epub, s)).map((s) => s.index);
}

export interface Reach {
	available: boolean;
	/** Fração das palavras do trecho que cada degrau da escada (ladder.ts) consegue trocar. */
	steps: number[];
	preview: {
		text: string;
		candidates: {
			form: string;
			target: string;
			lemma: string;
			translation: string;
			start: number;
			tier: number;
			rank: number;
		}[];
	} | null;
}

/** Alcance por degrau já calculado: livro, trecho e par (o cálculo é a parte cara da prévia). */
const reachCache = new Map<string, number[]>();
const REACH_CACHE_MAX = 32;

const reachKey = (book: BookRow, o: { bookLanguage: string; language: string; from: number; to: number }) =>
	`${book.id}|${book.original_size}|${o.bookLanguage}|${o.language}|${o.from}|${o.to}`;

function rememberReach(key: string, steps: number[]) {
	reachCache.delete(key);
	reachCache.set(key, steps);
	if (reachCache.size > REACH_CACHE_MAX) reachCache.delete(reachCache.keys().next().value!);
}

/** O que cada degrau da escada entrega no trecho e um parágrafo de amostra. Não grava nada. */
export async function blendReach(
	supabase: Client,
	book: BookRow,
	opts: { bookLanguage: string; language: string; from: number; to: number }
): Promise<Reach> {
	const lexicon = await loadLexicon(opts.bookLanguage, opts.language);
	if (!lexicon) return { available: false, steps: [], preview: null };
	const epub = await loadOriginal(supabase, book);
	const spines = textSpines(epub, opts.from, opts.to);
	const o = { bookLanguage: opts.bookLanguage, language: opts.language, lexicon };
	const key = reachKey(book, opts);
	let steps = reachCache.get(key);
	if (!steps) {
		steps = achievableByStep(epub, spines, o).fractions;
	}
	rememberReach(key, steps);
	return {
		available: true,
		steps,
		preview: spines.length ? blendPreview(epub, spines[0], o) : null
	};
}

// ---------- Versão ----------

/** Lemas do banco do usuário no idioma do blend: entram primeiro na escolha. */
async function bankLemmas(supabase: Client, userId: string, language: string): Promise<string[]> {
	const { data } = await supabase
		.from('items')
		.select('lemma')
		.eq('user_id', userId)
		.eq('language', language)
		.is('deleted_at', null)
		.limit(5000);
	return (data ?? []).map((r) => r.lemma);
}

export interface VersionResult {
	version: number;
	links: number;
	/** Palavras trocadas e palavras dos capítulos do intervalo. */
	swaps: number;
	words: number;
	/** Degrau da escada usado e o que ele liberou (ladder.ts). */
	step: number;
	relaxed: string[];
	size: number;
	koHash: string;
}

/**
 * Gera o EPUB inteiro, com blend do léxico nos capítulos do intervalo, e troca a versão
 * atual. As linhas das versões velhas ficam (o koHash de um arquivo antigo no aparelho
 * ainda acha o livro); os arquivos velhos saem do Storage.
 */
export async function buildVersion(
	supabase: Client,
	userId: string,
	book: BookRow
): Promise<VersionResult> {
	const [lexicon, { data: versions }, prefer, epub] = await Promise.all([
		lexiconOf(book),
		supabase.from('book_versions').select('version, path').eq('book_id', book.id),
		bankLemmas(supabase, userId, book.language),
		loadOriginal(supabase, book)
	]);
	const spines = textSpines(epub, book.range_from, book.range_to);
	if (spines.length === 0) throw new BookError('Nenhum capítulo com texto no intervalo.');
	// Se a prévia já calculou o alcance deste trecho, a escolha começa no degrau certo.
	const known = reachCache.get(
		reachKey(book, { bookLanguage: book.book_language, language: book.language, from: book.range_from, to: book.range_to })
	);
	const { bytes, links, swaps, words, step, relaxed } = buildBlend(epub, spines, {
		startStep: known ? stepFor(known, book.coverage) : 0,
		bookLanguage: book.book_language,
		language: book.language,
		coverage: book.coverage,
		lexicon,
		preferWords: prefer
	});
	const version = Math.max(0, ...(versions ?? []).map((v) => v.version)) + 1;
	const path = versionPath(userId, book.id, version);
	const hash = koHash(bytes);

	const { error: upError } = await supabase.storage
		.from(BOOKS_BUCKET)
		.upload(path, new Blob([bytes as BlobPart], { type: EPUB_TYPE }), {
			contentType: EPUB_TYPE,
			upsert: true
		});
	if (upError) throw new BookError('Não deu para guardar o livro gerado.', 502);
	const { error: insError } = await supabase.from('book_versions').insert({
		book_id: book.id,
		user_id: userId,
		version,
		path,
		ko_hash: hash,
		size: bytes.length
	});
	if (insError) {
		await supabase.storage.from(BOOKS_BUCKET).remove([path]);
		throw new BookError('Não deu para registrar a versão.', 500);
	}
	await supabase.from('books').update({ current_version: version }).eq('id', book.id);
	const old = (versions ?? []).map((v) => v.path).filter((p) => p !== path);
	if (old.length) await supabase.storage.from(BOOKS_BUCKET).remove(old);
	return { version, links, swaps, words, step, relaxed, size: bytes.length, koHash: hash };
}

// ---------- Apagar ----------

/** Apaga o livro e os arquivos dele; a obra e os encontros ficam. */
export async function deleteBook(supabase: Client, userId: string, bookId: string) {
	const folder = `${userId}/${bookId}`;
	const { data: files } = await supabase.storage.from(BOOKS_BUCKET).list(folder, { limit: 1000 });
	const paths = (files ?? []).map((f) => `${folder}/${f.name}`);
	if (paths.length) await supabase.storage.from(BOOKS_BUCKET).remove(paths);
	const { error } = await supabase.from('books').delete().eq('id', bookId);
	if (error) throw new BookError('Não deu para apagar o livro.', 500);
	if (cached?.path.startsWith(`${folder}/`)) cached = null;
}

// ---------- Tela ----------

/** O livro da sessão; 404 se não é do usuário. */
export async function requireBook(supabase: Client, id: string): Promise<BookRow> {
	if (!/^[0-9a-f-]{36}$/i.test(id)) throw new BookError('Livro não encontrado.', 404);
	const { data, error } = await supabase.from('books').select('*').eq('id', id).maybeSingle();
	if (error) throw new BookError('Não deu para abrir o livro agora.', 500);
	if (!data) throw new BookError('Livro não encontrado.', 404);
	return data;
}

/** Capítulos para a tela. */
export async function chapterRows(supabase: Client, bookIds: readonly string[]) {
	if (bookIds.length === 0) return [];
	const { data, error } = await supabase
		.from('book_chapters')
		.select('book_id, spine, title, words')
		.in('book_id', [...bookIds])
		.order('spine');
	if (error) throw new BookError('Não deu para ler os capítulos.', 500);
	return (data ?? []).map((c) => ({
		bookId: c.book_id,
		spine: c.spine,
		title: c.title,
		words: c.words
	}));
}
