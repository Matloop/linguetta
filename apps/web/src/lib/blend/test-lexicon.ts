// Léxico mínimo (v2) feito à mão para os testes do blend (o de verdade é gerado offline).
import type { Lexicon } from './lexicon.ts';

/** Linha: [classe, lema, forma-alvo, lema-alvo, posto, tier]. */
export const FIXTURE: Lexicon = {
	version: 2,
	source: 'pt',
	target: 'it',
	forms: {
		casa: [['n', 'casa', 'casa', 'casa', 150, 0]], // igual ao texto: sem troca
		rio: [['n', 'rio', 'fiume', 'fiume', 2100, 0]], // 3 letras: só no último degrau
		riacho: [['n', 'riacho', 'ruscello', 'ruscello', 2100, 0]],
		riachos: [['n', 'riacho', 'ruscelli', 'ruscello', 2100, 0]],
		janela: [['n', 'janela', 'finestra', 'finestra', 1800, 0]],
		olhou: [['v', 'olhar', 'guardò', 'guardare', 900, 1]],
		grande: [['a', 'grande', 'grande', 'grande', 120, 0]],
		tempo: [['n', 'tempo', 'tempo', 'tempo', 90, 0]],
		cheia: [['a', 'cheio', 'piena', 'pieno', 0, 0]],
		fria: [['a', 'frio', 'fredda', 'freddo', 1500, 0]],
		mar: [['n', 'mar', 'mare', 'mare', 800, 0]],
		barco: [['n', 'barco', 'barca', 'barca', 3000, 0]],
		pedra: [['n', 'pedra', 'pietra', 'pietra', 250, 0]], // comum: cai com o posto até 300
		estrada: [['n', 'estrada', 'strada', 'strada', 90, 0]], // muito comum: cai com o posto até 100
		cidade: [['n', 'cidade', 'città', 'città', 400, 1]],
		colina: [['n', 'colina', 'collina', 'collina', 2500, 2]], // tradução não confirmada
		para: [['f', 'para', 'per', 'per', 12, 3]], // palavra de ligação
		como: [['f', 'como', 'come', 'come', 20, 3]]
	}
};
