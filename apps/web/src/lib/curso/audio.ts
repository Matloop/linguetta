/**
 * Áudio das lições: um arquivo por texto, gerado por `scripts/curso-audio.ts` e servido de `static/`.
 * O nome do arquivo vem do próprio texto (sem a marcação), então tela e script concordam sem manifesto.
 */

/** Texto como é falado: sem a marcação de itálico/negrito. */
export function spoken(text: string): string {
	return text.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
}

/** cyrb53: hash de 53 bits, igual em Bun e no navegador. */
function hash(text: string): string {
	let h1 = 0xdeadbeef;
	let h2 = 0x41c6ce57;
	for (let i = 0; i < text.length; i++) {
		const ch = text.charCodeAt(i);
		h1 = Math.imul(h1 ^ ch, 2654435761);
		h2 = Math.imul(h2 ^ ch, 1597334677);
	}
	h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
	h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
	return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/** Caminho público do áudio de uma fala ou frase. */
export function lineAudioUrl(language: string, text: string): string {
	return `/curso/audio/${language}/${hash(spoken(text))}.opus`;
}

/** Caminho público do diálogo inteiro de uma lição. */
export function dialogAudioUrl(language: string, lessonNo: number): string {
	return `/curso/audio/${language}/dialogo-${lessonNo}.opus`;
}
