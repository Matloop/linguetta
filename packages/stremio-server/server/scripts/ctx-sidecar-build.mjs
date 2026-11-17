#!/usr/bin/env node
// Etapas 3 e 4 do sidecar de tradução no contexto: escolhe o sentido do Wiktionary de cada
// palavra pela frase traduzida e grava o <koHash>.lctx. Roda depois de ctx-sidecar-translate.mjs.
//
//   node scripts/ctx-sidecar-build.mjs <livro.epub> --work <pasta> --out <arquivo.lctx>
//        [--lang it] [--native pt] [--trlang pt-BR] [--collect] [--partial]
//
//   --collect  só escreve <work>/lemmas.txt (os lemas cuja tradução sozinha o build usa), para
//              traduzir com: ctx-sidecar-translate.mjs <livro> --work <pasta> --items <pasta>/lemmas.txt --name alone
//   --partial  frases ainda sem tradução ficam de fora (para testar antes do fim)
//   --units    também grava as unidades em JSONL (a entrada do lctx.py de referência)
//
// Além do .lctx escreve <work>/glosas.jsonl (uma linha por palavra anotada: frase, sentido,
// confiança) para avaliação, e imprime as estatísticas.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { koHash } from '../../../../apps/web/src/lib/blend/kohash.ts';
import { openDictionary } from '../src/dict/wiktionary.js';
import { openFrequency } from '../src/dict/frequency.js';
import { tidyWordTranslation } from '../src/lookup.js';
import { writeLctx } from '../src/sidecar/lctx.js';
import { createSenseResolver } from '../src/sidecar/senses.js';
import { dedupeUnits, toUnits } from '../src/sidecar/units.js';

const here = dirname(fileURLToPath(import.meta.url));
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    work: { type: 'string' },
    out: { type: 'string' },
    lang: { type: 'string', default: 'it' },
    native: { type: 'string', default: 'pt' },
    trlang: { type: 'string', default: 'pt-BR' },
    collect: { type: 'boolean', default: false },
    partial: { type: 'boolean', default: false },
    units: { type: 'string' },
    dict: { type: 'string', default: join(here, '..', '.dict') },
  },
});
const [bookPath] = positionals;
if (!bookPath || !values.work || (!values.out && !values.collect)) {
  console.error('uso: ctx-sidecar-build.mjs <livro.epub> --work <pasta> --out <arquivo.lctx> [--collect] [--partial]');
  process.exit(2);
}

function readJsonl(prefix, key) {
  const map = new Map();
  for (const f of readdirSync(values.work).filter((f) => f.startsWith(`${prefix}.`) && /\.\d+\.jsonl$/.test(f))) {
    for (const line of readFileSync(join(values.work, f), 'utf8').split('\n')) {
      if (!line) continue;
      try {
        const r = JSON.parse(line);
        map.set(r.t, r.tr);
      } catch {
        /* linha truncada */
      }
    }
  }
  return map;
}

const open = (lang) => {
  const dict = openDictionary(join(values.dict, `${lang}.sqlite`));
  dict.frequency = openFrequency(join(values.dict, `${lang}.freq.txt`), dict.lang);
  return dict;
};
const source = open(values.lang);
const target = open(values.native);

const { sentences } = JSON.parse(readFileSync(join(values.work, 'sentences.json'), 'utf8'));
const translations = readJsonl('translations');
const missing = sentences.filter((s) => !translations.has(s.text.normalize('NFC'))).length;
if (missing && !values.partial) {
  console.error(`[ctx] faltam ${missing} traduções de frases (rode ctx-sidecar-translate.mjs ou use --partial)`);
  process.exit(1);
}
const covered = sentences.filter((s) => translations.has(s.text.normalize('NFC')));

// Tradução do lema sozinho (a "forma de dicionário" traduzida): glosa das classes fechadas, do
// primeiro sentido sem confirmação e evidência de que a frase traduz o primeiro sentido.
const alones = readJsonl('alone');
const needed = new Set();
const alone = (lemma) => {
  needed.add(lemma);
  const raw = alones.get(lemma);
  return raw ? tidyWordTranslation(lemma, raw).toLocaleLowerCase(values.native) : '';
};

const resolver = createSenseResolver({ source, target, alone });
const annotateAll = () => covered.map((s) => resolver.annotate({ text: s.text, translation: translations.get(s.text.normalize('NFC')) }));

if (values.collect) {
  annotateAll();
  writeFileSync(join(values.work, 'lemmas.txt'), `${[...needed].sort().join('\n')}\n`);
  console.log(`[ctx] ${needed.size} lemas em ${join(values.work, 'lemmas.txt')}`);
  process.exit(0);
}

const t0 = Date.now();
const annotated = annotateAll();
const stats = { word: { high: 0, low: 0 }, closed: 0, name: 0, unknown: 0, noGloss: 0, aloneMissing: 0 };
const log = [];
let units = [];
covered.forEach((s, k) => {
  const tr = translations.get(s.text.normalize('NFC'));
  for (const a of annotated[k]) {
    if (a.kind === 'word') stats.word[a.conf]++;
    else stats[a.kind]++;
    if (a.kind === 'word' || a.kind === 'closed') {
      if (!a.gloss) stats.noGloss++;
      else if (a.conf === 'low' && !alones.get(a.lemma)) stats.aloneMissing++;
    }
    log.push({ k, spine: s.spine, para: s.para, surface: a.surface, kind: a.kind, lemma: a.lemma, pos: a.pos, sense: a.sense, gloss: a.gloss, conf: a.conf });
  }
  units.push(...toUnits({ spine: s.spine, text: s.text, tr }, annotated[k]));
});
const before = units.length;
const dedup = dedupeUnits(units, (u) => u.text.split(/\s+/).join(' ').toLowerCase());
units = dedup.units;

const bytes = new Uint8Array(readFileSync(bookPath));
const hash = koHash(bytes);
const result = writeLctx(units, { kohash: hash, lang: values.lang, trLang: values.trlang });
writeFileSync(values.out, result.bytes);
if (values.units) writeFileSync(values.units, `${units.map((u) => JSON.stringify(u)).join('\n')}\n`);
writeFileSync(join(values.work, 'glosas.jsonl'), log.map((l) => JSON.stringify(l)).join('\n'));
writeFileSync(join(values.work, 'sentences-covered.json'), JSON.stringify(covered.map((s) => ({ ...s, tr: translations.get(s.text.normalize('NFC')) }))));
console.log(`[ctx] koHash ${hash}`);
console.log(`[ctx] ${covered.length} frases, ${before} unidades (${dedup.dropped} descartadas por texto repetido com tradução diferente), ${result.records} registros, ${result.anchors} âncoras, ${result.skipped} ignoradas`);
console.log(`[ctx] palavras:`, JSON.stringify(stats));
console.log(`[ctx] ${result.bytes.length} bytes em ${values.out} (${Math.round((Date.now() - t0) / 1000)} s)`);
