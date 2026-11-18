// Modo ouvir e o pulo pela barra de tempo, com o player falso cheio de manias.

import { describe, expect, test } from 'bun:test';
import { listenSession } from '../session.ts';
import { checkAll } from './invariants.ts';
import { SIM_LYRICS, Simulator } from './simulator.ts';

const QUIRKY = { seekLagMs: 400, keyframeS: 2, bufferMs: 250, stateLagMs: 60, jitterS: 0.1 };

describe('modo ouvir', () => {
	test('toca a letra inteira sem lacunas e, no fim do vídeo, volta para a escolha', () => {
		const sim = new Simulator({
			player: { ...QUIRKY, duration: 40 },
			session: listenSession(SIM_LYRICS, 'en')
		});
		sim.start();
		expect(sim.view.listen).toBe(true);
		expect(sim.view.totalGaps).toBe(0);

		// Passa da última linha (termina em 25 s) sem fechar o jogo nem pausar.
		sim.runUntilVideo(30);
		expect(sim.view.phase).toBe('playing');
		expect(sim.view.answerable).toBeNull();
		expect(sim.player.state).toBe('playing');

		// O vídeo tem 40 s.
		sim.run(12_000);
		expect(sim.view.mode).toBe('idle');
		expect(checkAll(sim.steps, sim.session)).toEqual([]);
	});

	test('a barra de tempo pula a música', () => {
		const sim = new Simulator({ player: QUIRKY, session: listenSession(SIM_LYRICS, 'en') });
		sim.start();
		sim.run(1_000);
		sim.send({ type: 'seek', to: 20 });
		sim.run(1_500);
		expect(sim.player.trueTime).toBeGreaterThan(20);
		expect(sim.view.shownLine).toBe(6);
		expect(sim.view.phase).toBe('playing');
	});
});

describe('pular no jogo', () => {
	test('pulando para a frente, a linha acesa acompanha e as lacunas de trás ficam puladas', () => {
		const sim = new Simulator({ player: QUIRKY });
		sim.start();
		sim.run(1_000);
		sim.send({ type: 'seek', to: 16.5 });
		sim.run(1_500);
		expect(sim.view.shownLine).toBe(5);
		const behind = sim.view.results.filter((r) => r.line < 5);
		expect(behind.length).toBeGreaterThan(0);
		expect(behind.every((r) => r.skipped)).toBe(true);
		// Puladas não são erros: nada vai para revisar.
		expect(sim.view.wrong).toEqual([]);
		expect(checkAll(sim.steps, sim.session)).toEqual([]);
	});

	test('na espera, pular volta a tocar', () => {
		const sim = new Simulator({ player: QUIRKY });
		sim.start();
		while (sim.view.phase !== 'waiting' && sim.now < 30_000) sim.run(16);
		expect(sim.view.phase).toBe('waiting');
		sim.send({ type: 'seek', to: 13 });
		sim.run(1_500);
		expect(sim.view.phase).toBe('playing');
		expect(sim.player.state).toBe('playing');
		expect(checkAll(sim.steps, sim.session)).toEqual([]);
	});
});
