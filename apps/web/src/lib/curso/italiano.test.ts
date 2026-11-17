import { describe, expect, test } from 'bun:test';
import { lineAudioUrl, spoken } from './audio.ts';
import { italiano } from './italiano.ts';
import type { Block, Lesson } from './types.ts';

// Conferência do conteúdo do curso: estrutura de cada lição, marcação e exercícios.

/** Pares de * e ** fechados; nada de HTML. */
function markupProblems(text: string): string[] {
	const out: string[] = [];
	if (/<[a-z/][^>]*>/i.test(text)) out.push(`HTML: ${text}`);
	const strong = text.split('**').length - 1;
	const em = text.replace(/\*\*/g, '').split('*').length - 1;
	if (strong % 2) out.push(`** sem par: ${text}`);
	if (em % 2) out.push(`* sem par: ${text}`);
	return out;
}

function blockTexts(b: Block): string[] {
	if (b.type === 'exemplos') return b.items.flatMap((e) => [e.it, e.pt, e.pron ?? '']);
	return [b.text];
}

function lessonProblems(l: Lesson): string[] {
	const p: string[] = [];
	const at = (s: string) => p.push(`lição ${l.no}: ${s}`);
	const needsLines = l.steps.some((s) => s.kind === 'ouvir' || s.kind === 'ler' || s.kind === 'repetir');
	if (needsLines && !l.lines?.length) at('tem ouvir/ler/repetir mas não tem diálogo');
	if (l.kind === 'licao' && !l.lines?.length) at('lição sem diálogo');
	if (!l.title.trim() || !l.titlePt.trim()) at('sem título');
	const texts: string[] = [l.title, l.titlePt];
	for (const line of l.lines ?? []) {
		if (!line.it.trim() || !line.pt.trim()) at('fala vazia');
		texts.push(line.it, line.pt, line.lit ?? '', line.note ?? '');
	}
	for (const s of l.steps) {
		if (s.kind === 'leitura') {
			if (!s.blocks.length) at(`leitura "${s.title}" vazia`);
			texts.push(s.title, ...s.blocks.flatMap(blockTexts));
		}
		if (s.kind === 'frases') texts.push(s.title, s.lead, ...s.items.flatMap((e) => [e.it, e.pt]));
		if (s.kind === 'traduzir') {
			if (!s.items.length) at('traduzir vazio');
			for (const i of s.items) {
				if (!i.it.trim() || !i.pt.trim()) at('item de traduzir vazio');
				texts.push(i.it, i.pt);
			}
		}
		if (s.kind === 'completar') {
			if (!s.items.length) at('completar vazio');
			for (const i of s.items) {
				const gaps = i.parts.filter((x) => x === null).length;
				if (gaps === 0) at(`lacuna ausente: ${i.pt}`);
				if (gaps !== i.answers.length) at(`lacunas (${gaps}) ≠ respostas (${i.answers.length}): ${i.pt}`);
				for (const a of i.answers) {
					if (!a.trim()) at(`resposta vazia: ${i.pt}`);
					if (a !== a.toLocaleLowerCase('it')) at(`resposta com maiúscula: ${a}`);
					if (a !== a.trim()) at(`resposta com espaço nas pontas: "${a}"`);
				}
			}
		}
	}
	for (const t of texts) for (const m of markupProblems(t)) at(m);
	return p;
}

describe('curso de italiano', () => {
	test('cada lição está bem formada', () => {
		expect(italiano.lessons.flatMap(lessonProblems)).toEqual([]);
	});

	test('números únicos, em ordem e sem buracos', () => {
		const nos = italiano.lessons.map((l) => l.no);
		expect(nos).toEqual(nos.map((_, i) => i));
	});

	test('revisão a cada 7 lições, só elas sem diálogo', () => {
		for (const l of italiano.lessons) {
			if (l.no === 0) continue;
			const review = l.no % 7 === 0 && l.no < 105;
			expect(`${l.no}:${l.kind}`).toBe(`${l.no}:${review ? 'revisao' : 'licao'}`);
		}
	});

	test('as unidades cobrem todas as lições, uma vez', () => {
		const inUnits = italiano.units.flatMap((u) => u.lessons);
		expect(inUnits).toEqual(italiano.lessons.map((l) => l.no));
		expect(italiano.units.every((u) => u.title.trim())).toBe(true);
	});

	test('o curso tem as lições planejadas', () => {
		expect(italiano.lessons.length).toBe(italiano.planned + 1);
	});

	test('nomes de áudio sem colisão', () => {
		const seen = new Map<string, string>();
		for (const l of italiano.lessons)
			for (const line of l.lines ?? []) {
				const s = spoken(line.it);
				const url = lineAudioUrl('it', s);
				const prev = seen.get(url);
				if (prev !== undefined) expect(prev).toBe(s);
				seen.set(url, s);
			}
	});
});
