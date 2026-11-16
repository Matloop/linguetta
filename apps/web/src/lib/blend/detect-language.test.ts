import { describe, expect, test } from 'bun:test';
import { detectBookLanguage } from './detect-language.ts';

const PT =
	'Bilbo não estava nada contente com aquilo, mas ele também sabia que os anões já tinham chegado e que você não podia mais voltar atrás. Então foi até a porta e disse que ela estava aberta para todos os que quisessem entrar. '.repeat(
		5
	);
const EN =
	'Bilbo was not at all happy with that, but he also knew that the dwarves had already arrived and that they could not go back. Then he went to the door and said that it was open for all who would come in. '.repeat(
		5
	);
const ES =
	'Bilbo no estaba nada contento con eso, pero también sabía que los enanos ya habían llegado y que usted no podía volver atrás. Entonces fue hasta la puerta y dijo que estaba abierta para todos los que quisieran entrar. '.repeat(
		5
	);

describe('detectBookLanguage', () => {
	test('metadado em inglês, texto em português: troca para pt', () => {
		expect(detectBookLanguage(PT, 'en')).toBe('pt');
	});
	test('metadado certo: não mexe', () => {
		expect(detectBookLanguage(PT, 'pt')).toBeNull();
		expect(detectBookLanguage(PT, 'pt-BR')).toBeNull();
		expect(detectBookLanguage(EN, 'en-US')).toBeNull();
	});
	test('distingue espanhol de português', () => {
		expect(detectBookLanguage(ES, 'pt')).toBe('es');
		expect(detectBookLanguage(PT, 'es')).toBe('pt');
	});
	test('sem metadado usa o texto', () => {
		expect(detectBookLanguage(EN, null)).toBe('en');
	});
	test('texto curto ou sem palavras reconhecidas: null', () => {
		expect(detectBookLanguage('Bilbo e o anel.', 'en')).toBeNull();
		expect(detectBookLanguage('zzz qqq xxx '.repeat(100), 'en')).toBeNull();
	});
});
