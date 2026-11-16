import { describe, expect, test } from 'bun:test';
import {
	createDictionary,
	DictError,
	errorMessage,
	memoKey,
	type DictQuery
} from './dictionary.ts';

const q: DictQuery = {
	language: 'it',
	text: 'amo',
	sentence: 'Ti amo davvero',
	translateSentence: true
};

const reply = (status: number, body: unknown) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json' }
	});

const ENTRY = { lemma: 'amare', reading: '', pos: 'verbo', sense: 'amo', translation: 'Te amo' };

describe('memoKey', () => {
	test('a mesma palavra na mesma frase é a mesma chave', () => {
		expect(memoKey(q)).toBe(memoKey({ ...q, text: ' Amo ', sentence: 'Ti  amo davvero ' }));
		expect(memoKey(q)).toBe(memoKey({ ...q, before: 'outra linha' }));
	});

	test('frase, idioma ou pedido de tradução diferentes mudam a chave', () => {
		expect(memoKey(q)).not.toBe(memoKey({ ...q, sentence: 'Ti amo' }));
		expect(memoKey(q)).not.toBe(memoKey({ ...q, language: 'es' }));
		expect(memoKey(q)).not.toBe(memoKey({ ...q, translateSentence: false }));
	});
});

describe('errorMessage', () => {
	test('usa a mensagem do servidor', () => {
		expect(errorMessage(429, { message: 'Calma aí.' })).toBe('Calma aí.');
	});

	test('sem mensagem, uma pelo status', () => {
		expect(errorMessage(401, null)).toContain('Entre');
		expect(errorMessage(500, { message: '' })).toContain('Tente de novo');
	});
});

describe('createDictionary', () => {
	test('a mesma consulta sai uma vez só, mesmo em andamento', async () => {
		let calls = 0;
		const dict = createDictionary(async () => {
			calls++;
			return reply(200, ENTRY);
		});
		const [a, b] = await Promise.all([dict.lookup(q), dict.lookup(q)]);
		await dict.lookup({ ...q, text: 'AMO' });
		expect(calls).toBe(1);
		expect(a).toEqual(ENTRY);
		expect(b).toBe(a);
	});

	test('falha não fica guardada: tentar de novo pede outra vez', async () => {
		let calls = 0;
		const dict = createDictionary(async () => {
			calls++;
			return calls === 1 ? reply(503, { message: 'Fora do ar.' }) : reply(200, ENTRY);
		});
		const err = await dict.lookup(q).catch((e: unknown) => e);
		expect(err).toBeInstanceOf(DictError);
		expect((err as DictError).message).toBe('Fora do ar.');
		expect((err as DictError).status).toBe(503);
		expect(await dict.lookup(q)).toEqual(ENTRY);
		expect(calls).toBe(2);
	});

	test('manda o contrato do endpoint', async () => {
		let sent: unknown;
		const dict = createDictionary(async (_url, init) => {
			sent = JSON.parse(String(init?.body));
			return reply(200, { ...ENTRY, translation: null });
		});
		const out = await dict.lookup({ ...q, before: 'prima', after: '', translateSentence: false });
		expect(sent).toEqual({
			language: 'it',
			text: 'amo',
			sentence: 'Ti amo davvero',
			before: 'prima',
			translateSentence: false
		});
		expect(out.translation).toBeNull();
	});

	test('sem rede vira erro com mensagem', async () => {
		const dict = createDictionary(async () => {
			throw new TypeError('offline');
		});
		const err = (await dict.lookup(q).catch((e: unknown) => e)) as DictError;
		expect(err.status).toBe(0);
		expect(err.message).toContain('conexão');
	});
});
