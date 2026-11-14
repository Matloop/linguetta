<!--
	Player da lição em tela cheia: um passo por tela, barra segmentada no topo (com o
	progresso dentro do passo), X para voltar à trilha e o botão principal no rodapé
	(Enter aperta). No fim grava a conclusão e mostra o resumo.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Step } from '#lib/curso/index.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import Toast from '#lib/ui/Toast.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import EndScreen from '#lib/ui/curso/EndScreen.svelte';
	import StepCompletar from '#lib/ui/curso/StepCompletar.svelte';
	import StepFrases from '#lib/ui/curso/StepFrases.svelte';
	import StepLer from '#lib/ui/curso/StepLer.svelte';
	import StepLeitura from '#lib/ui/curso/StepLeitura.svelte';
	import StepOnda from '#lib/ui/curso/StepOnda.svelte';
	import StepOuvir from '#lib/ui/curso/StepOuvir.svelte';
	import StepRepetir from '#lib/ui/curso/StepRepetir.svelte';
	import StepTraduzir from '#lib/ui/curso/StepTraduzir.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const LABELS: Record<Step['kind'], string> = {
		leitura: 'Leitura',
		ouvir: 'Ouvir',
		ler: 'Ler',
		repetir: 'Repetir',
		traduzir: 'Traduzir',
		completar: 'Completar',
		frases: 'Frases'
	};

	const lesson = $derived(data.lesson);
	const language = $derived(data.course.language);
	const onda = $derived(data.mode === 'onda');
	const steps = $derived(onda ? [] : lesson.steps);
	const total = $derived(onda ? 1 : steps.length);
	const base = $derived(
		resolve('/curso/[course]/[lesson]', {
			course: data.course.id,
			lesson: String(lesson.no)
		})
	);

	let index = $state(0);
	/** Progresso dentro do passo atual (0–1), para o segmento da barra. */
	let sub = $state(0);
	let ended = $state(false);
	let saved = $state<string[]>([]);
	let fichas = $state<number[]>([]);
	let stuck = $state<number[]>([]);

	const step = $derived(steps[index]);
	const kicker = $derived(step ? `Passo ${index + 1} de ${total} · ${LABELS[step.kind]}` : '');

	function fill(i: number) {
		if (ended || i < index) return 1;
		return i === index ? sub : 0;
	}

	function next() {
		if (index < total - 1) {
			index++;
			sub = 0;
		} else finish();
	}

	async function finish(waveStuck: number[] = []) {
		stuck = waveStuck;
		ended = true;
		try {
			const res = await fetch(`${base}/concluir`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(onda ? { onda: true, stuck: waveStuck } : {})
			});
			if (!res.ok) throw new Error(String(res.status));
		} catch {
			toast('Não deu para gravar a conclusão. Tente de novo mais tarde.');
		}
	}

	const facts = $derived.by(() => {
		const out: string[] = [];
		const n = saved.length;
		if (n) out.push(`${n} palavra${n > 1 ? 's' : ''} guardada${n > 1 ? 's' : ''}`);
		const f = fichas.length;
		if (f) out.push(`${f} ficha${f > 1 ? 's' : ''} criada${f > 1 ? 's' : ''}`);
		return out;
	});

	const lineCount = $derived(lesson.lines?.length ?? 0);

	function onkeydown(e: KeyboardEvent) {
		if (e.key !== 'Enter' || e.isComposing || e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
			return;
		const target = e.target as HTMLElement | null;
		if (target?.closest('button, a, textarea, [data-no-enter]')) return;
		if (document.querySelector('[data-popover-open]')) return;
		const primary = document.querySelector<HTMLButtonElement>(
			'.player .pf .btn-primary:not(:disabled)'
		);
		if (!primary) return;
		e.preventDefault();
		primary.click();
	}
</script>

<svelte:head>
	<title>Lição {lesson.no} · {data.course.title} · Linguetta</title>
</svelte:head>

<svelte:window {onkeydown} />

<div class="player">
	{#if !ended}
		<header class="top">
			<a class="x" href={resolve('/curso')} aria-label="Sair da lição" title="Sair"
				><Icon name="x" /></a
			>
			<div
				class="prog"
				role="progressbar"
				aria-label="Progresso da lição"
				aria-valuemin={0}
				aria-valuemax={total}
				aria-valuenow={index}
			>
				{#each { length: total }, i (i)}
					<i><b style:width="{fill(i) * 100}%"></b></i>
				{/each}
			</div>
		</header>

		{#if onda}
			<StepOnda {lesson} {language} bind:progress={sub} ondone={(s) => finish(s)} />
		{:else if step}
			{#key index}
				{#if step.kind === 'leitura'}
					<StepLeitura title={step.title} blocks={step.blocks} {kicker} {language} onnext={next} />
				{:else if step.kind === 'ouvir'}
					<StepOuvir {lesson} {kicker} {language} onnext={next} />
				{:else if step.kind === 'ler'}
					<StepLer {lesson} {kicker} {language} {base} bind:saved bind:fichas onnext={next} />
				{:else if step.kind === 'repetir'}
					<StepRepetir {lesson} {kicker} {language} bind:progress={sub} onnext={next} />
				{:else if step.kind === 'traduzir'}
					<StepTraduzir items={step.items} {kicker} {language} bind:progress={sub} onnext={next} />
				{:else if step.kind === 'completar'}
					<StepCompletar items={step.items} {kicker} {language} bind:progress={sub} onnext={next} />
				{:else if step.kind === 'frases'}
					<StepFrases
						title={step.title}
						lead={step.lead}
						items={step.items}
						{kicker}
						{language}
						bind:progress={sub}
						onnext={next}
					/>
				{/if}
			{/key}
		{/if}
	{:else if onda}
		<EndScreen
			title="Lição {lesson.no} refeita"
			lead="{lineCount -
				stuck.length} de {lineCount} falas saíram. As que travaram ficam mais fáceis na próxima volta."
		/>
	{:else if data.isNew}
		<EndScreen
			title="Lição {lesson.no} concluída"
			lead="A próxima já está liberada na trilha. O que ficou confuso volta nas lições seguintes, por isso não precisa decorar."
			{facts}
			wave={data.wave === null
				? null
				: {
						no: data.wave,
						href: `${resolve('/curso/[course]/[lesson]', {
							course: data.course.id,
							lesson: String(data.wave)
						})}?onda`
					}}
		/>
	{:else}
		<EndScreen
			title="Lição {lesson.no} revista"
			lead="Rever ajuda a fixar. A próxima lição continua esperando na trilha."
			{facts}
		/>
	{/if}
</div>

<Toast />

<style>
	.player {
		position: fixed;
		inset: 0;
		display: flex;
		flex-direction: column;
		background: var(--page);
		color: var(--ink);
		padding-top: var(--safe-t);
	}
	.top {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;
		max-width: 760px;
		margin: 0 auto;
		padding: 18px 28px;
		flex: none;
	}
	.x {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		display: grid;
		place-items: center;
		color: var(--ink-3);
		flex: none;
	}
	.x:hover {
		background: var(--hover);
		color: var(--ink);
	}
	.prog {
		flex: 1;
		display: flex;
		gap: 6px;
	}
	.prog i {
		flex: 1;
		height: 8px;
		border-radius: 99px;
		background: var(--prog-track);
		overflow: hidden;
	}
	.prog b {
		display: block;
		height: 100%;
		background: var(--prog);
		border-radius: inherit;
		transition: width 0.35s var(--ease);
	}
	.player ~ :global(.toast) {
		bottom: 104px !important;
	}
	@media (max-width: 560px) {
		.top {
			padding: 12px 18px;
			gap: 12px;
		}
		.prog {
			gap: 4px;
		}
		.player ~ :global(.toast) {
			bottom: calc(92px + var(--safe-b)) !important;
		}
	}
</style>
