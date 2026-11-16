import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// Os léxicos do blend de livro (.gz) entram no pacote do servidor como dado (lib/server/lexicon.ts).
	assetsInclude: ['**/*.lexicon.json.gz'],
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ regions: ['gru1'] })
		})
	]
});
