<!--
	Barra de grifo do leitor, fixa embaixo: com uma seleção nova mostra as 4 cores e "Nota";
	em cima de um grifo já feito troca a cor, edita a nota ou apaga.
-->
<script lang="ts">
	import Icon from '#lib/ui/Icon.svelte';
	import { HIGHLIGHT_COLORS, type HighlightColor } from '#lib/reader/highlights.ts';

	let {
		quote,
		color = null,
		note = '',
		existing,
		onpick,
		onnote,
		ondelete,
		ondefine,
		onclose
	}: {
		quote: string;
		/** Cor atual do grifo (null: seleção ainda sem grifo). */
		color?: HighlightColor | null;
		note?: string;
		existing: boolean;
		onpick: (c: HighlightColor) => void;
		/** Guarda a nota (cria o grifo amarelo antes, se for seleção nova). */
		onnote: (text: string) => void;
		ondelete?: () => void;
		/** Abre o dicionário com o trecho. */
		ondefine?: () => void;
		onclose: () => void;
	} = $props();

	let editing = $state(false);
	// Estado inicial vindo da prop, só até a pessoa editar.
	// svelte-ignore state_referenced_locally
	let draft = $state(note);

	const LABEL: Record<HighlightColor, string> = {
		amarelo: 'Amarelo',
		verde: 'Verde',
		azul: 'Azul',
		rosa: 'Rosa'
	};
</script>

<div class="bar" role="dialog" aria-label={existing ? 'Grifo' : 'Grifar trecho'} data-testid="barra-grifo">
	<p class="quote">“{quote.length > 120 ? quote.slice(0, 120) + '…' : quote}”</p>
	{#if editing}
		<textarea
			bind:value={draft}
			rows="3"
			maxlength="4000"
			placeholder="Escreva uma nota…"
			data-testid="nota-grifo"
		></textarea>
		<div class="actions">
			<button type="button" class="btn btn-soft" onclick={() => (editing = false)}>Cancelar</button>
			<button
				type="button"
				class="btn btn-primary"
				onclick={() => {
					onnote(draft.trim());
					editing = false;
				}}>Guardar nota</button
			>
		</div>
	{:else}
		<div class="actions">
			<div class="swatches" role="group" aria-label="Cor do grifo">
				{#each HIGHLIGHT_COLORS as c (c)}
					<button
						type="button"
						class="sw"
						style:--c="var(--hl-{c})"
						aria-label={LABEL[c]}
						aria-pressed={color === c}
						data-testid="cor-{c}"
						onclick={() => onpick(c)}
					></button>
				{/each}
			</div>
			{#if ondefine}
				<button type="button" class="tool" data-testid="definir" onclick={ondefine}>
					<Icon name="search" />Definir
				</button>
			{/if}
			<button type="button" class="tool" onclick={() => (editing = true)}>
				<Icon name="note" />{note ? 'Editar nota' : 'Nota'}
			</button>
			{#if existing && ondelete}
				<button type="button" class="tool" aria-label="Apagar grifo" onclick={ondelete}>
					<Icon name="trash" />
				</button>
			{/if}
			<button type="button" class="tool" aria-label="Fechar" onclick={onclose}><Icon name="x" /></button>
		</div>
		{#if note}<p class="note">{note}</p>{/if}
	{/if}
</div>

<style>
	.bar {
		position: absolute;
		left: 50%;
		bottom: 44px;
		z-index: 30;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: min(440px, calc(100% - 24px));
		padding: 12px 14px;
		transform: translateX(-50%);
		border: 1px solid var(--line-2);
		border-radius: var(--r-l);
		background: var(--raise);
		box-shadow: var(--sh-pop);
		color: var(--ink);
	}
	.quote {
		margin: 0;
		color: var(--ink-2);
		font: italic 13px/1.4 var(--f-body);
	}
	.note {
		margin: 0;
		font: 400 13px/1.4 var(--f-body);
		white-space: pre-wrap;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.swatches {
		display: flex;
		gap: 8px;
		margin-right: auto;
	}
	.sw {
		width: 26px;
		height: 26px;
		border: 2px solid transparent;
		border-radius: 50%;
		background: var(--c);
		cursor: pointer;
	}
	.sw[aria-pressed='true'] {
		border-color: var(--ink);
	}
	.tool {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 8px;
		border: 0;
		border-radius: var(--r-s);
		background: transparent;
		color: inherit;
		font: 500 13px/1 var(--f-body);
		cursor: pointer;
	}
	.tool:hover {
		background: var(--hover);
	}
	textarea {
		width: 100%;
		padding: 8px 10px;
		border: 1px solid var(--line-2);
		border-radius: var(--r-m);
		background: transparent;
		color: inherit;
		font: 400 14px/1.4 var(--f-body);
		resize: vertical;
	}
	textarea + .actions {
		justify-content: flex-end;
	}
</style>
