// Da frase anotada (src/sidecar/senses.js) às unidades do .lctx: o aparelho corta a frase pelas
// próprias regras (FORMAT.md §4: depois da palavra que termina em . ! ? : …), então a frase
// verdadeira, que o tradutor viu inteira, vira uma ou mais unidades com a mesma tradução, e a
// glosa de cada palavra vai para o índice do token dentro da unidade.
import { cleanText, endsSentence, splitWords, wordKey } from './lctx.js';

const POS = {
  noun: 'n', verb: 'v', adj: 'adj', adv: 'adv', pron: 'pron', det: 'det', article: 'art', prep: 'prep', conj: 'conj',
  num: 'num', intj: 'intj', contraction: 'contr', particle: 'part', phrase: 'expr', prep_phrase: 'loc',
};

/** Classe curta do aparelho; "?" no fim marca o primeiro sentido sem confirmação da tradução. */
export function posCode(pos, conf) {
  return `${POS[pos] ?? pos}${conf === 'low' ? '?' : ''}`;
}

/**
 * sentence: { spine, text } (texto da frase como no livro); annotations: [{ index, length, kind,
 * lemma, pos, gloss, conf }] de annotate(). → [{ spine, text, tr, gl }].
 */
export function toUnits({ spine, text, tr }, annotations) {
  const words = splitWords(text).map((w) => ({ ...w, key: wordKey(cleanText(w.raw)) }));
  const units = [];
  let group = [];
  const flush = () => {
    if (group.length) {
      const first = group[0];
      const last = group[group.length - 1];
      units.push({ spine, text: text.slice(first.start, last.end), tr, words: group });
    }
    group = [];
  };
  for (const w of words) {
    group.push(w);
    if (endsSentence(cleanText(w.raw))) flush();
  }
  flush();

  const glossed = annotations.filter((a) => (a.kind === 'word' || a.kind === 'closed') && a.gloss);
  return units
    .map(({ words: ws, ...u }) => {
      const gl = [];
      let i = 0;
      for (const w of ws) {
        if (!w.key) continue;
        const inside = glossed.filter((a) => a.index >= w.start && a.index + a.length <= w.end);
        // "l'acqua": o artigo elidido e a palavra de conteúdo dividem o token; vale a de conteúdo.
        const pick = inside.find((a) => a.kind === 'word') ?? inside[0];
        if (pick) gl.push({ i, n: 1, lemma: pick.lemma, g: pick.gloss, pos: posCode(pick.pos, pick.conf) });
        i++;
      }
      return { ...u, gl };
    })
    .filter((u) => /[\p{L}\p{N}]/u.test(u.text));
}

/**
 * Unidades com a mesma sequência de palavras na mesma spine não se distinguem no aparelho (a
 * busca é por texto): se a tradução é igual, fica uma; se difere ("Sì." em respostas diferentes
 * do mesmo capítulo), saem todas, e o toque cai no rodapé em vez de mostrar a frase errada.
 */
export function dedupeUnits(units, keyOf) {
  const groups = new Map();
  for (const u of units) {
    const k = `${u.spine}\u0000${keyOf(u)}`;
    (groups.get(k) ?? groups.set(k, []).get(k)).push(u);
  }
  const out = [];
  let dropped = 0;
  for (const g of groups.values()) {
    if (g.every((u) => u.tr === g[0].tr)) out.push(g[0]);
    else dropped += g.length;
  }
  const keep = new Set(out);
  return { units: units.filter((u) => keep.has(u)), dropped };
}
