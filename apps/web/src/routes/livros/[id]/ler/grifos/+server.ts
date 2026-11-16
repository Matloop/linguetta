import { error, json } from '@sveltejs/kit';
import { isColor, parseNewHighlight } from '#lib/reader/highlights.ts';
import type { RequestHandler } from './$types';

/** Grifos do leitor web (book_highlights): POST cria, PATCH troca cor/nota, DELETE apaga. */

async function body(request: Request): Promise<Record<string, unknown>> {
	try {
		return (await request.json()) as Record<string, unknown>;
	} catch {
		error(400, 'Corpo JSON inválido.');
	}
}

const idOf = (b: Record<string, unknown>) => {
	if (typeof b.id !== 'string' || !/^[0-9a-f-]{36}$/i.test(b.id)) error(400, 'Grifo inválido.');
	return b.id;
};

const noStore = { 'Cache-Control': 'no-store' };

export const POST: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para ler.');
	const h = parseNewHighlight(await body(request));
	if (!h) error(400, 'Trecho inválido.');
	const { data, error: dbError } = await locals.supabase
		.from('book_highlights')
		.insert({ book_id: params.id, user_id: user.id, ...h })
		.select('id')
		.single();
	if (dbError || !data) error(dbError?.code === '23503' ? 404 : 500, 'Não deu para guardar o grifo.');
	return json({ id: data.id }, { headers: noStore });
};

export const PATCH: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para ler.');
	const b = await body(request);
	const patch: { color?: string; note?: string } = {};
	if (b.color !== undefined) {
		if (!isColor(b.color)) error(400, 'Cor inválida.');
		patch.color = b.color;
	}
	if (typeof b.note === 'string') patch.note = b.note.slice(0, 4000);
	if (!Object.keys(patch).length) error(400, 'Nada para mudar.');
	const { error: dbError } = await locals.supabase
		.from('book_highlights')
		.update(patch)
		.eq('id', idOf(b))
		.eq('book_id', params.id);
	if (dbError) error(500, 'Não deu para guardar o grifo.');
	return json({ ok: true }, { headers: noStore });
};

export const DELETE: RequestHandler = async ({ locals, params, request }) => {
	const user = await locals.getUser();
	if (!user) error(401, 'Entre para ler.');
	const { error: dbError } = await locals.supabase
		.from('book_highlights')
		.delete()
		.eq('id', idOf(await body(request)))
		.eq('book_id', params.id);
	if (dbError) error(500, 'Não deu para apagar o grifo.');
	return json({ ok: true }, { headers: noStore });
};
