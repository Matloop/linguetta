<!--
	Segunda onda: lê o português, fala em italiano em voz alta e confere. Só a pessoa sabe se
	saiu; "Travei" marca a fala para o resultado.
-->
<script lang="ts">
	import type { Lesson } from '#lib/curso/index.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import { lineAudioUrl } from '#lib/curso/audio.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import { dialogNeighbours } from './dict.svelte.ts';
	import TapText from './TapText.svelte';

	let {
		lesson,
		language,
		progress = $bindable(0),
		ondone
	}: {
		lesson: Lesson;
		language: string;
		progress?: number;
		/** Índices das falas em que travou. */
		ondone: (stuck: number[]) => void;
	} = $props();

	const lines = $derived(lesson.lines ?? []);
	let i = $state(0);
	let shown = $state(false);
	let stuck = $state<number[]>([]);
	const line = $derived(lines[i]);

	$effect(() => {
		progress = lines.length ? (i + (shown ? 0.5 : 0)) / lines.length : 0;
	});

	function mark(ok: boolean) {
		if (!ok) stuck = [...stuck, i];
		if (i < lines.length - 1) {
			i++;
			shown = false;
		} else {
			progress = 1;
			ondone(stuck);
		}
	}
</script>

<Frame tone={shown ? 'neutral' : ''}>
	<div class="kicker">Segunda onda · lição {lesson.no}</div>
	<h2>Diga em italiano</h2>
	<p class="lead">Leia o português e fale em voz alta antes de conferir. Só você sabe se saiu.</p>
	{#if line}
		<div class="stage">
			<div class="pos">Fala {i + 1} de {lines.length}</div>
			<div class="say-big-pt">{line.pt}</div>
			{#if shown}
				<div class="ans">
					<div class="say-it" lang={language}>
						<TapText
							text={line.it}
							pt={line.pt}
							{language}
							line={i}
							{...dialogNeighbours(lines, i)}
						/>
					</div>
					{#if line.lit}<div class="lit">Literal: {line.lit}</div>{/if}
					<div class="tools"><AudioButton src={lineAudioUrl(language, line.it)} label="Ouvir a fala" /></div>
				</div>
			{/if}
		</div>
	{/if}
	{#snippet foot()}
		{#if !shown}
			<span class="sp"></span>
			<button type="button" class="btn btn-primary btn-wide" onclick={() => (shown = true)}
				>Falei, conferir</button
			>
		{:else}
			<span class="sp"></span>
			<button type="button" class="btn btn-terra" onclick={() => mark(false)}>Travei</button>
			<button type="button" class="btn btn-ok btn-wide" onclick={() => mark(true)}
				><Icon name="check" />Saiu</button
			>
		{/if}
	{/snippet}
</Frame>
