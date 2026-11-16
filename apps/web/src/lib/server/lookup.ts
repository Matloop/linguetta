// Consulta de dicionário no contexto: a pessoa toca uma palavra (ou arrasta sobre uma
// expressão) numa linha da letra ou do curso e a IA dá o sentido dela NAQUELA frase.
// O resultado fica num cache compartilhado (dictionary_lookups), chaveado pelo hash do
// pedido inteiro.

import { createHash } from 'node:crypto';
import { languageName } from '@linguetta/language';
import { LIMITS } from '#lib/items.ts';
import { parseLanguage, type Language } from '#lib/languages.ts';
import type { AiChain, JsonRequest } from './ai.ts';
import { LEMMA_CASE, LEMMA_FORM, READING } from './suggest.ts';

/** Teto da palavra/expressão e das linhas de contexto. */
export const LOOKUP_LIMITS = { text: 100, sentence: LIMITS.sentence } as const;

export interface LookupRequest {
	language: Language;
	text: string;
	sentence: string;
	/** Linha anterior; só contexto, pode ser vazia. */
	before: string;
	/** Linha seguinte; só contexto, pode ser vazia. */
	after: string;
	/** false quando quem chama já tem a tradução da linha (curso). */
	translateSentence: boolean;
}

export interface Lookup {
	lemma: string;
	reading: string;
	pos: string;
	sense: string;
	/** A frase na língua nativa; null quando translateSentence = false. */
	translation: string | null;
}

/** Cache compartilhado entre usuários; get devolve o JSON guardado ou null. */
export interface LookupCache {
	get(key: string): Promise<unknown>;
	put(key: string, value: Lookup): Promise<void>;
}

function cap(s: string, max: number): string {
	return [...s].slice(0, max).join('');
}

function clean(value: unknown): string {
	return typeof value === 'string' ? value.normalize('NFC').replace(/\s+/g, ' ').trim() : '';
}

function length(s: string): number {
	return [...s].length;
}

/** Valida o corpo do POST contra os idiomas de estudo; devolve o pedido ou o erro (400). */
export function parseLookupRequest(
	body: unknown,
	studyLanguages: readonly Language[]
): LookupRequest | { error: string } {
	if (!body || typeof body !== 'object') return { error: 'Corpo inválido.' };
	const b = body as Record<string, unknown>;
	const language = parseLanguage(b.language);
	if (!language || !studyLanguages.includes(language)) {
		return { error: 'Idioma fora dos seus idiomas de estudo.' };
	}
	if (b.text != null && typeof b.text !== 'string') return { error: 'Palavra inválida.' };
	const text = clean(b.text);
	if (!text) return { error: 'Escolha uma palavra.' };
	if (length(text) > LOOKUP_LIMITS.text) {
		return { error: `Use no máximo ${LOOKUP_LIMITS.text} caracteres.` };
	}
	for (const field of ['sentence', 'before', 'after'] as const) {
		if (b[field] != null && typeof b[field] !== 'string') return { error: 'Frase inválida.' };
	}
	const sentence = clean(b.sentence);
	if (!sentence) return { error: 'Falta a frase.' };
	const before = clean(b.before);
	const after = clean(b.after);
	if ([sentence, before, after].some((s) => length(s) > LOOKUP_LIMITS.sentence)) {
		return { error: `A frase pode ter no máximo ${LOOKUP_LIMITS.sentence} caracteres.` };
	}
	if (typeof b.translateSentence !== 'boolean') return { error: 'translateSentence inválido.' };
	return { language, text, sentence, before, after, translateSentence: b.translateSentence };
}

/**
 * Chave do cache: sha256 do pedido inteiro mais a língua nativa. O texto vai em
 * minúsculas (a frase já diz se era maiúscula no começo da linha ou substantivo alemão).
 */
export function lookupCacheKey(req: LookupRequest, nativeLanguage: Language): string {
	const parts = [
		req.language,
		nativeLanguage,
		req.text.toLocaleLowerCase(req.language),
		req.sentence,
		req.before,
		req.after,
		req.translateSentence
	];
	return createHash('sha256').update(JSON.stringify(parts), 'utf8').digest('hex');
}

const STR = { type: 'string' } as const;

/** Formato strict (Groq e Gemini). translation vem '' quando não é pedida. */
export const LOOKUP_SCHEMA = {
	type: 'object',
	properties: { lemma: STR, reading: STR, pos: STR, sense: STR, translation: STR },
	required: ['lemma', 'reading', 'pos', 'sense', 'translation'],
	additionalProperties: false
};

function name(tag: Language): string {
	return languageName(tag, 'en');
}

/** O pedido para a cadeia de IA. */
export function lookupRequest(req: LookupRequest, nativeLanguage: Language): JsonRequest<Lookup> {
	const target = name(req.language);
	const native = name(nativeLanguage);
	const system = `You are a ${target}-${native} dictionary for a speaker of ${native} learning ${target}. The learner tapped a word, or selected an expression, in a line of a song or a lesson. Explain it as used IN THAT LINE (the previous and next lines, when given, are only context). Fill:
- lemma: the dictionary form of it. ${LEMMA_CASE} ${LEMMA_FORM}
- reading: for the lemma, ${READING}
- pos: a short grammatical note in ${native} about the form as it appears in the line (part of speech, and person/number/tense/gender when relevant), at most 8 words; an empty string for an expression with nothing useful to say.
- sense: its meaning in ${native} in this line, like a dictionary gloss: 1 to 6 words, close synonyms separated by commas, no full sentence. For an expression, the meaning of the whole expression.
- translation: ${req.translateSentence ? `a natural ${native} translation of the line only (not the previous or next lines), using the sense above.` : 'an empty string (the learner already has the translation).'}`;
	const user = [
		`Language: ${target} (${req.language})`,
		`Learner's native language: ${native} (${nativeLanguage})`,
		req.before && `Previous line: ${req.before}`,
		`Line: ${req.sentence}`,
		req.after && `Next line: ${req.after}`,
		`${req.text.includes(' ') ? 'Expression' : 'Word'}: ${req.text}`
	]
		.filter(Boolean)
		.join('\n');

	return {
		system,
		user,
		schema: LOOKUP_SCHEMA,
		schemaName: 'lookup',
		maxTokens: 2000,
		parse: (data) => parseLookupResult(data, req.translateSentence)
	};
}

/**
 * Normaliza a saída do modelo (ou o que veio do cache); null se não tem lema ou sentido.
 * translation é null quando não foi pedida, e null também se a IA não a deu.
 */
export function parseLookupResult(data: unknown, translateSentence: boolean): Lookup | null {
	if (!data || typeof data !== 'object') return null;
	const d = data as Record<string, unknown>;
	const lemma = cap(clean(d.lemma), LIMITS.lemma);
	const sense = cap(clean(d.sense), LIMITS.sense);
	if (!lemma || !sense) return null;
	const translation = translateSentence ? cap(clean(d.translation), LIMITS.translation) : '';
	if (translateSentence && !translation) return null;
	return {
		lemma,
		reading: cap(clean(d.reading), LIMITS.reading),
		pos: cap(clean(d.pos), LIMITS.partOfSpeech),
		sense,
		translation: translateSentence ? translation : null
	};
}

/** Cache primeiro; na falta, a IA, e guarda. Erro do cache não impede a consulta. */
export async function lookupWord(
	ai: AiChain,
	cache: LookupCache,
	req: LookupRequest,
	nativeLanguage: Language
): Promise<Lookup> {
	const key = lookupCacheKey(req, nativeLanguage);
	const hit = parseLookupResult(await cache.get(key).catch(() => null), req.translateSentence);
	if (hit) return hit;
	const result = await ai.json(lookupRequest(req, nativeLanguage));
	await cache.put(key, result).catch((e) => console.error('consultar: cache', e));
	return result;
}
