<!--
	Painel "Aa" do leitor: letra, entrelinha, margens, largura, justificar, hifenizar e layout.
	Tudo muda na hora; "Só neste livro" guarda uma cópia própria dos ajustes.
-->
<script lang="ts">
	import {
		DEFAULT_SETTINGS,
		FONTS,
		FONT_STEPS,
		LAYOUTS,
		LIMITS,
		type ReaderLayout,
		type ReaderSettings
	} from '#lib/reader/settings.ts';

	let {
		settings,
		perBook,
		onchange,
		onperbook
	}: {
		settings: ReaderSettings;
		perBook: boolean;
		onchange: (s: ReaderSettings) => void;
		onperbook: (on: boolean) => void;
	} = $props();

	const set = (patch: Partial<ReaderSettings>) => onchange({ ...settings, ...patch });

	const sliders = [
		{ key: 'lineHeight', label: 'Entrelinha', limits: LIMITS.lineHeight, show: (v: number) => v.toFixed(1) },
		{ key: 'margin', label: 'Margens', limits: LIMITS.margin, show: (v: number) => `${v}` },
		{ key: 'width', label: 'Largura', limits: LIMITS.width, show: (v: number) => `${v}` }
	] as const;

	const fill = (v: number, min: number, max: number) => `${((v - min) / (max - min)) * 100}%`;

	// Esboço de cada layout: uma, duas colunas, ou uma faixa contínua.
	const SKETCH: Record<ReaderLayout, number[]> = { pagina: [10], duas: [5, 5], rolagem: [10] };
</script>

<div class="panel" data-testid="painel-ajustes">
	<section>
		<h3>Letra</h3>
		<div class="size">
			<button
				type="button"
				aria-label="Diminuir letra"
				disabled={settings.fontStep === 0}
				onclick={() => set({ fontStep: settings.fontStep - 1 })}><span class="a-sm">A</span></button
			>
			<span class="pct">{Math.round(FONT_STEPS[settings.fontStep] * 100)}%</span>
			<button
				type="button"
				aria-label="Aumentar letra"
				disabled={settings.fontStep === FONT_STEPS.length - 1}
				onclick={() => set({ fontStep: settings.fontStep + 1 })}><span class="a-lg">A</span></button
			>
		</div>
		<div class="fonts" role="group" aria-label="Fonte">
			{#each FONTS as f (f.id)}
				<button type="button" aria-pressed={settings.font === f.id} onclick={() => set({ font: f.id })}>
					<span class="ag" style:font-family={f.stack}>Ag</span>
					<span class="fname">{f.label}</span>
				</button>
			{/each}
		</div>
	</section>

	<section>
		<h3>Espaço</h3>
		{#each sliders as s (s.key)}
			<label class="slider">
				<span class="lbl">{s.label}</span>
				<input
					type="range"
					min={s.limits.min}
					max={s.limits.max}
					step={s.limits.step}
					value={settings[s.key]}
					style:--fill={fill(settings[s.key], s.limits.min, s.limits.max)}
					oninput={(e) => set({ [s.key]: Number(e.currentTarget.value) })}
				/>
				<span class="val">{s.show(settings[s.key])}</span>
			</label>
		{/each}
	</section>

	<section>
		<h3>Páginas</h3>
		<div class="layouts" role="group" aria-label="Layout">
			{#each LAYOUTS as l (l.id)}
				<button
					type="button"
					aria-pressed={settings.layout === l.id}
					onclick={() => set({ layout: l.id })}
				>
					<span class="sketch" class:flow={l.id === 'rolagem'} aria-hidden="true">
						{#each SKETCH[l.id] as _, i (i)}<i></i>{/each}
					</span>
					<span class="fname">{l.label}</span>
				</button>
			{/each}
		</div>
		<label class="row-switch">
			<span>Justificar o texto</span>
			<input
				class="switch"
				type="checkbox"
				checked={settings.justify}
				onchange={(e) => set({ justify: e.currentTarget.checked })}
			/>
		</label>
		<label class="row-switch">
			<span>Hifenizar</span>
			<input
				class="switch"
				type="checkbox"
				checked={settings.hyphenate}
				onchange={(e) => set({ hyphenate: e.currentTarget.checked })}
			/>
		</label>
	</section>

	<footer>
		<label class="row-switch grow">
			<span>Só neste livro</span>
			<input
				class="switch"
				type="checkbox"
				data-testid="so-este-livro"
				checked={perBook}
				onchange={(e) => onperbook(e.currentTarget.checked)}
			/>
		</label>
		<button type="button" class="reset" onclick={() => onchange({ ...DEFAULT_SETTINGS })}>Restaurar</button>
	</footer>
</div>

<style>
	.panel {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 6px 4px 2px;
		color: var(--ink);
		font: 400 13px/1.3 var(--f-body);
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	h3 {
		margin: 0;
		color: var(--ink-3);
		font: 600 11px/1 var(--f-body);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	/* Tamanho: pílula única com A pequeno, porcentagem e A grande. */
	.size {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		border: 1px solid var(--line-2);
		border-radius: var(--r-l);
		overflow: hidden;
	}
	.size button {
		height: 38px;
		border: 0;
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition: background-color 0.15s;
	}
	.size button:hover:not(:disabled) {
		background: var(--hover);
	}
	.size button:disabled {
		opacity: 0.35;
		cursor: default;
	}
	.pct {
		min-width: 64px;
		text-align: center;
		font: 500 13px/1 var(--f-body);
		font-variant-numeric: tabular-nums;
		color: var(--ink-2);
	}
	.a-sm {
		font: 600 13px/1 var(--f-head);
	}
	.a-lg {
		font: 600 20px/1 var(--f-head);
	}

	/* Fonte e layout: cartões lado a lado, o escolhido ganha o contorno do acento. */
	.fonts,
	.layouts {
		display: grid;
		gap: 8px;
	}
	.fonts {
		grid-template-columns: repeat(4, 1fr);
	}
	.layouts {
		grid-template-columns: repeat(3, 1fr);
	}
	.fonts button,
	.layouts button {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 12px 4px 10px;
		border: 1px solid var(--line-2);
		border-radius: var(--r-m);
		background: transparent;
		color: inherit;
		cursor: pointer;
		transition:
			border-color 0.15s,
			background-color 0.15s;
	}
	.fonts button:hover,
	.layouts button:hover {
		background: var(--hover);
	}
	.fonts button[aria-pressed='true'],
	.layouts button[aria-pressed='true'] {
		border-color: var(--terra-ink);
		background: var(--sel);
		box-shadow: 0 0 0 1px var(--terra-ink) inset;
	}
	.ag {
		font-size: 24px;
		line-height: 1;
	}
	.fname {
		color: var(--ink-2);
		font: 500 11px/1.1 var(--f-body);
		text-align: center;
	}
	[aria-pressed='true'] .fname {
		color: var(--ink);
	}
	.sketch {
		display: flex;
		gap: 3px;
		width: 34px;
		height: 24px;
		padding: 3px;
		border: 1.5px solid var(--ink-3);
		border-radius: 4px;
	}
	.sketch i {
		flex: 1;
		border-radius: 1px;
		background: repeating-linear-gradient(to bottom, var(--ink-3) 0 1.5px, transparent 1.5px 4px);
	}
	.sketch.flow {
		border-style: dashed;
	}
	[aria-pressed='true'] .sketch {
		border-color: var(--terra-ink);
	}

	/* Réguas finas com a parte já percorrida preenchida. */
	.slider {
		display: grid;
		grid-template-columns: 72px 1fr 34px;
		align-items: center;
		gap: 10px;
	}
	.lbl {
		color: var(--ink-2);
	}
	.val {
		color: var(--ink-3);
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	input[type='range'] {
		appearance: none;
		width: 100%;
		height: 18px;
		margin: 0;
		background: transparent;
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-runnable-track {
		height: 4px;
		border-radius: 2px;
		background: linear-gradient(
			to right,
			var(--terra-ink) var(--fill),
			var(--line-2) var(--fill)
		);
	}
	input[type='range']::-moz-range-track {
		height: 4px;
		border-radius: 2px;
		background: linear-gradient(
			to right,
			var(--terra-ink) var(--fill),
			var(--line-2) var(--fill)
		);
	}
	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 16px;
		height: 16px;
		margin-top: -6px;
		border: 2px solid var(--raise);
		border-radius: 50%;
		background: var(--terra-ink);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		transition: transform 0.12s;
	}
	input[type='range']::-moz-range-thumb {
		width: 12px;
		height: 12px;
		border: 2px solid var(--raise);
		border-radius: 50%;
		background: var(--terra-ink);
	}
	input[type='range']:active::-webkit-slider-thumb {
		transform: scale(1.15);
	}
	input[type='range']:focus-visible {
		outline: 2px solid var(--terra-ink);
		outline-offset: 3px;
		border-radius: 4px;
	}

	.row-switch {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		min-height: 28px;
		cursor: pointer;
	}
	.row-switch.grow {
		flex: 1;
	}

	footer {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-top: 12px;
		border-top: 1px solid var(--line);
	}
	.reset {
		border: 0;
		background: transparent;
		color: var(--ink-3);
		font: 500 13px/1 var(--f-body);
		cursor: pointer;
	}
	.reset:hover {
		color: var(--terra-ink);
	}
	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
		}
	}
</style>
