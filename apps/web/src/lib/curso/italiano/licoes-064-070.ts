import type { Lesson, Unit } from '../types.ts';

// Lições 64–70: setembro. O signor Rinaldi, dono do apartamento dos três, avisa por carta registrada
// que vai vendê-lo; eles têm de sair antes de novembre. Horóscopo e anúncios no café da manhã; visita
// a um quadrilocale num palazzo do Seicento no centro (terceiro andar, sem elevador) da signora Gilda
// Zanetti, idosa que vai morar com a filha em Modena; decidem alugar (950 € + despesas: Rafael 300 €
// pelo quarto escuro que dá para o pátio, Chiara e Matteo 325 € cada; contrato 4+4, dois meses de
// caução); móveis num mercatino dell'usato (sofá verde de veludo, armário branco, quatro cadeiras);
// a luz cai (contador de 3 kW), torneira quebrada, encanador e técnico do gás; o texto do Rafael sobre
// morar na Itália. Tema do bloco: o futuro. Ver docs/agents/curso-assimil-mapa.md.

const licao64: Lesson = {
	no: 64,
	kind: 'licao',
	title: 'Cambiamenti in vista',
	titlePt: 'Mudanças à vista',
	lines: [
		{
			it: "Sentite l'oroscopo di oggi! Ariete: questo mese ci saranno grandi cambiamenti.",
			pt: "Escutem o horóscopo de hoje! Áries: este mês vai haver grandes mudanças.",
			lit: "Escutai o horóscopo de hoje! Áries: este mês haverá grandes mudanças.",
			note: "*Ci saranno* = vai haver, haverá: é o futuro de *ci sono*. O futuro é o tema desta semana; hoje você o encontra pela primeira vez, sem pressa. *L'oroscopo* é masculino. A Chiara faz aniversário em março (lição 17): é de Áries."
		},
		{
			it: "E il Toro? Io sono del Toro.",
			pt: "E Touro? Eu sou de Touro.",
			note: "Para o signo, *essere del* + signo: *sono del Toro*, *Matteo è dei Pesci*. A lista completa está na leitura."
		},
		{
			it: "Toro: farai un viaggio e conoscerai una persona speciale.",
			pt: "Touro: você vai fazer uma viagem e vai conhecer uma pessoa especial.",
			lit: "Touro: farás uma viagem e conhecerás uma pessoa especial.",
			note: "*Conoscerai* = você vai conhecer, conhecerás. O futuro se forma com o infinitivo sem o *-e* final mais as terminações *-ò, -ai, -à, -emo, -ete, -anno*: *conoscer-ai*. *Farai* vem de *fare*. Onde o português falado diz “vai fazer”, o italiano usa sem cerimônia o futuro simples."
		},
		{ it: "Un viaggio? Ma siamo tornati dal mare una settimana fa!", pt: "Uma viagem? Mas a gente voltou da praia faz uma semana!" },
		{
			it: "Ragazzi, brutte notizie. È arrivata una raccomandata del signor Rinaldi.",
			pt: "Gente, más notícias. Chegou uma carta registrada do senhor Rinaldi.",
			note: "*La raccomandata* = a carta registrada, com aviso de recebimento: é assim que chegam as comunicações oficiais. O senhor Rinaldi é *il proprietario*, o dono do apartamento dos três."
		},
		{
			it: "Il proprietario? Che cosa vuole? Aumenta l'affitto?",
			pt: "O proprietário? O que ele quer? Vai aumentar o aluguel?",
			lit: "O proprietário? Que coisa quer? Aumenta o aluguel?",
			note: "*L'affitto* = o aluguel. *Affittare* = alugar."
		},
		{
			it: "Peggio. Vende l'appartamento. Dovremo andare via prima di novembre.",
			pt: "Pior. Vai vender o apartamento. Vamos ter que sair antes de novembro.",
			lit: "Pior. Vende o apartamento. Deveremos ir embora antes de novembro.",
			note: "*Dovremo* = vamos ter que. Alguns verbos encurtam o infinitivo no futuro: *dovere* → *dovrò, dovrai, dovremo*. *Andare via* (lição 36) = ir embora; aqui, deixar a casa. *Peggio* = pior (lição 63)."
		},
		{ it: "Ecco i grandi cambiamenti! L'oroscopo non sbaglia mai.", pt: "Olha aí as grandes mudanças! O horóscopo nunca erra." },
		{
			it: "Io me lo aspettavo. Da tempo il signor Rinaldi parlava di vendere.",
			pt: "Eu já esperava. Fazia tempo que o senhor Rinaldi falava em vender.",
			lit: "Eu me o esperava. Desde tempo o senhor Rinaldi falava de vender.",
			note: "*Da tempo* + imperfeito = fazia tempo que: *da tempo parlava di vendere*. É o *da* da lição 20 (*abito qui da un anno*), agora no passado. *Aspettarsi* = esperar no sentido de prever: *me lo aspettavo*, eu já esperava por isso."
		},
		{
			it: "E adesso? Io resterò a Bologna ancora un anno!",
			pt: "E agora? Eu vou ficar em Bolonha mais um ano!",
			lit: "E agora? Eu ficarei em Bolonha ainda um ano!",
			note: "*Resterò* = vou ficar, ficarei. Nos verbos em *-are*, o *a* do infinitivo vira *e* no futuro: *restare* → *resterò*, *parlare* → *parlerò*. A bolsa do Rafael foi prorrogada (lição 52), e agora ele precisa de um teto."
		},
		{
			it: "Tranquilli, cercheremo un altro appartamento. Ce ne sono tanti.",
			pt: "Calma, vamos procurar outro apartamento. Tem um monte.",
			lit: "Tranquilos, procuraremos um outro apartamento. Há deles tantos.",
			note: "*Cercheremo* = vamos procurar. Nos verbos em *-care* e *-gare*, o futuro ganha um *h* para manter o som duro, como no presente *cerchi, paghi* (lição 12): *cercherò*, *pagherò*. *Ce ne sono* = há (deles), como na lição 50."
		},
		{
			it: "Tanti sì, ma cari! Ci vorrà un bel po' di tempo.",
			pt: "Um monte, sim, mas caros! Vai levar um bom tempo.",
			lit: "Tantos sim, mas caros! Será preciso um belo pouco de tempo.",
			note: "*Ci vorrà* = vai levar, vai ser preciso: o futuro de *ci vuole* (lição 54). *Un bel po'* = um bocado, um bom tanto: *un bel po' di tempo*, *un bel po' di soldi*."
		},
		{
			it: "Guardate quest'annuncio: trilocale in zona universitaria, terzo piano, novecento euro.",
			pt: "Olhem este anúncio: três cômodos na região da universidade, terceiro andar, novecentos euros.",
			note: "Nos anúncios, contam-se os cômodos sem a cozinha e o banheiro: *monolocale* (um cômodo só), *bilocale* (sala e quarto), *trilocale*, *quadrilocale*."
		},
		{
			it: "Tre stanze per tre persone? E dove mangeremo, in camera?",
			pt: "Três cômodos para três pessoas? E onde a gente vai comer, no quarto?",
			note: "*Mangeremo* = vamos comer. Nos verbos em *-giare* e *-ciare*, o *i* cai no futuro, porque o *e* já basta para o som doce: *mangiare* → *mangerò*, *cominciare* → *comincerò*."
		},
		{
			it: "E questo? Quadrilocale con terrazzo, vicino ai Giardini Margherita.",
			pt: "E este? Quatro cômodos com terraço, perto dos Giardini Margherita.",
			note: "Os Giardini Margherita são o maior parque do centro de Bolonha. *Il terrazzo* = o terraço."
		},
		{
			it: "Milleduecento euro più le spese. È più grande del nostro, ma è anche molto più caro.",
			pt: "Mil e duzentos euros mais o condomínio. É maior que o nosso, mas também é muito mais caro.",
			lit: "Mil e duzentos euros mais as despesas. É mais grande do nosso, mas é também muito mais caro.",
			note: "*Le spese* (*condominiali*), nos anúncios, são o condomínio. E o comparativo da lição 60: *più grande del nostro*."
		},
		{
			it: "Ragazzi, stiamo per fare un grande passo. Chiamiamo subito!",
			pt: "Gente, estamos prestes a dar um grande passo. Vamos ligar já!",
			lit: "Rapazes, estamos para fazer um grande passo. Chamemos logo!",
			note: "*Stare per* + infinitivo = estar prestes a, estar para: *stiamo per fare*. Não confunda com *stare* + gerúndio (lição 43), que é a ação em andamento: *stiamo facendo*, estamos fazendo."
		},
		{
			it: "Un attimo! Pesci, il segno di Matteo: questa settimana porterai tanti scatoloni.",
			pt: "Um momento! Peixes, o signo do Matteo: esta semana você vai carregar muitas caixas.",
			note: "O Matteo nasceu em 3 de março (lição 45): é de Peixes. *Lo scatolone* = a caixa grande de papelão, aumentativo de *la scatola*, caixa. *Portare*, aqui, é carregar."
		},
		{
			it: "Domani vedrò l'appartamento e poi ti telefonerò.",
			pt: "Amanhã vou ver o apartamento e depois te ligo.",
			sep: true,
			note: "*Vedrò*, de *vedere*, também encurta. *Telefonerò*: *telefonare* troca o *a* por *e*."
		},
		{ it: "Il film sta per cominciare: spegnete i telefoni!", pt: "O filme está para começar: desliguem os celulares!" },
		{ it: "Da tempo pensavo di cambiare casa.", pt: "Fazia tempo que eu pensava em mudar de casa." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O futuro',
			blocks: [
				{
					type: 'p',
					text: "Hoje apareceu um tempo novo, o futuro. A boa notícia: as terminações são as mesmas para os três grupos de verbos. Pegue o infinitivo, tire o *-e* final e acrescente *-ò, -ai, -à, -emo, -ete, -anno*. Nos verbos em *-are*, o *a* ainda vira *e*: *parlare* → *parler-ò*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "parle**rò** / prende**rò** / parti**rò**", pt: "falarei / pegarei / partirei", pron: "par-le-ró / pren-de-ró / par-ti-ró" },
						{ it: "parle**rai** / prende**rai** / parti**rai**", pt: "falarás, você vai falar..." },
						{ it: "parle**rà** / prende**rà** / parti**rà**", pt: "ele, ela vai falar..." },
						{ it: "parle**re**mo / prende**re**mo / parti**re**mo", pt: "falaremos..." },
						{ it: "parle**re**te / prende**re**te / parti**re**te", pt: "vocês vão falar..." },
						{ it: "parle**ran**no / prende**ran**no / parti**ran**no", pt: "eles vão falar...", pron: "par-le-rán-no" }
					]
				},
				{
					type: 'p',
					text: "Os verbos em *-isc-* não levam o *-isc-* no futuro: *finirò, preferirai*. Os em *-care* e *-gare* ganham um *h*: *cercheremo, pagherai*. Os em *-ciare* e *-giare* perdem o *i*: *comincerò, mangeremo*."
				},
				{ type: 'h', text: 'A força no fim' },
				{
					type: 'p',
					text: "Repare onde cai a força: na primeira, na segunda e na terceira pessoa do singular, na última sílaba, com acento escrito em *-ò* e *-à*: *parlerò*, *parlerà*. É ela que separa o futuro do presente: *parla* (“pár-la”, fala) e *parlerà* (“par-le-rá”, vai falar). Em *parleranno*, a força vai para o *ran*, e o *nn* dobrado se ouve bem."
				},
				{ type: 'h', text: 'Quando usar' },
				{
					type: 'p',
					text: "O italiano usa o futuro para previsões (o horóscopo!), planos e promessas: *cercheremo un altro appartamento*. Para o que já está combinado e próximo, o presente basta, como você viu na lição 31: *domani vado a vedere la casa*. O que ele não faz é o nosso “vou fazer”: *vado a* + infinitivo só serve quando há movimento de verdade (lição 24). “Vou estudar hoje à noite” é *stasera studio* ou *stasera studierò*."
				},
				{
					type: 'dica',
					text: "*Stare per* + infinitivo é o futuro do minuto seguinte: *il treno sta per partire*, o trem está para sair. E *da tempo* + imperfeito conta há quanto tempo uma coisa vinha acontecendo: *da tempo pensavo di cambiare casa*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os signos e os anúncios',
			blocks: [
				{
					type: 'p',
					text: "Muitos italianos leem *l'oroscopo* no jornal ou no celular, nem que seja para rir. Os signos são quase iguais aos nossos; repare só em *Gemelli* (Gêmeos), *Cancro* (Câncer) e *Bilancia* (Libra, “balança”)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'A**rie**te, il **To**ro, i Ge**mel**li", pt: "Áries, Touro, Gêmeos" },
						{ it: "il **Can**cro, il Le**o**ne, la **Ver**gine", pt: "Câncer, Leão, Virgem" },
						{ it: "la Bi**lan**cia, lo Scorpi**o**ne, il Sagit**ta**rio", pt: "Libra, Escorpião, Sagitário" },
						{ it: "il Capri**cor**no, l'Ac**qua**rio, i **Pe**sci", pt: "Capricórnio, Aquário, Peixes" }
					]
				},
				{ type: 'p', text: "Para perguntar: *Di che segno sei?* (De que signo você é?). Para responder: *Sono dell'Ariete*, *sono della Bilancia*, *sono dei Gemelli*." },
				{ type: 'h', text: 'Ler um anúncio' },
				{
					type: 'p',
					text: "Os anúncios de aluguel usam um vocabulário próprio. *Affittasi* = aluga-se. *Arredato* = mobiliado. *Spese condominiali* = condomínio. *Piano terra* = térreo, e *ascensore* = elevador (num prédio antigo, muitas vezes não há). *Riscaldamento autonomo* quer dizer que cada apartamento tem a sua caldeira; *centralizzato*, que o aquecimento é do prédio todo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Domani comincerò a cercare casa.", pt: "Amanhã vou começar a procurar casa." },
				{ it: "Che cosa farai sabato?", pt: "O que você vai fazer no sábado?" },
				{ it: "Pagheremo l'affitto il primo del mese.", pt: "Vamos pagar o aluguel no dia primeiro." },
				{ it: "Il treno sta per partire.", pt: "O trem está para sair." },
				{ it: "Ci vorrà un bel po' di tempo.", pt: "Vai levar um bom tempo." },
				{ it: "Da tempo Chiara voleva un terrazzo.", pt: "Fazia tempo que a Chiara queria um terraço." },
				{ it: "Di che segno sei? Sono dei Pesci.", pt: "De que signo você é? Sou de Peixes." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vamos procurar outra casa.", parts: ["", null, " un'altra casa."], answers: ["cercheremo"] },
				{ pt: "Você vai ficar em Bolonha?", parts: ["", null, " a Bologna?"], answers: ["resterai"] },
				{ pt: "Vai haver grandes mudanças.", parts: ["Ci ", null, " grandi cambiamenti."], answers: ["saranno"] },
				{ pt: "Estamos prestes a sair.", parts: ["Stiamo ", null, " uscire."], answers: ["per"] },
				{ pt: "Vai levar um bom tempo.", parts: ["Ci ", null, " un bel po' di tempo."], answers: ["vorrà"] }
			]
		}
	]
};

const licao65: Lesson = {
	no: 65,
	kind: 'licao',
	title: 'Una casa antica',
	titlePt: 'Uma casa antiga',
	lines: [
		{
			it: "Buongiorno, ragazzi! Sono Gilda Zanetti. Prego, entrate, e attenti al gradino.",
			pt: "Bom dia, pessoal! Eu sou a Gilda Zanetti. Por favor, entrem, e cuidado com o degrau.",
			lit: "Bom dia, rapazes! Sou Gilda Zanetti. Por favor, entrai, e atentos ao degrau.",
			note: "*Attenti al gradino* = cuidado com o degrau. *Attento, attenta, attenti* concorda com quem ouve, como em *stai attento* (lição 20)."
		},
		{
			it: "Buongiorno, signora. Il nostro amico arriverà fra dieci minuti: ha un impegno di lavoro.",
			pt: "Bom dia, senhora. O nosso amigo vai chegar daqui a dez minutos: tem um compromisso de trabalho.",
			note: "*L'impegno* = o compromisso, a obrigação: *ho un impegno*, tenho um compromisso. *Arriverà* = vai chegar, chegará."
		},
		{
			it: "Nessun problema. Il palazzo è del Seicento, quindi niente ascensore: scusate le scale!",
			pt: "Sem problema. O prédio é do século dezessete, então nada de elevador: desculpem a escada!",
			note: "*Il Seicento* = os anos 1600, o século XVII. Os italianos chamam os séculos assim a partir dos anos 1200: *il Duecento*, *il Settecento*, *l'Ottocento*, *il Novecento*. *Quindi* = então, portanto."
		},
		{ it: "Del Seicento? Allora è un palazzo antico! Che soffitti alti!", pt: "Do século dezessete? Então é um prédio antigo! Que tetos altos!" },
		{
			it: "Eh sì. Io sono anziana, ma il palazzo è molto più vecchio di me!",
			pt: "Pois é. Eu sou idosa, mas o prédio é muito mais velho que eu!",
			lit: "Eh sim. Eu sou anciã, mas o palácio é muito mais velho de mim!",
			note: "*Antico* é para coisas de muito tempo atrás: *un palazzo antico*, *la Roma antica*. Para gente de idade, *anziano*: *una signora anziana*. *Vecchio* serve para os dois, mas com pessoas pode soar rude. *Il palazzo* é qualquer prédio de apartamentos, não só o palácio."
		},
		{ it: "Lei abita qui da molto tempo?", pt: "A senhora mora aqui há muito tempo?" },
		{
			it: "Da quarant'anni. Ma fra due settimane andrò a vivere da mia figlia, a Modena.",
			pt: "Há quarenta anos. Mas daqui a duas semanas vou morar com a minha filha, em Modena.",
			lit: "Desde quarenta anos. Mas entre duas semanas irei a viver da minha filha, a Modena.",
			note: "*Andrò*, de *andare*: mais um futuro que encurta. *Da mia figlia* = na casa da minha filha (lição 30)."
		},
		{ it: "Che bella cucina! È grande e luminosa.", pt: "Que cozinha bonita! É grande e clara." },
		{
			it: "La mattina entra il sole. Qui farete colazione al sole, vedrete.",
			pt: "De manhã entra sol. Aqui vocês vão tomar café da manhã no sol, vão ver.",
			note: "*Farete* = vocês vão fazer, de *fare*. *Vedrete* = vocês vão ver: sozinho, *vedrai!*, *vedrete!* soa como uma promessa, igual ao nosso “você vai ver!”."
		},
		{
			it: "E questa stanza? È un po' buia.",
			pt: "E este cômodo? É um pouco escuro.",
			note: "*Buio, buia* = escuro, sem luz. *È buio* = está escuro (de noite); *al buio* = no escuro. Para cor, usa-se *scuro*: *blu scuro*, azul-escuro."
		},
		{
			it: "La finestra dà sul cortile, ma è tranquilla. Qui non sentirete i rumori della strada.",
			pt: "A janela dá para o pátio, mas é sossegado. Aqui vocês não vão ouvir o barulho da rua.",
			note: "*Dare su* = dar para: *la finestra dà sul cortile*. Com acento, *dà* é o verbo (lição 25). *Il rumore* = o barulho; falso amigo, não é “rumor”."
		},
		{
			it: "Una stanza buia sul cortile... Sarà la mia, come sempre!",
			pt: "Um quarto escuro dando para o pátio... Vai ser o meu, como sempre!",
			note: "*Sarà* = vai ser, será: o futuro de *essere* é todo irregular: *sarò, sarai, sarà, saremo, sarete, saranno*. O quarto atual do Rafael também dá para o pátio (lição 8)."
		},
		{
			it: "Eccomi! Scusate il ritardo, ero impegnato con un cliente.",
			pt: "Cheguei! Desculpem o atraso, eu estava ocupado com um cliente.",
			lit: "Eis-me! Desculpai o atraso, era ocupado com um cliente.",
			note: "*Impegnato* = ocupado, cheio de compromissos: *sono molto impegnato*. Também quer dizer engajado: *un artista impegnato*. *Eccomi* = aqui estou, cheguei."
		},
		{ it: "Piacere. Ecco il bagno, e giù in cantina c'è posto per le biciclette.", pt: "Prazer. Aqui está o banheiro, e lá embaixo, no porão, tem lugar para as bicicletas." },
		{
			it: "Una cantina! Lì potrò suonare la chitarra senza disturbare nessuno.",
			pt: "Um porão! Lá vou poder tocar violão sem incomodar ninguém.",
			note: "*Potrò*, de *potere*, encurta como *dovrò*. *La cantina* é o porão ou depósito no subsolo; a adega de vinho também."
		},
		{ it: "Signora, e l'affitto?", pt: "Senhora, e o aluguel?" },
		{
			it: "Novecentocinquanta euro al mese, più le spese. Pensateci con calma: mi darete una risposta lunedì?",
			pt: "Novecentos e cinquenta euros por mês, mais o condomínio. Pensem com calma: vocês me dão uma resposta na segunda?",
			lit: "Novecentos e cinquenta euros ao mês, mais as despesas. Pensai-nisso com calma: me dareis uma resposta segunda?",
			note: "*Pensateci* = pensem nisso: *pensarci*, com o *ci* colado no imperativo. *Darete*, de *dare*: com *dare*, *fare* e *stare*, o *a* não vira *e*: *darò, farò, starò*."
		},
		{
			it: "Certo. Lunedì Le telefoneremo.",
			pt: "Claro. Na segunda ligamos para a senhora.",
			note: "*Le* = à senhora (lição 41), porque se diz *telefonare a qualcuno*."
		},
		{ it: "Domani sarò impegnato tutto il giorno.", pt: "Amanhã vou estar ocupado o dia inteiro.", sep: true },
		{ it: "Mio nonno è anziano, ma va ancora in bicicletta.", pt: "Meu avô é idoso, mas ainda anda de bicicleta." },
		{
			it: "Quando usciremo dal cinema, sarà già buio.",
			pt: "Quando a gente sair do cinema, já vai estar escuro.",
			lit: "Quando sairemos do cinema, será já escuro.",
			note: "Depois de *quando*, falando do futuro, o italiano também usa o futuro: *quando usciremo*, onde o português diz “quando sairmos”. Mais sobre isso na lição 66."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O futuro irregular',
			blocks: [
				{
					type: 'p',
					text: "As terminações do futuro nunca mudam. O que muda, em alguns verbos muito usados, é o pedaço da frente. São poucos grupos, e você já encontrou quase todos."
				},
				{ type: 'h', text: 'O infinitivo encurta' },
				{
					type: 'p',
					text: "Alguns perdem a vogal do meio: *andare* → *andrò*, *avere* → *avrò*, *dovere* → *dovrò*, *potere* → *potrò*, *sapere* → *saprò*, *vedere* → *vedrò*, *vivere* → *vivrò*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Fra due settimane an**drò** a Modena.", pt: "Daqui a duas semanas vou para Modena." },
						{ it: "Lì po**trò** suonare la chitarra.", pt: "Lá vou poder tocar violão." },
						{ it: "Fra un anno sa**prò** parlare bene l'italiano.", pt: "Daqui a um ano vou saber falar bem italiano." }
					]
				},
				{ type: 'h', text: 'Dois erres' },
				{
					type: 'p',
					text: "Outros fazem *rr*: *venire* → *verrò*, *volere* → *vorrò*, *rimanere* → *rimarrò*, *tenere* → *terrò*, *bere* → *berrò*. Capriche no erre dobrado: *verrò* não é *vero* (verdadeiro). E *ci vuole* vira *ci vorrà* (lição 64)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ver**re**te anche voi alla festa?", pt: "Vocês também vão vir à festa?", pron: "ver-rê-te" },
						{ it: "Che cosa vor**ran**no sapere?", pt: "O que eles vão querer saber?" }
					]
				},
				{ type: 'h', text: 'Essere, dare, fare, stare' },
				{
					type: 'p',
					text: "*Essere* tem um futuro só seu: *sarò, sarai, sarà, saremo, sarete, saranno*. E *dare*, *fare* e *stare* guardam o *a*: *darò, farò, starò*, *farete colazione al sole*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Antico, anziano, vecchio',
			blocks: [
				{
					type: 'p',
					text: "O português usa “antigo” e “velho” para quase tudo. O italiano separa: *antico* para o que vem de séculos atrás (*un palazzo antico*, *un mobile antico*, *gli antichi Romani*), *anziano* para pessoas de idade, com respeito (*i signori anziani*, *una persona anziana*). *Vecchio* é o mais geral: *un vecchio amico*, *una macchina vecchia*. Dito de uma pessoa, *vecchio* pode soar duro; prefira *anziano*."
				},
				{
					type: 'dica',
					text: "Cuidado com o nosso “antigo” no sentido de “anterior”: o meu antigo apartamento é *il mio vecchio appartamento*, nunca *antico*, a menos que seja do Seicento!"
				},
				{ type: 'h', text: 'Impegno e buio' },
				{
					type: 'p',
					text: "*L'impegno* é o compromisso marcado (*ho un impegno sabato*) e também o empenho (*studia con impegno*). Quem tem muitos está *impegnato*, ocupado. Já *buio* é a falta de luz: *una stanza buia*, *è buio pesto* (está um breu). Como substantivo, *il buio*: *ho paura del buio*, tenho medo do escuro."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vedrete, la casa vi piacerà.", pt: "Vocês vão ver, vão gostar da casa." },
				{ it: "Sabato non posso: ho un impegno.", pt: "No sábado não posso: tenho um compromisso." },
				{ it: "Firenze è una città antica.", pt: "Florença é uma cidade antiga." },
				{ it: "Mia nonna è anziana, ma è sempre allegra.", pt: "Minha avó é idosa, mas está sempre alegre." },
				{ it: "Fra un anno saprò parlare bene l'italiano.", pt: "Daqui a um ano vou saber falar bem italiano." },
				{ it: "D'inverno alle cinque è già buio.", pt: "No inverno às cinco já está escuro." },
				{ it: "Verrete anche voi alla festa?", pt: "Vocês também vão vir à festa?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vou ser médico.", parts: ["", null, " medico."], answers: ["sarò"] },
				{ pt: "Vocês vão ter um terraço.", parts: ["", null, " un terrazzo."], answers: ["avrete"] },
				{ pt: "Amanhã estou cheio de compromissos.", parts: ["Domani sono ", null, "."], answers: ["impegnato"] },
				{ pt: "Está escuro: não se vê nada.", parts: ["È ", null, ": non si vede niente."], answers: ["buio"] },
				{ pt: "Ela virá amanhã.", parts: ["", null, " domani."], answers: ["verrà"] }
			]
		}
	]
};

const licao66: Lesson = {
	no: 66,
	kind: 'licao',
	title: 'Lo prendiamo?',
	titlePt: 'A gente fica com ele?',
	lines: [
		{
			it: "Allora, ragazzi, l'appartamento della signora Zanetti: lo prendiamo o no?",
			pt: "Então, gente, o apartamento da senhora Zanetti: a gente fica com ele ou não?",
			lit: "Então, rapazes, o apartamento da senhora Zanetti: o pegamos ou não?",
			note: "*Prendere* também é ficar com, escolher, como na loja (*lo prendo*, lição 39). O objeto vem antes e é retomado por *lo*, coisa bem comum na fala."
		},
		{
			it: "Io dico di sì. Se aspetteremo troppo, lo affitterà qualcun altro.",
			pt: "Eu digo que sim. Se a gente esperar demais, outra pessoa vai alugar.",
			lit: "Eu digo de sim. Se esperaremos demais, o alugará algum outro.",
			note: "*Se* + futuro: quando a condição está no futuro, o italiano põe o futuro também depois de *se*: *se aspetteremo*, onde o português diz “se esperarmos”. Na fala, muita gente usa o presente nas duas partes: *se aspettiamo, lo affitta qualcun altro*. *Dire di sì* (lição 59) = dizer que sim."
		},
		{
			it: "E il trilocale di via Mascarella? L'hanno già affittato a due studentesse.",
			pt: "E o de três cômodos da via Mascarella? Já alugaram para duas estudantes.",
			note: "*Studentessa* é o feminino de *studente*."
		},
		{
			it: "E quello con il terrazzo costa troppo. Meno male che abbiamo trovato questo!",
			pt: "E aquele com o terraço custa caro demais. Ainda bem que a gente achou este!",
			lit: "E aquele com o terraço custa demais. Menos mal que temos achado este!",
			note: "*Meno male* = ainda bem, menos mal. Com um verbo: *meno male che* + frase, *meno male che sei qui*."
		},
		{ it: "Piace anche a me. Ma la stanza buia sarà la mia, lo so.", pt: "Eu também gosto. Mas o quarto escuro vai ser o meu, eu sei." },
		{
			it: "Se prenderai tu la stanza buia, pagherai meno di noi. D'accordo?",
			pt: "Se você ficar com o quarto escuro, vai pagar menos que a gente. Combinado?",
			note: "Mais um *se* + futuro: *se prenderai..., pagherai...*. E *pagherai*, com o *h* dos verbos em *-gare*."
		},
		{ it: "D'accordo! Trecento euro... e una lampada molto forte.", pt: "Combinado! Trezentos euros... e uma luminária bem forte." },
		{
			it: "E io e Chiara pagheremo trecentoventicinque euro a testa.",
			pt: "E eu e a Chiara vamos pagar trezentos e vinte e cinco euros cada um.",
			lit: "E eu e Chiara pagaremos trezentos e vinte e cinco euros a cabeça.",
			note: "*A testa* = por cabeça, cada um: *dieci euro a testa*."
		},
		{
			it: "E le spese? Il condominio, la luce, il gas, internet...",
			pt: "E as despesas? O condomínio, a luz, o gás, a internet...",
			note: "*Il condominio* é o prédio com todos os seus moradores e também o que se paga por ele (limpeza da escada, luz do pátio). *Internet*, em italiano, costuma vir sem artigo."
		},
		{
			it: "Le dividiamo per tre, come qui. Ci siamo sempre trovati bene così.",
			pt: "A gente divide por três, como aqui. Sempre nos demos bem assim.",
			lit: "As dividimos por três, como aqui. Nos somos sempre encontrados bem assim.",
			note: "*Trovarsi bene* = dar-se bem, sentir-se bem num lugar ou com alguém: *mi trovo bene a Bologna*, *ci troviamo bene insieme*. No passado, *essere*, como todo reflexivo (lição 46)."
		},
		{
			it: "Anche con il signor Rinaldi siamo stati fortunati. Era un buon padrone di casa.",
			pt: "Com o senhor Rinaldi também tivemos sorte. Era um bom senhorio.",
			lit: "Também com o senhor Rinaldi somos estados afortunados. Era um bom patrão de casa.",
			note: "*Il padrone di casa* = o proprietário, para quem mora de aluguel; *la padrona di casa*. Numa festa, é também o anfitrião, quem recebe os convidados."
		},
		{
			it: "Pronto, signora Zanetti? Sono Chiara, una dei ragazzi di sabato. Abbiamo deciso: lo prendiamo!",
			pt: "Alô, senhora Zanetti? É a Chiara, da turma de sábado. Decidimos: vamos ficar com ele!",
			lit: "Pronto, senhora Zanetti? Sou Chiara, uma dos rapazes de sábado. Temos decidido: o pegamos!",
			note: "*Una dei ragazzi* = uma do grupo: *ragazzi* serve para um grupo misto."
		},
		{
			it: "Che bella notizia! Il contratto sarà di quattro anni più quattro, con due mesi di deposito.",
			pt: "Que notícia boa! O contrato vai ser de quatro anos mais quatro, com dois meses de caução.",
			lit: "Que bela notícia! O contrato será de quatro anos mais quatro, com dois meses de depósito.",
			note: "O contrato residencial mais comum na Itália é o *quattro più quattro*: quatro anos, renováveis por mais quatro. *Il deposito* (*cauzionale*) é a caução, devolvida na saída."
		},
		{ it: "Va bene. Ma Rafael resterà solo un anno. Se partirà prima, come faremo?", pt: "Tudo bem. Mas o Rafael vai ficar só um ano. Se ele for embora antes, como a gente faz?" },
		{
			it: "Nessun problema: me lo direte tre mesi prima e troverete un altro coinquilino.",
			pt: "Sem problema: vocês me avisam três meses antes e acham outro colega de apartamento.",
			lit: "Nenhum problema: me o direis três meses antes e achareis um outro coinquilino.",
			note: "*Me lo direte* = vocês vão me dizer isso: pronomes combinados (lição 50) com o futuro de *dire*, que é regular: *dirò, dirai...*. *Tre mesi prima* = com três meses de antecedência."
		},
		{
			it: "Perfetto! Grazie, signora. Lei sarà una padrona di casa d'oro.",
			pt: "Perfeito! Obrigada, senhora. A senhora vai ser uma senhoria de ouro.",
			note: "*D'oro* = de ouro, ótimo, como o *di* do material (lição 26)."
		},
		{ it: "Meno male! Ragazzi, abbiamo una casa nuova!", pt: "Ainda bem! Gente, temos uma casa nova!" },
		{ it: "Nuova? È del Seicento!", pt: "Nova? É do século dezessete!" },
		{
			it: "Se domani farà bel tempo, andremo in bicicletta ai Giardini Margherita.",
			pt: "Se amanhã fizer tempo bom, vamos de bicicleta aos Giardini Margherita.",
			sep: true
		},
		{ it: "Vi trovate bene a Bologna? Benissimo, grazie!", pt: "Vocês estão gostando de Bolonha? Muito, obrigado!", lit: "Vos encontrais bem em Bolonha? Muito bem, obrigado!" },
		{ it: "Meno male che hai portato l'ombrello!", pt: "Ainda bem que você trouxe o guarda-chuva!" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Se e quando com o futuro',
			blocks: [
				{
					type: 'p',
					text: "O português tem um tempo especial para depois de “se” e “quando” no futuro: “se eu tiver”, “quando chegarmos”. O italiano não tem esse tempo. Ele usa o futuro normal, nas duas partes da frase."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Se aspette**re**mo **trop**po, lo affitte**rà** qualcun **al**tro.", pt: "Se esperarmos demais, outra pessoa vai alugar." },
						{ it: "Se pren**de**rai tu la **stan**za **bu**ia, paghe**rai** **me**no.", pt: "Se você ficar com o quarto escuro, vai pagar menos." },
						{ it: "**Quan**do usci**re**mo dal **ci**nema, sa**rà** già **bu**io.", pt: "Quando sairmos do cinema, já vai estar escuro. (lição 65)" },
						{ it: "Se a**vrò** **tem**po, ver**rò** **an**ch'io.", pt: "Se eu tiver tempo, eu também vou." }
					]
				},
				{
					type: 'p',
					text: "Na conversa, quando o fato está próximo e é quase certo, os italianos usam bastante o presente: *se piove, resto a casa*; *quando arrivi, chiamami*. As duas formas estão certas."
				},
				{
					type: 'dica',
					text: "Truque prático: quando em português você usar “se” ou “quando” com “tiver”, “for”, “puder”, “chegarmos”, ponha o futuro italiano: *avrò, sarò, potrò, arriveremo*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Alugar na Itália',
			blocks: [
				{
					type: 'p',
					text: "Quem aluga, *affitta*; quem mora de aluguel é *l'inquilino*, e você já conhece *il coinquilino*, quem divide o apartamento. O dono é *il proprietario* ou, na conversa, *il padrone di casa*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'af**fit**to, il ca**no**ne", pt: "o aluguel (*canone* é o termo do contrato)" },
						{ it: "il de**po**sito cauzio**na**le", pt: "a caução (no máximo três meses de aluguel)" },
						{ it: "le **spe**se condomini**a**li", pt: "o condomínio" },
						{ it: "l'agen**zi**a immobili**a**re", pt: "a imobiliária" }
					]
				},
				{
					type: 'p',
					text: "O contrato mais comum é o *quattro più quattro*. Há também o *tre più due*, com aluguel mais baixo, combinado entre proprietários e inquilinos de cada cidade, e o contrato para estudantes, de seis meses a três anos. Quando há imobiliária, ela cobra uma comissão, muitas vezes perto de um mês de aluguel. Por isso todo mundo comemora quando aluga direto com o dono: *meno male, niente agenzia!*"
				},
				{ type: 'h', text: 'Trovarsi bene' },
				{
					type: 'p',
					text: "*Trovarsi bene* (ou *male*) diz como você se sente num lugar ou com alguém: *mi trovo bene qui*, *ci siamo trovati bene con lui*. A pergunta *Ti trovi bene a Bologna?* é o nosso “Está gostando de Bolonha?”."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Se verrai a Bologna, ti farò vedere i portici.", pt: "Se você vier a Bolonha, eu te mostro os pórticos." },
				{ it: "Quando arriveremo, ti telefoneremo.", pt: "Quando chegarmos, vamos te ligar." },
				{ it: "Meno male che non piove!", pt: "Ainda bem que não está chovendo!" },
				{ it: "Ti trovi bene con i tuoi coinquilini?", pt: "Você se dá bem com os seus colegas de apartamento?" },
				{ it: "Il padrone di casa abita al piano di sopra.", pt: "O senhorio mora no andar de cima." },
				{ it: "L'affitto costa seicento euro più le spese.", pt: "O aluguel custa seiscentos euros mais o condomínio." },
				{ it: "Se avrò tempo, verrò anch'io.", pt: "Se eu tiver tempo, eu também vou." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Se você vier, vamos ao cinema (use o futuro).", parts: ["Se ", null, ", andremo al cinema."], answers: ["verrai"] },
				{ pt: "Ainda bem que você está aqui!", parts: ["", null, " male che sei qui!"], answers: ["meno"] },
				{ pt: "Eu me sinto bem em Bolonha.", parts: ["Mi ", null, " bene a Bologna."], answers: ["trovo"] },
				{ pt: "O senhorio é muito simpático.", parts: ["Il ", null, " di casa è molto simpatico."], answers: ["padrone"] },
				{ pt: "Quando tivermos o dinheiro, vamos viajar.", parts: ["Quando ", null, " i soldi, viaggeremo."], answers: ["avremo"] }
			]
		}
	]
};

const licao67: Lesson = {
	no: 67,
	kind: 'licao',
	title: 'Mobili usati',
	titlePt: 'Móveis usados',
	lines: [
		{
			it: "Guardate che divano! Verde, di velluto, e costa solo centoventi euro!",
			pt: "Olhem que sofá! Verde, de veludo, e custa só cento e vinte euros!",
			note: "Os três estão num *mercatino dell'usato*, uma loja de coisas usadas. *Di velluto* = de veludo, com o *di* do material (lição 26)."
		},
		{
			it: "Bello, ma è enorme. Ci starà?",
			pt: "Bonito, mas é enorme. Vai caber?",
			lit: "Belo, mas é enorme. Ali estará?",
			note: "*Starci* = caber: *ci sta*, cabe; *ci stanno*, cabem; *non ci sta*, não cabe. O *ci* indica o lugar onde a coisa precisa caber. Aqui, no futuro: *ci starà?*, vai caber?"
		},
		{ it: "In soggiorno ci sta di sicuro. Ma per le scale? Sono strettissime.", pt: "Na sala cabe com certeza. Mas na escada? É estreitíssima." },
		{
			it: "Già... Nel Seicento non c'erano i divani di velluto.",
			pt: "Pois é... No século dezessete não tinha sofá de veludo.",
			note: "*Già* sozinho, como resposta, é “pois é”, “é verdade”, muitas vezes com um suspiro. Não confunda com o *già* de “já”: *è già buio*."
		},
		{
			it: "Ho portato il metro. Allora... il divano è lungo due metri e venti.",
			pt: "Eu trouxe a fita métrica. Então... o sofá tem dois metros e vinte de comprimento.",
			lit: "Tenho trazido o metro. Então... o divã é longo dois metros e vinte.",
			note: "*Il metro* é o metro e também a fita métrica. Para medidas, *essere lungo, largo, alto* + a medida: *è lungo due metri*."
		},
		{ it: "E la porta di casa è larga solo ottanta centimetri. Non passerà mai!", pt: "E a porta de casa tem só oitenta centímetros de largura. Não vai passar nunca!" },
		{
			it: "Tranquilli, ragazzi: si può smontare. E ve lo portiamo noi a casa, per trenta euro in più.",
			pt: "Calma, pessoal: dá para desmontar. E nós levamos para vocês em casa, por trinta euros a mais.",
			lit: "Tranquilos, rapazes: se pode desmontar. E vos o levamos nós a casa, por trinta euros em mais.",
			note: "*Ve lo portiamo* = levamos para vocês: pronomes combinados (lição 50). *Smontare* = desmontar; *si può smontare*, pode ser desmontado (o *si* da lição 27)."
		},
		{
			it: "Visto? Problema risolto!",
			pt: "Viu? Problema resolvido!",
			note: "*Visto?* = viu?, está vendo? É o particípio de *vedere* (lição 40). *Risolto*, de *risolvere*, resolver."
		},
		{ it: "Io invece cerco un armadio per la mia stanza buia.", pt: "Já eu estou procurando um armário para o meu quarto escuro." },
		{
			it: "Questo armadio bianco è quasi nuovo. Novanta euro, e ci stanno un sacco di vestiti.",
			pt: "Este armário branco está quase novo. Noventa euros, e cabe um monte de roupa.",
			lit: "Este armário branco é quase novo. Noventa euros, e ali estão um saco de vestidos.",
			note: "*Un sacco di* = um monte de, na fala. *I vestiti* = as roupas; *il vestito* é a roupa, e também o vestido."
		},
		{
			it: "Perfetto: ho un sacco di felpe blu.",
			pt: "Perfeito: eu tenho um monte de moletom azul.",
			note: "*La felpa* = o moletom. *Blu* não muda (lição 39)."
		},
		{
			it: "Blu, già. Il tuo armadio sembrerà il mare!",
			pt: "Azul, claro. O seu armário vai parecer o mar!",
			note: "Mais um *già*, agora com ironia: “azul, é claro”. *Sembrerà*, futuro de *sembrare* (lição 44)."
		},
		{
			it: "E le sedie per la cucina? La signora Zanetti ci lascia il tavolo, ma le sedie le porta a Modena.",
			pt: "E as cadeiras da cozinha? A senhora Zanetti deixa a mesa para nós, mas as cadeiras ela leva para Modena.",
			note: "*Ci lascia* = deixa para nós. *Le sedie le porta*: o objeto vem antes e é retomado pelo pronome, como em *lo prendiamo?* (lição 66)."
		},
		{ it: "Ho queste quattro sedie di legno. Quaranta euro tutte e quattro.", pt: "Tenho estas quatro cadeiras de madeira. Quarenta euros as quatro." },
		{
			it: "Ragazzi, abbiamo speso più di quello che pensavamo.",
			pt: "Gente, a gente gastou mais do que pensava.",
			lit: "Rapazes, temos gastado mais daquilo que pensávamos.",
			note: "*Più di quello che* + verbo = mais do que: *più di quello che pensavamo*. Quando a comparação é com uma frase inteira, o italiano não diz só *più di*: precisa de *quello che*. O mesmo com *meno di quello che*."
		},
		{ it: "Ma molto meno di quello che costano i mobili nuovi!", pt: "Mas muito menos do que custam os móveis novos!" },
		{
			it: "Già. Ma l'armadio chi lo porterà al terzo piano?",
			pt: "Pois é. Mas o armário, quem é que vai levar até o terceiro andar?",
			note: "De novo o objeto na frente, retomado por *lo*: *l'armadio chi lo porterà?*."
		},
		{ it: "Tu, naturalmente! Ricordi l'oroscopo? Toro: farai un viaggio!", pt: "Você, claro! Lembra do horóscopo? Touro: você vai fazer uma viagem!" },
		{ it: "In questa macchina non ci stiamo in cinque.", pt: "Neste carro não cabemos em cinco.", sep: true },
		{ it: "Il film era più lungo di quello che pensavo.", pt: "O filme era mais comprido do que eu pensava." },
		{ it: "Fa freddo, eh? Già, è arrivato l'autunno.", pt: "Está frio, né? Pois é, chegou o outono." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Starci, già e quello che',
			blocks: [
				{
					type: 'p',
					text: "*Starci* quer dizer caber. O sujeito é a coisa que precisa caber, e o *ci* é o lugar. Como qualquer verbo, ele concorda e muda de tempo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "In sog**gior**no ci sta di si**cu**ro.", pt: "Na sala cabe com certeza." },
						{ it: "Ci **stan**no un **sac**co di ve**sti**ti.", pt: "Cabe um monte de roupa." },
						{ it: "In **que**sta **mac**china non ci **stia**mo in **cin**que.", pt: "Neste carro não cabemos em cinco." },
						{ it: "Ci sta**rà**?", pt: "Vai caber?" }
					]
				},
				{ type: 'h', text: 'Già, pois é' },
				{
					type: 'p',
					text: "Você conhece *già* = já (*è già buio*). Sozinho, como resposta, ele concorda com o que o outro disse: *Fa caldo, eh? Già.* É o nosso “pois é”, “é”, “verdade”. O tom faz o resto: com um suspiro, resignado; com um sorriso torto, irônico (*Blu, già.*)."
				},
				{ type: 'h', text: 'Mais do que eu pensava' },
				{
					type: 'p',
					text: "Na lição 60 você comparou duas coisas: *più grande del nostro*. Quando o segundo termo é uma frase com verbo, entra *quello che*: *abbiamo speso più di quello che pensavamo*, *costa meno di quello che credi*. Também se ouve *più di quanto pensavamo*, com o mesmo sentido."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os móveis',
			blocks: [
				{
					type: 'p',
					text: "Muitos apartamentos para estudantes são alugados mobiliados (*arredati*); quando não são, o *mercatino dell'usato* resolve. Alguns móveis da casa:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il di**va**no, la pol**tro**na", pt: "o sofá, a poltrona" },
						{ it: "l'ar**ma**dio, il co**mo**dino", pt: "o armário, a mesinha de cabeceira" },
						{ it: "la libre**ri**a, lo scaf**fa**le", pt: "a estante, a prateleira" },
						{ it: "la scriva**ni**a, la **lam**pada", pt: "a escrivaninha, a luminária" },
						{ it: "il **let**to matrimoni**a**le / **sin**golo", pt: "a cama de casal / de solteiro" }
					]
				},
				{
					type: 'p',
					text: "*La libreria* é a estante de livros e também a livraria; o contexto separa. A biblioteca é *la biblioteca*. E *il mobile* é um móvel; *i mobili*, a mobília."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il letto non ci sta nella mia camera.", pt: "A cama não cabe no meu quarto." },
				{ it: "Quante persone ci stanno in questa macchina?", pt: "Quantas pessoas cabem neste carro?" },
				{ it: "Ho dormito meno di quello che volevo.", pt: "Dormi menos do que eu queria." },
				{ it: "È caro, eh? Già, troppo.", pt: "É caro, né? Pois é, demais." },
				{ it: "Mi serve una libreria per i miei libri.", pt: "Preciso de uma estante para os meus livros." },
				{ it: "Ve lo portiamo domani mattina.", pt: "Levamos para vocês amanhã de manhã." },
				{ it: "Il nuovo appartamento è più grande di quello che pensavo.", pt: "O apartamento novo é maior do que eu pensava." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O sofá não cabe.", parts: ["Il divano non ci ", null, "."], answers: ["sta"] },
				{ pt: "Os livros cabem na estante?", parts: ["I libri ci ", null, " nella libreria?"], answers: ["stanno"] },
				{ pt: "Gastei mais do que pensava.", parts: ["Ho speso più di ", null, " che pensavo."], answers: ["quello"] },
				{ pt: "Pois é, você tem razão.", parts: ["", null, ", hai ragione."], answers: ["già"] },
				{ pt: "Preciso de um armário.", parts: ["Mi serve un ", null, "."], answers: ["armadio"] }
			]
		}
	]
};

const licao68: Lesson = {
	no: 68,
	kind: 'licao',
	title: 'È saltata la luce!',
	titlePt: 'A luz caiu!',
	lines: [
		{
			it: "Matteo, sto per accendere il phon. Spegni l'amplificatore, per favore!",
			pt: "Matteo, vou ligar o secador agora. Desliga o amplificador, por favor!",
			lit: "Matteo, estou para acender o fon. Apaga o amplificador, por favor!",
			note: "*Sto per accendere* = estou para ligar, vou ligar agora mesmo: o *stare per* da lição 64. *Il phon* (“fon”) = o secador de cabelo. *Accendere* = ligar, acender; *spegnere* = desligar, apagar."
		},
		{ it: "Un attimo, sto per finire la canzone!", pt: "Um minuto, já estou terminando a música!", lit: "Um instante, estou para terminar a canção!" },
		{
			it: "Oddio, è saltata la luce! Di nuovo!",
			pt: "Ai, meu Deus, a luz caiu! De novo!",
			lit: "Ó Deus, é saltada a luz! De novo!",
			note: "*È saltata la luce* = a luz caiu, o disjuntor desarmou (literalmente, “saltou”). *Oddio!* = ai, meu Deus!"
		},
		{
			it: "È la terza volta oggi. Vado io al contatore, in cantina.",
			pt: "É a terceira vez hoje. Eu vou até o medidor, no porão.",
			note: "*Il contatore* = o medidor de luz, onde fica a chave que desarma."
		},
		{
			it: "Qui il contatore è da tre kilowatt. Phon, amplificatore e lavatrice insieme sono troppi.",
			pt: "Aqui o medidor é de três quilowatts. Secador, amplificador e máquina de lavar juntos é demais.",
			note: "Na maioria das casas italianas, o contrato de luz padrão é de 3 kW. Ligue ao mesmo tempo a máquina de lavar, o forno e o secador, e a luz cai. *La lavatrice* = a máquina de lavar roupa."
		},
		{
			it: "Fatto, la luce è tornata. Ma il rubinetto del bagno è rotto: perde acqua.",
			pt: "Pronto, a luz voltou. Mas a torneira do banheiro está quebrada: está vazando.",
			lit: "Feito, a luz é voltada. Mas a torneira do banho é rompida: perde água.",
			note: "*Rotto* = quebrado, particípio de *rompere*. *Perdere* = perder e também vazar: *il rubinetto perde*."
		},
		{ it: "E la doccia è fredda. Il gas non funziona ancora?", pt: "E o chuveiro está frio. O gás ainda não está funcionando?" },
		{
			it: "No. Il tecnico del gas verrà domani, fra le otto e le tredici.",
			pt: "Não. O técnico do gás vem amanhã, entre as oito e a uma.",
			note: "É assim que as empresas marcam: *fra le otto e le tredici*, uma janela de cinco horas. *Fra* aqui é “entre”."
		},
		{ it: "Fra le otto e le tredici? Allora arriverà alle tredici e dieci!", pt: "Entre as oito e a uma? Então vai chegar à uma e dez!" },
		{
			it: "Buongiorno, sono l'idraulico. Dov'è il rubinetto rotto?",
			pt: "Bom dia, sou o encanador. Onde está a torneira quebrada?",
			note: "*L'idraulico* (“i-dráu-li-ko”) = o encanador. Quem cuida da parte elétrica é *l'elettricista*."
		},
		{
			it: "Qui in bagno. E ci sono anche un paio di piastrelle rotte.",
			pt: "Aqui no banheiro. E tem também uns azulejos quebrados.",
			lit: "Aqui em banho. E há também um par de azulejos rompidos.",
			note: "*Un paio di* = um par de e, na fala, uns, alguns: *un paio di giorni*, uns dias. O plural é *paia* (lição 40). *La piastrella* = o azulejo, o piso."
		},
		{
			it: "Il rubinetto lo cambio subito: fra un paio d'ore sarà tutto a posto.",
			pt: "A torneira eu troco já: daqui a umas duas horas vai estar tudo certo.",
			lit: "A torneira a troco logo: entre um par de horas será tudo a posto.",
			note: "*A posto* = em ordem, resolvido: *è tutto a posto*, está tudo certo. *Mettere a posto* = arrumar, consertar. E *Tutto a posto?* é um jeito comum de perguntar se está tudo bem."
		},
		{ it: "E le piastrelle?", pt: "E os azulejos?" },
		{
			it: "Per quelle ci vuole un muratore. Quando avrò finito qui, lo chiamerò io.",
			pt: "Para isso precisa de um pedreiro. Quando eu tiver terminado aqui, eu mesmo ligo para ele.",
			lit: "Para aquelas é preciso um pedreiro. Quando terei terminado aqui, o chamarei eu.",
			note: "*Avrò finito* = terei terminado: é o futuro anterior, *avere* ou *essere* no futuro + particípio. Ele marca o que vai estar pronto antes de outra coisa no futuro. Em português, “quando eu tiver terminado”."
		},
		{ it: "Grazie! Allora stasera avremo anche l'acqua calda?", pt: "Obrigado! Então hoje à noite vamos ter água quente também?" },
		{
			it: "Se il tecnico del gas sarà passato, sì.",
			pt: "Se o técnico do gás tiver passado, sim.",
			note: "*Sarà passato* = terá passado: o futuro anterior com *essere*, porque *passare*, no sentido de ir a um lugar, faz o passado com *essere*."
		},
		{ it: "È già passato, un'ora fa. Alle tredici e dieci, naturalmente!", pt: "Já passou, faz uma hora. À uma e dez, naturalmente!" },
		{ it: "Quando avrete finito i compiti, potrete uscire.", pt: "Quando vocês tiverem terminado a lição de casa, vão poder sair.", sep: true },
		{
			it: "Stavo per uscire, quando ha telefonato la mamma.",
			pt: "Eu estava saindo quando a mamãe ligou.",
			lit: "Estava para sair, quando telefonou a mãe.",
			note: "*Stare per* também no imperfeito: *stavo per uscire*, eu ia sair, estava a ponto de sair."
		},
		{ it: "Il computer è rotto, ma il tecnico lo metterà a posto.", pt: "O computador está quebrado, mas o técnico vai consertar." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O futuro anterior',
			blocks: [
				{
					type: 'p',
					text: "O passato prossimo é *avere* ou *essere* no presente + particípio: *ho finito*, *è passato*. Ponha o auxiliar no futuro e você tem o futuro anterior: *avrò finito*, *sarà passato*. As regras de sempre continuam valendo: os mesmos verbos pedem *essere*, e com *essere* o particípio concorda."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Quan**do a**vrò** fi**ni**to **qui**, lo chia**me**rò io.", pt: "Quando eu tiver terminado aqui, eu ligo para ele." },
						{ it: "Se il **tec**nico sa**rà** pas**sa**to, a**vre**te l'**ac**qua **cal**da.", pt: "Se o técnico tiver passado, vocês vão ter água quente." },
						{ it: "**Quan**do sa**re**te arri**va**ti, mi telefone**re**te?", pt: "Quando vocês tiverem chegado, vão me ligar?" }
					]
				},
				{
					type: 'p',
					text: "Ele aparece quase sempre depois de *quando*, *dopo che* e *se*, para dizer que uma coisa vai acontecer antes da outra. É o nosso “quando eu tiver terminado”. Na fala, muitos italianos simplificam: *quando finisco, lo chiamo*."
				},
				{ type: 'h', text: 'Stare per, no presente e no passado' },
				{
					type: 'p',
					text: "*Stare per* + infinitivo diz que algo vai acontecer no instante seguinte: *sto per accendere il phon*. No imperfeito, conta o que ia acontecer quando outra coisa interrompeu: *stavo per uscire, quando ha telefonato la mamma*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Consertos e contas',
			blocks: [
				{
					type: 'p',
					text: "Numa casa antiga, sempre há alguma coisa *rotta* (quebrada) ou *da mettere a posto*. Para cada problema, um profissional:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'i**drau**lico", pt: "o encanador: torneira, cano, descarga" },
						{ it: "l'elettri**ci**sta", pt: "o eletricista: tomada, fiação, lâmpada" },
						{ it: "il mura**to**re", pt: "o pedreiro: parede, piso, azulejo" },
						{ it: "il **tec**nico della cal**da**ia", pt: "o técnico da caldeira (água quente e aquecimento)" }
					]
				},
				{
					type: 'p',
					text: "*La caldaia*, a caldeira a gás, esquenta a água do chuveiro e os radiadores no inverno. *La bolletta* é a conta de luz, gás ou água, que chega a cada mês ou a cada dois. Ao mudar de casa, é preciso passar os contratos de luz e gás para o seu nome, e a empresa manda um técnico, sempre com aquela janela de cinco horas."
				},
				{
					type: 'dica',
					text: "*Rotto* serve para quase tudo que não funciona: *il telefono è rotto*, *ho la gamba rotta* (estou com a perna quebrada). Para máquina que só parou, também se diz *non funziona*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Sto per uscire: ti chiamo dopo.", pt: "Estou saindo agora: te ligo depois." },
				{ it: "La lavatrice è rotta.", pt: "A máquina de lavar está quebrada." },
				{ it: "Ho bisogno di un paio di giorni.", pt: "Preciso de uns dias." },
				{ it: "Adesso è tutto a posto.", pt: "Agora está tudo certo." },
				{ it: "Quando sarete arrivati, mi manderete un messaggio?", pt: "Quando vocês tiverem chegado, vão me mandar uma mensagem?" },
				{ it: "Dopo che avrò mangiato, laverò i piatti.", pt: "Depois que eu tiver comido, vou lavar a louça." },
				{ it: "È saltata la luce: dov'è il contatore?", pt: "A luz caiu: onde fica o medidor?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O trem está para sair.", parts: ["Il treno sta ", null, " partire."], answers: ["per"] },
				{ pt: "Quando eu tiver terminado, te ligo.", parts: ["Quando avrò ", null, ", ti chiamerò."], answers: ["finito"] },
				{ pt: "A torneira está quebrada.", parts: ["Il rubinetto è ", null, "."], answers: ["rotto"] },
				{ pt: "Está tudo certo.", parts: ["È tutto a ", null, "."], answers: ["posto"] },
				{ pt: "Volto daqui a uns dias.", parts: ["Torno fra un ", null, " di giorni."], answers: ["paio"] }
			]
		}
	]
};

const licao69: Lesson = {
	no: 69,
	kind: 'licao',
	title: 'Abitare in Italia',
	titlePt: 'Morar na Itália',
	lines: [
		{
			it: "Cercando casa a Bologna: i consigli di uno studente brasiliano.",
			pt: "Procurando casa em Bolonha: os conselhos de um estudante brasileiro.",
			note: "O Rafael escreveu este texto para o site dos estudantes estrangeiros da universidade. *Cercando* = procurando: o gerúndio, que você conhece com *stare* (lição 43), também anda sozinho."
		},
		{ it: "Mi chiamo Rafael, vengo da Recife e vivo a Bologna da un anno.", pt: "Meu nome é Rafael, sou de Recife e moro em Bolonha há um ano." },
		{
			it: "Questo mese, con i miei due coinquilini, ho dovuto cambiare casa: il proprietario vendeva l'appartamento.",
			pt: "Este mês, com os meus dois colegas de apartamento, tive que mudar de casa: o dono ia vender o apartamento.",
			lit: "Este mês, com os meus dois coinquilinos, tenho devido mudar casa: o proprietário vendia o apartamento."
		},
		{
			it: "Cambiando casa, ho capito molte cose sull'Italia.",
			pt: "Mudando de casa, entendi muitas coisas sobre a Itália.",
			note: "O gerúndio sozinho diz quando (*tornando a casa*, ao voltar para casa), como (*sbagliando*, errando) ou por quê. Quem faz a ação do gerúndio é o mesmo sujeito do verbo principal: quem mudou de casa é quem entendeu."
		},
		{
			it: "Per esempio, più di sette italiani su dieci vivono in una casa di proprietà.",
			pt: "Por exemplo, mais de sete em cada dez italianos moram em casa própria.",
			lit: "Por exemplo, mais de sete italianos sobre dez vivem numa casa de propriedade.",
			note: "*Una casa di proprietà* = uma casa própria. *Sette su dieci* = sete em cada dez."
		},
		{ it: "Per questo gli appartamenti in affitto sono pochi, e spesso cari.", pt: "Por isso os apartamentos para alugar são poucos, e muitas vezes caros." },
		{
			it: "Molti giovani restano a casa dei genitori fino a trent'anni, risparmiando sull'affitto.",
			pt: "Muitos jovens ficam na casa dos pais até os trinta anos, economizando no aluguel.",
			note: "*Risparmiando* = economizando: aqui o gerúndio diz como. *Risparmiare su* = economizar em. *I genitori* são os pais (pai e mãe); *i parenti* são os parentes."
		},
		{
			it: "Gli studenti che vengono da altre città, i cosiddetti fuorisede, di solito dividono un appartamento.",
			pt: "Os estudantes que vêm de outras cidades, os chamados fuorisede, normalmente dividem um apartamento.",
			note: "*Cosiddetto* (“ko-sid-dêt-to”) = assim chamado, o tal: *i cosiddetti fuorisede*. Concorda como adjetivo: *la cosiddetta*, *i cosiddetti*. *Fuorisede* (“fora da sede”) é o estudante que mora longe da cidade da família; não muda no plural."
		},
		{
			it: "Una stanza singola in centro costa tra i quattrocento e i seicento euro al mese.",
			pt: "Um quarto de solteiro no centro custa entre quatrocentos e seiscentos euros por mês.",
			note: "*Tra i... e i...* = entre... e...: com números, o artigo aparece. *Singola* = de solteiro, para uma pessoa; *doppia* = para duas."
		},
		{
			it: "Il centro storico è bellissimo, con i suoi portici: in tutta la città sono più di sessanta chilometri di strade coperte.",
			pt: "O centro histórico é lindíssimo, com seus pórticos: na cidade inteira são mais de sessenta quilômetros de calçadas cobertas.",
			note: "Os *portici*, galerias cobertas ao longo das calçadas, são patrimônio da UNESCO desde 2021. Dá para atravessar Bolonha sem guarda-chuva."
		},
		{ it: "Ma i palazzi sono antichi: spesso non c'è l'ascensore e alcune stanze sono buie.", pt: "Mas os prédios são antigos: muitas vezes não há elevador e alguns cômodos são escuros." },
		{
			it: "Leggendo gli annunci, ho imparato parole nuove: bilocale, spese condominiali, deposito.",
			pt: "Lendo os anúncios, aprendi palavras novas: dois cômodos, condomínio, caução."
		},
		{
			it: "Il mio consiglio? Cominciate presto e visitate molte case, facendo sempre tante domande.",
			pt: "Meu conselho? Comecem cedo e visitem muitas casas, sempre fazendo muitas perguntas.",
			note: "*Facendo*, gerúndio de *fare* (lição 49). *Fare una domanda* = fazer uma pergunta."
		},
		{
			it: "Controllate la caldaia, i rubinetti e il contatore della luce. Io ho imparato sbagliando!",
			pt: "Confiram a caldeira, as torneiras e o medidor de luz. Eu aprendi errando!",
			note: "Os italianos dizem *Sbagliando s'impara*, errando é que se aprende. *S'impara* = *si impara* (lição 27). *Controllare* = verificar, conferir; não é “controlar” no sentido de mandar."
		},
		{ it: "Adesso abito in un palazzo del Seicento, con una padrona di casa gentilissima.", pt: "Agora moro num prédio do século dezessete, com uma senhoria gentilíssima." },
		{ it: "La mia stanza è buia, è vero, ma la cucina è piena di sole e di amici.", pt: "O meu quarto é escuro, é verdade, mas a cozinha é cheia de sol e de amigos." },
		{
			it: "Sperando di esservi utile, vi saluto da Bologna. Rafael",
			pt: "Esperando ter sido útil, mando um abraço de Bolonha. Rafael",
			lit: "Esperando de ser-vos útil, vos saúdo de Bolonha. Rafael",
			note: "*Sperando di* + infinitivo = esperando, na esperança de. É um fecho clássico de carta e de e-mail: *sperando di sentirti presto*, esperando notícias suas. *Esservi* = ser para vocês: o *vi* se cola no infinitivo, como *comprarlo* (lição 42)."
		},
		{ it: "Studiando un po' ogni giorno, imparerai l'italiano.", pt: "Estudando um pouco todo dia, você vai aprender italiano.", sep: true },
		{ it: "Tornando a casa, ho incontrato la signora Bernardi.", pt: "Voltando para casa, encontrei a senhora Bernardi." },
		{
			it: "Questa è la cosiddetta Piccola Venezia di Bologna: un canale tra le case.",
			pt: "Esta é a chamada Pequena Veneza de Bolonha: um canal entre as casas.",
			note: "Bolonha teve uma rede de canais; quase todos foram cobertos, mas de uma janelinha na via Piella ainda se vê um deles."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O gerúndio sozinho',
			blocks: [
				{
					type: 'p',
					text: "Na lição 43, o gerúndio vinha com *stare*: *sto finendo*. Ele também funciona sozinho, como em português, para dizer em que momento, de que jeito ou por que algo acontece. A forma é a mesma: *-ando* nos verbos em *-are*, *-endo* nos outros."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Cam**bian**do **ca**sa, ho ca**pi**to **mol**te **co**se.", pt: "Mudando de casa, entendi muitas coisas. (quando)" },
						{ it: "Ho im**pa**rato sba**glian**do.", pt: "Aprendi errando. (como)" },
						{ it: "Ri**ma**nendo con i geni**to**ri, ri**spar**miano.", pt: "Ficando com os pais, eles economizam. (por quê)" }
					]
				},
				{
					type: 'p',
					text: "Duas regras. Primeiro, o sujeito do gerúndio é o mesmo do verbo principal: *tornando a casa, ho incontrato la signora Bernardi* quer dizer que fui eu quem voltava. Segundo, os pronomes se colam no fim, como no infinitivo: *guardandolo* (olhando para ele), *alzandomi* (me levantando)."
				},
				{
					type: 'dica',
					text: "*Sperando di* + infinitivo fecha cartas e e-mails: *sperando di vederti presto*, *sperando di esservi utile*. Com o mesmo sujeito, *di* + infinitivo; é o *spero di sì* da lição 59, agora no gerúndio."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Morar na Itália',
			blocks: [
				{
					type: 'p',
					text: "A Itália é um país de proprietários: a maioria das famílias mora em casa própria, muitas vezes herdada ou comprada com ajuda dos pais. O aluguel é mais comum nas grandes cidades e entre os jovens, os estrangeiros e os estudantes."
				},
				{
					type: 'p',
					text: "Os italianos saem da casa dos pais tarde, em média por volta dos trinta anos, bem mais tarde que no norte da Europa. Os motivos: aluguel caro, trabalho incerto e, dizem alguns, a comida da mamma. Os estudantes *fuorisede* são a exceção: cidades universitárias como Bolonha, Pádua e Pisa estão cheias deles, e conseguir um quarto em setembro é uma corrida."
				},
				{ type: 'h', text: 'O centro histórico' },
				{
					type: 'p',
					text: "Quase toda cidade italiana tem o seu *centro storico*, com prédios de séculos atrás, ruas estreitas e muitas vezes uma *ZTL* (*zona a traffico limitato*), onde só entram os carros autorizados. Morar ali é bonito e prático, mas tem seus preços: escadas sem elevador, cômodos escuros, encanamento antigo. O Rafael que o diga."
				},
				{
					type: 'dica',
					text: "*Cosiddetto* às vezes tem um tom irônico, como o nosso “o tal”: *il cosiddetto esperto* é o “especialista” entre aspas. O contexto mostra se é só um nome ou uma alfinetada."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Camminando sotto i portici, non hai bisogno dell'ombrello.", pt: "Andando sob os pórticos, você não precisa de guarda-chuva." },
				{ it: "Ho trovato casa leggendo gli annunci.", pt: "Achei casa lendo os anúncios." },
				{ it: "Sperando di vederti presto, ti saluto.", pt: "Esperando te ver logo, mando um abraço." },
				{ it: "Ho incontrato Chiara uscendo dall'università.", pt: "Encontrei a Chiara saindo da universidade." },
				{ it: "Molti studenti fuorisede dividono un appartamento.", pt: "Muitos estudantes de fora dividem um apartamento." },
				{ it: "Abitiamo nella cosiddetta zona universitaria.", pt: "Moramos na chamada região universitária." },
				{ it: "Sbagliando s'impara!", pt: "Errando é que se aprende!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Procurando casa, aprendi muito.", parts: ["", null, " casa, ho imparato molto."], answers: ["cercando"] },
				{ pt: "Esperando te ver logo...", parts: ["", null, " di vederti presto..."], answers: ["sperando"] },
				{ pt: "os chamados fuorisede", parts: ["i ", null, " fuorisede"], answers: ["cosiddetti"] },
				{ pt: "Errando é que se aprende.", parts: ["", null, " s'impara."], answers: ["sbagliando"] },
				{ pt: "uma casa própria", parts: ["una casa di ", null], answers: ["proprietà"] }
			]
		}
	]
};

const licao70: Lesson = {
	no: 70,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'O futuro regular',
			blocks: [
				{
					type: 'p',
					text: "Casa nova, tempo verbal novo! Nesta semana o futuro esteve em quase todas as falas. A receita: infinitivo sem o *-e* final + *-ò, -ai, -à, -emo, -ete, -anno*. Nos verbos em *-are*, o *a* vira *e*. A força cai no fim: *parlerò*, *parlerà*, e em *parleranno* no *ran*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Io resterò a Bologna ancora un anno!", pt: "*restare* → *resterò* (lição 64)" },
						{ it: "Toro: conoscerai una persona speciale.", pt: "*conoscere* → *conoscerai* (lição 64)" },
						{ it: "Qui non sentirete i rumori della strada.", pt: "*sentire* → *sentirete* (lição 65)" },
						{ it: "Se aspetteremo troppo, lo affitterà qualcun altro.", pt: "*aspettare*, *affittare* (lição 66)" }
					]
				},
				{ type: 'h', text: 'Ajustes de escrita' },
				{
					type: 'p',
					text: "Para manter o som, a escrita muda um pouco. Verbos em *-care* e *-gare* ganham *h*: *cercheremo un altro appartamento*, *pagherai meno di noi* (lições 64 e 66). Verbos em *-ciare* e *-giare* perdem o *i*: *comincerò*, *dove mangeremo?* (lição 64). E os verbos em *-isc-* deixam o *-isc-* de lado: *finirò*, *preferirai*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O futuro irregular',
			blocks: [
				{
					type: 'p',
					text: "As terminações são sempre as mesmas; só o começo muda. Quatro grupos dão conta de quase tudo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "sarò, sarai, sarà, saremo, sarete, saranno", pt: "*essere*: Sarà la mia, come sempre! (lição 65)" },
						{ it: "avrò, avrai, avrà, avremo, avrete, avranno", pt: "*avere*: Stasera avremo l'acqua calda? (lição 68)" },
						{ it: "andrò, dovrò, potrò, saprò, vedrò, vivrò", pt: "o infinitivo encurta: Dovremo andare via. (lição 64)" },
						{ it: "verrò, vorrò, rimarrò, terrò, berrò", pt: "dois erres: Il tecnico verrà domani. (lição 68)" },
						{ it: "darò, farò, starò", pt: "o *a* fica: Farete colazione al sole. (lição 65)" }
					]
				},
				{
					type: 'p',
					text: "Os impessoais seguem o verbo: *ci sarà, ci saranno* (vai haver), *ci vorrà, ci vorranno* (vai levar, vai ser preciso). *Ci saranno grandi cambiamenti*, dizia o horóscopo de Áries; e logo depois: *ci vorrà un bel po' di tempo*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Futuro anterior, se e quando',
			blocks: [
				{
					type: 'p',
					text: "O futuro anterior é o auxiliar no futuro + particípio: *avrò finito*, *sarà passato*. Ele marca o que vai estar concluído antes de outra coisa no futuro. Valem as regras do passato prossimo: os mesmos verbos pedem *essere*, e com *essere* o particípio concorda (*quando saremo arrivati*)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Quando avrò finito qui, lo chiamerò io.", pt: "Quando eu tiver terminado aqui, eu ligo para ele. (lição 68)" },
						{ it: "Se il tecnico del gas sarà passato, sì.", pt: "Se o técnico do gás tiver passado, sim. (lição 68)" }
					]
				},
				{
					type: 'p',
					text: "Depois de *se* e *quando*, falando do futuro, o italiano usa o futuro (simples ou anterior), onde o português usa o futuro do subjuntivo: *se prenderai tu la stanza buia* (se você ficar com o quarto escuro), *quando usciremo dal cinema* (quando sairmos do cinema). Na fala, para coisas próximas e certas, o presente também serve: *se piove, resto a casa*."
				},
				{
					type: 'dica',
					text: "Se em português aparecer “tiver”, “for”, “puder”, “sairmos” depois de “se” ou “quando”, pense no futuro italiano. E “quando eu tiver feito” é *quando avrò fatto*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Presente, futuro ou stare per?',
			blocks: [
				{
					type: 'p',
					text: "Para falar do que vem pela frente, o italiano tem três ferramentas. O **presente**, para o que já está combinado e próximo: *domani vado a vedere la casa*. O **futuro**, para previsões, planos e promessas: *cercheremo un altro appartamento*, *vedrete!*. E **stare per** + infinitivo, para o que vai acontecer no próximo instante: *sto per accendere il phon*, *stiamo per fare un grande passo*."
				},
				{
					type: 'p',
					text: "No imperfeito, *stare per* conta o que ia acontecer e não aconteceu, ou foi interrompido: *stavo per uscire, quando ha telefonato la mamma* (lição 68). E não esqueça que o nosso “vou + infinitivo” não vira *vado a*, a não ser que haja movimento: “vou estudar” é *studio* ou *studierò*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do horóscopo do café da manhã ao encanador, estas expressões apareceram nas lições 64 a 69. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Di che segno sei?", pt: "De que signo você é?" },
						{ it: "brutte notizie", pt: "más notícias" },
						{ it: "un bel po' di tempo", pt: "um bom tempo, um bocado de tempo" },
						{ it: "Attenti al gradino!", pt: "Cuidado com o degrau!" },
						{ it: "Ho un impegno.", pt: "Tenho um compromisso." },
						{ it: "Vedrai! Vedrete!", pt: "Você vai ver! Vocês vão ver!" },
						{ it: "Pensateci con calma.", pt: "Pensem com calma." },
						{ it: "Meno male!", pt: "Ainda bem!" },
						{ it: "Ci troviamo bene.", pt: "A gente se dá bem; estamos gostando." },
						{ it: "a testa", pt: "por cabeça, cada um" },
						{ it: "Già...", pt: "Pois é..." },
						{ it: "un sacco di", pt: "um monte de" },
						{ it: "Ci sta? Non ci sta.", pt: "Cabe? Não cabe." },
						{ it: "È saltata la luce.", pt: "A luz caiu." },
						{ it: "È tutto a posto.", pt: "Está tudo certo." },
						{ it: "Sbagliando s'impara.", pt: "Errando é que se aprende." },
						{ it: "Sperando di sentirti presto...", pt: "Esperando notícias suas... (fecho de carta)" }
					]
				},
				{
					type: 'dica',
					text: "*Meno male* e *già* são das palavrinhas mais frequentes do italiano falado. Experimente usá-las hoje mesmo, nem que seja falando sozinho: *Meno male che è venerdì! Già.*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "L'anno prossimo andrò in Italia e vivrò a Roma.", pt: "No ano que vem vou para a Itália e vou morar em Roma." },
				{ it: "Se pagherai l'affitto in tempo, il padrone di casa sarà contento.", pt: "Se você pagar o aluguel em dia, o senhorio vai ficar contente." },
				{ it: "Quando avremo trovato casa, faremo una festa.", pt: "Quando tivermos achado casa, vamos dar uma festa." },
				{ it: "Stavo per telefonarti!", pt: "Eu ia te ligar agora mesmo!" },
				{ it: "Domani i ragazzi porteranno i mobili nella casa nuova.", pt: "Amanhã os rapazes vão levar os móveis para a casa nova." },
				{ it: "Che cosa farete stasera? Staremo a casa.", pt: "O que vocês vão fazer hoje à noite? Vamos ficar em casa." },
				{ it: "Vedrai, ti troverai bene a Bologna.", pt: "Você vai ver, vai gostar de Bolonha." },
				{ it: "Il divano non ci sta: è più grande di quello che pensavamo.", pt: "O sofá não cabe: é maior do que a gente pensava." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Pagaremos amanhã.", parts: ["", null, " domani."], answers: ["pagheremo"] },
				{ pt: "Eu poderei vir.", parts: ["", null, " venire."], answers: ["potrò"] },
				{ pt: "Quando ela tiver chegado, vamos jantar.", parts: ["Quando ", null, " arrivata, ceneremo."], answers: ["sarà"] },
				{ pt: "Se vocês quiserem, poderão vir.", parts: ["Se ", null, ", potrete venire."], answers: ["vorrete"] },
				{ pt: "Comerei às oito.", parts: ["", null, " alle otto."], answers: ["mangerò"] }
			]
		}
	]
};

export const unidade: Unit = { no: 10, title: 'Casa nova', lessons: [64, 65, 66, 67, 68, 69, 70] };

export const licoes: Lesson[] = [licao64, licao65, licao66, licao67, licao68, licao69, licao70];
