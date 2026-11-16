// Dicionário de contexto: o que uma palavra (ou expressão) quer dizer nesta frase.
// Fala com POST /palavras/consultar. A mesma consulta não sai duas vezes: o pedido em
// andamento e a resposta ficam guardados enquanto a página vive; falha não fica.

export interface DictQuery {
	language: string;
	/** A palavra ou expressão tocada, como aparece na frase. */
	text: string;
	/** A frase (ou linha) em texto puro. */
	sentence: string;
	/** Linhas vizinhas, quando existem (letra, diálogo). */
	before?: string;
	after?: string;
	/** Pede também a tradução da frase (quem já tem a tradução manda false). */
	translateSentence: boolean;
}

export interface DictEntry {
	lemma: string;
	reading: string;
	pos: string;
	/** O sentido nesta frase, na língua nativa. */
	sense: string;
	translation: string | null;
}

export class DictError extends Error {
	constructor(
		message: string,
		readonly status: number
	) {
		super(message);
	}
}

const FALLBACK: Record<number, string> = {
	401: 'Entre para consultar o dicionário.',
	429: 'Muitas consultas seguidas. Espere um pouco e tente de novo.',
	503: 'O dicionário está indisponível agora.'
};

/** Mensagem para mostrar no cartão: a do servidor, ou uma pelo status. */
export function errorMessage(status: number, body: unknown): string {
	const m = (body as { message?: unknown } | null)?.message;
	if (typeof m === 'string' && m.trim()) return m.trim();
	return FALLBACK[status] ?? 'Não deu para consultar agora. Tente de novo.';
}

/** Chave da memória: a mesma palavra na mesma frase é a mesma consulta. */
export function memoKey(q: DictQuery): string {
	const norm = (s: string | undefined) => (s ?? '').normalize('NFC').trim().replace(/\s+/g, ' ');
	return JSON.stringify([
		q.language,
		norm(q.text).toLowerCase(),
		norm(q.sentence),
		q.translateSentence
	]);
}

function asEntry(body: unknown): DictEntry | null {
	if (!body || typeof body !== 'object') return null;
	const b = body as Record<string, unknown>;
	const str = (v: unknown) => (typeof v === 'string' ? v : '');
	if (typeof b.sense !== 'string') return null;
	return {
		lemma: str(b.lemma),
		reading: str(b.reading),
		pos: str(b.pos),
		sense: b.sense,
		translation: typeof b.translation === 'string' && b.translation ? b.translation : null
	};
}

const MAX_MEMO = 300;

type Fetch = (url: string, init: RequestInit) => Promise<Response>;

export function createDictionary(fetchFn: Fetch = (url, init) => fetch(url, init)) {
	const memo = new Map<string, Promise<DictEntry>>();

	async function request(q: DictQuery): Promise<DictEntry> {
		let res: Response;
		try {
			res = await fetchFn('/palavras/consultar', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					language: q.language,
					text: q.text,
					sentence: q.sentence,
					before: q.before || undefined,
					after: q.after || undefined,
					translateSentence: q.translateSentence
				})
			});
		} catch {
			throw new DictError('Sem conexão. Tente de novo.', 0);
		}
		const body: unknown = await res.json().catch(() => null);
		if (!res.ok) throw new DictError(errorMessage(res.status, body), res.status);
		const entry = asEntry(body);
		if (!entry) throw new DictError(errorMessage(502, null), 502);
		return entry;
	}

	return {
		lookup(q: DictQuery): Promise<DictEntry> {
			const key = memoKey(q);
			const known = memo.get(key);
			if (known) return known;
			const pending = request(q);
			memo.set(key, pending);
			if (memo.size > MAX_MEMO) memo.delete(memo.keys().next().value as string);
			pending.catch(() => {
				if (memo.get(key) === pending) memo.delete(key);
			});
			return pending;
		}
	};
}

const shared = createDictionary();

/** Consulta o dicionário (com a memória da página). */
export const lookup = shared.lookup;
