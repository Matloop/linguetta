// Carrega o léxico de um par de línguas (lib/blend/lexicon/<origem>-<alvo>.lexicon.json.gz).
// O arquivo entra no pacote do servidor como dado embutido (?inline), então funciona na
// função da Vercel sem ler disco; cada par vira um pedaço que só carrega quando é pedido.
// O mapa descompactado fica na memória da função.

import { gunzipSync } from 'node:zlib';
import { languageProfile } from '@linguetta/language';
import { parseLexicon, type Lexicon } from '#lib/blend/lexicon.ts';

const files = import.meta.glob<string>('../blend/lexicon/*.lexicon.json.gz', {
	query: '?inline',
	import: 'default'
});

const cache = new Map<string, Promise<Lexicon>>();

/** O léxico do par, ou null se não há arquivo para ele. Pares iguais (pt e pt-BR) dividem o arquivo. */
export async function loadLexicon(sourceTag: string, targetTag: string): Promise<Lexicon | null> {
	const pair = `${languageProfile(sourceTag).base}-${languageProfile(targetTag).base}`;
	const load = files[`../blend/lexicon/${pair}.lexicon.json.gz`];
	if (!load) return null;
	let lexicon = cache.get(pair);
	if (!lexicon) {
		lexicon = load().then((url) => {
			const bytes = Buffer.from(url.slice(url.indexOf(',') + 1), 'base64');
			return parseLexicon(JSON.parse(gunzipSync(bytes).toString('utf8')));
		});
		// Falha de leitura não fica guardada: a próxima chamada tenta de novo.
		lexicon.catch(() => cache.delete(pair));
		cache.set(pair, lexicon);
	}
	return lexicon;
}
