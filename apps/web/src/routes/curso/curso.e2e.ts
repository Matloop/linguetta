import { expect, test, type Page } from '@playwright/test';
import { login, restAsUser, SUPABASE_URL } from '../../e2e/auth.ts';

// Trilha → lição 0 inteira no player → conclusão. Sem limite por dia: a seguinte já abre.

/** Aperta o botão principal do rodapé até a tela final (no Completar, "Não sei" primeiro). */
async function walkLesson(page: Page) {
	const end = page.getByRole('link', { name: 'Voltar à trilha' });
	const foot = page.locator('.player footer');
	for (let i = 0; i < 200; i++) {
		if (await end.isVisible()) return;
		const giveUp = foot.getByRole('button', { name: 'Não sei' });
		if (await giveUp.isVisible()) await giveUp.click();
		await foot.locator('.btn-primary').click();
	}
	throw new Error('a lição não terminou');
}

test('lição 0 do curso: começar, percorrer os passos, concluir e seguir para a 1', async ({
	page
}) => {
	await login(page, undefined, ['it']);
	await page.goto('/curso');
	await expect(page.getByRole('heading', { level: 1, name: 'Italiano' })).toBeVisible();

	await page.getByRole('button', { name: /^Lição 0/ }).click();
	const card = page.getByRole('dialog', { name: 'Lição 0' });
	await card.getByRole('link', { name: 'Começar' }).click();
	await expect(page).toHaveURL(/\/curso\/italiano-1\/0$/);
	await expect(page.getByRole('progressbar', { name: 'Progresso da lição' })).toBeVisible();
	await expect(page.getByText(/^Passo 1 de \d+ · Leitura$/)).toBeVisible();

	// Enter também avança (aperta o botão principal do rodapé).
	await page.keyboard.press('Enter');
	await expect(page.getByText(/^Passo 2 de \d+/)).toBeVisible();

	await walkLesson(page);
	await expect(page.getByRole('heading', { name: 'Lição 0 concluída' })).toBeVisible();
	await page.getByRole('link', { name: 'Voltar à trilha' }).click();

	await expect(page).toHaveURL(/\/curso$/);
	const rail = page.getByRole('complementary', { name: 'Hoje no curso' });
	await expect(rail.getByText('Feita hoje')).toBeVisible();
	await expect(rail.getByText('1 lição em 1 dia')).toBeVisible();
	await expect(page.locator('.tag', { hasText: 'Começar' })).toBeVisible();

	// Sem limite por dia: a 1 abre logo; a 2 ainda não (volta para a trilha); a 0 pode ser revista.
	await page.goto('/curso/italiano-1/1');
	await expect(page.getByText(/^Passo 1 de \d+ · Ouvir$/)).toBeVisible();
	await page.goto('/curso/italiano-1/2');
	await expect(page).toHaveURL(/\/curso$/);
	await page.goto('/curso/italiano-1/0');
	await expect(page.getByText(/^Passo 1 de \d+ · Leitura$/)).toBeVisible();
});

/** Grava a lição 0 como feita (RLS deixa a pessoa inserir o próprio progresso). */
async function lesson0Done(page: Page) {
	const parts = (await page.context().cookies())
		.filter((c) => /^sb-.*-auth-token(\.\d+)?$/.test(c.name))
		.sort((a, b) => a.name.localeCompare(b.name, 'en', { numeric: true }));
	const raw = parts.map((c) => c.value).join('');
	const json = raw.startsWith('base64-')
		? Buffer.from(raw.slice(7), 'base64url').toString()
		: decodeURIComponent(raw);
	const { access_token, user } = JSON.parse(json) as { access_token: string; user: { id: string } };
	const res = await fetch(`${SUPABASE_URL}/rest/v1/course_progress`, {
		method: 'POST',
		headers: {
			apikey: process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
			authorization: `Bearer ${access_token}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			user_id: user.id,
			course_id: 'italiano-1',
			lesson_no: 0,
			kind: 'licao',
			study_day: '2026-01-01'
		})
	});
	expect(res.ok, await res.text()).toBe(true);
}

test('lição 1: guardar uma palavra da fala e a nota como ficha', async ({ page }) => {
	await login(page, undefined, ['it']);
	await lesson0Done(page);
	await page.goto('/curso/italiano-1/1');
	await page.locator('.player footer .btn-primary').click(); // Ouvir → Ler
	await expect(page.getByRole('heading', { name: 'Leia com a tradução' })).toBeVisible();

	const first = page.locator('.line').first();
	await first.locator('button.as-btn').click();
	await first.getByRole('button', { name: 'Chi', exact: true }).click();
	const pop = page.getByRole('dialog', { name: 'Guardar palavra' });
	await expect(pop.getByRole('textbox', { name: 'Palavra' })).toHaveValue('chi');
	await pop.getByRole('textbox', { name: 'Sentido' }).fill('quem');
	await pop.getByRole('button', { name: 'Guardar' }).click();
	await expect(page.getByRole('status')).toContainText('"chi" guardada em Minhas palavras');

	await first.getByRole('button', { name: 'Ficha' }).click();
	await expect(page.getByRole('status')).toContainText('Nota guardada como Ficha');

	const items = await restAsUser<
		{ lemma: string; encounters: { origin: string; sentence: string }[] }[]
	>(page, 'items?select=lemma,encounters(origin,sentence)&lemma=eq.chi');
	expect(items[0]?.encounters[0]).toMatchObject({ origin: 'curso', sentence: 'Sì? Chi è?' });
	const fichas = await restAsUser<{ tags: string[] }[]>(page, 'fichas?select=tags');
	expect(fichas).toEqual([{ tags: ['curso'] }]);
});
