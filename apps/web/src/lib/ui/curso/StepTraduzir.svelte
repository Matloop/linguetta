<!-- Exercício 1: ler a frase em voz alta, pensar na tradução e conferir. -->
<script lang="ts">
	import type { TranslateItem } from '#lib/curso/index.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import Rich from './Rich.svelte';

	let {
		items,
		kicker,
		language,
		progress = $bindable(0),
		onnext
	}: {
		items: TranslateItem[];
		kicker: string;
		language: string;
		progress?: number;
		onnext: () => void;
	} = $props();

	let i = $state(0);
	let shown = $state(false);
	const item = $derived(items[i]);

	$effect(() => {
		progress = items.length ? (i + (shown ? 1 : 0)) / items.length : 0;
	});

	function next() {
		if (i < items.length - 1) {
			i++;
			shown = false;
		} else onnext();
	}
</script>

<Frame tone={shown ? 'neutral' : ''}>
	<div class="kicker">{kicker}</div>
	<h2>Como se diz em português?</h2>
	<p class="lead">Leia em voz alta e pense na tradução antes de conferir.</p>
	{#if item}
		<div class="stage">
			<div class="pos">Frase {i + 1} de {items.length}</div>
			<div class="say-it" lang={language}><Rich text={item.it} /></div>
			<div class="tools"><AudioButton label="Ouvir a frase" /></div>
		</div>
		{#if items.length > 1}
			<div class="subdots" aria-hidden="true">
				{#each { length: items.length }, k (k)}<i class:on={k <= i}></i>{/each}
			</div>
		{/if}
	{/if}
	{#snippet foot()}
		{#if !shown}
			<span class="sp"></span>
			<button type="button" class="btn btn-primary btn-wide" onclick={() => (shown = true)}
				>Mostrar tradução</button
			>
		{:else}
			<div class="fb"><div><b>Tradução</b><span>{item?.pt}</span></div></div>
			<span class="sp"></span>
			<button type="button" class="btn btn-primary btn-wide" onclick={next}>Continuar</button>
		{/if}
	{/snippet}
</Frame>
