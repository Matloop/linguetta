import { describe, expect, test } from 'bun:test';
import type { AiChain, JsonRequest } from './ai';
import {
	lookupCacheKey,
	lookupRequest,
	lookupWord,
	parseLookupRequest,
	parseLookupResult,
	type Lookup,
	type LookupCache,
	type LookupRequest
} from './lookup';

const study = ['it', 'ja'];

const base: LookupRequest = {
	language: 'it',
	text: 'razza',
	sentence: 'Che razza di vita',
	before: '',
	after: '',
	translateSentence: true
};

describe('parseLookupRequest', () => {
	test('normaliza; linhas de contexto opcionais', () => {
		expect(
			parseLookupRequest(
				{
					language: 'IT',
					text: ' razza ',
					sentence: ' Che  razza\ndi vita ',
					after: ' e poi ',
					translateSentence: false
				},
				study
			)
		).toEqual({
			language: 'it',
			text: 'razza',
			sentence: 'Che razza di vita',
			before: '',
			after: 'e poi',
			translateSentence: false
		});
	});

	test('rejeita idioma, texto, frase, contexto e translateSentence inválidos', () => {
		const ok = { language: 'it', text: 'a', sentence: 'a b', translateSentence: true };
		expect(parseLookupRequest(ok, study)).not.toHaveProperty('error');
		expect(parseLookupRequest(null, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, language: 'de' }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, text: ' ' }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, text: 3 }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, text: 'x'.repeat(101) }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, sentence: '' }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, sentence: 'x'.repeat(501) }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, before: 'x'.repeat(501) }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, after: 1 }, study)).toHaveProperty('error');
		expect(parseLookupRequest({ ...ok, translateSentence: undefined }, study)).toHaveProperty(
			'error'
		);
		expect(parseLookupRequest({ ...ok, translateSentence: 'true' }, study)).toHaveProperty('error');
	});
});

describe('lookupCacheKey', () => {
	test('hex de 64; texto sem diferença de caixa; o resto do pedido muda a chave', () => {
		const key = lookupCacheKey(base, 'pt-BR');
		expect(key).toMatch(/^[0-9a-f]{64}$/);
		expect(lookupCacheKey({ ...base, text: 'Razza' }, 'pt-BR')).toBe(key);
		expect(lookupCacheKey(base, 'en')).not.toBe(key);
		expect(lookupCacheKey({ ...base, sentence: 'Che razza' }, 'pt-BR')).not.toBe(key);
		expect(lookupCacheKey({ ...base, before: 'x' }, 'pt-BR')).not.toBe(key);
		expect(lookupCacheKey({ ...base, after: 'x' }, 'pt-BR')).not.toBe(key);
		expect(lookupCacheKey({ ...base, translateSentence: false }, 'pt-BR')).not.toBe(key);
		expect(lookupCacheKey({ ...base, before: 'a', after: '' }, 'pt-BR')).not.toBe(
			lookupCacheKey({ ...base, before: '', after: 'a' }, 'pt-BR')
		);
	});
});

describe('lookupRequest', () => {
	test('palavra com contexto: linhas vizinhas e pedido de tradução', () => {
		const r = lookupRequest({ ...base, before: 'Ieri', after: 'Domani' }, 'pt-BR');
		expect(r.user).toContain('Language: Italian (it)');
		expect(r.user).toContain('(pt-BR)');
		expect(r.user).toContain('Previous line: Ieri');
		expect(r.user).toContain('Line: Che razza di vita');
		expect(r.user).toContain('Next line: Domani');
		expect(r.user).toContain('Word: razza');
		expect(r.system).toContain('translation of the line only');
		expect(r.schema).toMatchObject({
			additionalProperties: false,
			required: ['lemma', 'reading', 'pos', 'sense', 'translation']
		});
	});

	test('expressão sem contexto e sem tradução', () => {
		const r = lookupRequest({ ...base, text: 'che razza di', translateSentence: false }, 'pt');
		expect(r.user).toContain('Expression: che razza di');
		expect(r.user).not.toContain('Previous line');
		expect(r.user).not.toContain('Next line');
		expect(r.system).toContain('an empty string (the learner already has the translation)');
	});
});

describe('parseLookupResult', () => {
	const raw = {
		lemma: ' provare ',
		reading: '',
		pos: ' verbo, 1ª pess. sing. presente ',
		sense: ' tentar, experimentar ',
		translation: ' Eu tento. '
	};

	test('apara; translation null quando não foi pedida', () => {
		expect(parseLookupResult(raw, true)).toEqual({
			lemma: 'provare',
			reading: '',
			pos: 'verbo, 1ª pess. sing. presente',
			sense: 'tentar, experimentar',
			translation: 'Eu tento.'
		});
		expect(parseLookupResult(raw, false)?.translation).toBeNull();
		expect(parseLookupResult({ ...raw, translation: null }, false)?.translation).toBeNull();
	});

	test('corta nos limites; sem lema, sentido ou tradução pedida é malformada', () => {
		const long = parseLookupResult({ ...raw, lemma: 'a'.repeat(90), pos: 'b'.repeat(90) }, true);
		expect(long?.lemma).toHaveLength(80);
		expect(long?.pos).toHaveLength(80);
		expect(parseLookupResult({ ...raw, lemma: '' }, true)).toBeNull();
		expect(parseLookupResult({ ...raw, sense: ' ' }, true)).toBeNull();
		expect(parseLookupResult({ ...raw, translation: '' }, true)).toBeNull();
		expect(parseLookupResult({ ...raw, translation: '' }, false)).not.toBeNull();
		expect(parseLookupResult('x', true)).toBeNull();
	});
});

describe('lookupWord', () => {
	const answer = {
		lemma: 'razza',
		reading: '',
		pos: 'substantivo feminino',
		sense: 'raça, laia',
		translation: 'Que tipo de vida'
	};

	function fakeAi() {
		const calls: JsonRequest<unknown>[] = [];
		const chain: AiChain = {
			async json<T>(req: JsonRequest<T>): Promise<T> {
				calls.push(req as JsonRequest<unknown>);
				const out = req.parse(answer);
				if (out === null) throw new Error('malformada');
				return out;
			}
		};
		return { chain, calls };
	}

	function memoryCache(): LookupCache & { store: Map<string, unknown> } {
		const store = new Map<string, unknown>();
		return {
			store,
			async get(key) {
				return store.get(key) ?? null;
			},
			async put(key, value: Lookup) {
				store.set(key, value);
			}
		};
	}

	test('falta no cache: chama a IA e guarda; acerto: não chama de novo', async () => {
		const { chain, calls } = fakeAi();
		const cache = memoryCache();
		const first = await lookupWord(chain, cache, base, 'pt-BR');
		expect(first).toEqual(answer);
		expect(calls).toHaveLength(1);
		expect(calls[0].schemaName).toBe('lookup');
		expect(cache.store.get(lookupCacheKey(base, 'pt-BR'))).toEqual(answer);

		const second = await lookupWord(chain, cache, { ...base, text: 'Razza' }, 'pt-BR');
		expect(second).toEqual(answer);
		expect(calls).toHaveLength(1);
	});

	test('cache inválido ou com erro: consulta a IA mesmo assim', async () => {
		const { chain, calls } = fakeAi();
		const cache = memoryCache();
		cache.store.set(lookupCacheKey(base, 'pt-BR'), { lemma: '' });
		expect(await lookupWord(chain, cache, base, 'pt-BR')).toEqual(answer);

		const broken: LookupCache = {
			get: () => Promise.reject(new Error('fora')),
			put: () => Promise.reject(new Error('fora'))
		};
		const orig = console.error;
		console.error = () => {};
		try {
			expect(await lookupWord(chain, broken, base, 'pt-BR')).toEqual(answer);
		} finally {
			console.error = orig;
		}
		expect(calls).toHaveLength(2);
	});

	test('sem tradução pedida: translation null', async () => {
		const { chain } = fakeAi();
		const out = await lookupWord(chain, memoryCache(), { ...base, translateSentence: false }, 'pt');
		expect(out.translation).toBeNull();
	});
});
