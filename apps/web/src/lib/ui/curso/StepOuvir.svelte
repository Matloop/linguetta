<!-- Passo Ouvir: o diálogo inteiro, só em italiano, com o botão grande de tocar. -->
<script lang="ts">
	import type { Lesson } from '#lib/curso/index.ts';
	import { dialogAudioUrl } from '#lib/curso/audio.ts';
	import AudioButton from './AudioButton.svelte';
	import Frame from './Frame.svelte';
	import { dialogNeighbours } from './dict.svelte.ts';
	import TapText from './TapText.svelte';

	let {
		lesson,
		kicker,
		language,
		onnext
	}: { lesson: Lesson; kicker: string; language: string; onnext: () => void } = $props();
	const lines = $derived(lesson.lines ?? []);
</script>

<Frame>
	<div class="kicker">{kicker}</div>
	<h2>Ouça a lição inteira</h2>
	<p class="lead">Não tente entender tudo. Só pegue o ritmo e a melodia das frases.</p>
	<div class="listen">
		<AudioButton src={dialogAudioUrl(language, lesson.no)} size="big" label="Tocar o diálogo" />
		<div class="meta">
			{lesson.title}<span>Lição {lesson.no} · {lines.length} falas</span>
		</div>
	</div>
	<ol class="script" lang={language}>
		{#each lines as l, i (i)}
			<li class:sep={l.sep}>
				<TapText text={l.it} pt={l.pt} {language} line={i} {...dialogNeighbours(lines, i)} />
			</li>
		{/each}
	</ol>
	{#snippet foot()}
		<span class="sp"></span>
		<button type="button" class="btn btn-primary btn-wide" onclick={onnext}>Já ouvi</button>
	{/snippet}
</Frame>

<style>
	.listen {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 18px 0 0;
	}
	.meta {
		margin-top: 22px;
		font: 600 17px var(--f-head);
	}
	.meta span {
		display: block;
		font: 400 13.5px var(--f-body);
		color: var(--ink-3);
		margin-top: 2px;
	}
	.script {
		list-style: none;
		margin: 32px auto 0;
		padding: 18px 0 0;
		border-top: 1px solid var(--line);
		max-width: 480px;
		text-align: center;
		color: var(--ink-2);
		font-size: 16px;
		line-height: 1.5;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.script .sep {
		margin-top: 12px;
	}
</style>
