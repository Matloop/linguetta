import { test } from 'node:test';
import assert from 'node:assert/strict';
import { expandPair, stripStress, tagKey } from '../scripts/build-lexicon.mjs';

const f = (key, tags) => ({ key, tags });
const pairs = (rows) => rows.map(([k, r]) => [k, r[2]]);

test('substantivo: singular e plural, com o tier do par', () => {
  const rows = expandPair({ pos: 'noun', sourceLemma: 'livro', targetLemma: 'libro', sourceForms: [f('livros', 'plural'), f('livrinho', 'diminutive')], targetForms: [f('libri', 'plural'), f('librino', 'diminutive')], rank: 10, tier: 0, targetLang: 'it' });
  assert.deepEqual(rows, [['livro', ['n', 'livro', 'libro', 'libro', 10, 0]], ['livros', ['n', 'livro', 'libri', 'libro', 10, 0]]]);
});

test('adjetivo: gênero e número, com regra italiana quando o dicionário só tem o masculino', () => {
  const rows = expandPair({ pos: 'adj', sourceLemma: 'bonito', targetLemma: 'bello', sourceForms: [f('bonita', 'feminine'), f('bonitos', 'masculine plural'), f('bonitas', 'feminine plural'), f('bonitinho', 'diminutive')], targetForms: [f('belle', 'feminine plural')], rank: 5, tier: 2, targetLang: 'it' });
  assert.deepEqual(pairs(rows), [['bonito', 'bello'], ['bonita', 'bella'], ['bonitos', 'belli'], ['bonitas', 'belle']]);
  assert.deepEqual(new Set(rows.map(([, r]) => r[5])), new Set([2]));
});

test('advérbio: uma linha com pos d', () => {
  const rows = expandPair({ pos: 'adv', sourceLemma: 'sempre', targetLemma: 'sempre', sourceForms: [], targetForms: [], rank: 3, tier: 1 });
  assert.deepEqual(rows, [['sempre', ['d', 'sempre', 'sempre', 'sempre', 3, 1]]]);
});

test('verbo: infinitivo e particípios no tier do lema; sem acento tônico do dicionário', () => {
  const rows = expandPair({ pos: 'verb', sourceLemma: 'cantar', targetLemma: 'cantare', sourceForms: [f('cantado', 'participle past'), f('cantada', 'feminine participle past singular'), f('cantados', 'masculine participle past plural'), f('cantadas', 'feminine participle past plural')], targetForms: [f('cantàre', ''), f('cantàto', 'participle past')], rank: 1, tier: 0, targetLang: 'it' });
  assert.deepEqual(pairs(rows), [['cantar', 'cantare'], ['cantado', 'cantato'], ['cantada', 'cantata'], ['cantados', 'cantati'], ['cantadas', 'cantate']]);
  assert.deepEqual(new Set(rows.map(([, r]) => r[5])), new Set([0]));
});

test('verbo: formas conjugadas casam pelo mesmo conjunto de tags (ordem das tags não importa) e nunca ficam abaixo do tier 1', () => {
  const rows = expandPair({
    pos: 'verb', sourceLemma: 'dizer', targetLemma: 'dire', rank: 1, tier: 0, targetLang: 'it',
    sourceForms: [
      f('diz', 'indicative present singular third-person'),
      f('dizem', 'indicative plural present third-person'),
      f('disseram', 'indicative plural preterite third-person'),
      f('dissermos', 'first-person future plural subjunctive'), // sem equivalente no italiano
      f('dizerem', 'infinitive plural third-person'), // infinitivo pessoal
      f('dizendo', 'gerund'),
    ],
    targetForms: [f('dìce', 'indicative present singular third-person'), f('dìcono', 'indicative plural present third-person'), f('dìssero', 'historic indicative past plural third-person'), f('dicèndo', 'gerund')],
  });
  assert.deepEqual(pairs(rows), [['dizer', 'dire'], ['diz', 'dice'], ['dizem', 'dicono'], ['disseram', 'dissero'], ['dizendo', 'dicendo']]);
  assert.deepEqual(rows.map(([, r]) => r[5]), [0, 1, 1, 1, 1]);
});

test('verbo: tier 2 do lema vale para as formas conjugadas', () => {
  const rows = expandPair({ pos: 'verb', sourceLemma: 'dizer', targetLemma: 'dire', rank: 1, tier: 2, sourceForms: [f('diz', 'indicative present singular third-person')], targetForms: [f('dìce', 'indicative present singular third-person')] });
  assert.deepEqual(rows.map(([, r]) => r[5]), [2, 2]);
});

test('verbo: 1ª pessoa que o dicionário perdeu na 3ª (homógrafas) vale para as duas; 3ª vem primeiro; forma igual à de origem fica', () => {
  const rows = expandPair({
    pos: 'verb', sourceLemma: 'dizer', targetLemma: 'dire', rank: 1, tier: 0,
    sourceForms: [f('disse', 'first-person preterite singular')],
    targetForms: [f('dissi', 'first-person historic past singular'), f('disse', 'historic indicative past singular third-person')],
  });
  assert.deepEqual(pairs(rows), [['dizer', 'dire'], ['disse', 'disse'], ['disse', 'dissi']]);
});

test('verbo: com várias formas na mesma casa, vence a mais frequente do destino', () => {
  const rank = { ha: 5 };
  const rows = expandPair({ pos: 'verb', sourceLemma: 'ter', targetLemma: 'avere', rank: 1, tier: 0, sourceForms: [f('tem', 'indicative present singular third-person')], targetForms: [f('hà', 'indicative present singular third-person'), f('à', 'indicative present singular third-person')], targetRank: (w) => rank[w] });
  assert.deepEqual(pairs(rows), [['ter', 'avere'], ['tem', 'ha']]);
});

test('tagKey: vocabulário comparável entre pt e it', () => {
  assert.equal(tagKey('indicative preterite singular third-person'), tagKey('historic indicative past singular third-person'));
  assert.equal(tagKey('first-person historic past singular'), tagKey('first-person preterite singular'));
  assert.equal(tagKey('first-person present singular'), tagKey('first-person indicative present singular'));
  assert.notEqual(tagKey('first-person present singular'), tagKey('first-person present singular subjunctive'));
  for (const tags of ['infinitive plural third-person', 'participle past', 'first-person future singular subjunctive', 'imperative negative second-person singular', 'first-person historic past singular traditional', 'alternative', '']) {
    assert.equal(tagKey(tags), null, tags);
  }
});

test('forma ausente no destino é pulada; forma igual à de origem fica para o consumidor decidir', () => {
  assert.deepEqual(expandPair({ pos: 'noun', sourceLemma: 'cidade', targetLemma: 'città', sourceForms: [f('cidades', 'plural')], targetForms: [], rank: 1 }).map(([k]) => k), ['cidade']);
  assert.deepEqual(expandPair({ pos: 'noun', sourceLemma: 'sala', targetLemma: 'sala', sourceForms: [], targetForms: [], rank: 1 }).map(([k, r]) => [k, r[2]]), [['sala', 'sala']]);
});

test('stripStress mantém o acento da última sílaba e tira o dos monossílabos do dicionário', () => {
  assert.equal(stripStress('cantàto'), 'cantato');
  assert.equal(stripStress('città'), 'città');
  assert.equal(stripStress('hà'), 'ha');
  assert.equal(stripStress('dà'), 'dà');
  assert.equal(stripStress('è'), 'è');
});
