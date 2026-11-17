// Tradução de uma frase do livro pelo OPUS-MT local. Frase longa (acima de MAX_CHARS) é cortada
// nas pausas (; : , —) em pedaços e traduzida por partes, que o modelo trunca ou perde o fim.
export const MAX_CHARS = 300;

/** Parte `text` em pedaços de até `max` caracteres, cortando depois de pontuação de pausa. */
export function chunkSentence(text, max = MAX_CHARS) {
  if (text.length <= max) return [text];
  const parts = text.split(/(?<=[;:,—–])\s+/u);
  const chunks = [];
  let cur = '';
  for (const p of parts) {
    if (cur && cur.length + 1 + p.length > max) {
      chunks.push(cur);
      cur = p;
    } else cur = cur ? `${cur} ${p}` : p;
  }
  if (cur) chunks.push(cur);
  return chunks;
}

// Frase toda em maiúsculas ("CAPITOLO PRIMO", "...PIÙ AUTENTICO"): o modelo perde as acentuadas
// ("AUTNICO"); traduz em minúsculas e devolve em maiúsculas.
const isAllCaps = (t) => /\p{Lu}/u.test(t) && t === t.toLocaleUpperCase() && [...t.matchAll(/\p{L}/gu)].length > 3;

export async function translateSentence(translator, sourceLang, nativeLanguage, text) {
  const caps = isAllCaps(text);
  const out = [];
  for (const chunk of chunkSentence(caps ? text.toLocaleLowerCase(sourceLang) : text)) {
    const tr = await translator.translate({ sourceLang, nativeLanguage, text: chunk });
    out.push(String(tr ?? '').trim());
  }
  const joined = out.join(' ').trim();
  return caps ? joined.toLocaleUpperCase(nativeLanguage) : joined;
}
