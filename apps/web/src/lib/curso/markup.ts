// Marcação mínima do texto do curso (ver types.ts): *it* → itálico, **x** → negrito.
// Vira uma lista de trechos para a tela renderizar sem {@html}. Marcador sem par fica
// como texto.

export interface Segment {
	text: string;
	em: boolean;
	strong: boolean;
}

export function parseMarkup(source: string): Segment[] {
	const tokens = source.split(/(\*\*|\*)/);
	// Primeiro acha os pares; marcador sozinho no fim não abre nada.
	const paired = new Set<number>();
	const open: Record<string, number> = { '*': -1, '**': -1 };
	tokens.forEach((t, i) => {
		if (t !== '*' && t !== '**') return;
		if (open[t] >= 0) {
			paired.add(open[t]).add(i);
			open[t] = -1;
		} else open[t] = i;
	});

	const out: Segment[] = [];
	let em = false;
	let strong = false;
	tokens.forEach((t, i) => {
		if (paired.has(i)) {
			if (t === '*') em = !em;
			else strong = !strong;
			return;
		}
		if (!t) return;
		const last = out.at(-1);
		if (last && last.em === em && last.strong === strong) last.text += t;
		else out.push({ text: t, em, strong });
	});
	return out;
}

/** O texto sem marcação (para fichas, rótulos e comparações). */
export function plainText(source: string): string {
	return parseMarkup(source)
		.map((s) => s.text)
		.join('');
}
