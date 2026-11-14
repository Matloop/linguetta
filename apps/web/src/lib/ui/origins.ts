// Ícone de cada origem de encontro, igual em toda a interface.

import type { Origin, WorkKind } from '#lib/items.ts';
import type { IconName } from './Icon.svelte';

export const ORIGIN_ICONS: Record<Origin, IconName> = {
	manual: 'pencil',
	stremio: 'tv',
	musica: 'music',
	ereader: 'bookmark',
	anki: 'archive',
	blend: 'tv',
	leitor: 'bookmark',
	curso: 'calendar'
};

/** Ícone de cada tipo de obra (livro, episódio...). */
export const WORK_ICONS: Record<string, IconName> = {
	livro: 'bookmark',
	episodio: 'tv',
	filme: 'tv',
	video: 'tv',
	musica: 'music',
	curso: 'calendar'
} satisfies Record<WorkKind, IconName>;
