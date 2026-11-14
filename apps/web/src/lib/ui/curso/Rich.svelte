<!-- Texto do curso com a marcação mínima (*it* itálico, **x** negrito), sem {@html}. -->
<script lang="ts">
	import { parseMarkup } from '#lib/curso/markup.ts';

	let { text }: { text: string } = $props();
	const segments = $derived(parseMarkup(text));
</script>

{#each segments as s, i (i)}{#if s.em && s.strong}<em><strong>{s.text}</strong></em
		>{:else if s.em}<em>{s.text}</em>{:else if s.strong}<strong>{s.text}</strong
		>{:else}{s.text}{/if}{/each}
