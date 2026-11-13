<script lang="ts">
	import { resolve } from '$app/paths';
	import { inRange, rangeProgress, rangeState } from '#lib/blend/book-ui.ts';
	import { languagePair } from '#lib/blend/filename.ts';
	import { languageLabel } from '#lib/languages.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import Mark from '#lib/ui/Mark.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import { postAction } from '#lib/ui/post-action.ts';
	import BlendWizard from './BlendWizard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let wizardOpen = $state(false);

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
	<button class="btn btn-primary" type="button" aria-haspopup="dialog" onclick={() => (wizardOpen = true)} data-testid="enviar-epub"
		><Icon name="upload" size="sm" />Enviar EPUB</button
	>
{/snippet}

<BlendWizard
	open={wizardOpen}
	studyLanguages={data.studyLanguages}
	active={data.active}
	userId={data.userId}
	onclose={() => (wizardOpen = false)}
/>

<div class="ph">
	<div>
		<h1>Livros</h1>
		{#if data.books.length}<p>Livros com blend: algumas palavras trocadas pelo idioma que você estuda.</p>{/if}
	</div>
	{#if data.books.length}<div class="ph-acts">{@render uploader()}</div>{/if}
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
			{@const total = inRange(b.chapters, b.range_from, b.range_to).length}
			{@const pct = Math.round(rangeProgress(b.chapters, b.range_from, b.range_to) * 100)}
			{@const ready = pct >= 100 && total > 0}
			<li class="tile lift book" data-testid="livro">
				<div class="top">
					<div class="txt">
						<a class="title" href={resolve('/livros/[id]', { id: b.id })}>{b.title}</a>
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
				<div class="state">
					<span class="meta" data-testid="estado">{rangeState(b.chapters, b.range_from, b.range_to)}</span>
					<span
						class="bar"
						role="progressbar"
						aria-label="Capítulos prontos"
						aria-valuemin={0}
						aria-valuemax={100}
						aria-valuenow={pct}><i style:width="{pct}%"></i></span
					>
				</div>
				<div class="acts">
					{#if b.current_version}
						<a class="btn btn-soft" href={resolve('/livros/[id]/ler', { id: b.id })}
							><Icon name="play" size="sm" />Ler</a
						>
						<a
							class="btn btn-ghost"
							href={resolve('/livros/[id]/baixar', { id: b.id })}
							data-sveltekit-reload><Icon name="down" size="sm" />Baixar EPUB</a
						>
					{/if}
					<a class="btn btn-ghost" href={resolve('/livros/[id]', { id: b.id })}
						><Icon name="sparks" size="sm" />{ready && b.current_version
							? 'Ajustar'
							: pct > 0
								? 'Continuar'
								: 'Gerar'}</a
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
	.state {
		display: flex;
		flex-direction: column;
		gap: 8px;
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
