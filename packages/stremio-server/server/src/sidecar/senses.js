// Glosa no contexto, sem IA: para cada palavra de uma frase do livro (língua de estudo), escolhe o
// sentido do Wiktionary da língua de estudo que melhor combina com a frase traduzida (língua nativa).
//
// Os dois dicionários são em inglês (Wiktextract), então o inglês é a ponte: as glosas de cada
// sentido da palavra original são comparadas com as glosas das palavras da tradução (no
// dicionário da língua nativa). Sentido e palavra da tradução que mais se sobrepõem vencem; a
// palavra da tradução, tal como está na frase, vira a glosa ("dissero" → "disseram"). Sem
// sobreposição, vale o primeiro sentido do primeiro verbete e a glosa é a tradução do lema sozinho
// (`alone`), marcado com baixa confiança.
import { segmentWords } from '@linguetta/language';
import { dictKey } from '../dict/key.js';

/** Classes fechadas: não escolhem sentido pelo contexto, só têm a tradução do lema. */
export const CLOSED = new Set(['pron', 'det', 'prep', 'conj', 'article', 'particle', 'contraction']);

const STOP = new Set([
  'the', 'and', 'for', 'with', 'from', 'that', 'this', 'which', 'who', 'whom', 'whose', 'one', 'someone', 'something', 'some', 'any',
  'not', 'are', 'was', 'were', 'has', 'have', 'had', 'being', 'been', 'its', 'his', 'her', 'their', 'such', 'than', 'into', 'out', 'off',
  'over', 'upon', 'used', 'use', 'form', 'forms', 'sense', 'etc', 'also', 'when', 'where', 'while', 'very', 'more', 'most', 'may', 'can',
  'will', 'would', 'about', 'thing', 'things', 'person', 'people', 'make', 'made', 'give', 'get', 'tag', 'tags', 'inflection', 'person',
  'singular', 'plural', 'masculine', 'feminine', 'first-person', 'second-person', 'third-person', 'participle', 'past', 'present',
  'to', 'of', 'in', 'on', 'at', 'as', 'by', 'or', 'an', 'it', 'is', 'up', 'so', 'if', 'no',
  'indicative', 'subjunctive', 'imperative', 'infinitive', 'gerund', 'archaic', 'obsolete', 'literary', 'colloquial', 'dated', 'rare',
]);

/** Radical grosseiro para comparar glosas em inglês entre si ("cousins" = "cousin", "playing" = "play"). */
export function stem(w) {
  if (w.length > 6 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 5 && w.endsWith('ies')) return `${w.slice(0, -3)}y`;
  if (w.length > 5 && w.endsWith('ed')) return w.slice(0, -2);
  if (w.length > 4 && w.endsWith('es')) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

/**
 * Palavras de conteúdo de uma glosa em inglês: sem parênteses, sem "to ", sem palavras vazias,
 * em radical. "to say, tell, utter (a word)" → say, tell, utter.
 */
// Glosa que descreve o uso gramatical, não o sentido ("Forms composite forms...", "Used to
// indicate possession", "Denotes absolute time"): não serve de evidência.
const META = /^(used|denotes?|indicates?|forms?|see|inflection|alternative|abbreviation|short for|contraction|clipping|combining)\b|\bsee (the|also)\b|\bsynonym of\b|\bnotation\b/i;

export function glossWords(gloss) {
  let g = String(gloss ?? '').toLowerCase();
  if (META.test(g.trim())) return new Set();
  while (/\([^()]*\)/.test(g)) g = g.replace(/\([^()]*\)/g, ' ');
  const out = new Set();
  for (const w of g.split(/[^a-z]+/)) if (w.length >= 2 && !STOP.has(w)) out.add(stem(w));
  return out;
}

const SENSES_PER_READING = 6;
const READINGS_PER_TOKEN = 4;
const EVIDENCE_SENSES = 3;
const EVIDENCE_READINGS = 2;

/** Primeira "palavra de glosa" curta de um sentido, para quando nada mais existe: "to say, tell" → "say". */
export function firstGloss(gloss) {
  let g = String(gloss ?? '');
  while (/\([^()]*\)/.test(g)) g = g.replace(/\([^()]*\)/g, ' ');
  return (g.split(/[;,[]/)[0] ?? '').trim().replace(/^(to|a|an|the) /i, '').replace(/\s+/g, ' ');
}

const startsSentenceAt = (text, index) => index === 0 || /(^|[.!?…:;«"“\-—–])\s*$/u.test(text.slice(0, index));

/**
 * source/target: dicionários (openDictionary); alone(lemma) → tradução do lema sozinho ou ''.
 * Devolve annotate({ text, translation }) → [{ index, length, surface, kind, ... }] por palavra.
 *   kind 'name'    nome próprio: nunca traduzido, sem glosa;
 *   kind 'unknown' o dicionário não conhece a palavra;
 *   kind 'closed'  classe fechada (artigo, preposição...): glosa = tradução do lema;
 *   kind 'word'    palavra de conteúdo, com sentido escolhido.
 * Campos de 'closed' e 'word': lemma, pos, sense (glosa em inglês do sentido), gloss (língua
 * nativa), conf ('high' = sentido confirmado pela tradução, 'low' = primeiro sentido).
 */
export function createSenseResolver({ source, target, alone }) {
  const sourceLang = source.lang;
  const targetLang = target.lang;
  const readingCache = new Map();
  const evidenceCache = new Map();

  // Leituras da palavra, melhor primeiro. Por padrão só as com acepções próprias; withoutSenses:
  // também as remissões sem saída ("della" = di + la), que só servem de classe fechada.
  const readingsOf = (dict, surface, initial, context = null, withoutSenses = false) => {
    const key = `${dict.lang}\u0000${surface}\u0000${initial}\u0000${context}\u0000${withoutSenses}`;
    if (!readingCache.has(key)) {
      if (readingCache.size > 100_000) readingCache.clear();
      readingCache.set(key, dict.resolve(surface, { initial, context }).filter((r) => withoutSenses || r.entry.s.length > 0));
    }
    return readingCache.get(key);
  };

  // Evidência de um token da tradução: glosas em inglês das primeiras acepções das duas melhores leituras.
  function evidenceOf(surface, initial) {
    const key = `${surface}\u0000${initial}`;
    if (evidenceCache.has(key)) return evidenceCache.get(key);
    const readings = readingsOf(target, surface, initial);
    const top = readings[0];
    const ev = { words: new Map(), lemmas: new Set(readings.map((r) => dictKey(r.entry.word, targetLang))), pos: new Set(), closed: !top || CLOSED.has(top.from.pos) || CLOSED.has(top.entry.pos) };
    if (!ev.closed) {
      for (const r of readings.slice(0, EVIDENCE_READINGS)) {
        ev.pos.add(r.entry.pos);
        r.entry.s.slice(0, EVIDENCE_SENSES).forEach(([gloss], k) => {
          const weight = [1, 0.8, 0.65][k] ?? 0.5;
          for (const w of glossWords(gloss)) ev.words.set(w, Math.max(ev.words.get(w) ?? 0, weight));
        });
      }
    }
    if (evidenceCache.size > 100_000) evidenceCache.clear();
    evidenceCache.set(key, ev);
    return ev;
  }

  const fold = (s) => dictKey(s, targetLang);

  function annotate({ text, translation }) {
    // Frase toda em maiúsculas: a caixa não diz nada, então não há nome próprio a reconhecer.
    const allCaps = text === text.toLocaleUpperCase(sourceLang) && text !== text.toLocaleLowerCase(sourceLang);
    const words = segmentWords(text, sourceLang).filter((s) => s.isWord && !/\d/.test(s.segment));
    const tr = segmentWords(translation ?? '', targetLang).filter((s) => s.isWord);
    const trTokens = tr.map((t) => {
      const initial = startsSentenceAt(translation, t.index);
      // Maiúscula só de começo de frase não vai para a glosa; nome próprio da tradução fica como está.
      const lower = t.segment.toLocaleLowerCase(targetLang);
      return { surface: initial && !tr.some((o) => o !== t && o.segment === t.segment) && t.segment !== lower && readingsOf(target, lower, false).length ? lower : t.segment, lower: fold(t.segment), ...evidenceOf(t.segment, initial) };
    });
    const trForms = new Set(trTokens.map((t) => t.lower));

    const out = [];
    words.forEach((w, i) => {
      const surface = w.segment;
      const initial = startsSentenceAt(text, w.index);
      const base = { index: w.index, length: surface.length, surface };
      const lowerOf = dictKey(surface, sourceLang);
      const look = allCaps ? lowerOf : surface;
      const capitalized = surface !== lowerOf && surface[0] !== surface[0].toLowerCase();
      const everything = readingsOf(source, look, initial, null, true).filter((r) => r.entry.pos !== 'name');
      const common = readingsOf(source, look, initial).filter((r) => r.entry.pos !== 'name');
      // Contração ("della", "nei", "sulla") ganha do homógrafo raro ("nei" = pinta, "sulla" = planta).
      const contraction = everything.find((r) => r.from.pos === 'contraction' || r.entry.pos === 'contraction');
      const top = contraction ?? everything[0];
      const closedTop = Boolean(top) && (Boolean(contraction) || CLOSED.has(top.from.pos) || CLOSED.has(top.entry.pos));

      // Nome próprio: maiúscula no meio da frase que a tradução repete igual ou que não é palavra
      // comum; no começo da frase só se não houver nenhuma leitura comum ("Sollozzo", "Don").
      if (capitalized && !closedTop && !allCaps) {
        const verbatim = trForms.has(lowerOf);
        if (!common.length || (!initial && verbatim) || (verbatim && common.every((r) => r.entry.word === surface))) {
          out.push({ ...base, kind: 'name' });
          return;
        }
      }
      if (closedTop) {
        // Classe fechada ("il", "di", "della"): sem escolha de sentido, a glosa é a tradução do lema.
        const lemma = top.entry.word;
        const sense = firstGloss(top.entry.s[0]?.[0]);
        out.push({ ...base, kind: 'closed', lemma, pos: top.entry.pos, posRaw: top.entry.pos, sense, gloss: alone(lemma) || sense, conf: 'low' });
        return;
      }
      if (!common.length) {
        out.push({ ...base, kind: 'unknown' });
        return;
      }
      // Contexto de classe (depois de artigo, nome ou adjetivo; depois de verbo, particípio).
      const prev = out[out.length - 1];
      const context = prev?.kind === 'closed' && ['article', 'det'].includes(prev.posRaw) ? 'nominal' : prev?.kind === 'word' && ['avere', 'essere'].includes(prev.lemma) ? 'verbal' : null;
      const readings = (context ? readingsOf(source, look, initial, context).filter((r) => r.entry.pos !== 'name') : common).slice(0, READINGS_PER_TOKEN);
      const first = readings[0];
      const posRaw = first.entry.pos;

      let best = null;
      readings.forEach((r, ri) => {
        const lemma = r.entry.word;
        const direct = fold(alone(lemma) || '\u0000');
        r.entry.s.slice(0, SENSES_PER_READING).forEach(([gloss], k) => {
          const sw = glossWords(gloss);
          trTokens.forEach((t, j) => {
            if (t.closed) return;
            let ov = 0;
            for (const x of sw) ov += t.words.get(x) ?? 0;
            ov = Math.min(ov, 2.5);
            const hit = direct !== '\u0000' && (t.lower === direct || t.lemmas.has(direct));
            const evidence = ov + (hit && k === 0 ? 1.5 : 0);
            if (evidence < 0.6) return;
            const near = 1 - Math.abs(i / Math.max(words.length - 1, 1) - j / Math.max(trTokens.length - 1, 1));
            const score = evidence + (t.pos.has(r.entry.pos) ? 0.5 : 0) + 0.8 * near - 0.4 * ri - 0.12 * k;
            if (!best || score > best.score) best = { score, r, k, gloss, t, evidence };
          });
        });
      });
      if (best && best.evidence >= 0.8) {
        out.push({ ...base, kind: 'word', lemma: best.r.entry.word, pos: best.r.entry.pos, posRaw: best.r.entry.pos, sense: firstGloss(best.gloss), gloss: best.t.surface, conf: 'high', senseIndex: best.k });
        return;
      }
      const lemma = first.entry.word;
      const sense = firstGloss(first.entry.s[0][0]);
      out.push({ ...base, kind: 'word', lemma, pos: posRaw, posRaw, sense, gloss: alone(lemma) || sense, conf: 'low', senseIndex: 0 });
    });
    return out;
  }

  return { annotate, readingsOf };
}
