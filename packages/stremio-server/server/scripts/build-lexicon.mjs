// Léxico offline para o Blend de livros sem IA: pares lema→lema (OPUS-MT + dicionários) expandidos
// em formas de superfície. Uso (precisa de node >= 24 por causa do node:sqlite):
//   node scripts/build-lexicon.mjs <src> <tgt> [--top 40000] [--out <pasta>]
// Escada de qualidade (tier 0 melhor … 3 pior) em vez de filtros: o consumidor escolhe até onde descer.
// Saída: <out>/<src>-<tgt>.lexicon.json.gz e <src>-<tgt>.lexicon.meta.json (contrato em README.md).
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { gzipSync } from 'node:zlib';

const HERE = dirname(fileURLToPath(import.meta.url));
const SERVER = resolve(HERE, '..');
const ROOT = resolve(SERVER, '../../..');
const DEFAULT_OUT = join(ROOT, 'apps/web/src/lib/blend/lexicon');

const CONTENT = new Set(['noun', 'verb', 'adj', 'adv']);
const CLOSED = new Set(['pron', 'det', 'prep', 'conj', 'article', 'particle', 'contraction', 'prep_phrase']);
const POS_CODE = { noun: 'n', verb: 'v', adj: 'a', adv: 'd' };
const CARRIER = { pt: 'a palavra ', it: 'la parola ', es: 'la palabra ', fr: 'le mot ', en: 'the word ', de: 'das Wort ' };
const ADVERB_FALLBACK_RANK = 2000; // advérbios frequentes sem par confirmado ainda entram no tier 3

// ---------- tempos verbais: vocabulário de tags comparável entre idiomas ----------

const TAG_PERSON = { 'first-person': '1', 'second-person': '2', 'third-person': '3' };
const TAG_NUMBER = { singular: 's', plural: 'p' };
const TAG_MOOD = new Set(['indicative', 'subjunctive', 'conditional', 'imperative']);
const TAG_TENSE = new Set(['present', 'imperfect', 'future', 'pluperfect']);

/**
 * Chave canônica de uma forma verbal finita: "modo|tempo|pessoa|número", sem depender da ordem das tags.
 * O Wiktionary usa o mesmo vocabulário em pt e it, com uma diferença: o pretérito perfeito é "preterite" em pt
 * e "historic past" (passato remoto) em it; os dois viram `pret`. Sem modo explícito é indicativo.
 * Retorna null para o que não tem equivalente seguro (infinitivo pessoal, futuro do subjuntivo, imperativo negativo,
 * formas raras/tradicionais, qualquer tag desconhecida) e para particípios/infinitivo, que têm tratamento próprio.
 */
export function tagKey(tags) {
  const ts = tags.split(/\s+/).filter(Boolean);
  if (ts.length === 1 && ts[0] === 'gerund') return 'gerund';
  let mood = '', tense = '', person = '', number = '';
  for (const t of ts) {
    if (TAG_PERSON[t]) person = TAG_PERSON[t];
    else if (TAG_NUMBER[t]) number = TAG_NUMBER[t];
    else if (TAG_MOOD.has(t)) mood ||= t;
    else if (TAG_TENSE.has(t)) tense = t;
    else if (t === 'preterite' || t === 'historic') tense = 'pret';
    else if (t === 'past' && ts.includes('historic')) continue;
    else return null;
  }
  if (!person || !number) return null;
  if (!mood) mood = tense ? 'indicative' : '';
  if (!mood) return null;
  if (mood === 'indicative' && !tense) return null;
  if (mood === 'subjunctive' && !tense) tense = 'present'; // "first-person singular subjunctive" (it)
  if (mood === 'subjunctive' && !['present', 'imperfect'].includes(tense)) return null;
  if (mood === 'conditional' && tense) return null;
  if (mood === 'imperative' && tense) return null;
  return [mood, tense, person, number].join('|');
}
// Em texto corrido a 3ª pessoa e o indicativo são o que mais aparece: vêm primeiro quando uma forma serve a vários traços.
const MOOD_ORDER = { gerund: 1, indicative: 0, conditional: 1, subjunctive: 2, imperative: 3 };
const PERSON_ORDER = { 3: 0, 1: 1, 2: 2 };
const keyPriority = (k) => {
  if (k === 'gerund') return 10;
  const [mood, , person] = k.split('|');
  return MOOD_ORDER[mood] * 10 + PERSON_ORDER[person];
};

// ---------- expansão em formas de superfície (pura, testável) ----------

/** Conjunto exato de tags: "feminine plural" == ["plural", "feminine"]. */
const sameTags = (tags, want) => {
  const ts = tags.split(/\s+/).filter(Boolean);
  return ts.length === want.length && want.every((w) => ts.includes(w));
};
const findForm = (forms, ...wants) => {
  for (const want of wants) {
    const f = forms.find((x) => sameTags(x.tags, want));
    if (f) return f.key;
  }
  return null;
};

/**
 * Traços que sabemos expandir, por classe:
 *   n: s, p   a: ms, fs, mp, fp   v: inf, pms, pfs, pmp, pfp (particípio passado)
 * Formas de superfície do lema de origem: [[forma, traço]].
 */
export function sourceSurfaces(pos, lemma, forms) {
  const out = [];
  const add = (trait, ...wants) => {
    for (const want of wants) for (const f of forms) if (sameTags(f.tags, want)) out.push([f.key, trait]);
  };
  if (pos === 'adv') {
    out.push([lemma, 'b']);
  } else if (pos === 'noun') {
    out.push([lemma, 's']);
    add('p', ['plural']);
  } else if (pos === 'adj') {
    out.push([lemma, 'ms']);
    add('fs', ['feminine'], ['feminine', 'singular']);
    add('mp', ['plural'], ['masculine', 'plural']);
    add('fp', ['feminine', 'plural']);
  } else if (pos === 'verb') {
    out.push([lemma, 'inf']);
    add('pms', ['participle', 'past'], ['masculine', 'participle', 'past', 'singular']);
    add('pfs', ['feminine', 'participle', 'past', 'singular'], ['feminine', 'participle', 'past']);
    add('pmp', ['masculine', 'participle', 'past', 'plural'], ['participle', 'past', 'plural']);
    add('pfp', ['feminine', 'participle', 'past', 'plural']);
  }
  return out;
}

/** O dicionário marca o acento tônico no meio da palavra ("cantàto"); o texto real não tem. */
const REAL_ACCENT_MONOSYLLABLES = new Set(['è', 'dà', 'dì', 'può', 'ciò', 'già', 'giù', 'più', 'là', 'lì', 'né', 'sì', 'tè', 'cioè']);
export function stripStress(word) {
  const chars = [...word.normalize('NFC')];
  // monossílabo com acento marcado só pelo dicionário ("hà" = ha, "fù" = fu); os que levam acento na escrita ficam
  if (chars.length > 1 && /[àèéìòóù]$/i.test(word) && !/[aeiouàèéìòóùy]/i.test(chars.slice(0, -1).join('')) && !REAL_ACCENT_MONOSYLLABLES.has(word.toLowerCase())) {
    return chars.slice(0, -1).join('') + chars.at(-1).normalize('NFD')[0];
  }
  return chars.map((c, i) => (i < chars.length - 1 && /[àèéìòóùÀÈÉÌÒÓÙ]/.test(c) ? c.normalize('NFD')[0] : c)).join('');
}

// Regras regulares do italiano para o que o Wiktionary não lista (só o masculino singular vem).
function italianAdjective(lemma, trait) {
  if (trait === 'ms') return lemma;
  if (lemma.endsWith('e')) return trait === 'fs' ? lemma : lemma.slice(0, -1) + 'i';
  if (!lemma.endsWith('o')) return null;
  const stem = lemma.slice(0, -1);
  const last = stem.slice(-1);
  if (trait === 'fs') return stem + 'a';
  if (last === 'i') return trait === 'fp' && /[cg]i$/.test(stem) ? null : trait === 'mp' ? null : stem + 'e';
  if (trait === 'mp') return /[cg]$/.test(stem) ? null : stem + 'i';
  return /[cg]$/.test(stem) ? stem + 'he' : stem + 'e';
}
function italianParticiple(base, trait) {
  if (trait === 'pms') return base;
  if (!base.endsWith('o')) return null;
  return base.slice(0, -1) + { pfs: 'a', pmp: 'i', pfp: 'e' }[trait];
}

/** Forma do lema de destino para o traço; null se não existir. */
export function targetForm(pos, trait, lemma, forms, lang = '') {
  const form = (...wants) => {
    const k = findForm(forms, ...wants);
    return k ? stripStress(k) : null;
  };
  if (pos === 'adv') return lemma;
  if (pos === 'noun') return trait === 's' ? lemma : form(['plural'], ['masculine', 'plural'], ['feminine', 'plural']);
  if (pos === 'adj') {
    if (trait === 'ms') return lemma;
    const listed = { fs: form(['feminine'], ['feminine', 'singular']), mp: form(['plural'], ['masculine', 'plural']), fp: form(['feminine', 'plural']) }[trait];
    return listed ?? (lang === 'it' ? italianAdjective(lemma, trait) : null);
  }
  if (pos === 'verb') {
    if (trait === 'inf') return lemma;
    const base = form(['participle', 'past']) ?? form(['masculine', 'participle', 'past', 'singular']);
    const listed = {
      pms: base,
      pfs: form(['feminine', 'participle', 'past', 'singular'], ['feminine', 'participle', 'past']),
      pmp: form(['masculine', 'participle', 'past', 'plural'], ['participle', 'past', 'plural']),
      pfp: form(['feminine', 'participle', 'past', 'plural']),
    }[trait];
    if (listed) return listed;
    return base && lang === 'it' ? italianParticiple(base, trait) : null;
  }
  return null;
}

/**
 * A tabela do dicionário tem uma linha por (forma, verbete): quando duas casas do paradigma têm a mesma forma
 * ("eu dizia" = "ele dizia"), só a primeira sobrevive. A 3ª pessoa do singular herda da 1ª quando falta, e no
 * subjuntivo a 2ª também (pt "fosse", it "dica": 1ª = 2ª = 3ª). Casas ausentes de verdade não existem nos paradigmas completos.
 */
function fillSyncretism(slots) {
  for (const k of [...slots.keys()]) {
    const [mood, tense, person, number] = k.split('|');
    if (person !== '1' || number !== 's') continue;
    const at = (p) => [mood, tense, p, 's'].join('|');
    if (!slots.has(at('3'))) slots.set(at('3'), slots.get(k));
    if (mood === 'subjunctive' && !slots.has(at('2'))) slots.set(at('2'), slots.get(k));
  }
}

/** Italiano: o subjuntivo presente de 1ª pl., o imperfeito de 2ª pl. e o imperativo de 2ª pl. repetem outras casas. */
function fillItalian(slots) {
  const copy = (to, from, force) => {
    if (slots.has(from) && (force || !slots.has(to))) slots.set(to, slots.get(from));
  };
  copy('subjunctive|present|1|p', 'indicative|present|1|p', true);
  copy('subjunctive|imperfect|2|p', 'indicative|pret|2|p');
  copy('imperative||2|p', 'indicative|present|2|p');
  copy('subjunctive|present|1|s', 'subjunctive|present|3|s');
  copy('subjunctive|present|3|s', 'subjunctive|present|1|s');
}

/**
 * Linhas do léxico de um par de lemas: [[formaOrigem, [pos, lemaO, formaD, lemaD, rank, tier]]].
 * `tier` é o do par de lemas; as formas conjugadas (finitas e gerúndio) nunca ficam abaixo do tier 1.
 * Não descarta forma igual à de origem (o web pula). `stats` (opcional) conta, por chave de tempo, formas de origem vistas/mapeadas.
 */
export function expandPair({ pos, sourceLemma, targetLemma, sourceForms, targetForms, rank, tier = 1, targetLang = '', targetRank = null, stats = null }) {
  const rows = [];
  const seen = new Set();
  const push = (surface, tf, rowTier) => {
    const key = surface.normalize('NFC').toLocaleLowerCase();
    if (!tf || /[\s\d-]/.test(key) || /[\s\d]/.test(tf)) return false;
    const id = `${key}|${tf.normalize('NFC').toLocaleLowerCase()}`;
    if (seen.has(id)) return true;
    seen.add(id);
    rows.push([key, [POS_CODE[pos], sourceLemma, tf.normalize('NFC').toLocaleLowerCase(), targetLemma, rank, rowTier]]);
    return true;
  };
  for (const [surface, trait] of sourceSurfaces(pos, sourceLemma, sourceForms)) push(surface, targetForm(pos, trait, targetLemma, targetForms, targetLang), tier);
  if (pos === 'verb') {
    // alvo: uma forma por casa; o dicionário às vezes lista várias (variantes raras), vence a mais frequente
    const byKey = new Map();
    for (const f of targetForms) {
      const k = tagKey(f.tags);
      if (!k) continue;
      const form = stripStress(f.key);
      if ([...form].length < 2 && form !== 'è') continue; // "à" solto é erro do dicionário
      const cur = byKey.get(k);
      if (!cur || (targetRank?.(form) ?? Infinity) < (targetRank?.(cur) ?? Infinity)) byKey.set(k, form);
    }
    // origem: casa → formas
    const slots = new Map();
    for (const f of sourceForms) {
      const k = tagKey(f.tags);
      if (k) slots.set(k, [...(slots.get(k) ?? []), f.key]);
    }
    fillSyncretism(slots);
    fillSyncretism(byKey);
    if (targetLang === 'it') fillItalian(byKey);
    const conj = [];
    for (const [k, surfaces] of slots) for (const s of surfaces) conj.push([k, s]);
    conj.sort((a, b) => keyPriority(a[0]) - keyPriority(b[0]));
    for (const [k, surface] of conj) {
      const st = stats && (stats[k] ??= { source: 0, mapped: 0 });
      if (st) st.source++;
      if (push(surface, byKey.get(k), Math.max(tier, 1)) && st) st.mapped++;
    }
  }
  return rows;
}

// ---------- confirmação do par de lemas (PoC validado) ----------

function glosses(entry, senses = 2) {
  const out = new Set();
  for (const [g] of entry.s.slice(0, senses)) {
    let x = String(g ?? '').toLowerCase();
    while (/\([^()]*\)/.test(x)) x = x.replace(/\([^()]*\)/g, ' ');
    for (const part of x.split(/[;,]/)) {
      const y = part.trim().replace(/\s+/g, ' ').replace(/^to /, '').replace(/^(a|an|the) /, '').replace(/[.!?:]+$/, '');
      if (y.length >= 3 && y.split(' ').length <= 2) out.add(y);
    }
  }
  return out;
}

function parseArgs(argv) {
  const pos = argv.filter((a, i) => !a.startsWith('--') && !argv[i - 1]?.startsWith('--'));
  const flag = (name, def) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 ? argv[i + 1] : def;
  };
  const [src, tgt] = pos;
  if (!src || !tgt) throw new Error('uso: node scripts/build-lexicon.mjs <src> <tgt> [--top 40000] [--out pasta]');
  return { src, tgt, top: Number(flag('top', 40000)), out: resolve(flag('out', DEFAULT_OUT)) };
}

/** Escreve em nome temporário e renomeia: uma build interrompida nunca deixa arquivo pela metade. */
function writeAtomic(file, data) {
  const tmp = `${file}.tmp`;
  writeFileSync(tmp, data);
  renameSync(tmp, file);
}

async function main() {
  const { src, tgt, top, out } = parseArgs(process.argv.slice(2));
  const { selectDictionaries, selectTranslator } = await import(`${SERVER}/src/config.js`);
  const { tidyWordTranslation } = await import(`${SERVER}/src/lookup.js`);
  const quiet = { info() {}, warn() {}, error() {} };
  const dicts = selectDictionaries(process.env, { defaultDir: `${SERVER}/.dict`, log: quiet });
  const sd = dicts.get(src), td = dicts.get(tgt);
  if (!sd || !td) throw new Error(`faltam dicionários ${src}/${tgt} em ${SERVER}/.dict`);
  if (!sd.frequency) throw new Error(`falta ${src}.freq.txt em ${SERVER}/.dict`);
  const translator = selectTranslator(process.env, { defaultDir: `${SERVER}/.models`, log: quiet });
  if (!translator.available) throw new Error('nenhum modelo OPUS-MT disponível (rode scripts/setup-mt.sh)');
  const dictDir = process.env.LINGOBLEND_DICT_DIR || `${SERVER}/.dict`;
  const sdb = new DatabaseSync(join(dictDir, `${sd.lang}.sqlite`), { readOnly: true });
  const tdb = new DatabaseSync(join(dictDir, `${td.lang}.sqlite`), { readOnly: true });
  const sForms = sdb.prepare('SELECT key, tags FROM form WHERE entry = ?');
  const tForms = tdb.prepare('SELECT key, tags FROM form WHERE entry = ?');
  const mt = (a, b, text) => translator.translate({ sourceLang: a, nativeLanguage: b, text });
  mkdirSync(out, { recursive: true });

  // 1) palavras de origem: percorre a lista de frequência. Lemas de conteúdo (rank = melhor posição de qualquer forma)
  // e palavras funcionais (cada forma de superfície é traduzida sozinha: o, a, os, as…).
  const freqWords = readFileSync(join(dictDir, `${sd.lang}.freq.txt`), 'utf8').split('\n').map((l) => l.trim().split(/\s+/)[0]).filter(Boolean);
  const lemmas = new Map(); // id → { entry, rank }
  const closedWords = new Map(); // palavra → { entry, rank }
  const seenWord = new Set();
  let rank = 0;
  for (const w of freqWords) {
    const key = w.toLocaleLowerCase(src);
    if (seenWord.has(key)) continue;
    seenWord.add(key);
    rank++;
    if (rank > top) break;
    if (/[\d\s-]/.test(w)) continue;
    const readings = sd.resolve(w, {}).filter((r) => r.entry.s.length);
    if (!readings.length) continue;
    const closed = readings.find((r) => CLOSED.has(r.entry.pos));
    if (closed) {
      if ([...w].length >= 2 && !closedWords.has(key)) closedWords.set(key, { entry: closed.entry, rank });
      continue;
    }
    if ([...w].length < 3) continue;
    for (const r of readings) {
      const e = r.entry;
      if (!CONTENT.has(e.pos) || lemmas.has(e.id)) continue;
      if (/spelling|alternative|obsolete|archaic/i.test(e.s[0][0]) || /[\d\s-]/.test(e.word)) continue;
      lemmas.set(e.id, { entry: e, rank });
    }
  }
  console.log(`lemas de origem: ${lemmas.size}, palavras funcionais: ${closedWords.size} (top ${top})`);

  // 2) tradução palavra a palavra, com cache em disco (cada chave guarda tudo o que o tier precisa; retomável).
  const cachePath = join(out, `${src}-${tgt}.mt-cache.json`);
  const cache = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath, 'utf8')) : {};
  const t0 = Date.now();
  let fresh = 0;
  const tick = (label) => {
    fresh++;
    if (fresh % 200 === 0) {
      writeAtomic(cachePath, JSON.stringify(cache));
      console.log(`  ${label}: ${fresh} traduções novas, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
    }
  };
  // O OPUS-MT erra palavra solta ("ter" → "ter", "estar" → ""); dentro de uma frase-moldura ("a palavra "ter"") acerta.
  // A tradução crua vem primeiro; a moldura só entra quando a crua não serve (`c: 1` no cache = já tentou as duas).
  const carrier = (a, b, word) => mt(a, b, `${CARRIER[a] ?? CARRIER.pt}"${word}"`);
  const clean = (raw, word, lang) => tidyWordTranslation(word, String(raw).replace(/^(la parola|a palavra|la palabra|le mot|the word|das wort)\s+/i, '').replace(/^[^"“«]*["“«]/, '').replace(/["”»][^"”»]*$/, '')).toLocaleLowerCase(lang);
  const candidates = async (word, a, b) => [tidyWordTranslation(word, await mt(a, b, word)).toLocaleLowerCase(b), async () => clean(await carrier(a, b, word), word, b)];
  // Par de lemas: { t, back, gloss, c }. t só existe se a tradução é uma palavra, difere da origem e é lema da mesma classe no destino.
  const pairOf = async (e) => {
    const key = `${e.word}|${e.pos}`;
    if (key in cache && (cache[key].t || cache[key].c)) return cache[key];
    const res = { t: null, back: false, gloss: false, c: 1 };
    const [bare, later] = await candidates(e.word, src, tgt);
    for (const o of [bare, null]) {
      const out = o ?? (await later());
      if (!out || out.split(/\s+/).length !== 1 || out === e.word.toLowerCase()) continue;
      const cand = td.resolve(out, { initial: false }).filter((r) => r.entry.s.length && r.entry.pos === e.pos && !r.notes.length)[0]?.entry;
      if (!cand || cand.word !== out) continue;
      const backs = [tidyWordTranslation(cand.word, await mt(tgt, src, cand.word)).toLocaleLowerCase(src), clean(await carrier(tgt, src, cand.word), cand.word, src)];
      res.t = cand.word;
      res.back = backs.some((back) => back === e.word.toLowerCase() || (back && sd.resolve(back, {}).some((r) => r.entry.word.toLowerCase() === e.word.toLowerCase())));
      const g2 = glosses(cand);
      res.gloss = [...glosses(e)].some((g) => g2.has(g));
      break;
    }
    cache[key] = res;
    tick('lemas');
    return res;
  };
  // Palavra funcional: { t, l } (forma e lema no destino: classe funcional, advérbio ou adjetivo/determinante), sem confirmação.
  const TARGET_FUNCTIONAL = (pos) => CLOSED.has(pos) || pos === 'adv' || pos === 'adj';
  const functionalOf = async (word) => {
    const key = `f|${word}`;
    if (key in cache && (cache[key].t || cache[key].c)) return cache[key];
    const res = { t: null, l: null, c: 1 };
    const [bare, later] = await candidates(word, src, tgt);
    for (const o of [bare, null]) {
      const out = o ?? (await later());
      if (!out || out.split(/\s+/).length !== 1 || /[\d-]/.test(out)) continue;
      const hit = td.resolve(out, { initial: false }).find((r) => r.entry.s.length && TARGET_FUNCTIONAL(r.entry.pos));
      if (hit) {
        res.t = out;
        res.l = hit.entry.word;
        break;
      }
    }
    cache[key] = res;
    tick('funcionais');
    return res;
  };

  const forms = {};
  const pairsByTier = [0, 0, 0, 0];
  const pairsByPos = { n: 0, v: 0, a: 0, d: 0 };
  const conjStats = {};
  const rowedAdverbs = new Set();
  const add = (rows) => {
    for (const [key, row] of rows) (forms[key] ??= []).push(row);
  };
  for (const { entry: e, rank: r } of lemmas.values()) {
    const res = await pairOf(e);
    if (!res.t) continue;
    const tier = res.back && res.gloss ? 0 : res.back || res.gloss ? 1 : 2;
    const cand = td.resolve(res.t, {}).find((x) => x.entry.pos === e.pos && !x.notes.length && x.entry.s.length)?.entry;
    if (!cand) continue;
    const rows = expandPair({
      pos: e.pos,
      sourceLemma: e.word,
      targetLemma: cand.word,
      sourceForms: sForms.all(e.id),
      targetForms: tForms.all(cand.id),
      rank: sd.frequency.rank(e.word) ?? r,
      tier,
      targetLang: td.lang,
      targetRank: (w) => td.frequency?.rank(w) ?? undefined,
      stats: e.pos === 'verb' ? conjStats : null,
    });
    if (!rows.length) continue;
    pairsByTier[tier]++;
    pairsByPos[POS_CODE[e.pos]]++;
    if (e.pos === 'adv') rowedAdverbs.add(e.word.toLocaleLowerCase(src));
    add(rows);
  }
  // advérbios frequentes sem par aceito caem no tier 3 (como palavra funcional)
  for (const { entry: e, rank: r } of lemmas.values()) {
    const key = e.word.toLocaleLowerCase(src);
    if (e.pos === 'adv' && r <= ADVERB_FALLBACK_RANK && !rowedAdverbs.has(key) && !closedWords.has(key)) closedWords.set(key, { entry: e, rank: r });
  }
  let functionalRows = 0;
  for (const [word, { entry, rank: r }] of closedWords) {
    const res = await functionalOf(word);
    if (!res.t) continue;
    (forms[word] ??= []).push(['f', entry.word.toLocaleLowerCase(src), res.t, res.l.toLocaleLowerCase(tgt), r, 3]);
    functionalRows++;
  }
  writeAtomic(cachePath, JSON.stringify(cache));

  // 3) forma de conteúdo que também é palavra funcional na origem não entra; linhas melhores primeiro (tier, depois rank).
  let dropped = 0;
  for (const key of Object.keys(forms)) {
    if (sd.resolve(key, {}).some((r) => CLOSED.has(r.entry.pos))) {
      const kept = forms[key].filter((row) => row[0] === 'f');
      dropped += forms[key].length - kept.length;
      if (kept.length) forms[key] = kept;
      else delete forms[key];
    }
    if (!forms[key]) continue;
    // verbetes homógrafos do mesmo lema geram linhas idênticas
    const uniq = new Map(forms[key].map((row) => [row.join('|'), row]));
    forms[key] = [...uniq.values()].sort((a, b) => a[5] - b[5] || (a[4] || 1e9) - (b[4] || 1e9));
  }

  const gz = gzipSync(JSON.stringify({ version: 2, source: src, target: tgt, forms }), { level: 9 });
  const rowsByTier = [0, 0, 0, 0];
  const rowsByPos = {};
  const rowsByTierPos = {};
  for (const rows of Object.values(forms))
    for (const row of rows) {
      rowsByTier[row[5]]++;
      rowsByPos[row[0]] = (rowsByPos[row[0]] ?? 0) + 1;
      const k = `${row[5]}${row[0]}`;
      rowsByTierPos[k] = (rowsByTierPos[k] ?? 0) + 1;
    }
  const rowsTotal = rowsByTier.reduce((n, x) => n + x, 0);
  const conjMatch = Object.fromEntries(Object.entries(conjStats).map(([k, v]) => [k, `${v.mapped}/${v.source}`]));
  const meta = {
    version: 2, source: src, target: tgt, top, builtAt: new Date().toISOString(),
    sourceLemmas: lemmas.size, functionalWords: closedWords.size,
    tiers: rowsByTier, rowsByPos, rowsByTierPos, lemmaPairsByTier: pairsByTier, lemmaPairsByPos: pairsByPos, functionalRows,
    forms: Object.keys(forms).length, rows: rowsTotal, droppedClosedClass: dropped, gzBytes: gz.length, conjugatedFormsMapped: conjMatch,
  };
  // só no fim de uma build completa o arquivo final é trocado
  writeAtomic(join(out, `${src}-${tgt}.lexicon.json.gz`), gz);
  writeAtomic(join(out, `${src}-${tgt}.lexicon.meta.json`), JSON.stringify(meta, null, 2) + '\n');
  console.log(JSON.stringify(meta, null, 2));
  dicts.close();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
