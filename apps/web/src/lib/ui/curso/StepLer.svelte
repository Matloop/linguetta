<!--
	Passo Ler: as falas com tradução, literal e nota. Tocar numa fala abre o português;
	com ela aberta, tocar numa palavra abre o cartão para guardá-la em Minhas palavras
	(com a fala como frase). A nota vira ficha pelo "+ Ficha".
-->
<script lang="ts">
	import { segmentWords } from '@linguetta/language';
	import type { Lesson } from '#lib/curso/index.ts';
	import { plainText } from '#lib/curso/markup.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import Popover from '#lib/ui/Popover.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import Frame from './Frame.svelte';
	import Rich from './Rich.svelte';

	let {
		lesson,
		kicker,
		language,
		base,
		saved = $bindable([]),
		fichas = $bindable([]),
		onnext
	}: {
		lesson: Lesson;
		kicker: string;
		language: string;
		/** URL da lição (/curso/<curso>/<nº>), base dos POSTs de palavra e ficha. */
		base: string;
		/** Formas já guardadas nesta lição (minúsculas). */
		saved?: string[];
		/** Falas cuja nota já virou ficha. */
		fichas?: number[];
		onnext: () => void;
	} = $props();

	const lines = $derived(lesson.lines ?? []);
	let open = $state<number[]>([]);
	/** Palavra com o cartão aberto: "fala:segmento". */
	let active = $state<string | null>(null);
	let lemma = $state('');
	let sense = $state('');
	let busy = $state(false);

	const key = (s: string) => s.normalize('NFC').toLocaleLowerCase(language).replace(/’/g, "'");

	function words(text: string) {
		return segmentWords(plainText(text), language);
	}

	function pick(line: number, seg: number, form: string) {
		if (active === `${line}:${seg}`) {
			active = null;
			return;
		}
		active = `${line}:${seg}`;
		// Clítico elidido ("l'", "dell'") vira o lema sem o apóstrofo; a pessoa corrige.
		lemma = key(form).replace(/'$/, '');
		sense = '';
	}

	async function save(line: number, form: string) {
		if (busy || !lemma.trim()) return;
		busy = true;
		try {
			const res = await fetch(`${base}/palavra`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ lemma, sense, form, line })
			});
			if (!res.ok) throw new Error(String(res.status));
			const out = (await res.json()) as { created: boolean; lemma: string };
			saved = [...new Set([...saved, key(form)])];
			toast(
				out.created
					? `"${out.lemma}" guardada em Minhas palavras, com a frase`
					: `"${out.lemma}" já estava no banco; a frase entrou junto`
			);
			active = null;
		} catch {
			toast('Não deu para guardar agora. Tente de novo.');
		} finally {
			busy = false;
		}
	}

	async function ficha(line: number) {
		if (fichas.includes(line)) return;
		try {
			const res = await fetch(`${base}/ficha`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ line })
			});
			if (!res.ok) throw new Error(String(res.status));
			fichas = [...fichas, line];
			toast('Nota guardada como Ficha');
		} catch {
			toast('Não deu para criar a ficha agora.');
		}
	}

	const count = $derived(saved.length);
</script>

<Frame>
	<div class="kicker">{kicker}</div>
	<h2>Leia com a tradução</h2>
	<p class="lead">
		Toque numa fala para ver o português. Com a fala aberta, toque numa palavra para guardá-la.
	</p>
	<ol class="lines">
		{#each lines as l, i (i)}
			{@const isOpen = open.includes(i)}
			<li class="line" class:open={isOpen} class:sep={l.sep}>
				{#if !isOpen}
					<button type="button" class="it as-btn" onclick={() => (open = [...open, i])}>
						<span class="no">{i + 1}</span>
						<span class="txt" lang={language}><Rich text={l.it} /></span>
						{#if l.note}<span class="has-note" title="Tem nota"></span>{/if}
					</button>
				{:else}
					{@const segs = words(l.it)}
					<div class="it">
						<span class="no">{i + 1}</span>
						<span class="txt" lang={language}>
							{#each segs as s, j (j)}{#if !s.isWord}{s.segment}{:else if active === `${i}:${j}`}<Popover
										bind:open={() => true, (v) => !v && (active = null)}
										label="Guardar palavra"
										align={j > segs.length / 2 ? 'end' : 'start'}
										width={260}
										>{#snippet trigger({ toggle, expanded, id })}<button
												type="button"
												class="w on"
												class:saved={saved.includes(key(s.segment))}
												aria-expanded={expanded}
												aria-controls={id}
												onclick={toggle}>{s.segment}</button
											>{/snippet}
										{@const has = saved.includes(key(s.segment))}
										<form
											class="wpop"
											data-no-enter
											onsubmit={(e) => {
												e.preventDefault();
												save(i, s.segment);
											}}
										>
											<input
												class="lema"
												aria-label="Palavra"
												bind:value={lemma}
												autocomplete="off"
												spellcheck="false"
												lang={language}
											/>
											<div class="forma">Lição {lesson.no} · fala {i + 1}</div>
											<input
												class="input"
												aria-label="Sentido"
												placeholder="Sentido (opcional)"
												bind:value={sense}
												autocomplete="off"
												{@attach (el) => el.focus()}
											/>
											<div class="row">
												<button
													class="btn btn-primary btn-sm"
													type="submit"
													disabled={busy || !lemma.trim()}
													><Icon name={has ? 'check' : 'plus'} size="sm" />{has
														? 'Guardar de novo'
														: 'Guardar'}</button
												>
											</div>
										</form>
									</Popover>{:else}<button
										type="button"
										class="w"
										class:saved={saved.includes(key(s.segment))}
										onclick={() => pick(i, j, s.segment)}>{s.segment}</button
									>{/if}{/each}
						</span>
					</div>
					<div class="more">
						<div class="pt">{l.pt}</div>
						{#if l.lit}<div class="lit">Literal: {l.lit}</div>{/if}
						{#if l.note}
							<div class="note">
								<div class="t"><small>Nota</small><Rich text={l.note} /></div>
								<button
									type="button"
									class="btn btn-ghost btn-sm"
									disabled={fichas.includes(i)}
									onclick={() => ficha(i)}
									><Icon name={fichas.includes(i) ? 'check' : 'plus'} size="sm" />Ficha</button
								>
							</div>
						{/if}
					</div>
				{/if}
			</li>
		{/each}
	</ol>
	{#snippet foot()}
		<span class="msg"
			>{#if count}{count} palavra{count > 1 ? 's' : ''} guardada{count > 1 ? 's' : ''}{/if}</span
		>
		<span class="sp"></span>
		<button type="button" class="btn btn-primary btn-wide" onclick={onnext}>Continuar</button>
	{/snippet}
</Frame>

<style>
	.lines {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.line {
		border-radius: 12px;
		transition:
			background-color 0.15s,
			box-shadow 0.15s;
	}
	.line:not(.open):hover {
		background: var(--hover);
	}
	.line.open {
		background: var(--raise);
		box-shadow: var(--sh-card);
		padding: 12px 14px;
	}
	.line.sep {
		margin-top: 14px;
	}
	.it {
		display: flex;
		gap: 12px;
		font: 500 17px/1.5 var(--f-body);
		text-align: left;
	}
	.as-btn {
		width: 100%;
		padding: 12px 14px;
		border: 0;
		border-radius: 12px;
		background: none;
		color: inherit;
		cursor: pointer;
	}
	.no {
		flex: none;
		width: 18px;
		font: 600 12.5px/1.95 var(--f-head);
		color: var(--ink-3);
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	.txt {
		min-width: 0;
	}
	.has-note {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--terra-ink);
		align-self: center;
		margin-left: 2px;
		opacity: 0.7;
		flex: none;
	}
	.w {
		display: inline;
		padding: 0 1px;
		margin: 0 -1px;
		border: 0;
		border-radius: 4px;
		background: none;
		font: inherit;
		color: inherit;
		cursor: pointer;
		text-decoration: underline;
		text-decoration-color: var(--line-2);
		text-underline-offset: 5px;
	}
	.w:hover,
	.w.on {
		background: var(--hl);
	}
	.w.saved {
		background: var(--hl);
		color: var(--hl-ink);
		text-decoration: none;
	}
	.more {
		margin: 8px 0 0 30px;
	}
	.pt {
		font-size: 15px;
		color: var(--ink-2);
	}
	.lit {
		font-size: 13px;
		color: var(--ink-3);
		margin-top: 1px;
	}
	.note {
		margin-top: 12px;
		padding: 10px 12px;
		border-radius: 10px;
		background: var(--tile);
		box-shadow: inset 0 0 0 1px var(--line);
		font-size: 13.5px;
		color: var(--ink-2);
		display: flex;
		gap: 10px;
		align-items: flex-start;
	}
	.note .t {
		flex: 1;
		line-height: 1.5;
	}
	.note small {
		display: block;
		font: 600 11px var(--f-body);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--terra-ink);
		margin-bottom: 2px;
	}
	.note :global(em) {
		color: var(--ink);
	}
	.note .btn {
		height: 32px;
		padding: 0 10px;
		font-size: 13px;
		gap: 5px;
		flex: none;
	}
	.wpop {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.lema {
		border: 0;
		padding: 0;
		background: none;
		font: 600 17px var(--f-head);
		color: var(--ink);
		outline: none;
		border-bottom: 1px dashed var(--line-2);
	}
	.lema:focus {
		border-bottom-color: var(--ring);
	}
	.forma {
		font-size: 12px;
		color: var(--ink-3);
		margin-top: -4px;
	}
	.row {
		display: flex;
		gap: 6px;
	}
	.btn-sm {
		height: 32px;
		padding: 0 12px;
		font-size: 13.5px;
		gap: 6px;
	}
</style>
