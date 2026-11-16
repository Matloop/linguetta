<script lang="ts">
	import { resolve } from '$app/paths';
	import { rangeSummary, type BookPayload } from '#lib/blend/book-ui.ts';
	import { languagePair } from '#lib/blend/filename.ts';
	import { languageLabel } from '#lib/languages.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import Mark from '#lib/ui/Mark.svelte';
	import Popover from '#lib/ui/Popover.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import { postAction } from '#lib/ui/post-action.ts';
	import BlendWizard from './BlendWizard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	/** Modal do blend aberto aqui na lista: `initial` é o livro (null = envio de um novo). */
	let wizard = $state<{ initial: BookPayload | null } | null>(null);

	async function editBook(id: string) {
		const res = await fetch(resolve('/livros/[id]', { id })).catch(() => null);
		if (!res?.ok) return toast('Não deu para abrir o livro agora.');
		wizard = { initial: (await res.json()) as BookPayload };
	}

	async function setDevice(id: string, on: boolean) {
		const r = await postAction('device', { id, on: String(on) });
		if (!r.ok) return toast(r.message);
		toast(on ? 'Vai para o aparelho no próximo sync' : 'Sai do aparelho no próximo sync');
	}

	async function remove(id: string, title: string) {
		if (!confirm(`Apagar “${title}”? As palavras que você guardou dele ficam.`)) return;
		const r = await postAction('delete', { id });
		if (!r.ok) return toast(r.message);
		toast('Livro apagado');
	}
</script>

<svelte:head>
	<title>Livros · Linguetta</title>
</svelte:head>

{#snippet uploader()}
	<button
		class="btn btn-primary"
		type="button"
		aria-haspopup="dialog"
		onclick={() => (wizard = { initial: null })}
		data-testid="enviar-epub"><Icon name="upload" size="sm" />Enviar EPUB</button
	>
{/snippet}

{#if wizard}
	<BlendWizard
		initial={wizard.initial}
		studyLanguages={data.studyLanguages}
		active={data.active}
		userId={data.userId}
		onclose={() => (wizard = null)}
	/>
{/if}

<div class="ph">
	<div>
		<h1>Livros</h1>
		{#if data.books.length}<p>Livros com blend: algumas palavras trocadas pelo idioma que você estuda.</p>{/if}
	</div>
	{#if data.books.length}
		<div class="ph-acts">
			<Popover label="Ler um livro" width={320}>
				{#snippet trigger({ toggle, expanded, id })}
					<button
						class="btn btn-ghost"
						type="button"
						aria-haspopup="dialog"
						aria-expanded={expanded}
						aria-controls={id}
						onclick={toggle}><Icon name="play" size="sm" />Ler</button
					>
				{/snippet}
				<nav class="menu" aria-label="Seus livros">
					{#each data.books as b (b.id)}
						<a href={resolve('/livros/[id]/ler', { id: b.id })}>
							<span class="menu-title">{b.title}</span>
							{#if b.author}<span class="menu-sub">{b.author}</span>{/if}
						</a>
					{/each}
				</nav>
			</Popover>
			{@render uploader()}
		</div>
	{/if}
</div>

{#if data.books.length === 0}
	<div class="empty">
		<div>
			<Mark class="mark mark-hero" />
			<h2>Nenhum livro ainda</h2>
			<p>
				Envie um EPUB e escolha quanto misturar. O Linguetta troca algumas palavras pelo idioma que
				você estuda, com a tradução a um toque.
			</p>
			<div class="acts">{@render uploader()}</div>
		</div>
	</div>
{:else}
	<ul class="books" aria-label="Seus livros">
		{#each data.books as b (b.id)}
			<li class="tile lift book" data-testid="livro" data-id={b.id}>
				<div class="top">
					<div class="txt">
						<button class="title" type="button" onclick={() => editBook(b.id)}>{b.title}</button>
						<span class="meta">
							{#if b.author}{b.author} · {/if}<span
								title="{languageLabel(b.book_language, 'pt')} com {languageLabel(b.language, 'pt')}"
								>{languagePair(b.book_language, b.language)}</span
							>
						</span>
					</div>
					<label class="device" title="Baixar no aparelho no próximo sync">
						<span>No aparelho</span>
						<input
							class="switch"
							type="checkbox"
							checked={b.on_device}
							onchange={(e) => setDevice(b.id, e.currentTarget.checked)}
						/>
					</label>
				</div>
				<span class="meta" data-testid="estado"
					>{rangeSummary(b.chapters, b.range_from, b.range_to)} · {b.current_version
						? 'Blend gerado'
						: 'Sem blend ainda'}</span
				>
				<div class="acts">
					<a class="btn btn-soft" href={resolve('/livros/[id]/ler', { id: b.id })}
						><Icon name="play" size="sm" />Ler</a
					>
					{#if b.current_version}
						<a
							class="btn btn-ghost"
							href={resolve('/livros/[id]/baixar', { id: b.id })}
							data-sveltekit-reload><Icon name="down" size="sm" />Baixar EPUB</a
						>
					{/if}
					<button class="btn btn-ghost" type="button" aria-haspopup="dialog" onclick={() => editBook(b.id)}
						><Icon name="sparks" size="sm" />{b.current_version ? 'Ajustar' : 'Gerar'}</button
					>
					<span class="sp"></span>
					<button
						class="icon-btn"
						type="button"
						aria-label="Apagar {b.title}"
						title="Apagar"
						onclick={() => remove(b.id, b.title)}><Icon name="trash" /></button
					>
				</div>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.ph-acts {
		display: flex;
		gap: 8px;
	}
	.menu {
		display: flex;
		flex-direction: column;
		margin: -6px;
	}
	.menu > a {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 8px 10px;
		border-radius: var(--r-m);
		color: var(--ink);
		text-decoration: none;
	}
	.menu > a:hover {
		background: var(--hover);
	}
	.menu-title {
		overflow-wrap: anywhere;
	}
	.menu-sub {
		font-size: 13px;
		color: var(--ink-2);
	}
	.books {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 14px;
	}
	.book {
		gap: 14px;
	}
	.top {
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}
	.txt {
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
		flex: 1;
	}
	.title {
		padding: 0;
		border: 0;
		background: none;
		text-align: left;
		cursor: pointer;
		font: 600 19px/1.3 var(--f-head);
		color: var(--ink);
		text-decoration: none;
		overflow-wrap: anywhere;
	}
	.title:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.meta {
		color: var(--ink-2);
		font-size: 14px;
	}
	.device {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		color: var(--ink-2);
		white-space: nowrap;
		cursor: pointer;
	}
	.acts {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
	}
	.sp {
		flex: 1;
	}
	@media (max-width: 768px) {
		.top {
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
