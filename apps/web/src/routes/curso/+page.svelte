<!--
	Trilha do curso: a unidade atual como um caminho vertical de lições (feita, próxima,
	bloqueada), o cartão de cada lição num popover e, ao lado, o que há para fazer e o
	calendário do mês. Sem limite por dia; as feitas podem ser revistas quando quiser.
-->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { WAVE_START } from '#lib/curso/index.ts';
	import Icon, { type IconName } from '#lib/ui/Icon.svelte';
	import Popover from '#lib/ui/Popover.svelte';
	import MonthCalendar from './MonthCalendar.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	/** Deslocamento horizontal das paradas, em ziguezague (7 por unidade). */
	const OFFSETS = [0, 52, 78, 52, 0, -52, -78];

	const course = $derived(data.course);
	const cs = $derived(data.state);
	const done = $derived(new Set(cs.done));
	const byNo = $derived(new Map(course.lessons.map((l) => [l.no, l])));

	/** A lição que a trilha destaca: a próxima ou, com o curso em dia, a última feita. */
	const focus = $derived(cs.next ?? Math.max(-1, ...cs.done));
	const unitIndex = $derived(
		Math.max(
			0,
			course.units.findIndex((u) => u.lessons.includes(focus))
		)
	);
	const unit = $derived(course.units[unitIndex]);
	const nextUnit = $derived(course.units[unitIndex + 1] ?? null);

	type Stop = 'done' | 'cur' | 'locked';
	function stopState(no: number): Stop {
		if (done.has(no)) return 'done';
		if (no === cs.next) return 'cur';
		return 'locked';
	}

	function iconFor(no: number, st: Stop): IconName {
		if (st === 'done') return 'check';
		const kind = byNo.get(no)?.kind;
		if (st === 'locked') return kind === 'revisao' ? 'repeat' : 'lock';
		return kind === 'revisao' ? 'repeat' : kind === 'introducao' ? 'sound' : 'book';
	}

	function lessonHref(no: number, onda = false) {
		const href = resolve('/curso/[course]/[lesson]', { course: course.id, lesson: String(no) });
		return onda ? `${href}?onda` : href;
	}

	function meta(no: number, st: Stop) {
		const l = byNo.get(no);
		if (!l) return 'Ainda em preparo. Chega em breve.';
		if (st === 'locked') return 'Abre quando você concluir as anteriores.';
		if (st === 'done') return 'Feita. Pode rever quando quiser.';
		if (l.kind === 'revisao') return 'Revisão das notas da semana.';
		if (l.kind === 'introducao') return 'Os sons do italiano, com exemplos para ouvir e repetir.';
		const ex = l.steps.filter((s) => s === 'traduzir' || s === 'completar').length;
		return `${l.lines} falas · ouvir, ler, repetir${ex ? ` e ${ex} exercício${ex > 1 ? 's' : ''}` : ''}.`;
	}

	let openNo = $state<number | null>(null);

	const unitRange = $derived(
		unit ? `lições ${unit.lessons[0]}–${unit.lessons[unit.lessons.length - 1]}` : ''
	);
	const doneCount = $derived(cs.done.length);
	const phase = $derived((cs.next ?? 0) >= WAVE_START ? 'Fase ativa' : 'Fase passiva');
	const nextLesson = $derived(cs.next === null ? null : (byNo.get(cs.next) ?? null));

	function scrollToCurrent(el: HTMLElement) {
		el.scrollIntoView({ block: 'center' });
	}
</script>

<svelte:head>
	<title>Curso · Linguetta</title>
</svelte:head>

<div class="ph">
	<div>
		<h1>{course.title}</h1>
		<p>
			No método Assimil: ouvir, ler, repetir. Faça quantas lições quiser por dia, sem pressa e sem
			decorar.
		</p>
	</div>
</div>

<div class="trail">
	<div class="col">
		{#if unitIndex > 0}
			<div class="past">
				{unitIndex === 1 ? 'Unidade 1 concluída' : `Unidades 1 a ${unitIndex} concluídas`}
			</div>
		{/if}
		{#if unit}
			<div class="unit">
				<div class="t">
					<small>Unidade {unit.no} · {unitRange}</small>
					<b>{unit.title}</b>
				</div>
			</div>
			<div class="path">
				{#each unit.lessons as no, i (no)}
					{@const st = stopState(no)}
					{@const x = OFFSETS[i % OFFSETS.length]}
					{@const l = byNo.get(no)}
					<div
						class="stop"
						class:is-cur={st === 'cur'}
						class:has-pop={openNo === no}
						style:--x="{x}px"
					>
						{#if st === 'cur'}
							<span class="tag" {@attach scrollToCurrent}>Começar</span>
						{/if}
						<Popover
							bind:open={() => openNo === no, (v) => (openNo = v ? no : null)}
							label="Lição {no}"
							align="center"
							width={260}
						>
							{#snippet trigger({ toggle, expanded, id })}
								<button
									type="button"
									class="node {st}"
									aria-label="Lição {no}{l ? `: ${l.title}` : ''}"
									aria-expanded={expanded}
									aria-controls={id}
									onclick={toggle}><Icon name={iconFor(no, st)} /></button
								>
							{/snippet}
							<div class="card">
								<small>Lição {no}</small>
								<h4>{l?.title ?? 'Em breve'}</h4>
								{#if l?.titlePt && l.titlePt !== l.title}<div class="pt">{l.titlePt}</div>{/if}
								<p>{meta(no, st)}</p>
								{#if st === 'cur' && l}
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- lessonHref já resolve -->
									<a class="btn btn-primary" href={lessonHref(no)}>Começar</a>
								{:else if st === 'done' && l}
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- lessonHref já resolve -->
									<a class="btn btn-soft" href={lessonHref(no)}>Rever</a>
								{:else}
									<button type="button" class="btn btn-soft" disabled>Bloqueada</button>
								{/if}
							</div>
						</Popover>
						<span class="cap {x > 0 ? 'l' : 'r'}"><b>{l?.title ?? 'Em breve'}</b>Lição {no}</span>
					</div>
				{/each}
			</div>
		{/if}
		{#if nextUnit}
			<div class="unit next">
				<div class="t"><small>Unidade {nextUnit.no}</small><b>{nextUnit.title}</b></div>
			</div>
		{/if}
	</div>

	<aside class="rail" aria-label="Hoje no curso">
		<section class="box">
			<h3>Hoje</h3>
			<ul class="today">
				{#each cs.doneToday as no (no)}
					<li>
						<span class="dot ok"><Icon name="check" /></span>
						<span class="t"><b>Lição {no}</b><span>Feita hoje</span></span>
					</li>
				{/each}
				{#if cs.next !== null && nextLesson}
					{@const rev = nextLesson.kind === 'revisao'}
					<li>
						<span class="dot"><Icon name={rev ? 'repeat' : 'book'} /></span>
						<span class="t"
							><b>Lição {cs.next}{rev ? ' · revisão' : ''}</b><span
								>{rev ? 'Notas da semana' : '~15 min'}</span
							></span
						>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- lessonHref já resolve -->
						<a class="go" href={lessonHref(cs.next)}>Começar</a>
					</li>
				{:else}
					<li>
						<span class="dot ok"><Icon name="check" /></span>
						<span class="t"><b>Curso em dia</b><span>As próximas lições chegam em breve</span></span
						>
					</li>
				{/if}
				{#if cs.wave !== null}
					<li>
						<span class="dot wave"><Icon name="refresh" /></span>
						<span class="t"
							><b>Refazer a lição {cs.wave}</b><span>Segunda onda · ~5 min</span></span
						>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- lessonHref já resolve -->
						<a class="go" href={lessonHref(cs.wave, true)}>Começar</a>
					</li>
				{/if}
			</ul>
		</section>
		<section class="box">
			<h3>Lições por dia</h3>
			<MonthCalendar completions={data.completions} today={data.today} />
		</section>
		<section class="box">
			<h3>O {course.title.toLocaleLowerCase('pt-BR')}, dia a dia</h3>
			<div class="bar">
				<i style:width="{Math.min(100, (doneCount / course.planned) * 100)}%"></i>
			</div>
			<div class="meter">
				<span>Lição {doneCount} de {course.planned}</span><span>{phase}</span>
			</div>
		</section>
		{#if data.toReview !== null}
			<section class="box">
				<h3>Flashcards</h3>
				<p>
					{data.toReview} para revisar. As palavras guardadas nas lições entram aqui, no FSRS.
				</p>
				<a class="link" href={resolve('/flashcards/estudar')}>Revisar →</a>
			</section>
		{/if}
	</aside>
</div>

<style>
	@keyframes bob {
		50% {
			transform: translate(-50%, -4px);
		}
	}
	.trail {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 290px;
		gap: 32px;
		max-width: 920px;
		padding-bottom: 60px;
	}
	.col {
		min-width: 0;
	}
	.unit {
		display: flex;
		align-items: center;
		gap: 16px;
		background: var(--primary);
		color: var(--on-primary);
		border-radius: 14px;
		padding: 16px 18px 16px 20px;
	}
	.unit .t {
		flex: 1;
		min-width: 0;
	}
	.unit small {
		display: block;
		font: 600 11.5px var(--f-body);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.65;
		margin-bottom: 2px;
	}
	.unit b {
		font: 600 18px/1.25 var(--f-head);
		letter-spacing: -0.01em;
	}
	.unit.next {
		background: transparent;
		color: var(--ink-3);
		box-shadow: inset 0 0 0 1px var(--line-2);
	}
	.past {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 13px;
		color: var(--ink-3);
		margin-bottom: 14px;
	}
	.past::before,
	.past::after {
		content: '';
		flex: 1;
		height: 1px;
		background: var(--line-2);
	}
	.path {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 26px;
		padding: 40px 0 44px;
	}
	.stop {
		position: relative;
		transform: translateX(var(--x, 0));
	}
	.stop.is-cur {
		margin: 30px 0 6px;
	}
	.stop.has-pop {
		z-index: 30;
	}
	.node {
		position: relative;
		width: 64px;
		height: 64px;
		border: 0;
		padding: 0;
		border-radius: 50%;
		display: grid;
		place-items: center;
		cursor: pointer;
		background: var(--raise);
		color: var(--ink-3);
		box-shadow:
			var(--sh-card),
			0 4px 0 var(--line-2);
		transition: transform 0.12s;
	}
	.node:active {
		transform: translateY(3px);
	}
	.node.done {
		background: var(--hl);
		color: var(--hl-ink);
		box-shadow: 0 4px 0 color-mix(in srgb, var(--hl-ink) 18%, transparent);
	}
	.node.cur {
		width: 72px;
		height: 72px;
		background: var(--primary);
		color: var(--on-primary);
		box-shadow: 0 5px 0 color-mix(in srgb, var(--primary) 55%, #000);
	}
	.node.cur::after {
		content: '';
		position: absolute;
		inset: -9px;
		border-radius: 50%;
		box-shadow: 0 0 0 3px var(--prog-track);
	}
	.node.locked {
		background: var(--sunk);
		color: var(--ink-3);
		box-shadow: 0 4px 0 var(--line-2);
		opacity: 0.8;
	}
	.node :global(.ic) {
		width: 24px;
		height: 24px;
	}
	.node.done :global(.ic) {
		stroke-width: 2.2;
	}
	.tag {
		position: absolute;
		left: 50%;
		bottom: calc(100% + 14px);
		transform: translateX(-50%);
		white-space: nowrap;
		font: 700 12px/1 var(--f-head);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 9px 12px;
		border-radius: 9px;
		background: var(--raise);
		color: var(--ink);
		box-shadow: var(--sh-lift);
		animation: bob 2.4s ease-in-out infinite;
		z-index: 1;
	}
	.tag::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 100%;
		width: 10px;
		height: 10px;
		background: var(--raise);
		transform: translate(-50%, -5px) rotate(45deg);
		box-shadow: 1px 1px 0 var(--line);
	}
	.cap {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		white-space: nowrap;
		font-size: 13px;
		color: var(--ink-3);
		pointer-events: none;
	}
	.cap b {
		display: block;
		font: 600 14px/1.2 var(--f-head);
		color: var(--ink-2);
	}
	.cap.r {
		left: calc(100% + 16px);
	}
	.cap.l {
		right: calc(100% + 16px);
		text-align: right;
	}
	.stop.is-cur .cap b {
		color: var(--ink);
	}
	.card small {
		font-size: 12px;
		color: var(--ink-3);
	}
	.card h4 {
		margin: 2px 0;
		font: 600 17px var(--f-head);
	}
	.card .pt {
		font-size: 13px;
		color: var(--ink-2);
		margin-bottom: 4px;
	}
	.card p {
		margin: 0 0 14px;
		font-size: 13.5px;
		color: var(--ink-3);
	}
	.card .btn {
		width: 100%;
	}
	.rail {
		display: flex;
		flex-direction: column;
		gap: 14px;
		position: sticky;
		top: 24px;
		align-self: start;
	}
	.box {
		background: var(--raise);
		border-radius: 14px;
		box-shadow: var(--sh-panel);
		padding: 16px 18px;
	}
	.box h3 {
		margin: 0 0 12px;
		font: 600 15px var(--f-head);
	}
	.box p {
		margin: 0;
		font-size: 13.5px;
		color: var(--ink-3);
	}
	.box .link {
		display: inline-block;
		margin-top: 10px;
		font-size: 13px;
		font-weight: 600;
		color: var(--ink);
		text-decoration: none;
	}
	.today {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.today li {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	.dot {
		width: 34px;
		height: 34px;
		border-radius: 10px;
		display: grid;
		place-items: center;
		flex: none;
		background: var(--tile);
		color: var(--ink-2);
		box-shadow: inset 0 0 0 1px var(--line-2);
	}
	.dot :global(.ic) {
		width: 17px;
		height: 17px;
	}
	.dot.wave {
		background: var(--gold-soft);
		color: var(--gold-ink);
		box-shadow: none;
	}
	.dot.ok {
		background: var(--ok-soft);
		color: var(--ok-ink);
		box-shadow: none;
	}
	.today .t {
		flex: 1;
		min-width: 0;
		line-height: 1.3;
	}
	.today .t b {
		display: block;
		font-size: 14px;
		font-weight: 600;
	}
	.today .t span {
		font-size: 12.5px;
		color: var(--ink-3);
	}
	.go {
		font-size: 13px;
		font-weight: 600;
		color: var(--ink);
		padding: 6px 10px;
		border-radius: var(--r-m);
		background: var(--tile);
		box-shadow: inset 0 0 0 1px var(--line-2);
		text-decoration: none;
	}
	.go:hover {
		background: var(--hover);
	}
	.meter {
		display: flex;
		justify-content: space-between;
		font-size: 12.5px;
		color: var(--ink-3);
		margin-top: 8px;
		font-variant-numeric: tabular-nums;
	}
	@media (max-width: 860px) {
		.trail {
			grid-template-columns: 1fr;
		}
		.rail {
			order: -1;
			position: static;
		}
	}
	@media (max-width: 560px) {
		.cap {
			display: none;
		}
	}
</style>
