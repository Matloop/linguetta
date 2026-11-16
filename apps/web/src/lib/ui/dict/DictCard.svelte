<!--
	Cartão do dicionário: o que a palavra (ou expressão) tocada quer dizer nesta frase.
	Abre consultando o dicionário de contexto; mostra lema, classe, o sentido aqui, a linha
	com o trecho destacado e a tradução dela. Salva no banco com o sentido (o da IA chega
	no campo se a pessoa não escreveu nada). Perto da palavra no computador; folha
	inferior no celular. Quem abre usa {#key} para um cartão novo a cada trecho.
-->
<script lang="ts">
	import { tick, untrack } from 'svelte';
	import { playWord } from '#lib/audio.ts';
	import { lookup, type DictEntry, type DictQuery } from '#lib/dictionary.ts';
	import { LIMITS } from '#lib/items.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import type { Anchor } from './picker.svelte.ts';

	interface Props {
		/** O que consultar: idioma, trecho, frase e vizinhas. */
		query: DictQuery;
		/** A linha partida em volta do trecho, para destacá-lo. */
		line: { before: string; mark: string; after: string };
		/** Tradução da linha que quem abre já tem; sem ela, vale a do dicionário. */
		translation?: string | null;
		anchor: Anchor;
		/** Dados do banco do usuário; null se o trecho ainda não está lá. */
		inBank: { sense: string; ipa: string; pos: string } | null;
		saving: boolean;
		/** Erro ao salvar, mostrado no cartão. */
		message?: string;
		onsave: (input: { lemma: string; reading: string; sense: string }) => void;
		/** A resposta do dicionário chegou (quem abre pode ver se o lema já está no banco). */
		onentry?: (entry: DictEntry) => void;
		onclose: () => void;
	}

	let {
		query,
		line,
		translation = null,
		anchor,
		inBank,
		saving,
		message = '',
		onsave,
		onentry,
		onclose
	}: Props = $props();

	const text = $derived(query.text);
	const lang = $derived(query.language);

	type State =
		| { status: 'loading' }
		| { status: 'ok'; entry: DictEntry }
		| { status: 'error'; message: string };
	let result = $state<State>({ status: 'loading' });
	const entry = $derived(result.status === 'ok' ? result.entry : null);
	const lineTranslation = $derived(translation ?? entry?.translation ?? null);

	let sense = $state('');
	/** A pessoa escreveu no Sentido: a resposta da IA não passa por cima. */
	let typed = false;
	let attempt = 0;

	async function load() {
		const mine = ++attempt;
		result = { status: 'loading' };
		try {
			const found = await lookup(untrack(() => query));
			if (mine !== attempt) return;
			result = { status: 'ok', entry: found };
			onentry?.(found);
			if (!typed && !sense.trim()) sense = found.sense;
		} catch (e) {
			if (mine !== attempt) return;
			result = {
				status: 'error',
				message: e instanceof Error ? e.message : 'Não deu para consultar agora.'
			};
		}
	}

	$effect(() => {
		void load();
	});

	let card: HTMLDivElement | undefined = $state();
	let pos = $state({ left: 12, top: 12 });
	const CARD_WIDTH = 340;

	$effect(() => {
		// Reposiciona quando a altura muda (a resposta chega). No celular o CSS vira folha
		// inferior e ignora isto.
		void result;
		void message;
		void tick().then(() => {
			const height = card?.offsetHeight ?? 280;
			const left = Math.min(
				innerWidth - CARD_WIDTH - 12,
				Math.max(12, anchor.left + anchor.width / 2 - CARD_WIDTH / 2)
			);
			let top = anchor.bottom + 10;
			if (top + height > innerHeight - 12) top = anchor.top - height - 10;
			pos = { left, top: Math.max(12, top) };
		});
	});

	$effect(() => {
		void tick().then(() => card?.focus({ preventScroll: true }));
	});

	function submit(e: SubmitEvent) {
		e.preventDefault();
		if (inBank || saving) return;
		onsave({ lemma: entry?.lemma ?? '', reading: entry?.reading ?? '', sense: sense.trim() });
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		e.stopPropagation();
		onclose();
	}

	const details = $derived(
		entry ? [entry.lemma, entry.pos, entry.reading].filter((s) => s && s !== text) : []
	);
</script>

<div class="veu" role="presentation" onclick={onclose}></div>
<div
	class="cartao"
	bind:this={card}
	role="dialog"
	aria-modal="true"
	aria-labelledby="dict-palavra"
	tabindex="-1"
	data-no-enter
	style:--x="{pos.left}px"
	style:--y="{pos.top}px"
	{onkeydown}
>
	<button class="fechar" type="button" onclick={onclose} aria-label="Fechar cartão">
		<Icon name="x" />
	</button>

	<div class="meta">
		<span class="tg">{lang.toUpperCase()}</span>
		{#if result.status === 'loading'}
			<span class="sk sk-meta" aria-hidden="true"></span>
		{:else if details.length > 0}
			<span {lang}>{details.join(' · ')}</span>
		{:else if inBank?.pos}
			<span>{inBank.pos}</span>
		{/if}
	</div>
	<p class="palavra">
		<b id="dict-palavra" {lang}>{text}</b>
		{#if inBank?.ipa}<span class="ipa">{inBank.ipa}</span>{/if}
	</p>

	<div class="sentido" aria-live="polite">
		{#if result.status === 'loading'}
			<span class="sk sk-sentido" aria-hidden="true"></span>
			<span class="sk sk-sentido curto" aria-hidden="true"></span>
			<span class="sr">Consultando o dicionário…</span>
		{:else if result.status === 'error'}
			<p class="erro">{result.message}</p>
			<button class="tentar" type="button" onclick={load}>
				<Icon name="refresh" size="sm" />Tentar de novo
			</button>
		{:else}
			<p class="aqui">{result.entry.sense}</p>
		{/if}
	</div>

	{#if inBank}
		<p class="banco"><small>No seu banco</small>{inBank.sense || 'Sem sentido guardado ainda.'}</p>
	{/if}

	<div class="exemplo">
		<p class="linha" {lang}>{line.before}<mark>{line.mark}</mark>{line.after}</p>
		{#if lineTranslation}
			<p class="trad">{lineTranslation}</p>
		{:else if result.status === 'loading' && query.translateSentence}
			<span class="sk sk-trad" aria-hidden="true"></span>
		{/if}
	</div>

	<form onsubmit={submit}>
		{#if !inBank}
			<label class="campo">
				<span>Sentido <small>(opcional)</small></span>
				<input
					bind:value={sense}
					oninput={() => (typed = true)}
					maxlength={LIMITS.sense}
					autocomplete="off"
					placeholder="Em português"
				/>
			</label>
		{/if}
		{#if message}<p class="erro salvar-erro" role="alert">{message}</p>{/if}
		<div class="acoes">
			<button class="ouvir" type="button" onclick={() => playWord(text, lang).catch(() => {})}>
				<Icon name="sound" />Ouvir
			</button>
			<button class="salvar" type="submit" disabled={saving || inBank !== null}>
				{#if inBank}
					<Icon name="check" />Já no seu banco
				{:else}
					<Icon name="plus" />{saving ? 'Salvando…' : 'Salvar'}
				{/if}
			</button>
		</div>
	</form>
</div>

<style>
	.veu {
		position: fixed;
		inset: 0;
		z-index: 39;
		background: var(--scrim);
		display: none;
	}

	.cartao {
		position: fixed;
		z-index: 40;
		left: var(--x);
		top: var(--y);
		width: 340px;
		max-height: calc(100dvh - 24px);
		overflow-y: auto;
		background: var(--raise);
		color: var(--ink);
		border-radius: var(--r-l);
		padding: 18px;
		box-shadow: var(--sh-pop);
		animation: surge 0.22s var(--ease);
		outline: none;
	}

	:global(.tema-escuro) .cartao {
		background: var(--raise-2);
	}

	@keyframes surge {
		from {
			opacity: 0;
			transform: translateY(6px) scale(0.98);
		}
	}

	.fechar {
		position: absolute;
		right: 8px;
		top: 8px;
		border: 0;
		background: none;
		width: 34px;
		height: 34px;
		border-radius: var(--r-m);
		display: grid;
		place-items: center;
		color: var(--ink-3);
	}

	.fechar:hover {
		background: var(--hover);
		color: var(--ink);
	}

	.meta {
		display: flex;
		gap: 8px;
		align-items: center;
		min-height: 20px;
		padding-right: 34px;
		font-size: 13.5px;
		color: var(--ink-3);
	}

	.tg {
		font: 600 12px/1 var(--f-head);
		letter-spacing: 0.04em;
		border-radius: 4px;
		padding: 3px 5px;
		background: var(--tile);
		color: var(--ink-2);
		box-shadow: inset 0 0 0 1px var(--line-2);
	}

	.palavra {
		margin: 8px 0 0;
		display: flex;
		align-items: baseline;
		gap: 10px;
		flex-wrap: wrap;
	}

	.palavra b {
		font: 600 30px/1.15 var(--f-head);
		letter-spacing: -0.02em;
		overflow-wrap: anywhere;
	}

	.ipa {
		font-size: 16px;
		color: var(--ink-3);
	}

	.sentido {
		margin-top: 6px;
		min-height: 28px;
	}

	.aqui {
		margin: 0;
		font-size: 20px;
		line-height: 1.35;
		color: var(--ink);
	}

	.erro {
		margin: 0;
		font-size: 14.5px;
		color: var(--terra-ink);
	}

	.salvar-erro {
		margin-bottom: 10px;
	}

	.tentar {
		margin-top: 8px;
		border: 0;
		border-radius: var(--r-m);
		height: 34px;
		padding: 0 12px;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font: 500 14px/1 var(--f-body);
		background: var(--soft-bg);
		box-shadow: var(--sh-card);
		color: var(--ink);
	}

	.tentar:hover {
		background: var(--soft-hover);
	}

	.banco {
		margin: 10px 0 0;
		font-size: 15.5px;
		color: var(--ink-2);
	}

	.banco small {
		display: block;
		font: 600 11px var(--f-body);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ok-ink);
		margin-bottom: 1px;
	}

	.exemplo {
		margin: 12px 0 14px;
		padding: 11px 13px;
		background: var(--tile);
		box-shadow: inset 0 0 0 1px var(--line);
		border-radius: var(--r-m);
	}

	.linha {
		margin: 0;
		font-size: 16px;
		line-height: 1.5;
		color: var(--ink-2);
		white-space: pre-wrap;
	}

	.linha mark {
		background: var(--hl);
		color: var(--hl-ink);
		border-radius: var(--r-s);
		padding: 0 2px;
	}

	.trad {
		margin: 6px 0 0;
		font-size: 14.5px;
		line-height: 1.45;
		color: var(--ink-3);
	}

	/* Esqueleto calmo enquanto a resposta não chega. */
	.sk {
		display: block;
		height: 12px;
		border-radius: var(--r-s);
		background: var(--line);
		animation: respira 1.6s var(--ease) infinite alternate;
	}

	.sk-meta {
		display: inline-block;
		width: 96px;
	}

	.sk-sentido {
		height: 18px;
		width: 78%;
		margin-top: 6px;
	}

	.sk-sentido.curto {
		width: 46%;
	}

	.sk-trad {
		width: 70%;
		margin-top: 9px;
	}

	@keyframes respira {
		from {
			opacity: 0.45;
		}
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sk {
			animation: none;
		}
	}

	.sr {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

	.campo {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 12px;
		font-size: 14px;
		font-weight: 500;
		color: var(--ink-2);
	}

	.campo small {
		font-weight: 400;
		color: var(--ink-3);
	}

	.campo input {
		border: 0;
		background: var(--sunk);
		box-shadow: inset 0 0 0 1px var(--line);
		border-radius: var(--r-m);
		padding: 9px 12px;
		font-size: 16.5px;
		color: var(--ink);
		width: 100%;
		transition:
			box-shadow 0.18s,
			background-color 0.18s;
	}

	.campo input:focus {
		background: var(--raise);
		box-shadow:
			inset 0 0 0 1px var(--line-2),
			0 0 0 3px var(--ring);
		outline: none;
	}

	.acoes {
		display: flex;
		gap: 8px;
	}

	.acoes button {
		flex: 1;
		border: 0;
		border-radius: var(--r-m);
		height: 42px;
		padding: 0 12px;
		font: 500 15.5px/1 var(--f-body);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		transition: background-color 0.18s var(--ease);
	}

	.ouvir {
		background: var(--soft-bg);
		box-shadow: var(--sh-card);
		color: var(--ink);
	}

	.ouvir:hover {
		background: var(--soft-hover);
	}

	.salvar {
		background: var(--primary);
		color: var(--on-primary);
	}

	.salvar:hover:not(:disabled) {
		background: var(--primary-hover);
	}

	.salvar:disabled {
		background: var(--ok-soft);
		color: var(--ok-ink);
		cursor: default;
	}

	@media (max-width: 860px) {
		.veu {
			display: block;
		}

		.cartao {
			left: 0;
			right: 0;
			top: auto;
			bottom: 0;
			width: 100%;
			max-height: 85dvh;
			border-radius: var(--r-l) var(--r-l) 0 0;
			padding: 20px 18px calc(18px + env(safe-area-inset-bottom));
		}
	}
</style>
