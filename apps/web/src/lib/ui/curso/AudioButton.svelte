<!-- Botão de áudio do curso. Por enquanto só a forma: o áudio das lições ainda não existe. -->
<script lang="ts">
	import Icon from '#lib/ui/Icon.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';

	let { size = 'round', label = 'Ouvir' }: { size?: 'round' | 'big' | 'mini'; label?: string } =
		$props();
</script>

<button
	type="button"
	class="play {size}"
	aria-label={label}
	title={label}
	onclick={(e) => {
		e.stopPropagation();
		toast('O áudio das lições chega em breve');
	}}><Icon name="play" /></button
>

<style>
	.play {
		display: inline-grid;
		place-items: center;
		flex: none;
		border: 0;
		padding: 0;
		border-radius: 50%;
		cursor: pointer;
		transition:
			background-color 0.15s,
			transform 0.12s,
			box-shadow 0.12s;
	}
	.play :global(.ic) {
		fill: currentColor;
		stroke-width: 1.2;
	}
	.round {
		width: 48px;
		height: 48px;
		background: var(--tile);
		color: var(--ink);
		box-shadow: inset 0 0 0 1px var(--line-2);
	}
	.round:hover {
		background: var(--hover);
	}
	.mini {
		width: 34px;
		height: 34px;
		background: var(--tile);
		color: var(--ink-2);
		box-shadow: inset 0 0 0 1px var(--line);
	}
	.mini :global(.ic) {
		width: 14px;
		height: 14px;
	}
	.mini:hover {
		color: var(--ink);
		background: var(--hover);
	}
	.big {
		width: 112px;
		height: 112px;
		background: var(--primary);
		color: var(--on-primary);
		box-shadow: 0 6px 0 color-mix(in srgb, var(--primary) 55%, #000);
	}
	.big :global(.ic) {
		width: 40px;
		height: 40px;
		translate: 3px 0;
	}
	.big:active {
		transform: translateY(4px);
		box-shadow: 0 2px 0 color-mix(in srgb, var(--primary) 55%, #000);
	}
</style>
