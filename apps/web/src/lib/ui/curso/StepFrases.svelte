<!-- Frases soltas para ouvir e repetir (ritmo, entonação, sílaba tônica em negrito), uma por tela. -->
<script lang="ts">
	import type { Example } from '#lib/curso/index.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import Rich from './Rich.svelte';

	let {
		title,
		lead,
		items,
		kicker,
		language,
		progress = $bindable(0),
		onnext
	}: {
		title: string;
		lead: string;
		items: Example[];
		kicker: string;
		language: string;
		progress?: number;
		onnext: () => void;
	} = $props();

	let i = $state(0);
	const item = $derived(items[i]);

	$effect(() => {
		progress = items.length ? i / items.length : 0;
	});

	function next() {
		if (i < items.length - 1) i++;
		else {
			progress = 1;
			onnext();
		}
	}
</script>

<Frame>
	<div class="kicker">{kicker}</div>
	<h2>{title}</h2>
	<p class="lead"><Rich text={lead} /></p>
	{#if item}
		<div class="stage">
			<div class="pos">{i + 1} de {items.length}</div>
			<div class="say-it tonic" lang={language}><Rich text={item.it} /></div>
			{#if item.pron}<div class="pron">[{item.pron}]</div>{/if}
			<div class="say-pt">{item.pt}</div>
			<div class="tools"><AudioButton label="Ouvir" /></div>
		</div>
	{/if}
	{#snippet foot()}
		{#if i > 0}
			<button type="button" class="btn btn-ghost" onclick={() => i--}>Anterior</button>
		{/if}
		<span class="sp"></span>
		<button type="button" class="btn btn-primary btn-wide" onclick={next}>Repeti</button>
	{/snippet}
</Frame>

<style>
	.tonic :global(strong) {
		font-weight: 700;
		text-decoration: underline;
		text-decoration-color: var(--line-2);
		text-underline-offset: 5px;
	}
	.pron {
		margin-top: 6px;
		font-size: 14px;
		color: var(--ink-3);
	}
</style>
