import { describe, expect, test } from 'bun:test';
import { checkCloze, fillCloze, isRightAnswer } from './answer.ts';

describe('isRightAnswer', () => {
	test('ignora caixa e espaços', () => {
		expect(isRightAnswer('  Sono ', 'sono')).toBe(true);
		expect(isRightAnswer('MI  DISPIACE', 'mi dispiace')).toBe(true);
	});

	test('acento conta', () => {
		expect(isRightAnswer('e', 'è')).toBe(false);
		expect(isRightAnswer('È', 'è')).toBe(true);
		expect(isRightAnswer('perche', 'perché')).toBe(false);
	});

	test('apóstrofo reto e curvo valem o mesmo', () => {
		expect(isRightAnswer('c’è', "c'è")).toBe(true);
		expect(isRightAnswer("c'è", 'c’è')).toBe(true);
		expect(isRightAnswer('l`acqua', "l'acqua")).toBe(true);
	});

	test('acento composto (NFD) bate com o pronto (NFC)', () => {
		expect(isRightAnswer('è', 'è')).toBe(true);
	});

	test('vazio não acerta', () => {
		expect(isRightAnswer('', 'ne')).toBe(false);
	});
});

const item = {
	pt: 'O pão acabou, sinto muito.',
	parts: ['Il pane è ', null, ', mi ', null, '.'],
	answers: ['finito', 'dispiace']
};

test('checkCloze marca cada lacuna', () => {
	expect(checkCloze(item, ['Finito', 'dispiaci'])).toEqual([true, false]);
	expect(checkCloze(item, ['finito'])).toEqual([true, false]);
});

test('fillCloze põe as respostas no lugar', () => {
	expect(fillCloze(item)).toBe('Il pane è finito, mi dispiace.');
});
