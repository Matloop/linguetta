// Numeração de páginas de um EPUB reflowável. O livro não tem páginas fixas: estimamos pela
// proporção entre o tamanho do capítulo e quantas páginas ele ocupa na tela agora (medido
// a cada capítulo aberto). Muda com a letra e as margens, como numa tela de e-reader.

/** Bytes por página até medir o primeiro capítulo. */
const DEFAULT_BYTES_PER_PAGE = 2400;

export type Paging = ReturnType<typeof createPaging>;

/** `sizes`: peso de cada seção do livro (0 para as que não entram na leitura). */
export function createPaging(sizes: number[]) {
	const total = sizes.reduce((a, b) => a + b, 0);
	let bytesPerPage = DEFAULT_BYTES_PER_PAGE;

	const before = (index: number) => sizes.slice(0, index).reduce((a, b) => a + b, 0);

	return {
		total,
		/** O capítulo `index` ocupa `pages` páginas na tela agora. */
		measure(index: number, pages: number) {
			const size = sizes[index] ?? 0;
			if (size > 0 && pages >= 1) bytesPerPage = size / pages;
		},
		get bytesPerPage() {
			return bytesPerPage;
		},
		get totalPages() {
			return total ? Math.max(1, Math.round(total / bytesPerPage)) : 1;
		},
		/** Página (1…total) do ponto `fraction` (0–1) da seção `index`. */
		pageAt(index: number, fraction = 0) {
			if (!total) return 1;
			const bytes = before(index) + Math.min(1, Math.max(0, fraction)) * (sizes[index] ?? 0);
			return Math.min(this.totalPages, Math.floor(bytes / bytesPerPage) + 1);
		},
		/** Seção e fração dentro dela para a página `page` (1…total). */
		locatePage(page: number) {
			const p = Math.min(this.totalPages, Math.max(1, Math.round(page)));
			return this.locateFraction(((p - 1) * bytesPerPage) / (total || 1));
		},
		/** Seção e fração dentro dela para a fração `f` (0–1) do livro. */
		locateFraction(f: number) {
			let rest = Math.min(1, Math.max(0, f)) * total;
			let last = 0;
			for (let i = 0; i < sizes.length; i++) {
				if (sizes[i] <= 0) continue;
				last = i;
				if (rest < sizes[i]) return { index: i, fraction: rest / sizes[i] };
				rest -= sizes[i];
			}
			return { index: last, fraction: 1 };
		}
	};
}
