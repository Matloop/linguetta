<!-- Exercício 2: completar as lacunas. O acento conta; caixa e tipo de apóstrofo não. -->
<script lang="ts">
	import { checkCloze, fillCloze } from '#lib/curso/answer.ts';
	import type { ClozeItem } from '#lib/curso/index.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import Frame from './Frame.svelte';
	import TapText from './TapText.svelte';

	let {
		items,
		kicker,
		language,
		progress = $bindable(0),
		onnext
	}: {
		items: ClozeItem[];
		kicker: string;
		language: string;
		progress?: number;
		onnext: () => void;
	} = $props();

	let i = $state(0);
	let given = $state<string[]>([]);
	/** null enquanto não conferiu. */
	let marks = $state<boolean[] | null>(null);
	let results = $state<boolean[]>([]);
	const item = $derived(items[i]);
	const right = $derived(marks !== null && marks.every(Boolean));

	$effect(() => {
		progress = items.length ? (i + (marks ? 1 : 0)) / items.length : 0;
	});

	function check() {
		if (!item) return;
		if (given.every((g) => !g?.trim())) {
			toast('Preencha as lacunas ou toque em "Não sei"');
			return;
		}
		marks = checkCloze(item, given);
		results = [...results, marks.every(Boolean)];
	}

	function giveUp() {
		if (!item) return;
		marks = item.answers.map(() => false);
		results = [...results, false];
	}

	function next() {
		if (i < items.length - 1) {
			i++;
			given = [];
			marks = null;
		} else onnext();
	}
</script>

<Frame tone={marks === null ? '' : right ? 'ok' : 'bad'}>
	<div class="kicker">{kicker}</div>
	<h2>Complete a frase</h2>
	<p class="lead">Escreva as palavras que faltam.</p>
	{#if item}
		{#key i}
			<div class="stage">
				<div class="pos">Frase {i + 1} de {items.length}</div>
				<div class="cloze" lang={language}>
					{#each item.parts as p, k (k)}{#if p !== null}{p}{:else}{@const n = item.parts
								.slice(0, k)
								.filter((x) => x === null).length}<input
								class="gap"
								class:right={marks?.[n] === true}
								class:wrong={marks?.[n] === false}
								aria-label="Lacuna {n + 1}"
								bind:value={given[n]}
								readonly={marks !== null}
								autocomplete="off"
								autocapitalize="off"
								spellcheck="false"
								{@attach (el) => {
									if (n === 0) el.focus();
								}}
							/>{/if}{/each}
				</div>
				<div class="say-pt">{item.pt}</div>
			</div>
		{/key}
		{#if items.length > 1}
			<div class="subdots" aria-hidden="true">
				{#each { length: items.length }, k (k)}<i
						class:on={k === i && results[k] === undefined}
						class:ok={results[k] === true}
						class:no={results[k] === false}
					></i>{/each}
			</div>
		{/if}
	{/if}
	{#snippet foot()}
		{#if marks === null}
			<button type="button" class="btn btn-ghost" onclick={giveUp}>Não sei</button>
			<span class="sp"></span>
			<button type="button" class="btn btn-primary btn-wide" onclick={check}>Verificar</button>
		{:else}
			<div class="fb">
				<span class="mk"><Icon name={right ? 'check' : 'x'} /></span>
				<div>
					<b>{right ? 'Isso!' : 'Resposta certa'}</b><span lang={language}
						>{#if item}<TapText text={fillCloze(item)} pt={item.pt} {language} />{/if}</span
					>
				</div>
			</div>
			<span class="sp"></span>
			<button type="button" class="btn btn-primary btn-wide" onclick={next}>Continuar</button>
		{/if}
	{/snippet}
</Frame>

<style>
	.cloze {
		font: 500 21px/2.1 var(--f-body);
		text-wrap: balance;
	}
	.gap {
		width: 7em;
		height: 40px;
		margin: 0 4px;
		padding: 0 10px;
		border: 0;
		border-radius: 8px;
		background: var(--sunk);
		box-shadow: inset 0 0 0 1px var(--line-2);
		font: inherit;
		font-size: 19px;
		color: var(--ink);
		text-align: center;
		vertical-align: baseline;
		outline: none;
	}
	.gap:focus {
		box-shadow: inset 0 0 0 2px var(--ring);
	}
	.gap.right {
		background: var(--ok-soft);
		color: var(--ok-ink);
		box-shadow: none;
	}
	.gap.wrong {
		background: var(--terra-soft);
		color: var(--terra-ink);
		box-shadow: none;
		text-decoration: line-through;
	}
	.say-pt {
		margin-top: 14px !important;
	}
</style>
