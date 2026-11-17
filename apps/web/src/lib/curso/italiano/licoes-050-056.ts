import type { Lesson, Unit } from '../types.ts';

// Lições 50–56: primavera, à mesa. Chiara e Rafael organizam um almoço surpresa para o Matteo, que passou
// no período de experiência, na trattoria Il Glicine, nas colinas de Bolonha (50–51); no almoço, Giulia e Luca
// contam que vão se casar, e o Rafael conta que a bolsa foi prorrogada por mais um ano, até o fim de junho do
// ano seguinte (52); os pais do Matteo vêm de Turim com a Bianca e comem numa pizzaria (53); a Chiara ensina o
// Rafael a cozinhar massa (54); jantar brasileiro em casa e os hábitos italianos à mesa (55). A 56 revisa.
// Ver docs/agents/curso-assimil-mapa.md.

const licao50: Lesson = {
	no: 50,
	kind: 'licao',
	title: "Un pranzo per Matteo",
	titlePt: "Um almoço para o Matteo",
	lines: [
		{
			it: "Rafael, lo sai che venerdì Matteo finisce il periodo di prova?",
			pt: "Rafael, você sabia que na sexta o Matteo termina o período de experiência?",
			lit: "Rafael, o sabes que sexta Matteo termina o período de prova?",
			note: "*Lo sai che...?* = você sabe que...? O *lo* antecipa a notícia que vem depois. *Il periodo di prova* = o período de experiência, os primeiros meses num emprego novo."
		},
		{
			it: "Davvero? Allora dobbiamo festeggiare! Facciamo un pranzo domenica?",
			pt: "Sério? Então temos que comemorar! Vamos fazer um almoço no domingo?",
			lit: "Deveras? Então devemos festejar! Fazemos um almoço domingo?",
			note: "*Festeggiare* = comemorar, festejar. *Domenica*, sem artigo nem preposição, é o próximo domingo."
		},
		{
			it: "Buona idea. Conosco una trattoria sui colli, ma di domenica è sempre piena.",
			pt: "Boa ideia. Conheço uma trattoria nas colinas, mas aos domingos está sempre cheia.",
			lit: "Boa ideia. Conheço uma trattoria sobre as colinas, mas de domingo é sempre cheia.",
			note: "*Di domenica* = aos domingos, todo domingo, igual a *la domenica* (lição 3). Vale para todos os dias: *di sera*, *di lunedì*. *I colli* são as colinas verdes ao sul de Bolonha, cheias de restaurantes."
		},
		{
			it: "Allora telefono subito per prenotare. Ci penso io!",
			pt: "Então já vou ligar para reservar. Deixa comigo!",
			lit: "Então telefono logo para reservar. Nisso penso eu!",
			note: "*Ci penso io!* = deixa comigo!, eu cuido disso. Pensa-se *a* alguma coisa (*penso al pranzo*), e o *ci* substitui o *a* + coisa: *ci penso* = penso nisso."
		},
		{
			it: "E a Matteo glielo diciamo?",
			pt: "E ao Matteo, a gente conta?",
			lit: "E a Matteo lhe o dizemos?",
			note: "*Glielo* = *gli* (a ele) + *lo* (isso). Quando dois pronomes se encontram, o indireto vem primeiro; *gli* ganha um *e* e se junta ao *lo* numa palavra só. Na fala, é comum anunciar a pessoa antes e repeti-la com o pronome: *a Matteo glielo diciamo*, como *il vino lo porto io*."
		},
		{
			it: "No, non glielo diciamo: è una sorpresa! Invitiamo anche Giulia, Luca, Davide e Francesca.",
			pt: "Não, não vamos contar a ele: é surpresa! Convidamos também a Giulia, o Luca, o Davide e a Francesca.",
			lit: "Não, não lhe o dizemos: é uma surpresa! Convidamos também Giulia, Luca, Davide e Francesca.",
			note: "Com *non*, o par de pronomes fica entre o *non* e o verbo: *non glielo diciamo*."
		},
		{
			it: "Pronto, trattoria Il Glicine? Vorrei prenotare un tavolo per domenica a pranzo.",
			pt: "Alô, trattoria Il Glicine? Queria reservar uma mesa para domingo, no almoço.",
			lit: "Pronto, trattoria A Glicínia? Queria reservar uma mesa para domingo a almoço.",
			note: "*Il glicine* é a glicínia, a trepadeira de flores roxas que cobre os muros italianos na primavera. *A pranzo*, *a cena* = no almoço, no jantar."
		},
		{ it: "Domenica... vediamo. Quanti siete?", pt: "Domingo... vamos ver. Quantos vocês são?", lit: "Domingo... vemos. Quantos sois?" },
		{ it: "Sette. Ci sono ancora tavoli liberi?", pt: "Sete. Ainda tem mesas livres?", lit: "Sete. Há ainda mesas livres?" },
		{
			it: "Ce n'è uno solo, in terrazza. All'una va bene?",
			pt: "Tem uma só, no terraço. À uma está bom?",
			lit: "Disso aí há um só, em terraço. À uma vai bem?",
			note: "*Ce n'è* = *ci* + *ne* + *è*: tem um (disso). O *ne* retoma *tavoli* (lição 34), e o *ci* vira *ce* antes do *ne*, como em *ce l'ho*. No plural: *ce ne sono*: *ce ne sono due*, tem duas."
		},
		{
			it: "Benissimo. A nome Rafael, con una effe sola.",
			pt: "Ótimo. Em nome de Rafael, com um f só.",
			note: "*A nome di* = em nome de. As letras têm nome feminino: *la effe*, *la erre*, *la esse*. Na Itália o nome é *Raffaele*, com dois *f*; por isso o Rafael avisa."
		},
		{
			it: "Bravo! E il regalo? Matteo ha perso gli occhiali da sole.",
			pt: "Muito bem! E o presente? O Matteo perdeu os óculos de sol.",
			note: "*Gli occhiali* é sempre plural, como os nossos “óculos”. O mesmo vale para *le forbici* (a tesoura) e *i pantaloni* (lição 6)."
		},
		{
			it: "Allora gli regaliamo un paio di occhiali nuovi. Glieli compro io domani.",
			pt: "Então damos para ele um par de óculos novos. Eu compro para ele amanhã.",
			lit: "Então lhe presenteamos um par de óculos novos. Lhos compro eu amanhã.",
			note: "*Glieli* = *gli* + *li*: para ele + eles (os óculos). *Un paio di* = um par de (lição 39)."
		},
		{
			it: "E il biglietto lo facciamo noi. Mi passi le forbici?",
			pt: "E o cartão a gente faz. Me passa a tesoura?",
			lit: "E o bilhete o fazemos nós. Me passas as tesouras?",
			note: "*Il biglietto* aqui é o cartão (*biglietto d'auguri*); também é passagem e ingresso. *Le forbici* (“fór-bi-tchi”): uma tesoura só, palavra no plural."
		},
		{
			it: "Eccole. Te le do, ma attenta alle dita!",
			pt: "Aqui está. Te dou, mas cuidado com os dedos!",
			lit: "Eis-as. Te as dou, mas atenta aos dedos!",
			note: "*Te le* = *ti* + *le*. Diante de *lo, la, li, le, ne*, o *i* dos pronomes vira *e*: *mi* → *me*, *ti* → *te*, *ci* → *ce*, *vi* → *ve*. *Le dita*, plural de *il dito* (lição 40)."
		},
		{ it: "Ciao, ragazzi! Che cosa fate con quelle forbici?", pt: "Oi, gente! O que vocês estão fazendo com essa tesoura?", lit: "Oi, rapazes! Que coisa fazeis com aquelas tesouras?" },
		{
			it: "Niente, niente! Un lavoro per l'università. Te lo facciamo vedere... un'altra volta!",
			pt: "Nada, nada! Um trabalho da faculdade. A gente te mostra... outro dia!",
			lit: "Nada, nada! Um trabalho para a universidade. To fazemos ver... uma outra vez!",
			note: "*Far vedere* = mostrar (literalmente “fazer ver”). *Te lo facciamo vedere* = mostramos para você."
		},
		{
			it: "Il pane chi lo porta? Ve lo porto io.",
			pt: "O pão, quem traz? Eu trago para vocês.",
			lit: "O pão quem o traz? Vo-lo trago eu.",
			sep: true,
			note: "*Portare* = levar e também trazer: o italiano não separa as duas direções. *Ve lo* = *vi* + *lo*."
		},
		{
			it: "Ci sono ancora fragole? Sì, ce ne sono tante.",
			pt: "Ainda tem morango? Tem, muitos.",
			lit: "Há ainda morangos? Sim, disso há tantos."
		},
		{
			it: "Mi presti la penna? Sì, te la presto.",
			pt: "Você me empresta a caneta? Claro, te empresto.",
			lit: "Me emprestas a caneta? Sim, te a empresto."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "Os pronomes combinados",
			blocks: [
				{
					type: 'p',
					text: "Até agora você usou um pronome por vez: *posso portarla* (lição 38), *gli regalo* (lição 36). Mas muitas vezes a frase pede dois: a coisa e a pessoa. Em português fugimos disso (“eu levo para você”); o italiano junta os dois antes do verbo, com duas regras fixas."
				},
				{
					type: 'p',
					text: "**1. O indireto vem primeiro, e o seu *i* vira *e*.** *Mi, ti, ci, vi* viram *me, te, ce, ve* diante de *lo, la, li, le* e *ne*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Me lo **dai**?", pt: "Você me dá (isso)?" },
						{ it: "Te le **do**.", pt: "Eu te dou (as tesouras)." },
						{ it: "Ce lo **por**ta?", pt: "O senhor traz (o pão) para nós?" },
						{ it: "Ve lo **por**to io.", pt: "Eu trago (o pão) para vocês." }
					]
				},
				{
					type: 'p',
					text: "**2. *Gli* e *le* viram *glie-*, e tudo vira uma palavra só.** Para ele ou para ela, a forma é a mesma: *glielo, gliela, glieli, gliele, gliene*. Também vale para *Le*, de cortesia: *Glielo porto subito, signora*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Glie**lo di**cia**mo?", pt: "A gente conta (isso) para ele?", pron: "lhê-lo di-tchá-mo" },
						{ it: "**Glie**li **com**pro io.", pt: "Eu compro (os óculos) para ele.", pron: "lhê-li kôm-pro í-o" },
						{ it: "**Glie**la **man**do sta**se**ra.", pt: "Mando (a receita) para ela hoje à noite.", pron: "lhê-la mán-do sta-sê-ra" }
					]
				},
				{ type: 'h', text: "Ce n'è, ce ne sono" },
				{
					type: 'p',
					text: "O mesmo mecanismo aparece com *ci* e *ne*: *c'è* + *ne* dá *ce n'è* (tem um, disso aí), e *ci sono* + *ne* dá *ce ne sono*. Responde a perguntas sobre quantidade: *Ci sono tavoli liberi? Ce n'è uno solo.* E o seu velho conhecido *ce l'ho* (lição 2) é a mesma coisa: *ci* + *lo* antes de *ho*."
				},
				{
					type: 'dica',
					text: "Pronúncia: o par de pronomes não tem força própria e se cola no verbo como se fosse uma sílaba a mais. *Te lo porto* soa “telopórto”; *glielo diciamo*, “lhelo-ditchámo”. Diga devagar e depois depressa, sem pausa nenhuma."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Portare, di domenica e as palavras só no plural",
			blocks: [
				{
					type: 'p',
					text: "*Portare* faz o trabalho de “levar” e de “trazer”: *ti porto il pane* pode ser “te levo” ou “te trago”, conforme quem fala. E tem mais usos: *portare gli occhiali* é usar óculos; *portare a cena* é levar para jantar."
				},
				{
					type: 'p',
					text: "Para os dias da semana, três jeitos: *domenica* (no domingo que vem), *la domenica* e *di domenica* (aos domingos, sempre). *Di domenica la trattoria è piena* fala de um hábito."
				},
				{ type: 'h', text: "Uma coisa, palavra no plural" },
				{
					type: 'p',
					text: "Algumas coisas formadas por duas partes iguais têm nome só no plural. Em português temos “os óculos”; o italiano tem mais. Para contar, use *un paio di*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gli oc**chia**li", pt: "os óculos", pron: "lhi ok-kiá-li" },
						{ it: "le **for**bici", pt: "a tesoura", pron: "le fór-bi-tchi" },
						{ it: "i panta**lo**ni", pt: "a calça" },
						{ it: "le mu**tan**de", pt: "a cueca, a calcinha" },
						{ it: "un **pa**io di **for**bici", pt: "uma tesoura" }
					]
				},
				{
					type: 'dica',
					text: "*Dove sono le forbici?* soa estranho para nós, mas é a única forma certa. “Onde está a tesoura?” em italiano é sempre plural."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il vino? Te lo porto io.", pt: "O vinho? Eu levo para você." },
				{ it: "Matteo vuole il libro: glielo do domani.", pt: "O Matteo quer o livro: dou para ele amanhã." },
				{ it: "Ci sono tavoli liberi? Sì, ce n'è uno.", pt: "Tem mesas livres? Tem, uma." },
				{ it: "Le forbici? Me le passi, per favore?", pt: "A tesoura? Você me passa, por favor?" },
				{ it: "Di domenica la trattoria è sempre piena.", pt: "Aos domingos a trattoria está sempre cheia." },
				{ it: "Chiara porta gli occhiali solo per leggere.", pt: "A Chiara só usa óculos para ler." },
				{ it: "Tranquillo, ci penso io!", pt: "Fica tranquilo, deixa comigo!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O pão, eu levo para você.", parts: ["Il pane ", null, " porto io."], answers: ["te lo"] },
				{ pt: "Ao Matteo, a gente não conta.", parts: ["A Matteo non ", null, " diciamo."], answers: ["glielo"] },
				{ pt: "Mesas livres? Tem uma só.", parts: ["Tavoli liberi? ", null, " uno solo."], answers: ["ce n'è"] },
				{ pt: "Ainda tem morango? Tem, muitos.", parts: ["Ci sono ancora fragole? Sì, ", null, " tante."], answers: ["ce ne sono"] },
				{ pt: "Deixa comigo!", parts: ["Ci ", null, " io!"], answers: ["penso"] }
			]
		}
	]
};

const licao51: Lesson = {
	no: 51,
	kind: 'licao',
	title: "In trattoria",
	titlePt: "Na trattoria",
	lines: [
		{
			it: "Buongiorno! Il tavolo a nome Rafael? Prego, si accomodino.",
			pt: "Bom dia! A mesa em nome de Rafael? Por favor, sentem-se.",
			lit: "Bom dia! A mesa a nome Rafael? Por favor, se acomodem.",
			note: "*Si accomodino* é o *si accomodi* da lição 47 dito a várias pessoas tratadas com *Loro* (lição 17). Hoje soa muito cerimonioso; é coisa de garçom tradicional. Entre amigos, *accomodatevi*."
		},
		{
			it: "Davide? Francesca? Ma che ci fate qui?",
			pt: "Davide? Francesca? Mas o que vocês estão fazendo aqui?",
			lit: "Davide? Francesca? Mas que aí fazeis aqui?",
			note: "*Che ci fai qui?* é a pergunta de quem encontra alguém onde não esperava. O *ci* não acrescenta nada: só dá ênfase, junto com o *qui*."
		},
		{
			it: "Sorpresa! Oggi si festeggia: hai superato il periodo di prova!",
			pt: "Surpresa! Hoje é dia de festa: você passou no período de experiência!",
			lit: "Surpresa! Hoje se festeja: tens superado o período de prova!",
			note: "*Si festeggia* é o *si* impessoal da lição 27. *Superare* = superar, e também passar numa prova: *ho superato l'esame*."
		},
		{ it: "Ragazzi, siete pazzi! Grazie!", pt: "Gente, vocês são loucos! Obrigado!", lit: "Rapazes, sois loucos! Obrigado!" },
		{
			it: "Scusi, manca ancora una mia amica con il fidanzato. Possiamo ordinare lo stesso?",
			pt: "Com licença, ainda falta uma amiga minha com o noivo. Podemos pedir mesmo assim?",
			lit: "Desculpe, falta ainda uma minha amiga com o noivo. Podemos ordenar o mesmo?",
			note: "*Una mia amica* = uma amiga minha. Com o artigo indefinido, o possessivo fica antes do substantivo: *un mio collega*, *due miei cugini*. *Ordinare* = pedir (no restaurante). *Lo stesso* = mesmo assim (lição 46)."
		},
		{
			it: "Certo. Ecco il menù: oggi ci sono le tagliatelle al ragù e i tortelloni burro e salvia.",
			pt: "Claro. Aqui está o cardápio: hoje tem tagliatelle à bolonhesa e tortelloni na manteiga e sálvia.",
			note: "*Il ragù* é o molho de carne cozido por horas, o que no Brasil chamamos de bolonhesa. *Tortelloni*: massa recheada, maior que os *tortellini*. *La salvia* = a sálvia."
		},
		{
			it: "Sembra tutto buonissimo! E che cosa ci consiglia per secondo?",
			pt: "Parece tudo uma delícia! E o que o senhor nos recomenda como prato principal?",
			lit: "Parece tudo boníssimo! E que coisa nos aconselha por segundo?",
			note: "*Consigliare* = aconselhar, recomendar. *Il secondo* é o prato de carne ou peixe, que vem depois do *primo*, a massa; mais sobre a ordem na lição 55."
		},
		{
			it: "Il coniglio con le patate al forno. Ve lo posso consigliare: è la specialità della casa.",
			pt: "O coelho com batatas assadas. Esse eu posso recomendar: é a especialidade da casa.",
			lit: "O coelho com as batatas ao forno. Vo-lo posso aconselhar: é a especialidade da casa.",
			note: "Com *potere*, *dovere* e *volere*, o par de pronomes se comporta como um pronome só (lição 38): antes do verbo conjugado (*ve lo posso consigliare*) ou colado no infinitivo (*posso consigliarvelo*). As duas formas estão certas."
		},
		{
			it: "Per me le tagliatelle, ma mezza porzione. Dopo voglio anche il dolce!",
			pt: "Para mim o tagliatelle, mas meia porção. Depois quero a sobremesa também!",
			lit: "Para mim as tagliatelle, mas meia porção. Depois quero também o doce!",
			note: "*Mezza porzione* = meia porção. Antes do substantivo, *mezzo* concorda: *mezza porzione*, *mezzo litro*. *Il dolce* = a sobremesa."
		},
		{ it: "Mezza porzione, va bene. E da bere?", pt: "Meia porção, tudo bem. E para beber?", lit: "Meia porção, vai bem. E de beber?" },
		{
			it: "Un litro di vino rosso della casa e una bottiglia d'acqua frizzante.",
			pt: "Um litro de vinho tinto da casa e uma garrafa de água com gás.",
			lit: "Um litro de vinho vermelho da casa e uma garrafa de água frisante.",
			note: "Vinho tinto é *vino rosso*, “vermelho”. O vinho da casa costuma vir em jarra, por litro ou meio litro."
		},
		{
			it: "E il pane, ce lo porta?",
			pt: "E o pão, o senhor traz para nós?",
			lit: "E o pão, nos o traz?"
		},
		{
			it: "Ve lo porto subito.",
			pt: "Já trago para vocês.",
			lit: "Vo-lo trago logo."
		},
		{
			it: "Rafael, perché guardi sempre il telefono? Aspetti un messaggio?",
			pt: "Rafael, por que você fica olhando o celular? Está esperando uma mensagem?",
			lit: "Rafael, por que olhas sempre o telefone? Esperas uma mensagem?"
		},
		{
			it: "Un'email dall'università. Ve lo dico dopo.",
			pt: "Um e-mail da faculdade. Depois eu conto para vocês.",
			lit: "Um e-mail da universidade. Vo-lo digo depois.",
			note: "*L'email* é feminino em italiano: *un'email*, com apóstrofo, como *un'amica*. O *lo* de *ve lo dico* retoma a história toda: “isso”."
		},
		{ it: "Che mistero! Comunque il conto lo pago io.", pt: "Quanto mistério! De qualquer forma, a conta eu pago.", lit: "Que mistério! Contudo a conta a pago eu." },
		{
			it: "Neanche per sogno! Oggi il festeggiato sei tu.",
			pt: "Nem pensar! Hoje o homenageado é você.",
			lit: "Nem em sonho! Hoje o festejado és tu.",
			note: "*Neanche per sogno!* = nem sonhando!, nem pensar! (*neanche*, lição 40). *Il festeggiato* é a pessoa para quem se faz a festa."
		},
		{
			it: "Il menù? Glielo porto subito, signora.",
			pt: "O cardápio? Já trago para a senhora.",
			lit: "O menu? Lho trago logo, senhora.",
			sep: true,
			note: "Com *Le*, de cortesia, o par também é *glielo*."
		},
		{
			it: "Mi mandi la ricetta? Sì, te la posso mandare stasera.",
			pt: "Você me manda a receita? Mando, posso te mandar hoje à noite.",
			lit: "Me mandas a receita? Sim, te a posso mandar esta noite.",
			note: "Ou, com o par no fim: *posso mandartela*."
		},
		{
			it: "Un mio cugino fa il cuoco a Napoli.",
			pt: "Um primo meu é cozinheiro em Nápoles.",
			lit: "Um meu primo faz o cozinheiro a Nápoles.",
			note: "*Fare* + artigo + profissão, como *faccio la maestra* (lição 48)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "O par de pronomes com os modais; una mia amica",
			blocks: [
				{
					type: 'p',
					text: "Na lição 38 você viu que, com *potere*, *dovere* e *volere*, o pronome pode ir antes do verbo conjugado ou colado no infinitivo. Com dois pronomes é igual: o par anda junto, como um bloco, e não se separa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ve lo **pos**so consi**glia**re. / **Pos**so consigli**ar**velo.", pt: "Posso recomendá-lo a vocês." },
						{ it: "Te la **pos**so man**da**re. / **Pos**so man**dar**tela.", pt: "Posso mandá-la para você." },
						{ it: "**Glie**lo **de**vo **di**re. / **De**vo **dir**glielo.", pt: "Preciso contar isso a ele." }
					]
				},
				{
					type: 'p',
					text: "Colado no infinitivo, o par forma uma palavra comprida, e o infinitivo perde o *-e*: *consigliare* + *ve* + *lo* = *consigliarvelo*. A força continua no mesmo lugar do infinitivo: “kon-si-lhár-ve-lo”."
				},
				{ type: 'h', text: "Una mia amica" },
				{
					type: 'p',
					text: "Com o artigo definido você já sabe: *la mia amica*. Quando a amiga é uma entre várias, troca-se só o artigo: *una mia amica* (uma amiga minha), *un mio cugino*, *alcuni miei colleghi*. O possessivo fica antes do substantivo, e não depois, como em português."
				},
				{
					type: 'dica',
					text: "Também se ouve *un'amica mia*, com o possessivo depois. Soa mais enfático: “uma amiga minha, mesmo”."
				}
			]
		},
		{
			kind: 'leitura',
			title: "O cardápio italiano",
			blocks: [
				{
					type: 'p',
					text: "O cardápio de uma trattoria segue sempre a mesma ordem, que é também a ordem da refeição. Ninguém é obrigado a pedir tudo: muita gente pede só um *primo*, ou um *secondo* com *contorno*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gli anti**pa**sti", pt: "as entradas: frios, bruschetta, legumes" },
						{ it: "i **pri**mi", pt: "os primeiros pratos: massa, risoto, sopa" },
						{ it: "i se**con**di", pt: "os pratos principais: carne ou peixe" },
						{ it: "i con**tor**ni", pt: "os acompanhamentos: salada, batatas, legumes" },
						{ it: "i **dol**ci", pt: "as sobremesas" },
						{ it: "il co**per**to", pt: "o couvert: valor fixo por pessoa, pelo pão e pela mesa" }
					]
				},
				{
					type: 'p',
					text: "Repare que o *secondo* chega sozinho no prato: a batata ou a salada se pedem à parte, como *contorno*. E a água não é de graça: pede-se *naturale* (sem gás) ou *frizzante* (com gás), em garrafa."
				},
				{
					type: 'dica',
					text: "Quer comer menos? Peça *mezza porzione*: muitas trattorias aceitam, sobretudo para as massas. E para pedir a conta, *il conto, per favore*. A gorjeta não é obrigatória: muita gente arredonda o valor ou deixa uns trocados."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Si accomodino, signori: ecco il menù.", pt: "Sentem-se, senhores: aqui está o cardápio." },
				{ it: "Una mia amica arriva tra poco.", pt: "Uma amiga minha chega daqui a pouco." },
				{ it: "Ve lo posso consigliare: è buonissimo.", pt: "Posso recomendá-lo a vocês: é uma delícia." },
				{ it: "Posso portarvelo subito.", pt: "Posso trazê-lo para vocês agora mesmo." },
				{ it: "Per me mezza porzione di tortellini, per favore.", pt: "Para mim, meia porção de tortellini, por favor." },
				{ it: "Il pane? Ce lo porta, per favore?", pt: "O pão? O senhor traz para nós, por favor?" },
				{ it: "Che cosa ci consiglia per secondo?", pt: "O que o senhor nos recomenda como prato principal?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Uma amiga minha está atrasada.", parts: ["Una ", null, " amica è in ritardo."], answers: ["mia"] },
				{ pt: "Posso recomendá-lo a vocês.", parts: ["Posso ", null, "."], answers: ["consigliarvelo"] },
				{ pt: "O pão? Já trago para vocês.", parts: ["Il pane? ", null, " porto subito."], answers: ["ve lo"] },
				{ pt: "Meia porção, por favor.", parts: ["Una ", null, " porzione, per favore."], answers: ["mezza"] },
				{ pt: "Sentem-se, senhores.", parts: ["Si ", null, ", signori."], answers: ["accomodino"] }
			]
		}
	]
};

const licao52: Lesson = {
	no: 52,
	kind: 'licao',
	title: "Due belle notizie",
	titlePt: "Duas boas notícias",
	lines: [
		{
			it: "Scusate il ritardo, ragazzi! Abbiamo perso l'autobus.",
			pt: "Desculpem o atraso, gente! Perdemos o ônibus.",
			lit: "Desculpai o atraso, rapazes! Temos perdido o ônibus."
		},
		{
			it: "Ecco i ritardatari! Le tagliatelle ve le abbiamo già ordinate.",
			pt: "Olha os atrasados! O tagliatelle a gente já pediu para vocês.",
			lit: "Eis os atrasadores! As tagliatelle vos as temos já ordenadas.",
			note: "No passado, o par de pronomes fica antes do auxiliar, e o particípio concorda com o *lo, la, li, le*, como na lição 34: *le tagliatelle* → *ve le abbiamo ordinate*."
		},
		{ it: "Grazie! Ma prima... Giulia, glielo diciamo?", pt: "Obrigado! Mas antes... Giulia, a gente conta para eles?", lit: "Obrigado! Mas antes... Giulia, lhe o dizemos?", note: "Aqui *glielo* = para eles + isso. Na conversa, *gli* serve também para “a eles”, e o par fica igual." },
		{
			it: "Sì, ma lo dico io! Luca mi ha chiesto di sposarlo... e io ho risposto sì!",
			pt: "Sim, mas quem conta sou eu! O Luca me pediu em casamento... e eu disse sim!",
			lit: "Sim, mas o digo eu! Luca me tem pedido de esposá-lo... e eu tenho respondido sim!",
			note: "*Sposare qualcuno* = casar com alguém, sem preposição: *sposarlo*, casar com ele. *Sposarsi* = casar-se (lição 46)."
		},
		{
			it: "Davvero? Auguri! E quando vi sposate?",
			pt: "Sério? Parabéns! E quando vocês se casam?",
			note: "*Auguri!* (lição 36) serve para aniversário, casamento, nascimento, qualquer boa notícia."
		},
		{
			it: "Non lo sappiamo ancora. Dicono che per organizzare un matrimonio serve un anno!",
			pt: "Ainda não sabemos. Dizem que para organizar um casamento é preciso um ano!",
			lit: "Não o sabemos ainda. Dizem que para organizar um matrimônio serve um ano!",
			note: "*Dicono che* = dizem que: terceira pessoa do plural sem sujeito, o “eles” indefinido, como *mettono* na lição 5. No italiano mais cuidado, depois de *dicono che* vem um modo verbal que você verá na lição 94; na conversa, o presente comum é o normal. *Servire* = servir, e também ser necessário."
		},
		{ it: "E l'anello? Ce lo fai vedere?", pt: "E o anel? Mostra para a gente?", lit: "E o anel? No-lo fazes ver?" },
		{
			it: "Eccolo! Me l'ha dato ieri sera, a cena, davanti a tutto il ristorante.",
			pt: "Aqui está! Ele me deu ontem à noite, no jantar, na frente do restaurante inteiro.",
			lit: "Eis-o! Mo tem dado ontem noite, a jantar, diante a todo o restaurante.",
			note: "*Me l'ha dato* = *me* + *lo* + *ha dato*: diante do auxiliar, o *lo* perde a vogal. Com *la*, o particípio mostra o gênero: *la notizia me l'ha data*."
		},
		{
			it: "Che romantico! E tu, Rafael? La tua email misteriosa?",
			pt: "Que romântico! E você, Rafael? O seu e-mail misterioso?",
			lit: "Que romântico! E tu, Rafael? A tua e-mail misteriosa?"
		},
		{
			it: "È arrivata stamattina, dall'università. La borsa di studio me l'hanno prorogata!",
			pt: "Chegou hoje de manhã, da faculdade. Prorrogaram a minha bolsa!",
			lit: "É chegada esta manhã, da universidade. A bolsa de estudo me a têm prorrogada!",
			note: "*La borsa di studio* = a bolsa de estudos (*la borsa* sozinha é a bolsa de mão, ou a Bolsa de valores). *Me l'hanno prorogata*: *prorogata* concorda com *la borsa*."
		},
		{ it: "Prorogata? Per quanto tempo?", pt: "Prorrogada? Por quanto tempo?" },
		{
			it: "Ancora un anno: fino alla fine di giugno dell'anno prossimo. Resto a Bologna!",
			pt: "Mais um ano: até o fim de junho do ano que vem. Vou ficar em Bolonha!",
			lit: "Ainda um ano: até ao fim de junho do ano próximo. Fico a Bolonha!",
			note: "*La fine* = o fim. Feminino em italiano, masculino em português: é das palavras que mudam de gênero de uma língua para outra. Veja outras na leitura de hoje. *Ancora un anno* = mais um ano."
		},
		{
			it: "Che bello! Ma perché non ce l'hai detto subito?",
			pt: "Que maravilha! Mas por que você não contou logo para a gente?",
			lit: "Que belo! Mas por que não nos o tens dito logo?"
		},
		{
			it: "Perché prima ho chiamato mia madre. Gliel'ho detto in videochiamata e ha pianto per mezz'ora!",
			pt: "Porque antes liguei para a minha mãe. Contei para ela por videochamada e ela chorou meia hora!",
			lit: "Porque antes tenho chamado minha mãe. Lho tenho dito em videochamada e tem chorado por meia hora!",
			note: "*Gliel'ho* = *glielo* + *ho*, com apóstrofo. Aqui *glie-* é “a ela”: lembre que *le* também vira *glie-*. *Pianto* é o particípio de *piangere*, chorar."
		},
		{ it: "Tua madre lo sa da stamattina e noi no?", pt: "Sua mãe sabe desde hoje de manhã e a gente não?" },
		{
			it: "Due notizie in un giorno! Cameriere, un'altra bottiglia, per favore. Questa la offriamo noi!",
			pt: "Duas notícias num dia só! Garçom, mais uma garrafa, por favor. Esta é por nossa conta!",
			lit: "Duas notícias em um dia! Garçom, uma outra garrafa, por favor. Esta a oferecemos nós!",
			note: "*Offrire* = oferecer, pagar para os outros (*offro io*, lição 5)."
		},
		{
			it: "L'arrivo del treno è alle otto e la partenza alle otto e dieci.",
			pt: "A chegada do trem é às oito e a partida às oito e dez.",
			sep: true,
			note: "*L'arrivo* é masculino: *il ritorno*, *l'arrivo*, contra os nossos “a volta”, “a chegada”."
		},
		{
			it: "Chi ti ha dato le chiavi? Me le ha date Chiara.",
			pt: "Quem te deu as chaves? Foi a Chiara que me deu.",
			lit: "Quem te tem dado as chaves? Mo-las tem dadas Chiara.",
			note: "*Le chiavi* → *me le ha date*."
		},
		{ it: "Dicono che domani piove.", pt: "Dizem que amanhã vai chover.", lit: "Dizem que amanhã chove." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "O par de pronomes no passado",
			blocks: [
				{
					type: 'p',
					text: "No *passato prossimo*, o par fica antes do auxiliar. Se o segundo pronome é *lo* ou *la*, ele perde a vogal diante de *ho, hai, ha, hanno*: *me l'ha*, *gliel'ho*. E o particípio concorda com esse segundo pronome, exatamente como na lição 34 (*l'ho vista*, *li ho presi*)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "L'a**nel**lo me l'ha **da**to ieri.", pt: "O anel, ele me deu ontem." },
						{ it: "La **bor**sa me l'hanno proro**ga**ta.", pt: "A bolsa, prorrogaram para mim." },
						{ it: "Le tagli**a**telle ve le ab**bia**mo ordi**na**te.", pt: "O tagliatelle, a gente pediu para vocês." },
						{ it: "Le **chia**vi me le ha **da**te **Chia**ra.", pt: "As chaves, foi a Chiara que me deu." },
						{ it: "Glie**l'ho** **det**to sta**mat**tina.", pt: "Contei para ele (ou ela) hoje de manhã." }
					]
				},
				{
					type: 'p',
					text: "Com *lo* e *la*, a concordância aparece só no particípio, porque o apóstrofo esconde o gênero: *me l'ha dato* (o anel), *me l'ha data* (a notícia). Com *li* e *le*, não há apóstrofo: *glieli ho comprati*, *ce le ha date*."
				},
				{
					type: 'dica',
					text: "*Chi te l'ha detto?* (quem te contou?) e *Me l'ha detto...* (quem me contou foi...) aparecem em toda fofoca italiana. Vale guardar as duas como blocos prontos."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Palavras que trocam de gênero",
			blocks: [
				{
					type: 'p',
					text: "Na lição 15 você conheceu *il fiore*, a flor. Há outras palavras parecidas nas duas línguas, mas com gênero diferente. São poucas, e vale a pena guardá-las com o artigo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la **fi**ne", pt: "o fim" },
						{ it: "l'ar**ri**vo", pt: "a chegada" },
						{ it: "il co**lo**re, il do**lo**re", pt: "a cor, a dor" },
						{ it: "il **pon**te", pt: "a ponte" },
						{ it: "il mes**sag**gio, il co**rag**gio, il pae**sag**gio", pt: "a mensagem, a coragem, a paisagem" },
						{ it: "il **lat**te, il **mie**le", pt: "o leite, o mel (iguais, para comparar)" }
					]
				},
				{
					type: 'p',
					text: "Uma dica para os mais frequentes: as palavras em *-aggio* são sempre masculinas (*il viaggio*, *il messaggio*, *il formaggio*), mesmo quando o português tem “-agem”, feminino. E as em *-ore* também são quase todas masculinas: *il colore*, *il dolore*, *il sapore* (o sabor), *l'odore* (o cheiro)."
				},
				{ type: 'h', text: "Dicono che" },
				{
					type: 'p',
					text: "*Dicono che*, como o nosso “dizem que”, conta o que se ouve por aí, sem dizer quem disse: *dicono che domani piove*. A terceira pessoa do plural sem sujeito é o jeito italiano de falar de “eles” em geral: *al bar fanno un caffè ottimo*, *in Italia mangiano tardi*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "La notizia? Me l'ha data Chiara.", pt: "A notícia? Foi a Chiara que me deu." },
				{ it: "Gliel'ho detto ieri sera.", pt: "Contei para ele ontem à noite." },
				{ it: "Le foto ve le abbiamo mandate stamattina.", pt: "As fotos, a gente mandou para vocês hoje de manhã." },
				{ it: "Dicono che quel ristorante è buonissimo.", pt: "Dizem que aquele restaurante é ótimo." },
				{ it: "Il colore della giacca è bellissimo.", pt: "A cor do casaco é linda." },
				{ it: "Giulia e Luca si sposano!", pt: "A Giulia e o Luca vão se casar!" },
				{ it: "Chi te l'ha detto?", pt: "Quem te contou?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O anel, ele me deu ontem.", parts: ["L'anello me l'ha ", null, " ieri."], answers: ["dato"] },
				{ pt: "As chaves, foi a Chiara que me deu.", parts: ["Le chiavi me le ha ", null, " Chiara."], answers: ["date"] },
				{ pt: "Contei para ela hoje de manhã.", parts: ["Stamattina ", null, " detto."], answers: ["gliel'ho"] },
				{ pt: "No bar, dizem que o restaurante é ótimo.", parts: ["Al bar ", null, " che il ristorante è ottimo."], answers: ["dicono"] },
				{ pt: "O fim do filme é triste.", parts: ["La ", null, " del film è triste."], answers: ["fine"] }
			]
		}
	]
};

const licao53: Lesson = {
	no: 53,
	kind: 'licao',
	title: "Bambini al ristorante",
	titlePt: "Crianças no restaurante",
	lines: [
		{
			it: "Allora: la Bianca si mette qui, vicino alla nonna.",
			pt: "Então: a Bianca senta aqui, perto da vovó.",
			lit: "Então: a Bianca se põe aqui, perto à avó.",
			note: "Os pais do Matteo vieram de Turim com a neta. No norte da Itália, na fala, é comum pôr artigo antes do nome de pessoa: *la Bianca*, *il Matteo*. É como em boa parte do Brasil (“a Bianca”). No italiano padrão e no centro-sul, o nome vem sem artigo. *Mettersi* = pôr-se, colocar-se (lição 46)."
		},
		{ it: "No! Io voglio stare vicino allo zio Matteo!", pt: "Não! Eu quero ficar perto do tio Matteo!", lit: "Não! Eu quero estar perto ao tio Matteo!" },
		{
			it: "Va bene, vieni qui. Ma stai seduta, eh?",
			pt: "Tá bom, vem aqui. Mas fica sentada, hein?",
			lit: "Vai bem, vem aqui. Mas está sentada, eh?",
			note: "*Stai seduta* = fica sentada, como *stai calmo* (lição 20). *Seduto*, *seduta* = sentado, sentada."
		},
		{ it: "Che cosa prendi, tesoro? Le lasagne, come sempre?", pt: "O que você vai querer, meu bem? Lasanha, como sempre?", lit: "Que coisa pegas, tesouro? As lasanhas, como sempre?" },
		{
			it: "No, oggi la pizza con le patatine!",
			pt: "Não, hoje pizza com batata frita!",
			lit: "Não, hoje a pizza com as batatinhas!",
			note: "A pizza com *patatine fritte* por cima é a preferida das crianças italianas, e o horror dos napolitanos."
		},
		{ it: "Patatine sulla pizza? E poi dicono che i brasiliani sono strani!", pt: "Batata frita na pizza? E depois dizem que os brasileiros é que são estranhos!" },
		{
			it: "Prima di mangiare, però, ti lavi le mani. Su, andiamo!",
			pt: "Mas antes de comer você vai lavar as mãos. Vamos, anda!",
			lit: "Antes de comer, porém, te lavas as mãos. Vamos, andemos!",
			note: "*La mano* termina em *-o* mas é feminina, e o plural é *le mani*. *Su!* (lição 32) = vamos!, anda!, para apressar alguém. O presente *ti lavi* soa aqui como uma ordem gentil, como o nosso “você vai lavar as mãos”."
		},
		{ it: "Ma ho le mani pulite! Guarda!", pt: "Mas eu estou com as mãos limpas! Olha!", lit: "Mas tenho as mãos limpas! Olha!" },
		{
			it: "Pulite? E questo cioccolato sulle dita? Giorgio!",
			pt: "Limpas? E esse chocolate nos dedos? Giorgio!",
			note: "A avó já sabe quem foi."
		},
		{
			it: "Io? Solo un cioccolatino... piccolo piccolo.",
			pt: "Eu? Só um bombom... pequenininho.",
			lit: "Eu? Só um chocolatinho... pequeno pequeno.",
			note: "A repetição intensifica: *piccolo piccolo* = pequenininho."
		},
		{
			it: "Ecco le pizze! Attenta, Bianca, scotta.",
			pt: "Chegaram as pizzas! Cuidado, Bianca, está pelando.",
			lit: "Eis as pizzas! Atenta, Bianca, queima.",
			note: "*Scottare* = queimar, estar quente demais: *il piatto scotta*."
		},
		{
			it: "Zio, me la tagli tu?",
			pt: "Tio, você corta para mim?",
			lit: "Tio, me a cortas tu?",
			note: "*Me la* = *mi* + *la*: para mim + ela (a pizza)."
		},
		{
			it: "Certo. Ma tu cerca di usare la forchetta, non le mani.",
			pt: "Claro. Mas você tenta usar o garfo, não as mãos.",
			lit: "Certo. Mas tu procura de usar o garfo, não as mãos.",
			note: "*Cercare di* + infinitivo = tentar, procurar: *cerco di arrivare presto*. Sem o *di*, *cercare* é procurar uma coisa (*cerco le chiavi*)."
		},
		{ it: "Con le mani è più buona!", pt: "Com a mão é mais gostoso!", lit: "Com as mãos é mais boa!" },
		{
			it: "Ha ragione! A Napoli la pizza molti la mangiano con le mani.",
			pt: "Ela tem razão! Em Nápoles muita gente come pizza com a mão.",
			lit: "Tem razão! A Nápoles a pizza muitos a comem com as mãos.",
			note: "*Avere ragione* = ter razão; o contrário é *avere torto*."
		},
		{
			it: "Finita! Nonno, il gelato me lo compri tu?",
			pt: "Acabei! Vovô, o sorvete, você compra para mim?",
			lit: "Acabada! Avô, o sorvete me o compras tu?",
			note: "*Finita* concorda com *la pizza*, que ficou subentendida."
		},
		{ it: "Sì, te lo compro io. Ma è un segreto tra noi due...", pt: "Sim, eu compro para você. Mas é um segredo entre nós dois...", lit: "Sim, te o compro eu. Mas é um segredo entre nós dois..." },
		{ it: "Ho sentito tutto, Giorgio!", pt: "Eu ouvi tudo, Giorgio!", lit: "Tenho sentido tudo, Giorgio!" },
		{
			it: "La Giulia e il Luca si sposano: me l'ha detto la Chiara.",
			pt: "A Giulia e o Luca vão se casar: quem me contou foi a Chiara.",
			sep: true,
			note: "Do jeito que a mãe do Matteo diria, com os artigos do norte."
		},
		{
			it: "Cerco di arrivare in orario, ma non ci riesco mai.",
			pt: "Eu tento chegar na hora, mas nunca consigo.",
			lit: "Procuro de chegar em horário, mas não aí consigo nunca.",
			note: "*Riuscirci* = conseguir (lição 39); o *ci* retoma o que se tenta fazer."
		},
		{ it: "Mi passi il coltello? E un cucchiaio per il brodo?", pt: "Você me passa a faca? E uma colher para a sopa?", lit: "Me passas a faca? E uma colher para o caldo?" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "O artigo antes do nome; cercare di; la mano",
			blocks: [
				{
					type: 'p',
					text: "Em italiano padrão, os nomes de pessoa vêm sem artigo: *Bianca mangia la pizza*, *ho visto Matteo*. É o que você ouviu até agora no curso. Mas no norte (Turim, Milão, Bolonha também), na conversa, muita gente põe o artigo, sobretudo antes de nomes de mulher: *la Bianca*, *la Chiara*, *il Luca*. Você pode ouvir, mas não precisa imitar; sem artigo está sempre certo."
				},
				{
					type: 'dica',
					text: "Com sobrenome de pessoa famosa, o artigo é normal em todo lugar: *il Manzoni*, *la Callas*. E com título também (lição 16): *il signor Esposito*, *la dottoressa Marchi*."
				},
				{ type: 'h', text: "Cercare e cercare di" },
				{
					type: 'p',
					text: "*Cercare* + coisa é procurar: *cerco le forbici*. *Cercare di* + infinitivo é tentar, esforçar-se: *cerca di usare la forchetta*, *cerco di arrivare in orario*. Para “tentar”, o italiano também tem *provare a*: *prova a mangiare con la forchetta*."
				},
				{ type: 'h', text: "La mano, le mani" },
				{
					type: 'p',
					text: "*La mano* é feminina, apesar do *-o*, e faz o plural *le mani*. É a exceção mais famosa da língua. Daí *a mano* (à mão, feito à mão), *dare una mano* (dar uma mão, ajudar) e *stringere la mano* (apertar a mão)."
				}
			]
		},
		{
			kind: 'leitura',
			title: "A mesa posta",
			blocks: [
				{
					type: 'p',
					text: "Se a Bianca vai aprender a comer com garfo e faca, você também pode aprender os nomes do que está na mesa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la for**chet**ta", pt: "o garfo", pron: "la for-kêt-ta" },
						{ it: "il col**tel**lo", pt: "a faca", pron: "il kol-tél-lo" },
						{ it: "il cucchi**a**io, il cucchi**ai**no", pt: "a colher, a colherzinha (de café)", pron: "il kuk-kiá-io, il kuk-kia-í-no" },
						{ it: "il tova**glio**lo", pt: "o guardanapo", pron: "il to-va-lhó-lo" },
						{ it: "il **piat**to, il bic**chie**re", pt: "o prato, o copo", pron: "il piát-to, il bik-kié-re" },
						{ it: "la to**va**glia", pt: "a toalha de mesa", pron: "la to-vá-lha" }
					]
				},
				{
					type: 'p',
					text: "Na Itália, as crianças vão ao restaurante com os pais desde pequenas, inclusive à noite, e ficam até tarde. Muitas trattorias têm *il seggiolone* (a cadeirinha alta) e um *menù bambini*, com massa simples, *cotoletta* e batata frita."
				},
				{
					type: 'dica',
					text: "*Il cucchiaino* é a colher de café ou de sobremesa: o sufixo *-ino* (lição 9) faz o diminutivo. Como *tavolino*, *cioccolatino*, *patatine*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "La Bianca è la nipote di Matteo.", pt: "A Bianca é sobrinha do Matteo." },
				{ it: "Cerca di mangiare piano, tesoro.", pt: "Tenta comer devagar, meu bem." },
				{ it: "Prima di mangiare mi lavo le mani.", pt: "Antes de comer, eu lavo as mãos." },
				{ it: "Mi passi la forchetta e il coltello?", pt: "Você me passa o garfo e a faca?" },
				{ it: "La pizza? Te la taglio io.", pt: "A pizza? Eu corto para você." },
				{ it: "Su, ragazzi, a tavola!", pt: "Vamos, gente, para a mesa!" },
				{ it: "Il gelato me lo compra il nonno.", pt: "O sorvete, quem compra para mim é o vovô." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Tenta comer devagar.", parts: ["Cerca ", null, " mangiare piano."], answers: ["di"] },
				{ pt: "Eu lavo as mãos.", parts: ["Mi lavo le ", null, "."], answers: ["mani"] },
				{ pt: "Tio, você corta para mim?", parts: ["Zio, me la ", null, " tu?"], answers: ["tagli"] },
				{ pt: "Você me passa o garfo?", parts: ["Mi passi la ", null, "?"], answers: ["forchetta"] },
				{ pt: "O sorvete, quem compra para mim é o vovô.", parts: ["Il gelato ", null, " compra il nonno."], answers: ["me lo"] }
			]
		}
	]
};

const licao54: Lesson = {
	no: 54,
	kind: 'licao',
	title: "La pasta",
	titlePt: "A massa",
	lines: [
		{
			it: "Chiara, adesso che resto un altro anno, devo imparare a cucinare la pasta come si deve.",
			pt: "Chiara, agora que vou ficar mais um ano, preciso aprender a cozinhar massa direito.",
			lit: "Chiara, agora que fico um outro ano, devo aprender a cozinhar a massa como se deve.",
			note: "*Come si deve* = como se deve, direito, do jeito certo. *Si deve* (é preciso, deve-se) é o *si* impessoal da lição 27 com *dovere*."
		},
		{
			it: "Finalmente! Prima di tutto, ci vuole una pentola grande. Quella è troppo piccola.",
			pt: "Finalmente! Antes de tudo, precisa de uma panela grande. Essa é pequena demais.",
			lit: "Finalmente! Antes de tudo, aí quer uma panela grande. Aquela é demasiado pequena.",
			note: "*Ci vuole* = precisa-se de, é necessário, leva. A coisa necessária é o sujeito: *ci vuole una pentola*. *La pentola* = a panela."
		},
		{ it: "Grande quanto? Io di solito uso questa.", pt: "Grande quanto? Eu normalmente uso esta.", lit: "Grande quanto? Eu de costume uso esta." },
		{
			it: "Per mezzo chilo di pasta ci vogliono almeno cinque litri d'acqua. Ecco perché la tua pasta sembra colla!",
			pt: "Para meio quilo de massa são precisos pelo menos cinco litros de água. É por isso que a sua massa parece cola!",
			lit: "Para meio quilo de massa aí querem ao menos cinco litros de água. Eis por que a tua massa parece cola!",
			note: "Com coisa no plural, *ci vogliono*: *ci vogliono cinque litri*. *Ecco perché* = é por isso que."
		},
		{
			it: "Adesso bisogna aspettare: l'acqua deve bollire.",
			pt: "Agora é preciso esperar: a água tem que ferver.",
			note: "*Bisogna* + infinitivo = é preciso, tem que. É impessoal e nunca muda: *bisogna aspettare*, *bisogna salare*. *Bollire* = ferver: *l'acqua bolle*."
		},
		{
			it: "Bolle! Butto la pasta?",
			pt: "Está fervendo! Ponho a massa?",
			lit: "Ferve! Jogo a massa?",
			note: "*Buttare la pasta* (literalmente, jogar a massa) é como se diz pôr a massa na água fervendo. E é o sinal de que o almoço está quase pronto: *Butto la pasta!*"
		},
		{
			it: "No, prima il sale: ci vogliono dieci grammi per ogni litro.",
			pt: "Não, primeiro o sal: são dez gramas para cada litro.",
			lit: "Não, antes o sal: aí querem dez gramas por cada litro."
		},
		{ it: "E l'olio? Mia madre lo mette sempre nell'acqua.", pt: "E o óleo? A minha mãe sempre põe na água.", lit: "E o óleo? Minha mãe o põe sempre na água." },
		{
			it: "Niente olio! E gli spaghetti non si spezzano. Mai! Mia nonna piange, se lo vede.",
			pt: "Nada de óleo! E espaguete não se quebra. Nunca! A minha avó chora, se vê isso.",
			lit: "Nada óleo! E os espaguetes não se quebram. Nunca! Minha avó chora, se o vê.",
			note: "*Niente* + substantivo = nada de: *niente olio*, *niente zucchero*. *Non si spezzano*: mais um *si* impessoal, que concorda com *gli spaghetti* (lição 27)."
		},
		{ it: "Va bene, va bene. Quanto tempo ci vuole?", pt: "Tá bom, tá bom. Quanto tempo leva?", lit: "Vai bem, vai bem. Quanto tempo aí quer?", note: "Com tempo, *ci vuole* é “leva”, “demora”: *ci vuole un'ora*, *ci vogliono undici minuti*." },
		{
			it: "Sul pacco c'è scritto undici minuti. Ma occorre molta attenzione: bisogna assaggiare un minuto prima.",
			pt: "No pacote diz onze minutos. Mas precisa de muita atenção: tem que provar um minuto antes.",
			lit: "Sobre o pacote há escrito onze minutos. Mas ocorre muita atenção: precisa provar um minuto antes.",
			note: "*Occorre* = é necessário, faz falta; um pouco mais formal que *ci vuole*, e funciona igual: *occorre un'ora*, *occorrono due uova*. *Molta attenzione*: *molto* concorda com o substantivo (lição 22). *Assaggiare* = provar (comida)."
		},
		{ it: "Mmm... è ancora un po' dura.", pt: "Hum... ainda está um pouco dura." },
		{
			it: "Perfetto, è al dente! Adesso si scola e si passa in padella con il sugo.",
			pt: "Perfeito, está al dente! Agora escorre e passa na frigideira com o molho.",
			lit: "Perfeito, está ao dente! Agora se escorre e se passa em frigideira com o molho.",
			note: "*Al dente* = cozida mas ainda firme, “no ponto do dente”. *Scolare* = escorrer; *la padella* = a frigideira; *il sugo* = o molho de massa."
		},
		{ it: "Ciao! Ho portato le paste per il dolce!", pt: "Oi! Trouxe uns doces para a sobremesa!", lit: "Oi! Tenho trazido as massas para o doce!" },
		{ it: "Altra pasta? Ma ne abbiamo già mezzo chilo!", pt: "Mais massa? Mas a gente já tem meio quilo!", lit: "Outra massa? Mas disso temos já meio quilo!" },
		{
			it: "Non la pasta: le paste! Cannoli, bignè, sfogliatelle... dalla pasticceria!",
			pt: "Não massa: doces! Cannoli, carolinas, sfogliatelle... da confeitaria!",
			lit: "Não a massa: as massas! Cannoli, bombas, sfogliatelle... da confeitaria!",
			note: "*La pasta*, no singular, é a massa: espaguete, penne, a massa toda. *Una pasta*, *le paste* são doces de confeitaria, um por pessoa. *La pasticceria* = a confeitaria."
		},
		{
			it: "Le sfogliatelle? Oggi mi sento a Napoli!",
			pt: "Sfogliatelle? Hoje eu me sinto em Nápoles!",
			note: "A *sfogliatella* é o doce napolitano de massa folhada em camadas, recheado de ricota. Para a Chiara, gosto de casa."
		},
		{
			it: "Per fare il ragù ci vogliono tre ore.",
			pt: "Para fazer o ragù levam três horas.",
			sep: true
		},
		{
			it: "Ho bisogno di una pentola più grande.",
			pt: "Preciso de uma panela maior.",
			lit: "Tenho necessidade de uma panela mais grande.",
			note: "*Avere bisogno di* = precisar de, com uma pessoa como sujeito: *ho bisogno di te*. *Bisogna* é impessoal: ninguém em particular precisa."
		},
		{ it: "Bisogna prenotare? No, non c'è bisogno.", pt: "Precisa reservar? Não, não precisa.", lit: "Precisa reservar? Não, não há necessidade." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "Ci vuole, bisogna, occorre",
			blocks: [
				{
					type: 'p',
					text: "O português tem “precisa”, “é preciso”, “leva”. O italiano tem várias formas, e cada uma pede uma construção. Hoje apareceram as principais."
				},
				{ type: 'h', text: "Ci vuole + coisa" },
				{
					type: 'p',
					text: "*Ci vuole* diz o que é necessário, e a coisa necessária é o sujeito. Por isso o verbo concorda com ela: *ci vuole* com singular, *ci vogliono* com plural. Serve também para o tempo que uma coisa leva."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ci **vuo**le una **pen**tola **gran**de.", pt: "Precisa de uma panela grande." },
						{ it: "Ci **vo**gliono **cin**que **li**tri d'**ac**qua.", pt: "São precisos cinco litros de água." },
						{ it: "Quanto **tem**po ci **vuo**le?", pt: "Quanto tempo leva?" },
						{ it: "Ci **vo**gliono **tre** **o**re.", pt: "Leva três horas." }
					]
				},
				{
					type: 'p',
					text: "*Occorre* funciona do mesmo jeito (*occorre attenzione*, *occorrono due uova*), mas soa mais formal: aparece em receitas escritas, regulamentos, instruções."
				},
				{ type: 'h', text: "Bisogna + infinitivo" },
				{
					type: 'p',
					text: "*Bisogna* é seguido de uma ação, no infinitivo, e não muda nunca: *bisogna aspettare*, *bisogna assaggiare*. É o nosso “tem que”, “é preciso”, sem dizer quem. Para dizer quem precisa, use *dovere*: *devi aspettare*, *dobbiamo prenotare*."
				},
				{
					type: 'dica',
					text: "Não confunda *bisogna* com *avere bisogno di*. *Ho bisogno di una pentola* = eu preciso de uma panela (uma pessoa precisa). *Bisogna comprare una pentola* = é preciso comprar uma panela (em geral). E *non c'è bisogno* = não precisa."
				}
			]
		},
		{
			kind: 'leitura',
			title: "La pasta e le paste",
			blocks: [
				{
					type: 'p',
					text: "Para um italiano, cozinhar massa é coisa séria, e as regras da Chiara são as que qualquer avó repetiria. Resumindo:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un **li**tro d'**ac**qua ogni **cen**to **gram**mi", pt: "um litro de água para cada 100 g de massa" },
						{ it: "il **sa**le quando l'**ac**qua **bol**le", pt: "o sal quando a água ferve, uns 10 g por litro" },
						{ it: "**nien**te **o**lio nell'**ac**qua", pt: "nada de óleo na água" },
						{ it: "gli spa**ghet**ti non si **spez**zano", pt: "espaguete não se quebra" },
						{ it: "al **den**te", pt: "no ponto, ainda firme" }
					]
				},
				{
					type: 'p',
					text: "E mais: cada formato tem o seu molho. Massa longa e fina (*spaghetti*, *linguine*) com molhos lisos, de tomate, azeite ou frutos do mar; massa curta com furos (*penne*, *rigatoni*) com molhos encorpados; massa larga de ovo (*tagliatelle*) com o *ragù*. A massa vai para a panela do molho, e não o contrário."
				},
				{ type: 'h', text: "Le paste della domenica" },
				{
					type: 'p',
					text: "No singular, *la pasta* é a massa, e quase não tem plural. *Una pasta*, *due paste*, *le paste* são os doces individuais de confeitaria, que muitas famílias compram no domingo de manhã, numa bandeja embrulhada em papel, para levar ao almoço. Também se diz *i pasticcini*, quando são pequenos."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Per fare il pane ci vuole tempo.", pt: "Para fazer pão precisa de tempo." },
				{ it: "Ci vogliono due uova per questa torta.", pt: "Para este bolo são precisos dois ovos." },
				{ it: "Bisogna salare l'acqua quando bolle.", pt: "É preciso salgar a água quando ela ferve." },
				{ it: "Ho bisogno di un litro di latte.", pt: "Preciso de um litro de leite." },
				{ it: "Non c'è bisogno di correre.", pt: "Não precisa correr." },
				{ it: "Occorre molta attenzione.", pt: "É preciso muita atenção." },
				{ it: "Di domenica compriamo le paste in pasticceria.", pt: "Aos domingos compramos doces na confeitaria." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Leva dez minutos.", parts: ["Ci ", null, " dieci minuti."], answers: ["vogliono"] },
				{ pt: "É preciso muita paciência.", parts: ["Ci ", null, " molta pazienza."], answers: ["vuole"] },
				{ pt: "Para saber se está pronta, é preciso provar a massa.", parts: ["Per sapere se è pronta, ", null, " assaggiare la pasta."], answers: ["bisogna"] },
				{ pt: "Eu preciso de sal.", parts: ["Ho ", null, " di sale."], answers: ["bisogno"] },
				{ pt: "A massa está no ponto.", parts: ["La pasta è al ", null, "."], answers: ["dente"] }
			]
		}
	]
};

const licao55: Lesson = {
	no: 55,
	kind: 'licao',
	title: "Abitudini a tavola",
	titlePt: "Hábitos à mesa",
	lines: [
		{
			it: "A tavola, ragazzi! Stasera cena brasiliana: riso, fagioli, carne e insalata.",
			pt: "Para a mesa, gente! Hoje à noite, jantar brasileiro: arroz, feijão, carne e salada.",
			lit: "À mesa, rapazes! Esta noite jantar brasileiro: arroz, feijões, carne e salada.",
			note: "O Rafael convidou a Giulia e o Luca para festejar o noivado deles e a bolsa dele. *I fagioli* = o feijão, no plural, porque são muitos grãos."
		},
		{
			it: "Che profumo! Ma in che ordine si mangia? Prima il riso e poi i fagioli?",
			pt: "Que cheiro bom! Mas em que ordem se come? Primeiro o arroz e depois o feijão?",
			lit: "Que perfume! Mas em que ordem se come? Antes o arroz e depois os feijões?",
			note: "*Il profumo* é o perfume e também o cheiro bom de comida. Já *l'odore* é qualquer cheiro."
		},
		{ it: "No, tutto insieme, nello stesso piatto. In Brasile si fa così.", pt: "Não, tudo junto, no mesmo prato. No Brasil é assim que se faz." },
		{
			it: "Tutto insieme? Da noi si comincia con il primo e si finisce con la frutta.",
			pt: "Tudo junto? Aqui a gente começa pelo primeiro prato e termina com a fruta.",
			lit: "Tudo junto? De nós se começa com o primeiro e se termina com a fruta.",
			note: "*Cominciare con* = começar por; *finire con* = terminar com. *Da noi* = aqui, no nosso país, na nossa casa (lição 30)."
		},
		{ it: "E in mezzo c'è il secondo, con il contorno.", pt: "E no meio vem o prato principal, com o acompanhamento.", lit: "E em meio há o segundo, com o contorno." },
		{ it: "Lo so. E a volte noi mettiamo anche gli spaghetti accanto al riso.", pt: "Eu sei. E às vezes a gente põe espaguete do lado do arroz também." },
		{
			it: "Gli spaghetti come contorno? Questo a mia madre non lo diciamo.",
			pt: "Espaguete como acompanhamento? Isso a gente não conta para a minha mãe.",
			lit: "Os espaguetes como contorno? Isto a minha mãe não o dizemos."
		},
		{
			it: "Rafael, mi passi del pane, per favore?",
			pt: "Rafael, me passa um pouco de pão, por favor?",
			lit: "Rafael, me passas do pão, por favor?",
			note: "*Del pane* = um pouco de pão: é o partitivo, *di* + artigo (*del, della, dei, delle*...). Ele é facultativo: *mi passi il pane?* ou *un po' di pane?* também servem."
		},
		{
			it: "Ecco. E prova anche la farofa: è farina di manioca tostata.",
			pt: "Aqui. E prova a farofa também: é farinha de mandioca torrada.",
			note: "*Provare* = experimentar, provar (lição 6), roupa ou comida."
		},
		{
			it: "Buonissima! Rafael, ti verso del vino?",
			pt: "Uma delícia! Rafael, te sirvo um pouco de vinho?",
			lit: "Boníssima! Rafael, te verto do vinho?",
			note: "*Versare* = servir (uma bebida), despejar."
		},
		{ it: "Sì, grazie, mezzo bicchiere. E dopo cena faccio un cappuccino per tutti!", pt: "Sim, obrigado, meio copo. E depois do jantar faço um cappuccino para todo mundo!" },
		{ it: "Un cappuccino dopo cena? Rafael!", pt: "Um cappuccino depois do jantar? Rafael!" },
		{
			it: "Scherzo, scherzo! Il cappuccino solo la mattina: me l'avete detto mille volte.",
			pt: "Brincadeira, brincadeira! Cappuccino só de manhã: vocês já me disseram mil vezes.",
			lit: "Brinco, brinco! O cappuccino só a manhã: me o tendes dito mil vezes.",
			note: "*Scherzare* = brincar, fazer piada; *scherzo!* = é brincadeira! O conselho é da lição 5."
		},
		{
			it: "E gli spaghetti alla bolognese? A Bologna non esistono! Da noi ci sono le tagliatelle al ragù.",
			pt: "E o espaguete à bolonhesa? Em Bolonha ele não existe! Aqui tem tagliatelle ao ragù.",
			note: "É verdade: os bolonheses comem o *ragù* com massa larga de ovo, nunca com espaguete. O “espaguete à bolonhesa” nasceu fora da Itália."
		},
		{
			it: "E sul pesce, niente formaggio! A Napoli è quasi un reato.",
			pt: "E no peixe, nada de queijo! Em Nápoles é quase um crime.",
			note: "*Il reato* = o crime, a infração. Massa com frutos do mar e parmesão é uma das combinações que mais chocam um italiano."
		},
		{ it: "Quante regole! E posso fare la scarpetta?", pt: "Quanta regra! E posso passar o pão no molho?", lit: "Quantas regras! E posso fazer a sapatinha?", note: "*Fare la scarpetta* é limpar o molho do prato com um pedaço de pão." },
		{ it: "Tra amici, sì. In un ristorante elegante, meglio di no.", pt: "Entre amigos, sim. Num restaurante chique, melhor não." },
		{
			it: "Al mercato ho comprato delle fragole e del formaggio.",
			pt: "No mercado comprei uns morangos e um pouco de queijo.",
			sep: true,
			note: "No plural, o partitivo é o nosso “uns, umas”: *delle fragole*, *degli amici*."
		},
		{
			it: "La cena è cominciata con gli antipasti ed è finita con il dolce.",
			pt: "O jantar começou com as entradas e terminou com a sobremesa.",
			note: "Sem objeto, *cominciare* e *finire* vão com *essere* (lição 47)."
		},
		{
			it: "Non mangio carne, ma mangio pesce.",
			pt: "Não como carne, mas como peixe.",
			note: "Na negação e em listas, o partitivo quase sempre cai."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "O partitivo",
			blocks: [
				{
					type: 'p',
					text: "Quando se fala de uma quantidade indefinida, “um pouco de”, “uns”, o italiano pode usar *di* + artigo: é o partitivo. As formas são as da preposição articulada (lição 21)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "del **pa**ne, del **vi**no", pt: "um pouco de pão, um pouco de vinho" },
						{ it: "dell'**ac**qua, della far**i**na", pt: "um pouco de água, de farinha" },
						{ it: "dello zuc**che**ro", pt: "um pouco de açúcar" },
						{ it: "dei pomo**do**ri, degli a**mi**ci", pt: "uns tomates, uns amigos" },
						{ it: "delle **fra**gole", pt: "uns morangos" }
					]
				},
				{ type: 'h', text: "Facultativo" },
				{
					type: 'p',
					text: "O partitivo nunca é obrigatório. *Mi passi del pane?*, *mi passi il pane?* e *mi passi un po' di pane?* dizem a mesma coisa. Na negação e em listas, ele normalmente some: *non mangio carne*, *compro pane, latte e uova*. Na dúvida, *un po' di* no singular e *qualche* + singular no plural (lição 40) resolvem tudo."
				},
				{
					type: 'dica',
					text: "Não confunda o partitivo com o *di* de posse: *del pane* pode ser “um pouco de pão” ou “do pão” (*il prezzo del pane*). O contexto separa."
				},
				{ type: 'h', text: "Cominciare con, finire con" },
				{
					type: 'p',
					text: "Para dizer por onde algo começa ou termina, *con*: *si comincia con il primo*, *si finisce con la frutta*. Com um infinitivo, *cominciare a* (lição 47): *ho cominciato a cucinare*."
				}
			]
		},
		{
			kind: 'leitura',
			title: "A refeição italiana",
			blocks: [
				{
					type: 'p',
					text: "O café da manhã (*la colazione*) é leve e doce: café, *cornetto*, biscoitos. O almoço (*il pranzo*) é por volta da uma; o jantar (*la cena*), entre as oito e as nove, mais tarde no sul. No dia a dia, muita gente come um prato só; o almoço completo, com *antipasto*, *primo*, *secondo*, *contorno*, *dolce* e café, fica para o domingo e as festas."
				},
				{ type: 'h', text: "Cada região, a sua mesa" },
				{
					type: 'exemplos',
					items: [
						{ it: "i tortel**li**ni in **bro**do", pt: "Bolonha: massa recheada num caldo de carne" },
						{ it: "la **piz**za, la sfoglia**tel**la", pt: "Nápoles" },
						{ it: "gli agno**lot**ti, la **ba**gna **cau**da", pt: "Piemonte, a região de Turim" },
						{ it: "il ri**sot**to alla mila**ne**se", pt: "Milão: risoto com açafrão" },
						{ it: "le aran**ci**ne", pt: "Sicília: bolinhos de arroz recheados" }
					]
				},
				{ type: 'h', text: "As regras não escritas" },
				{
					type: 'p',
					text: "A massa é um prato, não um acompanhamento. O pão acompanha a refeição, sem manteiga. Cappuccino só de manhã; depois da refeição, *un caffè*, e às vezes *un amaro*, o licor de ervas digestivo. Queijo no peixe, nunca. E ninguém corta o espaguete com a faca: enrola-se no garfo."
				},
				{
					type: 'dica',
					text: "Ninguém vai brigar com um estrangeiro por quebrar uma regra. Mas perguntar *Come si mangia questo?* (como se come isto?) é o melhor jeito de ganhar a simpatia de qualquer italiano à mesa."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vuoi del pane? Sì, grazie, un po'.", pt: "Você quer pão? Quero, obrigado, um pouco." },
				{ it: "Abbiamo comprato del formaggio e delle fragole.", pt: "Compramos um pouco de queijo e uns morangos." },
				{ it: "Non bevo vino, bevo acqua.", pt: "Não bebo vinho, bebo água." },
				{ it: "Cominciamo con un antipasto e finiamo con il caffè.", pt: "Começamos com uma entrada e terminamos com o café." },
				{ it: "In Italia la pasta è un primo, non un contorno.", pt: "Na Itália a massa é um primeiro prato, não um acompanhamento." },
				{ it: "A Bologna si mangiano le tagliatelle al ragù.", pt: "Em Bolonha se come tagliatelle ao ragù." },
				{ it: "Mi versi dell'acqua, per favore?", pt: "Você me serve um pouco de água, por favor?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Quer um pouco de vinho?", parts: ["Vuoi ", null, " vino?"], answers: ["del"] },
				{ pt: "Comprei uns morangos (com o partitivo).", parts: ["Ho comprato ", null, " fragole."], answers: ["delle"] },
				{ pt: "Uns amigos meus vêm jantar (com o partitivo).", parts: ["Vengono a cena ", null, " miei amici."], answers: ["dei"] },
				{ pt: "Começamos pelo primeiro prato.", parts: ["Cominciamo ", null, " il primo."], answers: ["con"] },
				{ pt: "O jantar terminou com a fruta.", parts: ["La cena è ", null, " con la frutta."], answers: ["finita"] }
			]
		}
	]
};

const licao56: Lesson = {
	no: 56,
	kind: 'revisao',
	title: "Ripasso",
	titlePt: "Revisão",
	steps: [
		{
			kind: 'leitura',
			title: "Os pronomes combinados",
			blocks: [
				{
					type: 'p',
					text: "Que semana à mesa! Um almoço surpresa, um noivado, uma bolsa prorrogada, uma pizza com batata frita e um espaguete que não se quebra. E, em quase todas as falas, pares de pronomes. Vamos reuni-los."
				},
				{
					type: 'p',
					text: "Quando um pronome indireto (a pessoa) e um direto (a coisa) se encontram, o indireto vem primeiro e muda a vogal: *mi, ti, ci, vi* → *me, te, ce, ve*. *Gli* e *le* (a ele, a ela, e também a eles) viram *glie-* e se juntam ao segundo numa palavra só."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "me lo, me la, me li, me le, me ne", pt: "para mim" },
						{ it: "te lo, te la, te li, te le, te ne", pt: "para você" },
						{ it: "glielo, gliela, glieli, gliele, gliene", pt: "para ele, para ela, para o senhor, para eles" },
						{ it: "ce lo, ce la, ce li, ce le, ce ne", pt: "para nós" },
						{ it: "ve lo, ve la, ve li, ve le, ve ne", pt: "para vocês" }
					]
				},
				{
					type: 'exemplos',
					items: [
						{ it: "E a Matteo glielo diciamo?", pt: "E ao Matteo, a gente conta? (lição 50)" },
						{ it: "Eccole. Te le do, ma attenta alle dita!", pt: "Aqui está. Te dou, mas cuidado com os dedos! (lição 50)" },
						{ it: "E il pane, ce lo porta?", pt: "E o pão, o senhor traz para nós? (lição 51)" },
						{ it: "Zio, me la tagli tu?", pt: "Tio, você corta para mim? (lição 53)" }
					]
				},
				{
					type: 'dica',
					text: "O mesmo mecanismo explica duas formas que você usa há muito tempo: *ce l'ho* (*ci* + *lo*, lição 2) e *ce n'è*, *ce ne sono* (*ci* + *ne*, lição 50)."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Onde fica o par",
			blocks: [
				{
					type: 'p',
					text: "O par se comporta exatamente como um pronome só e nunca se separa. Com verbo conjugado, vem antes (e depois do *non*, se houver). Com infinitivo, cola no fim, e o infinitivo perde o *-e*. Com *potere*, *dovere* e *volere*, as duas posições valem."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "No, non glielo diciamo.", pt: "Antes do verbo, depois do *non*. (lição 50)" },
						{ it: "Ve lo posso consigliare.", pt: "Antes do modal... (lição 51)" },
						{ it: "Posso consigliarvelo.", pt: "...ou colado no infinitivo. (lição 51)" },
						{ it: "Te lo facciamo vedere... un'altra volta!", pt: "*Far vedere* = mostrar. (lição 50)" }
					]
				},
				{ type: 'h', text: "No passado" },
				{
					type: 'p',
					text: "No *passato prossimo*, o par vai antes do auxiliar; *lo* e *la* perdem a vogal diante de *ho, hai, ha, hanno*. O particípio concorda com o segundo pronome."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Me l'ha dato ieri sera.", pt: "Ele me deu (o anel) ontem à noite. (lição 52)" },
						{ it: "La borsa di studio me l'hanno prorogata!", pt: "Prorrogaram a minha bolsa! (lição 52)" },
						{ it: "Le tagliatelle ve le abbiamo già ordinate.", pt: "O tagliatelle a gente já pediu para vocês. (lição 52)" },
						{ it: "Gliel'ho detto in videochiamata.", pt: "Contei para ela por videochamada. (lição 52)" }
					]
				},
				{
					type: 'dica',
					text: "Diga sempre o par colado no verbo, numa emissão só: *gliel'ho detto* soa “lhelódêtto”. É isso que faz os combinados soarem naturais."
				}
			]
		},
		{
			kind: 'leitura',
			title: "É preciso: si deve, bisogna, ci vuole, occorre",
			blocks: [
				{
					type: 'p',
					text: "Para falar de necessidade sem dizer quem precisa, o italiano tem quatro ferramentas. Duas pedem um verbo; duas pedem uma coisa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Bisogna aspettare: l'acqua deve bollire.", pt: "*bisogna* + infinitivo, nunca muda (lição 54)" },
						{ it: "Devo imparare a cucinare la pasta come si deve.", pt: "*si deve* + infinitivo, o *si* impessoal (lição 54)" },
						{ it: "Prima di tutto, ci vuole una pentola grande.", pt: "*ci vuole* + coisa no singular (lição 54)" },
						{ it: "Ci vogliono almeno cinque litri d'acqua.", pt: "*ci vogliono* + coisa no plural (lição 54)" },
						{ it: "Occorre molta attenzione.", pt: "*occorre* + coisa, mais formal (lição 54)" }
					]
				},
				{
					type: 'p',
					text: "*Ci vuole* também mede o tempo: *quanto tempo ci vuole?*, *ci vogliono tre ore*. No passado, como *bastare* (lição 48), vai com *essere* e concorda: *ci è voluta un'ora*, *ci sono voluti tre giorni*."
				},
				{ type: 'h', text: "Bisogna × avere bisogno di" },
				{
					type: 'p',
					text: "*Bisogna* é impessoal: *bisogna prenotare* (é preciso reservar). *Avere bisogno di* tem uma pessoa como sujeito: *ho bisogno di una pentola più grande* (eu preciso de uma panela maior), *abbiamo bisogno di te*. E para dizer que não precisa: *non c'è bisogno*."
				},
				{
					type: 'dica',
					text: "Quando a pessoa importa, use simplesmente *dovere*: *devi assaggiare la pasta*, *dobbiamo prenotare*. *Bisogna* e companhia servem para regras e receitas."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Outras peças da semana",
			blocks: [
				{
					type: 'exemplos',
					items: [
						{ it: "Di domenica è sempre piena.", pt: "*di* + dia = sempre naquele dia (lição 50)" },
						{ it: "gli occhiali, le forbici", pt: "uma coisa, palavra no plural (lição 50)" },
						{ it: "Manca ancora una mia amica.", pt: "*una mia amica* = uma amiga minha (lição 51)" },
						{ it: "Dicono che domani piove.", pt: "o “eles” indefinido (lição 52)" },
						{ it: "la fine, l'arrivo, il colore", pt: "gênero diferente do português (lição 52)" },
						{ it: "la Bianca, il Matteo", pt: "artigo antes do nome, na fala do norte (lição 53)" },
						{ it: "Cerca di usare la forchetta.", pt: "*cercare di* = tentar (lição 53)" },
						{ it: "la mano, le mani", pt: "feminina em *-o* (lição 53)" },
						{ it: "la pasta / le paste", pt: "a massa / os doces de confeitaria (lição 54)" },
						{ it: "Mi passi del pane?", pt: "o partitivo, facultativo (lição 55)" }
					]
				},
				{
					type: 'dica',
					text: "Se der para escolher uma coisa só desta lista para usar hoje, que seja o partitivo: *vuoi del caffè?*, *compro delle fragole*. Ele aparece em toda conversa sobre comida."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Expressões úteis",
			blocks: [
				{
					type: 'p',
					text: "Do telefonema para a trattoria até a sobremesa, estas expressões apareceram nas lições 50 a 55. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ci penso io!", pt: "Deixa comigo!" },
						{ it: "Lo sai che...?", pt: "Você sabia que...?" },
						{ it: "a nome Rafael", pt: "em nome de Rafael" },
						{ it: "Che ci fai qui?", pt: "O que você está fazendo aqui?" },
						{ it: "Si accomodino.", pt: "Sentem-se. (garçom, muito formal)" },
						{ it: "Neanche per sogno!", pt: "Nem pensar!" },
						{ it: "Scusate il ritardo!", pt: "Desculpem o atraso!" },
						{ it: "Chi te l'ha detto?", pt: "Quem te contou?" },
						{ it: "Auguri!", pt: "Parabéns! Felicidades!" },
						{ it: "Su!", pt: "Vamos! Anda!" },
						{ it: "Scotta!", pt: "Está pelando!" },
						{ it: "Ha ragione.", pt: "Tem razão." },
						{ it: "come si deve", pt: "direito, como se deve" },
						{ it: "Butto la pasta!", pt: "Vou pôr a massa!" },
						{ it: "al dente", pt: "no ponto" },
						{ it: "Che profumo!", pt: "Que cheiro bom!" },
						{ it: "Scherzo!", pt: "É brincadeira!" },
						{ it: "fare la scarpetta", pt: "passar o pão no molho do prato" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém se oferecer para resolver algo por você, responda à italiana: *Grazie, ma ci penso io!*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il vino? Te lo porto io domenica.", pt: "O vinho? Eu levo para você no domingo." },
				{ it: "Ci sono ancora posti? Sì, ce ne sono tre.", pt: "Ainda tem lugares? Tem, três." },
				{ it: "Matteo vuole la ricetta: gliela mando stasera.", pt: "O Matteo quer a receita: mando para ele hoje à noite." },
				{ it: "Le chiavi me le ha date Giulia.", pt: "As chaves, quem me deu foi a Giulia." },
				{ it: "Posso consigliarvelo: è la specialità della casa.", pt: "Posso recomendá-lo a vocês: é a especialidade da casa." },
				{ it: "Per questo ragù ci vogliono tre ore e bisogna stare attenti.", pt: "Para este ragù levam três horas, e é preciso tomar cuidado." },
				{ it: "Non c'è bisogno di prenotare: di lunedì il ristorante è vuoto.", pt: "Não precisa reservar: às segundas o restaurante fica vazio." },
				{ it: "Una mia amica fa la cuoca in una trattoria sui colli.", pt: "Uma amiga minha é cozinheira numa trattoria nas colinas." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O livro? Dou para ele amanhã.", parts: ["Il libro? ", null, " do domani."], answers: ["glielo"] },
				{ pt: "A notícia, me deram ontem.", parts: ["La notizia me l'hanno ", null, " ieri."], answers: ["data"] },
				{ pt: "Leva uma hora.", parts: ["Ci ", null, " un'ora."], answers: ["vuole"] },
				{ pt: "São precisos três ovos.", parts: ["Ci ", null, " tre uova."], answers: ["vogliono"] },
				{ pt: "Preciso de uma panela maior.", parts: ["Ho ", null, " di una pentola più grande."], answers: ["bisogno"] }
			]
		}
	]
};

export const unidade: Unit = { no: 8, title: "À mesa", lessons: [50, 51, 52, 53, 54, 55, 56] };

export const licoes: Lesson[] = [licao50, licao51, licao52, licao53, licao54, licao55, licao56];
