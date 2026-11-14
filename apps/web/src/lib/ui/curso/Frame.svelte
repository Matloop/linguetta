<!--
	Uma tela do player do curso: o miolo rola, o rodapé fica preso com o botão principal
	(Enter aperta o .btn-primary do rodapé). As peças comuns dos passos (cabeçalho, palco,
	marcadores, retorno) são estilizadas aqui.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		tone = '',
		children,
		foot
	}: {
		/** Cor do rodapé: acerto, erro ou resposta mostrada. */
		tone?: '' | 'ok' | 'bad' | 'neutral';
		children: Snippet;
		foot: Snippet;
	} = $props();
</script>

<div class="pm">
	<div class="pm-in">{@render children()}</div>
</div>
<footer class="pf {tone}">
	<div class="pf-in">{@render foot()}</div>
</footer>

<style>
	.pm {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
	}
	.pm-in {
		max-width: 600px;
		margin: 0 auto;
		padding: 18px 28px 48px;
	}
	.pf {
		flex: none;
		border-top: 1px solid var(--line);
		background: var(--page);
		transition: background-color 0.2s;
	}
	.pf-in {
		max-width: 760px;
		margin: 0 auto;
		padding: 18px 28px calc(18px + var(--safe-b));
		display: flex;
		align-items: center;
		gap: 12px;
		min-height: 84px;
	}
	.pf.ok {
		background: var(--ok-soft);
		border-color: transparent;
	}
	.pf.bad {
		background: var(--terra-soft);
		border-color: transparent;
	}
	.pf.neutral {
		background: var(--raise);
	}

	/* ── cabeçalho do passo ── */
	.pm :global(.kicker) {
		font: 600 12px var(--f-body);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-3);
		margin-bottom: 8px;
	}
	.pm :global(h2) {
		font: 600 26px/1.2 var(--f-head);
		letter-spacing: -0.02em;
		margin: 0 0 8px;
		text-wrap: balance;
	}
	.pm :global(.lead) {
		margin: 0 0 28px;
		color: var(--ink-2);
		font-size: 15px;
		max-width: 480px;
		text-wrap: pretty;
	}

	/* ── palco (uma frase por vez) ── */
	.pm :global(.stage) {
		background: var(--raise);
		border-radius: 16px;
		box-shadow: var(--sh-lift);
		padding: 30px 28px;
		text-align: center;
	}
	.pm :global(.pos) {
		font-size: 12.5px;
		font-weight: 600;
		color: var(--ink-3);
		margin-bottom: 16px;
		font-variant-numeric: tabular-nums;
	}
	.pm :global(.say-it) {
		font: 500 23px/1.4 var(--f-body);
		letter-spacing: -0.005em;
		text-wrap: balance;
	}
	.pm :global(.say-pt) {
		font-size: 15px;
		color: var(--ink-3);
		margin-top: 8px;
	}
	.pm :global(.say-big-pt) {
		font: 600 23px/1.35 var(--f-head);
		letter-spacing: -0.01em;
		text-wrap: balance;
	}
	.pm :global(.ans) {
		margin-top: 22px;
		padding-top: 22px;
		border-top: 1px dashed var(--line-2);
	}
	.pm :global(.ans .say-it) {
		font-size: 20px;
	}
	.pm :global(.stage .lit) {
		font-size: 13px;
		color: var(--ink-3);
		margin-top: 4px;
	}
	.pm :global(.tools) {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		gap: 8px;
	}
	.pm :global(.subdots) {
		display: flex;
		justify-content: center;
		gap: 6px;
		margin-top: 18px;
	}
	.pm :global(.subdots i) {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--line-2);
	}
	.pm :global(.subdots i.on) {
		background: var(--prog);
	}
	.pm :global(.subdots i.ok) {
		background: var(--ok-ink);
	}
	.pm :global(.subdots i.no) {
		background: var(--terra-ink);
	}

	/* ── rodapé ── */
	.pf :global(.sp) {
		flex: 1;
	}
	.pf :global(.msg) {
		font-size: 13.5px;
		color: var(--ink-3);
	}
	.pf :global(.btn) {
		height: 44px;
		padding: 0 20px;
		border-radius: 10px;
		font-weight: 600;
		font-size: 15px;
	}
	.pf :global(.btn-wide) {
		min-width: 160px;
	}
	.pf :global(.btn-ok) {
		background: var(--ok-soft);
		color: var(--ok-ink);
	}
	.pf :global(.btn-terra) {
		background: var(--terra-soft);
		color: var(--terra-ink);
	}
	.pf :global(.fb) {
		display: flex;
		align-items: center;
		gap: 12px;
		min-width: 0;
	}
	.pf :global(.fb .mk) {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--raise);
		flex: none;
	}
	.pf.ok :global(.fb) {
		color: var(--ok-ink);
	}
	.pf.bad :global(.fb) {
		color: var(--terra-ink);
	}
	.pf :global(.fb b) {
		display: block;
		font: 600 16px var(--f-head);
	}
	.pf :global(.fb span) {
		font-size: 14px;
		color: var(--ink-2);
	}

	@media (max-width: 560px) {
		.pm-in {
			padding: 12px 18px 36px;
		}
		.pm :global(h2) {
			font-size: 22px;
		}
		.pm :global(.stage) {
			padding: 24px 18px;
		}
		.pf-in {
			padding: 14px 18px calc(14px + var(--safe-b));
			flex-wrap: wrap;
			min-height: 72px;
		}
		.pf :global(.fb) {
			flex-basis: 100%;
		}
		.pf :global(.btn-wide) {
			min-width: 0;
			flex: 1;
		}
	}
</style>
