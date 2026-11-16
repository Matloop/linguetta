import { describe, expect, test } from 'bun:test';
import { DEFAULT_SETTINGS, layoutAttributes, parseSettings } from './settings.ts';

describe('parseSettings', () => {
	test('lixo vira o padrão', () => {
		expect(parseSettings(null)).toEqual(DEFAULT_SETTINGS);
		expect(parseSettings('x')).toEqual(DEFAULT_SETTINGS);
	});
	test('limita os números e descarta valores inválidos', () => {
		const s = parseSettings({ lineHeight: 9, margin: -5, font: 'comic', layout: 'duas', justify: true });
		expect(s.lineHeight).toBe(2.2);
		expect(s.margin).toBe(8);
		expect(s.font).toBe('serif');
		expect(s.layout).toBe('duas');
		expect(s.justify).toBe(true);
	});
});

describe('layoutAttributes', () => {
	test('rolagem é scrolled; duas páginas, 2 colunas', () => {
		expect(layoutAttributes({ ...DEFAULT_SETTINGS, layout: 'rolagem' }).flow).toBe('scrolled');
		expect(layoutAttributes({ ...DEFAULT_SETTINGS, layout: 'duas' }).columns).toBe(2);
		expect(layoutAttributes(DEFAULT_SETTINGS).columns).toBe(1);
	});
});
