/**
 * Curso no método Assimil: lições diárias, cada uma uma sequência de passos (uma tela por passo).
 * O conteúdo é estático (no código), igual para todos; o progresso de cada usuário fica no banco.
 *
 * Texto corrido usa uma marcação mínima, renderizada pela tela:
 *   *palavra*   → itálico (palavra no idioma de estudo dentro de texto em português)
 *   **sí**      → negrito (sílaba tônica, ou destaque)
 * Nada de HTML no conteúdo.
 */

/** Um bloco de texto num passo de leitura. */
export type Block =
	| { type: 'p'; text: string }
	| { type: 'h'; text: string }
	/** Lista de exemplos: palavra ou frase, tradução e, se ajudar, pronúncia aproximada para quem fala português. */
	| { type: 'exemplos'; items: Example[] }
	/** Destaque curto (atenção, dica). */
	| { type: 'dica'; text: string };

export interface Example {
	/** No idioma de estudo. Pode usar **sí** para marcar a sílaba tônica. */
	it: string;
	pt: string;
	/** Pronúncia aproximada, escrita como um brasileiro leria ("kuéssto", "fí-lhi"). */
	pron?: string;
}

/** Uma fala do diálogo da lição. */
export interface Line {
	it: string;
	pt: string;
	/** Tradução palavra a palavra, quando difere da natural. Sem parênteses. */
	lit?: string;
	/** Nota de gramática ou de uso presa a esta fala (texto com a marcação acima). */
	note?: string;
	/** Começa um bloco novo (o segundo trecho da lição, as frases soltas depois do diálogo). */
	sep?: boolean;
}

export interface TranslateItem {
	it: string;
	pt: string;
}

/** Frase com lacunas: `parts` alterna texto e `null` (lacuna); `answers` tem uma resposta por lacuna, em minúsculas. */
export interface ClozeItem {
	pt: string;
	parts: (string | null)[];
	answers: string[];
}

export type Step =
	/** Explicação longa (introdução, pronúncia, revisão de gramática). */
	| { kind: 'leitura'; title: string; blocks: Block[] }
	/** Ouvir o diálogo inteiro. */
	| { kind: 'ouvir' }
	/** Ler o diálogo com tradução, literal e notas. */
	| { kind: 'ler' }
	/** Repetir o diálogo em voz alta, fala por fala. */
	| { kind: 'repetir' }
	/** Exercício 1: ler a frase e pensar na tradução antes de conferir. */
	| { kind: 'traduzir'; items: TranslateItem[] }
	/** Exercício 2: completar as lacunas. */
	| { kind: 'completar'; items: ClozeItem[] }
	/** Ouvir e repetir frases soltas (ritmo e entonação), uma por tela. */
	| { kind: 'frases'; title: string; lead: string; items: Example[] };

export interface Lesson {
	/** 0 é a lição de pronúncia; a cada 7 vem uma de revisão. */
	no: number;
	kind: 'introducao' | 'licao' | 'revisao';
	title: string;
	titlePt: string;
	/** Diálogo; obrigatório quando há passos ouvir, ler ou repetir. */
	lines?: Line[];
	steps: Step[];
}

export interface Unit {
	no: number;
	title: string;
	/** Números das lições desta unidade, em ordem. */
	lessons: number[];
}

export interface Course {
	/** Identificador estável, gravado no progresso. */
	id: string;
	/** Idioma de estudo (BCP 47). */
	language: string;
	title: string;
	/** Quantas lições o curso terá ao todo (a trilha mostra as que existem). */
	planned: number;
	units: Unit[];
	lessons: Lesson[];
}

/** A segunda onda começa nesta lição: junto da lição N, refaz-se a lição N − 49. */
export const WAVE_START = 50;
export const WAVE_OFFSET = 49;
