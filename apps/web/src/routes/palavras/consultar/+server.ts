import { json } from '@sveltejs/kit';
import { ai, aiFailure, jsonFail, NO_STORE } from '#lib/server/ai-chain.ts';
import { lookupWord, parseLookupRequest, type LookupCache } from '#lib/server/lookup.ts';
import { loadSettings } from '#lib/server/settings.ts';
import type { RequestHandler } from './$types';

/**
 * Dicionário no contexto: { language, text, sentence, before?, after?, translateSentence } →
 * { lemma, reading, pos, sense, translation }. sense é o sentido de text naquela frase;
 * translation é a frase na língua nativa, ou null com translateSentence = false.
 */
export const POST: RequestHandler = async ({ locals, request }) => {
	const user = await locals.getUser();
	if (!user) return jsonFail(401, 'Entre para usar a IA.');

	const body: unknown = await request.json().catch(() => null);
	const settings = await loadSettings(locals.supabase, user.id);
	const req = parseLookupRequest(body, settings.studyLanguages);
	if ('error' in req) return jsonFail(400, req.error);

	const cache: LookupCache = {
		async get(key) {
			const { data, error } = await locals.supabase.rpc('dictionary_lookup_get', { p_key: key });
			if (error) throw error;
			return data;
		},
		async put(key, value) {
			const { error } = await locals.supabase.rpc('dictionary_lookup_put', {
				p_key: key,
				p_result: { ...value }
			});
			if (error) throw error;
		}
	};

	try {
		const lookup = await lookupWord(ai, cache, req, settings.nativeLanguage ?? settings.uiLanguage);
		return json(lookup, { headers: NO_STORE });
	} catch (e) {
		return aiFailure(e, 'consultar');
	}
};
