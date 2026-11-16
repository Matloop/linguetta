// Língua do texto de um livro, por palavras funcionais (artigos, preposições, pronomes). O
// dc:language do EPUB erra com frequência (edições convertidas saem como "en"); o texto não.
// Só as línguas abaixo: uma língua fora da lista nunca vence e o metadado fica como veio.

const WORDS: Record<string, string> = {
	pt: 'não uma você também são está então mas muito já até pelo pela pelos nos nas dos das seu sua seus suas ele ela eles elas isso isto esse essa foi tinha havia estava ao aos com para por que como mais quando onde',
	es: 'no una usted también son está entonces pero muy ya hasta del los las sus ellos ellas eso esto ese esa fue tenía había estaba al con para por que como más cuando donde él pues sin sobre',
	it: 'non una anche sono è allora ma molto già fino del della dei delle suo sua suoi sue egli lei loro questo quello quella fu aveva era al con per che come più quando dove perché cosa gli degli nel nella',
	fr: 'ne pas une vous aussi sont est alors mais très déjà jusqu du des les ses il elle ils elles cela ceci ce cette fut avait était au aux avec pour que comme plus quand où dans sur sans leur',
	en: 'the and was were had have has not but very already until his her their they them this that these those with for from which when where what would could said there been will than then into out over',
	de: 'der die das und nicht eine auch sind ist dann aber sehr schon bis des den dem ein sein ihr ihre sie er es dies war hatte mit für von wie mehr wenn wo auf im zu nach über'
};

const SETS = new Map(Object.entries(WORDS).map(([tag, list]) => [tag, new Set(list.split(' '))]));

/** Quanto a melhor língua precisa superar a declarada para trocar (evita mudar por empate). */
const MARGIN = 1.5;
/** Fração mínima de palavras do texto reconhecidas na língua vencedora. */
const MIN_HITS = 0.12;
const MIN_TOKENS = 100;

export function languageScores(text: string): Map<string, number> {
	const tokens = text.toLocaleLowerCase().match(/\p{L}+/gu) ?? [];
	const scores = new Map<string, number>();
	if (tokens.length === 0) return scores;
	for (const [tag, set] of SETS) {
		let hits = 0;
		for (const t of tokens) if (set.has(t)) hits++;
		scores.set(tag, hits / tokens.length);
	}
	return scores;
}

/**
 * A língua do texto quando ela discorda do metadado com folga; senão null (o metadado vale).
 * `declared` é a tag como veio (pode ter região): só a base entra na comparação.
 */
export function detectBookLanguage(text: string, declared: string | null): string | null {
	const tokens = text.match(/\p{L}+/gu)?.length ?? 0;
	if (tokens < MIN_TOKENS) return null;
	const scores = languageScores(text);
	const [best, top] = [...scores].sort((a, b) => b[1] - a[1])[0] ?? [];
	if (!best || top < MIN_HITS) return null;
	const base = declared?.split('-')[0].toLowerCase() ?? '';
	if (base === best) return null;
	const own = scores.get(base) ?? 0;
	return top >= own * MARGIN ? best : null;
}
