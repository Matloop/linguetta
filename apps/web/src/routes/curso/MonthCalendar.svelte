<!--
	Calendário do mês no estilo do GitHub (e do Calendário das estatísticas): uma coluna por
	semana, uma linha por dia da semana, cor mais forte com mais lições feitas no dia.
	As setas andam pelos meses, do primeiro com lição até o atual.
-->
<script lang="ts">
	import { monthActivity, monthOf, shiftMonth, type Completion } from '#lib/curso/progress.ts';
	import Icon from '#lib/ui/Icon.svelte';

	let { completions, today }: { completions: Completion[]; today: string } = $props();

	const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
	const current = $derived(monthOf(today));
	const first = $derived(
		completions.reduce((m, c) => (monthOf(c.studyDay) < m ? monthOf(c.studyDay) : m), current)
	);

	let picked = $state<string | null>(null);
	const month = $derived(picked !== null && picked >= first && picked <= current ? picked : current);
	const act = $derived(monthActivity(completions, month, today));

	const asDate = (day: string) => new Date(`${day}T12:00:00Z`);
	const monthFmt = new Intl.DateTimeFormat('pt-BR', {
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC'
	});
	const dayFmt = new Intl.DateTimeFormat('pt-BR', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		timeZone: 'UTC'
	});
	const lessons = (n: number) => (n === 1 ? '1 lição' : `${n} lições`);
	const title = $derived.by(() => {
		const t = monthFmt.format(asDate(`${month}-01`));
		return t.charAt(0).toLocaleUpperCase('pt-BR') + t.slice(1);
	});
	const dayText = (day: string, n: number) => `${dayFmt.format(asDate(day))}: ${lessons(n)}`;

	let hovered = $state<{ day: string; n: number } | null>(null);
	function hover(e: PointerEvent) {
		const day = (e.target as HTMLElement).dataset.day;
		const c = day ? act.cells.find((x) => x.day === day) : undefined;
		hovered = c ? { day: c.day, n: c.n } : null;
	}
	const caption = $derived(
		hovered
			? dayText(hovered.day, hovered.n)
			: act.total
				? `${lessons(act.total)} em ${act.activeDays === 1 ? '1 dia' : `${act.activeDays} dias`}`
				: month === current
					? 'Nenhuma lição neste mês ainda'
					: 'Nenhuma lição neste mês'
	);
</script>

<div class="cal">
	<div class="head">
		<span class="m">{title}</span>
		<button
			type="button"
			class="icon-btn"
			aria-label="Mês anterior"
			disabled={month <= first}
			onclick={() => (picked = shiftMonth(month, -1))}><Icon name="right" size="sm flip" /></button
		>
		<button
			type="button"
			class="icon-btn"
			aria-label="Próximo mês"
			disabled={month >= current}
			onclick={() => (picked = shiftMonth(month, 1))}><Icon name="right" size="sm" /></button
		>
	</div>
	<div class="body">
		<div class="wd" aria-hidden="true">
			{#each WEEKDAYS as w, i (i)}<span>{i % 2 ? w : ''}</span>{/each}
		</div>
		<div
			class="grid"
			style:--weeks={act.weeks}
			role="img"
			aria-label="Lições por dia em {title}: {lessons(act.total)}"
			onpointerover={hover}
			onpointerleave={() => (hovered = null)}
		>
			{#each act.cells as c (c.day)}
				<span
					class="cell l{c.level}"
					class:future={c.future}
					class:today={c.day === today}
					style:grid-column={c.col + 1}
					style:grid-row={c.row + 1}
					data-day={c.future ? undefined : c.day}
				></span>
			{/each}
		</div>
	</div>
	<div class="foot">
		<span class="cap">{caption}</span>
		<span class="legend" aria-hidden="true"
			>Menos{#each [0, 1, 2, 3, 4] as l (l)}<i class="cell l{l}"></i>{/each}Mais</span
		>
	</div>
</div>

<style>
	.head {
		display: flex;
		align-items: center;
		gap: 2px;
		margin: -6px -8px 8px 0;
	}
	.head .m {
		flex: 1;
		font-size: 13px;
		color: var(--ink-2);
	}
	.head .icon-btn:disabled {
		opacity: 0.35;
		cursor: default;
		background: none;
	}
	.body {
		display: flex;
		justify-content: center;
		gap: 6px;
	}
	.wd {
		display: grid;
		grid-template-rows: repeat(7, 20px);
		gap: 3px;
		font-size: 10.5px;
		color: var(--ink-3);
		line-height: 20px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--weeks), 20px);
		grid-template-rows: repeat(7, 20px);
		gap: 3px;
	}
	.cell {
		border-radius: 3px;
		background: var(--heat-0);
	}
	.l1 {
		background: var(--heat-1);
	}
	.l2 {
		background: var(--heat-2);
	}
	.l3 {
		background: var(--heat-3);
	}
	.l4 {
		background: var(--heat-4);
	}
	.cell.future {
		opacity: 0.4;
	}
	.cell.today {
		outline: 1.5px solid var(--ink-2);
		outline-offset: 1px;
	}
	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 6px 8px;
		margin-top: 12px;
		font-size: 12px;
		color: var(--ink-3);
		font-variant-numeric: tabular-nums;
	}
	.cap {
		flex: 1 0 100%;
		min-height: 1.4em;
	}
	.legend {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		margin-left: auto;
		font-size: 11px;
	}
	.legend .cell {
		width: 10px;
		height: 10px;
		border-radius: 2px;
	}
	.legend .cell:first-child {
		margin-left: 3px;
	}
	.legend .cell:last-child {
		margin-right: 3px;
	}
</style>
