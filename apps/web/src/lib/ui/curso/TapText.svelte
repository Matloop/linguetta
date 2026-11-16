<!--
	Texto do curso no idioma de estudo com as palavras tocáveis: toque abre o dicionário
	da palavra; arrastar na horizontal escolhe uma expressão. Mesma marcação de Rich
	(*it*, **x**), tokenizada já renderizada. Com `tappable` falso (exercício ainda sem
	resposta) é só texto.
-->
<script lang="ts">
	import { richTokens } from '#lib/curso/markup.ts';
	import { getCourseDict } from './dict.svelte.ts';
	import Rich from './Rich.svelte';

	let {
		text,
		pt,
		language,
		line,
		before,
		after,
		tappable = true
	}: {
		/** No idioma de estudo, com a marcação mínima. */
		text: string;
		/** Tradução da frase (vai para o cartão). */
		pt: string;
		language: string;
		/** Índice da fala em lesson.lines, quando é do diálogo. */
		line?: number;
		/** Falas vizinhas em texto puro, quando há. */
		before?: string;
		after?: string;
		tappable?: boolean;
	} = $props();

	const dict = getCourseDict();
	const tokens = $derived(richTokens(text, language));

	let id = $state<string | null>(null);
	$effect(() => {
		if (!dict) return;
		const reg = dict.register(() => ({ tokens, pt, line, before, after }));
		id = reg.id;
		return reg.unregister;
	});
</script>

{#if dict && id && tappable}
	{@const group = id}
	<span class="tap" {@attach dict.picker.group(group)}
		>{#each tokens as t, i (i)}{#if t.word}<button
					type="button"
					class="w"
					class:sel={dict.picker.has(group, i)}
					data-tok={i}
					>{#each t.pieces as s, k (k)}{#if s.em && s.strong}<em><strong>{s.text}</strong></em
							>{:else if s.em}<em>{s.text}</em>{:else if s.strong}<strong>{s.text}</strong
							>{:else}{s.text}{/if}{/each}</button
				>{:else}{t.text}{/if}{/each}</span
	>
{:else}
	<Rich {text} />
{/if}

<style>
	.w {
		display: inline;
		padding: 0 1px;
		margin: 0 -1px;
		border: 0;
		border-radius: var(--r-s);
		background: none;
		font: inherit;
		color: inherit;
		letter-spacing: inherit;
		cursor: pointer;
		touch-action: pan-y;
		user-select: none;
		-webkit-user-select: none;
		-webkit-touch-callout: none;
		transition: background-color 0.15s;
	}
	.w:hover {
		background: var(--hover);
	}
	.w.sel {
		background: var(--hl);
		color: var(--hl-ink);
	}
</style>
