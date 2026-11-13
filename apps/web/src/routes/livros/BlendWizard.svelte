<!--
	O fluxo do livro com blend num modal de 4 etapas: Livro (envio do EPUB), Mistura
	(capítulos, línguas, quanto e prévia), Geração e Pronto. Sem `initial`, começa no envio;
	com ele, abre na mistura (ou no pronto, se o livro já está gerado).
-->
<script lang="ts">
	import { untrack } from 'svelte';
	import { invalidateAll, preloadData } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { listLanguages } from '@linguetta/language';
	import {
		inRange,
		rangeProgress,
		rangeSummary,
		swapSegments,
		type ChapterRow
	} from '#lib/blend/book-ui.ts';
	import { MAX_COVERAGE, selectSwaps, type Swap } from '#lib/blend/select.ts';
	import { langAttrs, languageInline, languageLabel } from '#lib/languages.ts';
	import Icon from '#lib/ui/Icon.svelte';
	import Select from '#lib/ui/Select.svelte';
	import { toast } from '#lib/ui/app-state.svelte.ts';
	import { browserSupabase } from '#lib/ui/media-upload.ts';
	import { postAction } from '#lib/ui/post-action.ts';
	import type { PageData } from './[id]/$types';

	type BookData = Pick<PageData, 'book' | 'chapters'>;

	let {
		open,
		initial = null,
		studyLanguages,
		active = null,
		userId = '',
		onclose
	}: {
		open: boolean;
		/** Livro já enviado. Sem ele, o modal começa no envio do EPUB. */
		initial?: BookData | null;
		studyLanguages: readonly string[];
		active?: string | null;
		/** Pasta do Storage (só para o envio). */
		userId?: string;
		onclose: () => void;
	} = $props();

	const STEPS = ['Livro', 'Mistura', 'Geração', 'Pronto'] as const;
	const MAX_BYTES = 50 * 1024 * 1024;
	const nf = new Intl.NumberFormat('pt-BR');

	let step = $state(0);
	let uploaded = $state<BookData | null>(null);
	const current = $derived(uploaded ?? initial);

	// Formulário, inicializado do livro (de novo só quando muda de livro).
	let language = $state('');
	let bookLanguage = $state('');
	let percent = $state(10);
	let whole = $state(true);
	let from = $state(0);
	let to = $state(0);
	let chapters = $state<ChapterRow[]>([]);
	let saved = $state({ language: '', bookLanguage: '', percent: 0 });
	let version = $state<number | null>(null);
	let builtLinks = $state<number | null>(null);
	let loadedFor = '';

	const textChapters = $derived(chapters.filter((c) => c.words > 0));
	const firstSpine = $derived(textChapters[0]?.spine ?? 0);
	const lastSpine = $derived(textChapters.at(-1)?.spine ?? 0);
	const rangeFrom = $derived(whole ? firstSpine : from);
	const rangeTo = $derived(whole ? lastSpine : to);
	const selected = $derived(inRange(chapters, rangeFrom, rangeTo));
	const rangeWords = $derived(selected.reduce((n, c) => n + c.words, 0));
	const progress = $derived(rangeProgress(chapters, rangeFrom, rangeTo));
	const allReady = $derived(selected.length > 0 && selected.every((c) => c.status === 'feito'));
	const invalidates = $derived(
		language !== saved.language || bookLanguage !== saved.bookLanguage || percent !== saved.percent
	);
	const hasWork = $derived(chapters.some((c) => c.partsDone > 0 || c.status === 'feito'));

	$effect.pre(() => {
		if (!current) return;
		const b = current.book;
		chapters = current.chapters.map((c) => ({ ...c }));
		if (loadedFor === b.id) return;
		loadedFor = b.id;
		language = b.language;
		bookLanguage = b.bookLanguage;
		percent = Math.round(b.coverage * 100);
		saved = { language, bookLanguage, percent };
		version = b.version;
		builtLinks = null;
		const texts = current.chapters.filter((c) => c.words > 0);
		const first = texts[0]?.spine ?? 0;
		const last = texts.at(-1)?.spine ?? 0;
		from = Math.max(b.rangeFrom, first);
		to = Math.min(b.rangeTo, last);
		if (to < from) [from, to] = [first, last];
		whole = from <= first && to >= last;
		step = untrack(() => (version && allReady ? 3 : 1));
	});

	const chapterOptions = $derived(textChapters.map((c) => ({ value: c.spine, label: c.title })));
	const toOptions = $derived(
		textChapters.map((c) => ({ value: c.spine, label: c.title, disabled: c.spine < from }))
	);
	const languageOptions = $derived(
		studyLanguages.map((l) => ({ value: l, label: languageLabel(l, 'pt') }))
	);
	// A tag do EPUB pode ter região (pt-BR), que a lista de idiomas base não traz: entra no topo.
	const bookLanguageOptions = $derived.by(() => {
		const list = listLanguages('pt').map((o) => ({
			value: o.tag,
			label: o.name,
			disabled: o.tag === language
		}));
		if (!bookLanguage || list.some((o) => o.value === bookLanguage)) return list;
		return [{ value: bookLanguage, label: languageLabel(bookLanguage, 'pt'), disabled: false }, ...list];
	});
	const PRESETS = [
		[5, 'Leve'],
		[10, 'Iniciante'],
		[25, 'Intermediário'],
		[50, 'Avançado'],
		[100, 'Imersão']
	] as const;

	function setFrom(v: number) {
		from = v;
		if (to < v) to = v;
	}

	// Modal: abrir sem livro (e sem geração em curso) recomeça do envio.
	let dialog = $state<HTMLDialogElement>();
	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) {
			untrack(() => {
				if (initial || phase !== 'idle') return;
				uploaded = null;
				loadedFor = '';
				step = 0;
				uploadError = '';
				notice = null;
			});
			dialog.showModal();
		} else if (!open && dialog.open) dialog.close();
	});

	// 1. Envio do EPUB: sobe no Storage, registra e carrega o livro sem sair da tela.
	let fileInput = $state<HTMLInputElement>();
	let uploading = $state(false);
	let uploadError = $state('');
	let dragging = $state(false);
	const target = $derived(
		active && studyLanguages.includes(active) ? active : (studyLanguages[0] ?? '')
	);

	async function upload(file: File) {
		uploadError = '';
		if (!/\.epub$/i.test(file.name)) return (uploadError = 'Escolha um arquivo .epub.');
		if (file.size > MAX_BYTES) return (uploadError = 'O EPUB passa de 50 MB.');
		if (!target) return (uploadError = 'Escolha um idioma de estudo no Perfil primeiro.');
		uploading = true;
		const id = crypto.randomUUID();
		const { error } = await browserSupabase()
			.storage.from('books')
			.upload(`${userId}/${id}/original.epub`, file, {
				contentType: 'application/epub+zip',
				upsert: false
			});
		if (error) {
			uploading = false;
			uploadError = 'Não deu para enviar o arquivo. Tente de novo.';
			return;
		}
		const r = await post<{ id: string }>(resolve('/livros/novo'), { id, language: target });
		if (!r.ok) {
			uploading = false;
			uploadError = r.message;
			return;
		}
		const page = await preloadData(resolve('/livros/[id]', { id }));
		uploading = false;
		if (page.type !== 'loaded' || page.status !== 200) {
			uploadError = 'Não deu para abrir o livro. Tente de novo.';
			return;
		}
		uploaded = page.data as BookData;
		await invalidateAll();
	}

	function onPick(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		if (file) void upload(file);
		input.value = '';
	}

	function onDrop(e: DragEvent) {
		e.preventDefault();
		dragging = false;
		const file = e.dataTransfer?.files[0];
		if (file && !uploading) void upload(file);
	}

	// 2. Prévia: um parágrafo do primeiro capítulo com candidata para cada palavra, uma chamada
	// da IA por par de línguas; cada % escolhe as trocas aqui, com a mesma selectSwaps.
	type Preview = { text: string; candidates: (Swap & { translation: string })[] };
	const previews = new Map<string, Preview>();
	let preview = $state<Preview | null>(null);
	let previewError = $state('');
	const previewKey = $derived(`${loadedFor}|${bookLanguage}|${language}`);

	$effect(() => {
		if (!open || step !== 1 || !current || !language || !bookLanguage || language === bookLanguage) return;
		const key = previewKey;
		preview = previews.get(key) ?? null;
		previewError = '';
		if (preview) return;
		post<Preview>(resolve('/livros/[id]/previa', { id: current.book.id }), {
			spine: firstSpine,
			language,
			bookLanguage
		}).then((r) => {
			if (key !== previewKey) return;
			if (!r.ok) {
				previewError =
					r.status === 429 ? 'O limite grátis da IA acabou por agora. A prévia volta mais tarde.' : r.message;
				return;
			}
			previews.set(key, r.data);
			preview = r.data;
		});
	});

	const previewSegments = $derived.by(() => {
		if (!preview) return [];
		const [chosen] = selectSwaps({
			texts: [preview.text],
			candidates: [preview.candidates],
			sourceLang: bookLanguage,
			targetLang: language,
			coverage: percent / 100
		});
		return swapSegments(preview.text, chosen);
	});

	// 3. Geração: um pedido por pedaço de capítulo, depois o EPUB.
	type Phase = 'idle' | 'saving' | 'blending' | 'building';
	let phase = $state<Phase>('idle');
	let currentTitle = $state('');
	let notice = $state<{ kind: 'quota' | 'error' | 'paused'; text: string } | null>(null);
	let stopRequested = false;
	const busy = $derived(phase !== 'idle');

	async function post<T>(
		path: string,
		body?: unknown
	): Promise<{ ok: true; data: T } | { ok: false; status: number; message: string }> {
		const res = await fetch(path, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body ?? {})
		}).catch(() => null);
		if (!res) return { ok: false, status: 0, message: 'Sem conexão. Tente de novo.' };
		const json = (await res.json().catch(() => null)) as (T & { message?: string }) | null;
		if (!res.ok || !json) {
			return { ok: false, status: res.status, message: json?.message ?? 'Não deu certo agora.' };
		}
		return { ok: true, data: json };
	}

	async function generate() {
		if (!current) return;
		if (invalidates && hasWork && !confirm('Mudar idioma ou quantidade descarta as trocas já preparadas. Continuar?')) {
			return;
		}
		const bookId = current.book.id;
		notice = null;
		stopRequested = false;
		step = 2;
		phase = 'saving';
		const settings = { language, bookLanguage, percent };
		const r = await postAction(
			`${resolve('/livros/[id]', { id: bookId })}?/settings`,
			{
				language,
				bookLanguage,
				coverage: String(percent),
				from: String(rangeFrom),
				to: String(rangeTo)
			},
			{ reload: false }
		);
		if (!r.ok) return stop({ kind: 'error', text: r.message });
		if (invalidates) {
			for (const c of chapters) Object.assign(c, { status: 'pendente', parts: 0, partsDone: 0 });
		}
		saved = settings;

		phase = 'blending';
		for (const ch of selected) {
			if (ch.status === 'feito') continue;
			currentTitle = ch.title;
			for (;;) {
				if (stopRequested) return stop({ kind: 'paused', text: 'Pausado. O que já foi feito fica guardado.' });
				const r = await post<{ part: number; parts: number; done: boolean }>(
					resolve('/livros/[id]/blend', { id: bookId }),
					{ spine: ch.spine }
				);
				if (!r.ok) {
					return stop(
						r.status === 429
							? {
									kind: 'quota',
									text: 'O limite grátis da IA acabou por agora. O que já foi feito fica guardado: volte mais tarde e toque em Continuar.'
								}
							: { kind: 'error', text: `${ch.title}: ${r.message}` }
					);
				}
				ch.parts = r.data.parts;
				ch.partsDone = r.data.part;
				if (r.data.done) {
					ch.status = 'feito';
					break;
				}
			}
		}

		phase = 'building';
		currentTitle = '';
		const built = await post<{ version: number; links: number }>(resolve('/livros/[id]/gerar', { id: bookId }));
		if (!built.ok) return stop({ kind: 'error', text: built.message });
		phase = 'idle';
		version = built.data.version;
		builtLinks = built.data.links;
		step = 3;
		toast(`EPUB pronto: ${built.data.links} ${built.data.links === 1 ? 'troca' : 'trocas'}`);
		await invalidateAll();
	}

	async function stop(n: NonNullable<typeof notice>) {
		phase = 'idle';
		currentTitle = '';
		notice = n;
		await invalidateAll();
	}

	const generateLabel = $derived(
		allReady && !invalidates ? 'Gerar EPUB' : progress > 0 && !invalidates ? 'Continuar' : 'Gerar livro'
	);
	const languageOk = $derived(!!language && !!bookLanguage && language !== bookLanguage);
	const chapterState = (c: ChapterRow) =>
		c.status === 'feito' ? 'ok' : phase === 'blending' && c.title === currentTitle ? 'run' : 'wait';
</script>

<dialog
	class="wizard"
	bind:this={dialog}
	onclose={onclose}
	onclick={(e) => e.target === dialog && dialog?.close()}
	aria-labelledby="blend-titulo"
>
	<div class="top">
		<ol class="steps" aria-label="Etapas">
			{#each STEPS as name, i (name)}
				<li class="step" data-on={i <= step} aria-current={i === step ? 'step' : undefined}>
					<span class="track"></span><span class="name"><b>{i + 1}</b>{name}</span>
				</li>
			{/each}
		</ol>
		<button type="button" class="icon-btn" aria-label="Fechar" onclick={() => dialog?.close()}
			><Icon name="x" /></button
		>
	</div>

	{#key step}
		<section class="panel">
			<div>
				<p class="eyebrow">Etapa {step + 1}{current ? ` · ${current.book.title}` : ''}</p>
				<h2 id="blend-titulo">
					{['Escolha o livro', 'Configure a mistura', 'Gerando seu livro', 'Seu livro está pronto'][step]}
				</h2>
				<p class="sub">
					{#if step === 0}
						Envie um EPUB. A gente lê os capítulos e detecta a língua.
					{:else if step === 1}
						Parte das palavras do livro aparece na língua que você estuda. Toque numa palavra no leitor para ver o significado.
					{:else if step === 2}
						{rangeSummary(chapters, rangeFrom, rangeTo)} · {percent}% em {languageInline(language, 'pt')}.
					{:else}
						{builtLinks !== null ? `${nf.format(builtLinks)} trocas em ${languageInline(language, 'pt')}.` : `Blend em ${languageInline(language, 'pt')}.`}
						Leia aqui ou baixe o EPUB.
					{/if}
				</p>
			</div>

			{#if step === 0}
				{#if current}
					<div class="book">
						<div class="cover" aria-hidden="true">{current.book.title}</div>
						<div>
							<h3>{current.book.title}</h3>
							<p class="meta">
								{#if current.book.author}{current.book.author} · {/if}{languageLabel(current.book.bookLanguage, 'pt')}
								· {rangeSummary(chapters, firstSpine, lastSpine)}
							</p>
						</div>
					</div>
				{:else if !studyLanguages.length}
					<p class="faint">Escolha um idioma de estudo no Perfil primeiro.</p>
				{:else}
					<label
						class="drop"
						class:dragging
						ondragover={(e) => {
							e.preventDefault();
							dragging = true;
						}}
						ondragleave={() => (dragging = false)}
						ondrop={onDrop}
					>
						<Icon name="upload" />
						<span>{uploading ? 'Enviando e lendo os capítulos…' : 'Arraste o EPUB aqui ou escolha um arquivo'}</span>
						<span class="faint small">Arquivo .epub de até 50 MB.</span>
						<input
							bind:this={fileInput}
							class="visually-hidden"
							type="file"
							accept=".epub,application/epub+zip"
							disabled={uploading}
							onchange={onPick}
							data-testid="arquivo-epub"
						/>
					</label>
					{#if uploadError}<p class="notice" role="alert">{uploadError}</p>{/if}
				{/if}
			{:else if step === 1}
				<div class="field">
					<span class="lbl" id="lbl-range">Capítulos</span>
					<div class="seg" role="group" aria-labelledby="lbl-range">
						<button type="button" aria-pressed={whole} onclick={() => (whole = true)}>Livro inteiro</button>
						<button type="button" aria-pressed={!whole} onclick={() => (whole = false)}>Intervalo de capítulos</button>
					</div>
					{#if !whole}
						<div class="row2">
							<div class="field">
								<span class="lbl" id="lbl-from">Do capítulo</span>
								<Select
									options={chapterOptions}
									value={from}
									onchange={setFrom}
									labelledby="lbl-from"
									searchable={chapterOptions.length > 12}
								/>
							</div>
							<div class="field">
								<span class="lbl" id="lbl-to">Até o capítulo</span>
								<Select options={toOptions} bind:value={to} labelledby="lbl-to" searchable={toOptions.length > 12} />
							</div>
						</div>
					{/if}
					<span class="faint small" data-testid="resumo">{rangeSummary(chapters, rangeFrom, rangeTo)}</span>
				</div>

				<div class="row2">
					<div class="field">
						<span class="lbl" id="lbl-book-lang">Língua do livro</span>
						<Select options={bookLanguageOptions} bind:value={bookLanguage} labelledby="lbl-book-lang" />
					</div>
					<div class="field">
						<span class="lbl" id="lbl-lang">Misturar em</span>
						<Select options={languageOptions} bind:value={language} labelledby="lbl-lang" />
					</div>
				</div>

				<div class="field">
					<div class="amount-head">
						<label class="lbl" for="quanto">Quanto misturar</label>
						<span class="pct" aria-hidden="true">{percent}<small>%</small></span>
					</div>
					<input
						id="quanto"
						class="range"
						type="range"
						min="1"
						max={MAX_COVERAGE * 100}
						step="1"
						bind:value={percent}
						aria-valuetext="{percent}%"
						style:--p="{((percent - 1) / (MAX_COVERAGE * 100 - 1)) * 100}%"
					/>
					<div class="presets">
						{#each PRESETS as [value, name] (value)}
							<button type="button" class="chip" aria-pressed={percent === value} onclick={() => (percent = value)}
								>{name} · {value}%</button
							>
						{/each}
					</div>
					<span class="faint small"
						>Cerca de {nf.format(Math.round((rangeWords * percent) / 100))} palavras
						{language ? `em ${languageInline(language, 'pt')}` : 'trocadas'}.</span
					>
				</div>

				<div class="field">
					<span class="lbl">Prévia</span>
					<div class="sample-box" aria-live="polite">
						{#if !languageOk}
							<p class="faint small">Escolha duas línguas diferentes para ver a prévia.</p>
						{:else if previewError}
							<p class="faint small">{previewError}</p>
						{:else if !preview}
							<p class="faint small">Preparando a prévia…</p>
						{:else}
							<p class="sample" {...langAttrs(bookLanguage)} data-testid="previa">
								{#each previewSegments as s, i (i)}{#if s.translation}<mark
											title={s.translation}
											{...langAttrs(language)}>{s.text}</mark
										>{:else}{s.text}{/if}{/each}
							</p>
						{/if}
					</div>
				</div>
			{:else if step === 2}
				<div class="field">
					<div class="amount-head">
						<span class="lbl" data-testid="estado"
							>{selected.filter((c) => c.status === 'feito').length} de {selected.length} capítulos</span
						>
						<span class="faint small" aria-live="polite">
							{#if phase === 'saving'}Salvando…{:else if phase === 'building'}Montando o EPUB…{:else if phase === 'blending'}{Math.round(
									progress * 100
								)}%{/if}
						</span>
					</div>
					<span
						class="bar"
						role="progressbar"
						aria-label="Progresso do blend"
						aria-valuemin={0}
						aria-valuemax={100}
						aria-valuenow={Math.round(progress * 100)}><i style:width="{Math.round(progress * 100)}%"></i></span
					>
				</div>
				<ul class="chapters">
					{#each selected as c (c.spine)}
						<li data-s={chapterState(c)}>
							<span class="dot" aria-hidden="true"></span><span class="t">{c.title}</span><span class="w"
								>{nf.format(c.words)}</span
							>
						</li>
					{/each}
				</ul>
				{#if notice}
					<p class="notice" class:soft={notice.kind !== 'error'} role="alert">{notice.text}</p>
				{/if}
			{:else}
				<div class="stats">
					{#if builtLinks !== null}
						<div class="stat"><b>{nf.format(builtLinks)}</b><span>palavras misturadas</span></div>
					{/if}
					<div class="stat"><b>{selected.length}</b><span>capítulos</span></div>
					<div class="stat"><b>{percent}%</b><span>em {languageInline(language, 'pt')}</span></div>
				</div>
			{/if}

			<div class="foot">
				{#if step === 0}
					<span class="faint small">Seu arquivo fica só na sua conta.</span>
					{#if current}
						<button class="btn btn-primary" type="button" onclick={() => (step = 1)}>Continuar</button>
					{:else}
						<button
							class="btn btn-primary"
							type="button"
							disabled={uploading || !studyLanguages.length}
							onclick={() => fileInput?.click()}>{uploading ? 'Enviando…' : 'Escolher arquivo'}</button
						>
					{/if}
				{:else if step === 1}
					<button class="btn btn-ghost" type="button" onclick={() => (step = 0)}>Voltar</button>
					<button
						class="btn btn-primary"
						type="button"
						disabled={!languageOk}
						onclick={generate}
						data-testid="gerar"><Icon name="sparks" size="sm" />{generateLabel}</button
					>
				{:else if step === 2}
					{#if busy}
						<span class="faint small">Pode fechar esta janela: a geração segue com a página aberta.</span>
						{#if phase === 'blending'}
							<button class="btn btn-ghost" type="button" onclick={() => (stopRequested = true)}
								><Icon name="pause" size="sm" />Pausar</button
							>
						{/if}
					{:else}
						<button class="btn btn-ghost" type="button" onclick={() => (step = 1)}>Voltar</button>
						<button class="btn btn-primary" type="button" onclick={generate}
							><Icon name="sparks" size="sm" />Continuar</button
						>
					{/if}
				{:else if current}
					<button class="btn btn-ghost" type="button" onclick={() => (step = 1)}>Gerar outra versão</button>
					<div class="acts">
						<a
							class="btn btn-ghost"
							href={resolve('/livros/[id]/baixar', { id: current.book.id })}
							data-sveltekit-reload><Icon name="down" size="sm" />Baixar EPUB</a
						>
						<a class="btn btn-primary" href={resolve('/livros/[id]/ler', { id: current.book.id })}
							><Icon name="play" size="sm" />Ler</a
						>
					</div>
				{/if}
			</div>
		</section>
	{/key}
</dialog>

<style>
	.wizard {
		width: min(640px, calc(100% - 32px));
		max-width: none;
		max-height: calc(100dvh - 10vh - 24px);
		margin: 8vh auto auto;
		padding: 0;
		border: 0;
		color: var(--ink);
		background: var(--raise-2);
		border-radius: var(--r-l);
		box-shadow: var(--sh-pop);
		overflow-y: auto;
		overscroll-behavior: contain;
	}
	.wizard[open] {
		animation: rise 0.3s var(--ease) both;
	}
	.wizard::backdrop {
		background: var(--scrim);
	}
	.top {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 16px 0 24px;
	}
	.steps {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.step {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 12px;
		color: var(--ink-3);
	}
	.step .track {
		height: 3px;
		border-radius: 3px;
		background: var(--prog-track);
		transition: background 0.3s var(--ease);
	}
	.step[data-on='true'] {
		color: var(--ink);
	}
	.step[data-on='true'] .track {
		background: var(--prog);
	}
	.step b {
		font-weight: 600;
		margin-right: 6px;
		font-variant-numeric: tabular-nums;
	}
	.panel {
		display: flex;
		flex-direction: column;
		gap: 22px;
		padding: 20px 24px 24px;
		animation: rise 0.35s var(--ease) both;
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}
	.eyebrow {
		margin: 0;
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-3);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	h2 {
		margin: 4px 0 0;
		font: 600 21px/1.25 var(--f-head);
		letter-spacing: -0.01em;
	}
	.sub {
		margin: 6px 0 0;
		font-size: 14px;
		line-height: 1.5;
		color: var(--ink-2);
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-width: 0;
	}
	.lbl {
		font-size: 14px;
		font-weight: 500;
		color: var(--ink-2);
	}
	.row2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}
	.small {
		font-size: 13px;
	}
	.book {
		display: grid;
		grid-template-columns: 56px 1fr;
		gap: 16px;
		align-items: center;
	}
	.cover {
		aspect-ratio: 2 / 3;
		display: grid;
		place-items: center;
		padding: 6px;
		overflow: hidden;
		border-radius: 3px 7px 7px 3px;
		background: var(--sel);
		box-shadow: inset 4px 0 0 var(--line), var(--sh-lift);
		font-size: 9px;
		line-height: 1.15;
		text-align: center;
		color: var(--ink-2);
	}
	.book h3 {
		margin: 0;
		font: 600 16px/1.3 var(--f-head);
	}
	.meta {
		margin: 4px 0 0;
		font-size: 13px;
		color: var(--ink-2);
	}
	.drop {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		padding: 28px 18px;
		border: 1px dashed var(--line);
		border-radius: var(--r-s);
		text-align: center;
		font-size: 14px;
		color: var(--ink-2);
		cursor: pointer;
		transition: background 0.2s var(--ease), border-color 0.2s var(--ease);
	}
	.drop:hover,
	.drop.dragging {
		background: var(--hover);
		border-color: var(--prog);
	}
	.drop:focus-within {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
	}
	.amount-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.pct {
		font-size: 28px;
		font-weight: 600;
		letter-spacing: -0.02em;
		font-variant-numeric: tabular-nums;
	}
	.pct small {
		font-size: 15px;
		font-weight: 500;
		color: var(--ink-3);
	}
	.range {
		appearance: none;
		width: 100%;
		height: 22px;
		margin: 0;
		background: transparent;
		cursor: pointer;
	}
	.range::-webkit-slider-runnable-track {
		height: 6px;
		border-radius: 6px;
		background: linear-gradient(90deg, var(--prog) var(--p), var(--prog-track) var(--p));
	}
	.range::-moz-range-track {
		height: 6px;
		border-radius: 6px;
		background: linear-gradient(90deg, var(--prog) var(--p), var(--prog-track) var(--p));
	}
	.range::-webkit-slider-thumb {
		appearance: none;
		width: 20px;
		height: 20px;
		margin-top: -7px;
		border-radius: 50%;
		background: var(--ink);
		border: 4px solid var(--raise-2);
		box-shadow: 0 0 0 1px var(--line), var(--sh-lift);
	}
	.range::-moz-range-thumb {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--ink);
		border: 4px solid var(--raise-2);
		box-shadow: 0 0 0 1px var(--line), var(--sh-lift);
	}
	.range:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 4px;
		border-radius: 6px;
	}
	.presets {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.chip {
		font: inherit;
		font-size: 12px;
		padding: 5px 10px;
		border-radius: 99px;
		border: 1px solid var(--line);
		background: transparent;
		color: var(--ink-2);
		cursor: pointer;
	}
	.chip:hover {
		color: var(--ink);
		background: var(--hover);
	}
	.chip[aria-pressed='true'] {
		color: var(--ink);
		border-color: var(--prog);
		background: var(--sel);
	}
	.chip:focus-visible {
		outline: 2px solid var(--ring);
		outline-offset: 2px;
	}
	.sample-box {
		min-height: 64px;
		padding: 14px 16px;
		border: 1px solid var(--line);
		border-radius: var(--r-s);
		background: var(--sunk);
	}
	.sample-box p {
		margin: 0;
	}
	.sample {
		font-size: 16px;
		line-height: 1.7;
	}
	.sample mark {
		padding: 0 2px;
		border-radius: 3px;
		background: var(--sel);
		color: var(--ink);
		text-decoration: underline dotted var(--prog);
		text-underline-offset: 3px;
	}
	.chapters {
		max-height: 260px;
		overflow-y: auto;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.chapters li {
		display: grid;
		grid-template-columns: 18px 1fr auto;
		gap: 12px;
		align-items: center;
		padding: 10px 0;
		border-bottom: 1px solid var(--line);
		font-size: 14px;
	}
	.chapters li:last-child {
		border-bottom: 0;
	}
	.chapters li[data-s='wait'] {
		color: var(--ink-3);
	}
	.chapters .t {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.chapters .w {
		font-size: 12px;
		color: var(--ink-3);
		font-variant-numeric: tabular-nums;
	}
	.dot {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 1.5px solid var(--line);
	}
	li[data-s='run'] .dot {
		border-color: var(--prog);
		border-right-color: transparent;
		animation: spin 0.8s linear infinite;
	}
	li[data-s='ok'] .dot {
		background: var(--prog);
		border-color: var(--prog);
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 12px;
	}
	.stat {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 14px;
		border: 1px solid var(--line);
		border-radius: var(--r-s);
	}
	.stat b {
		font-size: 22px;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}
	.stat span {
		font-size: 12px;
		color: var(--ink-2);
	}
	.notice {
		margin: 0;
		padding: 12px 14px;
		border-radius: var(--r-s);
		background: var(--terra-soft);
		color: var(--terra-ink);
		font-size: 14px;
	}
	.notice.soft {
		background: var(--sunk);
		color: var(--ink);
	}
	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding-top: 18px;
		border-top: 1px solid var(--line);
	}
	.acts {
		display: flex;
		gap: 8px;
	}
	@media (max-width: 560px) {
		.wizard {
			width: 100%;
			max-height: 92dvh;
			margin: auto 0 0;
			border-radius: var(--r-l) var(--r-l) 0 0;
		}
		.row2 {
			grid-template-columns: 1fr;
		}
		.step .name {
			font-size: 0;
		}
		.step b {
			font-size: 12px;
			margin: 0;
		}
	}
</style>
