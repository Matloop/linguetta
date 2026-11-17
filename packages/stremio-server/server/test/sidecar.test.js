import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ANCHOR_TOKENS, anchorHash, endsSentence, fnv32, fnv64, tokenize, wordKey, writeLctx } from '../src/sidecar/lctx.js';
import { createSenseResolver, glossWords, stem } from '../src/sidecar/senses.js';
import { splitSentences } from '../src/sidecar/sentences.js';
import { chunkSentence, translateSentence } from '../src/sidecar/translate.js';
import { dedupeUnits, posCode, toUnits } from '../src/sidecar/units.js';

const bytes = (s) => new TextEncoder().encode(s);

test('lctx: vetores de hash do contrato', () => {
  assert.equal(fnv64(bytes('')).toString(16), 'cbf29ce484222325');
  assert.equal(fnv64(bytes('a')).toString(16), 'af63dc4c8601ec8c');
  assert.equal(fnv32(bytes('padrino')).toString(16), '2128e918');
  const keys = tokenize('Il padrino guardò l’acqua del mare.').map((t) => t.key);
  assert.deepEqual(keys, ['il', 'padrino', 'guardò', "l'acqua", 'del', 'mare']);
  assert.equal(anchorHash(2, keys.slice(0, ANCHOR_TOKENS)).toString(16), '7cec76ce9eafef25');
  assert.equal(anchorHash(2, tokenize('«Ma non è vero!»').map((t) => t.key)).toString(16), '86bf5f694b6a86ad');
});

test('lctx: chave de palavra e fim de frase', () => {
  assert.equal(wordKey('«Ma'), 'ma');
  assert.equal(wordKey('1944'), '');
  assert.equal(wordKey('—'), '');
  assert.equal(wordKey('ÈTÀ,'), 'ètà');
  assert.equal(endsSentence('vero!»'), true);
  assert.equal(endsSentence('disse,'), false);
  assert.equal(endsSentence('Sig.'), true);
  assert.equal(endsSentence('così:'), true);
});

test('lctx: cabeçalho, tabela e registros do exemplo do contrato', () => {
  const units = [
    { spine: 2, text: 'Il padrino guardò l’acqua del mare.', tr: 'O padrinho olhou a água do mar.', gl: [{ i: 1, n: 1, lemma: 'padrino', g: 'padrinho', pos: 'n' }] },
    { spine: 2, text: '«Ma non è vero!»', tr: '"Mas não é verdade!"', gl: [] },
  ];
  const { bytes: out, records, anchors } = writeLctx(units, { kohash: '0123456789abcdef0123456789abcdef', lang: 'it', trLang: 'pt-BR' });
  assert.equal(records, 2);
  assert.equal(anchors, 3); // início e fim da primeira, só início da segunda (4 tokens)
  assert.equal(out.toString('latin1', 0, 4), 'LCTX');
  assert.equal(out.readUInt32LE(36), 64 + 257 * 4);
  assert.equal(out.readUInt32LE(44), out.length);
  assert.equal(out.toString('utf8', 48, 50), 'it');
  assert.equal(out.readUInt32LE(64 + 256 * 4), anchors);
});

test('sentences: não corta em abreviação nem antes de minúscula', () => {
  const s = splitSentences('«Sig. Corleone, venga qui.» disse il Dr. Rossi. Poi uscì... Ma no! Che cosa?', 'it');
  assert.deepEqual(s.map((x) => x.text), ['«Sig. Corleone, venga qui.» disse il Dr. Rossi.', 'Poi uscì...', 'Ma no!', 'Che cosa?']);
  const text = 'Uno. Due.';
  for (const x of splitSentences(text, 'it')) assert.equal(text.slice(x.start, x.end), x.text);
});

test('translate: frase longa vai em pedaços nas pausas; maiúsculas voltam maiúsculas', async () => {
  const long = `${'parola, '.repeat(60)}fine.`;
  const chunks = chunkSentence(long, 100);
  assert.ok(chunks.length > 3 && chunks.every((c) => c.length <= 100));
  assert.equal(chunks.join(' '), long);
  const seen = [];
  const mt = { translate: async ({ text }) => (seen.push(text), `t(${text})`) };
  assert.equal(await translateSentence(mt, 'it', 'pt', 'È PIÙ AUTENTICO'), 'T(È PIÙ AUTENTICO)');
  assert.equal(seen[0], 'è più autentico');
});

test('senses: glosas em radical, sem palavras vazias nem glosa de uso', () => {
  assert.equal(stem('cousins'), 'cousin');
  assert.deepEqual([...glossWords('to say, tell, utter (a word)')].sort(), ['say', 'tell', 'utter']);
  assert.equal(glossWords('Used to indicate possession').size, 0);
  assert.equal(glossWords('Denotes absolute time.').size, 0);
});

const reading = (word, pos, senses, rank = 0) => ({ entry: { word, pos, s: senses.map((g) => [g, []]) }, from: { pos }, notes: [], score: 100 - rank });
function fakeDict(lang, table) {
  return { lang, resolve: (surface) => table[surface.toLowerCase()] ?? [] };
}

test('senses: o sentido que bate com a tradução vence o primeiro; nome próprio e desconhecida ficam sem glosa', () => {
  const source = fakeDict('it', {
    il: [reading('il', 'article', ['the'])],
    capo: [reading('capo', 'noun', ['head', 'boss, chief'])],
    parla: [reading('parlare', 'verb', ['to speak'])],
    don: [reading('don', 'noun', ['gift'])],
  });
  const target = fakeDict('pt', {
    o: [reading('o', 'article', ['the'])],
    chefe: [reading('chefe', 'noun', ['boss, chief'])],
    fala: [reading('falar', 'verb', ['to speak'])],
  });
  const r = createSenseResolver({ source, target, alone: (l) => ({ il: 'o', capo: 'cabeça', parlare: 'falar' })[l] ?? '' });
  const out = r.annotate({ text: 'Il capo parla con Don Sollozzo xyz', translation: 'O chefe fala com Don Sollozzo xyz' });
  const by = Object.fromEntries(out.map((a) => [a.surface, a]));
  assert.equal(by.Il.kind, 'closed');
  assert.equal(by.Il.gloss, 'o');
  assert.equal(by.capo.sense, 'boss');
  assert.equal(by.capo.gloss, 'chefe');
  assert.equal(by.capo.conf, 'high');
  assert.equal(by.parla.gloss, 'fala');
  assert.equal(by.Don.kind, 'name');
  assert.equal(by.Sollozzo.kind, 'name');
  assert.equal(by.xyz.kind, 'unknown');
});

test('senses: sem batida usa o primeiro sentido com a tradução do lema e baixa confiança', () => {
  const source = fakeDict('it', { capo: [reading('capo', 'noun', ['head', 'boss'])] });
  const target = fakeDict('pt', { carro: [reading('carro', 'noun', ['car'])] });
  const r = createSenseResolver({ source, target, alone: () => 'cabeça' });
  const [a] = r.annotate({ text: 'capo', translation: 'carro' });
  assert.equal(a.conf, 'low');
  assert.equal(a.sense, 'head');
  assert.equal(a.gloss, 'cabeça');
  assert.equal(posCode(a.pos, a.conf), 'n?');
});

test('units: corta como o aparelho (. ! ? : …), indexa a glosa pelo token da unidade e junta o token elidido', () => {
  const text = 'Disse: «Il padrino guardò l’acqua.» Poi uscì.';
  const ann = [
    { index: text.indexOf('padrino'), length: 7, kind: 'word', lemma: 'padrino', pos: 'noun', gloss: 'padrinho', conf: 'high' },
    { index: text.indexOf('l’'), length: 2, kind: 'closed', lemma: 'lo', pos: 'article', gloss: 'o', conf: 'low' },
    { index: text.indexOf('acqua'), length: 5, kind: 'word', lemma: 'acqua', pos: 'noun', gloss: 'água', conf: 'high' },
    { index: 0, length: 5, kind: 'name', surface: 'Disse' },
  ];
  const units = toUnits({ spine: 3, text, tr: 'TR' }, ann);
  assert.deepEqual(units.map((u) => u.text), ['Disse:', '«Il padrino guardò l’acqua.»', 'Poi uscì.']);
  assert.ok(units.every((u) => u.tr === 'TR' && u.spine === 3));
  assert.deepEqual(units[1].gl, [
    { i: 1, n: 1, lemma: 'padrino', g: 'padrinho', pos: 'n' },
    { i: 3, n: 1, lemma: 'acqua', g: 'água', pos: 'n' },
  ]);
});

test('units: texto repetido na mesma spine com tradução diferente sai; com a mesma, fica um', () => {
  const u = (text, tr, spine = 1) => ({ spine, text, tr, gl: [] });
  const { units, dropped } = dedupeUnits([u('Sì.', 'Sim.'), u('Sì.', 'Sim.'), u('No.', 'Não.'), u('No.', 'Nada.'), u('No.', 'Não.', 2)], (x) => x.text.toLowerCase());
  assert.equal(dropped, 2);
  assert.deepEqual(units.map((x) => `${x.spine}:${x.text}`), ['1:Sì.', '2:No.']);
});
