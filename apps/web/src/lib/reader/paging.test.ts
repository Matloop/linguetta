import { describe, expect, test } from 'bun:test';
import { createPaging } from './paging.ts';

describe('createPaging', () => {
	const sizes = [0, 1000, 3000, 0, 6000];

	test('mede por capítulo e estima o total', () => {
		const p = createPaging(sizes);
		p.measure(2, 3); // 1000 bytes por página
		expect(p.totalPages).toBe(10);
	});

	test('página do começo de cada capítulo', () => {
		const p = createPaging(sizes);
		p.measure(2, 3);
		expect(p.pageAt(1)).toBe(1);
		expect(p.pageAt(2)).toBe(2);
		expect(p.pageAt(4)).toBe(5);
		expect(p.pageAt(4, 1)).toBe(10);
	});

	test('ir para a página cai no capítulo certo', () => {
		const p = createPaging(sizes);
		p.measure(2, 3);
		expect(p.locatePage(1)).toEqual({ index: 1, fraction: 0 });
		expect(p.locatePage(3)).toEqual({ index: 2, fraction: 1 / 3 });
		expect(p.locatePage(99).index).toBe(4);
	});

	test('ir para a fração', () => {
		const p = createPaging(sizes);
		expect(p.locateFraction(0.5)).toEqual({ index: 4, fraction: 1 / 6 });
		expect(p.locateFraction(1)).toEqual({ index: 4, fraction: 1 });
	});
});
