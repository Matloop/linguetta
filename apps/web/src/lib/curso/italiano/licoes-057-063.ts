import type { Lesson, Unit } from '../types.ts';

// Lições 57–63: férias de agosto. A empresa do Matteo fecha duas semanas; ele aluga um carro e leva
// Rafael e Chiara para acampar no Gargano (Vieste, Campeggio La Pineta, sr. Michele) pela A14, com o
// Rafael de navegador errando o caminho. Praia (spiaggia libera × stabilimento). Depois, com Giulia e
// Luca, as Dolomitas (Canazei, Marmolada, subida a um rifugio) e o Ferragosto na festa do vilarejo.
// Ver docs/agents/curso-assimil-mapa.md.

const licao57: Lesson = {
	no: 57,
	kind: 'licao',
	title: 'Si parte!',
	titlePt: 'Pé na estrada!',
	lines: [
		{
			it: "Ragazzi, sono le sei! La macchina è qui sotto. Siete pronti?",
			pt: "Gente, são seis horas! O carro está aqui embaixo. Vocês estão prontos?",
			note: "Chegou agosto, e a empresa do Matteo fecha para as férias. Ele alugou um carro para levar os amigos ao litoral."
		},
		{
			it: "Quasi! Finalmente sono riuscito a chiudere la valigia.",
			pt: "Quase! Finalmente consegui fechar a mala.",
			lit: "Quase! Finalmente sou conseguido a fechar a mala.",
			note: "*Riuscire a* (conseguir, lição 39) faz o passado com *essere*, e o particípio concorda com o sujeito: *sono riuscito*, *Chiara è riuscita*, *siamo riusciti*."
		},
		{
			it: "Bravo! E tu, Chiara? Quanta roba! Hai preso tutta la casa?",
			pt: "Muito bem! E você, Chiara? Quanta coisa! Pegou a casa inteira?",
			note: "*La roba* = as coisas, os pertences, a tralha. É uma palavra da fala, sempre no singular: *quanta roba*, *la mia roba*, *roba da mangiare* (coisa de comer)."
		},
		{
			it: "Non è tutta roba mia! La borsa frigo è per tutti, e la tenda ce l'ha prestata Luca.",
			pt: "Não é tudo meu! A bolsa térmica é de todos, e a barraca foi o Luca que emprestou para nós.",
			lit: "Não é toda coisa minha! A bolsa geladeira é para todos, e a barraca nos a emprestou Luca.",
			note: "*Ce l'ha prestata* = emprestou-a para nós: *ci* + *la* viram *ce la*, e *la* perde a vogal antes de *ha*. São os pronomes combinados do bloco anterior. *Prestata* concorda com *la tenda*."
		},
		{
			it: "Va bene, ma il bagagliaio è piccolo: è una macchina a noleggio, non un camion!",
			pt: "Tudo bem, mas o porta-malas é pequeno: é um carro alugado, não um caminhão!",
			lit: "Vai bem, mas o bagageiro é pequeno: é um carro a aluguel, não um caminhão!",
			note: "*Noleggiare* = alugar um carro, uma bicicleta, um barco; *una macchina a noleggio* = um carro alugado. Casa e apartamento se alugam com *affittare*."
		},
		{
			it: "Dai, non te la prendere, Matteo. Mettiamo un po' di roba sui sedili.",
			pt: "Ah, não fica bravo, Matteo. A gente põe um pouco das coisas nos bancos.",
			lit: "Vai, não te a pegues, Matteo. Pomos um pouco de coisa sobre os assentos.",
			note: "*Prendersela* = ficar chateado, se ofender, levar a mal. É um reflexivo com *la*, que não se refere a nada: *me la prendo, te la prendi, se la prende...* No imperativo negativo, *non te la prendere* ou *non prendertela*."
		},
		{
			it: "Io non me la prendo con voi, me la prendo con questo bagagliaio!",
			pt: "Eu não estou bravo com vocês, estou bravo com este porta-malas!",
			lit: "Eu não me a pego com vocês, me a pego com este bagageiro!",
			note: "*Prendersela con qualcuno* = ficar bravo com alguém, descontar em alguém."
		},
		{
			it: "Allora, i documenti. Io ho la patente e la carta d'identità. Rafael, il passaporto?",
			pt: "Então, os documentos. Eu tenho a carteira de motorista e a identidade. Rafael, o passaporte?",
			note: "Falso amigo: *la patente* é a carteira de motorista. *La carta d'identità* é a carteira de identidade."
		},
		{
			it: "Eccolo: nello zaino, sotto il computer. Come sempre!",
			pt: "Aqui está: na mochila, embaixo do computador. Como sempre!",
			note: "Desde Nápoles, o passaporte do Rafael mora no mesmo lugar (lições 15 e 17)."
		},
		{
			it: "E io? Quando guido?",
			pt: "E eu? Quando eu dirijo?",
			note: "*Guidare* = dirigir (um carro). Também é guiar, conduzir."
		},
		{
			it: "Tu non guidi: sul contratto del noleggio ci siamo solo io e Chiara. Tu fai il navigatore.",
			pt: "Você não dirige: no contrato do aluguel só estamos eu e a Chiara. Você é o navegador.",
			lit: "Tu não diriges: sobre o contrato do aluguel aí somos só eu e Chiara. Tu fazes o navegador.",
			note: "*Fare il navigatore*, como *fare la maestra* (lição 48): cumprir um papel. *Il navigatore* é também o GPS do carro."
		},
		{
			it: "Prima però passiamo dal benzinaio: il serbatoio è quasi vuoto.",
			pt: "Mas antes a gente passa no posto: o tanque está quase vazio.",
			lit: "Antes porém passamos do frentista: o tanque é quase vazio.",
			note: "*Il benzinaio* é o frentista e, por extensão, o posto de gasolina. *Passare da* = passar em, dar uma passada em."
		},
		{
			it: "Al self-service costa meno. Faccio io il pieno!",
			pt: "No autoatendimento sai mais barato. Eu encho o tanque!",
			lit: "No self-service custa menos. Faço eu o cheio!",
			note: "*Fare il pieno* = encher o tanque. Na Itália, muitos postos têm bombas *self-service* (você mesmo abastece, e paga menos) e bombas *servito*, com frentista."
		},
		{
			it: "Sessantotto euro! A Napoli sono riuscito a spendere meno in tre giorni!",
			pt: "Sessenta e oito euros! Em Nápoles eu consegui gastar menos em três dias!"
		},
		{
			it: "Benvenuto in Italia: qui la benzina è cara. Allora, tutti in macchina? Cinture allacciate?",
			pt: "Bem-vindo à Itália: aqui a gasolina é cara. Então, todo mundo no carro? Cintos afivelados?",
			note: "*La benzina* = a gasolina. *La cintura* (de segurança) = o cinto; *allacciare* = afivelar, amarrar."
		},
		{
			it: "Sì! Si parte! Destinazione: il mare del Gargano!",
			pt: "Sim! Pé na estrada! Destino: o mar do Gargano!",
			lit: "Sim! Se parte! Destinação: o mar do Gargano!",
			note: "*Si parte!* = vamos partir, vamos embora, com o *si* impessoal da lição 27. O Gargano é o “esporão” da bota italiana, na Puglia, com praias e pinheiros à beira-mar."
		},
		{
			it: "Ehm... ragazzi? Ho lasciato gli occhiali da sole sul tavolo della cucina.",
			pt: "Hã... gente? Deixei os óculos de sol na mesa da cozinha.",
			note: "*Gli occhiali* só existem no plural, como *le forbici* (lição 50). *Occhiali da sole*: o *da* indica a finalidade, como em *scarpe da ginnastica*."
		},
		{
			it: "Non ci posso credere!",
			pt: "Não acredito!",
			lit: "Não nisso posso crer!"
		},
		{
			it: "Ieri Chiara non è riuscita a dormire: troppa emozione!",
			pt: "Ontem a Chiara não conseguiu dormir: emoção demais!",
			sep: true,
			note: "*Riuscita*: concorda com Chiara."
		},
		{
			it: "Non prendertela con me: non è colpa mia!",
			pt: "Não desconta em mim: a culpa não é minha!",
			lit: "Não te a pegar com mim: não é culpa minha!"
		},
		{
			it: "In cantina c'è un sacco di roba vecchia.",
			pt: "No porão tem um monte de coisa velha.",
			note: "*Un sacco di* (um saco de) = um monte de, muito. *La cantina* é o porão do prédio, onde cada apartamento tem um depósito."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Prendersela, riuscire e roba',
			blocks: [
				{
					type: 'p',
					text: "*Prendersela* parece complicado, mas é só um verbo reflexivo com um *la* grudado que não se refere a nada concreto. O pronome reflexivo muda com a pessoa; o *la* fica sempre igual. Quem se chateia com alguém usa *con*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "me la **pren**do, te la **pren**di, se la **pren**de", pt: "fico chateado, você fica, ele fica" },
						{ it: "Non te la pren**de**re! / Non pren**der**tela!", pt: "Não leve a mal! Não fica bravo!" },
						{ it: "Se l'è **pre**sa con me.", pt: "Ele ficou bravo comigo." }
					]
				},
				{
					type: 'p',
					text: "No passado, como todo reflexivo, vai com *essere*, e o particípio concorda com o *la*: *se l'è presa* (ele ou ela), *me la sono presa*. Não se assuste: por enquanto, basta reconhecer."
				},
				{ type: 'h', text: 'Riuscire no passado' },
				{
					type: 'p',
					text: "*Riuscire a* faz o passado com *essere*, como *andare* e *venire*. O particípio *riuscito* concorda com quem conseguiu: *sono riuscito* (Rafael), *non è riuscita* (Chiara), *siamo riusciti* (todos)."
				},
				{
					type: 'dica',
					text: "*La roba* é a palavra coringa para “coisas”, “tralha”: *quanta roba!*, *prendi la tua roba*, *roba da matti!* (coisa de louco!). E *un sacco di* é o nosso “um monte de”: *un sacco di soldi*, *un sacco di gente*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Antes de pegar a estrada',
			blocks: [
				{
					type: 'p',
					text: "Para dirigir na Itália, os italianos levam *la patente* e *la carta d'identità*; no carro fica *il libretto*, o documento do veículo. Quem tem carteira brasileira pode dirigir com ela por um tempo, de preferência acompanhada da permissão internacional; mas no carro alugado só dirige quem está no contrato."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il benzi**na**io", pt: "o posto de gasolina, o frentista" },
						{ it: "fare il **pie**no", pt: "encher o tanque" },
						{ it: "la ben**zi**na, il **die**sel", pt: "a gasolina, o diesel" },
						{ it: "il baga**gli**aio", pt: "o porta-malas", pron: "ba-ga-lhái-o" },
						{ it: "la cin**tu**ra", pt: "o cinto de segurança" }
					]
				},
				{
					type: 'dica',
					text: "Falso amigo à vista: *la patente* é a carteira de motorista. E *il carro*, lembre, é a carroça; carro é *la macchina*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Finalmente sono riuscito a trovare le chiavi.", pt: "Finalmente consegui achar as chaves." },
				{ it: "Non te la prendere: è solo un gioco!", pt: "Não fica chateado: é só um jogo!" },
				{ it: "Chiara se la prende sempre con il computer.", pt: "A Chiara sempre desconta no computador." },
				{ it: "Quanta roba! Dove la mettiamo?", pt: "Quanta coisa! Onde a gente põe?" },
				{ it: "Matteo ha noleggiato una macchina per le vacanze.", pt: "O Matteo alugou um carro para as férias." },
				{ it: "Prima di partire facciamo il pieno.", pt: "Antes de sair, a gente enche o tanque." },
				{ it: "Hai la patente? Sì, ma non guido da un anno.", pt: "Você tem carteira de motorista? Tenho, mas não dirijo há um ano." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "As meninas conseguiram chegar a tempo.", parts: ["Le ragazze sono ", null, " ad arrivare in tempo."], answers: ["riuscite"] },
				{ pt: "Não fica bravo com o Rafael!", parts: ["Non prendertela ", null, " Rafael!"], answers: ["con"] },
				{ pt: "Eu não estou chateado.", parts: ["Io non me la ", null, "."], answers: ["prendo"] },
				{ pt: "Esta tralha é minha.", parts: ["Questa ", null, " è mia."], answers: ["roba"] },
				{ pt: "O Matteo dirige até Pescara.", parts: ["Matteo ", null, " fino a Pescara."], answers: ["guida"] }
			]
		}
	]
};

const licao58: Lesson = {
	no: 58,
	kind: 'licao',
	title: "In autostrada",
	titlePt: 'Na autoestrada',
	lines: [
		{
			it: "Che traffico! Siamo fermi da mezz'ora.",
			pt: "Que trânsito! Estamos parados há meia hora.",
			note: "*Da* + presente para o que ainda continua, como na lição 43 (*abito qui da un anno*): *siamo fermi da mezz'ora*."
		},
		{
			it: "È il primo sabato di agosto: mezza Italia parte per le vacanze.",
			pt: "É o primeiro sábado de agosto: meia Itália sai de férias.",
			note: "*Le vacanze* (sempre no plural) = as férias. *Andare in vacanza*, *partire per le vacanze*."
		},
		{
			it: "Ve l'ho detto: prima di partire bisogna guardare il traffico sull'app!",
			pt: "Eu falei para vocês: antes de sair é preciso olhar o trânsito no aplicativo!",
			lit: "Vos o disse: antes de partir precisa olhar o tráfego sobre o app!",
			note: "*Prima di* + infinitivo = antes de: *prima di partire*. *Ve l'ho detto* = *vi* + *lo*, pronomes combinados; *bisogna* + infinitivo, como na lição 54."
		},
		{
			it: "L'ho guardato prima della partenza! L'incidente c'è stato dopo.",
			pt: "Eu olhei antes da partida! O acidente aconteceu depois.",
			lit: "O olhei antes da partida! O acidente aí é estado depois.",
			note: "Com um substantivo, *prima di* se junta ao artigo: *prima della partenza*, *prima del pranzo*, *prima delle vacanze*. *C'è stato* = houve, aconteceu: o passado de *c'è*."
		},
		{
			it: "Un incidente? È grave?",
			pt: "Um acidente? É grave?"
		},
		{
			it: "No, per fortuna niente di grave. Ma c'è una coda di dodici chilometri.",
			pt: "Não, por sorte nada grave. Mas tem uma fila de doze quilômetros.",
			lit: "Não, por fortuna nada de grave. Mas há uma cauda de doze quilômetros.",
			note: "*La coda* (cauda) é a fila de carros, e também a fila de pessoas: *fare la coda* = fazer fila. *Niente di* + adjetivo: *niente di grave*, *niente di nuovo*."
		},
		{
			it: "Dodici chilometri? È terribile!",
			pt: "Doze quilômetros? Que horror!",
			lit: "Doze quilômetros? É terrível!"
		},
		{
			it: "Terribile è questo caldo: l'aria condizionata non funziona!",
			pt: "Horrível é este calor: o ar-condicionado não funciona!",
			lit: "Terrível é este calor: o ar condicionado não funciona!",
			note: "*Terribile* se usa à vontade na fala, para qualquer exagero: *un caldo terribile*, *ho una fame terribile*. Para uma criança muito levada, *un bambino terribile*."
		},
		{
			it: "Basta. Alla prossima uscita usciamo e prendiamo la statale. Rafael, tu mi guidi con il telefono.",
			pt: "Chega. Na próxima saída a gente sai e pega a estrada sem pedágio. Rafael, você me guia pelo celular.",
			lit: "Basta. À próxima saída saímos e pegamos a estatal. Rafael, tu me guias com o telefone.",
			note: "*La statale* (*strada statale*) é a estrada comum, sem pedágio. Aqui *guidare* tem o sentido de guiar uma pessoa: *mi guidi* = você me guia."
		},
		{
			it: "Agli ordini! Allora... alla rotonda, la seconda a destra. Poi sempre dritto.",
			pt: "Às ordens! Então... na rotatória, a segunda à direita. Depois sempre reto.",
			note: "*La rotonda* = a rotatória. *Sempre dritto* = sempre em frente."
		},
		{
			it: "Rafael, quel cartello dice «Campobasso». Noi andiamo a Vieste, al mare!",
			pt: "Rafael, aquela placa diz “Campobasso”. Nós vamos para Vieste, para a praia!",
			note: "Campobasso fica no interior, nas montanhas do Molise; Vieste, na ponta do Gargano, à beira-mar. Exatamente o lado oposto."
		},
		{
			it: "Ops... ho sbagliato strada?",
			pt: "Ops... errei o caminho?",
			lit: "Ops... errei estrada?",
			note: "*Sbagliare* = errar, enganar-se. *Sbagliare strada* = pegar o caminho errado; *sbagliare numero* = ligar para o número errado. O particípio é regular: *sbagliato*."
		},
		{
			it: "Sì, caro navigatore: il mare è dall'altra parte!",
			pt: "Sim, caro navegador: o mar fica do outro lado!"
		},
		{
			it: "Scusate! Il telefono dice «ricalcolo percorso»...",
			pt: "Desculpem! O celular está dizendo “recalculando a rota”...",
			lit: "Desculpem! O telefone diz “recálculo percurso”..."
		},
		{
			it: "Va bene, niente drammi. Prima di tornare indietro, ci fermiamo a mangiare qualcosa?",
			pt: "Tudo bem, sem drama. Antes de voltar, a gente para para comer alguma coisa?",
			lit: "Vai bem, nada dramas. Antes de voltar atrás, nos paramos a comer qualquer coisa?",
			note: "*Tornare indietro* = voltar (pelo mesmo caminho). *Fermarsi* = parar (o carro, a pessoa); *fermarsi a* + infinitivo = parar para."
		},
		{
			it: "Sì, in quel paese c'è un bar. Ma dopo il pranzo il navigatore lo faccio io!",
			pt: "Sim, naquele vilarejo tem um bar. Mas depois do almoço quem navega sou eu!",
			lit: "Sim, naquele vilarejo há um bar. Mas depois do almoço o navegador o faço eu!",
			note: "*Il paese* é o país, mas também a cidadezinha, o vilarejo. *Dopo il pranzo*: com *dopo*, nada de *di* antes do artigo."
		},
		{
			it: "E io? Che cosa faccio?",
			pt: "E eu? O que eu faço?"
		},
		{
			it: "Tu dormi. È più sicuro per tutti!",
			pt: "Você dorme. É mais seguro para todo mundo!"
		},
		{
			it: "Prima di andare a letto, Chiara spegne sempre il telefono.",
			pt: "Antes de ir para a cama, a Chiara sempre desliga o celular.",
			sep: true,
			note: "*Spegnere* = desligar, apagar; o contrário é *accendere*."
		},
		{
			it: "Prima delle vacanze Matteo ha lavorato tantissimo.",
			pt: "Antes das férias o Matteo trabalhou muitíssimo."
		},
		{
			it: "Scusi, ho sbagliato numero!",
			pt: "Desculpe, liguei para o número errado!",
			lit: "Desculpe, errei número!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Prima di e prima della',
			blocks: [
				{
					type: 'p',
					text: "“Antes de” é *prima di*. Com um verbo, o verbo fica no infinitivo, como em português. Com um substantivo, o *di* se junta ao artigo, como em todas as preposições articuladas (lição 21)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**pri**ma di par**ti**re", pt: "antes de partir" },
						{ it: "**pri**ma di tor**na**re in**die**tro", pt: "antes de voltar" },
						{ it: "**pri**ma della par**ten**za", pt: "antes da partida" },
						{ it: "**pri**ma del **pran**zo, **pri**ma delle va**can**ze", pt: "antes do almoço, antes das férias" },
						{ it: "**pri**ma di me, **pri**ma di **te**", pt: "antes de mim, antes de você" }
					]
				},
				{
					type: 'p',
					text: "Sozinho, *prima* quer dizer “antes” ou “primeiro”: *prima passiamo dal benzinaio* (lição 57). O contrário é *dopo*, que dispensa o *di* antes de substantivo: *dopo il pranzo*, *dopo cena*. Antes de pronome, porém, *dopo di me*."
				},
				{ type: 'h', text: 'Sbagliare' },
				{
					type: 'p',
					text: "*Sbagliare* é errar, se enganar. Ele aparece colado em várias palavras sem artigo: *sbagliare strada*, *sbagliare numero*, *sbagliare porta*. O adjetivo é *sbagliato*: *la strada sbagliata*, o caminho errado. E o erro é *lo sbaglio*: *scusa, è stato uno sbaglio*."
				},
				{
					type: 'dica',
					text: "Para assumir a culpa com elegância: *Ho sbagliato io, scusate!* E para tranquilizar quem errou: *Capita!* (acontece!)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A autoestrada italiana',
			blocks: [
				{
					type: 'p',
					text: "A *autostrada* italiana é quase toda paga. Você pega um bilhete na entrada, no *casello* (a praça de pedágio), e paga na saída, conforme os quilômetros percorridos. Quem viaja muito usa o *Telepass*, uma tag que abre a cancela sozinha. O limite é de 130 km/h."
				},
				{
					type: 'p',
					text: "As autoestradas têm números: a A1 liga Milão a Nápoles, passando por Bolonha e Florença; a A14, a *Adriatica*, desce de Bolonha pela costa até Taranto. É a estrada dos três amigos rumo ao Gargano."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il ca**sel**lo", pt: "a praça de pedágio" },
						{ it: "il pe**dag**gio", pt: "o pedágio (o valor)" },
						{ it: "l'u**sci**ta, l'en**tra**ta", pt: "a saída, a entrada" },
						{ it: "l'area di ser**vi**zio", pt: "o posto de serviço, com bar e restaurante" },
						{ it: "la **co**da", pt: "a fila, o engarrafamento" }
					]
				},
				{
					type: 'p',
					text: "No primeiro fim de semana de agosto, milhões de italianos saem de férias ao mesmo tempo. Os jornais chamam isso de *l'esodo estivo*, o êxodo de verão, e no fim do mês vem *il controesodo*, a volta."
				},
				{
					type: 'dica',
					text: "Parada clássica: o *Autogrill*, a rede de restaurantes das áreas de serviço. Um *panino* e um *caffè* no balcão, em pé, e o italiano está pronto para mais 300 quilômetros."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Prima di partire, controlla i documenti.", pt: "Antes de sair, confira os documentos." },
				{ it: "Ci vediamo prima della lezione?", pt: "A gente se vê antes da aula?" },
				{ it: "Abbiamo sbagliato strada: torniamo indietro.", pt: "Pegamos o caminho errado: vamos voltar." },
				{ it: "In autostrada c'è una coda di venti chilometri.", pt: "Na autoestrada tem um engarrafamento de vinte quilômetros." },
				{ it: "Oggi fa un caldo terribile.", pt: "Hoje está um calor terrível." },
				{ it: "Ci fermiamo al prossimo autogrill?", pt: "A gente para no próximo posto da estrada?" },
				{ it: "Prima delle otto non riesco a lavorare.", pt: "Antes das oito eu não consigo trabalhar." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Antes de comer, lavo as mãos.", parts: [null, " di mangiare mi lavo le mani."], answers: ["prima"] },
				{ pt: "Antes da partida, enchemos o tanque.", parts: ["Prima ", null, " partenza facciamo il pieno."], answers: ["della"] },
				{ pt: "O Rafael errou o caminho.", parts: ["Rafael ha ", null, " strada."], answers: ["sbagliato"] },
				{ pt: "Estamos parados há uma hora.", parts: ["Siamo fermi ", null, " un'ora."], answers: ["da"] },
				{ pt: "Na próxima saída, saímos da autoestrada.", parts: ["Alla prossima ", null, " usciamo dall'autostrada."], answers: ["uscita"] }
			]
		}
	]
};

const licao59: Lesson = {
	no: 59,
	kind: 'licao',
	title: 'In campeggio',
	titlePt: 'No camping',
	lines: [
		{
			it: "Buonasera e benvenuti al campeggio La Pineta! Avete una prenotazione?",
			pt: "Boa noite e bem-vindos ao camping La Pineta! Vocês têm reserva?",
			note: "*Il campeggio* = o camping; *la pineta* = o pinheiral. Quem fala é o sr. Michele, o dono."
		},
		{
			it: "Sì, una piazzola per una tenda, a nome di Matteo.",
			pt: "Sim, um lote para uma barraca, em nome do Matteo.",
			note: "*La piazzola* é o espaço marcado de cada barraca ou trailer no camping."
		},
		{
			it: "Ecco qua: piazzola diciotto, sotto i pini, a cento metri dal mare. Siete in tre?",
			pt: "Aqui está: lote dezoito, embaixo dos pinheiros, a cem metros do mar. Vocês são três?",
			lit: "Eis aqui: lote dezoito, sob os pinheiros, a cem metros do mar. Sois em três?",
			note: "*Essere in tre*, *in quattro* = ser três, ser quatro (num grupo). *A cento metri da*: a distância vai com *a*, o ponto de referência com *da*."
		},
		{
			it: "Sì, tre persone e una macchina. Ci sono regole da rispettare?",
			pt: "Sim, três pessoas e um carro. Tem regras para respeitar?",
			note: "*Regole da rispettare*: *da* + infinitivo, como em *qualcosa da mangiare* (lição 23)."
		},
		{
			it: "Poche: silenzio dalle due alle quattro e dopo mezzanotte. E nessuna musica ad alto volume.",
			pt: "Poucas: silêncio das duas às quatro e depois da meia-noite. E nada de música alta.",
			lit: "Poucas: silêncio das duas às quatro e depois de meia-noite. E nenhuma música a alto volume.",
			note: "*Nessuno* antes de um substantivo se comporta como o artigo *uno*: *nessuna musica*, *nessun problema*, *nessuno sconto*. E só existe no singular."
		},
		{
			it: "Nemmeno la chitarra?",
			pt: "Nem o violão?"
		},
		{
			it: "La chitarra va bene, ma piano, e mai dopo mezzanotte. Nessun problema?",
			pt: "O violão tudo bem, mas baixinho, e nunca depois da meia-noite. Algum problema?",
			lit: "O violão vai bem, mas devagar, e nunca depois de meia-noite. Nenhum problema?",
			note: "*Piano* = devagar e também baixinho, em volume baixo (é daí que vem o nome do piano, *pianoforte*). *Nessun* antes de consoante e vogal, como *un*: *nessun problema*, *nessun amico*."
		},
		{
			it: "Nessun problema!",
			pt: "Problema nenhum!"
		},
		{
			it: "Lui dice di sì, ma a casa suona fino all'una...",
			pt: "Ele diz que sim, mas em casa toca até a uma...",
			note: "*Dire di sì*, *dire di no* = dizer que sim, dizer que não. Repare no *di*: em italiano, não se diz *dire che sì*."
		},
		{
			it: "Io? Mai! Comunque: chi sa montare una tenda?",
			pt: "Eu? Nunca! Enfim: quem sabe montar uma barraca?",
			note: "*Comunque* = de qualquer jeito, enfim, seja como for. Serve para mudar de assunto."
		},
		{
			it: "Io credo di sì. Luca mi ha spiegato tutto.",
			pt: "Eu acho que sim. O Luca me explicou tudo.",
			lit: "Eu creio de sim. Luca me explicou tudo.",
			note: "*Credo di sì*, *credo di no* = acho que sim, acho que não. Também *penso di sì*, *spero di sì*, *spero di no*."
		},
		{
			it: "E le istruzioni? Le hai portate?",
			pt: "E as instruções? Você trouxe?",
			lit: "E as instruções? As tens trazidas?"
		},
		{
			it: "Le istruzioni... Nessuno le ha messe nella borsa. Ma non servono!",
			pt: "As instruções... Ninguém pôs na bolsa. Mas não precisa!",
			lit: "As instruções... Ninguém as pôs na bolsa. Mas não servem!",
			note: "*Nessuno* sozinho = ninguém. Antes do verbo, dispensa o *non*: *nessuno le ha messe*. Depois do verbo, precisa: *non ho visto nessuno*. É a mesma regra de *niente* e *neanche* (lição 40)."
		},
		{
			it: "Un'ora per una tenda! Secondo voi stanotte sta in piedi?",
			pt: "Uma hora para uma barraca! Vocês acham que hoje à noite ela fica de pé?",
			lit: "Uma hora para uma barraca! Segundo vocês esta noite está em pés?",
			note: "*Secondo me*, *secondo voi* = na minha opinião, na opinião de vocês. *Stare in piedi* = ficar de pé."
		},
		{
			it: "Spero di sì! Io in macchina non dormo.",
			pt: "Espero que sim! Eu no carro não durmo."
		},
		{
			it: "Ragazzi, tutto bene? Vi serve una mano?",
			pt: "Pessoal, tudo bem? Precisam de uma ajuda?",
			lit: "Rapazes, tudo bem? Vos serve uma mão?",
			note: "*Servire* = servir, mas também ser necessário, com pronome indireto: *mi serve una penna* (preciso de uma caneta), *non ci serve niente*. *Dare una mano* = dar uma mão, ajudar."
		},
		{
			it: "No, grazie, non ci serve niente... Cioè, sì: ha un martello?",
			pt: "Não, obrigado, não precisamos de nada... Quer dizer, sim: o senhor tem um martelo?"
		},
		{
			it: "Ecco qua. E domattina alle otto al bar c'è il pane fresco.",
			pt: "Aqui está. E amanhã às oito tem pão fresco no bar.",
			note: "*Domattina* = amanhã de manhã (*domani mattina*)."
		},
		{
			it: "Hai visto qualcuno in spiaggia? No, non ho visto nessuno.",
			pt: "Você viu alguém na praia? Não, não vi ninguém.",
			sep: true,
			note: "Depois do verbo, *non... nessuno*: as duas negações juntas, como em “não vi ninguém”."
		},
		{
			it: "Viene anche Serena? Credo di no: ha un esame.",
			pt: "A Serena também vem? Acho que não: ela tem prova."
		},
		{
			it: "Nessun negozio è aperto la domenica sera.",
			pt: "Nenhuma loja abre no domingo à noite.",
			lit: "Nenhuma loja é aberta o domingo noite."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Dire di sì, credo di no e nessuno',
			blocks: [
				{
					type: 'p',
					text: "Para responder com “sim” ou “não” depois de um verbo de opinião ou de fala, o italiano põe um *di* antes: *credo di sì*, *penso di no*, *spero di sì*, *dice di no*. Sem o *di*, a frase soa errada para um italiano."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Cre**do di **sì**. / **Cre**do di **no**.", pt: "Acho que sim. / Acho que não." },
						{ it: "**Spe**ro di **sì**! / **Spe**ro di **no**!", pt: "Espero que sim! / Espero que não!" },
						{ it: "Ha **det**to di **no**.", pt: "Ele disse que não." }
					]
				},
				{ type: 'h', text: 'Nessuno: ninguém e nenhum' },
				{
					type: 'p',
					text: "Sozinho, *nessuno* é “ninguém”. Antes de um substantivo, é “nenhum, nenhuma” e muda como o artigo *uno*: *nessun* antes de consoante e de vogal (*nessun problema*, *nessun amico*), *nessuno* antes de *s* + consoante e *z* (*nessuno sconto*), *nessuna* e *nessun'* no feminino (*nessuna regola*, *nessun'amica*). Não tem plural: “nenhumas regras” é *nessuna regola*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Nes**su**no le ha **mes**se nella **bor**sa.", pt: "Ninguém pôs na bolsa. (antes do verbo, sem *non*)" },
						{ it: "Non ho **vi**sto nes**su**no.", pt: "Não vi ninguém. (depois do verbo, com *non*)" },
						{ it: "Nessun pro**ble**ma!", pt: "Problema nenhum!" }
					]
				},
				{
					type: 'dica',
					text: "A regra vale para toda a família das negações: *niente*, *mai*, *neanche*, *nessuno*. Antes do verbo, sozinhas; depois, com *non* na frente do verbo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Acampar na Itália',
			blocks: [
				{
					type: 'p',
					text: "Há milhares de *campeggi* na Itália, quase todos com regulamento parecido: horários de silêncio (*il silenzio*) depois do almoço e à noite, carro só em lugares marcados, banheiros e chuveiros de uso comum. Muitos ficam à beira-mar, entre pinheiros, e têm bar, mercadinho e até piscina. Acampar fora dos campings, na praia ou no mato, em geral é proibido."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la **ten**da", pt: "a barraca" },
						{ it: "il **sac**co a **pe**lo", pt: "o saco de dormir" },
						{ it: "la piaz**zo**la", pt: "o lote do camping" },
						{ it: "il **cam**per, la rou**lot**te", pt: "o motorhome, o trailer", pron: "il kám-per, la ru-lót" },
						{ it: "i ser**vi**zi", pt: "os banheiros e chuveiros comuns" }
					]
				},
				{
					type: 'dica',
					text: "Para pedir ajuda sem cerimônia: *Mi dai una mano?* (com *tu*) ou *Mi dà una mano?* (com *Lei*)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Matteo viene al mare? Credo di sì.", pt: "O Matteo vem para a praia? Acho que sim." },
				{ it: "Domani piove? Spero di no!", pt: "Amanhã vai chover? Espero que não!" },
				{ it: "Ho chiesto a Chiara, ma lei ha detto di no.", pt: "Perguntei para a Chiara, mas ela disse que não." },
				{ it: "Nessuno sa montare questa tenda.", pt: "Ninguém sabe montar esta barraca." },
				{ it: "Non conosco nessuno in questo campeggio.", pt: "Não conheço ninguém neste camping." },
				{ it: "Non c'è nessun problema.", pt: "Não tem problema nenhum." },
				{ it: "Ti serve una mano? No, grazie, non mi serve niente.", pt: "Precisa de ajuda? Não, obrigado, não preciso de nada." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Acho que não.", parts: ["Credo ", null, " no."], answers: ["di"] },
				{ pt: "Ninguém veio à festa.", parts: [null, " è venuto alla festa."], answers: ["nessuno"] },
				{ pt: "Não vi ninguém.", parts: ["Non ho visto ", null, "."], answers: ["nessuno"] },
				{ pt: "Nenhuma barraca está livre.", parts: [null, " tenda è libera."], answers: ["nessuna"] },
				{ pt: "Precisamos de um martelo (com *servire*).", parts: ["Ci ", null, " un martello."], answers: ["serve"] }
			]
		}
	]
};

const licao60: Lesson = {
	no: 60,
	kind: 'licao',
	title: 'Al mare',
	titlePt: 'Na praia',
	lines: [
		{
			it: "Allora, oggi spiaggia libera o stabilimento?",
			pt: "Então, hoje praia pública ou barraca de praia?",
			lit: "Então, hoje praia livre ou estabelecimento?",
			note: "*La spiaggia libera* é a praia aberta, de graça. *Lo stabilimento* (*balneare*) é um trecho de praia particular, onde se paga para ter guarda-sol, espreguiçadeira e bar."
		},
		{
			it: "Lo stabilimento è più comodo della spiaggia libera: ci sono l'ombrellone, i lettini, il bar...",
			pt: "A barraca de praia é mais confortável que a praia pública: tem guarda-sol, espreguiçadeiras, bar...",
			lit: "O estabelecimento é mais cômodo da praia livre: há o guarda-sol, as espreguiçadeiras, o bar...",
			note: "Para comparar duas coisas: *più* + adjetivo + *di*. O *di* se junta ao artigo: *più comodo della spiaggia*. *L'ombrellone* (de *ombrello*, guarda-chuva) é o guarda-sol; *il lettino* (caminha) é a espreguiçadeira."
		},
		{
			it: "Sì, ma è anche più caro. Quanto costa?",
			pt: "Sim, mas é também mais caro. Quanto custa?"
		},
		{
			it: "Trenta euro al giorno, per un ombrellone e due lettini.",
			pt: "Trinta euros por dia, para um guarda-sol e duas espreguiçadeiras.",
			lit: "Trinta euros ao dia, para um guarda-sol e duas espreguiçadeiras.",
			note: "*Al giorno* = por dia, como *al mese* (lição 12)."
		},
		{
			it: "Trenta euro per sedermi al sole? In Brasile la spiaggia è di tutti!",
			pt: "Trinta euros para eu sentar no sol? No Brasil a praia é de todo mundo!",
			lit: "Trinta euros para sentar-me ao sol? Em Brasil a praia é de todos!"
		},
		{
			it: "Anche qui la spiaggia libera è gratis. Ma è più piccola e più affollata.",
			pt: "Aqui também a praia pública é de graça. Mas é menor e mais cheia.",
			lit: "Também aqui a praia livre é grátis. Mas é mais pequena e mais lotada.",
			note: "*Affollato* = lotado, cheio de gente (de *la folla*, a multidão)."
		},
		{
			it: "Andiamo alla spiaggia libera: meglio spendere i soldi in gelati che in lettini!",
			pt: "Vamos para a praia pública: melhor gastar o dinheiro em sorvete do que em espreguiçadeira!",
			lit: "Vamos à praia livre: melhor gastar o dinheiro em sorvetes que em espreguiçadeiras!",
			note: "Quando a comparação é entre dois verbos, ou entre duas palavras com preposição, usa-se *che*, e não *di*: *meglio spendere in gelati che in lettini*."
		},
		{
			it: "Qui c'è troppa gente. Mettiamo gli asciugamani un po' più in là?",
			pt: "Aqui tem gente demais. Vamos pôr as toalhas um pouco mais para lá?",
			lit: "Aqui há demasiada gente. Pomos as toalhas um pouco mais em lá?",
			note: "*Un po' più in là* = um pouco mais para lá; *un po' più in qua*, um pouco mais para cá. *L'asciugamano* (de *asciugare*, enxugar, e *mano*) é masculino: *gli asciugamani*."
		},
		{
			it: "Ancora più in là? Siamo quasi in acqua!",
			pt: "Mais para lá ainda? A gente já está quase na água!"
		},
		{
			it: "Ecco, qui è perfetto. Il posto l'ho scelto io, quindi non si discute.",
			pt: "Pronto, aqui está perfeito. O lugar fui eu que escolhi, então não se discute.",
			lit: "Eis, aqui é perfeito. O lugar o escolhi eu, portanto não se discute.",
			note: "*Scelto* é o particípio de *scegliere* (escolher), que é irregular: *scelgo, scegli, sceglie, scegliamo, scegliete, scelgono*. *Quindi* = portanto, então."
		},
		{
			it: "L'acqua è più fredda che a Recife, ma è bellissima!",
			pt: "A água é mais fria do que em Recife, mas é linda!",
			note: "Mais um *che*: a comparação é entre dois lugares com preposição, *qui* e *a Recife*. Compare: *l'acqua di qui è più fredda dell'acqua di Recife*."
		},
		{
			it: "Più fredda? Ci sono ventisei gradi!",
			pt: "Mais fria? Está fazendo vinte e seis graus!",
			lit: "Mais fria? Há vinte e seis graus!"
		},
		{
			it: "Sì, ma a Boa Viagem ce ne sono ventotto!",
			pt: "Sim, mas em Boa Viagem são vinte e oito!",
			note: "*Ce ne sono ventotto* = há vinte e oito (graus): o *ne* retoma *gradi*, como em *ce ne sono tante* (lição 50)."
		},
		{
			it: "E a Boa Viagem ci sono anche gli squali, no?",
			pt: "E em Boa Viagem tem também tubarões, não é?"
		},
		{
			it: "Beh... sì. Qui i pesci sono meno pericolosi, questo è vero.",
			pt: "Bom... é. Aqui os peixes são menos perigosos, isso é verdade.",
			note: "*Meno* + adjetivo = menos: *meno pericolosi*, *meno caro di*. Funciona igual a *più*."
		},
		{
			it: "Rafael, metti la crema! Sei più rosso di un pomodoro!",
			pt: "Rafael, passa o protetor! Você está mais vermelho que um tomate!",
			lit: "Rafael, põe o creme! És mais vermelho de um tomate!",
			note: "*La crema* (*solare*) = o protetor solar. Com *mettere*: *mettere la crema*."
		},
		{
			it: "Ma io sono brasiliano! Il sole lo conosco meglio di voi.",
			pt: "Mas eu sou brasileiro! O sol eu conheço melhor que vocês.",
			note: "*Meglio* = melhor, mas só como advérbio, o comparativo de *bene*: *conosco bene*, *conosco meglio*. Para “um lugar melhor”, outra palavra: você verá na revisão."
		},
		{
			it: "E allora perché sei così rosso, signor brasiliano?",
			pt: "E então por que você está tão vermelho, senhor brasileiro?"
		},
		{
			it: "Perché il sole italiano è più forte di quello brasiliano, è ovvio!",
			pt: "Porque o sol italiano é mais forte que o brasileiro, é óbvio!",
			lit: "Porque o sol italiano é mais forte daquele brasileiro, é óbvio!",
			note: "*Quello* evita repetir o substantivo: *di quello brasiliano* = do (sol) brasileiro."
		},
		{
			it: "Bologna è più grande di Vieste, ma d'estate Vieste è più bella.",
			pt: "Bolonha é maior que Vieste, mas no verão Vieste é mais bonita.",
			sep: true
		},
		{
			it: "Meglio tardi che mai!",
			pt: "Antes tarde do que nunca!",
			lit: "Melhor tarde que nunca!",
			note: "O provérbio é igual ao nosso, com *che*, porque compara dois advérbios."
		},
		{
			it: "La mia camera è meno grande della tua.",
			pt: "O meu quarto é menor que o seu.",
			lit: "O meu quarto é menos grande do teu."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Comparar: più, meno, di e che',
			blocks: [
				{
					type: 'p',
					text: "Para dizer que algo tem mais ou menos de uma qualidade, *più* (mais) ou *meno* (menos) antes do adjetivo. O segundo termo da comparação vem com *di*, que se junta ao artigo como sempre."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Lo stabili**men**to è più **co**modo della **spiag**gia **li**bera.", pt: "A barraca é mais confortável que a praia pública." },
						{ it: "Il **so**le ita**lia**no è più **for**te di **quel**lo brasi**lia**no.", pt: "O sol italiano é mais forte que o brasileiro." },
						{ it: "La mia **ca**mera è **me**no **gran**de della **tu**a.", pt: "O meu quarto é menor que o seu." },
						{ it: "Il **so**le lo co**no**sco **me**glio di **vo**i.", pt: "O sol eu conheço melhor que vocês." }
					]
				},
				{ type: 'h', text: 'Quando entra o che' },
				{
					type: 'p',
					text: "*Di* serve quando se comparam duas pessoas ou coisas (nomes e pronomes). Quando se comparam dois verbos, dois adjetivos ou duas palavras com preposição, entra *che*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Me**glio spen**de**re in ge**la**ti che in let**ti**ni.", pt: "dois complementos com *in*" },
						{ it: "L'**ac**qua è più **fred**da che a Re**ci**fe.", pt: "dois lugares: *qui* e *a Recife*" },
						{ it: "È più **bel**la che sim**pa**tica.", pt: "dois adjetivos: é mais bonita do que simpática" }
					]
				},
				{
					type: 'dica',
					text: "*Più* e *meno* também indicam lugar: *un po' più in là*, *un po' più in qua*. E *più* sozinho, depois de *non*, é “mais” no sentido de “não... mais”: *non torno più a Bologna*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A praia na Itália',
			blocks: [
				{
					type: 'p',
					text: "Quem chega do Brasil estranha: em boa parte do litoral italiano, a praia é dividida em *stabilimenti*, faixas de areia concedidas a empresas, com fileiras de guarda-sóis coloridos, todos iguais. Paga-se por dia, por semana ou pelo verão inteiro, e muitas famílias voltam ao mesmo *ombrellone* todo ano, com os mesmos vizinhos."
				},
				{
					type: 'p',
					text: "A areia junto ao mar, porém, é de todos: qualquer um pode caminhar na beira da água. E a lei obriga cada município a ter também *spiagge libere*, as praias públicas, onde você leva o seu guarda-sol e a sua toalha."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'ombrel**lo**ne, il let**ti**no", pt: "o guarda-sol, a espreguiçadeira" },
						{ it: "il ba**gni**no", pt: "o salva-vidas", pron: "il ba-nhí-no" },
						{ it: "fare il **ba**gno", pt: "entrar na água, tomar banho de mar" },
						{ it: "prendere il **so**le", pt: "tomar sol" },
						{ it: "la **cre**ma so**la**re", pt: "o protetor solar" }
					]
				},
				{
					type: 'dica',
					text: "Cuidado com *fare il bagno*: na praia, é entrar no mar; em casa, é tomar banho de banheira. O banho de chuveiro é *fare la doccia*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il treno è più veloce della macchina.", pt: "O trem é mais rápido que o carro." },
				{ it: "Matteo è meno stanco di Chiara.", pt: "O Matteo está menos cansado que a Chiara." },
				{ it: "Meglio camminare che aspettare l'autobus.", pt: "Melhor andar do que esperar o ônibus." },
				{ it: "A Napoli fa più caldo che a Bologna.", pt: "Em Nápoles faz mais calor do que em Bolonha." },
				{ it: "Chiara parla inglese meglio di me.", pt: "A Chiara fala inglês melhor que eu." },
				{ it: "Questo posto l'ha scelto Rafael.", pt: "Este lugar quem escolheu foi o Rafael." },
				{ it: "Mettiamo l'ombrellone un po' più in là.", pt: "Vamos pôr o guarda-sol um pouco mais para lá." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O mar é mais quente que a piscina.", parts: ["Il mare è ", null, " caldo della piscina."], answers: ["più"] },
				{ pt: "A praia pública é menos cara que a barraca.", parts: ["La spiaggia libera è meno cara ", null, " stabilimento."], answers: ["dello"] },
				{ pt: "Melhor ler do que ver televisão.", parts: ["Meglio leggere ", null, " guardare la televisione."], answers: ["che"] },
				{ pt: "Quem escolheu o restaurante?", parts: ["Chi ha ", null, " il ristorante?"], answers: ["scelto"] },
				{ pt: "O Rafael nada melhor que o Matteo.", parts: ["Rafael nuota ", null, " di Matteo."], answers: ["meglio"] }
			]
		}
	]
};

const licao61: Lesson = {
	no: 61,
	kind: 'licao',
	title: 'In montagna',
	titlePt: 'Na montanha',
	lines: [
		{
			it: "Eccoci a Canazei! Rafael, benvenuto nelle Dolomiti!",
			pt: "Chegamos a Canazei! Rafael, bem-vindo às Dolomitas!",
			lit: "Eis-nos a Canazei! Rafael, bem-vindo nas Dolomitas!",
			note: "Depois de uma semana no mar e três dias em Bolonha, os três sobem às Dolomitas com Giulia e Luca. *Eccoci* = eis-nos aqui, chegamos: *ecco* + *ci*, como *eccolo* (lição 32)."
		},
		{
			it: "Che spettacolo! E quella montagna bianca, così alta, come si chiama?",
			pt: "Que espetáculo! E aquela montanha branca, tão alta, como se chama?"
		},
		{
			it: "È la Marmolada, la montagna più alta delle Dolomiti: più di tremilatrecento metri.",
			pt: "É a Marmolada, a montanha mais alta das Dolomitas: mais de três mil e trezentos metros.",
			note: "*La più alta delle Dolomiti* = a mais alta das Dolomitas. É o superlativo: artigo + *più* + adjetivo + *di*. Você vai vê-lo com calma na revisão. E diante de número, *più di*: *più di tremila metri*."
		},
		{
			it: "E noi saliamo fin lassù?",
			pt: "E nós vamos subir até lá em cima?",
			lit: "E nós subimos até lá em cima?",
			note: "*Salire* = subir. É irregular: *salgo, sali, sale, saliamo, salite, salgono*. *Lassù* = lá em cima; *quaggiù* = aqui embaixo. *Fin* é *fino* (até) sem a vogal."
		},
		{
			it: "No, no! Saliamo a un rifugio, a duemilaquattrocento metri. Sono tre ore di cammino.",
			pt: "Não, não! Vamos subir até um refúgio, a dois mil e quatrocentos metros. São três horas de caminhada.",
			note: "*Il rifugio* é a casa de montanha onde se come e se dorme, no meio das trilhas. *Il cammino* = o caminho, a caminhada."
		},
		{
			it: "Tre ore?! E io con queste scarpe da ginnastica?",
			pt: "Três horas?! E eu com este tênis?",
			lit: "Três horas?! E eu com estes sapatos de ginástica?"
		},
		{
			it: "Tranquilla, ti ho portato i miei scarponi. Abbiamo lo stesso numero.",
			pt: "Calma, eu trouxe as minhas botas para você. A gente calça o mesmo número.",
			lit: "Tranquila, te trouxe os meus sapatões. Temos o mesmo número.",
			note: "*Gli scarponi* (de *scarpa* + o aumentativo *-one*) são as botas de trilha. *Lo stesso* = o mesmo (lição 46)."
		},
		{
			it: "Ma Rafael... perché sei vestito da sciatore? Siamo in agosto!",
			pt: "Mas Rafael... por que você está vestido de esquiador? Estamos em agosto!",
			note: "*Vestito da* = vestido de, fantasiado de: *vestito da sciatore*, *vestita da principessa*. Para cor ou roupa, *vestito di*: *vestito di nero*, *vestito di blu*."
		},
		{
			it: "Mi hanno detto che in montagna fa freddo!",
			pt: "Me disseram que na montanha faz frio!"
		},
		{
			it: "Sì, la sera. Ma adesso ci sono venticinque gradi: fra un'ora sei di nuovo rosso come un pomodoro!",
			pt: "Sim, à noite. Mas agora está fazendo vinte e cinco graus: daqui a uma hora você fica vermelho como um tomate de novo!",
			lit: "Sim, a noite. Mas agora há vinte e cinco graus: entre uma hora és de novo vermelho como um tomate!",
			note: "*Rosso come un pomodoro*: o italiano adora comparações fixas com *come*. Há outras nesta lição. *Fra un'ora* = daqui a uma hora (lição 19)."
		},
		{
			it: "Aspettate! Io sono lenta come una lumaca... Luca, tu sei alto, hai le gambe lunghe!",
			pt: "Esperem! Eu sou lenta como uma lesma... Luca, você é alto, tem as pernas compridas!",
			note: "*La lumaca* = o caracol, a lesma. *Alto* e *basso* servem para pessoas, montanhas e sons: *Luca è alto*, *una persona bassa*, *parlare a voce bassa*."
		},
		{
			it: "Coraggio, manca poco. Il rifugio è lassù, a nord del lago.",
			pt: "Ânimo, falta pouco. O refúgio fica lá em cima, ao norte do lago.",
			note: "*Mancare* = faltar: *manca poco*, *mancano due chilometri*. *A nord di* = ao norte de; também *a sud*, *a est*, *a ovest*."
		},
		{
			it: "Matteo, tu sei buono come il pane... mi porti lo zaino?",
			pt: "Matteo, você é um anjo... leva a minha mochila?",
			lit: "Matteo, tu és bom como o pão... me levas a mochila?",
			note: "*Buono come il pane* se diz de uma pessoa muito boa, generosa. A Chiara sabe pedir favores."
		},
		{
			it: "Va bene, ma solo per l'ultimo pezzo.",
			pt: "Tudo bem, mas só no último trecho.",
			lit: "Vai bem, mas só para o último pedaço."
		},
		{
			it: "Siamo arrivati! Siamo saliti a duemilaquattrocento metri! Non ero mai salito così in alto.",
			pt: "Chegamos! Subimos a dois mil e quatrocentos metros! Eu nunca tinha subido tão alto.",
			note: "*Salire* faz o passado com *essere* quando não tem objeto: *siamo saliti*. *Non ero mai salito* = eu nunca tinha subido: é o mais-que-perfeito, com *ero* (era) no lugar de *sono*. Você vai estudá-lo na revisão."
		},
		{
			it: "Guarda giù: il lago è là in basso, e il paese sembra piccolo come un giocattolo.",
			pt: "Olha para baixo: o lago está lá embaixo, e o vilarejo parece pequeno como um brinquedo.",
			note: "*In alto* = no alto; *in basso* = embaixo. *Giù* = para baixo; o contrário é *su*."
		},
		{
			it: "Brrr... adesso fa freddo davvero. Per fortuna sono vestito da sciatore!",
			pt: "Brrr... agora está frio de verdade. Ainda bem que estou vestido de esquiador!",
			lit: "Brrr... agora faz frio de verdade. Por fortuna sou vestido de esquiador!"
		},
		{
			it: "A Carnevale Bianca si è vestita da principessa.",
			pt: "No Carnaval a Bianca se vestiu de princesa.",
			sep: true,
			note: "Bianca, a sobrinha do Matteo (lição 9)."
		},
		{
			it: "Saliamo a piedi o prendiamo la funivia?",
			pt: "Subimos a pé ou pegamos o teleférico?"
		},
		{
			it: "Torino è a ovest di Bologna, Venezia è a nord-est.",
			pt: "Turim fica a oeste de Bolonha, Veneza fica a nordeste."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Salire, alto e basso, vestito da',
			blocks: [
				{
					type: 'p',
					text: "*Salire* (subir) tem um *g* em três pessoas do presente, como *venire* (*vengo*, lição 19). O contrário é *scendere* (descer), regular. Os dois fazem o passado com *essere* quando não têm objeto."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**sal**go, **sa**li, **sa**le", pt: "subo, sobe (você), sobe (ele)" },
						{ it: "sa**lia**mo, sa**li**te, **sal**gono", pt: "subimos, vocês sobem, eles sobem" },
						{ it: "**Sia**mo sa**li**ti al ri**fu**gio.", pt: "Subimos até o refúgio." },
						{ it: "Ho sa**li**to le **sca**le di **cor**sa.", pt: "Subi a escada correndo. (com objeto, *avere*)" }
					]
				},
				{
					type: 'p',
					text: "*Salire* também é entrar num meio de transporte: *salire in macchina*, *salire sul treno*. E *scendere*, sair dele: *scendo alla prossima fermata*."
				},
				{ type: 'h', text: 'Alto e basso' },
				{
					type: 'p',
					text: "*Alto* é alto, e *basso* é baixo, tanto para pessoas quanto para coisas: *una montagna alta*, *una casa bassa*. Para o volume da voz também: *parlare ad alta voce*, *a voce bassa*. Com *in*, viram lugar: *in alto* (no alto), *in basso* (embaixo). E *lassù*, *laggiù*: lá em cima, lá embaixo."
				},
				{ type: 'h', text: 'Vestito da, vestito di' },
				{
					type: 'p',
					text: "*Vestito da* + papel ou personagem: *vestito da sciatore*, *vestita da principessa*, *vestirsi da pirata*. *Vestito di* + cor ou roupa: *vestito di bianco*, *vestita di jeans*."
				},
				{
					type: 'dica',
					text: "*Il vestito*, sozinho, é a roupa: o terno do homem ou o vestido da mulher."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Comparações com come e os pontos cardeais',
			blocks: [
				{
					type: 'p',
					text: "Como o português, o italiano tem comparações prontas, que todo mundo usa. Algumas coincidem com as nossas, outras não."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**ros**so come un pomo**do**ro", pt: "vermelho como um tomate" },
						{ it: "**len**to come una lu**ma**ca", pt: "lento como uma lesma" },
						{ it: "**buo**no come il **pa**ne", pt: "bom como o pão (uma pessoa boníssima)" },
						{ it: "**bian**co come la **ne**ve", pt: "branco como a neve" },
						{ it: "**for**te come un **to**ro", pt: "forte como um touro" },
						{ it: "**fur**bo come una **vol**pe", pt: "esperto como uma raposa" }
					]
				},
				{ type: 'h', text: 'Norte, sul, leste, oeste' },
				{
					type: 'p',
					text: "*Il nord, il sud, l'est, l'ovest*; e no meio, *nord-est*, *sud-ovest*... A posição se diz com *a*: *a nord del lago*, *Torino è a ovest di Bologna*. Os italianos falam muito em *il Nord* e *il Sud* (com maiúscula) para as duas metades do país, e chamam o Sul de *il Mezzogiorno*."
				},
				{
					type: 'p',
					text: "As Dolomitas, no nordeste da Itália, são montanhas de rocha clara que ficam rosadas ao pôr do sol. Esse fenômeno tem nome: *l'enrosadira*. Desde 2009 são patrimônio da humanidade."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Saliamo in macchina: è tardi!", pt: "Vamos entrar no carro: está tarde!" },
				{ it: "Chiara è salita al rifugio con gli scarponi di Giulia.", pt: "A Chiara subiu até o refúgio com as botas da Giulia." },
				{ it: "Mio fratello è alto, ma io sono basso.", pt: "Meu irmão é alto, mas eu sou baixo." },
				{ it: "Perché sei vestito da pirata?", pt: "Por que você está vestido de pirata?" },
				{ it: "Matteo è buono come il pane.", pt: "O Matteo é uma pessoa boníssima." },
				{ it: "Il lago è a sud del paese.", pt: "O lago fica ao sul do vilarejo." },
				{ it: "Mancano due chilometri al rifugio.", pt: "Faltam dois quilômetros até o refúgio." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu subo a pé.", parts: ["Io ", null, " a piedi."], answers: ["salgo"] },
				{ pt: "Eles sobem de teleférico.", parts: ["Loro ", null, " in funivia."], answers: ["salgono"] },
				{ pt: "Rapazes, vocês subiram até o topo?", parts: ["Ragazzi, siete ", null, " fino in cima?"], answers: ["saliti"] },
				{ pt: "No Carnaval eu me visto de esquiador.", parts: ["A Carnevale mi vesto ", null, " sciatore."], answers: ["da"] },
				{ pt: "Ele está vermelho como um tomate.", parts: ["È rosso ", null, " un pomodoro."], answers: ["come"] }
			]
		}
	]
};

const licao62: Lesson = {
	no: 62,
	kind: 'licao',
	title: 'Ferragosto',
	titlePt: 'Ferragosto',
	lines: [
		{
			it: "Ma oggi è tutto chiuso: il supermercato, la farmacia, la banca... È festa?",
			pt: "Mas hoje está tudo fechado: o supermercado, a farmácia, o banco... É feriado?",
			note: "*Festa* é festa e também feriado: *oggi è festa* = hoje é feriado."
		},
		{
			it: "Sì, è Ferragosto, il quindici agosto: la festa più importante dell'estate.",
			pt: "É, é Ferragosto, quinze de agosto: o feriado mais importante do verão."
		},
		{
			it: "E che cosa si fa a Ferragosto?",
			pt: "E o que se faz no Ferragosto?",
			note: "*A Ferragosto*, como *a Natale*, *a Pasqua*: com as festas, a preposição é *a*."
		},
		{
			it: "Si va al mare o in montagna, si mangia all'aperto con gli amici e la sera si guardano i fuochi d'artificio.",
			pt: "As pessoas vão à praia ou à montanha, comem ao ar livre com os amigos e à noite veem os fogos de artifício.",
			lit: "Se vai ao mar ou em montanha, se come ao aberto com os amigos e a noite se olham os fogos de artifício.",
			note: "O *si* impessoal da lição 27. Com um objeto no plural, o verbo vai para o plural: *si guardano i fuochi*, como *si vendono biglietti*."
		},
		{
			it: "E le città si svuotano. Leggete il messaggio di Davide: «Bologna è deserta, ci sono quaranta gradi e il mio bar è chiuso per ferie!»",
			pt: "E as cidades se esvaziam. Leiam a mensagem do Davide: “Bolonha está deserta, está fazendo quarenta graus e o meu bar está fechado para férias!”",
			note: "*Chiuso per ferie* = fechado para férias: a plaquinha que se vê em toda porta italiana em agosto. *Le ferie* são as férias do trabalho; *le vacanze*, as férias de modo geral."
		},
		{
			it: "Quaranta gradi! Qui oggi la massima è ventidue e la minima otto.",
			pt: "Quarenta graus! Aqui hoje a máxima é vinte e dois e a mínima, oito.",
			note: "*La massima*, *la minima*: subentende-se *temperatura*, por isso são femininas."
		},
		{
			it: "Ma tutti gli italiani vanno in vacanza insieme?",
			pt: "Mas todos os italianos saem de férias juntos?"
		},
		{
			it: "Non tutti, ma milioni sì. Ad agosto molte aziende chiudono per due o tre settimane.",
			pt: "Nem todos, mas milhões, sim. Em agosto muitas empresas fecham por duas ou três semanas.",
			note: "*Un milione*, *due milioni*: diante de um substantivo, *di*: *un milione di persone*."
		},
		{
			it: "Anche la mia: chiude dal nove al ventitré. Per questo siamo qui!",
			pt: "A minha também: fecha do dia nove ao dia vinte e três. Por isso estamos aqui!"
		},
		{
			it: "E sulle autostrade ci sono centinaia di chilometri di code.",
			pt: "E nas autoestradas tem centenas de quilômetros de engarrafamento.",
			note: "*Un centinaio* = uma centena, cerca de cem. No plural muda de gênero: *le centinaia*. O mesmo com *un migliaio* (cerca de mil), *le migliaia*. Os dois pedem *di*: *centinaia di chilometri*."
		},
		{
			it: "Lo so! Abbiamo fatto un migliaio di chilometri in macchina... e qualche chilometro in più per colpa mia.",
			pt: "Eu sei! A gente rodou uns mil quilômetros de carro... e alguns quilômetros a mais por culpa minha.",
			lit: "O sei! Fizemos um milhar de quilômetros em carro... e algum quilômetro em mais por culpa minha.",
			note: "*Qualche* + singular = alguns, algumas (lição 40): *qualche chilometro*. *Per colpa mia* = por culpa minha."
		},
		{
			it: "Qualche chilometro? Abbiamo perso alcune ore!",
			pt: "Alguns quilômetros? A gente perdeu algumas horas!",
			note: "*Alcuni*, *alcune* dizem o mesmo que *qualche*, mas com o plural: *alcune ore* = *qualche ora*."
		},
		{
			it: "Stasera in piazza c'è la festa del paese: musica, polenta e alle undici i fuochi. Arrivano migliaia di persone!",
			pt: "Hoje à noite tem a festa do vilarejo na praça: música, polenta e às onze os fogos. Chegam milhares de pessoas!",
			note: "*Migliaia di persone*: com *centinaia* e *migliaia*, o verbo vai para o plural."
		},
		{
			it: "Migliaia? Al massimo qualche centinaio: è un paese piccolo!",
			pt: "Milhares? No máximo umas centenas: é um vilarejo pequeno!",
			note: "*Al massimo* = no máximo; *come minimo* = no mínimo. *Qualche centinaio* (singular) = algumas centenas."
		},
		{
			it: "Centinaia o migliaia, io ci vado! Si balla?",
			pt: "Centenas ou milhares, eu vou! Tem dança?",
			lit: "Centenas ou milhares, eu aí vou! Se dança?"
		},
		{
			it: "Certo! E tu, Matteo, porti la chitarra?",
			pt: "Claro! E você, Matteo, leva o violão?"
		},
		{
			it: "Volentieri, ma suono al massimo fino a mezzanotte. Al campeggio ho imparato la lezione!",
			pt: "Com prazer, mas toco no máximo até meia-noite. No camping eu aprendi a lição!"
		},
		{
			it: "Alcuni amici sono andati al mare, altri in montagna.",
			pt: "Alguns amigos foram para a praia, outros para a montanha.",
			sep: true
		},
		{
			it: "Ho fatto qualche foto alla Marmolada: guarda!",
			pt: "Tirei algumas fotos da Marmolada: olha!",
			note: "*Fare una foto* = tirar uma foto. *La foto* não muda no plural: *le foto*."
		},
		{
			it: "Alla festa sono venute centinaia di persone.",
			pt: "Vieram centenas de pessoas à festa.",
			note: "*Venute*, no feminino plural, porque *centinaia* é feminino."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Qualche e alcuni; centinaia e migliaia',
			blocks: [
				{
					type: 'p',
					text: "“Alguns” tem dois jeitos de se dizer. *Qualche* não muda e vem sempre com o singular, mesmo significando vários. *Alcuni*, *alcune* concordam e vêm com o plural. O sentido é o mesmo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**qual**che chi**lo**metro = al**cu**ni chi**lo**metri", pt: "alguns quilômetros" },
						{ it: "**qual**che **o**ra = al**cu**ne **o**re", pt: "algumas horas" },
						{ it: "Ho **fat**to **qual**che **fo**to.", pt: "Tirei algumas fotos." }
					]
				},
				{
					type: 'p',
					text: "*Alcuni* também funciona sozinho, como pronome: *alcuni sono andati al mare, altri in montagna*. *Qualche* nunca: nesse caso, use *qualcuno*."
				},
				{ type: 'h', text: 'Centinaia e migliaia' },
				{
					type: 'p',
					text: "*Un centinaio* é “uma centena”, “uns cem”; *un migliaio*, “um milhar”, “uns mil”. São números aproximados. O singular é masculino, mas o plural vira feminino em *-a*, como *le paia* e *le uova* (lição 40)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un centi**na**io di per**so**ne / centi**na**ia di per**so**ne", pt: "umas cem pessoas / centenas de pessoas" },
						{ it: "un mi**glia**io di chi**lo**metri / mi**glia**ia di chi**lo**metri", pt: "uns mil quilômetros / milhares de quilômetros", pron: "mi-lhá-io / mi-lhá-ia" }
					]
				},
				{ type: 'h', text: 'Massimo e minimo' },
				{
					type: 'p',
					text: "*Massimo* e *minimo* são adjetivos comuns (*la temperatura massima*, *il prezzo minimo*) e aparecem em expressões: *al massimo* (no máximo), *come minimo* (no mínimo). No jornal da previsão do tempo, *la massima* e *la minima*."
				},
				{
					type: 'dica',
					text: "Parecidos, para números menores: *una decina* (uma dezena), *una ventina* (uns vinte), *una trentina*: *una ventina di persone* = umas vinte pessoas."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Ferragosto e as férias dos italianos',
			blocks: [
				{
					type: 'p',
					text: "O nome vem do latim *Feriae Augusti*, os dias de descanso que o imperador Augusto instituiu em agosto, no ano 18 antes de Cristo. Depois, a Igreja pôs no dia 15 a festa da Assunção de Nossa Senhora (*l'Assunta*). Hoje é feriado nacional e o ponto alto do verão."
				},
				{
					type: 'p',
					text: "Em agosto, muitas fábricas e escritórios fecham por duas ou três semanas, e quase todo mundo tira as *ferie* ao mesmo tempo. As cidades ficam vazias e quentes, com padarias, bares e até médicos *chiusi per ferie*. As praias e as montanhas, ao contrário, lotam, e os preços sobem."
				},
				{
					type: 'p',
					text: "Os trabalhadores italianos têm pelo menos quatro semanas de férias pagas por ano. Muitas famílias passam o mês inteiro no mesmo lugar, numa casa alugada no mar ou na montanha, onde encontram os mesmos amigos de todos os anos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "le **fe**rie", pt: "as férias do trabalho" },
						{ it: "**chiu**so per **fe**rie", pt: "fechado para férias" },
						{ it: "Buon Ferra**go**sto!", pt: "Bom Ferragosto! (o cumprimento do dia)" },
						{ it: "i **fuo**chi d'arti**fi**cio", pt: "os fogos de artifício" }
					]
				},
				{
					type: 'dica',
					text: "Se você viajar à Itália em agosto, reserve tudo com antecedência e não espere encontrar a cidade funcionando como no resto do ano. Em compensação, as festas de vilarejo, as *sagre*, estão em toda parte."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ho qualche amico a Roma.", pt: "Tenho alguns amigos em Roma." },
				{ it: "Alcune ragazze sono rimaste in spiaggia.", pt: "Algumas meninas ficaram na praia." },
				{ it: "Al concerto sono venute migliaia di persone.", pt: "Vieram milhares de pessoas ao show." },
				{ it: "Il viaggio costa al massimo duecento euro.", pt: "A viagem custa no máximo duzentos euros." },
				{ it: "Oggi la minima è quindici gradi.", pt: "Hoje a mínima é quinze graus." },
				{ it: "Ad agosto molti negozi sono chiusi per ferie.", pt: "Em agosto muitas lojas ficam fechadas para férias." },
				{ it: "Buon Ferragosto a tutti!", pt: "Bom Ferragosto para todos!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vou ficar alguns dias no mar.", parts: ["Resto ", null, " giorno al mare."], answers: ["qualche"] },
				{ pt: "Alguns foram à praia, outros à montanha.", parts: [null, " sono andati al mare, altri in montagna."], answers: ["alcuni"] },
				{ pt: "Há centenas de turistas.", parts: ["Ci sono ", null, " di turisti."], answers: ["centinaia"] },
				{ pt: "No máximo duas horas.", parts: ["Al ", null, " due ore."], answers: ["massimo"] },
				{ pt: "A loja está fechada para férias.", parts: ["Il negozio è chiuso per ", null, "."], answers: ["ferie"] }
			]
		}
	]
};

const licao63: Lesson = {
	no: 63,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: "O imperfeito: as formas",
			blocks: [
				{
					type: 'p',
					text: "Fim das férias! Nesta revisão entra um tempo novo, que você já encontrou de passagem: o imperfeito (*l'imperfetto*), o nosso “eu falava, eu era”. Ele é fácil de formar: tira-se o *-re* do infinitivo e acrescenta-se *-vo, -vi, -va, -vamo, -vate, -vano*. Vale para os três grupos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "par**la**vo, par**la**vi, par**la**va", pt: "*parlare*: eu falava, você falava, ele falava" },
						{ it: "parla**va**mo, parla**va**te, par**la**vano", pt: "falávamos, vocês falavam, eles falavam" },
						{ it: "a**ve**vo, a**ve**vi, a**ve**va...", pt: "*avere*: eu tinha, você tinha, ele tinha..." },
						{ it: "dor**mi**vo, dor**mi**vi, dor**mi**va...", pt: "*dormire*: eu dormia, você dormia, ele dormia..." }
					]
				},
				{
					type: 'p',
					text: "Repare na força: nas três pessoas do singular e em *loro*, ela cai na sílaba antes do *-v-* (par**la**vo, par**la**vano); em *noi* e *voi*, no *-va-* (parla**va**mo, parla**va**te)."
				},
				{ type: 'h', text: 'Os poucos irregulares' },
				{
					type: 'p',
					text: "*Fare*, *dire* e *bere* formam o imperfeito sobre a forma antiga do verbo: *facevo*, *dicevo*, *bevevo*, e daí seguem regulares. *Essere* é o único realmente diferente."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**e**ro, **e**ri, **e**ra, era**va**mo, era**va**te, **e**rano", pt: "*essere*: eu era (estava), você era..." },
						{ it: "fa**ce**vo, di**ce**vo, be**ve**vo", pt: "eu fazia, eu dizia, eu bebia" },
						{ it: "c'**e**ra, c'**e**rano", pt: "havia (singular, plural)" }
					]
				},
				{
					type: 'dica',
					text: "Para nós é quase de graça: o *-ava* e o *-ia* do português viram *-ava*, *-eva* e *-iva*. Andava, tinha, dormia: *andava*, *aveva*, *dormiva*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Imperfeito ou passato prossimo?',
			blocks: [
				{
					type: 'p',
					text: "A escolha é a mesma do português entre “fazia” e “fiz”. O *passato prossimo* conta o que aconteceu, um fato fechado. O imperfeito descreve o cenário (o tempo, o lugar, como as coisas eram), o que estava em andamento e o que se fazia por hábito."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Fa**ce**va **cal**do e c'era **mol**to **traf**fico quando **sia**mo par**ti**ti.", pt: "Fazia calor e havia muito trânsito quando partimos." },
						{ it: "Matteo gui**da**va e Rafael dor**mi**va.", pt: "O Matteo dirigia e o Rafael dormia." },
						{ it: "Da bam**bi**no an**da**vo al **ma**re **o**gni do**me**nica.", pt: "Quando criança eu ia à praia todo domingo." },
						{ it: "Rafael **e**ra **ros**so come un pomo**do**ro.", pt: "O Rafael estava vermelho como um tomate." }
					]
				},
				{
					type: 'p',
					text: "Um bom teste: se em português você diria “-ava” ou “-ia”, quase sempre é imperfeito em italiano. Se diria “fiz, fui, comprei”, é *passato prossimo*. Com *essere* e *avere* acontece a mesma coisa: *ero stanco* (eu estava cansado) descreve; *sono stato male* (passei mal) conta um fato."
				},
				{
					type: 'dica',
					text: "Para falar da infância, o imperfeito é rei: *Quando ero piccolo, abitavo a Recife e avevo un cane.* Experimente agora três frases sobre você quando criança."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O mais-que-perfeito',
			blocks: [
				{
					type: 'p',
					text: "O *trapassato prossimo* é o nosso “eu tinha feito”: uma ação anterior a outra, já no passado. Forma-se como o *passato prossimo*, mas com o auxiliar no imperfeito: *avevo* ou *ero* + particípio. As regras do auxiliar e da concordância são as mesmas de sempre."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non **e**ro mai sa**li**to così in **al**to.", pt: "Eu nunca tinha subido tão alto. (lição 61)" },
						{ it: "A**ve**va la**scia**to gli oc**chia**li sul **ta**volo.", pt: "Ele tinha deixado os óculos na mesa. (a cena da lição 57)" },
						{ it: "Chiara a**ve**va **mes**so la **cre**ma, Rafael no.", pt: "A Chiara tinha passado protetor, o Rafael não. (a cena da lição 60)" },
						{ it: "Quando **sia**mo arri**va**ti, Luca e Giulia **e**rano già par**ti**ti.", pt: "Quando chegamos, o Luca e a Giulia já tinham saído." }
					]
				},
				{
					type: 'dica',
					text: "O italiano usa o mais-que-perfeito com naturalidade na conversa, onde nós muitas vezes simplificamos: “eu já vi esse filme antes de você me falar” sai melhor como *l'avevo già visto*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Comparativos e superlativos',
			blocks: [
				{
					type: 'p',
					text: "Na lição 60 você comparou com *più* e *meno*: *di* antes de nomes e pronomes, *che* antes de verbos, adjetivos e preposições. Para a igualdade, *come* ou *quanto*: *Chiara è alta come Giulia*, *è simpatico quanto suo fratello*."
				},
				{ type: 'h', text: 'O superlativo relativo' },
				{
					type: 'p',
					text: "“O mais... de” é artigo + *più* (ou *meno*) + adjetivo + *di*. Se o adjetivo vem depois do substantivo, o artigo fica com o substantivo e não se repete. E o superlativo absoluto você já conhece desde a lição 28: *-issimo*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la mon**ta**gna più **al**ta delle Dolo**mi**ti", pt: "a montanha mais alta das Dolomitas (lição 61)" },
						{ it: "la **fe**sta più impor**tan**te dell'es**ta**te", pt: "o feriado mais importante do verão (lição 62)" },
						{ it: "il più **ca**ro di **tut**ti", pt: "o mais caro de todos" },
						{ it: "**bel**la → bel**lis**sima", pt: "linda (lição 60: *è bellissima*)" }
					]
				},
				{ type: 'h', text: 'As formas especiais' },
				{
					type: 'p',
					text: "Quatro adjetivos têm, além da forma regular (*più buono*, *più grande*...), uma forma própria, como em português. E os advérbios *bene* e *male* têm só a forma especial."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "buono → mi**glio**re; cattivo → peg**gio**re", pt: "bom → melhor; ruim → pior" },
						{ it: "grande → mag**gio**re; piccolo → mi**no**re", pt: "grande → maior; pequeno → menor" },
						{ it: "bene → **me**glio; male → **peg**gio", pt: "bem → melhor; mal → pior" },
						{ it: "Il **so**le lo co**no**sco **me**glio di **vo**i.", pt: "O sol eu conheço melhor que vocês. (lição 60)" }
					]
				},
				{
					type: 'p',
					text: "*Migliore* e *peggiore* acompanham substantivos: *un posto migliore*, *il miglior gelato di Vieste* (antes do substantivo, muitas vezes perde o *-e*). *Meglio* e *peggio* acompanham verbos: *nuoto meglio*, *oggi sto peggio*. E *maggiore* e *minore* se usam sobretudo para irmãos: *mio fratello maggiore* (o mais velho), *mia sorella minore* (a caçula)."
				},
				{
					type: 'dica',
					text: "A armadilha clássica: “o melhor restaurante” é *il ristorante migliore*, nunca *il ristorante meglio*. Pergunte-se: é como “bom” (adjetivo) ou como “bem” (advérbio)?"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do porta-malas lotado à festa do Ferragosto, estas expressões apareceram nas lições 57 a 62. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Si parte!", pt: "Pé na estrada!" },
						{ it: "Non te la prendere!", pt: "Não fica chateado!" },
						{ it: "Quanta roba!", pt: "Quanta coisa!" },
						{ it: "fare il pieno", pt: "encher o tanque" },
						{ it: "Non ci posso credere!", pt: "Não acredito!" },
						{ it: "niente drammi", pt: "sem drama" },
						{ it: "sbagliare strada", pt: "errar o caminho" },
						{ it: "Credo di sì. / Spero di no.", pt: "Acho que sim. / Espero que não." },
						{ it: "Nessun problema!", pt: "Problema nenhum!" },
						{ it: "Vi serve una mano?", pt: "Precisam de ajuda?" },
						{ it: "un po' più in là", pt: "um pouco mais para lá" },
						{ it: "Meglio tardi che mai!", pt: "Antes tarde do que nunca!" },
						{ it: "Coraggio, manca poco!", pt: "Ânimo, falta pouco!" },
						{ it: "buono come il pane", pt: "um anjo de pessoa" },
						{ it: "per colpa mia", pt: "por culpa minha" },
						{ it: "al massimo", pt: "no máximo" },
						{ it: "chiuso per ferie", pt: "fechado para férias" },
						{ it: "Buon Ferragosto!", pt: "Bom Ferragosto!" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém se desculpar com você por um atraso, responda *Meglio tardi che mai!*. E se alguém ficar bravo à toa, *Dai, non te la prendere!*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Quando ero piccolo, andavo al mare ogni estate.", pt: "Quando eu era pequeno, ia à praia todo verão." },
				{ it: "Faceva freddo e Rafael aveva solo una giacca leggera.", pt: "Fazia frio e o Rafael só tinha um casaco leve." },
				{ it: "Matteo guidava, Chiara dormiva e Rafael guardava il mare.", pt: "O Matteo dirigia, a Chiara dormia e o Rafael olhava o mar." },
				{ it: "Non avevo mai visto le Dolomiti.", pt: "Eu nunca tinha visto as Dolomitas." },
				{ it: "Quando siamo arrivati, il bar aveva già chiuso.", pt: "Quando chegamos, o bar já tinha fechado." },
				{ it: "Questo gelato è migliore di quello di ieri.", pt: "Este sorvete é melhor que o de ontem." },
				{ it: "Oggi sto meglio, grazie.", pt: "Hoje estou melhor, obrigado." },
				{ it: "Mia sorella minore è la più alta della famiglia.", pt: "Minha irmã caçula é a mais alta da família." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Quando eu era criança, morava em Recife.", parts: ["Quando ", null, " bambino, abitavo a Recife."], answers: ["ero"] },
				{ pt: "Todo dia a gente comia no camping.", parts: ["Ogni giorno ", null, " in campeggio."], answers: ["mangiavamo"] },
				{ pt: "Eles já tinham partido.", parts: ["Erano già ", null, "."], answers: ["partiti"] },
				{ pt: "É o melhor restaurante da cidade.", parts: ["È il ristorante ", null, " della città."], answers: ["migliore"] },
				{ pt: "A Chiara dirige melhor que o Matteo.", parts: ["Chiara guida ", null, " di Matteo."], answers: ["meglio"] }
			]
		}
	]
};

export const unidade: Unit = { no: 9, title: 'Férias de verão', lessons: [57, 58, 59, 60, 61, 62, 63] };

export const licoes: Lesson[] = [licao57, licao58, licao59, licao60, licao61, licao62, licao63];
