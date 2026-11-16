// Trecho escolhido numa linha: um toque escolhe uma palavra; arrastar escolhe uma
// expressão (várias palavras seguidas da mesma linha). Índices são de token.

export interface Span {
	from: number;
	to: number;
}

/**
 * Do token onde o arraste começou até o token sob o dedo, parando antes de um
 * bloqueado (lacuna sem resposta): a expressão nunca atravessa uma lacuna. Com `words`,
 * a ponta volta até a última palavra (não termina num espaço).
 */
export function clampSpan(
	start: number,
	target: number,
	blocked: ReadonlySet<number>,
	words?: ReadonlySet<number>
): Span {
	const dir = Math.sign(target - start);
	let end = start;
	while (end !== target && !blocked.has(end + dir)) end += dir;
	if (words) while (end !== start && !words.has(end)) end -= dir;
	return { from: Math.min(start, end), to: Math.max(start, end) };
}

/** O texto do trecho como está na linha (com os espaços e a pontuação do meio). */
export function spanText(tokens: readonly { text: string }[], span: Span): string {
	return tokens
		.slice(span.from, span.to + 1)
		.map((t) => t.text)
		.join('')
		.trim();
}

/** A linha partida em antes / trecho / depois, para destacar o trecho no cartão. */
export function splitLine(
	tokens: readonly { text: string }[],
	span: Span
): { before: string; mark: string; after: string } {
	const join = (a: number, b: number) =>
		tokens
			.slice(a, b)
			.map((t) => t.text)
			.join('');
	return {
		before: join(0, span.from),
		mark: join(span.from, span.to + 1),
		after: join(span.to + 1, tokens.length)
	};
}
