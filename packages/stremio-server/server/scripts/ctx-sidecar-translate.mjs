#!/usr/bin/env node
// Etapas 1 e 2 do sidecar de tradução no contexto: divide o EPUB em frases e traduz cada uma com
// o OPUS-MT local. Retomável: cada tradução vai para <work>/translations.<shard>.jsonl assim que
// sai, e o que já está lá (de qualquer shard) não é traduzido de novo.
//
//   node scripts/ctx-sidecar-translate.mjs <livro.epub> --work <pasta> [--lang it] [--native pt]
//        [--shard 0/4] [--limit N] [--items <arquivo> --name alone]
//
// Com --items, em vez das frases traduz as linhas do arquivo (os lemas que o build pede, uma
// palavra por linha) para <work>/<name>.<shard>.jsonl.
//
// Cada shard é um processo; rode vários em paralelo (--shard 0/4 ... 3/4). O resultado de
// <work>/sentences.json é lido por scripts/ctx-sidecar-build.mjs.
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { openEpub } from '../../../../apps/web/src/lib/blend/epub.ts';
import { chapterDoc } from '../../../../apps/web/src/lib/blend/book.ts';
import { selectTranslator } from '../src/config.js';
import { splitSentences } from '../src/sidecar/sentences.js';
import { translateSentence } from '../src/sidecar/translate.js';

const here = dirname(fileURLToPath(import.meta.url));
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    work: { type: 'string' },
    lang: { type: 'string', default: 'it' },
    native: { type: 'string', default: 'pt' },
    shard: { type: 'string', default: '0/1' },
    limit: { type: 'string' },
    items: { type: 'string' },
    name: { type: 'string', default: 'translations' },
  },
});
const [bookPath] = positionals;
if (!bookPath || !values.work) {
  console.error('uso: ctx-sidecar-translate.mjs <livro.epub> --work <pasta> [--lang it] [--native pt] [--shard 0/4] [--limit N]');
  process.exit(2);
}
const [shardIndex, shardCount] = values.shard.split('/').map(Number);
mkdirSync(values.work, { recursive: true });

// 1. Frases do livro: { spine, para, start, end, text } na ordem do livro.
const sentencesFile = join(values.work, 'sentences.json');
let sentences;
if (existsSync(sentencesFile)) {
  sentences = JSON.parse(readFileSync(sentencesFile, 'utf8')).sentences;
} else {
  const epub = openEpub(new Uint8Array(readFileSync(bookPath)));
  sentences = [];
  for (const item of epub.spine) {
    const doc = chapterDoc(epub, item);
    if (!doc) continue;
    doc.paragraphs.forEach((p, para) => {
      for (const s of splitSentences(p.text, values.lang)) sentences.push({ spine: item.index, para, ...s });
    });
  }
  writeFileSync(sentencesFile, JSON.stringify({ title: epub.title, author: epub.author, lang: values.lang, sentences }));
}
const unique = values.items
  ? [...new Set(readFileSync(values.items, 'utf8').split('\n').filter(Boolean))]
  : [...new Set(sentences.map((s) => s.text.normalize('NFC')))];
console.log(`[ctx] ${values.items ? 'itens' : `${sentences.length} frases`} (${unique.length} únicos)`);

// 2. Traduções já feitas (todos os shards).
const done = new Map();
for (const f of readdirSync(values.work).filter((f) => f.startsWith(`${values.name}.`) && /\.\d+\.jsonl$/.test(f))) {
  for (const line of readFileSync(join(values.work, f), 'utf8').split('\n')) {
    if (!line) continue;
    try {
      const { t, tr } = JSON.parse(line);
      done.set(t, tr);
    } catch {
      /* linha truncada de uma interrupção: traduz de novo */
    }
  }
}
const mine = unique.filter((_, i) => i % shardCount === shardIndex && !done.has(unique[i]));
const todo = values.limit ? mine.slice(0, Number(values.limit)) : mine;
console.log(`[ctx] shard ${shardIndex}/${shardCount}: ${todo.length} a traduzir (${done.size} já prontas no total)`);

const translator = selectTranslator(process.env, { defaultDir: join(here, '..', '.models'), log: { info() {}, warn: console.warn } });
if (!translator.available || !translator.route(values.lang, values.native)) {
  console.error(`[ctx] sem rota local ${values.lang}->${values.native}`);
  process.exit(1);
}
const out = join(values.work, `${values.name}.${shardIndex}.jsonl`);
const t0 = Date.now();
let n = 0;
for (const text of todo) {
  const tr = await translateSentence(translator, values.lang, values.native, text);
  appendFileSync(out, `${JSON.stringify({ t: text, tr })}\n`);
  n++;
  if (n % 50 === 0 || n === todo.length) {
    const secs = (Date.now() - t0) / 1000;
    const eta = ((todo.length - n) * secs) / n;
    console.log(`[ctx] shard ${shardIndex}: ${n}/${todo.length} (${(secs / n).toFixed(2)} s/frase, faltam ~${Math.round(eta / 60)} min)`);
  }
}
console.log(`[ctx] shard ${shardIndex} pronto em ${Math.round((Date.now() - t0) / 1000)} s`);
