<!-- Fim da lição (ou da segunda onda): resumo curto e o caminho de volta. -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '#lib/ui/Icon.svelte';

	let {
		title,
		lead,
		facts = [],
		wave = null
	}: {
		title: string;
		lead: string;
		facts?: string[];
		/** Link para refazer a lição da segunda onda, quando houver. */
		wave?: { no: number; href: string } | null;
	} = $props();
</script>

<div class="end">
	<div class="ok"><Icon name="check" /></div>
	<h2>{title}</h2>
	<p class="lead">{lead}</p>
	{#if facts.length}
		<ul class="facts">
			{#each facts as f (f)}<li>{f}</li>{/each}
		</ul>
	{/if}
	<div class="acts">
		{#if wave}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- href já vem resolvido -->
			<a class="btn btn-soft btn-lg" href={wave.href} data-sveltekit-replacestate
				>Refazer a lição {wave.no}</a
			>
		{/if}
		<a class="btn btn-primary btn-lg" href={resolve('/curso')}>Voltar à trilha</a>
	</div>
</div>

<style>
	.end {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 32px 24px calc(32px + var(--safe-b));
	}
	.ok {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--ok-soft);
		color: var(--ok-ink);
		margin-bottom: 20px;
	}
	.ok :global(.ic) {
		width: 32px;
		height: 32px;
		stroke-width: 2.2;
	}
	h2 {
		font: 600 28px/1.2 var(--f-head);
		letter-spacing: -0.02em;
		margin: 0 0 8px;
	}
	.lead {
		margin: 0;
		max-width: 420px;
		color: var(--ink-2);
		font-size: 15px;
		text-wrap: pretty;
	}
	.facts {
		list-style: none;
		margin: 22px 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
	}
	.facts li {
		padding: 6px 12px;
		border-radius: 999px;
		background: var(--tile);
		box-shadow: inset 0 0 0 1px var(--line);
		font-size: 13.5px;
		color: var(--ink-2);
	}
	.acts {
		margin-top: 28px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}
</style>
