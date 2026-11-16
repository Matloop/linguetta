<!--
	Lista de grifos e notas do livro (no popover do leitor): toque num item para ir ao trecho.
-->
<script lang="ts">
	import type { Highlight } from '#lib/reader/highlights.ts';

	let {
		highlights,
		ongo
	}: {
		highlights: Highlight[];
		ongo: (h: Highlight) => void;
	} = $props();
</script>

<p class="head">Grifos e notas</p>
{#if highlights.length === 0}
	<p class="empty">Selecione um trecho do texto para grifar ou anotar.</p>
{:else}
	<ul data-testid="lista-grifos">
		{#each highlights as h (h.id)}
			<li>
				<button type="button" onclick={() => ongo(h)}>
					<span class="dot" style:background="var(--hl-{h.color})"></span>
					<span class="body">
						<span class="q">{h.quote}</span>
						{#if h.note}<span class="n">{h.note}</span>{/if}
						{#if h.chapter}<span class="c">{h.chapter}</span>{/if}
					</span>
				</button>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.head {
		margin: 0 0 6px;
		font: 600 12px/1 var(--f-body);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--ink-3);
	}
	.empty {
		margin: 8px 0 0;
		color: var(--ink-2);
		font: 400 13px/1.4 var(--f-body);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 60vh;
		overflow-y: auto;
	}
	li button {
		display: flex;
		gap: 10px;
		width: 100%;
		padding: 8px 6px;
		border: 0;
		border-radius: var(--r-s);
		background: transparent;
		color: var(--ink);
		text-align: left;
		cursor: pointer;
	}
	li button:hover {
		background: var(--hover);
	}
	.dot {
		flex: none;
		width: 10px;
		height: 10px;
		margin-top: 5px;
		border-radius: 50%;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 3px;
		min-width: 0;
	}
	.q {
		font: 400 13px/1.4 var(--f-body);
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.n {
		color: var(--ink-2);
		font: italic 12.5px/1.4 var(--f-body);
	}
	.c {
		color: var(--ink-3);
		font: 400 11px/1.2 var(--f-body);
	}
</style>
