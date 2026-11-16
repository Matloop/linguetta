/**
 * Gera o áudio das lições com o OmniVoice local (omnivoice.cpp, só CPU serve) e grava em
 * `static/curso/audio/<idioma>/`. Um .opus por fala/frase e um `dialogo-<n>.opus` por lição.
 * Retomável: o que já existe é pulado. A voz é fixa, clonada de `curso-audio/voz-ref.wav`.
 *
 *   OMNIVOICE_DIR=/caminho/omnivoice.cpp bun scripts/curso-audio.ts [idioma] [--only <n,n>]
 *
 * O OMNIVOICE_DIR precisa ter `build/omnivoice-tts` e `models/` com os dois GGUF
 * (omnivoice-base-Q8_0 e omnivoice-tokenizer-F32, de Serveurperso/OmniVoice-GGUF).
 */
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { dialogAudioUrl, lineAudioUrl, spoken } from '../src/lib/curso/audio.ts';
import { COURSES } from '../src/lib/curso/index.ts';

const args = process.argv.slice(2);
const language = args.find((a) => !a.startsWith('--') && !/^[\d,]+$/.test(a)) ?? 'it';
const onlyArg = args.indexOf('--only');
const only = onlyArg >= 0 ? new Set(args[onlyArg + 1].split(',').map(Number)) : null;

const omni = process.env.OMNIVOICE_DIR;
if (!omni) throw new Error('Defina OMNIVOICE_DIR (pasta do omnivoice.cpp).');
const here = import.meta.dir;
const staticDir = resolve(here, '../static');
const outDir = join(staticDir, 'curso/audio', language);
const tmp = join(outDir, '.tmp');
mkdirSync(tmp, { recursive: true });

const course = Object.values(COURSES).find((c) => c.language === language);
if (!course) throw new Error(`Curso não encontrado: ${language}`);

function fileOf(url: string) {
	return join(staticDir, url.replace(/^\//, ''));
}

function run(cmd: string[], stdin?: string) {
	const p = Bun.spawnSync(cmd, { stdin: stdin ? Buffer.from(stdin) : undefined, stderr: 'pipe' });
	if (p.exitCode !== 0) throw new Error(`${cmd[0]} falhou: ${p.stderr.toString().slice(-400)}`);
}

function synth(text: string, dest: string) {
	const wav = join(tmp, 'fala.wav');
	run(
		[
			join(omni, 'build/omnivoice-tts'),
			'--model', join(omni, 'models/omnivoice-base-Q8_0.gguf'),
			'--codec', join(omni, 'models/omnivoice-tokenizer-F32.gguf'),
			'--lang', language,
			'--device', 'CPU',
			'--ref-wav', join(here, 'curso-audio/voz-ref.wav'),
			'--ref-text', join(here, 'curso-audio/voz-ref.txt'),
			'--seed', '1',
			'--steps', process.env.OMNIVOICE_STEPS ?? '32',
			'-o', wav,
		],
		text,
	);
	run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-c:a', 'libopus', '-b:a', '32k', dest]);
	rmSync(wav, { force: true });
}

// Textos únicos por lição, na ordem em que aparecem.
const texts = new Map<string, string>(); // url -> texto falado
const lessons = course.lessons.filter((l) => !only || only.has(l.no));
for (const l of lessons) {
	const add = (t?: string) => {
		if (!t) return;
		const s = spoken(t);
		const url = lineAudioUrl(language, s);
		const prev = texts.get(url);
		if (prev !== undefined && prev !== s) throw new Error(`Colisão de nome: "${prev}" e "${s}"`);
		texts.set(url, s);
	};
	l.lines?.forEach((x) => add(x.it));
	for (const s of l.steps) {
		if (s.kind === 'leitura')
			for (const b of s.blocks) if (b.type === 'exemplos') b.items.forEach((e) => add(e.it));
		if (s.kind === 'frases') s.items.forEach((e) => add(e.it));
		if (s.kind === 'traduzir') s.items.forEach((e) => add(e.it));
	}
}

const todo = [...texts].filter(([url]) => !existsSync(fileOf(url)));
console.log(`${texts.size} textos, ${todo.length} a gerar.`);
const t0 = Date.now();
todo.forEach(([url, text], i) => {
	const t = Date.now();
	synth(text, fileOf(url));
	const eta = (((Date.now() - t0) / (i + 1)) * (todo.length - i - 1)) / 60000;
	console.log(`[${i + 1}/${todo.length}] ${((Date.now() - t) / 1000).toFixed(0)}s ~${eta.toFixed(0)}min  ${text}`);
});

// Diálogo inteiro: as falas em sequência, com pausa curta entre elas e mais longa nos blocos novos.
for (const l of lessons) {
	if (!l.lines?.length) continue;
	const dest = fileOf(dialogAudioUrl(language, l.no));
	if (existsSync(dest)) continue;
	const list: string[] = [];
	const parts: string[] = [];
	const chain: string[] = [];
	l.lines.forEach((x, i) => {
		list.push('-i', fileOf(lineAudioUrl(language, x.it)));
		const gap = i === 0 ? 0 : x.sep ? 1.0 : 0.45;
		if (gap) {
			chain.push(`anullsrc=r=48000:cl=mono,atrim=0:${gap}[s${i}]`);
			parts.push(`[s${i}]`);
		}
		chain.push(`[${i}:a]aresample=48000[v${i}]`);
		parts.push(`[v${i}]`);
	});
	const graph = `${chain.join(';')};${parts.join('')}concat=n=${parts.length}:v=0:a=1[out]`;
	run(['ffmpeg', '-y', '-loglevel', 'error', ...list, '-filter_complex', graph, '-map', '[out]', '-c:a', 'libopus', '-b:a', '32k', dest]);
	console.log(`diálogo ${l.no}: ${l.lines.length} falas`);
}

rmSync(tmp, { recursive: true, force: true });
writeFileSync(join(outDir, '.gerado'), new Date().toISOString() + '\n');
console.log('Pronto.');
