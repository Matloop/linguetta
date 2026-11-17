// Frases de um parágrafo para o sidecar de tradução no contexto. Intl.Segmenter divide em
// ponto final; aqui se juntam de volta os cortes falsos: abreviação ("Sig.", "Dr.", "ecc."),
// ponto seguido de minúscula e frases de uma só palavra sem letra. As posições são em unidades
// UTF-16 do texto do parágrafo (as mesmas de Paragraph.text em apps/web/src/lib/blend/xhtml.ts).
import { languageProfile } from '@linguetta/language';

const ABBREVIATIONS = new Set([
  'sig', 'sigg', 'sig.ra', 'sig.na', 'dr', 'dott', 'dott.ssa', 'prof', 'avv', 'ing', 'on', 'mr', 'mrs', 'ms', 'st', 'sr', 'sra', 'srta',
  'ecc', 'cfr', 'es', 'ca', 'pag', 'pagg', 'art', 'fig', 'vol', 'cap', 'n', 'nn', 'tel', 'vs', 'etc', 'p.m', 'a.m', 'u.s', 'gen', 'col', 'cap', 'ten',
]);

/** A frase termina numa abreviação ("... il Dr.", "... Sig.")? */
function endsWithAbbreviation(text) {
  const m = /([\p{L}.]+)\.[\s»"”’')\]]*$/u.exec(text.trimEnd());
  if (!m) return false;
  const word = m[1].toLowerCase();
  if (ABBREVIATIONS.has(word)) return true;
  // sigla de letras soltas ("U.S.", "S.", "J.F.K.")
  return /^(\p{L}\.)*\p{L}$/u.test(m[1]) && [...m[1].replace(/\./g, '')].length <= 3 && m[1] === m[1].toUpperCase();
}

const startsLower = (text) => {
  const m = /[\p{L}]/u.exec(text);
  return Boolean(m) && m[0] === m[0].toLowerCase() && m[0] !== m[0].toUpperCase() && /^[\s«»"“”‘’'—–\-(\[]*\p{L}/u.test(text);
};

/**
 * [{ start, end, text }] com as frases do parágrafo, sem os espaços das pontas. Trechos sem
 * nenhuma letra ou dígito entram na frase vizinha.
 */
export function splitSentences(text, lang) {
  const base = languageProfile(lang).base;
  const segmenter = new Intl.Segmenter(base, { granularity: 'sentence' });
  const raw = [];
  for (const s of segmenter.segment(text)) raw.push({ start: s.index, end: s.index + s.segment.length });
  const merged = [];
  for (const r of raw) {
    const last = merged[merged.length - 1];
    const piece = text.slice(r.start, r.end);
    const prev = last ? text.slice(last.start, last.end) : '';
    const hasText = /[\p{L}\p{N}]/u.test(piece);
    if (last && (!hasText || endsWithAbbreviation(prev) || (/[.…]["»”’')\s]*$/u.test(prev) && startsLower(piece)))) last.end = r.end;
    else merged.push({ ...r });
  }
  const out = [];
  for (const m of merged) {
    const raw = text.slice(m.start, m.end);
    const lead = raw.length - raw.trimStart().length;
    const trimmed = raw.trim();
    if (!/[\p{L}\p{N}]/u.test(trimmed)) continue;
    out.push({ start: m.start + lead, end: m.start + lead + trimmed.length, text: trimmed });
  }
  return out;
}
