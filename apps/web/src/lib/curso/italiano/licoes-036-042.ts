import type { Lesson, Unit } from '../types.ts';

// Lições 36–42: uma semana de compras e recados em Bolonha. A irmã do Matteo tem gêmeos em Turim
// (presentes, cartão pelo correio), Chiara se aventura de carro no centro, Rafael compra gorro e luvas,
// Black Friday com a Chiara, quitanda, frios e farmácia. Ver docs/agents/curso-assimil-mapa.md.

const licao36: Lesson = {
	no: 36,
	kind: 'licao',
	title: 'Un regalo per i gemelli',
	titlePt: 'Um presente para os gêmeos',
	lines: [
		{
			it: "Rafael, hai un'ora libera? Devo comprare un regalo per i miei nipotini.",
			pt: "Rafael, você tem uma hora livre? Preciso comprar um presente para os meus sobrinhos.",
			lit: "Rafael, tens uma hora livre? Devo comprar um presente para os meus sobrinhozinhos.",
			note: "*Nipote* é sobrinho e também neto; *nipotino* é a versão carinhosa, “sobrinhozinho”. O sufixo *-ino* (*-ina*, *-ini*, *-ine*) é o diminutivo mais comum do italiano. E lembre da lição 13: com parente no plural, o possessivo leva artigo: *i miei nipotini*."
		},
		{
			it: "I nipotini? Allora tua sorella ha avuto i gemelli!",
			pt: "Os sobrinhos? Então a sua irmã teve os gêmeos!",
			note: "*Gemelli* = gêmeos (*il gemello, la gemella*). *Ha avuto*, passato prossimo de *avere*, como na lição 31."
		},
		{
			it: "Sì, giovedì notte: un maschio e una femmina. Si chiamano Leo e Nina.",
			pt: "Sim, quinta à noite: um menino e uma menina. Eles se chamam Leo e Nina.",
			lit: "Sim, quinta noite: um macho e uma fêmea. Se chamam Leo e Nina.",
			note: "Para bebês, os italianos dizem com toda a naturalidade *maschio* e *femmina*: menino e menina. Nada de estranho nisso."
		},
		{
			it: "Che bello! Auguri, zio Matteo!",
			pt: "Que lindo! Parabéns, tio Matteo!",
			lit: "Que belo! Votos, tio Matteo!",
			note: "*Auguri!* serve para quase toda ocasião feliz: aniversário, nascimento, casamento, festas. Você vai vê-lo de novo na próxima lição."
		},
		{
			it: "Grazie! Mia madre è già partita per Torino. Io parto venerdì, dopo l'ultimo esame.",
			pt: "Obrigado! Minha mãe já foi para Turim. Eu viajo na sexta, depois da última prova.",
			lit: "Obrigado! Minha mãe é já partida para Turim. Eu parto sexta, depois do último exame.",
			note: "*Partire* é sair de viagem, partir para outro lugar: *parto per Torino*. No passato vai com *essere* e concorda: *è partita*. O Matteo e a família são de Turim (lição 1)."
		},
		{
			it: "E che cosa regali ai bambini?",
			pt: "E o que você vai dar de presente para as crianças?",
			lit: "E que coisa presenteias às crianças?",
			note: "*Regalare qualcosa a qualcuno* = dar algo de presente a alguém. O verbo vem de *il regalo*, o presente."
		},
		{
			it: "Non lo so. Qualcosa di piccolo: hanno solo due giorni!",
			pt: "Não sei. Alguma coisa pequena: eles só têm dois dias!",
			lit: "Não o sei. Algo de pequeno: têm só dois dias!",
			note: "*Qualcosa di* + adjetivo: *qualcosa di piccolo*, *qualcosa di bello*. O adjetivo fica no masculino."
		},
		{
			it: "Buongiorno, ragazzi! Cercate qualcosa?",
			pt: "Bom dia, rapazes! Procuram alguma coisa?"
		},
		{
			it: "Sì, un regalo per due gemelli appena nati.",
			pt: "Sim, um presente para dois gêmeos recém-nascidos.",
			lit: "Sim, um presente para dois gêmeos apenas nascidos.",
			note: "*Appena nato* = que acabou de nascer. *Appena* aqui quer dizer “há pouquíssimo”; é uma palavra que você vai encontrar muito."
		},
		{
			it: "Allora guardate queste tutine di cotone, in bianco o in giallo.",
			pt: "Então olhem estes macacõezinhos de algodão, em branco ou em amarelo.",
			note: "*La tuta* é o macacão (e também o agasalho de ginástica); *la tutina* é o macacãozinho de bebê. *Di cotone*: *di* indica o material, como na lição 26."
		},
		{
			it: "Che carine! E guarda questi cappellini, sono piccolissimi!",
			pt: "Que gracinhas! E olha estes chapeuzinhos, são minúsculos!",
			lit: "Que queridinhas! E olha estes chapeuzinhos, são pequeníssimos!",
			note: "*Carino* (de *caro* + *-ino*) virou palavra própria: bonitinho, fofo, gentil. *Il cappello* (chapéu) vira *il cappellino*. Repare que o diminutivo conserva o gênero."
		},
		{
			it: "Prendo due tutine e due cappellini. Per mia sorella, invece, ho un'altra idea.",
			pt: "Vou levar dois macacõezinhos e dois chapeuzinhos. Para a minha irmã, já tenho outra ideia.",
			lit: "Pego dois macacõezinhos e dois chapeuzinhos. Para minha irmã, em vez disso, tenho uma outra ideia."
		},
		{ it: "Cioè?", pt: "Qual?", lit: "Isto é?", note: "*Cioè* = isto é, ou seja. Sozinho, com tom de pergunta, pede explicação: “como assim?”, “qual?”." },
		{
			it: "Le regalo un buono per un massaggio. Con due neonati, non dorme più!",
			pt: "Vou dar para ela um vale-massagem. Com dois recém-nascidos, ela não dorme mais!",
			lit: "Lhe presenteio um vale para uma massagem. Com dois recém-nascidos, não dorme mais!",
			note: "*Le* = a ela, para ela. É o pronome indireto feminino: *le regalo* = *regalo a lei*. Não confunda com o *la* direto (*la vedo*, eu a vejo). *Non... più* = não... mais."
		},
		{ it: "Ottima idea. E a tuo cognato?", pt: "Ótima ideia. E para o seu cunhado?" },
		{
			it: "A Paolo? Gli regalo un chilo di caffè. Per i prossimi mesi è perfetto!",
			pt: "Para o Paolo? Vou dar a ele um quilo de café. Para os próximos meses, é perfeito!",
			lit: "A Paolo? Lhe presenteio um quilo de café. Para os próximos meses é perfeito!",
			note: "*Gli* = a ele, para ele: *gli regalo* = *regalo a lui*. Como todo pronome átono, *gli* e *le* vêm antes do verbo conjugado."
		},
		{
			it: "Allora, avete deciso? Vi faccio un pacchetto?",
			pt: "E então, decidiram? Faço um embrulho para vocês?",
			lit: "Então, haveis decidido? Vos faço um pacotinho?",
			note: "*Deciso* é o particípio de *decidere*: *ho deciso*, *abbiamo deciso*. *Il pacchetto* (de *pacco* + *-etto*, outro diminutivo) é o embrulho de presente. *Vi* = para vocês."
		},
		{
			it: "Sì, grazie. E poi andiamo via subito: il mio portafoglio piange!",
			pt: "Sim, obrigado. E depois vamos embora já: a minha carteira está chorando!",
			lit: "Sim, obrigado. E depois andamos via logo: o meu porta-fólio chora!",
			note: "*Andare via* = ir embora, sair de um lugar. *Partire* é viajar; *andare via* é simplesmente deixar o lugar onde se está. *Il portafoglio* é a carteira de dinheiro."
		},
		{
			it: "Il treno parte alle otto, ma noi andiamo via dalla festa alle sette.",
			pt: "O trem sai às oito, mas nós vamos embora da festa às sete.",
			lit: "O trem parte às oito, mas nós andamos via da festa às sete.",
			sep: true,
			note: "O trem *parte* (começa a viagem); nós *andiamo via* (deixamos a festa)."
		},
		{
			it: "Le scrivo un messaggio e gli telefono stasera.",
			pt: "Mando uma mensagem para ela e ligo para ele hoje à noite.",
			lit: "Lhe escrevo uma mensagem e lhe telefono esta noite.",
			note: "*Scrivere a* e *telefonare a* pedem o pronome indireto: *le scrivo*, *gli telefono*. Em português dizemos “ligo para ele”; em italiano, “lhe telefono”."
		},
		{ it: "Hai deciso? Sì, ho deciso: prendo la tutina gialla.", pt: "Você decidiu? Sim, decidi: vou levar o macacãozinho amarelo." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Gli e le: a ele, a ela',
			blocks: [
				{
					type: 'p',
					text: "Nas lições 29 a 34 você usou os pronomes diretos: *lo, la, li, le* (o, a, os, as). Eles substituem a coisa ou a pessoa que recebe a ação diretamente: *la vedo* (eu a vejo), *li ho presi* (eu os peguei). Hoje chegaram os indiretos, que substituem a pessoa que recebe alguma coisa: “a ele”, “a ela”, “para ele”, “para ela”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Gli regalo un chilo di caffè.", pt: "Dou a ele um quilo de café. (*gli* = *a lui*)" },
						{ it: "Le regalo un buono.", pt: "Dou a ela um vale. (*le* = *a lei*)" },
						{ it: "Mi regali un libro?", pt: "Você me dá um livro de presente? (*mi* = *a me*)" },
						{ it: "Ti scrivo stasera.", pt: "Escrevo para você hoje à noite. (*ti* = *a te*)" },
						{ it: "Vi faccio un pacchetto?", pt: "Faço um embrulho para vocês? (*vi* = *a voi*)" }
					]
				},
				{
					type: 'p',
					text: "*Mi, ti, ci, vi* são iguais nos diretos e nos indiretos: *mi vede* (ele me vê), *mi scrive* (ele me escreve). Só na terceira pessoa a forma muda: o direto é *lo, la*; o indireto é *gli* (a ele) e *le* (a ela)."
				},
				{ type: 'h', text: "Quando usar o indireto" },
				{
					type: 'p',
					text: "Sempre que o verbo pede *a* antes da pessoa: *regalare a*, *dare a*, *dire a*, *scrivere a*, *telefonare a*, *mandare a*. Atenção a *telefonare*: em português “ligo para ela” parece direto, mas em italiano é *telefono a lei*, portanto *le telefono*."
				},
				{
					type: 'p',
					text: "No passato prossimo, o particípio não concorda com o pronome indireto. Compare: *la ho vista* → *l'ho vista* (eu a vi, concorda), mas *le ho telefonato* (liguei para ela, não muda nada)."
				},
				{
					type: 'dica',
					text: "*Gli* soa “lhi”, como o artigo da lição 4. Diga-o colado ao verbo, como uma sílaba a mais: *gli regalo* soa “lhiregálo”, *le scrivo* soa “leskrívo”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Diminutivos, partir e ir embora',
			blocks: [
				{
					type: 'p',
					text: "O sufixo *-ino* deixa as coisas pequenas, e muitas vezes carinhosas. Ele concorda como um adjetivo em *-o*: *-ino, -ina, -ini, -ine*. O primo dele, *-etto*, também é muito usado, como em *lavoretto* (lição 3) e *pacchetto*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il nipote → il nipo**ti**no", pt: "o sobrinho, o neto → o sobrinhozinho" },
						{ it: "la tuta → la tu**ti**na", pt: "o macacão → o macacãozinho" },
						{ it: "il cappello → il cappel**li**no", pt: "o chapéu → o chapeuzinho" },
						{ it: "il pacco → il pac**chet**to", pt: "o pacote → o embrulho, o pacotinho" }
					]
				},
				{
					type: 'p',
					text: "Cuidado: nem toda palavra em *-ino* é diminutivo. *Carino* começou como “queridinho” e hoje quer dizer bonitinho, fofo. *Il cestino* é a lixeira. *Il panino* é o sanduíche, e não um “pãozinho” qualquer."
				},
				{ type: 'h', text: "Um par, dois sentidos" },
				{
					type: 'p',
					text: "Algumas palavras existem no masculino e no feminino com sentidos bem diferentes. *Gemello* e *gemella* são só o gêmeo e a gêmea; já estes pares mudam de sentido:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **por**to / la **por**ta", pt: "o porto / a porta" },
						{ it: "il **fo**glio / la **fo**glia", pt: "a folha de papel / a folha de árvore" },
						{ it: "il **mo**do / la **mo**da", pt: "o modo / a moda" },
						{ it: "il **col**po / la **col**pa", pt: "o golpe, a pancada / a culpa" }
					]
				},
				{ type: 'h', text: "Partire e andare via" },
				{
					type: 'p',
					text: "Os dois se traduzem às vezes por “sair” ou “ir embora”, mas não são a mesma coisa. *Partire* é começar uma viagem: *parto per Torino*, *il treno parte alle otto*. *Andare via* é deixar o lugar onde se está, sem ideia de viagem: *è tardi, vado via* (está tarde, vou embora). Ambos vão com *essere* no passato: *è partita*, *sono andati via*."
				},
				{
					type: 'dica',
					text: "*Andare via* também é a expressão para mandar alguém embora, no imperativo: *Va' via!* (vai embora!). Use com moderação."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa regali a Chiara? Le regalo un libro.", pt: "O que você vai dar para a Chiara? Vou dar um livro para ela." },
				{ it: "Matteo parte per Torino venerdì.", pt: "O Matteo viaja para Turim na sexta." },
				{ it: "È tardi: andiamo via?", pt: "Está tarde: vamos embora?" },
				{ it: "Gli ho telefonato ieri sera.", pt: "Liguei para ele ontem à noite." },
				{ it: "Le tutine sono di cotone.", pt: "Os macacõezinhos são de algodão." },
				{ it: "Questo cappellino è carino, ma è troppo piccolo.", pt: "Este chapeuzinho é bonitinho, mas é pequeno demais." },
				{ it: "Mia sorella ha avuto due gemelli e non dorme più.", pt: "Minha irmã teve gêmeos e não dorme mais." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Amanhã eu ligo para ela.", parts: ["Domani ", null, " telefono."], answers: ["le"] },
				{ pt: "O que você vai dar ao Paolo? Vou dar um livro a ele.", parts: ["Che cosa regali a Paolo? ", null, " regalo un libro."], answers: ["gli"] },
				{ pt: "O trem parte às nove.", parts: ["Il treno ", null, " alle nove."], answers: ["parte"] },
				{ pt: "Vocês já decidiram?", parts: ["Avete già ", null, "?"], answers: ["deciso"] },
				{ pt: "Um chapeuzinho para a Nina.", parts: ["Un ", null, " per Nina."], answers: ["cappellino"] }
			]
		}
	]
};

const licao37: Lesson = {
	no: 37,
	kind: 'licao',
	title: "All'ufficio postale",
	titlePt: 'Nos Correios',
	lines: [
		{
			it: "Quanta gente! Chi è l'ultimo?",
			pt: "Quanta gente! Quem é o último?",
			note: "*Chi è l'ultimo?* é a pergunta de quem chega numa fila. *Chi* = quem."
		},
		{
			it: "Qui non si fa la fila: si prende il numero. Ecco, il quarantasette.",
			pt: "Aqui não se faz fila: se pega senha. Pronto, o quarenta e sete.",
			lit: "Aqui não se faz a fila: se pega o número. Eis, o quarenta e sete.",
			note: "O *si* impessoal da lição 27: *si fa*, *si prende*. Nos Correios italianos, como em bancos e repartições, uma maquininha distribui as senhas."
		},
		{
			it: "Allora abbiamo tempo. Ti faccio vedere il pacco che mando a mia madre.",
			pt: "Então temos tempo. Vou te mostrar o pacote que vou mandar para a minha mãe.",
			lit: "Então temos tempo. Te faço ver o pacote que mando a minha mãe.",
			note: "*Fare vedere* = fazer ver, mostrar. *Che* liga duas frases, como o nosso “que”: *il pacco che mando* = o pacote que eu mando. É o pronome relativo."
		},
		{ it: "Che cosa c'è dentro?", pt: "O que tem dentro?", lit: "Que coisa há dentro?" },
		{
			it: "Un libro di cucina bolognese e la sciarpa che ho comprato sabato. Fra tre giorni è il suo compleanno.",
			pt: "Um livro de cozinha bolonhesa e o cachecol que comprei no sábado. Daqui a três dias é o aniversário dela.",
			lit: "Um livro de cozinha bolonhesa e a echarpe que comprei sábado. Entre três dias é o seu aniversário.",
			note: "Mais um *che* relativo: *la sciarpa che ho comprato*. E *fra* + tempo = daqui a, como na lição 19."
		},
		{
			it: "E quella busta gialla? Chi la riceve?",
			pt: "E aquele envelope amarelo? Quem vai receber?",
			lit: "E aquele envelope amarelo? Quem o recebe?",
			note: "Aqui *chi* é pergunta: quem? *La busta* (o envelope) é feminino; por isso *la riceve*."
		},
		{
			it: "È un biglietto di auguri per la sorella di Matteo. Ha avuto due gemelli quattro giorni fa.",
			pt: "É um cartão de felicitações para a irmã do Matteo. Ela teve gêmeos quatro dias atrás.",
			lit: "É um bilhete de votos para a irmã de Matteo. Teve dois gêmeos quatro dias faz.",
			note: "*Fa*, depois de uma expressão de tempo, é o nosso “atrás” ou “faz”: *quattro giorni fa* = há quatro dias. *Il biglietto* é o cartão (e também o bilhete de trem ou de cinema)."
		},
		{
			it: "Ah, Elena! L'ho conosciuta un mese fa, in videochiamata. Che cosa le scrivi?",
			pt: "Ah, a Elena! Eu a conheci um mês atrás, por videochamada. O que você vai escrever para ela?",
			lit: "Ah, Elena! A conheci um mês faz, em videochamada. Que coisa lhe escreves?",
			note: "*L'ho conosciuta*: *la* direto, o particípio concorda, como na lição 34. Já *le scrivi* é indireto (escrever *a* ela). Num passato, *conoscere* quer dizer “conhecer pela primeira vez”."
		},
		{
			it: "«Tanti auguri alla mamma, al papà e ai due piccoli!»",
			pt: "“Muitas felicidades para a mamãe, o papai e os dois pequenos!”",
			lit: "“Tantos votos à mamãe, ao papai e aos dois pequenos!”",
			note: "*Tanti auguri!* é a fórmula de sempre: no aniversário, no nascimento, no casamento, no Natal. Na hora de cantar o parabéns, os italianos cantam *Tanti auguri a te*."
		},
		{
			it: "Carino. Ma a Elena e a Paolo non mandi un messaggio? È più veloce.",
			pt: "Que gracinha. Mas para a Elena e o Paolo você não manda uma mensagem? É mais rápido."
		},
		{
			it: "Gli ho già mandato un messaggio. Ma un biglietto vero è un'altra cosa.",
			pt: "Já mandei uma mensagem para eles. Mas um cartão de verdade é outra coisa.",
			lit: "Lhes tenho já mandado uma mensagem. Mas um bilhete verdadeiro é uma outra coisa.",
			note: "Na fala, *gli* serve também para o plural: *gli ho mandato* = mandei a eles. Na escrita formal aparece *loro*, depois do verbo: *ho mandato loro un messaggio*."
		},
		{
			it: "Hai ragione. Mia nonna, per i matrimoni, manda ancora i telegrammi!",
			pt: "Você tem razão. A minha avó, para os casamentos, ainda manda telegramas!",
			note: "*Avere ragione* = ter razão. O telegrama ainda existe na Itália, sobretudo para casamentos e pêsames, mas hoje é coisa rara."
		},
		{ it: "I telegrammi? Esistono ancora?", pt: "Telegramas? Ainda existem?" },
		{
			it: "Sì, ma chi li manda ha almeno ottant'anni!",
			pt: "Existem, mas quem manda tem pelo menos oitenta anos!",
			lit: "Sim, mas quem os manda tem ao menos oitenta anos!",
			note: "Este *chi* não é pergunta: quer dizer “quem”, “a pessoa que”. *Chi li manda* = quem os manda. O verbo fica no singular."
		},
		{
			it: "Numero quarantasette, sportello tre.",
			pt: "Número quarenta e sete, guichê três.",
			note: "*Lo sportello* = o guichê, o balcão de atendimento."
		},
		{
			it: "Buongiorno. Devo spedire questo pacco a Napoli e questa busta a Torino.",
			pt: "Bom dia. Preciso enviar este pacote para Nápoles e este envelope para Turim.",
			lit: "Bom dia. Devo expedir este pacote a Nápoles e este envelope a Turim.",
			note: "*Spedire* = enviar pelo correio, despachar. Conjuga-se com *-isc-*, como *finire*: *spedisco, spedisci, spedisce*."
		},
		{
			it: "Con la spedizione normale arriva in una settimana; con quella veloce, in due giorni.",
			pt: "Com o envio normal chega em uma semana; com o expresso, em dois dias.",
			lit: "Com a expedição normal chega em uma semana; com aquela veloz, em dois dias."
		},
		{
			it: "Quella veloce, allora. Così arriva in tempo per il compleanno!",
			pt: "O expresso, então. Assim chega a tempo para o aniversário!",
			lit: "Aquela veloz, então. Assim chega em tempo para o aniversário!"
		},
		{
			it: "La lettera che hai scritto è bellissima.",
			pt: "A carta que você escreveu é lindíssima.",
			sep: true
		},
		{
			it: "Chi cerca trova.",
			pt: "Quem procura acha.",
			note: "Provérbio com o *chi* de “quem”, igualzinho ao português."
		},
		{
			it: "Mia madre è venuta in Italia dieci anni fa.",
			pt: "Minha mãe veio para a Itália dez anos atrás."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Che e chi',
			blocks: [
				{
					type: 'p',
					text: "Em português, “que” e “quem” se confundem pouco. Em italiano também não, desde que você note o papel de cada um. Os dois apareceram várias vezes no diálogo."
				},
				{ type: 'h', text: "Che: o que liga duas frases" },
				{
					type: 'p',
					text: "*Che* retoma uma palavra que acabou de aparecer e liga duas frases, exatamente como o nosso “que”. Serve para coisas e para pessoas, no singular e no plural, sem mudar nunca."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il pacco che mando a mia madre", pt: "o pacote que mando para a minha mãe" },
						{ it: "la sciarpa che ho comprato sabato", pt: "o cachecol que comprei no sábado" },
						{ it: "la ragazza che lavora in libreria", pt: "a moça que trabalha na livraria" }
					]
				},
				{ type: 'h', text: "Chi: quem" },
				{
					type: 'p',
					text: "*Chi* sempre se refere a pessoas. Pode ser pergunta (*Chi la riceve?*, quem vai receber?) ou querer dizer “a pessoa que”, “aquele que”, sem nenhuma palavra antes (*chi li manda ha ottant'anni*). Nos dois casos o verbo vai no singular."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Chi è l'ultimo?", pt: "Quem é o último?" },
						{ it: "Chi cerca trova.", pt: "Quem procura acha." }
					]
				},
				{
					type: 'dica',
					text: "Um teste rápido: se dá para trocar por “o qual”, “a qual”, é *che*. Se dá para trocar por “a pessoa que”, é *chi*. Nunca diga *la ragazza chi lavora*: depois de uma palavra, é sempre *che*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Fa, loro e as felicitações',
			blocks: [
				{ type: 'h', text: "Quatro dias atrás: quattro giorni fa" },
				{
					type: 'p',
					text: "Para dizer quanto tempo se passou, o italiano põe *fa* depois da duração: *due anni fa*, *un'ora fa*, *poco fa* (agora há pouco). É o verbo *fare*, como no nosso “faz dois anos”, só que no fim."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sono arrivati un'ora fa.", pt: "Eles chegaram uma hora atrás." },
						{ it: "L'ho conosciuta due anni fa.", pt: "Eu a conheci há dois anos." }
					]
				},
				{ type: 'h', text: "A eles: gli ou loro" },
				{
					type: 'p',
					text: "Para o indireto plural (a eles, a elas), o italiano falado usa *gli*, o mesmo de “a ele”: *gli ho mandato un messaggio*. Na escrita mais cuidada, e em textos formais, aparece *loro*, que vem depois do verbo: *ho mandato loro un messaggio*. Os dois estão certos; para falar, *gli* é o mais natural."
				},
				{ type: 'h', text: "Felicitações" },
				{
					type: 'p',
					text: "*Auguri!* resolve quase tudo. *Tanti auguri!* no aniversário (*buon compleanno!* também), *auguri!* para um nascimento, um casamento, uma prova, as festas. No fim do ano, *Buon Natale!* e *Buon anno!*. E quando alguém se forma ou passa num exame, *complimenti!* (parabéns pelo mérito)."
				},
				{
					type: 'p',
					text: "Hoje quase tudo se faz por mensagem e videochamada, mas o cartão em papel continua tendo seu lugar nos nascimentos e casamentos. Ele se compra na papelaria (*cartoleria*) ou na própria agência dos Correios, que na Itália também vende envelopes, caixas e até celulares."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il ragazzo che vedi in piazza è mio cugino.", pt: "O rapaz que você está vendo na praça é meu primo." },
				{ it: "Chi ha scritto questo biglietto?", pt: "Quem escreveu este cartão?" },
				{ it: "Ho spedito il pacco tre giorni fa.", pt: "Enviei o pacote três dias atrás." },
				{ it: "Chi arriva tardi non trova posto.", pt: "Quem chega tarde não acha lugar." },
				{ it: "Gli ho mandato gli auguri per il compleanno.", pt: "Mandei a ele os parabéns pelo aniversário." },
				{ it: "La busta che hai comprato è troppo piccola.", pt: "O envelope que você comprou é pequeno demais." },
				{ it: "Tanti auguri! Come stanno i bambini?", pt: "Parabéns! Como estão as crianças?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O livro que estou lendo é italiano.", parts: ["Il libro ", null, " leggo è italiano."], answers: ["che"] },
				{ pt: "Quem é o último da fila?", parts: [null, " è l'ultimo?"], answers: ["chi"] },
				{ pt: "Ela chegou duas horas atrás.", parts: ["È arrivata due ore ", null, "."], answers: ["fa"] },
				{ pt: "Preciso enviar este pacote.", parts: ["Devo ", null, " questo pacco."], answers: ["spedire"] },
				{ pt: "Muitas felicidades à mamãe!", parts: ["Tanti ", null, " alla mamma!"], answers: ["auguri"] }
			]
		}
	]
};

const licao38: Lesson = {
	no: 38,
	kind: 'licao',
	title: 'In centro con la macchina',
	titlePt: 'De carro no centro',
	lines: [
		{
			it: "Chiara, sei sicura? In centro con la macchina?",
			pt: "Chiara, você tem certeza? De carro no centro?",
			lit: "Chiara, és segura? Em centro com o carro?",
			note: "*Essere sicuro* = ter certeza. E lembre da lição 0: carro é *macchina*; o *carro* italiano é uma carroça."
		},
		{
			it: "È solo per dieci minuti. Devo ritirare una stampante e non posso portarla a piedi: pesa venti chili!",
			pt: "É só por dez minutos. Tenho que retirar uma impressora e não posso levá-la a pé: pesa vinte quilos!",
			note: "*Posso portarla*: com *potere*, *dovere* e *volere*, o pronome pode se grudar no fim do infinitivo, que perde o *-e* final: *portare* + *la* = *portarla*."
		},
		{
			it: "Ma questa macchina è tua?",
			pt: "Mas este carro é seu?"
		},
		{
			it: "No, è del car sharing. La prendi con l'app e la lasci in un parcheggio qualsiasi.",
			pt: "Não, é do compartilhamento. Você pega pelo aplicativo e deixa num estacionamento qualquer.",
			lit: "Não, é do car sharing. A pegas com o app e a deixas em um estacionamento qualquer.",
			note: "*Il car sharing* e *l'app* são estrangeirismos invariáveis, como *il film* e *lo sport* (lição 15). *L'app* é feminino: *un'app*."
		},
		{
			it: "Attenta, il semaforo è rosso!",
			pt: "Cuidado, o sinal está vermelho!",
			lit: "Atenta, o semáforo é vermelho!",
			note: "*Il semaforo* é o sinal de trânsito, o farol. *Attento!*, *attenta!* = cuidado!"
		},
		{
			it: "L'ho visto, l'ho visto! Calma.",
			pt: "Eu vi, eu vi! Calma.",
			lit: "O vi, o vi! Calma."
		},
		{
			it: "E lì c'è scritto «ZTL». Che cosa vuol dire?",
			pt: "E ali está escrito “ZTL”. O que quer dizer?",
			lit: "E lá há escrito “ZTL”. Que coisa quer dizer?",
			note: "*C'è scritto* = está escrito. *Vuol dire* (de *vuole dire*) = quer dizer, significa. As letras se leem *zeta, ti, elle*."
		},
		{
			it: "Zona a traffico limitato: senza permesso non si può entrare.",
			pt: "Zona de trânsito limitado: sem autorização não se pode entrar."
		},
		{
			it: "Allora non ci possiamo entrare? Oppure... non possiamo entrarci?",
			pt: "Então não podemos entrar lá? Ou melhor... não podemos entrar lá?",
			lit: "Então não ali podemos entrar? Ou... não podemos entrar-ali?",
			note: "O Rafael está treinando as duas posições do pronome, e as duas estão certas. *Ci* aqui quer dizer “lá”, “ali”: *ci possiamo entrare* = *possiamo entrarci*."
		},
		{
			it: "Bravo, tutte e due. Ma la risposta è no: conviene lasciare la macchina qui e andare a piedi.",
			pt: "Muito bem, as duas. Mas a resposta é não: é melhor deixar o carro aqui e ir a pé.",
			lit: "Bravo, todas e duas. Mas a resposta é não: convém deixar o carro aqui e ir a pé.",
			note: "*Conviene* + infinitivo = vale a pena, é melhor, compensa. Não tem o peso formal do nosso “convém”: é palavra do dia a dia."
		},
		{
			it: "E dove la lasciamo? È tutto pieno.",
			pt: "E onde a gente deixa? Está tudo cheio.",
			lit: "E onde a deixamos? É tudo cheio."
		},
		{
			it: "Lì, sul marciapiede, vicino alle strisce.",
			pt: "Ali, na calçada, perto da faixa de pedestres.",
			lit: "Lá, sobre a calçada, perto das listras.",
			note: "*Il marciapiede* = a calçada. *Le strisce* (as listras) são a faixa de pedestres."
		},
		{
			it: "Sul marciapiede?! Non la puoi lasciare lì. Guarda, arriva un vigile!",
			pt: "Na calçada?! Você não pode deixar ali. Olha, está vindo um guarda!",
			lit: "Sobre a calçada?! Não a podes deixar lá. Olha, chega um guarda!",
			note: "*Non la puoi lasciare* = *non puoi lasciarla*. *Il vigile* é o guarda municipal, que cuida do trânsito e das multas."
		},
		{
			it: "Signorina, qui non può parcheggiare. C'è divieto di sosta.",
			pt: "Senhorita, aqui a senhora não pode estacionar. É proibido estacionar.",
			lit: "Senhorita, aqui não pode estacionar. Há proibição de parada.",
			note: "*Divieto di sosta* = proibido estacionar. *Divieto di* + substantivo aparece em placas por toda parte: *divieto di accesso*, *divieto di fumo*."
		},
		{
			it: "Scusi, solo un minuto: devo ritirare una stampante...",
			pt: "Desculpe, só um minuto: tenho que retirar uma impressora..."
		},
		{
			it: "Un minuto diventa sempre un'ora. C'è un parcheggio a duecento metri: Le conviene andare lì.",
			pt: "Um minuto sempre vira uma hora. Tem um estacionamento a duzentos metros: é melhor a senhora ir para lá.",
			lit: "Um minuto torna-se sempre uma hora. Há um estacionamento a duzentos metros: Lhe convém ir lá.",
			note: "*Le conviene* = convém à senhora, à senhorita. *Le* é o indireto de *Lei*, o tratamento de cortesia. Você vai vê-lo com calma na lição 41."
		},
		{
			it: "Lo dico sempre: a Bologna conviene la bicicletta!",
			pt: "Eu sempre digo: em Bolonha, compensa a bicicleta!",
			lit: "O digo sempre: a Bolonha convém a bicicleta!"
		},
		{
			it: "Va bene, va bene. Ma la stampante la porti tu!",
			pt: "Está bem, está bem. Mas a impressora quem leva é você!",
			lit: "Vai bem, vai bem. Mas a impressora a levas tu!",
			note: "*La stampante la porti tu*: na fala, é comum pôr a coisa no começo e repeti-la com o pronome. Dá destaque, como o nosso “a impressora, você que leva”."
		},
		{
			it: "Il biglietto lo posso comprare sull'autobus? Sì, puoi comprarlo con il telefono.",
			pt: "A passagem dá para comprar no ônibus? Sim, você pode comprar pelo celular.",
			lit: "O bilhete o posso comprar sobre o ônibus? Sim, podes comprá-lo com o telefone.",
			sep: true
		},
		{
			it: "Non conviene prendere la macchina: c'è troppo traffico.",
			pt: "Não compensa pegar o carro: tem trânsito demais."
		},
		{
			it: "Ti devo chiamare stasera? Sì, devi chiamarmi dopo cena.",
			pt: "Tenho que te ligar hoje à noite? Sim, você tem que me ligar depois do jantar.",
			note: "*Chiamare* (chamar, ligar para) é direto: *ti chiamo*, *mi chiami*. Já *telefonare* pede *a*: *ti telefono*. A forma é igual com *mi* e *ti*; a diferença só aparece em *lo/la* × *gli/le*."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O pronome com potere, dovere e volere',
			blocks: [
				{
					type: 'p',
					text: "Até aqui, os pronomes átonos (*lo, la, li, le, gli, mi, ti, ci, vi*) vinham sempre antes do verbo conjugado: *la vedo*, *gli regalo*. Com o infinitivo é diferente: o pronome se gruda no fim dele, e o infinitivo perde o *-e* final."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "portare + la → por**tar**la", pt: "levá-la" },
						{ it: "comprare + lo → com**prar**lo", pt: "comprá-lo" },
						{ it: "chiamare + mi → chia**mar**mi", pt: "chamar-me, me ligar" },
						{ it: "entrare + ci → en**trar**ci", pt: "entrar ali" }
					]
				},
				{
					type: 'p',
					text: "Quando o infinitivo vem depois de *potere*, *dovere* ou *volere*, você escolhe: o pronome pode ir antes do verbo conjugado ou grudado no infinitivo. O sentido é o mesmo, e os italianos usam as duas formas o tempo todo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non la puoi lasciare lì. / Non puoi lasciarla lì.", pt: "Você não pode deixá-la ali." },
						{ it: "Lo posso comprare? / Posso comprarlo?", pt: "Posso comprá-lo?" },
						{ it: "Ti devo chiamare? / Devo chiamarti?", pt: "Tenho que te ligar?" }
					]
				},
				{
					type: 'p',
					text: "O que não pode é dividir ou repetir: nunca *lo posso comprarlo*. Ou antes, ou depois."
				},
				{ type: 'h', text: "Conviene" },
				{
					type: 'p',
					text: "*Conviene* + infinitivo é um jeito muito comum de dar um conselho prático: *conviene andare a piedi* (é melhor ir a pé), *non conviene prendere la macchina* (não compensa pegar o carro). Com um pronome indireto, diz para quem compensa: *ti conviene*, *gli conviene*, *Le conviene*. Também pode vir com um substantivo: *conviene la bicicletta*."
				},
				{
					type: 'dica',
					text: "A força da palavra não muda quando o pronome se gruda: *portarla* continua com força no *tar*: “por-tár-la”. Diga tudo de uma vez, sem pausa antes do pronome."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O trânsito na cidade italiana',
			blocks: [
				{
					type: 'p',
					text: "Os centros históricos italianos nasceram muito antes dos carros. As ruas são estreitas, as praças são para pedestres, e quase todas as cidades fecham o centro ao trânsito comum com a *ZTL*, a zona de trânsito limitado. Câmeras registram as placas, e a multa chega pelo correio semanas depois. Moradores, táxis e ônibus podem entrar; turistas de carro alugado, quase nunca."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il se**ma**foro", pt: "o sinal, o farol", pron: "se-má-fo-ro" },
						{ it: "il marcia**pie**de", pt: "a calçada", pron: "mar-tcha-pié-de" },
						{ it: "le **stri**sce", pt: "a faixa de pedestres", pron: "strí-xe" },
						{ it: "il par**cheg**gio", pt: "o estacionamento", pron: "par-kêd-djo" },
						{ it: "il di**vie**to di **so**sta", pt: "proibido estacionar" },
						{ it: "il **vi**gile", pt: "o guarda de trânsito", pron: "ví-dji-le" }
					]
				},
				{
					type: 'p',
					text: "Na rua, as faixas pintadas no chão dizem onde parar: azuis (*strisce blu*) são vagas pagas, brancas são gratuitas, amarelas são reservadas (moradores, deficientes, carga e descarga). Paga-se no parquímetro ou, cada vez mais, por aplicativo."
				},
				{
					type: 'dica',
					text: "Em Bolonha, com quase 40 quilômetros de pórticos e um centro compacto, a bicicleta e os pés costumam ganhar do carro. O Rafael tem razão."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non posso portarla a piedi: è troppo pesante.", pt: "Não posso levá-la a pé: é pesada demais." },
				{ it: "Lo vuoi comprare oggi?", pt: "Você quer comprá-lo hoje?" },
				{ it: "Ti conviene prendere l'autobus.", pt: "É melhor você pegar o ônibus." },
				{ it: "Qui c'è divieto di sosta: non puoi lasciare la macchina.", pt: "Aqui é proibido estacionar: você não pode deixar o carro." },
				{ it: "Il semaforo è verde: possiamo passare.", pt: "O sinal está verde: podemos passar." },
				{ it: "Le chiavi le devo lasciare a Matteo.", pt: "As chaves, tenho que deixar com o Matteo." },
				{ it: "Che cosa vuol dire questa parola?", pt: "O que quer dizer esta palavra?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você pode me ligar amanhã?", parts: ["Puoi ", null, " domani?"], answers: ["chiamarmi"] },
				{ pt: "Não posso deixá-la aqui.", parts: ["Non ", null, " posso lasciare qui."], answers: ["la"] },
				{ pt: "Compensa ir a pé.", parts: [null, " andare a piedi."], answers: ["conviene"] },
				{ pt: "O carro está na calçada.", parts: ["La macchina è sul ", null, "."], answers: ["marciapiede"] },
				{ pt: "Quero comprá-lo hoje.", parts: ["Voglio ", null, " oggi."], answers: ["comprarlo"] }
			]
		}
	]
};

const licao39: Lesson = {
	no: 39,
	kind: 'licao',
	title: 'Il berretto e i guanti',
	titlePt: 'O gorro e as luvas',
	lines: [
		{
			it: "Buonasera, ragazzi. Cercate qualcosa?",
			pt: "Boa noite, rapazes. Procuram alguma coisa?",
			note: "*Buonasera* começa a valer no meio da tarde, bem antes de escurecer."
		},
		{
			it: "Sì, un berretto di lana. Fa un freddo cane!",
			pt: "Sim, um gorro de lã. Está um frio de rachar!",
			lit: "Sim, um boné de lã. Faz um frio cão!",
			note: "*Il berretto* é o gorro (o de lã) e também o boné (*berretto con visiera*). *Un freddo cane* é a expressão de todo italiano no inverno: um frio “de cachorro”."
		},
		{
			it: "Ecco i berretti: abbiamo il nero, il grigio, il blu e il viola.",
			pt: "Aqui estão os gorros: temos o preto, o cinza, o azul e o roxo."
		},
		{
			it: "Mi piace quello blu.",
			pt: "Eu gosto daquele azul.",
			lit: "Me agrada aquele azul.",
			note: "*Piacere* funciona ao contrário do nosso “gostar”: a coisa de que se gosta é o sujeito, e quem gosta vem como pronome indireto. *Mi piace* = me agrada, eu gosto. *Blu* não muda nunca: *un berretto blu*, *una sciarpa blu*."
		},
		{
			it: "Blu? Hai già la sciarpa blu, i pantaloni blu, le scarpe blu...",
			pt: "Azul? Você já tem o cachecol azul, a calça azul, os sapatos azuis...",
			note: "Repare: *blu* com feminino, masculino plural e feminino plural, sempre igual."
		},
		{
			it: "E allora? Il blu mi piace. I colori scuri mi piacciono tutti.",
			pt: "E daí? Eu gosto de azul. Gosto de todas as cores escuras.",
			lit: "E então? O azul me agrada. As cores escuras me agradam todas.",
			note: "Quando a coisa de que se gosta está no plural, o verbo vai para o plural: *mi piacciono*. *Il colore* é masculino em italiano: *i colori scuri*."
		},
		{
			it: "Lo provi pure: è taglia unica.",
			pt: "Pode experimentar: é tamanho único.",
			lit: "O prove à vontade: é tamanho único.",
			note: "*Lo provi* = experimente-o (forma do *Lei*, como *provi* na lição 6). *Pure* depois do pedido deixa tudo mais gentil: “fique à vontade”."
		},
		{
			it: "Non riesco a vedere come mi sta. Matteo, tu che dici?",
			pt: "Não consigo ver como ficou em mim. Matteo, o que você acha?",
			lit: "Não consigo a ver como me está. Matteo, tu que dizes?",
			note: "*Riuscire a* + infinitivo = conseguir: *riesco, riesci, riesce*. *Stare bene a qualcuno* = ficar bem em alguém: *come mi sta* = como fica em mim. *Tu che dici?* = o que você acha?"
		},
		{
			it: "Ti sta benissimo. Sembri un vero bolognese!",
			pt: "Ficou ótimo em você. Parece um bolonhês de verdade!",
			lit: "Te está muitíssimo bem. Pareces um verdadeiro bolonhês!",
			note: "*Ti sta* = fica em você: *ti*, pronome indireto. *Sembri* = você parece, de *sembrare*."
		},
		{
			it: "Lo prendo. E adesso i guanti per Chiara: ha sempre le mani fredde.",
			pt: "Vou levar. E agora as luvas para a Chiara: ela está sempre com as mãos frias.",
			lit: "O pego. E agora as luvas para Chiara: tem sempre as mãos frias.",
			note: "*La mano* é feminina, apesar do *-o*, e faz o plural *le mani*. *Il guanto*, *i guanti* = a luva, as luvas."
		},
		{
			it: "Guanti da donna... Che misura porta la signorina?",
			pt: "Luvas femininas... Que número a moça usa?",
			lit: "Luvas de mulher... Que medida leva a senhorita?",
			note: "Para roupa se diz *la taglia*; para luvas e sapatos, *la misura* ou *il numero*. *Portare* aqui é usar, vestir."
		},
		{
			it: "Boh, non lo so. Matteo, tu lo sai?",
			pt: "Sei lá, não sei. Matteo, você sabe?",
			lit: "Boh, não o sei. Matteo, tu o sabes?",
			note: "*Boh* (com os ombros erguidos) é o “sei lá” italiano."
		},
		{
			it: "Io? No. Ma le piace il rosa, questo lo so.",
			pt: "Eu? Não. Mas ela gosta de rosa, isso eu sei.",
			lit: "Eu? Não. Mas lhe agrada o rosa, isto o sei.",
			note: "*Le piace* = a ela agrada, ela gosta. É o *le* indireto da lição 36. *Rosa*, como *blu* e *viola*, não muda."
		},
		{
			it: "Ecco un paio di guanti rosa, di pelle, foderati. La misura sette va bene quasi a tutte.",
			pt: "Aqui está um par de luvas rosa, de couro, forradas. O número sete serve em quase todas.",
			lit: "Eis um par de luvas rosa, de pele, forradas. A medida sete vai bem quase a todas.",
			note: "*Di pelle* = de couro. *Un paio di* = um par de."
		},
		{ it: "Sono bellissimi. Quanto costano?", pt: "São lindíssimas. Quanto custam?", lit: "São belíssimos. Quanto custam?", note: "*Bellissimi* no masculino, porque *i guanti* é masculino." },
		{ it: "Quarantacinque euro.", pt: "Quarenta e cinco euros." },
		{
			it: "Uffa, non riesco mai a risparmiare! Va bene, li prendo.",
			pt: "Ai, ai, nunca consigo economizar! Tudo bem, vou levar.",
			lit: "Uffa, não consigo nunca a economizar! Vai bem, os pego.",
			note: "*Uffa!* é o suspiro de quem perdeu a paciência. *Non... mai* = nunca."
		},
		{
			it: "Le faccio un pacchetto regalo?",
			pt: "Faço um embrulho para presente para o senhor?",
			lit: "Lhe faço um pacotinho presente?",
			note: "*Le* aqui é o indireto de *Lei*: para o senhor. O vendedor passou do *voi* (os dois rapazes) para o *Lei* (só o Rafael, que vai pagar)."
		},
		{
			it: "Sì, grazie. Il berretto, invece, lo metto subito!",
			pt: "Sim, obrigado. Já o gorro, vou pôr agora mesmo!",
			lit: "Sim, obrigado. O gorro, por outro lado, o ponho logo!"
		},
		{
			it: "Ti piacciono queste scarpe viola? No, non mi piacciono per niente.",
			pt: "Você gosta destes sapatos roxos? Não, não gosto nem um pouco.",
			lit: "Te agradam estes sapatos violeta? Não, não me agradam por nada.",
			sep: true
		},
		{
			it: "Riesci a leggere quel cartello? No, non ci riesco.",
			pt: "Você consegue ler aquela placa? Não, não consigo.",
			note: "*Non ci riesco* = não consigo (fazer isso). O *ci* retoma a coisa que se tenta fazer."
		},
		{
			it: "A Matteo piace il calcio; a Chiara piacciono i film italiani.",
			pt: "O Matteo gosta de futebol; a Chiara gosta de filmes italianos.",
			lit: "A Matteo agrada o futebol; a Chiara agradam os filmes italianos."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Piacere: gostar ao contrário',
			blocks: [
				{
					type: 'p',
					text: "Em português, quem gosta é o sujeito: “eu gosto do azul”. Em italiano, a frase gira: o sujeito é a coisa que agrada, e a pessoa aparece como pronome indireto. *Il blu mi piace* = o azul me agrada. É como o nosso antigo “isso me apraz”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi piace il blu.", pt: "Eu gosto de azul." },
						{ it: "Ti piace questo berretto?", pt: "Você gosta deste gorro?" },
						{ it: "Gli piace il calcio.", pt: "Ele gosta de futebol." },
						{ it: "Le piace il rosa.", pt: "Ela gosta de rosa." },
						{ it: "Ci piacciono i film italiani.", pt: "Nós gostamos de filmes italianos." },
						{ it: "Vi piace Bologna?", pt: "Vocês gostam de Bolonha?" }
					]
				},
				{ type: 'h', text: "Piace ou piacciono" },
				{
					type: 'p',
					text: "Como a coisa é o sujeito, é ela que decide o número do verbo: uma coisa, *piace*; várias, *piacciono*. Com um verbo no infinitivo, fica no singular: *mi piace cucinare* (gosto de cozinhar). E repare que não há preposição: nada de “di”. *Mi piace il blu*, não “mi piace del blu”."
				},
				{ type: 'h', text: "A me, a te, a Chiara" },
				{
					type: 'p',
					text: "Quando se fala de uma pessoa pelo nome, usa-se *a*: *a Chiara piace il rosa*, *a Matteo piace il calcio*. Para dar ênfase ou contraste, o pronome átono vira tônico, com *a*: *a me piace il blu, a te no* (eu gosto de azul, você não). Nunca os dois juntos: ou *mi piace*, ou *a me piace*."
				},
				{
					type: 'dica',
					text: "*Non mi piace per niente* = não gosto nem um pouco. E para dizer que algo cai bem em você, o italiano tem outro verbo com a mesma estrutura: *mi sta bene*, *ti sta benissimo*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Cores que não mudam e o verbo riuscire',
			blocks: [
				{
					type: 'p',
					text: "A maioria das cores é adjetivo comum: *nero, nera, neri, nere* (como na lição 6), ou *verde, verdi*. Mas algumas não mudam nunca, nem em gênero nem em número. São quase todas palavras que também são nomes de coisas (*rosa* e *viola* são flores) ou que vieram de outras línguas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un berretto blu / due sciarpe blu", pt: "um gorro azul / dois cachecóis azuis" },
						{ it: "un guanto rosa / i guanti rosa", pt: "uma luva rosa / as luvas rosa" },
						{ it: "una giacca viola / scarpe viola", pt: "um casaco roxo / sapatos roxos" },
						{ it: "pantaloni beige", pt: "calças bege" }
					]
				},
				{
					type: 'p',
					text: "Azul tem duas palavras: *blu* é o azul escuro, marinho; *azzurro* (que muda: *azzurra, azzurri*) é o azul-claro, o do céu. É por isso que a seleção italiana se chama *gli Azzurri*."
				},
				{ type: 'h', text: "Riuscire: conseguir" },
				{
					type: 'p',
					text: "*Riuscire* é irregular: o *u* vira *e* quando a força cai no começo. Ele vem com *a* antes do infinitivo: *riesco a vedere*, *non riesco a risparmiare*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ri**e**sco, ri**e**sci, ri**e**sce", pt: "consigo, consegue (você), consegue (ele)", pron: "rié-sko, rié-xi, rié-xe" },
						{ it: "riu**scia**mo, riu**sci**te, ri**e**scono", pt: "conseguimos, vocês conseguem, eles conseguem", pron: "riu-xá-mo, riu-xí-te, rié-sko-no" }
					]
				},
				{
					type: 'dica',
					text: "Para responder sem repetir o verbo inteiro, use *ci*: *Ci riesci?* (consegue?) *Sì, ci riesco* / *No, non ci riesco*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ti piace questa sciarpa? Sì, mi piace molto.", pt: "Você gosta deste cachecol? Sim, gosto muito." },
				{ it: "A Chiara non piacciono i colori scuri.", pt: "A Chiara não gosta de cores escuras." },
				{ it: "Non riesco a trovare le chiavi.", pt: "Não consigo achar as chaves." },
				{ it: "Ho comprato due berretti blu e un paio di guanti rosa.", pt: "Comprei dois gorros azuis e um par de luvas rosa." },
				{ it: "Come mi sta questa giacca? Ti sta benissimo.", pt: "Como fica em mim este casaco? Fica ótimo em você." },
				{ it: "A me piace il calcio, a lui no.", pt: "Eu gosto de futebol, ele não." },
				{ it: "Le faccio un pacchetto regalo?", pt: "Faço um embrulho para presente para a senhora?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Gosto destes sapatos.", parts: ["Mi ", null, " queste scarpe."], answers: ["piacciono"] },
				{ pt: "Ela gosta de rosa.", parts: [null, " piace il rosa."], answers: ["le"] },
				{ pt: "Vocês conseguem ver o mar?", parts: [null, " a vedere il mare?"], answers: ["riuscite"] },
				{ pt: "Não consigo dormir.", parts: ["Non ", null, " a dormire."], answers: ["riesco"] },
				{ pt: "As calças azuis são do Rafael.", parts: ["I pantaloni ", null, " sono di Rafael."], answers: ["blu"] }
			]
		}
	]
};

const licao40: Lesson = {
	no: 40,
	kind: 'licao',
	title: 'Il Black Friday',
	titlePt: 'A Black Friday',
	lines: [
		{
			it: "Hai visto quanta gente? Oggi è il Black Friday e tutti fanno sconti.",
			pt: "Você viu quanta gente? Hoje é Black Friday e todo mundo está dando desconto.",
			lit: "Viste quanta gente? Hoje é o Black Friday e todos fazem descontos.",
			note: "*Visto* é o particípio de *vedere*: *ho visto*, *hai visto*. *Fare uno sconto* = dar um desconto. E *il Black Friday*, como *il car sharing*, é estrangeirismo e fica no masculino."
		},
		{ it: "Anche in Italia? Che sorpresa!", pt: "Na Itália também? Que surpresa!" },
		{
			it: "Da qualche anno, sì. Ma i saldi veri sono a gennaio e a luglio.",
			pt: "Faz alguns anos, sim. Mas as liquidações de verdade são em janeiro e em julho.",
			lit: "De algum ano, sim. Mas os saldos verdadeiros são a janeiro e a julho.",
			note: "*Qualche* quer dizer “alguns”, mas vem sempre com o substantivo no singular: *qualche anno*, *qualche giorno*. *I saldi* são as grandes liquidações de fim de estação, com datas fixadas por lei."
		},
		{ it: "E tu che cosa cerchi?", pt: "E você, o que está procurando?" },
		{
			it: "Un paio di stivali. Ne ho visto un paio bellissimo in questo negozio la settimana scorsa.",
			pt: "Um par de botas. Vi um par lindíssimo nesta loja na semana passada.",
			lit: "Um par de botas. Disso vi um par belíssimo nesta loja a semana passada.",
			note: "*Il paio* (o par) é masculino: *un paio bellissimo*. E o *ne* retoma *stivali*, como na lição 34."
		},
		{
			it: "Buongiorno! Oggi su tutti gli stivali c'è il venti per cento. E se ne prende due paia, il secondo paio è a metà prezzo.",
			pt: "Bom dia! Hoje tem vinte por cento em todas as botas. E se a senhora levar dois pares, o segundo sai pela metade do preço.",
			lit: "Bom dia! Hoje sobre todas as botas há o vinte por cento. E se disso pega dois pares, o segundo par é a metade preço.",
			note: "*Un paio*, mas *due paia*: o plural termina em *-a* e passa a ser feminino. É um grupinho de palavras que você vai ver hoje."
		},
		{
			it: "Due paia? Ho solo due piedi!",
			pt: "Dois pares? Eu só tenho dois pés!",
			lit: "Dois pares? Tenho só dois pés!"
		},
		{
			it: "Un paio nero per l'inverno e un paio marrone per la primavera...",
			pt: "Um par preto para o inverno e um par marrom para a primavera..."
		},
		{
			it: "Chiara, attenta: è una trappola!",
			pt: "Chiara, cuidado: é uma armadilha!",
			lit: "Chiara, atenta: é uma armadilha!"
		},
		{
			it: "Hai ragione... Ma il prezzo è davvero buono. Meglio un uovo oggi che una gallina domani!",
			pt: "Você tem razão... Mas o preço é mesmo bom. Mais vale um pássaro na mão do que dois voando!",
			lit: "Tens razão... Mas o preço é deveras bom. Melhor um ovo hoje que uma galinha amanhã!",
			note: "Provérbio: melhor um ovo garantido hoje do que a promessa de uma galinha amanhã."
		},
		{
			it: "Che cosa c'entrano le uova adesso?",
			pt: "O que os ovos têm a ver com isso agora?",
			lit: "Que coisa entram os ovos agora?",
			note: "*L'uovo*, *le uova*: mais um plural em *-a*, feminino. *Che c'entra?* = o que tem a ver?"
		},
		{
			it: "Niente, è un proverbio. E tu? Non hai visto niente?",
			pt: "Nada, é um provérbio. E você? Não viu nada?",
			note: "*Visto* de novo, agora numa pergunta negativa. *Non... niente* = nada, com a dupla negação de sempre."
		},
		{
			it: "No, niente. Neanche un maglione nella mia taglia: o enormi o piccolissimi.",
			pt: "Não, nada. Nem um suéter no meu tamanho: ou enormes ou minúsculos.",
			note: "*Neanche* = nem, nem sequer: *neanche un maglione* = nem um suéter. Mais abaixo, na leitura, você vê quando ele precisa de *non*."
		},
		{
			it: "Neanch'io ho trovato niente, a parte gli stivali.",
			pt: "Eu também não achei nada, fora as botas.",
			lit: "Nem eu achei nada, à parte as botas.",
			note: "*Neanch'io* = eu também não, nem eu. É o contrário de *anch'io* (lição 1). Também se diz *nemmeno io* ou *neppure io*, com o mesmo sentido."
		},
		{
			it: "Per oggi basta così. Ho le dita congelate e i piedi stanchi.",
			pt: "Por hoje chega. Estou com os dedos congelados e os pés cansados.",
			lit: "Por hoje basta assim. Tenho os dedos congelados e os pés cansados.",
			note: "*Il dito*, *le dita*: os dedos, mais um plural em *-a*. Por isso *congelate*, no feminino."
		},
		{
			it: "Allora prendo solo il paio nero, e poi andiamo a bere una cioccolata calda. Offro io!",
			pt: "Então eu levo só o par preto, e depois vamos tomar um chocolate quente. Eu pago!",
			lit: "Então pego só o par preto, e depois vamos a beber uma chocolatada quente. Ofereço eu!",
			note: "A *cioccolata calda* italiana é grossa, quase um creme, para comer de colher."
		},
		{
			it: "Non ho fame. Neanch'io.",
			pt: "Não estou com fome. Nem eu.",
			lit: "Não tenho fome. Nem eu.",
			sep: true
		},
		{
			it: "Ho comprato qualche uovo e due paia di calze.",
			pt: "Comprei alguns ovos e dois pares de meias.",
			lit: "Comprei algum ovo e dois pares de meias."
		},
		{
			it: "Nemmeno Matteo ha visto la partita.",
			pt: "Nem o Matteo viu o jogo."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Neanche, qualche e o particípio visto',
			blocks: [
				{ type: 'h', text: "Nem: neanche, nemmeno, neppure" },
				{
					type: 'p',
					text: "As três palavras querem dizer a mesma coisa: “nem”, “também não”, “nem sequer”. *Neanche* é a mais comum na fala; *nemmeno* e *neppure* são um pouco mais enfáticas, mas se trocam sem problema. Com pronome, perdem o *-e* diante de vogal: *neanch'io*."
				},
				{
					type: 'p',
					text: "A regra de posição é a mesma de *niente* e *mai*: depois do verbo, precisam do *non*; antes do verbo, não."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non ho visto neanche un maglione.", pt: "Não vi nem um suéter." },
						{ it: "Neanche Matteo lo sa.", pt: "Nem o Matteo sabe." },
						{ it: "Io non ho fame. Nemmeno io.", pt: "Eu não estou com fome. Nem eu." }
					]
				},
				{ type: 'h', text: "Qualche: alguns, com o singular" },
				{
					type: 'p',
					text: "*Qualche* significa “alguns”, “umas”, mas, ao contrário do português, vem sempre com o substantivo e o verbo no singular, e nunca muda: *qualche giorno* (alguns dias), *qualche amica* (algumas amigas), *c'è qualche problema* (há alguns problemas)."
				},
				{ type: 'h', text: "Visto" },
				{
					type: 'p',
					text: "*Vedere* tem particípio irregular: *visto*. Ele concorda como os outros quando vem com *lo, la, li, le* ou *ne*: *Gli stivali? Li ho visti ieri.* (As botas? Eu as vi ontem.) *La vetrina? L'ho vista.*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Um paio, due paia: plurais em -a',
			blocks: [
				{
					type: 'p',
					text: "Um pequeno grupo de palavras masculinas em *-o* faz o plural em *-a* e, no plural, vira feminino: o artigo é *le* e o adjetivo concorda no feminino. São poucas, mas muito usadas, e várias são partes do corpo que vêm em par."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il paio → le **pa**ia", pt: "o par → os pares" },
						{ it: "l'uovo → le **uo**va", pt: "o ovo → os ovos" },
						{ it: "il dito → le **di**ta", pt: "o dedo → os dedos" },
						{ it: "il braccio → le **brac**cia", pt: "o braço → os braços" },
						{ it: "il ginocchio → le gi**noc**chia", pt: "o joelho → os joelhos" },
						{ it: "il lenzuolo → le len**zuo**la", pt: "o lençol → os lençóis" }
					]
				},
				{
					type: 'p',
					text: "Por isso no diálogo se disse *le dita congelate* e *che cosa c'entrano le uova*: no plural, tudo vai para o feminino. *Le uova sono fresche*, *ho le braccia stanche*."
				},
				{
					type: 'dica',
					text: "Cuidado com *un paio di*: em italiano, quer dizer “um par” (dois), mas na fala também “uns poucos”, como no nosso “um par de vezes”. *Un paio di giorni* = uns dois dias."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Hai visto i saldi? Sì, li ho visti.", pt: "Você viu as liquidações? Sim, eu vi." },
				{ it: "Ho comprato due paia di guanti.", pt: "Comprei dois pares de luvas." },
				{ it: "Neanche Chiara ha trovato un maglione.", pt: "Nem a Chiara achou um suéter." },
				{ it: "Torno fra qualche giorno.", pt: "Volto daqui a alguns dias." },
				{ it: "Le uova sono nel frigorifero.", pt: "Os ovos estão na geladeira." },
				{ it: "Non ho le dita fredde. Neanch'io.", pt: "Não estou com os dedos frios. Nem eu." },
				{ it: "C'è qualche negozio aperto la domenica?", pt: "Há alguma loja aberta aos domingos?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Comprei dois pares de botas.", parts: ["Ho comprato due ", null, " di stivali."], answers: ["paia"] },
				{ pt: "Você viu a Chiara? Não, não vi.", parts: ["Hai ", null, " Chiara? No, non l'ho vista."], answers: ["visto"] },
				{ pt: "Tenho alguns amigos em Roma.", parts: ["Ho ", null, " amico a Roma."], answers: ["qualche"] },
				{ pt: "Estou com os dedos frios.", parts: ["Ho le ", null, " fredde."], answers: ["dita"] },
				{ pt: "Os ovos estão frescos.", parts: ["Le ", null, " sono fresche."], answers: ["uova"] }
			]
		}
	]
};

const licao41: Lesson = {
	no: 41,
	kind: 'licao',
	title: 'Dal fruttivendolo e in farmacia',
	titlePt: 'Na quitanda e na farmácia',
	lines: [
		{
			it: "Buongiorno, giovanotto! Che cosa Le do oggi?",
			pt: "Bom dia, meu jovem! O que vai ser hoje?",
			lit: "Bom dia, rapazinho! Que coisa Lhe dou hoje?",
			note: "*Le do* = dou ao senhor. *Le* é o pronome indireto de *Lei*, o tratamento de cortesia. Muitas vezes se escreve com maiúscula, para distinguir do *le* de “a ela”."
		},
		{
			it: "Un chilo di mele e mezzo chilo di mandarini, per favore.",
			pt: "Um quilo de maçãs e meio quilo de tangerinas, por favor.",
			note: "*Mezzo chilo* = meio quilo. Na frutaria se compra por quilo; na salsicharia, por *etto*, como você vai ver daqui a pouco."
		},
		{
			it: "Questi mandarini sono appena arrivati dalla Sicilia. Li assaggi!",
			pt: "Estas tangerinas acabaram de chegar da Sicília. Prove!",
			lit: "Estes mandarinos são apenas chegados da Sicília. Os prove!",
			note: "*Li assaggi* = prove-as (*Lei*). Com a forma do *Lei*, o pronome vem antes, como sempre. *Assaggiare* = provar comida (*provare* é experimentar roupa)."
		},
		{
			it: "Mmm, dolcissimi! Allora ne prendo un chilo.",
			pt: "Hum, docíssimas! Então vou levar um quilo.",
			lit: "Hum, docíssimos! Então disso pego um quilo."
		},
		{
			it: "Le serve altro?",
			pt: "Precisa de mais alguma coisa?",
			lit: "Lhe serve outro?",
			note: "*Mi serve* = preciso, me faz falta. Funciona como *piacere*: *mi serve un chilo*, *mi servono due chili*. *Le serve?* = o senhor precisa?"
		},
		{ it: "No, grazie, basta così. Quant'è?", pt: "Não, obrigado, é só isso. Quanto é?", lit: "Não, obrigado, basta assim. Quanto é?" },
		{
			it: "Buongiorno! Chi è di turno?",
			pt: "Bom dia! Quem é o próximo?",
			lit: "Bom dia! Quem é de turno?",
			sep: true,
			note: "Agora o Rafael está na *salumeria*, a loja de frios. *Chi è di turno?* = de quem é a vez?"
		},
		{
			it: "Io. Mi dà due etti di mortadella?",
			pt: "Eu. Pode me dar duzentos gramas de mortadela?",
			lit: "Eu. Me dá dois ettos de mortadela?",
			note: "*Un etto* = cem gramas. *Due etti* = duzentos gramas. É a medida de tudo que se compra fatiado ou a granel. *Mi dà...?* (o senhor me dá?) é o jeito mais simples de pedir."
		},
		{
			it: "Mortadella di Bologna, quella vera! La taglio sottile?",
			pt: "Mortadela de Bolonha, a verdadeira! Corto fininho?",
			lit: "Mortadela de Bolonha, aquela verdadeira! A corto fina?",
			note: "Este *la* é a mortadela, não o *La* de cortesia. O contexto resolve."
		},
		{
			it: "Sì, sottile. E un etto e mezzo di prosciutto crudo.",
			pt: "Sim, fininho. E cento e cinquenta gramas de presunto cru.",
			lit: "Sim, fina. E um etto e meio de presunto cru."
		},
		{
			it: "Sono centosessanta grammi: lascio?",
			pt: "Deu cento e sessenta gramas: pode ser?",
			lit: "São cento e sessenta gramas: deixo?",
			note: "Quando a fatia passa um pouco do peso pedido, o *salumiere* pergunta *lascio?* (deixo assim?). A resposta quase sempre é sim."
		},
		{ it: "Sì, va benissimo.", pt: "Sim, está ótimo." },
		{
			it: "Buonasera. La posso aiutare?",
			pt: "Boa tarde. Posso ajudar o senhor?",
			lit: "Boa tarde. A posso ajudar?",
			sep: true,
			note: "Na farmácia. *La posso aiutare?* = posso ajudá-lo? *La* é o pronome direto de *Lei*. É feminino mesmo quando se fala com um homem, porque concorda com *Lei*."
		},
		{
			it: "Sì, cerco una crema per le mani. La mia coinquilina me l'ha chiesta: ha la pelle molto secca.",
			pt: "Sim, estou procurando um creme para as mãos. A minha colega de apartamento me pediu: ela tem a pele muito seca.",
			lit: "Sim, procuro um creme para as mãos. A minha coinquilina mo pediu: tem a pele muito seca.",
			note: "*Me l'ha chiesta* = pediu-o a mim: *mi* vira *me* antes de *lo, la*. São os pronomes combinados, que você vai estudar na lição 50; por ora, só reconheça."
		},
		{
			it: "Questa è ottima: non è grassa e lascia la pelle morbida.",
			pt: "Este é ótimo: não é gorduroso e deixa a pele macia.",
			lit: "Esta é ótima: não é gorda e deixa a pele mórbida.",
			note: "*Morbido* = macio, suave. Nada a ver com o nosso “mórbido”. Um falso amigo clássico."
		},
		{
			it: "Morbida? Scusi, ma in portoghese «mórbido» vuol dire quasi «malato»!",
			pt: "Mórbida? Desculpe, mas em português “mórbido” quer dizer quase “doente”!"
		},
		{
			it: "Ah, no! Qui morbido è il contrario di duro, come un cuscino.",
			pt: "Ah, não! Aqui *morbido* é o contrário de duro, como um travesseiro.",
			note: "*Il cuscino* é o travesseiro, e também a almofada."
		},
		{
			it: "Allora la prendo. E anche uno spazzolino, morbido naturalmente!",
			pt: "Então vou levar. E também uma escova de dentes, macia, claro!",
			lit: "Então a pego. E também uma escovinha, mórbida naturalmente!",
			note: "*Lo spazzolino* (de *spazzola*, escova, + *-ino*) é a escova de dentes."
		},
		{
			it: "Ecco a Lei. La ringrazio, e buona serata!",
			pt: "Aqui está. Muito obrigada, e boa noite!",
			lit: "Eis ao senhor. O agradeço, e boa noitada!",
			note: "*La ringrazio* = agradeço ao senhor. Em italiano *ringraziare* pede pronome direto: *La ringrazio*, *ti ringrazio*. *Buona serata* é a despedida da noite, como *buona giornata* (lição 4) é a do dia."
		},
		{
			it: "Signor Bianchi, La chiamo domani e Le mando i documenti.",
			pt: "Senhor Bianchi, eu ligo para o senhor amanhã e lhe mando os documentos.",
			lit: "Senhor Bianchi, A chamo amanhã e Lhe mando os documentos.",
			sep: true,
			note: "*La chiamo* (direto: *chiamare* qualcuno), *Le mando* (indireto: *mandare a* qualcuno)."
		},
		{
			it: "Mi dà tre etti di parmigiano? Ecco a Lei: sono trecentoventi grammi.",
			pt: "Pode me dar trezentos gramas de parmesão? Aqui está: deu trezentos e vinte gramas."
		},
		{
			it: "Questo cuscino è morbidissimo.",
			pt: "Este travesseiro é macíssimo."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'La e Le: o senhor, a senhora',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 2 você trata desconhecidos por *Lei*, com o verbo na terceira pessoa. Agora faltavam os pronomes átonos desse tratamento, e eles são os mesmos de “ela”: *La* (direto) e *Le* (indireto). Na escrita cuidada, vão com maiúscula, para mostrar a cortesia."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La posso aiutare?", pt: "Posso ajudar o senhor? (*aiutare* qualcuno: direto)" },
						{ it: "La ringrazio.", pt: "Agradeço ao senhor. (*ringraziare* qualcuno: direto)" },
						{ it: "La chiamo domani.", pt: "Ligo para o senhor amanhã. (*chiamare* qualcuno: direto)" },
						{ it: "Che cosa Le do?", pt: "O que dou ao senhor? (*dare a*: indireto)" },
						{ it: "Le serve altro?", pt: "O senhor precisa de mais algo? (*servire a*: indireto)" },
						{ it: "Le piace?", pt: "O senhor gosta? (*piacere a*: indireto)" }
					]
				},
				{
					type: 'p',
					text: "Repare que *La* e *Le* valem para homens e mulheres. O dono da frutaria diz *Le do* ao Rafael sem problema nenhum: a forma concorda com *Lei*, não com a pessoa."
				},
				{
					type: 'dica',
					text: "Alguns verbos são diretos em italiano e indiretos em português, e vice-versa. *Ringraziare* e *aiutare* são diretos (*La ringrazio*, *ti aiuto*); *telefonare* é indireto (*Le telefono*). Quando tiver dúvida, pergunte-se se o verbo italiano pede *a* antes da pessoa."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Etti, grammi e as lojas do bairro',
			blocks: [
				{
					type: 'p',
					text: "Na Itália, o supermercado convive bem com as lojinhas de bairro: o *fruttivendolo* (frutas e verduras), a *salumeria* ou *alimentari* (frios, queijos, pão, um pouco de tudo), o *forno* (padaria), a *macelleria* (açougue). Em Bolonha, no Quadrilatero, perto da Piazza Maggiore, elas se espremem em ruelas medievais."
				},
				{ type: 'h', text: "Como pedir as quantidades" },
				{
					type: 'exemplos',
					items: [
						{ it: "un **et**to", pt: "cem gramas", pron: "un ét-to" },
						{ it: "due **et**ti e **mez**zo", pt: "duzentos e cinquenta gramas" },
						{ it: "**mez**zo **chi**lo", pt: "meio quilo" },
						{ it: "tre**cen**to **gram**mi", pt: "trezentos gramas" },
						{ it: "un **chi**lo e **mez**zo", pt: "um quilo e meio" }
					]
				},
				{
					type: 'p',
					text: "No *fruttivendolo* tradicional, não se toca na fruta: quem escolhe é o vendedor. No supermercado, ao contrário, você mesmo escolhe, mas usando as luvinhas de plástico que ficam ao lado das balanças. Pegar fruta com a mão nua é falta de educação."
				},
				{ type: 'h', text: "A farmácia" },
				{
					type: 'p',
					text: "A *farmacia*, com sua cruz verde iluminada, vende remédios, cremes e produtos de higiene, e o farmacêutico dá conselhos de verdade. Não é uma loja de conveniência: doce e refrigerante não se compram lá. Para cosméticos e produtos sem receita, existe também a *parafarmacia*."
				},
				{
					type: 'dica',
					text: "Falso amigo do dia: *morbido* = macio (*un cuscino morbido*, *la pelle morbida*). O nosso “mórbido”, doentio, em italiano é *morboso*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Mi dà due etti di prosciutto, per favore?", pt: "Pode me dar duzentos gramas de presunto, por favor?" },
				{ it: "Signora, La posso aiutare?", pt: "Senhora, posso ajudá-la?" },
				{ it: "Le serve altro? No, grazie, basta così.", pt: "O senhor precisa de mais alguma coisa? Não, obrigado, é só isso." },
				{ it: "Questi mandarini sono dolcissimi.", pt: "Estas tangerinas são docíssimas." },
				{ it: "Mi serve uno spazzolino morbido.", pt: "Preciso de uma escova de dentes macia." },
				{ it: "La ringrazio, dottore. Buona serata!", pt: "Obrigado, doutor. Boa noite!" },
				{ it: "Compro mezzo chilo di mele e un etto di parmigiano.", pt: "Compro meio quilo de maçãs e cem gramas de parmesão." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O que dou à senhora hoje?", parts: ["Che cosa ", null, " do oggi?"], answers: ["le"] },
				{ pt: "Posso ajudar o senhor?", parts: [null, " posso aiutare?"], answers: ["la"] },
				{ pt: "Duzentos gramas de mortadela.", parts: ["Due ", null, " di mortadella."], answers: ["etti"] },
				{ pt: "Este travesseiro é muito macio.", parts: ["Questo cuscino è molto ", null, "."], answers: ["morbido"] },
				{ pt: "Preciso de dois quilos de maçãs.", parts: ["Mi ", null, " due chili di mele."], answers: ["servono"] }
			]
		}
	]
};

const licao42: Lesson = {
	no: 42,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Os pronomes átonos: diretos e indiretos',
			blocks: [
				{
					type: 'p',
					text: "Mais uma semana! Desta vez o grande tema foram os pronomes pequenos, os que se apoiam no verbo. Você já tinha os diretos; nas lições 36 a 41 chegaram os indiretos e o tratamento de cortesia. Veja tudo junto."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "mi / mi", pt: "me / a mim" },
						{ it: "ti / ti", pt: "te / a ti, a você" },
						{ it: "lo, la / gli, le", pt: "o, a / a ele, a ela" },
						{ it: "La / Le", pt: "o senhor, a senhora / ao senhor, à senhora" },
						{ it: "ci / ci", pt: "nos / a nós" },
						{ it: "vi / vi", pt: "vos, vocês / a vocês" },
						{ it: "li, le / gli (loro)", pt: "os, as / a eles, a elas" }
					]
				},
				{
					type: 'p',
					text: "Só a terceira pessoa tem formas diferentes. O direto responde a “o quê?” ou “quem?”: *la stampante la porti tu* (lição 38). O indireto responde a “para quem?”, “a quem?”: *gli regalo un chilo di caffè* (lição 36), *le piace il rosa* (lição 39)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "L'ho conosciuta due anni fa.", pt: "Eu a conheci dois anos atrás. (direto, lição 37)" },
						{ it: "Che cosa le scrivi?", pt: "O que você vai escrever para ela? (indireto, lição 37)" },
						{ it: "Gli ho già mandato un messaggio.", pt: "Já mandei uma mensagem para eles. (indireto plural, lição 37)" },
						{ it: "Uffa! Va bene, li prendo.", pt: "Ai, ai! Tudo bem, vou levar. (direto plural, lição 39)" }
					]
				},
				{
					type: 'dica',
					text: "No passato, o particípio concorda com o direto (*l'ho conosciuta*, *li ho visti*), mas não com o indireto (*le ho telefonato*, *gli ho mandato*)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Verbos que pedem o indireto',
			blocks: [
				{
					type: 'p',
					text: "O indireto aparece com verbos de dar, dizer e mandar alguma coisa *a* alguém: *regalare, dare, dire, scrivere, mandare, spedire, telefonare*. E com um grupo de verbos que funcionam “ao contrário” do português, em que a coisa é o sujeito e a pessoa é o pronome indireto."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi piace quello blu.", pt: "Eu gosto daquele azul. (lição 39)" },
						{ it: "I colori scuri mi piacciono tutti.", pt: "Gosto de todas as cores escuras. (lição 39)" },
						{ it: "Ti sta benissimo.", pt: "Fica ótimo em você. (lição 39)" },
						{ it: "Le serve altro?", pt: "O senhor precisa de mais alguma coisa? (lição 41)" },
						{ it: "Le conviene andare lì.", pt: "É melhor a senhora ir para lá. (lição 38)" }
					]
				},
				{
					type: 'p',
					text: "Com esses verbos, o número do verbo depende da coisa: *mi piace* / *mi piacciono*, *mi serve* / *mi servono*. E alguns verbos mudam de lado entre as duas línguas: *telefonare a* (indireto: *le telefono*), mas *chiamare*, *aiutare* e *ringraziare* (diretos: *la chiamo*, *l'aiuto*, *La ringrazio*)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Onde fica o pronome',
			blocks: [
				{
					type: 'p',
					text: "Com o verbo conjugado, o pronome vem antes: *lo prendo*, *gli telefono*, *non la puoi lasciare*. Com o infinitivo, gruda no fim, e o infinitivo perde o *-e*: *portarla*, *comprarlo*, *chiamarmi*. Com *potere*, *dovere* e *volere* + infinitivo, as duas posições valem (lição 38)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non posso portarla a piedi.", pt: "Não posso levá-la a pé. (lição 38)" },
						{ it: "Non ci possiamo entrare? Non possiamo entrarci?", pt: "Não podemos entrar lá? (lição 38)" }
					]
				},
				{ type: 'h', text: "Ecco + pronome" },
				{
					type: 'p',
					text: "*Ecco* também aceita o pronome grudado no fim, como um infinitivo: *eccolo* (aqui está ele), *eccola*, *eccoli*, *eccole*, *eccomi* (aqui estou), *eccoci* (aqui estamos). Com *ne*, fica *eccone*: *Mandarini? Eccone un chilo!* (Tangerinas? Aqui está um quilo!)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Dov'è la busta? Eccola!", pt: "Onde está o envelope? Aqui está!" },
						{ it: "I guanti? Eccoli.", pt: "As luvas? Aqui estão." },
						{ it: "Uova? Eccone sei.", pt: "Ovos? Aqui estão seis." }
					]
				},
				{ type: 'h', text: "Pronúncia: tudo numa palavra só" },
				{
					type: 'p',
					text: "Os pronomes átonos não têm força própria. Antes do verbo, soam como uma sílaba a mais dele: *lo prendo* soa “loprêndo”, *gli telefono* soa “lhiteléfono”. Depois, a força do verbo não se move: *portarla* é “por-tár-la”, *eccolo* é “ék-ko-lo”, com a força lá atrás."
				},
				{
					type: 'dica',
					text: "Treine em voz alta: *lo prendo, la prendo, li prendo, le prendo; eccolo, eccola, eccoli, eccole*. Sem pausa entre o pronome e o verbo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os pronomes tônicos',
			blocks: [
				{
					type: 'p',
					text: "Além dos átonos, existem os pronomes tônicos, que têm força própria e ficam sozinhos. São quase os mesmos do sujeito: *me, te, lui, lei, Lei, noi, voi, loro*. Só *io* e *tu* mudam: viram *me* e *te*."
				},
				{
					type: 'p',
					text: "Eles aparecem depois de preposição (*per te*, *con me*, *da lui*, *a loro*) e quando se quer dar ênfase ou fazer contraste: *a me piace il blu, a te no*. Também servem sozinhos, como resposta: *Chi è l'ultimo? Io. Cerchi me? Sì, proprio te.*"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Questo regalo è per te.", pt: "Este presente é para você." },
						{ it: "Vieni con me in farmacia?", pt: "Você vem comigo à farmácia?" },
						{ it: "A me piace il rosa, a lui no.", pt: "Eu gosto de rosa, ele não." },
						{ it: "Stasera ceniamo da loro.", pt: "Hoje à noite vamos jantar na casa deles." }
					]
				},
				{
					type: 'dica',
					text: "Nunca use os dois juntos: ou *mi piace*, ou *a me piace*. E repare que o italiano não tem um “comigo” colado: é *con me*, *con te*, separado."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Expressões das lições 36 a 41. Leia em voz alta e lembre da cena em que cada uma apareceu."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Auguri! / Tanti auguri!", pt: "Parabéns! Felicidades!" },
						{ it: "Cioè?", pt: "Como assim? Qual?" },
						{ it: "Chi è l'ultimo?", pt: "Quem é o último da fila?" },
						{ it: "Chi è di turno?", pt: "De quem é a vez?" },
						{ it: "Hai ragione.", pt: "Você tem razão." },
						{ it: "Che cosa vuol dire?", pt: "O que quer dizer?" },
						{ it: "Fa un freddo cane!", pt: "Está um frio de rachar!" },
						{ it: "Boh!", pt: "Sei lá!" },
						{ it: "Uffa!", pt: "Ai, que saco! (impaciência)" },
						{ it: "Ti sta benissimo.", pt: "Fica ótimo em você." },
						{ it: "Che c'entra?", pt: "O que tem a ver?" },
						{ it: "Basta così.", pt: "Chega, é só isso." },
						{ it: "Meglio un uovo oggi che una gallina domani.", pt: "Mais vale um pássaro na mão do que dois voando." },
						{ it: "Ecco a Lei. / La ringrazio.", pt: "Aqui está. / Obrigado. (formal)" },
						{ it: "Buona serata!", pt: "Boa noite! (na despedida)" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém fizer aniversário, mande um *Tanti auguri!* em vez do parabéns de sempre."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa regali a tua madre? Le regalo una sciarpa.", pt: "O que você vai dar para a sua mãe? Vou dar um cachecol para ela." },
				{ it: "Il pacco che ho spedito tre giorni fa è già arrivato.", pt: "O pacote que eu mandei três dias atrás já chegou." },
				{ it: "La macchina? Non posso lasciarla qui: c'è divieto di sosta.", pt: "O carro? Não posso deixá-lo aqui: é proibido estacionar." },
				{ it: "A me piacciono i guanti rosa, a lui quelli blu.", pt: "Eu gosto das luvas rosa; ele, das azuis." },
				{ it: "Neanche Matteo riesce a trovare le chiavi.", pt: "Nem o Matteo consegue achar as chaves." },
				{ it: "Signora, La ringrazio. Le serve altro?", pt: "Senhora, obrigado. Precisa de mais alguma coisa?" },
				{ it: "Ho comprato qualche uovo e due etti di mortadella.", pt: "Comprei alguns ovos e duzentos gramas de mortadela." },
				{ it: "Chi parte domani? Parto io, con lei.", pt: "Quem viaja amanhã? Viajo eu, com ela." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Ligo para ele hoje à noite.", parts: [null, " telefono stasera."], answers: ["gli"] },
				{ pt: "As chaves? Aqui estão!", parts: ["Le chiavi? ", null, "!"], answers: ["eccole"] },
				{ pt: "Quero comprá-la amanhã.", parts: ["Voglio ", null, " domani."], answers: ["comprarla"] },
				{ pt: "Este presente é para você.", parts: ["Questo regalo è per ", null, "."], answers: ["te"] },
				{ pt: "Nós gostamos dos filmes italianos.", parts: ["Ci ", null, " i film italiani."], answers: ["piacciono"] }
			]
		}
	]
};

export const unidade: Unit = { no: 6, title: 'Compras e recados', lessons: [36, 37, 38, 39, 40, 41, 42] };

export const licoes: Lesson[] = [licao36, licao37, licao38, licao39, licao40, licao41, licao42];
