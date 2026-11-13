<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '#lib/ui/Icon.svelte';
	import BlendWizard from '../BlendWizard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// O modal do blend abre ao entrar; fechado, o cabeçalho reabre.
	let wizardOpen = $state(true);
</script>

<svelte:head>
	<title>{data.book.title} · Livros · Linguetta</title>
</svelte:head>

<a class="back" href={resolve('/livros')}><Icon name="arrow" size="sm flip" />Livros</a>

<div class="ph">
	<div>
		<h1>{data.book.title}</h1>
		{#if data.book.author}<p>{data.book.author}</p>{/if}
	</div>
	<div class="ph-acts">
		{#if data.book.version}
			<a class="btn btn-soft" href={resolve('/livros/[id]/ler', { id: data.book.id })}
				><Icon name="play" size="sm" />Ler</a
			>
			<a class="btn btn-ghost" href={resolve('/livros/[id]/baixar', { id: data.book.id })} data-sveltekit-reload
				>Baixar EPUB</a
			>
		{/if}
		<button class="btn btn-ghost" type="button" aria-haspopup="dialog" onclick={() => (wizardOpen = true)}
			><Icon name="sparks" size="sm" />Configurar blend</button
		>
	</div>
</div>

<BlendWizard
	open={wizardOpen}
	initial={data}
	studyLanguages={data.studyLanguages}
	onclose={() => (wizardOpen = false)}
/>

<style>
	.back {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--ink-2);
		text-decoration: none;
		font-size: 14px;
		margin-bottom: 8px;
	}
	.back:hover {
		color: var(--ink);
	}
	.ph-acts {
		display: flex;
		gap: 8px;
	}
</style>
