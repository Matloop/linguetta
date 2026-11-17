import type { Lesson, Unit } from '../types.ts';

// Lições 15–21: Rafael e Chiara voam de Bolonha a Nápoles. A casa dos pais da Chiara está em obra,
// então eles ficam no Hotel Sirena, em Mergellina, à beira-mar (recepcionista: o velho Gaetano).
// No bar conhecem os Weber (casal austríaco) e a Léa (fotógrafa francesa). A 20 termina com o
// programa de passeios da semana e a escolha adiada para o café da manhã seguinte.
// Ver docs/agents/curso-assimil-mapa.md.

const licao15: Lesson = {
	no: 15,
	kind: 'licao',
	title: 'Benvenuto a Napoli!',
	titlePt: 'Bem-vindo a Nápoles!',
	lines: [
		{
			it: "Rafael, guarda dal finestrino: ecco il Vesuvio!",
			pt: "Rafael, olha pela janela: aí está o Vesúvio!",
			lit: "Rafael, olha da janelinha: eis o Vesúvio!",
			note: "*Il finestrino* é a janela do avião, do trem ou do carro; a de casa é *la finestra*. *Dal* é *da* + *il*: o italiano olha *da* janela, onde nós olhamos “pela” janela."
		},
		{
			it: "Che spettacolo! E quell'isola nel mare?",
			pt: "Que espetáculo! E aquela ilha no mar?",
			note: "*Nel* = *in* + *il*. Em *quell'isola*, *quella* perde o *a* diante de vogal, como *una* em *un'isola*."
		},
		{
			it: "È Capri. Dall'aereo sembra piccola, ma è bellissima.",
			pt: "É Capri. Do avião parece pequena, mas é lindíssima.",
			note: "*Dall'aereo* = *da* + *l'aereo*. A preposição e o artigo viram uma palavra só, na escrita e na fala: “dal-la-é-re-o”. *Sembrare* = parecer."
		},
		{
			it: "Dov'è il mio passaporto? Nella tasca della giacca? Nello zaino?",
			pt: "Cadê o meu passaporte? No bolso do casaco? Na mochila?",
			lit: "Onde está o meu passaporte? No bolso do casaco? No mochila?",
			note: "*Nella* = *in* + *la*; *della* = *di* + *la*; *nello* = *in* + *lo*, porque se diz *lo zaino*. A preposição se junta ao artigo que a palavra já pede. *La tasca* é o bolso."
		},
		{
			it: "Tranquillo: è nello zaino, sotto il computer. Come sempre!",
			pt: "Calma: está na mochila, embaixo do computador. Como sempre!",
			note: "*Tranquillo* (para mulher, *tranquilla*) = calma, fica tranquilo. *Il computer* é palavra inglesa e, como quase toda palavra estrangeira, não muda no plural: *i computer*."
		},
		{
			it: "Meno male! E adesso, dov'è il ritiro bagagli?",
			pt: "Ainda bem! E agora, onde é a retirada de bagagem?",
			lit: "Menos mal! E agora, onde é a retirada bagagens?",
			note: "*Meno male* = ainda bem. *Il bagaglio* é masculino, embora “a bagagem” seja feminina. Muitas palavras em *-aggio* e *-aglio* fazem isso: *il viaggio* (a viagem), *il messaggio* (a mensagem)."
		},
		{
			it: "Lì, a sinistra, dopo il bar. Oh, un messaggio di mia madre.",
			pt: "Ali, à esquerda, depois do bar. Ah, uma mensagem da minha mãe.",
			note: "*A sinistra* = à esquerda; *a destra* = à direita. *Dopo il bar*: “depois do bar”, sem *di*."
		},
		{ it: "Tutto bene?", pt: "Tudo bem?" },
		{
			it: "Insomma... a casa dei miei ci sono i muratori: rifanno il bagno.",
			pt: "Mais ou menos... na casa dos meus pais tem pedreiro: estão refazendo o banheiro.",
			lit: "Enfim... a casa dos meus há os pedreiros: refazem o banheiro.",
			note: "*Insomma* = enfim, mais ou menos, a resposta de quem não está muito feliz. *I miei* = os meus, ou seja, os meus pais. *A casa di* = na casa de. *Rifanno* = (eles) refazem, de *rifare*; o verbo *fare* (fazer) tem várias formas irregulares, que virão aos poucos."
		},
		{
			it: "E noi? Dove dormiamo?",
			pt: "E nós? Onde a gente dorme?",
			note: "*Dormire* é um verbo em *-ire*: *dormo, dormi, dorme, dormiamo, dormite, dormono*."
		},
		{
			it: "Lì no, purtroppo. Cerchiamo un albergo sul mare!",
			pt: "Lá não, infelizmente. Vamos procurar um hotel à beira-mar!",
			lit: "Lá não, infelizmente. Procuramos um hotel sobre o mar!",
			note: "*Purtroppo* = infelizmente. *Sul* = *su* + *il*; *sul mare* = à beira-mar. *Albergo* e *hotel* são sinônimos; *hotel*, estrangeira, fica igual no plural: *gli hotel*."
		},
		{
			it: "Sul mare? Perfetto! E che caldo: a Bologna fa freddo e qui c'è il sole.",
			pt: "À beira-mar? Perfeito! E que calor: em Bolonha está frio e aqui está fazendo sol.",
			note: "Para falar do tempo: *fa caldo* (lição 6), *fa freddo*, *c'è il sole* (faz sol), *c'è vento* (está ventando)."
		},
		{
			it: "È Napoli, caro mio! Dai, prendiamo un taxi.",
			pt: "É Nápoles, meu caro! Vamos, vamos pegar um táxi.",
			note: "*Il taxi*, *i taxi*: mais uma palavra estrangeira que não muda. *Prendere* serve para todos os transportes: *prendere un taxi, il treno, l'aereo*."
		},
		{
			it: "Buongiorno, ragazzi! Dove andiamo?",
			pt: "Bom dia, pessoal! Para onde vamos?",
			note: "*Andiamo* = vamos, do verbo *andare* (ir), que você verá inteiro na lição 21. O taxista diz *noi*, como quem já embarca na conversa."
		},
		{ it: "In via Toledo, per favore. Quanto costa?", pt: "Para a rua Toledo, por favor. Quanto custa?" },
		{
			it: "Per il centro c'è la tariffa fissa: venticinque euro. Il signore è straniero? Allora benvenuto a Napoli!",
			pt: "Para o centro tem a tarifa fixa: vinte e cinco euros. O senhor é estrangeiro? Então, bem-vindo a Nápoles!",
			note: "O taxista fala com o Rafael na terceira pessoa, *il signore è...?*, um jeito cerimonioso e meio brincalhão. *Straniero* = estrangeiro."
		},
		{
			it: "Stasera c'è un film alla TV, ma Matteo preferisce lo sport.",
			pt: "Hoje à noite tem um filme na TV, mas o Matteo prefere esporte.",
			sep: true,
			note: "*Il film, i film*; *lo sport, gli sport* (*lo* porque começa com *s* + consoante). *La TV* se diz “ti-vú”."
		},
		{
			it: "Il viaggio è lungo, ma il paesaggio è bellissimo.",
			pt: "A viagem é longa, mas a paisagem é lindíssima.",
			note: "*Il viaggio* e *il paesaggio*: masculinos em italiano, femininos em português."
		},
		{
			it: "Sul ponte c'è un fiore rosso.",
			pt: "Na ponte tem uma flor vermelha.",
			note: "Mais duas trocas de gênero: *il ponte* (a ponte) e *il fiore* (a flor)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Palavras de fora e gênero trocado',
			blocks: [
				{
					type: 'p',
					text: "O italiano recebe muitas palavras de outras línguas, sobretudo do inglês, e quase sempre as deixa como estão. No plural, elas não mudam: só o artigo mostra que são várias. A escolha do artigo segue o som, como sempre: *lo sport* (*s* + consoante), *l'hotel* (o *h* é mudo, então conta a vogal)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il film / i film", pt: "o filme / os filmes", pron: "il fílm / i fílm" },
						{ it: "lo sport / gli sport", pt: "o esporte / os esportes", pron: "lo spórt / lhi spórt" },
						{ it: "il com**pu**ter / i com**pu**ter", pt: "o computador / os computadores", pron: "il kom-piú-ter" },
						{ it: "l'ho**tel** / gli ho**tel**", pt: "o hotel / os hotéis", pron: "lo-tél / lhi o-tél" },
						{ it: "il **ta**xi / i **ta**xi", pt: "o táxi / os táxis", pron: "il tá-ksi" }
					]
				},
				{
					type: 'p',
					text: "A maioria dessas palavras é masculina. Algumas são femininas por causa da palavra italiana que traduzem: *l'email* é feminina porque *la posta* (o correio) é feminina, e *la TV* porque *la televisione* também é."
				},
				{ type: 'h', text: "Quando o gênero não bate" },
				{
					type: 'p',
					text: "Quase sempre, o que é masculino em português é masculino em italiano. Mas há exceções, e elas pegam o brasileiro desprevenido. A família mais útil é a das palavras em *-aggio* e *-aglio*, que correspondem às nossas em *-agem*: em português são femininas, em italiano são masculinas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **viag**gio", pt: "a viagem", pron: "il viád-djo" },
						{ it: "il mes**sag**gio", pt: "a mensagem", pron: "il mes-sád-djo" },
						{ it: "il ba**ga**glio", pt: "a bagagem", pron: "il ba-gá-lho" },
						{ it: "il **fio**re", pt: "a flor", pron: "il fiô-re" },
						{ it: "il co**lo**re", pt: "a cor", pron: "il ko-lô-re" },
						{ it: "la **fi**ne", pt: "o fim", pron: "la fí-ne" }
					]
				},
				{
					type: 'p',
					text: "Outras da mesma turma: *il paesaggio* (a paisagem), *il passaggio* (a passagem, e também a carona), *il ponte* (a ponte), *il dolore* (a dor), *la radio* (o rádio)."
				},
				{
					type: 'dica',
					text: "É mais um motivo para guardar cada palavra com o artigo: não *viaggio*, mas *il viaggio*. Com o artigo colado, o gênero nunca se perde."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: preposição e artigo numa palavra só',
			blocks: [
				{
					type: 'p',
					text: "Na lição 0 você viu que as palavras pequenas não têm força própria e se apoiam na seguinte. Com as preposições *di, a, da, in, su*, o italiano vai além: quando vem um artigo depois, os dois se fundem numa palavra só, também na escrita. O diálogo de hoje está cheio delas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "dal fine**stri**no", pt: "da (pela) janela: *da* + *il*", pron: "dal-fi-ne-strí-no" },
						{ it: "dall'a**e**reo", pt: "do avião: *da* + *l'*", pron: "dal-la-é-re-o" },
						{ it: "nello **zai**no", pt: "na mochila: *in* + *lo*", pron: "nêl-lo-dzái-no" },
						{ it: "della **giac**ca", pt: "do casaco: *di* + *la*", pron: "dêl-la-dják-ka" },
						{ it: "sul **ma**re", pt: "à beira-mar: *su* + *il*", pron: "sul-má-re" }
					]
				},
				{
					type: 'p',
					text: "Repare que *in* vira *ne-* (*nel, nello, nella*) e que, sempre que o artigo começa com *l*, o *l* dobra: *della, nello, dall'*. É uma consoante dupla de verdade, como as da lição 0: diga “dêl-la”, segurando o *l*."
				},
				{
					type: 'p',
					text: "Na fala, a preposição articulada se cola também no substantivo: *nello zaino* soa como uma palavra comprida, “nellodzáino”, com a força só no *zai*. Não pare entre as duas."
				},
				{
					type: 'dica',
					text: "Por enquanto, só reconheça essas formas. Na revisão da lição 21 você verá a tabela completa, que é bem mais regular do que parece."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il mio passaporto è nella tasca della giacca.", pt: "O meu passaporte está no bolso do casaco." },
				{ it: "Dal finestrino vediamo il mare e il Vesuvio.", pt: "Pela janela vemos o mar e o Vesúvio." },
				{ it: "I computer di Chiara e di Matteo sono nuovi.", pt: "Os computadores da Chiara e do Matteo são novos." },
				{ it: "C'è un messaggio di Matteo: a Bologna fa freddo.", pt: "Tem uma mensagem do Matteo: em Bolonha está frio." },
				{ it: "Prendiamo un taxi per il centro?", pt: "Vamos pegar um táxi para o centro?" },
				{ it: "Il viaggio da Bologna a Napoli è breve.", pt: "A viagem de Bolonha a Nápoles é curta." },
				{ it: "Dormiamo in un albergo sul mare.", pt: "Vamos dormir num hotel à beira-mar." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O passaporte está na mochila.", parts: ["Il passaporto è ", null, " zaino."], answers: ["nello"] },
				{ pt: "Olha pela janela!", parts: ["Guarda ", null, " finestrino!"], answers: ["dal"] },
				{ pt: "Os filmes italianos são bonitos.", parts: ["I ", null, " italiani sono belli."], answers: ["film"] },
				{ pt: "Esta mensagem é da Chiara.", parts: ["Questo ", null, " è di Chiara."], answers: ["messaggio"] },
				{ pt: "O Matteo prefere o esporte.", parts: ["Matteo preferisce ", null, " sport."], answers: ["lo"] }
			]
		}
	]
};

const licao16: Lesson = {
	no: 16,
	kind: 'licao',
	title: "All'agenzia di viaggi",
	titlePt: 'Na agência de viagens',
	lines: [
		{
			it: "Chiara! Che sorpresa! Come stai? E come sta papà?",
			pt: "Chiara! Que surpresa! Como vai? E como está o seu pai?",
			lit: "Chiara! Que surpresa! Como estás? E como está papai?",
			note: "O senhor Esposito é um velho amigo da família. *Papà*, com a força no fim, é o pai dito com carinho. Falando com os filhos, até quem é de fora da família costuma dizer só *papà*, sem artigo e sem possessivo."
		},
		{
			it: "Tutti bene, grazie, signor Esposito! Questo è Rafael, il mio coinquilino.",
			pt: "Todos bem, obrigada, senhor Esposito! Este é o Rafael, o meu colega de apartamento.",
			note: "*Signore* perde o *e* final diante do nome: *signor Esposito*. O mesmo acontece com *dottore* e *professore*: *dottor Russo*, *professor Bianchi*."
		},
		{
			it: "Piacere! Un turista brasiliano a Napoli! Benvenuto.",
			pt: "Prazer! Um turista brasileiro em Nápoles! Seja bem-vindo.",
			note: "*Il turista* termina em *-a*, mas é masculino; plural *i turisti*. Para mulheres, *la turista*, *le turiste*. O mesmo vale para *il tassista* (o taxista), *il collega*, *l'artista*."
		},
		{
			it: "Grazie! Ma abbiamo un problema: non abbiamo un albergo.",
			pt: "Obrigado! Mas temos um problema: não temos hotel.",
			lit: "Obrigado! Mas temos um problema: não temos um hotel.",
			note: "*Il problema* também é masculino em *-a*, com plural *i problemi*. Várias palavras de origem grega são assim: *il programma*, *il clima*, *il panorama*. Em português elas também são masculinas, então aqui o instinto ajuda."
		},
		{
			it: "A casa dei miei ci sono i lavori. Siamo qui per chiedere un consiglio.",
			pt: "A casa dos meus pais está em obra. Viemos pedir um conselho.",
			lit: "A casa dos meus há os trabalhos. Somos aqui para pedir um conselho.",
			note: "*I lavori* (os trabalhos) = a obra, a reforma. *Chiedere* = pedir: *chiedere un consiglio*, *chiedere uno sconto*."
		},
		{
			it: "Siete nel posto giusto: conosco tutti gli alberghi della città!",
			pt: "Vocês vieram ao lugar certo: conheço todos os hotéis da cidade!",
			lit: "Sois no lugar justo: conheço todos os hotéis da cidade!",
			note: "*Albergo* → *alberghi*: o *h* mantém o *g* duro, como em *lungo* → *lunghi*. Você verá essa regra com calma na lição 20."
		},
		{ it: "Che cosa cercate? Un albergo in centro?", pt: "O que vocês estão procurando? Um hotel no centro?" },
		{
			it: "Sul mare, con un buon prezzo.",
			pt: "À beira-mar, com um bom preço.",
			note: "Antes de substantivo masculino, *buono* perde o *-o*: *un buon prezzo*, *buon viaggio*, *buongiorno*. Funciona como o artigo *un*: diante de *s* + consoante e de *z*, volta a ser *buono* (*un buono studente*). No feminino, *buona*: *buona sera*."
		},
		{
			it: "Allora l'Hotel Sirena, a Mergellina. È piccolo, ma il panorama è stupendo.",
			pt: "Então o Hotel Sirena, em Mergellina. É pequeno, mas a vista é maravilhosa.",
			lit: "Então o Hotel Sirena, a Mergellina. É pequeno, mas o panorama é estupendo.",
			note: "Mergellina é um bairro de Nápoles na beira do golfo, de onde saem barcos para as ilhas. *Stupendo* = maravilhoso, lindíssimo."
		},
		{
			it: "E quanto costa? Domando perché siamo studenti.",
			pt: "E quanto custa? Pergunto porque somos estudantes.",
			note: "*Domandare* = perguntar. *Chiedere* também serve para perguntar (*chiedo un'informazione*) e é o mais comum no dia a dia. Para “pedir”, use sempre *chiedere*."
		},
		{
			it: "Sessanta euro la singola, con la colazione. Ma il direttore, il dottor Russo, è un amico: chiedo uno sconto.",
			pt: "Sessenta euros o quarto de solteiro, com café da manhã. Mas o diretor, o doutor Russo, é um amigo: vou pedir um desconto.",
			note: "Falando *de* uma pessoa, o título leva artigo: *il dottor Russo è un amico*. Falando *com* ela, não: *buongiorno, dottor Russo*. *La singola* (subentendido *camera*) é o quarto para uma pessoa."
		},
		{
			it: "Pronto? Dottor Russo, buongiorno! Sono Esposito. Ho due turisti per Lei...",
			pt: "Alô? Doutor Russo, bom dia! É o Esposito. Tenho dois turistas para o senhor...",
			lit: "Pronto? Doutor Russo, bom dia! Sou Esposito. Tenho dois turistas para o senhor...",
			note: "*Pronto?* é o “alô?” do telefone. Ao telefone, o italiano se apresenta com *sono*: *sono Esposito*, “é o Esposito”."
		},
		{ it: "Chiara, il dottor Russo è medico?", pt: "Chiara, o doutor Russo é médico?" },
		{
			it: "Non per forza! In Italia ogni laureato è dottore.",
			pt: "Não necessariamente! Na Itália, todo formado é doutor.",
			lit: "Não por força! Em Itália cada formado é doutor.",
			note: "*La laurea* é o diploma universitário; *il laureato*, *la laureata*, quem tem. Na Itália, qualquer formado pode ser chamado de *dottore* ou *dottoressa*, não só os médicos. *Non per forza* = não necessariamente."
		},
		{
			it: "Fatto! C'è posto, e c'è anche lo sconto. Buone vacanze, ragazzi!",
			pt: "Pronto! Tem vaga, e tem desconto também. Boas férias, pessoal!",
			lit: "Feito! Há lugar, e há também o desconto. Boas férias, rapazes!",
			note: "*Fatto!* = feito, pronto. *C'è posto* = tem lugar, tem vaga. *Le vacanze* = as férias; no singular, *la vacanza* é um período de férias, uma viagem."
		},
		{
			it: "Grazie mille, signore! Lei è un mago!",
			pt: "Muito obrigado, senhor! O senhor é um mágico!",
			note: "Sem nome depois, *signore* fica inteiro: *grazie, signore*."
		},
		{
			it: "Il tassista chiede la strada a un collega.",
			pt: "O taxista pergunta o caminho a um colega.",
			lit: "O taxista pede a rua a um colega.",
			sep: true,
			note: "*Chiedere qualcosa a qualcuno*: pedir ou perguntar algo a alguém. *Chiedere la strada* = perguntar o caminho."
		},
		{
			it: "Buon appetito, dottor Bianchi! Grazie, altrettanto!",
			pt: "Bom apetite, doutor Bianchi! Obrigado, igualmente!",
			note: "*Altrettanto* = igualmente, a resposta para *buon appetito*, *buona giornata*, *buon weekend*."
		},
		{ it: "Le turiste americane cercano un buon ristorante.", pt: "As turistas americanas estão procurando um bom restaurante." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Chiedere, domandare e o buon',
			blocks: [
				{
					type: 'p',
					text: "O português separa “pedir” de “perguntar”. O italiano tem dois verbos que se cruzam: *chiedere* faz as duas coisas, e *domandare* é usado sobretudo para perguntar. Na dúvida, use *chiedere*: nunca está errado."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Chie**do uno **scon**to.", pt: "Peço um desconto.", pron: "kié-do u-no skôn-to" },
						{ it: "**Chie**do la **stra**da.", pt: "Pergunto o caminho.", pron: "kié-do la strá-da" },
						{ it: "Do**man**do il **prez**zo.", pt: "Pergunto o preço.", pron: "do-mán-do il prét-tso" }
					]
				},
				{
					type: 'p',
					text: "A pessoa a quem se pede ou pergunta vem com *a*: *chiedo un consiglio al signor Esposito*, *domando a Chiara*. E lembre do substantivo da lição 2: *la domanda* é a pergunta, nunca a “demanda”."
				},
				{ type: 'h', text: "Buono que encolhe" },
				{
					type: 'p',
					text: "Antes de um substantivo masculino singular, *buono* se comporta como o artigo *uno*: perde o *-o* na maioria dos casos e só fica inteiro antes de *s* + consoante e de *z*. No feminino e no plural, nada muda."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un buon **prez**zo, buon **viag**gio", pt: "um bom preço, boa viagem" },
						{ it: "buon ap**pe**tito, buon an**ni**versario", pt: "bom apetite, feliz aniversário (de casamento)" },
						{ it: "un **buo**no stu**den**te", pt: "um bom estudante" },
						{ it: "**buo**na **se**ra, **buo**ne va**can**ze", pt: "boa noite, boas férias" }
					]
				},
				{
					type: 'dica',
					text: "Daí vêm os cumprimentos colados numa palavra: *buongiorno*, *buonasera*, *buonanotte*. Escreve-se também separado (*buon giorno*), mas a forma junta é a mais comum."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Masculinos em -a e os títulos',
			blocks: [
				{
					type: 'p',
					text: "Você já sabe que *-a* costuma ser feminino. Há dois grupos de exceções, e ambos apareceram hoje."
				},
				{ type: 'h', text: "Profissões em -ista e -a" },
				{
					type: 'p',
					text: "As palavras em *-ista* servem para homem e mulher, como em português (“o taxista”, “a taxista”). Só o artigo e o plural mostram a diferença: no masculino plural, *-i*; no feminino plural, *-e*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il tu**ri**sta / i tu**ri**sti", pt: "o turista / os turistas", pron: "tu-rís-ta / tu-rís-ti" },
						{ it: "la tu**ri**sta / le tu**ri**ste", pt: "a turista / as turistas" },
						{ it: "il tas**si**sta / i tas**si**sti", pt: "o taxista / os taxistas", pron: "tas-sís-ta" },
						{ it: "il col**le**ga / i col**le**ghi", pt: "o colega / os colegas", pron: "kol-lé-ga / kol-lé-gui" }
					]
				},
				{ type: 'h', text: "As palavras gregas em -ma" },
				{
					type: 'p',
					text: "*Il problema*, *il programma*, *il clima*, *il panorama*, *il tema*, *il sistema*: masculinas, com plural em *-i* (*i problemi*, *i programmi*). Em português também são masculinas, então basta lembrar o plural."
				},
				{ type: 'h', text: "Signor, dottor, professor" },
				{
					type: 'p',
					text: "*Signore*, *dottore*, *professore* e *ingegnere* perdem o *-e* diante de um nome: *il signor Esposito*, *il dottor Russo*, *il professor Bianchi*. Sozinhos, ficam inteiros: *grazie, signore*. No feminino nada cai: *la signora Esposito*, *la dottoressa Russo*."
				},
				{
					type: 'p',
					text: "E o artigo? Quando você fala *com* a pessoa, sem artigo: *Buongiorno, dottor Russo!*. Quando fala *dela*, com artigo: *Il dottor Russo è un amico*. É o contrário do que acontece com os nomes próprios, que no italiano padrão vão sem artigo: *Chiara*. (No norte, na fala, é comum ouvir *la Chiara*; isso fica para mais adiante.)"
				},
				{
					type: 'dica',
					text: "Na Itália, *dottore* é qualquer pessoa formada na universidade. Em lojas e escritórios, chamar um desconhecido de terno de *dottore* é uma gentileza comum, mesmo sem saber se ele é formado."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Chiedo un consiglio al signor Esposito.", pt: "Peço um conselho ao senhor Esposito." },
				{ it: "Il tassista è simpatico e conosce bene la città.", pt: "O taxista é simpático e conhece bem a cidade." },
				{ it: "Domando a Chiara dov'è l'albergo.", pt: "Pergunto à Chiara onde fica o hotel." },
				{ it: "Buon viaggio e buone vacanze!", pt: "Boa viagem e boas férias!" },
				{ it: "Il programma della vacanza è pronto.", pt: "O programa das férias está pronto." },
				{ it: "Buongiorno, dottor Russo! Come sta?", pt: "Bom dia, doutor Russo! Como vai o senhor?" },
				{ it: "Il professor Bianchi ha due colleghi brasiliani.", pt: "O professor Bianchi tem dois colegas brasileiros." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Bom dia, senhor Esposito!", parts: ["Buongiorno, ", null, " Esposito!"], answers: ["signor"] },
				{ pt: "Procuramos um hotel com um bom preço.", parts: ["Cerchiamo un albergo con un ", null, " prezzo."], answers: ["buon"] },
				{ pt: "Os turistas estão no hotel.", parts: ["I ", null, " sono in albergo."], answers: ["turisti"] },
				{ pt: "Eu peço um desconto.", parts: ["Io ", null, " uno sconto."], answers: ["chiedo"] },
				{ pt: "Temos um problema: não temos hotel.", parts: ["Abbiamo un ", null, ": non abbiamo un albergo."], answers: ["problema"] }
			]
		}
	]
};

const licao17: Lesson = {
	no: 17,
	kind: 'licao',
	title: 'Alla reception',
	titlePt: 'Na recepção',
	lines: [
		{
			it: "Buonasera, signori. Loro sono gli amici del signor Esposito?",
			pt: "Boa tarde, senhores. Os senhores são os amigos do senhor Esposito?",
			lit: "Boa noite, senhores. Eles são os amigos do senhor Esposito?",
			note: "*Buonasera* já se diz a partir do meio da tarde. E *Loro*, com maiúscula, é o plural de *Lei*: “os senhores”, “as senhoras”. O verbo vai na terceira pessoa do plural: *Loro sono*."
		},
		{ it: "Sì, siamo noi. Buonasera!", pt: "Sim, somos nós. Boa tarde!" },
		{
			it: "Benvenuti all'Hotel Sirena. Desiderano una camera doppia?",
			pt: "Bem-vindos ao Hotel Sirena. Os senhores desejam um quarto duplo?",
			lit: "Bem-vindos ao Hotel Sirena. Desejam um quarto duplo?",
			note: "*Desiderano*: com *Loro*, até o verbo fica cerimonioso. *La camera* é o quarto de dormir, de hotel ou de casa; a câmera fotográfica é *la macchina fotografica*."
		},
		{
			it: "No, due singole, per favore. Per una settimana.",
			pt: "Não, dois quartos de solteiro, por favor. Por uma semana.",
			lit: "Não, duas simples, por favor. Por uma semana.",
			note: "*Singola* e *doppia* concordam com *camera*, que fica subentendida."
		},
		{
			it: "Vediamo... Ci sono due singole libere: una con vista sul mare e una con vista sul parcheggio.",
			pt: "Vamos ver... Há dois quartos de solteiro livres: um com vista para o mar e um com vista para o estacionamento.",
			note: "*Vediamo* = vamos ver. *Con vista sul mare* = com vista para o mar."
		},
		{
			it: "Chiara, perché il signore dice Loro? Chi sono loro?",
			pt: "Chiara, por que o senhor diz *Loro*? Quem são eles?",
			note: "Rafael ainda não conhece esse *Loro*: para ele, *loro* é só “eles”. *Dice* = diz, do verbo *dire*."
		},
		{
			it: "Siamo noi! È il Lei per due o più persone. È molto formale: oggi quasi tutti dicono voi.",
			pt: "Somos nós! É o *Lei* para duas pessoas ou mais. É muito formal: hoje quase todo mundo diz *voi*.",
			note: "Hoje, para falar com várias pessoas, mesmo desconhecidas, quase todos usam *voi*. O *Loro* de cortesia ficou para hotéis tradicionais, cerimônias e cartas muito formais. Basta reconhecê-lo."
		},
		{
			it: "Loro prendono la mezza pensione? Colazione e cena.",
			pt: "Os senhores vão querer meia pensão? Café da manhã e jantar.",
			lit: "Eles pegam a meia pensão? Café da manhã e jantar.",
			note: "*La mezza pensione* = meia pensão. *La pensione completa* inclui também o almoço, *il pranzo*."
		},
		{ it: "Quanto costa la mezza pensione?", pt: "Quanto custa a meia pensão?" },
		{
			it: "Venti euro in più a persona. E la nostra cucina è famosa!",
			pt: "Vinte euros a mais por pessoa. E a nossa cozinha é famosa!",
			note: "*In più* = a mais. *A persona* = por pessoa."
		},
		{
			it: "Solo la colazione, grazie. La sera mangiamo in pizzeria!",
			pt: "Só o café da manhã, obrigada. À noite a gente come na pizzaria!"
		},
		{
			it: "Come preferiscono. Loro sono fortunati: adesso c'è posto. A maggio e a giugno l'albergo è sempre pieno.",
			pt: "Como preferirem. Os senhores têm sorte: agora tem vaga. Em maio e em junho o hotel está sempre lotado.",
			lit: "Como preferem. Eles são afortunados: agora há lugar. A maio e a junho o hotel é sempre cheio.",
			note: "Com os meses, use *a* ou *in*, tanto faz: *a maggio* ou *in maggio* (em maio). Os meses se escrevem com minúscula. *Pieno* = cheio."
		},
		{ it: "E in luglio e agosto?", pt: "E em julho e agosto?" },
		{
			it: "Peggio ancora! In estate fa molto caldo e ci sono turisti dappertutto.",
			pt: "Pior ainda! No verão faz muito calor e tem turista por toda parte.",
			note: "*Peggio ancora* = pior ainda. *In estate* (ou *d'estate*) = no verão. *Dappertutto* = em toda parte."
		},
		{
			it: "Ecco le chiavi: la dodici per il signore e la quattordici per la signorina, al secondo piano. E i documenti, per favore.",
			pt: "Aqui estão as chaves: o doze para o senhor e o catorze para a senhorita, no segundo andar. E os documentos, por favor.",
			note: "Para os quartos, basta o número no feminino: *la dodici*, subentendido *camera*. *Il piano* = o andar. Na Itália, o hotel registra o documento de cada hóspede. E *signorina* é um tratamento antiquado; hoje se diz *signora* a qualquer mulher adulta."
		},
		{
			it: "Ecco il passaporto... Ma dov'è il passaporto?",
			pt: "Aqui está o passaporte... Mas cadê o passaporte?"
		},
		{
			it: "Nello zaino, sotto il computer. Come sempre!",
			pt: "Na mochila, embaixo do computador. Como sempre!"
		},
		{
			it: "Signori, Loro sono di Roma? Ragazzi, voi siete di Roma?",
			pt: "Senhores, os senhores são de Roma? Pessoal, vocês são de Roma?",
			sep: true,
			note: "A mesma pergunta, cerimoniosa e do dia a dia. A segunda é a que você vai ouvir quase sempre."
		},
		{ it: "A gennaio fa freddo; in agosto fa caldo.", pt: "Em janeiro faz frio; em agosto faz calor." },
		{
			it: "Il compleanno di Chiara è a marzo, quello di Rafael ad aprile.",
			pt: "O aniversário da Chiara é em março, o do Rafael em abril.",
			note: "*Ad aprile*: diante de vogal, sobretudo de outro *a*, *a* pode virar *ad*, como *e* vira *ed* (lição 13)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Loro, voi e os meses',
			blocks: [
				{
					type: 'p',
					text: "Na lição 2 você conheceu o *Lei* de cortesia, que usa o verbo da terceira pessoa do singular. O seu plural é *Loro*, com o verbo na terceira do plural, igual a “eles”: *Loro sono*, *Loro desiderano*, *Loro prendono*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Lei è di **Ro**ma?", pt: "O senhor é de Roma? (uma pessoa, formal)" },
						{ it: "**Lo**ro **so**no di **Ro**ma?", pt: "Os senhores são de Roma? (várias, muito formal)" },
						{ it: "**Voi** **sie**te di **Ro**ma?", pt: "Vocês são de Roma? / Os senhores são de Roma? (várias, uso comum)" }
					]
				},
				{
					type: 'p',
					text: "Na prática, o *Loro* quase desapareceu. Para falar com um grupo, seja de amigos ou de desconhecidos, o italiano de hoje usa *voi*. Você vai ouvir *Loro* num hotel antigo, num restaurante muito chique ou numa cerimônia. Reconhecer basta; para falar, fique com *voi*."
				},
				{ type: 'h', text: "Os meses" },
				{
					type: 'p',
					text: "Os meses são masculinos e se escrevem com minúscula. Para dizer “em” tal mês, use *a* ou *in*: *a maggio*, *in maggio*. Diante de vogal, *a* costuma virar *ad*: *ad aprile*, *ad agosto*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gen**na**io, feb**bra**io, **mar**zo", pt: "janeiro, fevereiro, março", pron: "djen-ná-io, feb-brá-io, már-tso" },
						{ it: "a**pri**le, **mag**gio, **giu**gno", pt: "abril, maio, junho", pron: "a-prí-le, mád-djo, djú-nho" },
						{ it: "**lu**glio, a**go**sto, set**tem**bre", pt: "julho, agosto, setembro", pron: "lú-lho, a-gôs-to, set-tém-bre" },
						{ it: "ot**to**bre, no**vem**bre, di**cem**bre", pt: "outubro, novembro, dezembro", pron: "ot-tô-bre, no-vém-bre, di-tchém-bre" }
					]
				},
				{
					type: 'p',
					text: "Cuidado com *luglio* e *giugno*, que o brasileiro troca fácil: *giugno* (“djú-nho”) é junho, com o “nh” de *gn*; *luglio* (“lú-lho”) é julho, com o “lh” de *gli*. E *maggio* não tem nada de “maio” na pronúncia: “mád-djo”."
				},
				{ type: 'h', text: "As estações" },
				{
					type: 'exemplos',
					items: [
						{ it: "la prima**ve**ra, l'e**sta**te, l'au**tun**no, l'in**ver**no", pt: "a primavera, o verão, o outono, o inverno", pron: "pri-ma-vé-ra, les-tá-te, lau-tún-no, lin-vér-no" }
					]
				},
				{
					type: 'dica',
					text: "*L'estate* é feminina (*l'estate è calda*) e parece “estação”, mas quer dizer verão. Para dizer “no verão”: *in estate* ou *d'estate*; “no inverno”: *in inverno* ou *d'inverno*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'No hotel',
			blocks: [
				{
					type: 'p',
					text: "Algumas palavras para não passar aperto na recepção. Repare que *camera* é o quarto de dormir; *stanza* (lição 2) é qualquer cômodo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "una **ca**mera **sin**gola", pt: "um quarto de solteiro", pron: "ká-me-ra sín-go-la" },
						{ it: "una **ca**mera **dop**pia", pt: "um quarto duplo (duas camas ou cama de casal)", pron: "dôp-pia" },
						{ it: "una **ca**mera matrimo**nia**le", pt: "um quarto com cama de casal", pron: "ma-tri-mo-niá-le" },
						{ it: "la co**la**zione è in**clu**sa", pt: "o café da manhã está incluído", pron: "ko-la-tsiô-ne é in-klú-za" },
						{ it: "la **mez**za pen**sio**ne", pt: "a meia pensão (café e jantar)", pron: "méd-dza pen-siô-ne" },
						{ it: "la **chia**ve, il **pia**no", pt: "a chave, o andar", pron: "kiá-ve, piá-no" }
					]
				},
				{
					type: 'p',
					text: "Os italianos chamam a recepção de *la reception*, com pronúncia mais ou menos inglesa, e a palavra não muda no plural. Ao fazer o check-in, é comum ouvirem *un documento, per favore*: o hotel tem de registrar todos os hóspedes."
				},
				{
					type: 'dica',
					text: "*La colazione* é o café da manhã; *il pranzo*, o almoço; *la cena*, o jantar. Não confunda *colazione* com “colação”: é a refeição da manhã, e pronto."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Loro desiderano la colazione in camera?", pt: "Os senhores desejam o café da manhã no quarto?" },
				{ it: "Ragazzi, voi prendete la mezza pensione?", pt: "Pessoal, vocês vão querer a meia pensão?" },
				{ it: "A dicembre l'albergo è chiuso.", pt: "Em dezembro o hotel fica fechado." },
				{ it: "Avete una camera doppia per tre notti?", pt: "Vocês têm um quarto duplo para três noites?" },
				{ it: "La singola costa sessanta euro a notte.", pt: "O quarto de solteiro custa sessenta euros por noite." },
				{ it: "In estate ci sono turisti dappertutto.", pt: "No verão tem turista por toda parte." },
				{ it: "La chiave della camera quattordici, per favore.", pt: "A chave do quarto catorze, por favor." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Em julho faz calor.", parts: ["A ", null, " fa caldo."], answers: ["luglio"] },
				{ pt: "Vocês desejam um quarto duplo?", parts: ["Desiderate una camera ", null, "?"], answers: ["doppia"] },
				{ pt: "Meia pensão: café da manhã e jantar.", parts: ["Mezza pensione: colazione e ", null, "."], answers: ["cena"] },
				{ pt: "O quarto fica no segundo andar.", parts: ["La camera è al secondo ", null, "."], answers: ["piano"] },
				{ pt: "Vinte euros a mais por pessoa.", parts: ["Venti euro in più a ", null, "."], answers: ["persona"] }
			]
		}
	]
};

const licao18: Lesson = {
	no: 18,
	kind: 'licao',
	title: 'Una camera con vista',
	titlePt: 'Um quarto com vista',
	lines: [
		{
			it: "Chiara, vieni a vedere! Apri la finestra e guarda!",
			pt: "Chiara, vem ver! Abre a janela e olha!",
			note: "Hoje você conhece o imperativo, a forma de pedir e mandar. Com *tu*, os verbos em *-are* terminam em *-a* (*guarda*), e os em *-ere* e *-ire*, em *-i* (*apri*, *prendi*). *Vieni* vem de *venire* (vir), que você verá na próxima lição."
		},
		{
			it: "Uffa! Tu hai il mare e io ho il parcheggio.",
			pt: "Ah, que chato! Você fica com o mar e eu com o estacionamento.",
			lit: "Ufa! Tu tens o mar e eu tenho o estacionamento.",
			note: "*Uffa!* é a reclamação de quem está aborrecido: “que chato!”, “ah, não!”. Não é o nosso “ufa!” de alívio."
		},
		{
			it: "C'è anche un balcone, con due sedie. Una è per te!",
			pt: "Tem também uma varanda, com duas cadeiras. Uma é para você!",
			note: "*Per te* = para você. Depois de preposição, *tu* vira *te*: *per te*, *con te*."
		},
		{
			it: "Che gentile! Senti, apriamo il frigobar? Ho una sete...",
			pt: "Que gentil! Escuta, vamos abrir o frigobar? Estou com uma sede...",
			lit: "Que gentil! Escuta, abrimos o frigobar? Tenho uma sede...",
			note: "*Senti* (escuta) é um jeito muito comum de puxar assunto ou fazer uma proposta. *Ho sete* = estou com sede; lembre da lição 0: *sete* com um *t* é sede, e o número é *sette*."
		},
		{
			it: "Apri tu. Io guardo il Vesuvio.",
			pt: "Abre você. Eu vou olhar o Vesúvio.",
			note: "*Apri tu*: o pronome depois do imperativo dá ênfase, como no nosso “abre você”."
		},
		{
			it: "Allora... ci sono due bottiglie d'acqua, una birra e un succo di frutta.",
			pt: "Então... tem duas garrafas de água, uma cerveja e um suco de fruta.",
			note: "Numa lista, *c'è* ou *ci sono* concorda com o que vem logo depois: *ci sono due bottiglie...*, mas *c'è una birra e due bottiglie*."
		},
		{
			it: "E c'è anche qualcosa di buono: il cioccolato!",
			pt: "E tem também uma coisa boa: chocolate!",
			lit: "E há também algo de bom: o chocolate!",
			note: "*Qualcosa* = alguma coisa, algo. Com adjetivo, o italiano põe *di* no meio: *qualcosa di buono* (algo bom), *qualcosa di nuovo* (algo novo)."
		},
		{ it: "Prendi la birra! Io prendo l'acqua.", pt: "Pega a cerveja! Eu fico com a água." },
		{
			it: "Guarda il listino: sei euro una birra! Al bar qui sotto costa due euro.",
			pt: "Olha a tabela: seis euros uma cerveja! No bar aqui embaixo custa dois euros.",
			note: "*Il listino* (dos preços) = a tabela de preços. *Qui sotto* = aqui embaixo."
		},
		{
			it: "Allora chiudi il frigobar. Stasera scendiamo al bar.",
			pt: "Então fecha o frigobar. Hoje à noite a gente desce para o bar.",
			note: "*Chiudere* = fechar; *scendere* = descer. Os dois são verbos em *-ere*."
		},
		{ it: "E il bagno? Com'è?", pt: "E o banheiro? Como é?" },
		{
			it: "Piccolo, ma c'è la doccia e ci sono tre asciugamani.",
			pt: "Pequeno, mas tem chuveiro e tem três toalhas.",
			note: "*La doccia* = o chuveiro, o banho de chuveiro. *L'asciugamano* (de *asciugare*, secar, e *mano*, mão) = a toalha; plural *gli asciugamani*."
		},
		{
			it: "Che lusso! Nel mio bagno c'è un asciugamano solo.",
			pt: "Que luxo! No meu banheiro tem uma toalha só."
		},
		{
			it: "Mamma, papà, guardate! Ecco la vista dalla camera di Rafael.",
			pt: "Mãe, pai, olhem! Esta é a vista do quarto do Rafael.",
			lit: "Mamãe, papai, olhai! Eis a vista do quarto de Rafael.",
			note: "Chiara faz uma videochamada com os pais. Com *voi*, o imperativo é igual ao presente: *guardate*, *prendete*, *aprite*. Só o tom mostra que é um pedido."
		},
		{
			it: "Che meraviglia! Ciao, Rafael! Mangia, eh? Sei troppo magro!",
			pt: "Que maravilha! Oi, Rafael! Come, hein? Você está magro demais!",
			note: "*Mangia* = come (imperativo de *mangiare*). Como toda mãe napolitana que se preze, a da Chiara acha que os amigos dos filhos estão sempre magros demais."
		},
		{
			it: "Buonasera, signora! A Napoli mangio sempre, promesso!",
			pt: "Boa tarde, senhora! Em Nápoles eu como o tempo todo, prometo!",
			lit: "Boa noite, senhora! A Nápoles como sempre, prometido!",
			note: "*Promesso!* = prometo! (literalmente, “prometido”)."
		},
		{
			it: "Ragazzi, prendete le chiavi e aprite la porta!",
			pt: "Pessoal, peguem as chaves e abram a porta!",
			sep: true,
			note: "Imperativo com *voi*: igual ao presente, *prendete*, *aprite*."
		},
		{
			it: "Nel frigo c'è il latte e ci sono i pomodori.",
			pt: "Na geladeira tem leite e tem tomates.",
			note: "*Il frigo* é a forma curta de *il frigorifero*, a geladeira. *Il frigobar* é o pequeno, de hotel."
		},
		{ it: "Leggi il messaggio e rispondi subito!", pt: "Lê a mensagem e responde logo!" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O imperativo de tu e voi',
			blocks: [
				{
					type: 'p',
					text: "Para pedir, convidar ou mandar, o italiano usa o imperativo. Com *tu* e *voi*, ele é quase todo feito de formas que você já conhece."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**guar**da! / guar**da**te!", pt: "olha! / olhem! (*guardare*)" },
						{ it: "**pren**di! / pren**de**te!", pt: "pega! / peguem! (*prendere*)" },
						{ it: "**a**pri! / a**pri**te!", pt: "abre! / abram! (*aprire*)" },
						{ it: "fi**ni**sci! / fi**ni**te!", pt: "termina! / terminem! (*finire*)" }
					]
				},
				{
					type: 'p',
					text: "Com *voi*, o imperativo é idêntico ao presente: *guardate* quer dizer “vocês olham” ou “olhem!”, conforme o tom. Com *tu*, os verbos em *-ere* e *-ire* também repetem o presente (*prendi, apri, finisci*). Só os verbos em *-are* mudam: em vez de *guardi*, o imperativo é *guarda*, terminado em *-a*."
				},
				{
					type: 'p',
					text: "E o “vamos”? É a forma de *noi* do presente: *apriamo il frigobar?* (vamos abrir o frigobar?), *andiamo!* (vamos!), *scendiamo al bar* (vamos descer para o bar)."
				},
				{
					type: 'dica',
					text: "Lembra do *provi* da vendedora na lição 6? Aquele era o imperativo de *Lei*, que tem outras terminações. E para proibir com *tu* (“não olha!”), o italiano usa outra construção. As duas virão mais adiante."
				},
				{ type: 'h', text: "C'è, ci sono e qualcosa" },
				{
					type: 'p',
					text: "*C'è* vai com uma coisa, *ci sono* com várias (lição 2). Numa lista, o verbo concorda com o que vem logo depois dele: *c'è il latte e ci sono i pomodori*; *ci sono due bottiglie, una birra e un succo*."
				},
				{
					type: 'p',
					text: "*Qualcosa* (alguma coisa) é invariável. Para acrescentar uma qualidade, use *di* + adjetivo no masculino: *qualcosa di buono*, *qualcosa di fresco* (algo fresco), *qualcosa di bello*. E na pergunta: *C'è qualcosa nel frigobar?* (tem alguma coisa no frigobar?)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: a força não vai para o fim',
			blocks: [
				{
					type: 'p',
					text: "Aqui mora uma armadilha do português. Nós temos muitos verbos terminados em *-i* com a força no fim: “senti”, “abri”, “parti”, “bebi”. Em italiano, as mesmas letras aparecem em *senti*, *apri*, *parti*, *bevi*, mas a força cai antes. Sem acento escrito, a última sílaba italiana nunca é a forte."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**sen**ti", pt: "escuta", pron: "sén-ti (não “sentí”)" },
						{ it: "**a**pri", pt: "abre", pron: "á-pri (não “abrí”)" },
						{ it: "**pren**di", pt: "pega", pron: "prén-di" },
						{ it: "**par**ti", pt: "você parte", pron: "pár-ti (não “partí”)" },
						{ it: "a**pri**te, guar**da**te", pt: "abram, olhem", pron: "a-prí-te, guar-dá-te" }
					]
				},
				{
					type: 'p',
					text: "No plural, a força fica na penúltima: *a-prí-te*, *guar-dá-te*, *pren-dê-te*. Nada de levar a voz para o *-te* final, e lembre que ele termina em “ê”, não em “i”."
				},
				{ type: 'h', text: "Quando o acento está escrito" },
				{
					type: 'p',
					text: "Se a força for mesmo na última sílaba, o italiano avisa com o acento: *caffè*, *città*, *papà*. E às vezes é só ele que separa duas palavras:"
				},
				{
					type: 'exemplos',
					items: [{ it: "pa**pà** / **pa**pa", pt: "papai / papa", pron: "pa-pá / pá-pa" }]
				},
				{
					type: 'dica',
					text: "Repita em sequência, batendo na primeira sílaba: *apri, senti, prendi, guarda, chiudi*. Depois em frases: *Apri la finestra! Chiudi il frigobar! Senti, Chiara...*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Guarda il mare dal balcone!", pt: "Olha o mar da varanda!" },
				{ it: "Ragazzi, aprite la finestra: fa caldo!", pt: "Pessoal, abram a janela: está calor!" },
				{ it: "Nel frigobar ci sono due birre e c'è un succo.", pt: "No frigobar tem duas cervejas e tem um suco." },
				{ it: "C'è qualcosa di buono in cucina?", pt: "Tem alguma coisa boa na cozinha?" },
				{ it: "Prendi la chiave e chiudi la porta.", pt: "Pega a chave e fecha a porta." },
				{ it: "Senti, stasera scendiamo al bar?", pt: "Escuta, hoje à noite a gente desce para o bar?" },
				{ it: "Nel bagno ci sono tre asciugamani.", pt: "No banheiro tem três toalhas." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Rafael, abre a janela!", parts: ["Rafael, ", null, " la finestra!"], answers: ["apri"] },
				{ pt: "Mãe, pai, olhem o mar!", parts: ["Mamma, papà, ", null, " il mare!"], answers: ["guardate"] },
				{ pt: "No frigobar tem duas garrafas de água.", parts: ["Nel frigobar ", null, " due bottiglie d'acqua."], answers: ["ci sono"] },
				{ pt: "Tem algo bom: o chocolate!", parts: ["C'è qualcosa ", null, " buono: il cioccolato!"], answers: ["di"] },
				{ pt: "Rafael, pega a cerveja!", parts: ["Rafael, ", null, " la birra!"], answers: ["prendi"] }
			]
		}
	]
};

const licao19: Lesson = {
	no: 19,
	kind: 'licao',
	title: 'Nuovi amici',
	titlePt: 'Novos amigos',
	lines: [
		{
			it: "Buonasera! Scusate, è libero questo tavolo?",
			pt: "Boa noite! Com licença, esta mesa está livre?",
			lit: "Boa noite! Desculpai, é livre esta mesa?",
			note: "*Scusate* é o “com licença” dirigido a *voi*, a mais de uma pessoa. Para uma só: *scusa* (com *tu*) ou *scusi* (com *Lei*)."
		},
		{ it: "Sì, certo. Prego!", pt: "Sim, claro. Fiquem à vontade!" },
		{
			it: "Grazie. Permettete? Sono Klaus Weber, e questa è mia moglie, Ingrid.",
			pt: "Obrigado. Com licença, eu sou Klaus Weber, e esta é a minha esposa, Ingrid.",
			lit: "Obrigado. Permitis? Sou Klaus Weber, e esta é minha esposa, Ingrid.",
			note: "*Permettete?* (vocês permitem?) é um jeito educado de se apresentar a quem não se conhece. *Mia moglie*, sem artigo, como todo parente no singular."
		},
		{
			it: "Molto lieta! Io sono Chiara, e lui è Rafael.",
			pt: "Muito prazer! Eu sou a Chiara, e ele é o Rafael.",
			lit: "Muito contente! Eu sou Chiara, e ele é Rafael.",
			note: "*Molto lieto* (dito por mulher, *molto lieta*) = muito prazer, um pouco mais formal que *piacere*. Entre jovens, *piacere* ou um simples *ciao* bastam."
		},
		{
			it: "Io sono di Napoli, e Rafael viene dal Brasile.",
			pt: "Eu sou de Nápoles, e o Rafael vem do Brasil.",
			note: "*Venire* = vir. *Venire da* + lugar diz de onde alguém vem. Com países, a preposição se junta ao artigo: *dal Brasile*, *dalla Francia*. Com cidades, sem artigo: *da Recife*."
		},
		{ it: "Dal Brasile! E da quale città viene?", pt: "Do Brasil! E de que cidade o senhor vem?" },
		{
			it: "Vengo da Recife, nel nord-est. E voi, da dove venite?",
			pt: "Venho de Recife, no Nordeste. E vocês, de onde vêm?",
			note: "*Vengo* = venho; *venite* = vocês vêm. *Venire* é irregular; as seis formas estão na leitura de hoje."
		},
		{
			it: "Veniamo da Vienna. Siamo austriaci, ma veniamo in Italia ogni anno.",
			pt: "Viemos de Viena. Somos austríacos, mas vimos à Itália todo ano.",
			lit: "Vimos de Viena. Somos austríacos, mas vimos em Itália cada ano.",
			note: "*Austriaco* → *austriaci*, com *c* doce. Nacionalidades se escrevem com minúscula: *austriaco, francese, brasiliano*."
		},
		{
			it: "Il Suo italiano è perfetto, signora!",
			pt: "O seu italiano é perfeito, senhora!",
			lit: "O seu italiano é perfeito, senhora!",
			note: "*Suo*, com maiúscula, é o possessivo de *Lei*: “o seu”, “o da senhora”. Concorda com a coisa possuída: *il Suo italiano*, *la Sua camera*, *i Suoi amici*."
		},
		{
			it: "Lei è molto gentile! Mia nonna è di Trieste. Ma Lei, Rafael, come mai parla così bene?",
			pt: "O senhor é muito gentil! A minha avó é de Trieste. Mas e o senhor, Rafael, como é que fala tão bem?",
			note: "*Come mai?* = como assim?, como é que?, uma pergunta com surpresa. Trieste fica no nordeste da Itália, na fronteira com a Eslovênia, e pertenceu à Áustria até 1918."
		},
		{
			it: "Abito con Chiara: è un'insegnante molto severa!",
			pt: "Moro com a Chiara: ela é uma professora muito severa!",
			note: "*Insegnante* = professor ou professora, igual nos dois gêneros: *un insegnante*, *un'insegnante*."
		},
		{ it: "Non è vero! Sono una santa!", pt: "Não é verdade! Eu sou uma santa!" },
		{
			it: "Buonasera! Scusate, anche voi state all'Hotel Sirena? Io sono Léa.",
			pt: "Boa noite! Com licença, vocês também estão no Hotel Sirena? Eu sou a Léa.",
			lit: "Boa noite! Desculpai, também vós estais no Hotel Sirena? Eu sou Léa.",
			note: "*Stare all'Hotel Sirena* = estar hospedado no Hotel Sirena (*stare* como “ficar”, lição 9). *All'* = *a* + *l'*."
		},
		{ it: "Sì! Piacere, Léa. Io sono Rafael. E tu, di dove sei?", pt: "Sim! Prazer, Léa. Eu sou o Rafael. E você, de onde é?" },
		{
			it: "Vengo dalla Francia, da Lione. Sono qui per lavoro: faccio la fotografa.",
			pt: "Venho da França, de Lyon. Estou aqui a trabalho: sou fotógrafa.",
			lit: "Venho da França, de Lião. Sou aqui por trabalho: faço a fotógrafa.",
			note: "Entre jovens, o *tu* vem logo, mesmo com quem acabamos de conhecer. *Fare il* / *la* + profissão = trabalhar como: *faccio la fotografa*, *fa il tassista*. *Faccio* = faço, de *fare*, que você verá inteiro mais adiante."
		},
		{
			it: "E quanto tempo resta a Napoli, signorina?",
			pt: "E quanto tempo a senhorita fica em Nápoles?",
			note: "Klaus, mais velho, trata a jovem por *Lei* e a chama de *signorina*, à moda antiga. *Restare* = ficar, permanecer."
		},
		{
			it: "Poco: fra tre giorni torno a Lione.",
			pt: "Pouco: daqui a três dias volto para Lyon.",
			note: "*Fra* (ou *tra*, que é a mesma coisa) + tempo = daqui a: *fra tre giorni*, daqui a três dias."
		},
		{
			it: "Noi partiamo tra una settimana. Allora, un brindisi ai nuovi amici: cin cin!",
			pt: "Nós vamos embora daqui a uma semana. Então, um brinde aos novos amigos: saúde!",
			lit: "Nós partimos entre uma semana. Então, um brinde aos novos amigos: tchin-tchin!",
			note: "*Partire* = partir, ir embora (de viagem). *Cin cin!* (“tchin tchin”) é o “saúde!” do brinde; também se diz *Alla salute!*. *Ai* = *a* + *i*."
		},
		{
			it: "Vieni anche tu al bar? Sì, vengo fra dieci minuti.",
			pt: "Você vem também ao bar? Sim, vou daqui a dez minutos.",
			sep: true,
			note: "Repare: em resposta a *vieni?*, o italiano diz *vengo*, onde nós dizemos “vou”. Quando se vai para onde o outro está, ou junto com ele, o verbo é *venire*."
		},
		{ it: "I signori Weber vengono dall'Austria.", pt: "O senhor e a senhora Weber vêm da Áustria." },
		{
			it: "Signora, è Sua questa borsa?",
			pt: "Senhora, esta bolsa é sua?",
			note: "Com *Lei*, o possessivo é *Suo, Sua, Suoi, Sue*, escrito com maiúscula por cortesia."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O verbo venire e o fra',
			blocks: [
				{
					type: 'p',
					text: "*Venire* (vir) é irregular, mas segue um desenho fácil de guardar: um *g* aparece em *io* e *loro*, e o *e* vira *ie* em *tu* e *lui*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **ven**go", pt: "eu venho", pron: "vén-go" },
						{ it: "(tu) **vie**ni", pt: "você vem", pron: "vié-ni" },
						{ it: "(lui, lei, Lei) **vie**ne", pt: "ele, ela vem; o senhor vem", pron: "vié-ne" },
						{ it: "(noi) ve**nia**mo", pt: "nós vimos", pron: "ve-niá-mo" },
						{ it: "(voi) ve**ni**te", pt: "vocês vêm", pron: "ve-ní-te" },
						{ it: "(loro) **ven**gono", pt: "eles vêm", pron: "vén-go-no" }
					]
				},
				{
					type: 'p',
					text: "Para dizer de onde alguém vem, *venire da*: *vengo da Recife*, *veniamo da Vienna*. Com país, *da* se junta ao artigo do país: *dal Brasile*, *dalla Francia*, *dall'Austria*, *dagli Stati Uniti*."
				},
				{
					type: 'p',
					text: "*Venire* também serve para ir até onde o outro está ou ir junto com ele: *Vieni al bar? Sì, vengo!* (Você vem ao bar? Sim, vou!). O português diria “vou”; o italiano se põe no lugar de quem convida."
				},
				{ type: 'h', text: "Fra e tra: daqui a" },
				{
					type: 'p',
					text: "*Fra* e *tra* são a mesma palavra; escolhe-se a que soa melhor (*fra tre giorni*, mas *tra fratelli*). Com uma medida de tempo, querem dizer “daqui a”, sempre no futuro: *fra tre giorni torno a Lione*, *partiamo tra una settimana*, *vengo fra dieci minuti*."
				},
				{
					type: 'dica',
					text: "Repare que o italiano usa o presente para esses planos: *fra tre giorni torno* (daqui a três dias eu volto). É o mesmo presente da lição 5, que já servia para “hoje à noite a gente volta aqui”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Apresentações, países e nacionalidades',
			blocks: [
				{
					type: 'p',
					text: "Para se apresentar, você já conhece *piacere* (lição 1). Num tom mais formal, diz-se *molto lieto* (homem) ou *molto lieta* (mulher). E para se apresentar a desconhecidos: *Permettete? Sono...* ou, para uma pessoa só, *Permette? Sono...*"
				},
				{ type: 'h', text: "O Suo de cortesia" },
				{
					type: 'p',
					text: "Quem trata alguém por *Lei* usa também o possessivo correspondente: *Suo*, *Sua*, *Suoi*, *Sue*, que concordam com a coisa possuída, não com a pessoa. *Il Suo italiano* (o seu italiano), *la Sua borsa* (a sua bolsa), *i Suoi figli* (os seus filhos). A maiúscula é uma cortesia da escrita; na fala, não muda nada."
				},
				{ type: 'h', text: "Países e nacionalidades" },
				{
					type: 'p',
					text: "Os países levam artigo, como em português: *l'Italia è bella*, *il Brasile è grande*. Mas com *in* (estar ou ir), o artigo cai: *in Italia*, *in Francia*, *in Brasile*. Com as outras preposições, ele aparece: *dalla Francia*, *del Brasile*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il Bra**si**le → brasi**lia**no", pt: "o Brasil → brasileiro" },
						{ it: "la **Fran**cia → fran**ce**se", pt: "a França → francês, francesa" },
						{ it: "la Ger**ma**nia → te**de**sco", pt: "a Alemanha → alemão", pron: "te-dês-ko" },
						{ it: "l'**Au**stria → au**stria**co", pt: "a Áustria → austríaco" },
						{ it: "la **Spa**gna → spa**gno**lo", pt: "a Espanha → espanhol" },
						{ it: "gli **Sta**ti U**ni**ti → ameri**ca**no", pt: "os Estados Unidos → americano" }
					]
				},
				{
					type: 'p',
					text: "*Tedesco*, que não se parece com nada em português, é o alemão: *i tedeschi*, *la lingua tedesca*. As nacionalidades em *-ese* (*francese*, *inglese*, *portoghese*, *giapponese*) são iguais para homem e mulher, como os adjetivos em *-e* da lição 6."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Da dove vieni? Vengo da Lisbona.", pt: "De onde você vem? Venho de Lisboa." },
				{ it: "Le ragazze vengono al bar fra un'ora.", pt: "As moças vêm ao bar daqui a uma hora." },
				{ it: "Signor Weber, la Sua camera è al primo piano.", pt: "Senhor Weber, o seu quarto fica no primeiro andar." },
				{ it: "Molto lieto, signora. Sono un collega di Matteo.", pt: "Muito prazer, senhora. Sou um colega do Matteo." },
				{ it: "I signori Weber sono austriaci, ma parlano bene l'italiano.", pt: "O casal Weber é austríaco, mas fala bem italiano." },
				{ it: "Fra due giorni partiamo per la Spagna.", pt: "Daqui a dois dias partimos para a Espanha." },
				{ it: "Veniamo in Italia ogni estate.", pt: "Vimos à Itália todo verão." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu venho do Brasil.", parts: ["Io ", null, " dal Brasile."], answers: ["vengo"] },
				{ pt: "Vocês vêm com a gente?", parts: ["Voi ", null, " con noi?"], answers: ["venite"] },
				{ pt: "Os Weber vêm da Áustria.", parts: ["I Weber vengono ", null, "Austria."], answers: ["dall'"] },
				{ pt: "A Léa é francesa.", parts: ["Léa è ", null, "."], answers: ["francese"] },
				{ pt: "Eles vêm amanhã.", parts: ["Loro ", null, " domani."], answers: ["vengono"] }
			]
		}
	]
};

const licao20: Lesson = {
	no: 20,
	kind: 'licao',
	title: 'Il programma delle gite',
	titlePt: 'O programa dos passeios',
	lines: [
		{
			it: "Buongiorno, ragazzi! Ecco il programma delle gite di questa settimana.",
			pt: "Bom dia, pessoal! Aqui está o programa dos passeios desta semana.",
			note: "Gaetano, o recepcionista, já trata os dois com mais intimidade: *ragazzi*. *La gita* = o passeio, a excursão."
		},
		{
			it: "Vediamo... Il lunedì, Pompei ed Ercolano.",
			pt: "Vamos ver... Às segundas, Pompeia e Herculano.",
			note: "Diante de vogal, *e* pode virar *ed*, para as duas vogais não se chocarem. Hoje isso se faz sobretudo diante da mesma vogal: *ed Ercolano*, *ed ecco*. Com *a*, o mesmo: *ad Amalfi*."
		},
		{
			it: "Esatto. Gli scavi archeologici sono famosissimi.",
			pt: "Isso mesmo. As ruínas arqueológicas são famosíssimas.",
			lit: "Exato. As escavações arqueológicas são famosíssimas.",
			note: "*Gli scavi* = as escavações, o sítio arqueológico. *Archeologico* → *archeologici*, com som doce: palavras com a força na antepenúltima costumam fazer assim."
		},
		{ it: "Il martedì, la gita in barca a Capri. Il mercoledì, il Vesuvio.", pt: "Às terças, o passeio de barco a Capri. Às quartas, o Vesúvio." },
		{
			it: "E la costiera amalfitana?",
			pt: "E a costa amalfitana?",
			note: "*La costiera amalfitana* é a costa de Amalfi, ao sul de Nápoles: estradas penduradas sobre o mar e cidadezinhas coloridas nas encostas."
		},
		{
			it: "Il giovedì, in pullman: Positano, Amalfi e Ravello. Luoghi magici!",
			pt: "Às quintas, de ônibus: Positano, Amalfi e Ravello. Lugares mágicos!",
			note: "*Il pullman* é o ônibus de viagem ou de excursão; o da cidade é *l'autobus*. *Luogo* → *luoghi*, com *h* e som duro; *magico* → *magici*, com som doce."
		},
		{
			it: "E il venerdì, il sabato e la domenica?",
			pt: "E às sextas, aos sábados e aos domingos?",
			note: "Os dias da semana são masculinos, menos *la domenica*. Com artigo, indicam costume: *il lunedì* = às segundas, toda segunda."
		},
		{
			it: "Il venerdì, Ischia. Il sabato, Napoli Sotterranea. E la domenica riposo anch'io!",
			pt: "Às sextas, Ischia. Aos sábados, a Nápoles subterrânea. E aos domingos eu também descanso!",
			note: "*Napoli Sotterranea*: galerias e cisternas antigas embaixo do centro da cidade, que se visitam com guia. *Riposare* = descansar."
		},
		{
			it: "Lei lavora qui da molto tempo, signor Gaetano?",
			pt: "O senhor trabalha aqui há muito tempo, seu Gaetano?",
			lit: "O senhor trabalha aqui desde muito tempo, senhor Gaetano?",
			note: "Para o que começou no passado e continua até hoje, o italiano usa o presente + *da*: *lavora qui da molto tempo?*, trabalha aqui há muito tempo? No sul, *signor* + primeiro nome é um tratamento respeitoso e carinhoso, como o nosso “seu Gaetano”."
		},
		{
			it: "Da quarant'anni, caro mio! Conosco ogni angolo di questa città.",
			pt: "Há quarenta anos, meu caro! Conheço cada canto desta cidade.",
			note: "*Da quarant'anni* = há quarenta anos (e continua). *Ogni* (cada, todo) não muda nunca: *ogni angolo*, *ogni anno*, *ogni sera*."
		},
		{
			it: "Allora, secondo Lei, che cosa scegliamo?",
			pt: "Então, na opinião do senhor, o que a gente escolhe?",
			lit: "Então, segundo o senhor, que coisa escolhemos?",
			note: "*Secondo Lei* = na opinião do senhor; *secondo me* = na minha opinião. *Scegliere* = escolher."
		},
		{
			it: "Tutto! Ma state attenti: a Pompei c'è un sacco di gente, e in barca c'è vento.",
			pt: "Tudo! Mas tomem cuidado: em Pompeia tem gente demais, e no barco venta.",
			lit: "Tudo! Mas estai atentos: a Pompeia há um saco de gente, e em barco há vento.",
			note: "*Stare attento* = tomar cuidado, prestar atenção. O adjetivo concorda: *stai attento* (a um homem), *stai attenta* (a uma mulher), *state attenti* (a vários). *Un sacco di* = um monte de."
		},
		{
			it: "In barca? Io e le barche non andiamo d'accordo...",
			pt: "De barco? Eu e os barcos não nos damos bem...",
			lit: "Em barco? Eu e os barcos não andamos de acordo...",
			note: "*La barca* → *le barche*: os femininos em *-ca* ganham *h* no plural, sempre. *Andare d'accordo* = dar-se bem."
		},
		{
			it: "Stai calmo, Rafael! Sei di Recife e hai paura del mare?",
			pt: "Calma, Rafael! Você é de Recife e tem medo do mar?",
			lit: "Está calmo, Rafael! És de Recife e tens medo do mar?",
			note: "*Stai calmo* = fica calmo, calma. *Avere paura di* = ter medo de."
		},
		{ it: "Del mare no. Delle barche sì!", pt: "Do mar, não. Dos barcos, sim!" },
		{
			it: "Decidete con calma. E domani c'è il sole: il mio ginocchio non sbaglia mai!",
			pt: "Decidam com calma. E amanhã vai fazer sol: o meu joelho nunca erra!",
			lit: "Decidi com calma. E amanhã há o sol: o meu joelho não erra nunca!",
			note: "*Il ginocchio* = o joelho. *Non... mai* = nunca: *non sbaglia mai*. Como no português “não erra nunca”, o italiano usa a negação dupla sem problema."
		},
		{
			it: "Allora decidiamo domani, a colazione.",
			pt: "Então a gente decide amanhã, no café da manhã."
		},
		{
			it: "Studio l'italiano da tre mesi.",
			pt: "Estudo italiano há três meses.",
			sep: true,
			note: "Presente + *da*: a ação começou há três meses e continua."
		},
		{
			it: "Ad Amalfi i negozi sono antichi ed eleganti.",
			pt: "Em Amalfi as lojas são antigas e elegantes.",
			note: "*Ad Amalfi*, *ed eleganti*: *ad* e *ed* diante da mesma vogal. *Antico* → *antichi*, com som duro."
		},
		{ it: "I parchi sono chiusi il lunedì?", pt: "Os parques ficam fechados às segundas?" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os dias da semana e o tempo com da',
			blocks: [
				{
					type: 'p',
					text: "Os dias da semana em italiano vêm dos planetas, como em espanhol: *lunedì* da Lua, *martedì* de Marte, e assim por diante. De segunda a sexta, terminam em *-dì* (antigo “dia”), com a força no fim e acento escrito."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "lune**dì**, marte**dì**, mercole**dì**", pt: "segunda, terça, quarta", pron: "lu-ne-dí, mar-te-dí, mer-ko-le-dí" },
						{ it: "giove**dì**, vener**dì**", pt: "quinta, sexta", pron: "djo-ve-dí, ve-ner-dí" },
						{ it: "**sa**bato, do**me**nica", pt: "sábado, domingo", pron: "sá-ba-to, do-mê-ni-ka" }
					]
				},
				{
					type: 'p',
					text: "Todos são masculinos, menos *la domenica*. Sem artigo, falam de um dia só, o mais próximo: *lunedì vado a Pompei* (segunda que vem vou a Pompeia). Com artigo, falam de costume: *il lunedì c'è la gita* (às segundas tem o passeio). Como o *il giovedì* da lição 2."
				},
				{ type: 'h', text: "Da + presente: o nosso “há”" },
				{
					type: 'p',
					text: "Para uma situação que começou no passado e continua agora, o português diz “trabalho aqui há quarenta anos”. O italiano usa o presente com *da*: *lavoro qui da quarant'anni*. O *da* marca o ponto de partida, como “desde”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La**vo**ro qui da quarant'**an**ni.", pt: "Trabalho aqui há quarenta anos." },
						{ it: "Da quanto **tem**po **stu**di l'ita**lia**no?", pt: "Há quanto tempo você estuda italiano?" },
						{ it: "Da **quan**do **a**biti a Bo**lo**gna?", pt: "Desde quando você mora em Bolonha?" }
					]
				},
				{
					type: 'dica',
					text: "Não traduza o “há” por *ha*. *Ha* é “ele tem”. O tempo que dura até hoje vai com *da*: *da tre mesi*, *da molto tempo*, *da settembre*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Plural de -co e -go; ad, ed e stai attento',
			blocks: [
				{
					type: 'p',
					text: "Na lição 4 você viu que o plural das palavras em *-co* e *-go* às vezes leva *h* (som duro) e às vezes não (som doce). Agora dá para ver a tendência, que vale para substantivos e adjetivos masculinos:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **par**co → i **par**chi; il **luo**go → i **luo**ghi", pt: "força na penúltima: *-chi*, *-ghi* (som duro)", pron: "pár-ki, luó-gui" },
						{ it: "**lun**go → **lun**ghi; an**ti**co → an**ti**chi", pt: "comprido; antigo", pron: "lún-gui, an-tí-ki" },
						{ it: "**ma**gico → **ma**gici; archeo**lo**gico → archeo**lo**gici", pt: "força na antepenúltima: *-ci*, *-gi* (som doce)", pron: "má-dji-tchi, ar-ke-o-ló-dji-tchi" },
						{ it: "la **bar**ca → le **bar**che", pt: "feminino: sempre *-che*, *-ghe*", pron: "bár-ke" }
					]
				},
				{
					type: 'p',
					text: "Há exceções famosas, e você já conhece a principal: *amico* → *amici* (força na penúltima, mas som doce). Também *greco* → *greci*. E algumas palavras com a força na antepenúltima mantêm o som duro, como *dialogo* → *dialoghi*. A tendência ajuda; o ouvido decide."
				},
				{ type: 'h', text: "Ad e ed" },
				{
					type: 'p',
					text: "Diante de vogal, *a* pode virar *ad* e *e* pode virar *ed*. O italiano de hoje faz isso sobretudo diante da mesma vogal: *ad Amalfi*, *ad aprile*, *Pompei ed Ercolano*, *antichi ed eleganti*. Em algumas expressões feitas, aparece também diante de outra vogal: *ad esempio* (por exemplo)."
				},
				{ type: 'h', text: "Stai attento, stai calmo" },
				{
					type: 'p',
					text: "Com *stare* + adjetivo, o italiano pede cuidado ou calma. O adjetivo concorda com quem escuta: *stai attento!* (para um homem), *stai attenta!* (para uma mulher), *state attenti!* (para vários). O mesmo com *stai calmo* e *stai tranquillo*, “fica tranquilo”."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il sabato e la domenica il museo è aperto.", pt: "Aos sábados e domingos o museu fica aberto." },
				{ it: "Giovedì andiamo ad Amalfi in pullman.", pt: "Na quinta vamos a Amalfi de ônibus." },
				{ it: "Gaetano lavora all'Hotel Sirena da quarant'anni.", pt: "O Gaetano trabalha no Hotel Sirena há quarenta anos." },
				{ it: "Ragazzi, state attenti: in barca c'è vento!", pt: "Pessoal, tomem cuidado: no barco venta!" },
				{ it: "A Napoli ci sono molti luoghi magici.", pt: "Em Nápoles há muitos lugares mágicos." },
				{ it: "Da quanto tempo abiti in Italia?", pt: "Há quanto tempo você mora na Itália?" },
				{ it: "Stai calma, Chiara: le barche sono sicure.", pt: "Calma, Chiara: os barcos são seguros." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Os parques ficam fechados aos domingos.", parts: ["I ", null, " sono chiusi la domenica."], answers: ["parchi"] },
				{ pt: "Estudo italiano há três meses.", parts: ["Studio l'italiano ", null, " tre mesi."], answers: ["da"] },
				{ pt: "Pompeia e Herculano são lindas.", parts: ["Pompei ", null, " Ercolano sono bellissime."], answers: ["ed"] },
				{ pt: "Tomem cuidado, pessoal!", parts: ["State ", null, ", ragazzi!"], answers: ["attenti"] },
				{ pt: "O hotel fica tranquilo aos domingos.", parts: ["L'albergo è tranquillo ", null, " domenica."], answers: ["la"] }
			]
		}
	]
};

const licao21: Lesson = {
	no: 21,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'As preposições simples',
			blocks: [
				{
					type: 'p',
					text: "Terceira semana concluída, e Rafael já está instalado em Nápoles! Hoje vamos arrumar as preposições, que apareceram em todas as lições desta viagem. São poucas, mas cada uma tem vários usos, e nem sempre eles batem com o português."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Un messaggio di mia madre.", pt: "*di*: de (posse, origem com *essere*). (lição 15)" },
						{ it: "A Bologna fa freddo.", pt: "*a*: em, para (cidades, meses). (lição 15)" },
						{ it: "Rafael viene dal Brasile.", pt: "*da*: de (procedência) e “há” (tempo). (lição 19)" },
						{ it: "Veniamo in Italia ogni anno.", pt: "*in*: em, para (países, transportes). (lição 19)" },
						{ it: "Una con vista sul mare.", pt: "*su*: sobre, em cima de. (lição 17)" },
						{ it: "Sessanta euro la singola, con la colazione.", pt: "*con*: com. (lição 16)" },
						{ it: "Siamo qui per chiedere un consiglio.", pt: "*per*: para, por. (lição 16)" },
						{ it: "Fra tre giorni torno a Lione.", pt: "*fra*, *tra*: entre, daqui a. (lição 19)" }
					]
				},
				{
					type: 'p',
					text: "Duas delas enganam mais o brasileiro. *Di* é o nosso “de” de posse e de assunto (*la camera di Rafael*), mas para procedência o italiano prefere *da*: *vengo da Recife*. Já *da* tem um uso que o português não tem: o tempo que dura até agora, *lavoro qui da quarant'anni* (lição 20)."
				},
				{
					type: 'dica',
					text: "Com *essere*, a origem vai com *di*: *sono di Recife*. Com *venire*, vai com *da*: *vengo da Recife*. As duas frases dizem quase a mesma coisa."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'As preposições articuladas',
			blocks: [
				{
					type: 'p',
					text: "Cinco preposições se fundem com o artigo seguinte: *di, a, da, in, su*. A lógica é sempre a mesma: preposição + artigo, com o *l* dobrado quando o artigo começa com *l*. A preposição *in* vira *ne-*, e *di* vira *de-*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "del, dello, della, dell', dei, degli, delle", pt: "*di* + *il, lo, la, l', i, gli, le*" },
						{ it: "al, allo, alla, all', ai, agli, alle", pt: "*a* + artigo" },
						{ it: "dal, dallo, dalla, dall', dai, dagli, dalle", pt: "*da* + artigo" },
						{ it: "nel, nello, nella, nell', nei, negli, nelle", pt: "*in* + artigo" },
						{ it: "sul, sullo, sulla, sull', sui, sugli, sulle", pt: "*su* + artigo" }
					]
				},
				{
					type: 'p',
					text: "Não decore a tabela: pense no artigo que a palavra pede, e a preposição vem junto. *Lo zaino* → *nello zaino*; *l'aereo* → *dall'aereo*; *il signor Esposito* → *gli amici del signor Esposito*; *i nuovi amici* → *un brindisi ai nuovi amici*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Guarda dal finestrino!", pt: "Olha pela janela! (lição 15)" },
						{ it: "È nello zaino, sotto il computer.", pt: "Está na mochila, embaixo do computador. (lição 15)" },
						{ it: "Benvenuti all'Hotel Sirena.", pt: "Bem-vindos ao Hotel Sirena. (lição 17)" },
						{ it: "Del mare no. Delle barche sì!", pt: "Do mar, não. Dos barcos, sim! (lição 20)" }
					]
				},
				{
					type: 'p',
					text: "*Con*, *per* e *tra/fra* não se fundem: *con la colazione*, *per il centro*, *tra i turisti*. (Você pode ouvir *col* por *con il*, mas é cada vez mais raro.)"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Para onde, de onde, como',
			blocks: [
				{
					type: 'p',
					text: "Os lugares e os meios de transporte têm suas preposições preferidas. Veja tudo junto, com frases da viagem."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "a Napoli, a Mergellina, a casa", pt: "*a* com cidades, bairros e *casa*" },
						{ it: "in Italia, in Francia, in centro, in via Toledo", pt: "*in* com países, regiões, *centro*, ruas" },
						{ it: "in aereo, in taxi, in barca, in pullman", pt: "*in* com transportes: de avião, de táxi, de barco, de ônibus" },
						{ it: "dal Brasile, dalla Francia, da Recife", pt: "*da* para a procedência; país com artigo, cidade sem" },
						{ it: "sul mare, al secondo piano", pt: "à beira-mar, no segundo andar" }
					]
				},
				{
					type: 'p',
					text: "Os países levam artigo depois de *da*, *di*, *a*, *su* (*dalla Francia*, *del Brasile*), mas não depois de *in* (*in Francia*, *in Brasile*). A exceção são os nomes no plural ou com adjetivo: *negli Stati Uniti*."
				},
				{
					type: 'dica',
					text: "O português diz “de avião”, “de táxi”, “de barco”; o italiano diz *in aereo*, *in taxi*, *in barca*. Só “a pé” fica com *a*: *a piedi*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Andare e venire',
			blocks: [
				{
					type: 'p',
					text: "Desde a primeira semana você ouve *andiamo* (vamos) e *vado* (vou). Aqui está *andare* (ir) inteiro, ao lado de *venire* (vir), que você aprendeu na lição 19. Os dois são irregulares."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**va**do / **ven**go", pt: "eu vou / eu venho", pron: "vá-do / vén-go" },
						{ it: "vai / **vie**ni", pt: "você vai / você vem", pron: "vái / vié-ni" },
						{ it: "va / **vie**ne", pt: "ele vai / ele vem", pron: "vá / vié-ne" },
						{ it: "an**dia**mo / ve**nia**mo", pt: "nós vamos / nós vimos", pron: "an-diá-mo / ve-niá-mo" },
						{ it: "an**da**te / ve**ni**te", pt: "vocês vão / vocês vêm", pron: "an-dá-te / ve-ní-te" },
						{ it: "**van**no / **ven**gono", pt: "eles vão / eles vêm", pron: "ván-no / vén-go-no" }
					]
				},
				{
					type: 'p',
					text: "Repare em *andare*: as formas de *noi* e *voi* (*andiamo, andate*) são regulares; as outras vêm de outro verbo latino, como o nosso “vou, vais, vai”. As preposições são as de sempre: *vado a Napoli*, *vado in Francia*, *andiamo al bar*, *vengo da Bologna*."
				},
				{ type: 'h', text: "Vou ou venho?" },
				{
					type: 'p',
					text: "*Andare* é ir para outro lugar; *venire* é ir até onde está quem fala ou quem escuta, ou ir junto com ele. Por isso, quando alguém pergunta *Vieni al bar con noi?*, a resposta é *Sì, vengo!*, mesmo que em português digamos “sim, vou!”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Vieni anche tu? Sì, vengo!", pt: "Você vem também? Sim, vou!" },
						{ it: "Domani andiamo a Capri.", pt: "Amanhã vamos a Capri." }
					]
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "A viagem a Nápoles trouxe muitas expressões novas. Leia cada uma em voz alta e tente lembrar quem disse, e onde."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che spettacolo!", pt: "Que espetáculo! (lição 15)" },
						{ it: "Tranquillo! / Tranquilla!", pt: "Calma! Fica tranquilo! (lição 15)" },
						{ it: "Meno male!", pt: "Ainda bem! (lição 15)" },
						{ it: "Insomma...", pt: "Mais ou menos... Enfim... (lição 15)" },
						{ it: "Caro mio!", pt: "Meu caro! (lições 15 e 20)" },
						{ it: "Che sorpresa!", pt: "Que surpresa! (lição 16)" },
						{ it: "Fatto! C'è posto.", pt: "Pronto! Tem vaga. (lição 16)" },
						{ it: "Buone vacanze! / Buon viaggio!", pt: "Boas férias! / Boa viagem! (lição 16)" },
						{ it: "Grazie, altrettanto!", pt: "Obrigado, igualmente! (lição 16)" },
						{ it: "Uffa!", pt: "Que chato! (lição 18)" },
						{ it: "Senti...", pt: "Escuta... (lição 18)" },
						{ it: "Che lusso! / Che meraviglia!", pt: "Que luxo! / Que maravilha! (lição 18)" },
						{ it: "Permettete? / Molto lieto!", pt: "Com licença? / Muito prazer! (lição 19)" },
						{ it: "Come mai?", pt: "Como assim? Como é que? (lição 19)" },
						{ it: "Cin cin!", pt: "Saúde! (no brinde) (lição 19)" },
						{ it: "secondo Lei / secondo me", pt: "na opinião do senhor / na minha opinião (lição 20)" },
						{ it: "State attenti! / Stai calmo!", pt: "Tomem cuidado! / Calma! (lição 20)" },
						{ it: "Non andiamo d'accordo.", pt: "Não nos damos bem. (lição 20)" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que algo der certo, diga *Meno male!*; quando algo der errado, *Uffa!*. E no próximo brinde, com qualquer bebida, *Cin cin!*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Veniamo da Bologna e andiamo a Napoli in aereo.", pt: "Viemos de Bolonha e vamos a Nápoles de avião." },
				{ it: "Il passaporto di Rafael è sempre nello zaino.", pt: "O passaporte do Rafael está sempre na mochila." },
				{ it: "Dal balcone della camera vediamo il Vesuvio.", pt: "Da varanda do quarto vemos o Vesúvio." },
				{ it: "Il signor Esposito lavora in un'agenzia in via Toledo.", pt: "O senhor Esposito trabalha numa agência na rua Toledo." },
				{ it: "Fra due giorni andiamo a Capri in barca.", pt: "Daqui a dois dias vamos a Capri de barco." },
				{ it: "I turisti tedeschi vanno sul Vesuvio a piedi.", pt: "Os turistas alemães sobem o Vesúvio a pé." },
				{ it: "Gaetano lavora in questo albergo da quarant'anni.", pt: "O Gaetano trabalha neste hotel há quarenta anos." },
				{ it: "Vieni al bar con noi? Sì, vengo fra cinque minuti.", pt: "Você vem ao bar com a gente? Sim, vou daqui a cinco minutos." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vou a Capri de barco.", parts: ["Vado a Capri ", null, " barca."], answers: ["in"] },
				{ pt: "Vocês vão ao bar?", parts: ["Voi ", null, " al bar?"], answers: ["andate"] },
				{ pt: "O senhor e a senhora Weber vêm de Viena.", parts: ["I signori Weber ", null, " da Vienna."], answers: ["vengono"] },
				{ pt: "A chave está na mesa.", parts: ["La chiave è ", null, " tavolo."], answers: ["sul"] },
				{ pt: "Eles vão a Pompeia na segunda.", parts: ["Loro ", null, " a Pompei lunedì."], answers: ["vanno"] }
			]
		}
	]
};

export const unidade: Unit = { no: 3, title: 'Viagem a Nápoles', lessons: [15, 16, 17, 18, 19, 20, 21] };

export const licoes: Lesson[] = [licao15, licao16, licao17, licao18, licao19, licao20, licao21];
