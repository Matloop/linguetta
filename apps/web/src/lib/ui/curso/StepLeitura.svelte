<!-- Passo de leitura: explicação longa (introdução, pronúncia, gramática da revisão). -->
<script lang="ts">
	import type { Block } from '#lib/curso/index.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import Rich from './Rich.svelte';

	let {
		title,
		blocks,
		kicker,
		language,
		onnext
	}: {
		title: string;
		blocks: Block[];
		kicker: string;
		language: string;
		onnext: () => void;
	} = $props();
</script>

<Frame>
	<div class="kicker">{kicker}</div>
	<h2>{title}</h2>
	<div class="read">
		{#each blocks as b, i (i)}
			{#if b.type === 'p'}
				<p><Rich text={b.text} /></p>
			{:else if b.type === 'h'}
				<h3><Rich text={b.text} /></h3>
			{:else if b.type === 'dica'}
				<aside class="dica">
					<small>Dica</small>
					<p><Rich text={b.text} /></p>
				</aside>
			{:else}
				<ul class="ex">
					{#each b.items as e, j (j)}
						<li>
							<AudioButton size="mini" />
							<div class="ex-t">
								<span class="ex-it" lang={language}><Rich text={e.it} /></span>
								{#if e.pron}<span class="ex-pron">[{e.pron}]</span>{/if}
								<span class="ex-pt">{e.pt}</span>
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</div>
	{#snippet foot()}
		<span class="sp"></span>
		<button type="button" class="btn btn-primary btn-wide" onclick={onnext}>Continuar</button>
	{/snippet}
</Frame>

<style>
	.read {
		max-width: 62ch;
		margin-top: 18px;
		font-size: 16.5px;
		line-height: 1.72;
		color: var(--ink);
	}
	.read p {
		margin: 0 0 1.05em;
		text-wrap: pretty;
	}
	.read :global(em) {
		font-style: italic;
		color: var(--ink);
	}
	.read :global(strong) {
		font-weight: 650;
	}
	.read h3 {
		font: 600 18px/1.35 var(--f-head);
		letter-spacing: -0.01em;
		margin: 1.9em 0 0.55em;
	}
	.dica {
		margin: 1.3em 0 1.5em;
		padding: 12px 16px;
		border-radius: var(--r-l);
		background: var(--gold-soft);
		font-size: 15px;
		line-height: 1.6;
	}
	.dica small {
		display: block;
		font: 600 11px var(--f-body);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--gold-ink);
		margin-bottom: 2px;
	}
	.dica p {
		margin: 0;
	}
	.ex {
		list-style: none;
		margin: 0.4em 0 1.5em;
		padding: 4px;
		border-radius: var(--r-l);
		background: var(--raise);
		box-shadow: var(--sh-card);
		display: flex;
		flex-direction: column;
	}
	.ex li {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 8px 10px;
		line-height: 1.4;
	}
	.ex li + li {
		border-top: 1px solid var(--line);
	}
	.ex-t {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		column-gap: 10px;
		min-width: 0;
	}
	.ex-it {
		font-weight: 500;
		font-size: 17px;
	}
	.ex-it :global(strong) {
		font-weight: 700;
		text-decoration: underline;
		text-decoration-color: var(--line-2);
		text-underline-offset: 4px;
	}
	.ex-pron {
		font-size: 13.5px;
		color: var(--ink-3);
	}
	.ex-pt {
		flex-basis: 100%;
		font-size: 14px;
		color: var(--ink-2);
	}
</style>
