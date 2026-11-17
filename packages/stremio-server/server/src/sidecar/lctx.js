// Escritor do sidecar de contexto .lctx v1 (contrato: FORMAT.md do agente de firmware; o aparelho
// acha a frase pelo texto, não por posição). Porta de lctx.py: a tokenização, os cortes e os
// hashes precisam ser idênticos aos do aparelho, senão o toque cai no rodapé sem contexto.
//
// Unidade: { spine, text, tr, gl: [{ i, n, lemma, g, pos }] }; `i` é o índice do token (palavra
// com chave) dentro da unidade.

export const ANCHOR_TOKENS = 4;
export const MAX_RECORD = 16000;

const ASCII_PUNCT = new Set([...'!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~']);
const UNI_PUNCT = new Set([...'«»¿¡·\u00a0\u2003…‹›', ...Array.from({ length: 16 }, (_, k) => String.fromCharCode(0x2010 + k))]);
const CLOSERS = new Set([...'"\')]*»”’']);
// Mesmo conjunto de espaços do str.split() do Python (a referência do formato).
const WHITESPACE = /[\t\n\v\f\r \x1c-\x1f\x85\xa0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]+/;

const isPunct = (ch) => ASCII_PUNCT.has(ch) || UNI_PUNCT.has(ch);

function lowerKey(s) {
  let out = '';
  for (const ch of s) {
    let cp = ch.codePointAt(0);
    if (cp >= 65 && cp <= 90) cp += 32;
    else if (cp >= 0xc0 && cp <= 0xde && cp !== 0xd7) cp += 0x20;
    else if (cp >= 0x100 && cp <= 0x17f) {
      const oddPairs = (cp >= 0x139 && cp <= 0x148) || (cp >= 0x179 && cp <= 0x17e);
      if (oddPairs ? cp & 1 : !(cp & 1)) {
        if (cp !== 0x130 && cp !== 0x138 && cp !== 0x178) cp += 1;
      }
    }
    out += String.fromCodePoint(cp);
  }
  return out;
}

/** Chave da palavra como no aparelho (lens::wordKey().key); '' se não tem letra. */
export function wordKey(raw) {
  const chars = [...raw];
  let a = 0;
  let b = chars.length;
  while (a < b && isPunct(chars[a])) a++;
  while (b > a && isPunct(chars[b - 1])) b--;
  const core = chars.slice(a, b).join('').replaceAll('’', "'");
  if (![...core].some((c) => c.codePointAt(0) >= 0x80 || /[A-Za-z]/.test(c))) return '';
  return lowerKey(core);
}

export const cleanText = (text) => text.replaceAll('­', '').replaceAll('​', '');

/** Palavras (pedaços sem espaço) de um texto com onde cada uma começa e termina. */
export function splitWords(text) {
  const out = [];
  const re = new RegExp(WHITESPACE.source, 'g');
  let from = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > from) out.push({ raw: text.slice(from, m.index), start: from, end: m.index });
    from = m.index + m[0].length;
  }
  if (from < text.length) out.push({ raw: text.slice(from), start: from, end: text.length });
  return out;
}

/** Palavras do texto que têm chave: [{ key, raw, start, end }]; o índice na lista é o índice do token. */
export function tokenize(text) {
  return splitWords(cleanText(text))
    .map((w) => ({ ...w, key: wordKey(w.raw) }))
    .filter((w) => w.key);
}

/** O texto original da palavra termina frase para o aparelho (. ! ? : … sem fechamentos finais)? */
export function endsSentence(raw) {
  const chars = [...raw];
  let n = chars.length;
  while (n > 0 && CLOSERS.has(chars[n - 1])) n--;
  return n > 0 && '.!?:…'.includes(chars[n - 1]);
}

export function fnv64(bytes) {
  let h = 0xcbf29ce484222325n;
  for (const byte of bytes) h = ((h ^ BigInt(byte)) * 0x100000001b3n) & 0xffffffffffffffffn;
  return h;
}

export function fnv32(bytes) {
  let h = 0x811c9dc5;
  for (const byte of bytes) h = Math.imul(h ^ byte, 0x01000193) >>> 0;
  return h;
}

const enc = new TextEncoder();
const utf8 = (s) => enc.encode(s);

export function anchorHash(spine, keys) {
  const parts = [utf8(String(spine))];
  for (const k of keys) parts.push(Uint8Array.of(0x1f), utf8(k));
  return fnv64(Buffer.concat(parts));
}

/** Corta os bytes UTF-8 de `s` em no máximo `max` sem partir um caractere. */
function clip(s, max) {
  let out = '';
  let size = 0;
  for (const ch of s) {
    const n = utf8(ch).length;
    if (size + n > max) break;
    out += ch;
    size += n;
  }
  return utf8(out);
}

function buildRecord(unit, keys) {
  const text = utf8(cleanText(unit.text).trim());
  const tr = utf8(unit.tr ?? '');
  const gl = (unit.gl ?? []).filter((g) => g.i >= 0 && g.i < keys.length).sort((a, b) => a.i - b.i);
  const parts = [];
  const head = Buffer.alloc(12);
  [unit.spine, keys.length, text.length, tr.length, gl.length, 0].forEach((v, k) => head.writeUInt16LE(v, k * 2));
  parts.push(head);
  const hashes = Buffer.alloc(keys.length * 4);
  keys.forEach((k, j) => hashes.writeUInt32LE(fnv32(utf8(k)), j * 4));
  parts.push(hashes);
  for (const g of gl) {
    const [lemma, gloss, pos] = [g.lemma ?? '', g.g ?? '', g.pos ?? ''].map((x) => clip(x, 255));
    const h = Buffer.alloc(6);
    h.writeUInt16LE(g.i, 0);
    h.writeUInt8(g.n ?? 1, 2);
    h.writeUInt8(lemma.length, 3);
    h.writeUInt8(gloss.length, 4);
    h.writeUInt8(pos.length, 5);
    parts.push(h, lemma, gloss, pos);
  }
  parts.push(text, tr);
  const body = Buffer.concat(parts);
  const len = Buffer.alloc(4);
  len.writeUInt32LE(body.length);
  return Buffer.concat([len, body]);
}

/**
 * Binário do sidecar. units: iterável de unidades; kohash: 32 hex; lang/trLang: tags (≤ 8 bytes).
 * → { bytes: Buffer, records, anchors, skipped } (skipped: sem palavras ou registro > 16000 bytes).
 */
export function writeLctx(units, { kohash, lang, trLang }) {
  if (!/^[0-9a-f]{32}$/.test(kohash)) throw new Error('koHash deve ter 32 hex minúsculos');
  const records = [];
  const anchors = [];
  let size = 0;
  let skipped = 0;
  for (const unit of units) {
    const keys = tokenize(unit.text).map((t) => t.key);
    if (!keys.length) {
      skipped++;
      continue;
    }
    const rec = buildRecord(unit, keys);
    if (rec.length > MAX_RECORD) {
      skipped++;
      continue;
    }
    anchors.push({ hash: anchorHash(unit.spine, keys.slice(0, ANCHOR_TOKENS)), off: size, spine: unit.spine, kind: 0 });
    if (keys.length > ANCHOR_TOKENS) anchors.push({ hash: anchorHash(unit.spine, keys.slice(-ANCHOR_TOKENS)), off: size, spine: unit.spine, kind: 1 });
    records.push(rec);
    size += rec.length;
  }
  anchors.sort((a, b) => (a.hash < b.hash ? -1 : a.hash > b.hash ? 1 : a.off - b.off || a.spine - b.spine || a.kind - b.kind));
  const fan = new Array(257).fill(0);
  for (const a of anchors) fan[Number(a.hash >> 56n) + 1]++;
  for (let i = 0; i < 256; i++) fan[i + 1] += fan[i];
  const fanOff = 64;
  const indexOff = fanOff + 257 * 4;
  const dataOff = indexOff + anchors.length * 16;

  const head = Buffer.alloc(64);
  head.write('LCTX', 0, 'latin1');
  head.writeUInt16LE(1, 4);
  head.writeUInt16LE(1, 6);
  Buffer.from(kohash, 'hex').copy(head, 8);
  [records.length, anchors.length, fanOff, indexOff, dataOff, dataOff + size].forEach((v, k) => head.writeUInt32LE(v, 24 + k * 4));
  Buffer.from(clip(lang, 8)).copy(head, 48);
  Buffer.from(clip(trLang, 8)).copy(head, 56);
  const fanBuf = Buffer.alloc(257 * 4);
  fan.forEach((v, k) => fanBuf.writeUInt32LE(v, k * 4));
  const index = Buffer.alloc(anchors.length * 16);
  anchors.forEach((a, k) => {
    const o = k * 16;
    index.writeBigUInt64LE(a.hash, o);
    index.writeUInt32LE(a.off, o + 8);
    index.writeUInt16LE(a.spine, o + 12);
    index.writeUInt8(a.kind, o + 14);
  });
  return { bytes: Buffer.concat([head, fanBuf, index, ...records]), records: records.length, anchors: anchors.length, skipped };
}
