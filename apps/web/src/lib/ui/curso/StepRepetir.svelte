<!-- Passo Repetir: uma fala por vez, em voz alta, imitando a entonação. -->
<script lang="ts">
	import type { Lesson } from '#lib/curso/index.ts';
	import { lineAudioUrl } from '#lib/curso/audio.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import { dialogNeighbours } from './dict.svelte.ts';
	import TapText from './TapText.svelte';

	let {
		lesson,
		kicker,
		language,
		progress = $bindable(0),
		onnext
	}: {
		lesson: Lesson;
		kicker: string;
		language: string;
		progress?: number;
		onnext: () => void;
	} = $props();

	const lines = $derived(lesson.lines ?? []);
	let i = $state(0);
	const line = $derived(lines[i]);

	$effect(() => {
		progress = lines.length ? i / lines.length : 0;
	});

	function next() {
		if (i < lines.length - 1) i++;
		else {
			progress = 1;
			onnext();
		}
	}
</script>

<Frame>
	<div class="kicker">{kicker}</div>
	<h2>Repita em voz alta</h2>
	<p class="lead">Ouça cada fala e repita imitando a entonação. Não precisa decorar.</p>
	{#if line}
		<div class="stage">
			<div class="pos">Fala {i + 1} de {lines.length}</div>
			<div class="say-it" lang={language}>
				<TapText text={line.it} pt={line.pt} {language} line={i} {...dialogNeighbours(lines, i)} />
			</div>
			<div class="say-pt">{line.pt}</div>
			<div class="tools"><AudioButton src={lineAudioUrl(language, line.it)} label="Ouvir a fala" /></div>
		</div>
	{/if}
	{#snippet foot()}
		{#if i > 0}
			<button type="button" class="btn btn-ghost" onclick={() => i--}>Anterior</button>
		{/if}
		<span class="sp"></span>
		<button type="button" class="btn btn-primary btn-wide" onclick={next}>Repeti</button>
	{/snippet}
</Frame>
