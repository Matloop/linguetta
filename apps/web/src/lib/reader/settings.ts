// Ajustes de leitura do leitor de EPUB: valores, limites e como ficam guardados. Um padrão
// global e, se a pessoa quiser, um conjunto próprio por livro (localStorage).

export type ReaderFont = 'serif' | 'literata' | 'sans' | 'legivel';
export type ReaderLayout = 'pagina' | 'duas' | 'rolagem';

export type ReaderSettings = {
	font: ReaderFont;
	/** Índice em FONT_STEPS. */
	fontStep: number;
	/** Entrelinha (multiplicador). */
	lineHeight: number;
	/** Margem lateral em px. */
	margin: number;
	/** Largura máxima da coluna em px. */
	width: number;
	justify: boolean;
	hyphenate: boolean;
	layout: ReaderLayout;
};

export const FONT_STEPS = [0.85, 0.92, 1, 1.1, 1.2, 1.32, 1.46];

export const FONTS: { id: ReaderFont; label: string; stack: string }[] = [
	{ id: 'serif', label: 'Clássica', stack: "Charter, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif" },
	{ id: 'literata', label: 'Literata', stack: "'Linguetta Literata', Georgia, serif" },
	{ id: 'sans', label: 'Sem serifa', stack: "'Linguetta Inter', system-ui, sans-serif" },
	{ id: 'legivel', label: 'Legível', stack: "'Linguetta Atkinson', system-ui, sans-serif" }
];

export const LAYOUTS: { id: ReaderLayout; label: string }[] = [
	{ id: 'pagina', label: 'Uma página' },
	{ id: 'duas', label: 'Duas páginas' },
	{ id: 'rolagem', label: 'Rolagem' }
];

export const LIMITS = {
	lineHeight: { min: 1.2, max: 2.2, step: 0.1 },
	margin: { min: 8, max: 96, step: 4 },
	width: { min: 480, max: 960, step: 40 }
};

export const DEFAULT_SETTINGS: ReaderSettings = {
	font: 'serif',
	fontStep: 2,
	lineHeight: 1.6,
	margin: 28,
	width: 680,
	justify: false,
	hyphenate: true,
	layout: 'pagina'
};

const GLOBAL_KEY = 'linguetta.leitor.ajustes';
const bookKey = (bookId: string) => `${GLOBAL_KEY}.livro.${bookId}`;

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

/** Aceita qualquer coisa vinda do armazenamento e devolve ajustes válidos. */
export function parseSettings(raw: unknown): ReaderSettings {
	const o = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
	const d = DEFAULT_SETTINGS;
	const num = (v: unknown, fb: number, min: number, max: number) =>
		typeof v === 'number' && Number.isFinite(v) ? clamp(v, min, max) : fb;
	return {
		font: FONTS.some((f) => f.id === o.font) ? (o.font as ReaderFont) : d.font,
		fontStep: Math.round(num(o.fontStep, d.fontStep, 0, FONT_STEPS.length - 1)),
		lineHeight: num(o.lineHeight, d.lineHeight, LIMITS.lineHeight.min, LIMITS.lineHeight.max),
		margin: num(o.margin, d.margin, LIMITS.margin.min, LIMITS.margin.max),
		width: num(o.width, d.width, LIMITS.width.min, LIMITS.width.max),
		justify: typeof o.justify === 'boolean' ? o.justify : d.justify,
		hyphenate: typeof o.hyphenate === 'boolean' ? o.hyphenate : d.hyphenate,
		layout: LAYOUTS.some((l) => l.id === o.layout) ? (o.layout as ReaderLayout) : d.layout
	};
}

function read(key: string): ReaderSettings | null {
	try {
		const raw = localStorage.getItem(key);
		return raw ? parseSettings(JSON.parse(raw)) : null;
	} catch {
		return null;
	}
}

export function loadSettings(bookId: string): { settings: ReaderSettings; perBook: boolean } {
	const own = read(bookKey(bookId));
	if (own) return { settings: own, perBook: true };
	return { settings: read(GLOBAL_KEY) ?? DEFAULT_SETTINGS, perBook: false };
}

export function saveSettings(bookId: string, settings: ReaderSettings, perBook: boolean) {
	localStorage.setItem(perBook ? bookKey(bookId) : GLOBAL_KEY, JSON.stringify(settings));
}

/** Desliga o ajuste próprio do livro: volta a valer o padrão global. */
export function clearBookSettings(bookId: string): ReaderSettings {
	localStorage.removeItem(bookKey(bookId));
	return read(GLOBAL_KEY) ?? DEFAULT_SETTINGS;
}

/** Atributos do renderer do foliate para o layout escolhido. */
export function layoutAttributes(s: ReaderSettings) {
	return {
		flow: s.layout === 'rolagem' ? 'scrolled' : 'paginated',
		columns: s.layout === 'duas' ? 2 : 1,
		maxInline: s.width,
		margin: s.margin
	};
}
