import type { Lesson, Unit } from '../types.ts';

// Lições 92–98: Roma com amigos. O Rafael liga para a casa do Valerio, colega romano do intercâmbio em Recife,
// e a mãe dele, Rita, convida os irmãos para o almoço de domingo; show de jazz em Trastevere com o Tommaso,
// irmão do Valerio, ao piano; almoço em família em Testaccio com o pai Sergio (taxista, torcedor da Lazio) e a
// Ilaria (namorada do Valerio, jornalista de cultura); Fellini no cinema e o ciúme do Rafael (o Tommaso está
// caidinho pela Larissa); o derby Roma × Lazio; a volta a Bolonha e a última noite da Larissa antes de voltar
// ao Brasil. Tema do bloco: o subjuntivo. Ver docs/agents/curso-assimil-mapa.md.

const licao92: Lesson = {
	no: 92,
	kind: 'licao',
	title: "C'è Valerio?",
	titlePt: 'O Valerio está?',
	lines: [
		{
			it: "Il cellulare di Valerio è spento. Provo a chiamarlo a casa: ho ancora il numero del fisso.",
			pt: "O celular do Valerio está desligado. Vou tentar ligar para a casa dele: ainda tenho o número do fixo.",
			lit: "O celular de Valerio é apagado. Provo a chamá-lo a casa: tenho ainda o número do fixo.",
			note: "Ainda em Roma. O Valerio é romano e foi colega de turma do Rafael durante um semestre de intercâmbio em Recife, três anos atrás; passou um mês hospedado na casa da família dele. *Spento* = desligado (de *spegnere*, apagar, desligar). *Il fisso* = o telefone fixo."
		},
		{
			it: "Valerio? Il ragazzo romano che è stato da noi a Recife? Io avevo sedici anni!",
			pt: "O Valerio? O rapaz romano que ficou lá em casa, em Recife? Eu tinha dezesseis anos!",
			note: "*Da noi* = na nossa casa (lição 30). *Avevo*: o imperfeito para descrever como as coisas eram (lição 63)."
		},
		{
			it: "Proprio lui. Zitta, squilla... Pronto, buongiorno! C'è Valerio?",
			pt: "Ele mesmo. Psiu, está chamando... Alô, bom dia! O Valerio está?",
			lit: "Próprio ele. Calada, toca... Pronto, bom dia! Há Valerio?",
			note: "*C'è...?* é o jeito de perguntar ao telefone se alguém está: *C'è Valerio?* = o Valerio está? *Zitto, zitta* = calado, calada: “psiu!”. *Squillare* = tocar (o telefone)."
		},
		{
			it: "No, Valerio non c'è, è fuori. È uscito poco fa. Chi lo cerca?",
			pt: "Não, o Valerio não está, saiu. Saiu agora há pouco. Quem quer falar com ele?",
			lit: "Não, Valerio não há, é fora. É saído pouco faz. Quem o procura?",
			note: "Atende a mãe do Valerio, a signora Rita Proietti. *Essere fuori* = estar fora, ter saído (de casa, do trabalho). *Poco fa* = agora há pouco (lição 37). *Chi lo cerca?* = quem o procura?, a pergunta educada de quem atende."
		},
		{
			it: "Sono Rafael, un amico brasiliano. Valerio è stato a casa nostra, a Recife, tre anni fa.",
			pt: "É o Rafael, um amigo brasileiro. O Valerio ficou na nossa casa, em Recife, três anos atrás.",
			lit: "Sou Rafael, um amigo brasileiro. Valerio é estado a casa nossa, a Recife, três anos faz.",
			note: "Ao telefone, *sono Rafael* = é o Rafael (lição 16)."
		},
		{
			it: "Rafael! Il ragazzo del quale Valerio parla sempre! Quello della mamma che fa quel dolce arrotolato... come si chiama?",
			pt: "Rafael! O rapaz de quem o Valerio sempre fala! Aquele da mãe que faz aquele doce enroladinho... como se chama?",
			lit: "Rafael! O rapaz do qual Valerio fala sempre! Aquele da mamãe que faz aquele doce enrolado... como se chama?",
			note: "*Del quale* = do qual, de quem. *Il quale* é um relativo, como *che*, mas muda com o gênero e o número (*il quale, la quale, i quali, le quali*) e se junta à preposição: *del quale, alla quale, con i quali*. *Arrotolato* = enrolado."
		},
		{
			it: "Il bolo de rolo! Sì, sono io. Sono a Roma con mia sorella per qualche giorno.",
			pt: "O bolo de rolo! Sim, sou eu. Estou em Roma com a minha irmã por alguns dias.",
			note: "*Qualche* + singular = alguns, algumas (lição 40)."
		},
		{
			it: "Che bella sorpresa! Valerio è in palestra, e il cellulare l'ha lasciato in carica in camera sua. Torna verso l'una.",
			pt: "Que surpresa boa! O Valerio está na academia, e o celular ele deixou carregando no quarto. Volta lá pela uma.",
			lit: "Que bela surpresa! Valerio é em academia, e o celular o deixou em carga em quarto seu. Volta por volta da uma.",
			note: "*In carica* = carregando (a bateria). *Il cellulare l'ha lasciato*: o objeto na frente, retomado pelo pronome, como em *il conto lo mando* (lição 87)."
		},
		{
			it: "Allora può dirgli di richiamarmi? Il numero è quello dal quale La sto chiamando.",
			pt: "Então a senhora pode pedir para ele me ligar de volta? O número é este de onde estou ligando para a senhora.",
			lit: "Então pode dizer-lhe de rechamar-me? O número é aquele do qual A estou chamando.",
			note: "*Richiamare* = ligar de volta. *Dal quale* = do qual: *da* + *il quale*. Também se diz *da cui*, com o relativo *cui*, que nunca muda: *il numero da cui chiamo*. *La sto chiamando*: o *La* de cortesia (lição 41)."
		},
		{
			it: "Certo. Anzi, senti: domenica venite a pranzo da noi, tu e tua sorella. Non accetto un no!",
			pt: "Claro. Aliás, escuta: domingo vocês vêm almoçar aqui em casa, você e a sua irmã. Não aceito um não!",
			lit: "Certo. Ao contrário, ouve: domingo vindes a almoço de nós, tu e tua irmã. Não aceito um não!",
			note: "A signora passa logo para o *tu*: para ela, o Rafael é um amigo do filho. *Anzi* = aliás, ou melhor (lição 74)."
		},
		{
			it: "Volentieri, signora, grazie! Ma non vorremmo disturbare...",
			pt: "Com prazer, senhora, obrigado! Mas não queremos incomodar...",
			lit: "De bom grado, senhora, obrigado! Mas não quereríamos incomodar...",
			note: "*Volentieri* = com prazer, de bom grado: o jeito clássico de aceitar um convite. *Non vorremmo* é o condicional de cortesia (lição 80)."
		},
		{
			it: "Ma quale disturbo! Tua madre ha dato da mangiare a mio figlio per un mese intero. Adesso è il nostro turno!",
			pt: "Que incômodo que nada! A sua mãe deu de comer ao meu filho um mês inteiro. Agora é a nossa vez!",
			lit: "Mas qual incômodo! Tua mãe deu de comer a meu filho por um mês inteiro. Agora é o nosso turno!",
			note: "*Ma quale...!* repete a palavra do outro para recusá-la: *Ma quale disturbo!* = que incômodo que nada! *Il turno* = a vez."
		},
		{
			it: "Allora? Che ha detto?",
			pt: "E aí? O que ela disse?",
			note: "A Larissa, assim que o Rafael desliga."
		},
		{
			it: "Che Valerio è fuori, che domenica pranziamo da loro e che il menu la signora l'ha già deciso.",
			pt: "Que o Valerio saiu, que domingo a gente almoça na casa deles e que o cardápio a senhora já decidiu.",
			note: "*Pranzare* = almoçar; *cenare* = jantar."
		},
		{
			it: "La signora della quale Valerio diceva: «Mia madre cucina per un reggimento»?",
			pt: "A senhora de quem o Valerio dizia: “Minha mãe cozinha para um regimento”?",
			note: "*Della quale*: agora no feminino, porque retoma *la signora*. Com *cui*, que não muda: *la signora di cui Valerio parlava*."
		},
		{
			it: "Esatto. Domenica mattina, niente colazione!",
			pt: "Exato. Domingo de manhã, nada de café da manhã!"
		},
		{
			it: "Pronto, c'è Chiara? No, non c'è: è uscita poco fa.",
			pt: "Alô, a Chiara está? Não, não está: saiu agora há pouco.",
			sep: true
		},
		{
			it: "La ragazza con la quale studio è di Napoli.",
			pt: "A moça com quem eu estudo é de Nápoles."
		},
		{
			it: "Questo è il libro di cui ti ho parlato.",
			pt: "Este é o livro de que eu te falei.",
			note: "*Di cui* = de que, do qual: muito usado com *parlare di*."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Ao telefone',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 16 você atende com *Pronto?* e se apresenta com *sono...*. Hoje o Rafael ligou procurando alguém que não estava. Estas são as frases dessa conversa:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "C'è Va**le**rio? / C'è la si**gno**ra Pro**iet**ti?", pt: "O Valerio está? / A senhora Proietti está?" },
						{ it: "Sì, te lo **pas**so.", pt: "Está, vou passar para você." },
						{ it: "No, non c'è: è **fuo**ri.", pt: "Não, não está: saiu." },
						{ it: "Chi lo **cer**ca? / Chi **par**la?", pt: "Quem quer falar com ele? / Quem fala?" },
						{ it: "**Vuo**le la**scia**re un mes**sag**gio?", pt: "Quer deixar recado?" },
						{ it: "Gli **di**co di ri**chia**marti.", pt: "Eu peço para ele te ligar de volta." }
					]
				},
				{
					type: 'p',
					text: "*Essere fuori* é estar fora de casa ou do trabalho: *il dottore è fuori fino alle tre*. Já *fuori* sozinho é só “fora”: *ti aspetto fuori* (te espero lá fora). O celular pode estar *spento* (desligado), *scarico* (sem bateria) ou *in carica* (carregando). E se você discar errado, vai ouvir *Ha sbagliato numero* (foi engano)."
				},
				{
					type: 'dica',
					text: "Na Itália é comum morar com os pais até os trinta anos, ou mais. Por isso o fixo da família ainda serve para achar alguém. Quem atende costuma perguntar *Chi lo cerca?*: diga o nome e de onde conhece a pessoa."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Il quale e cui',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 37 você liga frases com o relativo *che*: *la sciarpa che ho comprato*. O *che* não muda, mas também não aceita preposição antes dele. Quando o relativo vem depois de uma preposição (de quem, com quem, do qual), o italiano usa *cui* ou *il quale*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il ra**gaz**zo del **qua**le **par**la **sem**pre", pt: "o rapaz de quem ele sempre fala" },
						{ it: "il ra**gaz**zo di **cui** **par**la **sem**pre", pt: "a mesma coisa, com *cui*" },
						{ it: "la ra**gaz**za con la **qua**le stu**dio** / con **cui** stu**dio**", pt: "a moça com quem eu estudo" },
						{ it: "gli a**mi**ci ai **qua**li ho **scrit**to / a **cui** ho **scrit**to", pt: "os amigos para quem escrevi" }
					]
				},
				{
					type: 'p',
					text: "*Il quale* concorda com a palavra que retoma e se junta à preposição como qualquer artigo: *del quale, della quale, dei quali, delle quali*; *al quale, dal quale, con la quale*. *Cui* não muda nunca e é o mais comum na conversa. *Il quale* soa um pouco mais cuidado, mas ajuda quando é preciso deixar claro de quem se fala, porque mostra o gênero e o número."
				},
				{
					type: 'dica',
					text: "Sem preposição, fique com *che*: *il ragazzo che chiama*. E guarde *di cui* para *parlare di*: *il libro di cui ti ho parlato* (o livro de que eu te falei)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Pronto, c'è Matteo? No, è fuori.", pt: "Alô, o Matteo está? Não, saiu." },
				{ it: "Valerio è uscito poco fa.", pt: "O Valerio saiu agora há pouco." },
				{ it: "Chi lo cerca? Sono un amico di Bologna.", pt: "Quem quer falar com ele? É um amigo de Bolonha." },
				{ it: "Questo è il ristorante di cui ti ho parlato.", pt: "Este é o restaurante de que eu te falei." },
				{ it: "La ragazza con la quale lavoro è napoletana.", pt: "A moça com quem eu trabalho é napolitana." },
				{ it: "Domenica venite a pranzo da noi?", pt: "Domingo vocês vêm almoçar na nossa casa?" },
				{ it: "Il cellulare è spento: l'ha lasciato in carica.", pt: "O celular está desligado: ele deixou carregando." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Alô, o Valerio está?", parts: ["Pronto, ", null, " Valerio?"], answers: ["c'è"] },
				{ pt: "Ele saiu agora há pouco.", parts: ["È uscito ", null, " fa."], answers: ["poco"] },
				{ pt: "O rapaz do qual o Valerio sempre fala.", parts: ["Il ragazzo del ", null, " Valerio parla sempre."], answers: ["quale"] },
				{ pt: "O livro de que eu te falei.", parts: ["Il libro di ", null, " ti ho parlato."], answers: ["cui"] },
				{ pt: "A Chiara não está: está fora até as seis.", parts: ["Chiara non c'è: è ", null, " fino alle sei."], answers: ["fuori"] }
			]
		}
	]
};

const licao93: Lesson = {
	no: 93,
	kind: 'licao',
	title: 'Ti va di venire?',
	titlePt: 'Você topa vir?',
	lines: [
		{
			it: "Rafa! Mia madre mi ha detto tutto. Sei a Roma e non mi chiami?",
			pt: "Rafa! A minha mãe me contou tudo. Você está em Roma e não me liga?",
			lit: "Rafa! Minha mãe me disse tudo. Estás a Roma e não me chamas?",
			note: "Uma da tarde: o Valerio, de volta da academia, liga para o Rafael."
		},
		{
			it: "Siamo arrivati dieci giorni fa, ma abbiamo già avuto più avventure che in sei mesi a Bologna!",
			pt: "A gente chegou dez dias atrás, mas já teve mais aventuras do que em seis meses em Bolonha!",
			note: "*Più... che*: na comparação entre duas expressões com preposição, *che* (lição 60)."
		},
		{
			it: "Me lo immagino. Senti, stasera che fate? Ti va di venire a un concerto?",
			pt: "Imagino. Escuta, o que vocês vão fazer hoje à noite? Topa ir a um show?",
			lit: "Mo-lo imagino. Ouve, esta noite que fazeis? Te vai de vir a um concerto?",
			note: "*Ti va di* + infinitivo = você está a fim de, você topa: *ti va di uscire?*. Sem verbo, com uma coisa: *ti va un caffè?* (topa um café?). Com vocês, *vi va*. *Il concerto* = o show, o concerto, de qualquer música."
		},
		{
			it: "Mi va, mi va! Chi suona?",
			pt: "Topo, topo! Quem vai tocar?",
			lit: "Me vai, me vai! Quem toca?",
			note: "A resposta: *mi va* (topo) ou *non mi va* (não estou a fim)."
		},
		{
			it: "Un trio jazz, in un locale di Trastevere. Al pianoforte c'è Tommaso, mio fratello.",
			pt: "Um trio de jazz, num bar de Trastevere. No piano está o Tommaso, o meu irmão.",
			note: "*Il locale* = o bar, a casa noturna, o estabelecimento. Trastevere, “do outro lado do Tibre”, é o bairro das ruelas e da vida noturna de Roma."
		},
		{
			it: "Tommaso? Il ragazzino delle foto, che giocava sempre ai videogiochi?",
			pt: "O Tommaso? O garotinho das fotos, que vivia jogando videogame?",
			lit: "Tommaso? O rapazinho das fotos, que jogava sempre aos videojogos?",
			note: "*Giocare a* = jogar, brincar: *giocare ai videogiochi, a carte, a calcio* (lição 80). O jogo vem com *a* + artigo."
		},
		{
			it: "Ormai ha ventidue anni ed è più alto di me! Gioca ancora a calcetto con me il giovedì, ma adesso suona il piano tutte le sere.",
			pt: "Agora ele tem vinte e dois anos e é mais alto que eu! Ainda joga futebol de salão comigo às quintas, mas agora toca piano todas as noites.",
			note: "*Suonare* = tocar um instrumento, com artigo: *suonare il piano, la chitarra*. Em italiano, como em português, tocar e jogar são verbos diferentes: *suonare* para música, *giocare* para jogo e esporte com bola. *Il calcetto* = o futebol de salão, de cinco. *Ormai* = a esta altura, agora já."
		},
		{
			it: "Allora veniamo. A che ora ci vediamo?",
			pt: "Então a gente vai. A que horas a gente se encontra?",
			note: "*Veniamo*: com *venire*, porque o Rafael vai até onde o Valerio vai estar (lição 21)."
		},
		{
			it: "Alle nove, davanti al locale. Viene anche Ilaria, a meno che non la facciano lavorare fino a tardi.",
			pt: "Às nove, na frente do bar. A Ilaria também vem, a não ser que a façam trabalhar até tarde.",
			note: "A Ilaria é a namorada do Valerio, jornalista. *A meno che* = a não ser que, e pede um modo verbal novo, o **congiuntivo** (o subjuntivo): *facciano* = (que) façam. Você já conhece esta forma: no singular, é igual ao imperativo de *Lei*, *faccia* (lição 78). O *non* depois de *a meno che* não nega nada."
		},
		{
			it: "Rafa, chiedigli se lì si mangia! Non posso ascoltare il jazz a stomaco vuoto.",
			pt: "Rafa, pergunta se lá tem comida! Não dá para ouvir jazz de estômago vazio.",
			lit: "Rafa, pergunta-lhe se lá se come! Não posso escutar o jazz a estômago vazio.",
			note: "*Chiedigli* = pergunte a ele: imperativo + *gli* (lição 72). *A stomaco vuoto* = de estômago vazio."
		},
		{
			it: "Ho sentito! Dille che fanno dei supplì buonissimi. A meno che Tommaso non li mangi tutti prima di noi.",
			pt: "Ouvi! Diz para ela que fazem uns supplì ótimos. A não ser que o Tommaso coma todos antes da gente.",
			lit: "Ouvi! Diz-lhe que fazem dos supplì boníssimos. A menos que Tommaso não os coma todos antes de nós.",
			note: "*Dille* = diga a ela: *di'* + *le*, com a consoante dobrada (lição 72). *Il supplì* é o bolinho de arroz frito com mussarela no meio, o salgado romano por excelência. *Mangi*: subjuntivo de *mangiare*, igual ao imperativo de *Lei*."
		},
		{
			it: "Perfetto. Ah, e domenica siamo a pranzo da voi: tua madre non accetta un no.",
			pt: "Perfeito. Ah, e domingo a gente almoça na casa de vocês: a sua mãe não aceita um não."
		},
		{
			it: "Lo so. Preparatevi: si comincia a mezzogiorno e si finisce alle cinque. A meno che non scappiate prima!",
			pt: "Eu sei. Preparem-se: começa ao meio-dia e termina às cinco. A não ser que vocês fujam antes!",
			lit: "O sei. Preparai-vos: se começa a meio-dia e se acaba às cinco. A menos que não fujais antes!",
			note: "*Scappiate*: subjuntivo de *scappare* (fugir, escapar) com *voi*. Nos três grupos de verbos, o *voi* do subjuntivo termina em *-iate*."
		},
		{
			it: "Scappare dal pranzo di tua madre? Neanche per sogno!",
			pt: "Fugir do almoço da sua mãe? Nem pensar!",
			note: "*Neanche per sogno!* = nem sonhando!, nem pensar! (lição 78)."
		},
		{
			it: "Ciao! Siete voi i brasiliani? Valerio dice che giocate tutti a calcio e suonate tutti la chitarra.",
			pt: "Oi! Vocês são os brasileiros? O Valerio diz que vocês todos jogam futebol e todos tocam violão.",
			note: "À noite, no intervalo do show, o Tommaso vem até a mesa. *La chitarra* = o violão e a guitarra."
		},
		{
			it: "Io non gioco a calcio e non so suonare niente. Però ballo!",
			pt: "Eu não jogo futebol e não sei tocar nada. Mas danço!",
			note: "*So suonare* = sei tocar: *sapere* + infinitivo para uma habilidade."
		},
		{
			it: "Allora il prossimo pezzo è per te: un samba in versione jazz!",
			pt: "Então a próxima música é para você: um samba em versão jazz!",
			note: "*Il pezzo* = a música, a peça (e também a peça do carro, lição 87). *Samba*, em italiano, pode ser masculino ou feminino: *un samba* ou *una samba*."
		},
		{
			it: "Ti va un gelato? No, grazie, non mi va.",
			pt: "Topa um sorvete? Não, obrigado, não estou a fim.",
			sep: true
		},
		{
			it: "Domani andiamo al mare, a meno che non piova.",
			pt: "Amanhã a gente vai à praia, a não ser que chova.",
			note: "*Piova*: subjuntivo de *piovere*."
		},
		{
			it: "Matteo suona la chitarra, ma non sa giocare a scacchi.",
			pt: "O Matteo toca guitarra, mas não sabe jogar xadrez."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Ti va di; suonare e giocare',
			blocks: [
				{
					type: 'p',
					text: "*Ti va di...?* é o convite informal mais comum do italiano. Funciona como *piacere* (lição 39): a pessoa vai no pronome indireto, e o verbo é *andare*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ti va di ve**ni**re a un con**cer**to?", pt: "Você topa ir a um show?" },
						{ it: "Vi va una **piz**za?", pt: "Vocês topam uma pizza?" },
						{ it: "Og**gi** non mi va di **fa**re **nien**te.", pt: "Hoje não estou a fim de fazer nada." },
						{ it: "Se ti va, ti ac**com**pagno.", pt: "Se você quiser, eu te acompanho." }
					]
				},
				{ type: 'h', text: 'Suonare ou giocare?' },
				{
					type: 'p',
					text: "*Suonare* é tocar: um instrumento (*suonare il piano*, com artigo), uma música, e também a campainha e o telefone (*suona il campanello*). *Giocare* é jogar e brincar, sempre com *a*: *giocare a calcio, a tennis, a carte, ai videogiochi*. As crianças *giocano* no parque; os músicos *suonano* no palco."
				},
				{
					type: 'dica',
					text: "Para os esportes sem bola, o italiano prefere *fare*: *fare nuoto*, *fare yoga* (lição 80). E quem toca bem é *bravo*: *Tommaso è un bravo pianista* (lição 88)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O subjuntivo: primeiro contato',
			blocks: [
				{
					type: 'p',
					text: "Hoje apareceu um modo verbal novo: o **congiuntivo**, o subjuntivo. O português também tem o seu (“a não ser que chova”, “espero que você venha”), e isso ajuda muito. Em italiano ele aparece sobretudo depois de *che* e de algumas conjunções, como *a meno che* (a não ser que)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "a **me**no che non la **fac**ciano lavo**ra**re", pt: "a não ser que a façam trabalhar", pron: "a mê-no ke non la fát-tcha-no la-vo-rá-re" },
						{ it: "a **me**no che Tom**ma**so non li **man**gi", pt: "a não ser que o Tommaso os coma" },
						{ it: "a **me**no che non scap**pia**te", pt: "a não ser que vocês fujam" },
						{ it: "a **me**no che non **pio**va", pt: "a não ser que chova" }
					]
				},
				{
					type: 'p',
					text: "A boa notícia: no singular, você já conhece as formas. São as do imperativo de *Lei* (lição 78): *mangi, prenda, parta, faccia, venga, vada*. E elas servem para *io, tu* e *lui/lei* ao mesmo tempo: *che io mangi, che tu mangi, che lui mangi*. No plural, *noi* é igual ao presente (*parliamo*), *voi* termina em *-iate* (*parliate*, *scappiate*) e *loro* acrescenta *-no* ao singular (*parlino*, *facciano*)."
				},
				{
					type: 'dica',
					text: "Não precisa decorar nada hoje. O subjuntivo vai aparecer em todas as lições desta semana, e na lição 98 você vê o quadro inteiro."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ti va di venire al cinema stasera?", pt: "Você topa ir ao cinema hoje à noite?" },
				{ it: "Non mi va di uscire: piove.", pt: "Não estou a fim de sair: está chovendo." },
				{ it: "Tommaso suona il pianoforte tutte le sere.", pt: "O Tommaso toca piano todas as noites." },
				{ it: "Il giovedì Valerio gioca a calcetto.", pt: "Às quintas o Valerio joga futebol de salão." },
				{ it: "Ci vediamo alle nove, a meno che non piova.", pt: "A gente se vê às nove, a não ser que chova." },
				{ it: "Vengo anch'io, a meno che non mi facciano lavorare.", pt: "Eu também vou, a não ser que me façam trabalhar." },
				{ it: "Vi va un caffè?", pt: "Vocês topam um café?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você topa ir ao show?", parts: ["Ti ", null, " di venire al concerto?"], answers: ["va"] },
				{ pt: "Ela toca piano.", parts: ["Lei ", null, " il pianoforte."], answers: ["suona"] },
				{ pt: "Eles jogam futebol.", parts: ["Loro ", null, " a calcio."], answers: ["giocano"] },
				{ pt: "A não ser que chova.", parts: ["A meno che non ", null, "."], answers: ["piova"] },
				{ pt: "A não ser que o Tommaso coma todos.", parts: ["A meno che Tommaso non li ", null, " tutti."], answers: ["mangi"] }
			]
		}
	]
};

const licao94: Lesson = {
	no: 94,
	kind: 'licao',
	title: 'Il pranzo della domenica',
	titlePt: 'O almoço de domingo',
	lines: [
		{
			it: "Avanti, ragazzi, avanti! Spero che abbiate fame!",
			pt: "Entrem, pessoal, entrem! Espero que vocês estejam com fome!",
			lit: "Avante, rapazes, avante! Espero que tenhais fome!",
			note: "Domingo, meio-dia, no apartamento dos Proietti, no bairro de Testaccio. *Spero che* + subjuntivo: *abbiate* é o subjuntivo de *avere* com *voi*. Depois de verbos de esperança, vontade e opinião, o italiano usa o subjuntivo, como o português: “espero que vocês estejam”."
		},
		{
			it: "Tantissima, signora! Ieri sera abbiamo ballato fino all'una.",
			pt: "Muita, senhora! Ontem à noite a gente dançou até uma da manhã.",
			note: "*Tantissima* concorda com *fame*, que é feminino: *la fame*."
		},
		{
			it: "Lo so, Valerio mi ha raccontato. Allora, vi è piaciuto il concerto?",
			pt: "Eu sei, o Valerio me contou. E então, vocês gostaram do show?",
			lit: "O sei, Valerio me contou. Então, vos é agradado o concerto?",
			note: "*Vi è piaciuto?* = vocês gostaram? *Piacere* (lição 39) faz o passado com *essere*, e o particípio concorda com a coisa de que se gosta, que é o sujeito: *il concerto è piaciuto*, *la serata è piaciuta*."
		},
		{
			it: "Moltissimo! Tommaso è stato bravissimo. E ci sono piaciuti tanto anche i supplì.",
			pt: "Muito! O Tommaso foi ótimo. E a gente gostou muito dos supplì também.",
			lit: "Muitíssimo! Tommaso foi bravíssimo. E nos são agradados tanto também os supplì.",
			note: "*Ci sono piaciuti*: no plural, porque quem agrada são *i supplì*."
		},
		{
			it: "Ecco qua l'articolo di Ilaria: «Un giovane trio che sembra suonare insieme da vent'anni.»",
			pt: "Olha aqui a matéria da Ilaria: “Um trio jovem que parece tocar junto há vinte anos.”",
			note: "Quem lê, no celular, é o pai, Sergio, taxista há trinta anos. A Ilaria, namorada do Valerio, escreve na seção de cultura de um jornal romano. *L'articolo* = a matéria, o artigo."
		},
		{
			it: "Mi sembra che parli anche di me. Leggi, papà, leggi!",
			pt: "Acho que fala de mim também. Lê, pai, lê!",
			lit: "Me parece que fale também de mim. Lê, papai, lê!",
			note: "*Mi sembra che* + subjuntivo: *parli*, de *parlare*. Com *sembrare* e *parere* (parecer), a opinião vai para o subjuntivo."
		},
		{
			it: "«Al piano, Tommaso Proietti.» Fine. Una riga sola.",
			pt: "“No piano, Tommaso Proietti.” Fim. Uma linha só.",
			note: "*La riga* = a linha (de um texto)."
		},
		{
			it: "Mi dispiace, Tommi. Il direttore vuole che gli articoli siano brevi: la gente legge sul telefono.",
			pt: "Sinto muito, Tommi. O diretor quer que as matérias sejam curtas: as pessoas leem no celular.",
			note: "*Volere che* + subjuntivo, quando quem quer e quem faz são pessoas diferentes: *il direttore vuole che gli articoli siano brevi*. Se for a mesma pessoa, infinitivo: *voglio scrivere*. *Siano* é o subjuntivo de *essere* com *loro*. *Il direttore*, num jornal, é o editor-chefe."
		},
		{
			it: "Ai miei tempi il giornale si leggeva al bar, dalla prima all'ultima pagina.",
			pt: "No meu tempo, o jornal se lia no bar, da primeira à última página.",
			note: "*Ai miei tempi* = no meu tempo. *Si leggeva*: o *si* impessoal no imperfeito, para um costume do passado."
		},
		{
			it: "Basta giornali a tavola! Ecco le fettuccine. Assaggiate e ditemi se vi piacciono.",
			pt: "Chega de jornal na mesa! Aqui estão as fettuccine. Provem e me digam se vocês gostam.",
			note: "*Ditemi* = digam-me: imperativo de *voi* + pronome (lição 72)."
		},
		{
			it: "Signora, sono buonissime! Mi sembra di sognare.",
			pt: "Senhora, estão uma delícia! Parece que estou sonhando.",
			lit: "Senhora, são boníssimas! Me parece de sonhar.",
			note: "Quando quem parece e quem faz são a mesma pessoa, *sembrare di* + infinitivo, sem subjuntivo: *mi sembra di sognare*."
		},
		{
			it: "E tu, Rafael, mangia! Mi sembra che tu sia un po' ingrassato, ma va bene così: prima eri troppo magro.",
			pt: "E você, Rafael, come! Acho que você engordou um pouco, mas está bom assim: antes você era magro demais.",
			lit: "E tu, Rafael, come! Me parece que tu sejas um pouco engordado, mas vai bem assim: antes eras demasiado magro.",
			note: "*Tu sia*: subjuntivo de *essere*. No singular as três pessoas são iguais (*io sia, tu sia, lui sia*), por isso muitas vezes se diz o pronome, para ficar claro. *Ingrassare* faz o passado com *essere* (lição 80)."
		},
		{
			it: "Sei chili, signora. È colpa della cucina italiana.",
			pt: "Seis quilos, senhora. A culpa é da cozinha italiana.",
			note: "*È colpa di* = a culpa é de: *è colpa mia* = a culpa é minha."
		},
		{
			it: "A proposito di giornali: dicono che quest'anno la Lazio vinca il campionato!",
			pt: "Falando em jornal: dizem que este ano a Lazio vai ganhar o campeonato!",
			lit: "A propósito de jornais: dizem que este ano a Lazio vença o campeonato!",
			note: "Na lição 52 você viu *dicono che* com o presente comum. No italiano mais cuidado, vem o subjuntivo: *dicono che la Lazio vinca*. Quem repete um boato não garante a notícia. Para uma previsão, também se ouve o futuro: *dicono che vincerà*. O Sergio torce para a Lazio; os filhos, para a Roma. *A proposito di* = falando em."
		},
		{
			it: "E voi due, Valerio e Ilaria? Io voglio solo che siate felici... e che vi sposiate prima che io diventi troppo vecchia per ballare!",
			pt: "E vocês dois, Valerio e Ilaria? Eu só quero que vocês sejam felizes... e que se casem antes que eu fique velha demais para dançar!",
			note: "*Siate* (de *essere*) e *vi sposiate* (de *sposarsi*), com *voi*: subjuntivo depois de *voglio che*. *Prima che* (antes que), como *a meno che*, também pede o subjuntivo: *prima che io diventi*."
		},
		{
			it: "Mamma! Ogni domenica la stessa storia!",
			pt: "Mãe! Todo domingo a mesma história!"
		},
		{
			it: "Lui ha la mamma che gli cucina e gli stira le camicie... beato lui!",
			pt: "Ele tem a mãe que cozinha para ele e passa as camisas dele... sorte dele!",
			note: "*Stirare* = passar roupa. *Beato lui!* = sorte dele! Você conhece *beato te* da lição 43: muda com a pessoa, *beata lei*, *beati voi*."
		},
		{
			it: "Beato lui, sì. Io le camicie me le stiro da sola!",
			pt: "Sorte dele, sim. Eu passo as minhas camisas sozinha!",
			lit: "Bem-aventurado ele, sim. Eu as camisas mas passo sozinha!",
			note: "*Me le stiro*: *mi* + *le* (lição 50). *Da sola* = sozinha, sem ajuda (lição 74)."
		},
		{
			it: "Ti è piaciuto il film? Sì, mi è piaciuto moltissimo.",
			pt: "Você gostou do filme? Sim, gostei muito.",
			sep: true
		},
		{
			it: "Spero che tu stia meglio.",
			pt: "Espero que você esteja melhor.",
			note: "*Stia*: subjuntivo de *stare*, como o imperativo *stia tranquillo* (lição 78)."
		},
		{
			it: "Mia madre vuole che io torni presto.",
			pt: "A minha mãe quer que eu volte cedo."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Piacere no passado; beato lui',
			blocks: [
				{
					type: 'p',
					text: "Na lição 39 você aprendeu que *piacere* funciona “ao contrário”: a coisa de que se gosta é o sujeito, e a pessoa vai no pronome indireto. No passado, o auxiliar é *essere*, e o particípio concorda com a coisa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Vi è pia**ciu**to il con**cer**to?", pt: "Vocês gostaram do show?" },
						{ it: "Mi è pia**ciu**ta la se**ra**ta.", pt: "Gostei da noite." },
						{ it: "Ci sono pia**ciu**ti i sup**plì**.", pt: "A gente gostou dos supplì." },
						{ it: "Le fettuc**ci**ne ti sono pia**ciu**te?", pt: "Você gostou das fettuccine?" }
					]
				},
				{
					type: 'p',
					text: "O pronome segue a pessoa (*mi, ti, gli, le, ci, vi, gli*); o particípio segue a coisa. Para dizer que não gostou nada, *non mi è piaciuto per niente*. Com o nome da pessoa, *a*: *a Tommaso non è piaciuto l'articolo*."
				},
				{ type: 'h', text: 'Beato lui' },
				{
					type: 'p',
					text: "*Beato* exprime uma inveja simpática, “sorte sua”: *beato te* (lição 43), *beata te* (para uma mulher), *beato lui*, *beata lei*, *beati voi*, *beati loro*. Muitas vezes vem com *che*: *beato te che vai in vacanza!* (sorte sua, que vai sair de férias!)."
				},
				{
					type: 'dica',
					text: "O almoço de domingo em família é uma instituição italiana: começa tarde, termina mais tarde ainda e tem antepasto, massa, carne, sobremesa e café. Em Roma, a massa pode ser *cacio e pepe*, *carbonara*, *amatriciana*, ou as *fettuccine* feitas em casa."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O subjuntivo depois de sembrare, volere, sperare',
			blocks: [
				{
					type: 'p',
					text: "Na lição 93 o subjuntivo apareceu depois de *a meno che*. Hoje ele veio depois de verbos que exprimem opinião, vontade e esperança, sempre ligados por *che*. Repare como o português faz a mesma coisa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Spe**ro che ab**bia**te **fa**me.", pt: "Espero que vocês estejam com fome." },
						{ it: "Mi **sem**bra che **par**li **an**che di me.", pt: "Acho que fala de mim também." },
						{ it: "Il di**ret**tore **vuo**le che gli ar**ti**coli **sia**no **bre**vi.", pt: "O diretor quer que as matérias sejam curtas." },
						{ it: "**Di**cono che la **La**zio **vin**ca il cam**pio**nato.", pt: "Dizem que a Lazio vai ganhar o campeonato." }
					]
				},
				{
					type: 'p',
					text: "Os dois verbos mais usados: *essere* faz *sia, sia, sia, siamo, siate, siano*; *avere* faz *abbia, abbia, abbia, abbiamo, abbiate, abbiano*. Os outros, por enquanto, você reconhece pelo imperativo de *Lei*: *parli, vinca, torni, stia*."
				},
				{ type: 'h', text: 'Mesmo sujeito: infinitivo' },
				{
					type: 'p',
					text: "Quando quem pensa ou quer e quem faz são a mesma pessoa, nada de *che*: *mi sembra di sognare*, *spero di venire*, *voglio scrivere* (com *volere*, sem *di*). Compare: *spero di tornare presto* (eu espero voltar logo) e *spero che tu torni presto* (espero que você volte logo)."
				},
				{
					type: 'dica',
					text: "Como as três pessoas do singular são iguais (*che io sia, che tu sia, che lui sia*), o italiano muitas vezes põe o pronome: *mi sembra che tu sia ingrassato*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vi è piaciuta la cena? Sì, moltissimo!", pt: "Vocês gostaram do jantar? Sim, muito!" },
				{ it: "Non mi è piaciuto il film.", pt: "Não gostei do filme." },
				{ it: "Spero che stiate tutti bene.", pt: "Espero que vocês estejam todos bem." },
				{ it: "Mi sembra che Matteo sia stanco.", pt: "Acho que o Matteo está cansado." },
				{ it: "La mamma vuole che io studi di più.", pt: "A mamãe quer que eu estude mais." },
				{ it: "Dicono che domani piova.", pt: "Dizem que amanhã vai chover." },
				{ it: "Beato te, che vai a Roma!", pt: "Sorte sua, que vai a Roma!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vocês gostaram do show?", parts: ["Vi è ", null, " il concerto?"], answers: ["piaciuto"] },
				{ pt: "A gente gostou muito dos supplì.", parts: ["Ci sono ", null, " tanto i supplì."], answers: ["piaciuti"] },
				{ pt: "Espero que vocês estejam com fome.", parts: ["Spero che ", null, " fame."], answers: ["abbiate"] },
				{ pt: "Acho que você engordou.", parts: ["Mi sembra che tu ", null, " ingrassato."], answers: ["sia"] },
				{ pt: "Sorte dele!", parts: [null, " lui!"], answers: ["beato"] }
			]
		}
	]
};

const licao95: Lesson = {
	no: 95,
	kind: 'licao',
	title: 'Al cinema',
	titlePt: 'No cinema',
	lines: [
		{
			it: "Rafa, che hai? Da stamattina non dici una parola.",
			pt: "Rafa, o que você tem? Desde hoje de manhã você não diz uma palavra.",
			note: "*Che hai?* = o que você tem?, como o *che cos'ha la macchina?* da lição 87."
		},
		{
			it: "Niente. Piove, la carta non ce l'ho ancora e paghi sempre tu. Sono di cattivo umore, tutto qui.",
			pt: "Nada. Está chovendo, ainda estou sem o cartão e quem paga é sempre você. Estou de mau humor, só isso.",
			note: "*Essere di cattivo umore* (ou *di malumore*) = estar de mau humor; *di buon umore* = de bom humor. *Tutto qui* = só isso, é isso aí."
		},
		{
			it: "Allora devi distrarti. Stasera al Farnese danno *Roma*, di Fellini.",
			pt: "Então você precisa se distrair. Hoje à noite no Farnese vai passar *Roma*, do Fellini.",
			lit: "Então deves distrair-te. Esta noite no Farnese dão *Roma*, de Fellini.",
			note: "*Distrarsi* = distrair-se. *Danno un film* = está passando um filme, literalmente “dão”: *che cosa danno al cinema?*. O Farnese é um cinema no Campo de' Fiori."
		},
		{
			it: "Fellini? Può darsi che sia un capolavoro, ma io stasera mi addormento.",
			pt: "Fellini? Pode ser que seja uma obra-prima, mas eu hoje vou dormir no meio.",
			lit: "Fellini? Pode dar-se que seja uma obra-prima, mas eu esta noite me adormeço.",
			note: "*Può darsi che* + subjuntivo = pode ser que, talvez: *può darsi che piova*. Sozinho, *può darsi* = pode ser. *Il capolavoro* = a obra-prima."
		},
		{
			it: "Vengono anche Ilaria e Tommaso. Tommaso dice che l'ha visto dieci volte.",
			pt: "A Ilaria e o Tommaso também vêm. O Tommaso diz que já viu dez vezes."
		},
		{
			it: "Ah. Tommaso. Di nuovo Tommaso.",
			pt: "Ah. O Tommaso. De novo o Tommaso."
		},
		{
			it: "Che vuol dire «di nuovo Tommaso»?",
			pt: "O que quer dizer “de novo o Tommaso”?",
			note: "*Vuol dire* = quer dizer: *vuole* perde o *-e* antes de *dire*."
		},
		{
			it: "Niente, niente. Mettiti la giacca, che piove.",
			pt: "Nada, nada. Põe o casaco, que está chovendo.",
			note: "*Mettersi* = pôr em si, vestir: *mettiti la giacca*, *mi metto le scarpe*. *Che piove*: na fala, *che* também quer dizer “porque”, como o nosso “que”."
		},
		{
			it: "Eccovi! Ci mettiamo in prima fila? Fellini bisogna vederlo da vicino.",
			pt: "Aí estão vocês! Vamos sentar na primeira fila? Fellini tem que ver de perto.",
			lit: "Eis-vos! Nos pomos em primeira fila? Fellini precisa vê-lo de perto.",
			note: "*Eccovi* = aqui estão vocês, como *eccoci* (lição 61). *Mettersi* também é colocar-se num lugar: *ci mettiamo in prima fila?*. *Da vicino* = de perto."
		},
		{
			it: "In prima fila mi viene il torcicollo. Io lo guardo da lontano, dall'ultima fila.",
			pt: "Na primeira fila me dá torcicolo. Eu assisto de longe, da última fila.",
			lit: "Em primeira fila me vem o torcicolo. Eu o olho de longe, da última fila.",
			note: "*Mi viene* = me dá: *mi viene fame*, *mi viene sonno*. *Da lontano* = de longe."
		},
		{
			it: "Rafa, posso dirti una cosa? Ma acqua in bocca, eh! Dicono che Tommaso abbia una cotta per tua sorella.",
			pt: "Rafa, posso te contar uma coisa? Mas bico calado, hein! Dizem que o Tommaso está caidinho pela sua irmã.",
			lit: "Rafa, posso dizer-te uma coisa? Mas água em boca, eh! Dizem que Tommaso tenha uma paixonite por tua irmã.",
			note: "É a Ilaria, enquanto a Larissa e o Tommaso vão para a frente da sala. *Acqua in bocca!* = bico calado!, não conta para ninguém. *Avere una cotta per* = estar caidinho por. *Abbia*: o boato no subjuntivo, como na lição 94."
		},
		{
			it: "Lo sapevo! Ecco perché sono di cattivo umore!",
			pt: "Eu sabia! É por isso que estou de mau humor!",
			note: "*Ecco perché* = é por isso que."
		},
		{
			it: "Ma dai, Tommaso è un bravo ragazzo. E può darsi che a Larissa non dispiaccia...",
			pt: "Ah, para, o Tommaso é um bom rapaz. E pode ser que a Larissa até goste...",
			lit: "Mas dá, Tommaso é um bom rapaz. E pode dar-se que a Larissa não desagrade...",
			note: "*Dispiaccia*: subjuntivo de *dispiacere*. *Non mi dispiace* = não me desagrada, até que eu gosto."
		},
		{
			it: "Appunto, è questo che mi preoccupa! Fra pochi giorni lei torna in Brasile.",
			pt: "Justamente, é isso que me preocupa! Daqui a poucos dias ela volta para o Brasil.",
			note: "*Appunto* = justamente (lição 85)."
		},
		{
			it: "Rafa, ha diciannove anni, non nove. E guarda: si sono messi a parlare di Fellini. Più innocente di così...",
			pt: "Rafa, ela tem dezenove anos, não nove. E olha: os dois começaram a falar do Fellini. Mais inocente do que isso...",
			lit: "Rafa, tem dezenove anos, não nove. E olha: se puseram a falar de Fellini. Mais inocente que assim...",
			note: "*Mettersi a* + infinitivo = pôr-se a, começar a: *si sono messi a parlare*, *si è messo a piovere*."
		},
		{
			it: "Va bene, va bene. Mi distraggo col film. Ma da qui li vedo benissimo.",
			pt: "Tá bom, tá bom. Vou me distrair com o filme. Mas daqui eu vejo os dois muito bem.",
			note: "*Distrarsi* se conjuga como *trarre*: *mi distraggo, ti distrai, si distrae, ci distraiamo, vi distraete, si distraggono*; particípio *distratto*."
		},
		{
			it: "Allora, Rafa? Ti è piaciuto? Hai riso per tutto il film!",
			pt: "E aí, Rafa? Gostou? Você riu o filme inteiro!",
			note: "Duas horas depois, na saída. *Riso*: particípio de *ridere* (lição 30)."
		},
		{
			it: "Mah... può darsi che Fellini mi abbia messo di buon umore.",
			pt: "Sei lá... pode ser que o Fellini tenha me deixado de bom humor.",
			lit: "Mah... pode dar-se que Fellini me tenha posto de bom humor.",
			note: "*Abbia messo* = tenha posto: o subjuntivo passado, *abbia* ou *sia* + particípio. *Mettere di buon umore* = deixar de bom humor."
		},
		{
			it: "Che cosa danno stasera al cinema?",
			pt: "O que está passando hoje no cinema?",
			sep: true
		},
		{
			it: "Può darsi che domani faccia bel tempo.",
			pt: "Pode ser que amanhã faça tempo bom."
		},
		{
			it: "Quando ha sentito la notizia, si è messa a ridere.",
			pt: "Quando ouviu a notícia, ela começou a rir."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Può darsi che: o subjuntivo da dúvida',
			blocks: [
				{
					type: 'p',
					text: "O subjuntivo é o modo do que não é certo: o que se deseja, o que se supõe, o que se ouviu dizer. Por isso ele combina tão bem com *può darsi che* (pode ser que) e com os boatos de *dicono che*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Può** **dar**si che **sia** un capola**vo**ro.", pt: "Pode ser que seja uma obra-prima." },
						{ it: "**Può** **dar**si che a La**ris**sa non di**spiac**cia.", pt: "Pode ser que a Larissa até goste." },
						{ it: "**Di**cono che Tom**ma**so **ab**bia una **cot**ta.", pt: "Dizem que o Tommaso está caidinho." },
						{ it: "**Può** **dar**si che mi **ab**bia **mes**so di buon u**mo**re.", pt: "Pode ser que tenha me deixado de bom humor." }
					]
				},
				{
					type: 'p',
					text: "Com *forse* (talvez), ao contrário do português, o italiano não usa subjuntivo: *forse è un capolavoro* = talvez seja uma obra-prima. *Forse* + indicativo ou *può darsi che* + subjuntivo: as duas frases dizem o mesmo."
				},
				{ type: 'h', text: 'O subjuntivo passado' },
				{
					type: 'p',
					text: "Para o que já aconteceu, *abbia* ou *sia* + particípio, com as regras de sempre do auxiliar e da concordância: *può darsi che abbia sbagliato* (pode ser que ele tenha errado), *spero che sia arrivata bene* (espero que ela tenha chegado bem). É o nosso “tenha feito”, “tenha chegado”."
				},
				{
					type: 'dica',
					text: "*Acqua in bocca!* (bico calado!) é o pedido de segredo mais italiano. Quem quer jurar que não conta faz o gesto de fechar a boca com um zíper."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'No cinema; mettersi',
			blocks: [
				{
					type: 'p',
					text: "Algumas palavras para ir ao cinema na Itália:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che **co**sa **dan**no al **ci**nema?", pt: "O que está passando no cinema?" },
						{ it: "lo spet**ta**colo **del**le **ven**ti e tren**ta**", pt: "a sessão das 20h30" },
						{ it: "in **lin**gua origi**na**le con i sotto**ti**toli", pt: "na língua original, com legendas" },
						{ it: "un **film** dop**pia**to", pt: "um filme dublado" }
					]
				},
				{
					type: 'p',
					text: "A Itália tem uma longa tradição de dublagem: quase todo filme estrangeiro chega dublado, e os dubladores italianos são famosos. A versão original com legendas existe, sobretudo nos cinemas de arte das grandes cidades. Procure na programação a sigla *V.O.* (*versione originale*)."
				},
				{ type: 'h', text: 'Mettersi' },
				{
					type: 'p',
					text: "*Mettersi* tem três usos que apareceram hoje. Vestir: *mettiti la giacca*. Colocar-se num lugar: *ci mettiamo in prima fila*. E, com *a* + infinitivo, começar a: *si sono messi a parlare*, *si è messa a ridere*. Como todo reflexivo, faz o passado com *essere*."
				},
				{
					type: 'dica',
					text: "*Da vicino* e *da lontano* (de perto, de longe) servem para tudo: *visto da vicino, Roma è ancora più bella*; *ti ho riconosciuto da lontano*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che hai? Sei di cattivo umore?", pt: "O que você tem? Está de mau humor?" },
				{ it: "Stasera al cinema danno un film di Fellini.", pt: "Hoje à noite está passando um filme do Fellini no cinema." },
				{ it: "Può darsi che domani piova.", pt: "Pode ser que amanhã chova." },
				{ it: "Mettiti la giacca, fa freddo.", pt: "Põe o casaco, está frio." },
				{ it: "Ci mettiamo in prima fila?", pt: "Vamos sentar na primeira fila?" },
				{ it: "Da lontano non vedo niente.", pt: "De longe não vejo nada." },
				{ it: "Dopo cena si è messo a studiare.", pt: "Depois do jantar ele começou a estudar." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Pode ser que seja uma obra-prima.", parts: ["Può ", null, " che sia un capolavoro."], answers: ["darsi"] },
				{ pt: "O que está passando no cinema?", parts: ["Che cosa ", null, " al cinema?"], answers: ["danno"] },
				{ pt: "Põe o casaco!", parts: [null, " la giacca!"], answers: ["mettiti"] },
				{ pt: "Eu vejo melhor de perto.", parts: ["Vedo meglio da ", null, "."], answers: ["vicino"] },
				{ pt: "Dizem que ele está caidinho por ela.", parts: ["Dicono che ", null, " una cotta per lei."], answers: ["abbia"] }
			]
		}
	]
};

const licao96: Lesson = {
	no: 96,
	kind: 'licao',
	title: 'Il derby',
	titlePt: 'O clássico',
	lines: [
		{
			it: "Eccoci all'Olimpico! Guardate: è pieno zeppo.",
			pt: "Chegamos ao Olímpico! Olhem: está lotado.",
			lit: "Eis-nos no Olímpico! Olhai: é cheio repleto.",
			note: "O *derby*, o clássico da cidade: Roma × Lazio, no Estádio Olímpico. Os ingressos foram presente do Sergio, o pai do Valerio. *Pieno zeppo* = lotado, cheio até a boca: *zeppo* reforça *pieno*."
		},
		{
			it: "Settantamila persone! E urlano tutti come se la partita fosse già cominciata.",
			pt: "Setenta mil pessoas! E todo mundo grita como se o jogo já tivesse começado.",
			note: "*Come se* + subjuntivo = como se. *Fosse* é o imperfeito do subjuntivo de *essere*, igualzinho ao nosso “fosse”: *come se fosse cominciata* = como se tivesse começado. *Urlare* = gritar."
		},
		{
			it: "Io tifo per la Lazio, sia chiaro. In questa famiglia sono l'unico con un po' di buon senso.",
			pt: "Eu torço para a Lazio, que fique claro. Nesta família sou o único com um pouco de bom senso.",
			note: "*Tifare per* = torcer para (lição 33). *Sia chiaro* = que fique claro: um subjuntivo de desejo, numa frase feita. *Il buon senso* = o bom senso."
		},
		{
			it: "Papà, oggi la Roma vince tre a zero. Fidati.",
			pt: "Pai, hoje a Roma ganha de três a zero. Confia.",
			note: "*Fidati* = confia (em mim), de *fidarsi*: imperativo de *tu* com o pronome no fim (lição 71)."
		},
		{
			it: "Magari vincessimo tre a zero! A me basta uno a zero.",
			pt: "Quem dera a gente ganhasse de três a zero! Para mim, um a zero está bom.",
			lit: "Talvez vencêssemos três a zero! A mim basta um a zero.",
			note: "*Magari!* = quem dera!, tomara! Com o imperfeito do subjuntivo, é um desejo: *magari vincessimo!* = quem dera a gente ganhasse! *Vincessimo*, de *vincere*. *Mi basta* (lição 48)."
		},
		{
			it: "A Recife io tifo per lo Sport. E oggi per chi tifo?",
			pt: "Em Recife eu torço para o Sport. E hoje eu torço para quem?",
			note: "*Lo Sport*: o Sport Club do Recife, com o artigo de *lo sport* (lição 15)."
		},
		{
			it: "Per la Lazio, è ovvio: i biglietti li ho pagati io!",
			pt: "Para a Lazio, é óbvio: os ingressos quem pagou fui eu!"
		},
		{
			it: "Allora io tifo per la Roma, come Tommaso.",
			pt: "Então eu torço para a Roma, como o Tommaso."
		},
		{
			it: "Come Tommaso, eh?",
			pt: "Como o Tommaso, é?",
			note: "O Valerio, com um sorriso, para o irmão."
		},
		{
			it: "Si potrebbe fare una scommessa: chi perde paga la pizza a tutti.",
			pt: "Dava para fazer uma aposta: quem perder paga a pizza para todo mundo.",
			lit: "Se poderia fazer uma aposta: quem perde paga a pizza a todos.",
			note: "*Si potrebbe* + infinitivo = dava para, a gente podia: uma sugestão com o *si* impessoal (lição 91) e o condicional (lição 84). *La scommessa* = a aposta. *Chi perde paga*: no italiano, presente onde o português põe “quem perder”."
		},
		{
			it: "Affare fatto. Tanto vince la Lazio, e la pizza la pagate voi.",
			pt: "Fechado. De qualquer jeito a Lazio ganha, e a pizza quem paga são vocês.",
			note: "*Tanto* aqui é “de qualquer jeito, afinal”."
		},
		{
			it: "Gol! Gol della Lazio! ... Scusate, mi è scappato.",
			pt: "Gol! Gol da Lazio! ... Desculpem, escapou.",
			note: "Quem grita é o Rafael. *Mi è scappato* = me escapou (com *essere*)."
		},
		{
			it: "Quel numero dieci sbaglia tutto, e guadagna tre milioni l'anno!",
			pt: "Aquele camisa dez erra tudo, e ganha três milhões por ano!",
			note: "O Valerio, desesperado com o craque da Roma. *Guadagnare* = ganhar dinheiro. Para partida, aposta e prêmio, é *vincere*. *L'anno* = por ano."
		},
		{
			it: "Tre milioni per sbagliare i gol? Vorrei che qualcuno pagasse anche me per sbagliare!",
			pt: "Três milhões para errar gol? Eu queria que alguém me pagasse para errar também!",
			note: "*Vorrei che* + subjuntivo: depois do condicional *vorrei*, o subjuntivo vai para o imperfeito: *pagasse* (pagasse)."
		},
		{
			it: "Se fossi in lui, cambierei mestiere. Anzi, se fossi l'allenatore, lo manderei subito in panchina.",
			pt: "Se eu fosse ele, mudava de profissão. Aliás, se eu fosse o técnico, mandava logo para o banco.",
			lit: "Se fosse nele, mudaria ofício. Ao contrário, se fosse o treinador, o mandaria logo em banco.",
			note: "*Se fossi in lui* = se eu fosse ele, se estivesse no lugar dele. *Se* + imperfeito do subjuntivo e, na outra parte, o condicional: a hipótese, como em português. *L'allenatore* = o técnico; *la panchina* = o banco de reservas."
		},
		{
			it: "Gol! Gol della Roma! Uno a uno!",
			pt: "Gol! Gol da Roma! Um a um!"
		},
		{
			it: "Fischio finale! Nessuno ha vinto. E adesso la pizza chi la paga?",
			pt: "Apito final! Ninguém ganhou. E agora, a pizza, quem paga?",
			note: "*Vinto*: particípio irregular de *vincere*."
		},
		{
			it: "Pareggio: si paga alla romana!",
			pt: "Empate: cada um paga a sua!",
			lit: "Empate: se paga à romana!",
			note: "*Il pareggio* = o empate; *pareggiare* = empatar. *Pagare alla romana* = rachar a conta, cada um paga a sua parte. Em Roma, faz ainda mais sentido."
		},
		{
			it: "Chi ha vinto? Nessuno: hanno pareggiato.",
			pt: "Quem ganhou? Ninguém: empataram.",
			sep: true
		},
		{
			it: "Mio cugino guadagna bene, ma lavora troppo.",
			pt: "O meu primo ganha bem, mas trabalha demais."
		},
		{
			it: "Magari fosse sempre domenica!",
			pt: "Quem dera fosse sempre domingo!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Vincere e guadagnare; no estádio',
			blocks: [
				{
					type: 'p',
					text: "O português usa “ganhar” para tudo. O italiano separa: *vincere* é ganhar uma disputa (partida, aposta, prêmio, eleição); *guadagnare* é ganhar dinheiro, ou tempo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La **Ro**ma ha **vin**to il **der**by.", pt: "A Roma ganhou o clássico." },
						{ it: "Ho **vin**to la scom**mes**sa!", pt: "Ganhei a aposta!" },
						{ it: "**Quan**to gua**da**gna un calcia**to**re?", pt: "Quanto ganha um jogador de futebol?" },
						{ it: "Hanno pareg**gia**to **u**no a **u**no.", pt: "Empataram de um a um." }
					]
				},
				{
					type: 'p',
					text: "*Vincere* é irregular no passado: *ho vinto* (no *passato remoto*, *vinse*, lição 90). E um presente se ganha com *ricevere*: *ho ricevuto un regalo* (ganhei um presente). Já *guadagnare tempo* é ganhar tempo."
				},
				{ type: 'h', text: 'Roma e Lazio' },
				{
					type: 'p',
					text: "Roma tem dois times, que dividem o mesmo estádio, o Olímpico. A torcida da Roma fica na *Curva Sud*; a da Lazio, na *Curva Nord*. O símbolo da Roma é a loba; o da Lazio, a águia. E não é raro, como na casa dos Proietti, a família se dividir."
				},
				{
					type: 'dica',
					text: "*Pieno zeppo* faz par com outras duplas que reforçam: *stanco morto* (morto de cansaço), *bagnato fradicio* (encharcado), *ubriaco fradicio* (bêbado de cair). E na hora da conta, entre amigos, *paghiamo alla romana?*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Uma espiada no imperfeito do subjuntivo',
			blocks: [
				{
					type: 'p',
					text: "Hoje apareceram formas que soam muito familiares a um brasileiro: *fosse*, *vincessimo*, *pagasse*, *fossi*. É o imperfeito do subjuntivo, o nosso “fosse, ganhássemos, pagasse”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**co**me se la par**ti**ta **fos**se già comin**cia**ta", pt: "como se o jogo já tivesse começado" },
						{ it: "Ma**ga**ri vin**ces**simo tre a **ze**ro!", pt: "Quem dera a gente ganhasse de três a zero!" },
						{ it: "**Vor**rei che **qual**cuno pa**gas**se **an**che me.", pt: "Eu queria que alguém me pagasse também." },
						{ it: "Se **fos**si in lui, cambie**rei** me**stie**re.", pt: "Se eu fosse ele, mudaria de profissão." }
					]
				},
				{
					type: 'p',
					text: "A receita: tire o *-re* do infinitivo e acrescente *-ssi, -ssi, -sse, -ssimo, -ste, -ssero*. *Pagare*: *pagassi, pagassi, pagasse, pagassimo, pagaste, pagassero*. Vale para os três grupos: *vincessi*, *partissi*, e também *avere*: *avessi*. *Essere* faz *fossi, fossi, fosse, fossimo, foste, fossero*. *Fare*, *dire* e *bere* usam a base antiga do imperfeito (lição 63): *facessi*, *dicessi*, *bevessi*. *Dare* e *stare* fazem *dessi* e *stessi*."
				},
				{
					type: 'p',
					text: "Ele apareceu em quatro situações: depois de *come se*, de *magari* (quem dera), de um condicional como *vorrei che*, e depois de *se* numa hipótese (*se fossi in lui...*). Na revisão você vai ver quando usar o presente e quando o imperfeito."
				},
				{
					type: 'dica',
					text: "*Se fossi in te* (se eu fosse você) é o começo de conselho mais italiano que existe: *Se fossi in te, ci penserei* (se eu fosse você, pensaria bem)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "La Roma ha vinto il derby due a uno.", pt: "A Roma ganhou o clássico de dois a um." },
				{ it: "Quanto guadagna un insegnante in Italia?", pt: "Quanto ganha um professor na Itália?" },
				{ it: "Lo stadio era pieno zeppo.", pt: "O estádio estava lotado." },
				{ it: "Magari vincessimo noi!", pt: "Quem dera a gente ganhasse!" },
				{ it: "Se fossi in te, andrei a letto.", pt: "Se eu fosse você, ia dormir." },
				{ it: "Parla come se fosse il capo.", pt: "Ele fala como se fosse o chefe." },
				{ it: "Si potrebbe fare una scommessa.", pt: "Dava para fazer uma aposta." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "A Roma ganhou o jogo.", parts: ["La Roma ha ", null, " la partita."], answers: ["vinto"] },
				{ pt: "Ela ganha dois mil euros por mês.", parts: ["Lei ", null, " duemila euro al mese."], answers: ["guadagna"] },
				{ pt: "O estádio está lotado.", parts: ["Lo stadio è pieno ", null, "."], answers: ["zeppo"] },
				{ pt: "Se eu fosse você, mudaria de profissão.", parts: ["Se ", null, " in te, cambierei mestiere."], answers: ["fossi"] },
				{ pt: "Quem dera a gente ganhasse!", parts: ["Magari ", null, "!"], answers: ["vincessimo"] }
			]
		}
	]
};

const licao97: Lesson = {
	no: 97,
	kind: 'licao',
	title: "L'ultima sera",
	titlePt: 'A última noite',
	lines: [
		{
			it: "Larissa, ce la fai a chiudere la valigia o ti diamo una mano?",
			pt: "Larissa, você consegue fechar a mala ou a gente te dá uma mão?",
			lit: "Larissa, no-la fazes a fechar a mala ou te damos uma mão?",
			note: "Bolonha, a última noite da Larissa na Itália. Os dois voltaram de Roma de trem ontem, e ela conheceu pessoalmente a Chiara e o Matteo. Amanhã cedo ela pega o avião para o Brasil. *Farcela* = conseguir, dar conta: *ce la faccio, ce la fai, ce la fa*...; no passado, *ce l'ho fatta*. É da família de *cavarsela* (lição 85)."
		},
		{
			it: "Non credo che ce la faccia da sola. Ci sono tre chili di parmigiano e i regali per tutta la famiglia!",
			pt: "Acho que ela não consegue sozinha. Tem três quilos de parmesão e os presentes da família inteira!",
			lit: "Não creio que no-la faça sozinha. Há três quilos de parmesão e os presentes para toda a família!",
			note: "*Non credo che* + subjuntivo: *ce la faccia* = que ela consiga. Quem responde é o Rafael, falando da irmã: se fosse a própria Larissa, com o mesmo sujeito, seria *non credo di farcela*. Com *credere* e *pensare*, a opinião vai para o subjuntivo, sobretudo na negativa."
		},
		{
			it: "Siediti sopra, io tiro la cerniera. Uno, due, tre... fatto!",
			pt: "Senta em cima, eu puxo o zíper. Um, dois, três... pronto!",
			note: "*Siediti* = senta: imperativo de *sedersi* (lição 86). *La cerniera* (ou *la zip*) = o zíper."
		},
		{
			it: "Brava. E adesso è meglio che tu vada a letto: il taxi per l'aeroporto arriva alle cinque.",
			pt: "Muito bem. E agora é melhor você ir dormir: o táxi para o aeroporto chega às cinco.",
			lit: "Brava. E agora é melhor que tu vás a cama: o táxi para o aeroporto chega às cinco.",
			note: "*È meglio che* + subjuntivo: as expressões impessoais de opinião (*è meglio che, è importante che, è inutile che*) pedem o subjuntivo. *Vada*: de *andare* (*vado* → *vada*, como o imperativo de *Lei*)."
		},
		{
			it: "Alle cinque? Ma io muoio di sonno già adesso!",
			pt: "Às cinco? Mas eu já estou morrendo de sono agora!",
			lit: "Às cinco? Mas eu morro de sono já agora!",
			note: "*Morire di sonno, di fame, di freddo* = morrer de sono, de fome, de frio. *Morire* é irregular: *muoio, muori, muore, moriamo, morite, muoiono*. O passado é com *essere*: *è morto*."
		},
		{
			it: "E se invece non te ne vai? Resta qui: ci serve un'avvocata in casa.",
			pt: "E se, em vez disso, você não for embora? Fica aqui: a gente precisa de uma advogada em casa.",
			lit: "E se ao invés não te disso vais? Fica aqui: nos serve uma advogada em casa.",
			note: "*Andarsene* = ir embora: *me ne vado, te ne vai, se ne va, ce ne andiamo, ve ne andate, se ne vanno*. É *andare* + *si* + *ne*, assim como *cavarsela* é *cavare* + *si* + *la*. No passado, *me ne sono andato*."
		},
		{
			it: "Magari! Ma la mamma vuole che torni per gli esami. E dubito che papà mi paghi un altro biglietto.",
			pt: "Quem dera! Mas a mamãe quer que eu volte para as provas. E duvido que o papai me pague outra passagem.",
			note: "*Vuole che torni*: a mãe quer, eu volto; sujeitos diferentes, subjuntivo. *Dubitare che* + subjuntivo: *paghi*, com o *h* de *pagare*."
		},
		{
			it: "A proposito di soldi: oggi sono passato in banca e ho ritirato la carta. Ecco i tuoi trecento euro, sorellina.",
			pt: "Falando em dinheiro: hoje passei no banco e retirei o cartão. Aqui estão os seus trezentos euros, irmãzinha.",
			note: "O cartão que o caixa eletrônico de Roma engoliu chegou, enfim, à agência de Bolonha (lição 86)."
		},
		{
			it: "Finalmente! Pensavo che non me li restituissi più.",
			pt: "Finalmente! Achei que você não ia me devolver nunca mais.",
			lit: "Finalmente! Pensava que não mos restituísses mais.",
			note: "*Pensavo che... restituissi*: com o verbo principal no passado, o subjuntivo vai para o imperfeito. *Penso che tu restituisca* → *pensavo che tu restituissi*. Na revisão você vê o quadro completo."
		},
		{
			it: "E Roma, com'è andata? Ho sentito che c'è un certo Tommaso...",
			pt: "E Roma, como foi? Ouvi dizer que tem um tal de Tommaso...",
			note: "*Un certo* = um tal de, um certo. *Ho sentito che* = ouvi dizer que. *Com'è andata?* (lição 43)."
		},
		{
			it: "Rafa! Gliel'hai detto tu?",
			pt: "Rafa! Foi você que contou para ela?",
			lit: "Rafa! Lho disseste tu?",
			note: "*Gliel'hai detto* = você disse isso a ela: *gli* + *lo* (lição 50)."
		},
		{
			it: "Io? Non ho detto niente a nessuno! Ma chiunque ti veda col telefono in mano capisce tutto.",
			pt: "Eu? Não disse nada a ninguém! Mas qualquer um que te veja com o celular na mão entende tudo.",
			note: "*Chiunque* (lição 88) + subjuntivo = quem quer que, qualquer pessoa que: *chiunque ti veda* = qualquer um que te veja. *Non ho detto niente a nessuno* (lição 89)."
		},
		{
			it: "Ma no, è solo un amico! Dice che a febbraio viene a Recife per il Carnevale... cioè, credo che venga.",
			pt: "Que nada, é só um amigo! Diz que em fevereiro vem a Recife para o Carnaval... quer dizer, acho que vem.",
			note: "*Credo che venga*: *venga* é o subjuntivo de *venire* (*vengo* → *venga*). *Cioè* = quer dizer, ou seja."
		},
		{
			it: "È inutile che tu faccia quella faccia: ti conosco da diciannove anni!",
			pt: "Não adianta fazer essa cara: eu te conheço há dezenove anos!",
			lit: "É inútil que tu faças aquela cara: te conheço de dezenove anos!",
			note: "*È inutile che* + subjuntivo = não adianta. E o jogo de palavras: *faccia* é o subjuntivo de *fare* e também *la faccia*, a cara."
		},
		{
			it: "Basta! Me ne vado a letto, prima che mi facciate altre domande.",
			pt: "Chega! Vou para a cama, antes que vocês me façam mais perguntas.",
			note: "*Prima che* + subjuntivo (lição 94): *facciate*, de *fare*, com *voi*."
		},
		{
			it: "Sono le cinque e dieci e il taxi non c'è ancora. Facciamo in tempo?",
			pt: "São cinco e dez e o táxi ainda não chegou. Dá tempo?",
			lit: "São as cinco e dez e o táxi não há ainda. Fazemos em tempo?",
			note: "Na manhã seguinte, ainda escuro, na frente do prédio. *Fare in tempo* = dar tempo, chegar a tempo: *facciamo in tempo a prendere un caffè?*"
		},
		{
			it: "Facciamo in tempo, Rafa. Eccolo! Allora... grazie di tutto. Ci vediamo a luglio, a Recife.",
			pt: "Dá tempo, Rafa. Olha ele aí! Então... obrigada por tudo. A gente se vê em julho, em Recife.",
			note: "A bolsa do Rafael termina no fim de junho (lição 52), e ele volta para casa."
		},
		{
			it: "Buon viaggio, sorellina. Da' un bacio alla mamma da parte mia. E una carezza a Biscoito!",
			pt: "Boa viagem, irmãzinha. Dá um beijo na mamãe por mim. E um carinho no Biscoito!",
			note: "*Da'*: imperativo curto de *dare* (lição 72). *Da parte mia* = da minha parte, por mim. *La carezza* = o carinho, o afago. Biscoito é o cachorro da família."
		},
		{
			it: "Non credo che Serena arrivi in tempo: è sempre in ritardo.",
			pt: "Acho que a Serena não chega a tempo: está sempre atrasada.",
			sep: true
		},
		{
			it: "È ora che ce ne andiamo: è mezzanotte.",
			pt: "Está na hora de a gente ir embora: é meia-noite.",
			note: "*È ora che* + subjuntivo = está na hora de. No *noi*, o subjuntivo é igual ao presente: *andiamo*."
		},
		{
			it: "Chiunque abbia bisogno di aiuto può chiamarmi.",
			pt: "Qualquer um que precise de ajuda pode me ligar."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Quando se usa o subjuntivo',
			blocks: [
				{
					type: 'p',
					text: "Nesta semana o subjuntivo apareceu em quase toda fala. Hoje dá para ver o desenho completo. Ele vem depois de *che* quando a primeira parte da frase exprime uma opinião, uma vontade, um sentimento ou uma dúvida, e depois de algumas expressões e conjunções."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non **cre**do che ce la **fac**cia da **so**la.", pt: "opinião: *credere, pensare, sembrare*" },
						{ it: "La **mam**ma **vuo**le che **tor**ni per gli e**sa**mi.", pt: "vontade: *volere, preferire*" },
						{ it: "**Du**bito che pa**pà** mi **pa**ghi un **al**tro bi**gliet**to.", pt: "dúvida: *dubitare, non sapere se*" },
						{ it: "È **me**glio che tu **va**da a **let**to.", pt: "expressões impessoais: *è meglio che, è inutile che, è ora che, bisogna che*" },
						{ it: "**Pri**ma che mi fac**cia**te **al**tre do**man**de", pt: "conjunções: *prima che, a meno che*" },
						{ it: "**Chiun**que ti **ve**da ca**pi**sce **tut**to.", pt: "*chiunque*: quem quer que" }
					]
				},
				{ type: 'h', text: 'Quando não se usa' },
				{
					type: 'p',
					text: "Com certeza, indicativo: *so che viene*, *è vero che è un amico*, *sono sicuro che ce la fai*. E quando o sujeito é o mesmo, infinitivo: *credo di farcela* (acho que consigo), *spero di tornare*, *è meglio partire presto*. Compare *bisogna partire* (é preciso partir, em geral, lição 54) com *bisogna che tu parta* (é preciso que você parta)."
				},
				{
					type: 'dica',
					text: "Na conversa informal, muitos italianos trocam o subjuntivo pelo indicativo depois de *penso che* e *credo che* (*penso che è vero*). Você vai ouvir isso, mas o subjuntivo é o que se escreve e soa sempre melhor."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Farcela, andarsene, fare in tempo, morire',
			blocks: [
				{
					type: 'p',
					text: "Quatro verbos muito falados apareceram hoje. Os dois primeiros têm pronomes grudados, como *cavarsela* (lição 85)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ce la **fai**? Sì, ce la **fac**cio.", pt: "Você consegue? Consigo." },
						{ it: "Ce l'ho **fat**ta!", pt: "Consegui!" },
						{ it: "Me ne **va**do a **let**to.", pt: "Vou embora para a cama." },
						{ it: "Se n'è an**da**to **sen**za salu**ta**re.", pt: "Ele foi embora sem se despedir." },
						{ it: "**Fac**ciamo in **tem**po a pren**de**re un caf**fè**?", pt: "Dá tempo de tomar um café?" },
						{ it: "**Muo**io di **son**no.", pt: "Estou morrendo de sono.", pron: "muó-io di sôn-no" }
					]
				},
				{
					type: 'p',
					text: "*Farcela* (conseguir) e *andarsene* (ir embora) fazem o passado com o auxiliar do verbo de base: *ce l'ho fatta* (com *avere*, como *fare*), *me ne sono andato* (com *essere*, como *andare*). *Fare in tempo a* + infinitivo é chegar a tempo de fazer algo: *non ho fatto in tempo a salutarlo* (não deu tempo de me despedir dele)."
				},
				{
					type: 'p',
					text: "*Morire* também serve para exagerar, como em português: *morire di fame*, *morire dal ridere* (morrer de rir), *morire dalla voglia di* (morrer de vontade de). E o particípio *morto* reforça: *stanco morto* (morto de cansaço)."
				},
				{
					type: 'dica',
					text: "Para animar alguém, *dai che ce la fai!* (vai, que você consegue!). Para sair de uma festa sem drama: *io me ne vado, ci sentiamo!*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ce la fai da solo? Sì, ce la faccio.", pt: "Você consegue sozinho? Sim, consigo." },
				{ it: "È meglio che tu parta presto.", pt: "É melhor você sair cedo." },
				{ it: "Non credo che Matteo venga stasera.", pt: "Acho que o Matteo não vem hoje à noite." },
				{ it: "Dubito che il treno arrivi in orario.", pt: "Duvido que o trem chegue no horário." },
				{ it: "Me ne vado: è tardi.", pt: "Vou embora: está tarde." },
				{ it: "Se corriamo, facciamo in tempo.", pt: "Se a gente correr, dá tempo." },
				{ it: "Muoio di fame: mangiamo?", pt: "Estou morrendo de fome: vamos comer?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você consegue fechar a mala?", parts: ["Ce la ", null, " a chiudere la valigia?"], answers: ["fai"] },
				{ pt: "É melhor você ir dormir.", parts: ["È meglio che tu ", null, " a letto."], answers: ["vada"] },
				{ pt: "Duvido que ele pague.", parts: ["Dubito che lui ", null, "."], answers: ["paghi"] },
				{ pt: "Eu vou embora.", parts: ["Me ne ", null, "."], answers: ["vado"] },
				{ pt: "Estou morrendo de sono.", parts: [null, " di sonno."], answers: ["muoio"] }
			]
		}
	]
};

const licao98: Lesson = {
	no: 98,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'O subjuntivo presente',
			blocks: [
				{
					type: 'p',
					text: "Um telefonema, um show de jazz, um almoço de cinco horas, um Fellini, um clássico e uma mala que quase não fechou. E, em todas as lições, o mesmo modo verbal: o subjuntivo (*il congiuntivo*). Vamos juntar as peças, começando pelas formas do presente."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "che io, tu, lui parli / prenda / parta / finisca", pt: "*parlare, prendere, partire, finire*: o singular" },
						{ it: "che noi parliamo / prendiamo / partiamo / finiamo", pt: "*noi*: igual ao presente" },
						{ it: "che voi parliate / prendiate / partiate / finiate", pt: "*voi*: sempre *-iate*" },
						{ it: "che loro parlino / prendano / partano / finiscano", pt: "*loro*: o singular + *-no*" }
					]
				},
				{
					type: 'p',
					text: "Os verbos em *-are* trocam a vogal por *-i*; os outros, por *-a*. É a troca que você conhece do imperativo de *Lei* (lição 78). As três pessoas do singular são iguais, e por isso o pronome aparece mais do que no indicativo: *mi sembra che tu sia ingrassato* (lição 94). Os verbos com *-isc-* o mantêm onde o presente mantém: *che finisca*, *che restituisca*. E *-care*, *-gare* ganham *h*: *che paghi* (lição 97), *che cerchi*."
				},
				{ type: 'h', text: 'Os irregulares' },
				{
					type: 'exemplos',
					items: [
						{ it: "sia, siamo, siate, siano", pt: "*essere* (lições 94 e 95)" },
						{ it: "abbia, abbiamo, abbiate, abbiano", pt: "*avere* (lição 94)" },
						{ it: "faccia, vada, venga, possa, voglia", pt: "do *io* do presente: *faccio, vado, vengo, posso, voglio*" },
						{ it: "stia, dia, sappia", pt: "*stare, dare, sapere*" }
					]
				},
				{
					type: 'dica',
					text: "Os que nascem do *io* fazem o *loro* do mesmo jeito (*facciano, vadano, vengano*), mas *noi* e *voi* saem do *noi* do presente: *andiamo* → *andiate*, *veniamo* → *veniate*, *facciamo* → *facciate* (lição 97)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Passado, imperfeito e a concordância dos tempos',
			blocks: [
				{
					type: 'p',
					text: "O **passado** do subjuntivo é *abbia* ou *sia* + particípio, com as regras de sempre: *può darsi che mi abbia messo di buon umore* (lição 95), *spero che sia arrivata bene*. O **imperfeito** (lição 96) tira o *-re* do infinitivo e acrescenta *-ssi, -ssi, -sse, -ssimo, -ste, -ssero*: *pagassi*, *vincessi*, *restituissi*; *essere* faz *fossi*; *fare, dire, bere* fazem *facessi, dicessi, bevessi*; *dare* e *stare*, *dessi* e *stessi*."
				},
				{
					type: 'p',
					text: "Qual deles usar? Depende do tempo do primeiro verbo e de quando acontece a segunda ação. É o mesmo esquema do português: “espero que venha”, mas “esperava que viesse”."
				},
				{ type: 'h', text: 'Primeiro verbo no presente' },
				{
					type: 'exemplos',
					items: [
						{ it: "Spero che venga.", pt: "Espero que ele venha. (agora ou depois)" },
						{ it: "Spero che sia venuto.", pt: "Espero que ele tenha vindo. (antes)" }
					]
				},
				{ type: 'h', text: 'Primeiro verbo no passado ou no condicional' },
				{
					type: 'exemplos',
					items: [
						{ it: "Pensavo che non me li restituissi più.", pt: "Achei que você não ia me devolver nunca mais. (lição 97)" },
						{ it: "Vorrei che qualcuno pagasse anche me.", pt: "Eu queria que alguém me pagasse também. (lição 96)" },
						{ it: "Speravo che fosse già arrivato.", pt: "Eu esperava que ele já tivesse chegado. (antes)" }
					]
				},
				{
					type: 'p',
					text: "No último exemplo, *fosse arrivato* é o mais-que-perfeito do subjuntivo: *fossi* ou *avessi* + particípio, o nosso “tivesse chegado”. E o imperfeito vem sempre depois de *come se* (*come se la partita fosse già cominciata*), de *magari* para desejos (*magari vincessimo!*) e de *se* numa hipótese, com o condicional na outra parte: *se fossi in lui, cambierei mestiere* (lição 96)."
				},
				{
					type: 'dica',
					text: "E o futuro visto do passado? Nada de subjuntivo: condicional composto, como na lição 84. *Pensavo che sarebbe venuto* = achei que ele viria."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Quando usar',
			blocks: [
				{
					type: 'p',
					text: "O subjuntivo é o modo do que não é um fato garantido: o que se acha, se quer, se espera, se teme ou se ouviu dizer. Veja os casos do bloco, cada um com a sua lição."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Spero che abbiate fame!", pt: "esperança: *sperare* (lição 94)" },
						{ it: "Il direttore vuole che gli articoli siano brevi.", pt: "vontade, com sujeitos diferentes (lição 94)" },
						{ it: "Mi sembra che parli anche di me.", pt: "opinião: *sembrare, credere, pensare* (lições 94 e 97)" },
						{ it: "Dicono che Tommaso abbia una cotta.", pt: "boato: *dicono che* (lição 95)" },
						{ it: "Può darsi che sia un capolavoro.", pt: "possibilidade: *può darsi che* (lição 95)" },
						{ it: "È inutile che tu faccia quella faccia.", pt: "expressão impessoal (lição 97)" },
						{ it: "A meno che non piova.", pt: "conjunção: *a meno che, prima che* (lições 93 e 94)" },
						{ it: "Chiunque ti veda capisce tutto.", pt: "*chiunque* (lição 97)" }
					]
				},
				{
					type: 'p',
					text: "Sem subjuntivo: com certeza (*so che*, *è vero che*, *sono sicuro che* + indicativo), com *forse* (*forse è un capolavoro*) e quando o sujeito é o mesmo, com infinitivo (*mi sembra di sognare*, *spero di venire*, *voglio scrivere*)."
				},
				{
					type: 'dica',
					text: "Um bom teste para o brasileiro: se em português você diria “que ele seja”, “que você vá”, “que tenha feito”, “que fosse”, o italiano quase sempre pede o subjuntivo também. A diferença principal está em *credo che* e *penso che*, que no italiano pedem subjuntivo e no português não (“acho que é”)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os relativos: che, cui, il quale, dove',
			blocks: [
				{
					type: 'p',
					text: "Para ligar duas frases falando da mesma coisa, o italiano tem quatro relativos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la sciarpa che ho comprato", pt: "*che*: sujeito ou objeto, sem preposição (lição 37)" },
						{ it: "Questo è il libro di cui ti ho parlato.", pt: "*cui*: depois de preposição, nunca muda (lição 92)" },
						{ it: "Il ragazzo del quale Valerio parla sempre.", pt: "*il quale*: concorda e junta a preposição (lição 92)" },
						{ it: "Il locale dove suona Tommaso è a Trastevere.", pt: "*dove*: para lugares, o mesmo que *in cui*" }
					]
				},
				{
					type: 'p',
					text: "*Il quale* tem quatro formas (*il quale, la quale, i quali, le quali*) e se combina com a preposição como um artigo: *dal quale*, *della quale*, *con i quali*. *Cui* entre o artigo e o substantivo vira “cujo”: *Valerio, il cui padre fa il tassista* (o Valerio, cujo pai é taxista)."
				},
				{
					type: 'dica',
					text: "Não confunda o relativo *che* com *chi* (lição 37), que quer dizer “quem” e não retoma nada antes dele: *chi perde paga la pizza* (lição 96), quem perder paga a pizza."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do telefonema para os Proietti até o táxi das cinco da manhã, estas expressões apareceram nas lições 92 a 97. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "C'è Valerio?", pt: "O Valerio está? (ao telefone)" },
						{ it: "È fuori. È uscito poco fa.", pt: "Ele saiu. Saiu agora há pouco." },
						{ it: "Volentieri!", pt: "Com prazer!" },
						{ it: "Ma quale disturbo!", pt: "Que incômodo que nada!" },
						{ it: "Ti va di...? Mi va!", pt: "Topa...? Topo!" },
						{ it: "Beato lui!", pt: "Sorte dele!" },
						{ it: "Ai miei tempi...", pt: "No meu tempo..." },
						{ it: "A proposito di...", pt: "Falando em..." },
						{ it: "Che hai?", pt: "O que você tem?" },
						{ it: "Sono di cattivo umore.", pt: "Estou de mau humor." },
						{ it: "Acqua in bocca!", pt: "Bico calado!" },
						{ it: "avere una cotta per", pt: "estar caidinho por" },
						{ it: "Ecco perché!", pt: "É por isso!" },
						{ it: "Sia chiaro.", pt: "Que fique claro." },
						{ it: "Magari!", pt: "Quem dera!" },
						{ it: "Se fossi in te...", pt: "Se eu fosse você..." },
						{ it: "pieno zeppo", pt: "lotado" },
						{ it: "pagare alla romana", pt: "rachar a conta" },
						{ it: "Ce la fai? Ce l'ho fatta!", pt: "Você consegue? Consegui!" },
						{ it: "Me ne vado.", pt: "Vou embora." },
						{ it: "Facciamo in tempo?", pt: "Dá tempo?" },
						{ it: "Muoio di sonno.", pt: "Estou morrendo de sono." }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém te contar um segredo, responda *Acqua in bocca!*. E, na hora da conta com os amigos, proponha: *Paghiamo alla romana?*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Spero che tu stia bene e che il viaggio sia andato bene.", pt: "Espero que você esteja bem e que a viagem tenha sido boa." },
				{ it: "Mia madre vuole che io torni a casa per Natale.", pt: "A minha mãe quer que eu volte para casa no Natal." },
				{ it: "Non credo che Matteo abbia capito.", pt: "Acho que o Matteo não entendeu." },
				{ it: "È meglio partire presto, prima che cominci a piovere.", pt: "É melhor sair cedo, antes que comece a chover." },
				{ it: "Pensavo che il film fosse più lungo.", pt: "Eu achava que o filme era mais longo." },
				{ it: "Se fossi in te, non lo farei.", pt: "Se eu fosse você, não faria isso." },
				{ it: "Il ragazzo di cui ti ho parlato suona il pianoforte.", pt: "O rapaz de quem eu te falei toca piano." },
				{ it: "Chiunque venga a Roma deve assaggiare i supplì.", pt: "Quem vier a Roma tem que provar os supplì." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Espero que vocês gostem da torta.", parts: ["Spero che la torta vi ", null, "."], answers: ["piaccia"] },
				{ pt: "Duvido que ele consiga.", parts: ["Dubito che ce la ", null, "."], answers: ["faccia"] },
				{ pt: "Eu queria que você viesse.", parts: ["Vorrei che tu ", null, "."], answers: ["venissi"] },
				{ pt: "Pode ser que ele já tenha saído.", parts: ["Può darsi che ", null, " già uscito."], answers: ["sia"] },
				{ pt: "A moça com a qual eu trabalho.", parts: ["La ragazza con la ", null, " lavoro."], answers: ["quale"] }
			]
		}
	]
};

export const unidade: Unit = { no: 14, title: 'Roma com amigos', lessons: [92, 93, 94, 95, 96, 97, 98] };

export const licoes: Lesson[] = [licao92, licao93, licao94, licao95, licao96, licao97, licao98];
