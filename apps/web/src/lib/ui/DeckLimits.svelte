<!--
	Engrenagem do baralho: nome (com `rename`) e limites diários como no Anki. "Novas por dia" e "Revisões máximas
	por dia", cada um em Geral (todos os baralhos sem limite próprio), Este baralho ou Só hoje.
	Posta a action `limits` da página (id, newMode, new, reviewsMode, reviews) e, se o nome
	mudou, a `rename` antes (id, name).
-->
<script lang="ts">
	import {
		DECK_ICONS,
		DECK_LIMITS,
		LIMIT_MODES,
		type DeckIcon,
		type DeckLimitsView,
		type LimitMode
	} from '#lib/decks.ts';
	import { DECK_NAME_UI_MAX, deckDisplayName, LIMIT_MODE_LABEL } from '#lib/decks-ui.ts';
	import Icon from './Icon.svelte';
	import Popover from './Popover.svelte';
	import { toast } from './app-state.svelte.ts';
	import { postAction } from './post-action.ts';

	let {
		deck,
		action = 'limits',
		rename = false
	}: {
		deck: { id: string; name: string; icon?: DeckIcon | null; limits: DeckLimitsView };
		action?: string;
		/** Mostra o campo Nome (posta a action `rename`). */
		rename?: boolean;
	} = $props();

	type Field = { value: string; mode: LimitMode };
	let open = $state(false);
	let busy = $state(false);
	let error = $state('');
	let fresh = $state<Field>({ value: '', mode: 'geral' });
	let reviews = $state<Field>({ value: '', mode: 'geral' });
	let nameValue = $state('');
	let iconValue = $state<DeckIcon | null>(null);

	$effect(() => {
		if (!open) return;
		fresh = { value: String(deck.limits.new.value), mode: deck.limits.new.mode };
		reviews = { value: String(deck.limits.reviews.value), mode: deck.limits.reviews.mode };
		nameValue = deck.name;
		iconValue = deck.icon ?? null;
		error = '';
	});

	const HINT: Record<LimitMode, string> = {
		geral: 'Vale para todos os baralhos sem limite próprio.',
		deck: 'Só este baralho, todos os dias.',
		hoje: 'Só neste baralho, até o fim do dia de estudo.'
	};

	const name = $derived(deckDisplayName(deck.name));
	const valid = (f: Field, max: number) => /^\d+$/.test(f.value) && Number(f.value) <= max;
	const renamed = $derived(rename && nameValue.trim() !== deck.name);
	const iconChanged = $derived(rename && iconValue !== (deck.icon ?? null));
	const ok = $derived(
		valid(fresh, DECK_LIMITS.newPerDay) &&
			valid(reviews, DECK_LIMITS.reviewsPerDay) &&
			(!rename || !!nameValue.trim())
	);

	async function save(e: SubmitEvent) {
		e.preventDefault();
		if (busy || !ok) return;
		busy = true;
		// Cada postAction recarrega a página e o $effect acima reabre os campos: lê tudo antes.
		const doRename = renamed;
		const doIcon = iconChanged;
		const icon = iconValue;
		const [newField, reviewsField] = [fresh, reviews];
		const didRename = doRename || doIcon;
		if (doRename) {
			const n = await postAction('rename', { id: deck.id, name: nameValue });
			if (!n.ok) {
				busy = false;
				error = n.message;
				return;
			}
		}
		if (doIcon) {
			const i = await postAction('icon', { id: deck.id, icon: icon ?? '' });
			if (!i.ok) {
				busy = false;
				error = i.message;
				return;
			}
		}
		const r = await postAction(action, {
			id: deck.id,
			newMode: newField.mode,
			new: newField.value,
			reviewsMode: reviewsField.mode,
			reviews: reviewsField.value
		});
		busy = false;
		if (!r.ok) {
			error = r.message;
			return;
		}
		open = false;
		toast(didRename ? 'Baralho salvo' : 'Limites salvos');
	}
</script>

{#snippet field(
	f: Field,
	key: 'new' | 'reviews',
	label: string,
	max: number,
	set: (f: Field) => void
)}
	<fieldset class="lim">
		<legend class="visually-hidden">{label}</legend>
		<div class="lim-top">
			<label for="lim-{key}-{deck.id}">{label}</label>
			<input
				id="lim-{key}-{deck.id}"
				class="input num"
				type="number"
				inputmode="numeric"
				min="0"
				{max}
				step="1"
				value={f.value}
				aria-invalid={valid(f, max) ? undefined : 'true'}
				oninput={(e) => {
					set({ ...f, value: e.currentTarget.value });
					error = '';
				}}
			/>
		</div>
		<div class="seg" role="group" aria-label="Onde vale: {label.toLowerCase()}">
			{#each LIMIT_MODES as m (m)}
				<button type="button" aria-pressed={f.mode === m} onclick={() => set({ ...f, mode: m })}
					>{LIMIT_MODE_LABEL[m]}</button
				>
			{/each}
		</div>
		<p class="faint hint">{HINT[f.mode]}</p>
	</fieldset>
{/snippet}

<Popover label="{rename ? 'Opções' : 'Limites'} de {name}" bind:open width={340}>
	{#snippet trigger({ toggle, expanded, id })}
		<button
			class="icon-btn gear"
			type="button"
			aria-label="{rename ? 'Opções' : 'Limites diários'} de {name}"
			title={rename ? 'Nome e limites diários' : 'Limites diários'}
			aria-haspopup="dialog"
			aria-expanded={expanded}
			aria-controls={id}
			data-testid="deck-limits"
			onclick={toggle}><Icon name="settings" size="sm" /></button
		>
	{/snippet}
	{#snippet children({ close })}
		<form class="limits" onsubmit={save}>
			{#if rename}
				<div class="nm">
					<label for="deck-nome-{deck.id}">Nome do baralho</label>
					<input
						id="deck-nome-{deck.id}"
						class="input"
						maxlength={DECK_NAME_UI_MAX}
						autocomplete="off"
						bind:value={nameValue}
						oninput={() => (error = '')}
					/>
				</div>
				<div class="ics" role="group" aria-label="Ícone do baralho">
					<button
						type="button"
						class="ic-opt none"
						aria-pressed={iconValue === null}
						title="Sem ícone"
						aria-label="Sem ícone"
						onclick={() => (iconValue = null)}><Icon name="x" size="sm" /></button
					>
					{#each DECK_ICONS as i (i)}
						<button
							type="button"
							class="ic-opt"
							aria-pressed={iconValue === i}
							title={i}
							aria-label="Ícone {i}"
							onclick={() => (iconValue = i)}><Icon name={i} size="sm" /></button
						>
					{/each}
				</div>
			{/if}
			<p class="ttl">Limites diários</p>
			{@render field(fresh, 'new', 'Novas por dia', DECK_LIMITS.newPerDay, (f) => (fresh = f))}
			{@render field(
				reviews,
				'reviews',
				'Revisões máximas por dia',
				DECK_LIMITS.reviewsPerDay,
				(f) => (reviews = f)
			)}
			{#if error}<p class="err" role="alert">{error}</p>{/if}
			<div class="row">
				<span class="sp"></span>
				<button class="btn btn-ghost" type="button" onclick={close}>Cancelar</button>
				<button class="btn btn-primary" disabled={!ok || busy}>Salvar</button>
			</div>
		</form>
	{/snippet}
</Popover>

<style>
	.gear {
		width: 32px;
		height: 32px;
		color: var(--ink-3);
	}
	.gear:hover,
	.gear[aria-expanded='true'] {
		color: var(--ink);
	}
	.limits {
		display: flex;
		flex-direction: column;
		gap: 14px;
		text-align: left;
	}
	.nm {
		display: grid;
		gap: 6px;
	}
	.nm label {
		font-size: 14.5px;
		color: var(--ink-2);
	}
	.ics {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(34px, 1fr));
		gap: 4px;
		margin-top: -4px;
		padding-bottom: 14px;
		border-bottom: 1px solid var(--line);
	}
	.ic-opt {
		display: grid;
		place-items: center;
		height: 34px;
		border: 0;
		border-radius: var(--r-m);
		background: transparent;
		color: var(--ink-3);
		cursor: pointer;
	}
	.ic-opt:hover {
		background: var(--hover);
		color: var(--ink);
	}
	.ic-opt[aria-pressed='true'] {
		background: var(--sel);
		color: var(--ink);
		box-shadow: inset 0 0 0 1.5px var(--ring);
	}
	.ttl {
		margin: 0;
		font: 600 15.5px/1.3 var(--f-head);
		color: var(--ink);
	}
	.lim {
		margin: 0;
		padding: 0;
		border: 0;
		display: grid;
		gap: 8px;
	}
	.lim-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}
	.lim-top label {
		font-size: 14.5px;
		color: var(--ink-2);
	}
	.num {
		width: 88px;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	.seg {
		display: flex;
	}
	.seg > button {
		flex: 1;
		justify-content: center;
		height: 30px;
		padding: 0 8px;
		font-size: 13.5px;
	}
	.hint {
		margin: 0;
		font-size: 13px;
	}
	.err {
		margin: 0;
		color: var(--terra-ink);
		font-size: 13.5px;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.sp {
		flex: 1;
	}
</style>
