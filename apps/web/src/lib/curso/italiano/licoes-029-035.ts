import type { Lesson, Unit } from '../types.ts';

// Lições 29–35: de volta a Bolonha depois da viagem a Nápoles, todo mundo conta o que aconteceu.
// Chiara conta o dia à mãe por videochamada; festa em casa (Serena, prima da Chiara; Luca, amigo do Matteo)
// e a vizinha de baixo, a signora Bernardi; jantar com a Serena atrasada e sem carteira; entrevista com
// Marco Ferri, meio-campista do Bologna; a coleção de patinhos do signor Bruno, de Ferrara.
// Tema do bloco: o passato prossimo. Ver docs/agents/curso-assimil-mapa.md.

const licao29: Lesson = {
	no: 29,
	kind: 'licao',
	title: 'Che cosa hai fatto oggi?',
	titlePt: 'O que você fez hoje?',
	lines: [
		{
			it: "Ciao, tesoro! Allora, siete tornati a Bologna?",
			pt: "Oi, querida! E então, vocês voltaram para Bolonha?",
			lit: "Oi, tesouro! Então, sois voltados a Bolonha?",
			note: "Chiara faz uma videochamada com a mãe, em Nápoles. *Siete tornati* = vocês voltaram. É o **passato prossimo**, o passado do dia a dia: um auxiliar (*essere* ou *avere*) no presente + o particípio (*tornato*). *Tesoro* (tesouro) é um carinho comum entre pais e filhos."
		},
		{
			it: "Sì, mamma, siamo arrivati ieri sera, stanchissimi.",
			pt: "Voltamos, mãe, chegamos ontem à noite, mortos de cansaço.",
			lit: "Sim, mamãe, somos chegados ontem noite, cansadíssimos.",
			note: "Com *essere*, o particípio concorda com o sujeito, como um adjetivo: *arrivati*, no masculino plural, porque são a Chiara e o Rafael. Grupo com pelo menos um homem vai para o masculino. *Ieri sera* = ontem à noite."
		},
		{
			it: "E oggi? Che cosa hai fatto di bello?",
			pt: "E hoje? O que você fez de bom?",
			lit: "E hoje? Que coisa tens feito de belo?",
			note: "*Hai fatto* = você fez. *Fare* tem um particípio irregular, *fatto*, que você já conhece de *affare fatto* (lição 3). *Che cosa hai fatto di bello?* é a pergunta de sempre para saber das novidades."
		},
		{
			it: "Stamattina sono andata dal medico, per il mal di gola.",
			pt: "Hoje de manhã fui ao médico, por causa da dor de garganta.",
			lit: "Esta manhã sou ida do médico, pelo mal de garganta.",
			note: "*Sono andata*: *andare* usa *essere*, e o particípio termina em *-a* porque quem fala é mulher. O Rafael diria *sono andato*. *Dal medico*: com pessoas, “ir a” e “estar em” se dizem com *da* (*da* + *il* = *dal*). *Stamattina* = *questa mattina*, como *stasera*."
		},
		{ it: "Dal medico? Stai male?", pt: "Ao médico? Você está doente?", lit: "Do médico? Estás mal?" },
		{
			it: "No, niente di grave. Ha guardato la gola e ha consigliato un po' di riposo.",
			pt: "Não, nada grave. Ele olhou a garganta e recomendou um pouco de descanso.",
			lit: "Não, nada de grave. Tem olhado a garganta e tem aconselhado um pouco de repouso.",
			note: "*Ha guardato*, *ha consigliato*: verbos com objeto usam *avere*. Todos os verbos em *-are* fazem o particípio em *-ato*: *guardare* → *guardato*, *consigliare* → *consigliato*."
		},
		{ it: "Bene. E poi?", pt: "Que bom. E depois?", lit: "Bem. E depois?" },
		{
			it: "Poi ho fatto la spesa e ho comprato le solite cose: pane, latte, frutta.",
			pt: "Depois fiz as compras e comprei as coisas de sempre: pão, leite, fruta.",
			lit: "Depois tenho feito a despesa e tenho comprado as habituais coisas: pão, leite, fruta.",
			note: "*Fare la spesa* = fazer as compras do dia a dia (mercado, padaria). Para lojas de roupa e afins, diz-se *fare spese*. *Solito* = habitual, de sempre: *le solite cose*."
		},
		{ it: "Hai cucinato tu?", pt: "Foi você que cozinhou?", lit: "Tens cozinhado tu?" },
		{
			it: "No, oggi ha cucinato Matteo! Ha preparato le tagliatelle al ragù.",
			pt: "Não, hoje quem cozinhou foi o Matteo! Ele fez talharim à bolonhesa.",
			lit: "Não, hoje tem cozinhado Matteo! Tem preparado as tagliatelle ao ragu.",
			note: "Com *avere*, o particípio não muda: *Matteo ha cucinato*, *Chiara ha cucinato*, *le ragazze hanno cucinato*. Em Bolonha, o molho de carne se chama *ragù*, e vai com *tagliatelle*, não com espaguete."
		},
		{ it: "E Rafael? Ha mangiato anche lui?", pt: "E o Rafael? Ele também comeu?" },
		{
			it: "Certo! Ha mangiato due piatti di tagliatelle e poi ha lavato tutti i piatti.",
			pt: "Claro! Comeu dois pratos de talharim e depois lavou toda a louça.",
			lit: "Certo! Tem comido dois pratos de tagliatelle e depois tem lavado todos os pratos.",
			note: "*Il piatto* é o prato, tanto a comida quanto a louça. *Lavare i piatti* = lavar a louça."
		},
		{ it: "Bravo ragazzo! E tu? Hai studiato un po'?", pt: "Bom rapaz! E você? Estudou um pouco?" },
		{
			it: "Sì, nel pomeriggio sono andata in biblioteca, come al solito.",
			pt: "Sim, à tarde fui à biblioteca, como sempre.",
			lit: "Sim, no período da tarde sou ida em biblioteca, como ao habitual.",
			note: "*Come al solito* = como de costume, como sempre. *Nel pomeriggio* = à tarde."
		},
		{
			it: "Brava. Allora stasera a letto presto! Un bacio a tutti!",
			pt: "Muito bem. Então hoje cama cedo! Um beijo para todos!",
			lit: "Brava. Então esta noite a cama cedo! Um beijo a todos!",
			note: "*A letto*, sem artigo, como *a casa* (lição 25). *Brava* e *bravo* elogiam: “muito bem”, “bom menino”."
		},
		{
			it: "Ieri Matteo è andato dal barbiere.",
			pt: "Ontem o Matteo foi ao barbeiro.",
			sep: true,
			note: "*Andato*, no masculino: o sujeito é o Matteo. E de novo *da* + pessoa: *dal barbiere*."
		},
		{
			it: "Le ragazze sono tornate tardi.",
			pt: "As meninas voltaram tarde.",
			note: "Feminino plural: *tornate*. Com *essere*, o particípio tem as quatro formas de um adjetivo: *tornato, tornata, tornati, tornate*."
		},
		{ it: "Abbiamo comprato il solito pane.", pt: "Compramos o pão de sempre." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O passato prossimo',
			blocks: [
				{
					type: 'p',
					text: "Até aqui, quase tudo aconteceu no presente. Hoje você conhece o passado mais usado do italiano falado: o *passato prossimo*. Ele se forma com um auxiliar no presente (*avere* ou *essere*) e o particípio do verbo. *Ho mangiato* parece “tenho comido”, mas o sentido é o do nosso pretérito: “comi”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ho comprato", pt: "comprei" },
						{ it: "hai studiato", pt: "você estudou" },
						{ it: "ha cucinato", pt: "ele, ela cozinhou" },
						{ it: "abbiamo mangiato", pt: "comemos" },
						{ it: "avete lavorato", pt: "vocês trabalharam" },
						{ it: "hanno pagato", pt: "eles pagaram" }
					]
				},
				{ type: 'h', text: 'O particípio em -ato' },
				{
					type: 'p',
					text: "Nos verbos em *-are*, troque o *-are* por *-ato*: *parlare* → *parlato*, *comprare* → *comprato*, *andare* → *andato*. Não há exceção nesse grupo. Os particípios dos outros grupos chegam nas próximas lições. *Fatto*, de *fare*, é irregular: guarde como está."
				},
				{ type: 'h', text: 'Com avere, o particípio não muda' },
				{
					type: 'p',
					text: "A maioria dos verbos usa *avere*, principalmente os que têm objeto (comprar alguma coisa, olhar alguma coisa). Nesse caso, o particípio fica sempre em *-o*, seja quem for o sujeito: *Matteo ha cucinato*, *Chiara ha cucinato*, *abbiamo cucinato*."
				},
				{ type: 'h', text: 'Com essere, ele concorda' },
				{
					type: 'p',
					text: "Alguns verbos usam *essere*: os de movimento e de mudança que não têm objeto, como *andare*, *arrivare*, *tornare*, *entrare*, *restare*. Aí o particípio se comporta como um adjetivo e concorda com o sujeito."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Matteo è andato dal barbiere.", pt: "O Matteo foi ao barbeiro." },
						{ it: "Chiara è andata dal medico.", pt: "A Chiara foi ao médico." },
						{ it: "Siamo arrivati ieri sera.", pt: "Chegamos ontem à noite." },
						{ it: "Le ragazze sono tornate tardi.", pt: "As meninas voltaram tarde." }
					]
				},
				{
					type: 'dica',
					text: "Pense em *Chiara è tornata* como em *Chiara è stanca*: depois de *essere*, a palavra concorda. Por isso *tornata*, com *a*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Da + pessoa, fare la spesa, solito',
			blocks: [
				{
					type: 'p',
					text: "Para ir à casa ou ao local de trabalho de alguém, o italiano usa *da* + a pessoa, onde nós dizemos “ao”, “na casa de”. Serve tanto para ir quanto para estar."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "dal **me**dico", pt: "ao médico, no médico" },
						{ it: "dal bar**bie**re", pt: "ao barbeiro, no barbeiro" },
						{ it: "da Mat**te**o", pt: "na casa do Matteo" },
						{ it: "dalla **non**na", pt: "na casa da avó" }
					]
				},
				{
					type: 'p',
					text: "Com lugares, continua valendo o que você já sabe: *in biblioteca*, *in farmacia*, *al mercato*. Compare: *vado in farmacia* (vou à farmácia) e *vado dal farmacista* (vou ao farmacêutico)."
				},
				{ type: 'h', text: 'Fare la spesa × fare spese' },
				{
					type: 'p',
					text: "*Fare la spesa* é comprar comida e coisas de casa. *Fare spese* (ou *fare shopping*) é passear pelas lojas comprando roupa, presentes, coisas assim."
				},
				{ type: 'h', text: 'Solito' },
				{
					type: 'p',
					text: "*Solito* quer dizer habitual, o de sempre. Aparece em três expressões muito comuns: *le solite cose* (as coisas de sempre), *come al solito* (como sempre) e *di solito* (normalmente, em geral): *di solito ceno alle otto*. No bar, *il solito?* é a pergunta do barista que já conhece você."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ieri sera abbiamo mangiato da Matteo.", pt: "Ontem à noite comemos na casa do Matteo." },
				{ it: "Chiara è andata in biblioteca nel pomeriggio.", pt: "A Chiara foi à biblioteca à tarde." },
				{ it: "Hai fatto la spesa? Sì, ho comprato pane e frutta.", pt: "Você fez as compras? Fiz, comprei pão e fruta." },
				{ it: "Rafael e Chiara sono tornati da Napoli.", pt: "O Rafael e a Chiara voltaram de Nápoles." },
				{ it: "Stamattina ho lavorato, come al solito.", pt: "Hoje de manhã trabalhei, como sempre." },
				{ it: "Le amiche di Chiara sono arrivate ieri.", pt: "As amigas da Chiara chegaram ontem." },
				{ it: "Chi ha lavato i piatti?", pt: "Quem lavou a louça?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Hoje de manhã comprei o jornal.", parts: ["Stamattina ", null, " comprato il giornale."], answers: ["ho"] },
				{ pt: "A Chiara foi ao médico.", parts: ["Chiara è ", null, " dal medico."], answers: ["andata"] },
				{ pt: "Nós chegamos ontem à noite.", parts: ["Siamo ", null, " ieri sera."], answers: ["arrivati"] },
				{ pt: "O Matteo foi ao barbeiro.", parts: ["Matteo è andato ", null, " barbiere."], answers: ["dal"] },
				{ pt: "Como sempre, o Rafael lavou a louça.", parts: ["Come al ", null, ", Rafael ha lavato i piatti."], answers: ["solito"] }
			]
		}
	]
};

const licao30: Lesson = {
	no: 30,
	kind: 'licao',
	title: 'La festa di ieri sera',
	titlePt: 'A festa de ontem à noite',
	lines: [
		{
			it: "Buongiorno... Che ore sono?",
			pt: "Bom dia... Que horas são?"
		},
		{
			it: "Mezzogiorno! Ieri sera abbiamo fatto tardi, eh?",
			pt: "Meio-dia! Ontem à noite a gente foi dormir tarde, hein?",
			lit: "Meio-dia! Ontem noite temos feito tarde, eh?",
			note: "*Fare tardi* = ficar acordado até tarde, ou chegar tarde. É domingo de manhã, depois da festa que o Matteo, a Chiara e o Rafael deram em casa."
		},
		{
			it: "Che festa! Quante persone sono venute?",
			pt: "Que festa! Quantas pessoas vieram?",
			lit: "Que festa! Quantas pessoas são vindas?",
			note: "*Venire* (vir) usa *essere*, e o particípio é *venuto*: os verbos em *-ere* fazem o particípio em *-uto*. Aqui *venute* concorda com *persone*, feminino plural."
		},
		{
			it: "Più di venti. Sono venuti i miei colleghi, le amiche di Chiara, i tuoi compagni del corso...",
			pt: "Mais de vinte. Vieram os meus colegas, as amigas da Chiara, os seus colegas do curso...",
			lit: "Mais de vinte. São vindos os meus colegas, as amigas de Chiara, os teus companheiros do curso...",
			note: "Sujeito misto (homens e mulheres): o particípio vai para o masculino plural, *venuti*. *Compagno* é colega de classe; *collega*, colega de trabalho."
		},
		{
			it: "E la ragazza con i capelli rossi? Chi è?",
			pt: "E a moça de cabelo ruivo? Quem é?",
			lit: "E a moça com os cabelos vermelhos? Quem é?",
			note: "Em italiano, cabelo se diz quase sempre no plural: *i capelli*. E cabelo ruivo é *rosso*, vermelho."
		},
		{
			it: "È Serena, la cugina di Chiara. Studia qui a Bologna. Ha conosciuto tutti in cinque minuti!",
			pt: "É a Serena, prima da Chiara. Estuda aqui em Bolonha. Conheceu todo mundo em cinco minutos!",
			note: "*Conoscere* → *conosciuto*: o *i* entra para manter o som “x” de *conosci* (lição 12). *Tutti* = todos, todo mundo."
		},
		{
			it: "E abbiamo bevuto... Quanto abbiamo bevuto?",
			pt: "E a gente bebeu... Quanto a gente bebeu?",
			lit: "E temos bebido... Quanto temos bebido?",
			note: "*Bere* forma tudo sobre *bev-* (lição 5), e o particípio também: *bevuto*."
		},
		{
			it: "Troppo! Io ho bevuto solo vino, ma Luca ha bevuto anche la grappa.",
			pt: "Demais! Eu só bebi vinho, mas o Luca bebeu até grappa.",
			lit: "Demais! Eu tenho bebido só vinho, mas Luca tem bebido também a grappa.",
			note: "*Grappa* é a aguardente de uva do norte da Itália, fortíssima. Luca é um amigo do Matteo."
		},
		{
			it: "Povero Luca! Alla fine è restato da noi, a dormire sul divano.",
			pt: "Coitado do Luca! No fim ficou aqui em casa, dormindo no sofá.",
			lit: "Pobre Luca! Ao fim é ficado de nós, a dormir sobre o sofá.",
			note: "*Da* também funciona com pronome: *da me* (na minha casa), *da te*, *da lui*, *da lei*, *da noi*, *da voi*, *da loro*. *Restare* (ficar) usa *essere*."
		},
		{
			it: "E Serena e le altre?",
			pt: "E a Serena e as outras?"
		},
		{
			it: "Sono andate tutte da lei: abita qui vicino.",
			pt: "Foram todas para a casa dela: ela mora aqui perto.",
			lit: "São idas todas de ela: mora aqui perto.",
			note: "Só mulheres: *andate*, feminino plural. *Da lei* = na casa dela."
		},
		{
			it: "Io ho riso tutta la sera con la storia di Luca e del gatto.",
			pt: "Eu ri a noite inteira com a história do Luca e do gato.",
			lit: "Eu tenho rido toda a noite com a história de Luca e do gato.",
			note: "*Ridere* (rir) tem particípio irregular: *riso*. Não confunda com *il riso*, o arroz da lição 3. O contexto separa: *ho riso* (ri) e *ho comprato il riso* (comprei arroz)."
		},
		{
			it: "E dopo la festa siamo andati in giro per il centro fino alle tre!",
			pt: "E depois da festa a gente ficou rodando pelo centro até as três!",
			lit: "E depois da festa somos idos em giro pelo centro até às três!",
			note: "*Andare in giro* = dar uma volta, passear sem destino certo. Muito usado à noite e no fim de semana."
		},
		{
			it: "Sì, e abbiamo preso una piadina in piazza Maggiore.",
			pt: "É, e comemos uma piadina na Piazza Maggiore.",
			lit: "Sim, e temos pegado uma piadina em praça Maior.",
			note: "*Prendere* → *preso*, outro particípio irregular. *Prendere* serve para comida e bebida, como você viu no bar (lição 5). A *piadina* é um pão achatado e recheado da Romanha; a Piazza Maggiore é a praça principal de Bolonha."
		},
		{
			it: "La prossima festa? Da te, a Recife!",
			pt: "A próxima festa? Na sua casa, em Recife!",
			lit: "A próxima festa? De ti, a Recife!"
		},
		{
			it: "Da me? A Recife le feste finiscono alle sei di mattina!",
			pt: "Lá em casa? Em Recife as festas terminam às seis da manhã!",
			lit: "De mim? A Recife as festas terminam às seis de manhã!"
		},
		{ it: "Allora vengo di sicuro!", pt: "Então eu vou com certeza!", lit: "Então venho de certo!" },
		{
			it: "Siete venuti da noi? No, siamo andati da loro.",
			pt: "Vocês vieram à nossa casa? Não, fomos à casa deles.",
			lit: "Sois vindos de nós? Não, somos idos de eles.",
			sep: true,
			note: "*Da noi*, *da loro*: na nossa casa, na casa deles. Repare que o italiano usa *venire* para vir até onde está quem fala e *andare* para ir a outro lugar, como nós."
		},
		{
			it: "Chiara e Serena hanno riso tanto.",
			pt: "A Chiara e a Serena riram muito.",
			note: "Com *avere*, nada de concordância, mesmo com sujeito feminino plural: *hanno riso*."
		},
		{ it: "Il gatto ha bevuto tutto il latte.", pt: "O gato bebeu o leite todo." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Particípios em -uto e a concordância',
			blocks: [
				{
					type: 'p',
					text: "Na lição 29 você viu que os verbos em *-are* fazem o particípio em *-ato*. Os verbos em *-ere* fazem em *-uto*. Compare com o português, que diz “vendido”, “bebido”: o italiano tem *u* onde nós temos *i*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "venire → venuto", pt: "vir → vindo", pron: "ve-nú-to" },
						{ it: "bere → bevuto", pt: "beber → bebido", pron: "be-vú-to" },
						{ it: "conoscere → conosciuto", pt: "conhecer → conhecido", pron: "ko-no-xú-to" },
						{ it: "vendere → venduto", pt: "vender → vendido" },
						{ it: "credere → creduto", pt: "crer → crido" },
						{ it: "ricevere → ricevuto", pt: "receber → recebido" }
					]
				},
				{
					type: 'p',
					text: "*Venire* termina em *-ire*, mas faz *venuto*: trate como exceção. E muitos verbos em *-ere* têm particípio irregular. Hoje apareceram dois: *ridere* → *riso* e *prendere* → *preso*. Vale guardá-los como palavras novas, junto com o infinitivo."
				},
				{ type: 'h', text: 'A concordância com essere, no plural' },
				{
					type: 'p',
					text: "Com *essere*, o particípio concorda com o sujeito em gênero e número. No plural, a regra é a mesma dos adjetivos: só mulheres, feminino; homens, ou homens e mulheres juntos, masculino."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Serena e le altre sono andate da lei.", pt: "Só mulheres: *andate*." },
						{ it: "Luca e Matteo sono andati in giro.", pt: "Só homens: *andati*." },
						{ it: "Sono venuti i colleghi e le amiche.", pt: "Grupo misto: *venuti*." },
						{ it: "Chiara e Serena hanno riso.", pt: "Com *avere*, nada muda: *riso*." }
					]
				},
				{ type: 'h', text: 'Da me, da te, da loro' },
				{
					type: 'p',
					text: "*Da* + pronome indica a casa de alguém, sem precisar dizer *casa*. Os pronomes depois de preposição são *me, te, lui, lei, noi, voi, loro*: *vieni da me stasera?* (vem lá em casa hoje à noite?), *dormo da loro* (durmo na casa deles). O mesmo vale para lojas e escritórios: *da noi* pode ser “aqui na nossa loja”."
				},
				{
					type: 'dica',
					text: "*Andare in giro* é perfeito para responder ao clássico *che cosa avete fatto ieri sera?*: *Niente di speciale, siamo andati in giro.* (Nada de especial, fomos dar uma volta.)"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ieri sera sono venuti da me Luca e Sara.", pt: "Ontem à noite o Luca e a Sara vieram à minha casa." },
				{ it: "Abbiamo bevuto un caffè e siamo andati in giro.", pt: "Tomamos um café e fomos dar uma volta." },
				{ it: "Serena ha conosciuto i colleghi di Matteo.", pt: "A Serena conheceu os colegas do Matteo." },
				{ it: "Le ragazze sono restate da noi fino alle due.", pt: "As meninas ficaram aqui em casa até as duas." },
				{ it: "Hai preso una piadina? No, ho preso un gelato.", pt: "Você comeu uma piadina? Não, tomei um sorvete." },
				{ it: "Abbiamo riso tutta la sera.", pt: "A gente riu a noite inteira." },
				{ it: "Matteo ha venduto la sua chitarra.", pt: "O Matteo vendeu o violão dele." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Quantas pessoas vieram?", parts: ["Quante persone sono ", null, "?"], answers: ["venute"] },
				{ pt: "O Luca bebeu grappa.", parts: ["Luca ha ", null, " la grappa."], answers: ["bevuto"] },
				{ pt: "Hoje à noite você vem na minha casa?", parts: ["Stasera vieni da ", null, "?"], answers: ["me"] },
				{ pt: "O Matteo e a Chiara foram dar uma volta.", parts: ["Matteo e Chiara sono andati in ", null, "."], answers: ["giro"] },
				{ pt: "Eu ri muito.", parts: ["Ho ", null, " tanto."], answers: ["riso"] }
			]
		}
	]
};

const licao31: Lesson = {
	no: 31,
	kind: 'licao',
	title: 'La vicina del piano di sotto',
	titlePt: 'A vizinha de baixo',
	lines: [
		{
			it: "Chi è?",
			pt: "Quem é?"
		},
		{
			it: "Sono la signora Bernardi, del piano di sotto.",
			pt: "É a senhora Bernardi, do andar de baixo.",
			lit: "Sou a senhora Bernardi, do andar de baixo.",
			note: "*Il piano* = o andar. *Di sotto* = de baixo; *di sopra* = de cima. No interfone, o italiano diz *sono* + nome, onde nós dizemos “é o fulano”."
		},
		{
			it: "Buongiorno, signora! Come sta?",
			pt: "Bom dia, senhora! Como vai?"
		},
		{
			it: "Male, caro, male. Stanotte non ho dormito per niente.",
			pt: "Mal, querido, mal. Esta noite eu não dormi nada.",
			lit: "Mal, caro, mal. Esta noite não tenho dormido por nada.",
			note: "Terceiro grupo de particípios: os verbos em *-ire* fazem *-ito*. *Dormire* → *dormito*. *Stanotte* = esta noite (a que passou ou a que vem). *Per niente* reforça a negação: nada, de jeito nenhum."
		},
		{
			it: "Oh, mi dispiace. Ha sentito la musica?",
			pt: "Ah, sinto muito. A senhora ouviu a música?",
			note: "*Sentire* → *sentito*. *Sentire* é ouvir, e também sentir (lição 9)."
		},
		{
			it: "La musica, le risate, i balli... Ho sentito tutto! Gli ultimi ospiti sono usciti alle due e mezza.",
			pt: "A música, as risadas, a dança... Eu ouvi tudo! Os últimos convidados saíram às duas e meia.",
			lit: "A música, as risadas, os bailes... Tenho ouvido tudo! Os últimos hóspedes são saídos às duas e meia.",
			note: "*Uscire* (sair) também faz *-ito*, mas usa *essere*: *sono usciti*. *Ospite* é a visita, o convidado (e também quem recebe)."
		},
		{
			it: "Ha ragione, signora, scusi. Abbiamo avuto ospiti: una festa per il ritorno da Napoli.",
			pt: "A senhora tem razão, desculpe. Recebemos visitas: uma festa pela volta de Nápoles.",
			lit: "Tem razão, senhora, desculpe. Temos tido hóspedes: uma festa pelo retorno de Nápoles.",
			note: "*Avere* forma o passato com ele mesmo: *ho avuto*, *abbiamo avuto*. *Avere ragione* = ter razão."
		},
		{
			it: "Lo so, caro, lo so. E io sono stata sveglia tutta la notte.",
			pt: "Eu sei, querido, eu sei. E eu fiquei acordada a noite inteira.",
			lit: "O sei, caro, o sei. E eu sou estada acordada toda a noite.",
			note: "*Essere* também forma o passato com ele mesmo, e o particípio é *stato*: *sono stato*, *sono stata*. *Lo so* = eu sei (literalmente “o sei”); o italiano quase nunca diz só *so*."
		},
		{
			it: "Scusi, signora, è colpa mia. Ho cantato io!",
			pt: "Desculpe, senhora, a culpa é minha. Fui eu que cantei!",
			lit: "Desculpe, senhora, é culpa minha. Tenho cantado eu!",
			note: "O pronome depois do verbo dá ênfase: *ho cantato io* = fui eu que cantei. Já tinha aparecido em *offro io* (lição 5)."
		},
		{
			it: "Ah, sei tu il brasiliano che canta! Ho capito.",
			pt: "Ah, você é o brasileiro que canta! Entendi.",
			lit: "Ah, és tu o brasileiro que canta! Tenho entendido.",
			note: "*Capire* → *capito*. *Ho capito* é o nosso “entendi”, e se ouve o tempo todo. A senhora trata os rapazes por *tu*; eles respondem com *Lei*."
		},
		{
			it: "Però anche mio marito ha ballato in salotto fino all'una. È stato contentissimo!",
			pt: "Mas o meu marido também dançou na sala até a uma. Ficou felicíssimo!",
			lit: "Porém também meu marido tem dançado em sala até à uma. É estado contentíssimo!",
			note: "*È stato*, no masculino, porque fala do marido. *Fino all'una*: a uma hora é *l'una*, no singular."
		},
		{
			it: "Davvero? Allora la prossima volta invitiamo anche voi!",
			pt: "Sério? Então da próxima vez convidamos vocês também!"
		},
		{
			it: "Ecco, bravo. Ma adesso torno a letto.",
			pt: "Isso, muito bem. Mas agora vou voltar para a cama.",
			lit: "Eis, bravo. Mas agora volto a cama.",
			note: "*Adesso* (agora) + presente fala do que vai acontecer em seguida: *adesso torno a letto* = agora vou voltar para a cama. Não precisa de outro tempo verbal."
		},
		{
			it: "E noi adesso puliamo tutto, promesso.",
			pt: "E nós vamos limpar tudo agora, prometido.",
			lit: "E nós agora limpamos tudo, prometido.",
			note: "*Pulire* = limpar (*pulisco, pulisci*, com *-isc-*, como *finire*). *Promesso* é o particípio irregular de *promettere*: prometido."
		},
		{
			it: "Mi raccomando, ragazzi: stasera silenzio!",
			pt: "Vejam bem, pessoal: hoje à noite, silêncio!",
			lit: "Me recomendo, rapazes: esta noite silêncio!",
			note: "*Mi raccomando* é um pedido insistente: “por favor, hein”, “vê lá”, “não esqueça”. Pais dizem isso o tempo todo aos filhos."
		},
		{
			it: "Ragazzi, chi ha suonato alla porta?",
			pt: "Gente, quem tocou a campainha?",
			lit: "Rapazes, quem tem tocado à porta?",
			note: "*Suonare* é tocar instrumento (lição 3) e também tocar a campainha: *suonare alla porta*, *suonare il campanello*."
		},
		{ it: "La signora Bernardi. Hai dormito bene, tu?", pt: "A senhora Bernardi. Você dormiu bem?" },
		{ it: "Benissimo! Non ho sentito niente.", pt: "Muito bem! Não ouvi nada." },
		{
			it: "Avete capito? Sì, abbiamo capito tutto.",
			pt: "Vocês entenderam? Sim, entendemos tudo.",
			sep: true
		},
		{
			it: "Serena è partita stamattina per Napoli.",
			pt: "A Serena partiu hoje de manhã para Nápoles.",
			note: "*Partire* → *partito*, com *essere*: *partita*, porque é a Serena."
		},
		{
			it: "Adesso finisco i compiti e poi esco.",
			pt: "Agora vou terminar a lição de casa e depois saio.",
			note: "*Adesso* + presente de novo, para o que vem logo em seguida. *I compiti* = a lição de casa."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Particípios em -ito; avere e essere no passado',
			blocks: [
				{
					type: 'p',
					text: "Agora você tem os três modelos regulares: *-are* → *-ato*, *-ere* → *-uto*, *-ire* → *-ito*. O terceiro é igual ao português: “dormido”, “sentido”, “partido”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "dormire → ho dormito", pt: "dormi" },
						{ it: "sentire → ho sentito", pt: "ouvi, senti" },
						{ it: "capire → ho capito", pt: "entendi" },
						{ it: "finire → ho finito", pt: "terminei" },
						{ it: "partire → sono partito", pt: "parti" },
						{ it: "uscire → sono uscito", pt: "saí" }
					]
				},
				{
					type: 'p',
					text: "Os verbos com *-isc-* (*capire*, *finire*, *pulire*, lição 11) não levam o *-isc-* no particípio: *capito*, *finito*, *pulito*."
				},
				{ type: 'h', text: 'O passado de avere e de essere' },
				{
					type: 'p',
					text: "Cada um desses dois verbos usa a si mesmo como auxiliar. *Avere* fica *ho avuto* (tive); *essere* fica *sono stato* (fui, estive). E como usa *essere*, *stato* concorda: *sono stata*, *siamo stati*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Abbiamo avuto ospiti.", pt: "Recebemos visitas. (Tivemos visitas.)" },
						{ it: "Sono stata sveglia tutta la notte.", pt: "Fiquei acordada a noite toda." },
						{ it: "Mio marito è stato contentissimo.", pt: "Meu marido ficou felicíssimo." },
						{ it: "Siete stati a Napoli?", pt: "Vocês estiveram em Nápoles?" }
					]
				},
				{
					type: 'dica',
					text: "*Sono stato* cobre “fui” e “estive”, porque *essere* faz o papel de “ser” e de “estar”. *Sono stato a Roma* = estive em Roma; *è stato bello* = foi lindo."
				},
				{ type: 'h', text: 'Adesso + presente' },
				{
					type: 'p',
					text: "Para o que vai acontecer em seguida, o italiano usa o presente, muitas vezes com *adesso* ou *ora*: *adesso torno a letto*, *adesso puliamo tutto*. Onde nós dizemos “vou fazer”, eles dizem “faço”. Você já tinha visto o presente com sentido de futuro em *stasera torniamo qui* (lição 5)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Morar num prédio italiano',
			blocks: [
				{
					type: 'p',
					text: "Nas cidades italianas, a maioria das pessoas mora em apartamento, em prédios antigos com poucos andares, escada estreita e paredes que deixam passar muito som. A convivência tem regras, escritas ou não."
				},
				{
					type: 'p',
					text: "O regulamento do condomínio costuma pedir silêncio à noite e também no começo da tarde, depois do almoço. Uma festa em casa é normal, mas manda a boa educação avisar os vizinhos antes, de preferência com um bilhete na entrada. Se a música passar da conta, não estranhe se alguém tocar a campainha, como a *signora Bernardi*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **pia**no di **sot**to / di **so**pra", pt: "o andar de baixo / de cima" },
						{ it: "il piano**ter**ra", pt: "o térreo" },
						{ it: "il campa**nel**lo", pt: "a campainha" },
						{ it: "il condo**mi**nio", pt: "o condomínio, o prédio" }
					]
				},
				{
					type: 'dica',
					text: "O térreo é *il pianoterra*; o primeiro andar, *il primo piano*. Quem mora *al terzo piano* sobe três lances de escada, e em prédio antigo muitas vezes não tem elevador."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Stanotte non ho dormito per niente.", pt: "Esta noite eu não dormi nada." },
				{ it: "Hai capito? No, non ho capito.", pt: "Você entendeu? Não, não entendi." },
				{ it: "Siamo stati a Napoli per una settimana.", pt: "Ficamos em Nápoles uma semana." },
				{ it: "Gli ospiti sono usciti tardi.", pt: "As visitas saíram tarde." },
				{ it: "Ieri ho avuto lezione fino alle sei.", pt: "Ontem tive aula até as seis." },
				{ it: "Adesso pulisco la cucina.", pt: "Agora vou limpar a cozinha." },
				{ it: "Mi raccomando, chiudi la porta!", pt: "Vê lá, feche a porta, hein!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você dormiu bem?", parts: ["Hai ", null, " bene?"], answers: ["dormito"] },
				{ pt: "Nós tivemos visitas.", parts: ["Abbiamo ", null, " ospiti."], answers: ["avuto"] },
				{ pt: "A Chiara esteve em Roma.", parts: ["Chiara è ", null, " a Roma."], answers: ["stata"] },
				{ pt: "Os rapazes saíram às duas.", parts: ["I ragazzi sono ", null, " alle due."], answers: ["usciti"] },
				{ pt: "Ouvi tudo!", parts: ["Ho ", null, " tutto!"], answers: ["sentito"] }
			]
		}
	]
};

const licao32: Lesson = {
	no: 32,
	kind: 'licao',
	title: "Un'amica in ritardo",
	titlePt: 'Uma amiga atrasada',
	lines: [
		{
			it: "Buonasera! Quanti siete?",
			pt: "Boa noite! Quantas pessoas?",
			lit: "Boa noite! Quantos sois?"
		},
		{
			it: "Siamo in tre, ma aspettiamo un'amica.",
			pt: "Somos três, mas estamos esperando uma amiga.",
			lit: "Somos em três, mas esperamos uma amiga.",
			note: "*Siamo in tre*, *siamo in due*: é assim que se diz quantas pessoas estão no grupo. *Aspettare* = esperar, sem preposição: *aspetto un'amica*."
		},
		{
			it: "Allora vi do questo tavolo, vicino alla finestra.",
			pt: "Então vou dar a vocês esta mesa, perto da janela.",
			lit: "Então vos dou esta mesa, perto à janela.",
			note: "*Il tavolo* é a mesa, o móvel. *La tavola* é a mesa posta para comer, e aparece em expressões: *a tavola!* (para a mesa!, a comida está pronta), *apparecchiare la tavola* (pôr a mesa). Na prática, os dois se misturam bastante."
		},
		{
			it: "Sono le otto e mezza. Serena è in ritardo, come al solito.",
			pt: "São oito e meia. A Serena está atrasada, como sempre.",
			lit: "São as oito e meia. Serena é em atraso, como ao habitual.",
			note: "*Essere in ritardo* = estar atrasado. O contrário é *essere in anticipo* (estar adiantado) e *essere puntuale*."
		},
		{
			it: "Ho chiamato Serena due volte, ma niente.",
			pt: "Liguei para a Serena duas vezes, mas nada.",
			lit: "Tenho chamado Serena duas vezes, mas nada.",
			note: "*Chiamare* = chamar e também ligar, telefonar."
		},
		{
			it: "Eccola! È arrivata.",
			pt: "Olha ela aí! Chegou.",
			lit: "Eis-a! É chegada.",
			note: "*Ecco* + pronome, tudo junto: *eccola* (aqui está ela), *eccolo* (ele, lição 5), *eccoli* (eles), *eccole* (elas), *eccomi* (aqui estou)."
		},
		{
			it: "Scusate, scusate! Bologna stasera è piena di traffico e ho aspettato l'autobus mezz'ora.",
			pt: "Desculpem, desculpem! Bolonha hoje à noite está cheia de trânsito e esperei o ônibus meia hora.",
			lit: "Desculpai, desculpai! Bolonha esta noite é cheia de tráfego e tenho esperado o ônibus meia hora.",
			note: "Nomes de cidade são femininos em italiano, mesmo os que terminam em *-o*: *Bologna è piena*, *Milano è cara*, *Napoli è bellissima*. *Scusate* é o “desculpem” para *voi*."
		},
		{
			it: "Su, a tavola! Abbiamo chiesto il menù del giorno.",
			pt: "Vamos, senta! Pedimos o cardápio do dia.",
			lit: "Vamos, à mesa! Temos pedido o menu do dia.",
			note: "*Chiedere* (pedir, perguntar, lição 16) tem particípio irregular: *chiesto*."
		},
		{
			it: "E che cosa c'è di buono?",
			pt: "E o que tem de bom?"
		},
		{
			it: "Tortellini in brodo e cotoletta alla bolognese.",
			pt: "Tortellini em caldo e milanesa à bolonhesa.",
			note: "Dois clássicos de Bolonha: *tortellini* servidos num caldo de carne e a *cotoletta alla bolognese*, empanada, com presunto e queijo por cima."
		},
		{
			it: "Ecco i tortellini, ragazzi. Buon appetito!",
			pt: "Aqui estão os tortellini, pessoal. Bom apetite!"
		},
		{
			it: "Eccoli, finalmente! Ho una fame...",
			pt: "Até que enfim! Estou com uma fome...",
			lit: "Eis-os, finalmente! Tenho uma fome...",
			note: "*Eccoli*: eles, os tortellini. Fome se *tem*: *ho fame*, como em *ho sete* (estou com sede)."
		},
		{
			it: "Oddio, il portafoglio! Non ce l'ho!",
			pt: "Ai, meu Deus, a carteira! Não estou com ela!",
			lit: "Ó Deus, a carteira! Não a tenho!",
			note: "Você conhece *non ce l'ho* desde a lição 2. O *l'* retoma uma coisa só, masculina ou feminina: *il portafoglio? Non ce l'ho*; *la penna? Ce l'ho*."
		},
		{
			it: "Tranquilla, i soldi ce li ho io. Pago io.",
			pt: "Calma, o dinheiro está comigo. Eu pago.",
			lit: "Tranquila, os dinheiros os tenho eu. Pago eu.",
			note: "*I soldi* (dinheiro) é sempre plural, por isso *ce li ho*: com coisas no plural, *li* (masculino) ou *le* (feminino): *le chiavi? Ce le ho*."
		},
		{
			it: "Grazie, Rafael! Ti do i soldi il più presto possibile, giuro!",
			pt: "Obrigada, Rafael! Devolvo o dinheiro o mais rápido possível, juro!",
			lit: "Obrigada, Rafael! Te dou os dinheiros o mais cedo possível, juro!",
			note: "*Il più presto possibile* = o quanto antes, o mais rápido possível. *Dare* (dar) você viu na lição 28: *do, dai, dà*..."
		},
		{
			it: "Il più presto possibile? L'ultima volta mi hai dato i soldi dopo tre mesi!",
			pt: "O mais rápido possível? Da última vez você me devolveu o dinheiro depois de três meses!",
			lit: "O mais cedo possível? A última vez me tens dado os dinheiros depois de três meses!",
			note: "*Dare* → *dato*: o particípio é regular, como o de qualquer verbo em *-are*."
		},
		{ it: "Tre mesi? Due e mezzo!", pt: "Três meses? Dois e meio!" },
		{
			it: "Hai le chiavi? Sì, ce le ho.",
			pt: "Você está com as chaves? Estou, sim.",
			lit: "Tens as chaves? Sim, as tenho.",
			sep: true,
			note: "*Le chiavi*, feminino plural: *ce le ho*."
		},
		{ it: "Dove sono Chiara e Matteo? Eccoli!", pt: "Onde estão a Chiara e o Matteo? Olha eles aí!" },
		{ it: "Ho chiesto il conto al cameriere.", pt: "Pedi a conta ao garçom." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Ce l\'ho, ce li ho; eccola, eccoli',
			blocks: [
				{
					type: 'p',
					text: "Na fala, para dizer que se tem (ou não) uma coisa de que já se falou, o italiano usa *ce* + um pronome + *avere*. O pronome muda conforme a coisa: *lo* e *la* viram *l'* diante de *ho*, *hai*, *ha*; no plural ficam *li* e *le*, sem apóstrofo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il portafoglio? Non ce l'ho.", pt: "A carteira? Não estou com ela." },
						{ it: "La penna? Ce l'ho.", pt: "A caneta? Tenho." },
						{ it: "I soldi? Ce li ho io.", pt: "O dinheiro? Está comigo." },
						{ it: "Le chiavi? Ce le hai tu?", pt: "As chaves? Estão com você?" }
					]
				},
				{
					type: 'p',
					text: "O *ce* não se traduz; é a forma que *ci* toma antes de outro pronome. Guarde as quatro frases como blocos prontos: são das mais úteis do italiano falado."
				},
				{ type: 'h', text: 'Ecco + pronome' },
				{
					type: 'p',
					text: "Com *ecco*, os mesmos pronomes se grudam no fim, numa palavra só: *eccolo*, *eccola*, *eccoli*, *eccole*. E com as pessoas: *eccomi* (aqui estou), *eccoci* (aqui estamos). É o que se diz quando alguém ou alguma coisa finalmente aparece."
				},
				{ type: 'h', text: 'Mais particípios irregulares' },
				{
					type: 'p',
					text: "*Chiedere* → *chiesto* (pedi, perguntei). E *dare* → *dato*, que é regular, mas vale ver escrito: *mi hai dato*, *ho dato*. Com eles, sua lista já tem *fatto*, *riso*, *preso*, *promesso* e *chiesto*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Palavras do dia: soldi, tavolo, cidades',
			blocks: [
				{ type: 'h', text: 'I soldi' },
				{
					type: 'p',
					text: "Dinheiro, no dia a dia, é *i soldi*, sempre no plural: *non ho soldi*, *i soldi sono finiti*. Existe também *il denaro*, mais formal, e *i contanti* para dinheiro vivo: *pago in contanti* (pago em dinheiro), *pago con la carta* (com cartão)."
				},
				{ type: 'h', text: 'Tavolo × tavola' },
				{
					type: 'p',
					text: "*Il tavolo* é o móvel: *un tavolo per tre*, *il tavolo della cucina*. *La tavola* é a mesa servida, a refeição: *a tavola!*, *a tavola non si invecchia* (à mesa não se envelhece, um ditado). No restaurante, peça *un tavolo*."
				},
				{ type: 'h', text: 'As cidades são femininas' },
				{
					type: 'p',
					text: "Em italiano, nome de cidade é feminino, mesmo terminando em *-o*. Os adjetivos concordam no feminino."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Bologna è piena di studenti.", pt: "Bolonha é cheia de estudantes." },
						{ it: "Milano è cara.", pt: "Milão é cara." },
						{ it: "Napoli è bellissima.", pt: "Nápoles é lindíssima." },
						{ it: "Rio è famosa per il carnevale.", pt: "O Rio é famoso pelo carnaval." }
					]
				},
				{
					type: 'dica',
					text: "Repare no último exemplo: em português dizemos “o Rio”, mas em italiano a cidade continua feminina, *Rio è famosa*. Já os times de futebol são masculinos: *il Bologna*, *il Napoli* (lição 5)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Siamo in quattro: avete un tavolo?", pt: "Somos quatro: vocês têm uma mesa?" },
				{ it: "Serena è arrivata in ritardo, come al solito.", pt: "A Serena chegou atrasada, como sempre." },
				{ it: "Hai i soldi? No, non ce li ho.", pt: "Você está com o dinheiro? Não, não estou." },
				{ it: "Dov'è Serena? Eccola!", pt: "Onde está a Serena? Olha ela aí!" },
				{ it: "Abbiamo chiesto il conto e abbiamo pagato.", pt: "Pedimos a conta e pagamos." },
				{ it: "Rispondo il più presto possibile.", pt: "Respondo o mais rápido possível." },
				{ it: "Napoli è bella ma è piena di traffico.", pt: "Nápoles é bonita, mas é cheia de trânsito." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "As chaves? Estão comigo.", parts: ["Le chiavi? Ce ", null, " ho io."], answers: ["le"] },
				{ pt: "Onde estão os tortellini? Aqui estão eles!", parts: ["Dove sono i tortellini? ", null, "!"], answers: ["eccoli"] },
				{ pt: "Pedimos o cardápio do dia.", parts: ["Abbiamo ", null, " il menù del giorno."], answers: ["chiesto"] },
				{ pt: "Você me deu o dinheiro?", parts: ["Mi hai ", null, " i soldi?"], answers: ["dato"] },
				{ pt: "Milão é cara.", parts: ["Milano è ", null, "."], answers: ["cara"] }
			]
		}
	]
};

const licao33: Lesson = {
	no: 33,
	kind: 'licao',
	title: 'Intervista a un campione',
	titlePt: 'Entrevista com um craque',
	lines: [
		{
			it: "Chiara, guarda: c'è un'intervista a Ferri sul giornale!",
			pt: "Chiara, olha: tem uma entrevista com o Ferri no jornal!",
			note: "Marco Ferri é meio-campista do Bologna. *Intervista a* + pessoa = entrevista com alguém."
		},
		{
			it: "Ferri? Quello dei due gol al Napoli? Non la leggo!",
			pt: "O Ferri? Aquele dos dois gols no Napoli? Não vou ler!",
			lit: "Ferri? Aquele dos dois gols ao Napoli? Não a leio!",
			note: "*La* retoma *l'intervista*: não a leio. A Chiara é napolitana e torce para o Napoli, então o assunto dói."
		},
		{
			it: "Allora la leggo io, ad alta voce. «Ferri, domenica Lei ha segnato due gol. Che cosa è successo?»",
			pt: "Então eu leio, em voz alta. “Ferri, domingo o senhor marcou dois gols. O que aconteceu?”",
			lit: "Então a leio eu, a alta voz. “Ferri, domingo o senhor tem marcado dois gols. Que coisa é sucedida?”",
			note: "*Segnare un gol* = marcar um gol. *Succedere* (acontecer) tem particípio irregular, *successo*, e usa *essere*: *è successo*. Não confunda com *il successo*, o sucesso."
		},
		{
			it: "«È successo tutto in dieci minuti. Non ci credo ancora!»",
			pt: "“Aconteceu tudo em dez minutos. Ainda não acredito!”",
			lit: "“É sucedido tudo em dez minutos. Não nisso creio ainda!”",
			note: "*Non ci credo* = não acredito (nisso). O *ci* aqui retoma “nisso”, a coisa em que não se acredita."
		},
		{
			it: "«Il primo gol, da trenta metri: un tiro fantastico.»",
			pt: "“O primeiro gol, de trinta metros: um chute fantástico.”"
		},
		{
			it: "«La palla? L'ho calciata senza pensare.»",
			pt: "“A bola? Chutei sem pensar.”",
			lit: "“A bola? A tenho chutado sem pensar.”",
			note: "Com *avere*, o particípio normalmente não muda. Mas quando um pronome *lo, la, li, le* vem antes, ele concorda com o pronome: *la palla* → *l'ho calciata*, com *-a*."
		},
		{
			it: "«E dopo il gol è voluto andare sotto la curva dei tifosi.»",
			pt: "“E depois do gol o senhor quis ir até a torcida, atrás do gol.”",
			lit: "“E depois do gol é querido ir sob a curva dos torcedores.”",
			note: "*La curva* é a arquibancada atrás do gol, onde fica a torcida organizada. *Tifoso* = torcedor."
		},
		{
			it: "«Sì, sono voluto andare a salutare i tifosi. Sono la mia famiglia.»",
			pt: "“Sim, quis ir cumprimentar os torcedores. Eles são a minha família.”",
			lit: "“Sim, sou querido ir a saudar os torcedores. São a minha família.”",
			note: "*Volere*, *dovere* e *potere* pegam o auxiliar do verbo que vem depois. *Andare* usa *essere*, então: *sono voluto andare*. Com um verbo de *avere*: *ho voluto giocare*. Na fala, muita gente diz *ho voluto andare*, e também está certo."
		},
		{
			it: "«La settimana scorsa, però, non ha giocato.»",
			pt: "“Na semana passada, porém, o senhor não jogou.”"
		},
		{
			it: "«No, sono dovuto tornare a Bari: mio padre è stato male. Adesso sta bene.»",
			pt: "“Não, tive que voltar para Bari: meu pai passou mal. Agora está bem.”",
			lit: "“Não, sou devido voltar a Bari: meu pai é estado mal. Agora está bem.”",
			note: "*Sono dovuto tornare*: *tornare* usa *essere*, e o modal segue. *Stare* e *essere* têm o mesmo particípio: *è stato male* = passou mal, esteve doente."
		},
		{
			it: "«E l'allenatore che cosa Le ha detto?»",
			pt: "“E o técnico, o que disse ao senhor?”",
			lit: "“E o treinador que coisa Lhe tem dito?”",
			note: "*Dire* → *detto*, irregular. *Le* (com maiúscula, por cortesia) = ao senhor. *Allenatore* = técnico, treinador."
		},
		{
			it: "«Mi ha detto: “Marco, la famiglia prima di tutto”. È un grande.»",
			pt: "“Ele me disse: ‘Marco, a família em primeiro lugar’. É um cara e tanto.”",
			lit: "“Me tem dito: ‘Marco, a família antes de tudo’. É um grande.”"
		},
		{
			it: "«È vero che non beve alcol?»",
			pt: "“É verdade que o senhor não bebe álcool?”"
		},
		{
			it: "«Verissimo. Bevo solo acqua e un caffè la mattina. I miei compagni bevono una birra dopo la partita, io no.»",
			pt: "“Verdade. Só bebo água e um café de manhã. Meus companheiros bebem uma cerveja depois do jogo, eu não.”",
			lit: "“Veríssimo. Bebo só água e um café a manhã. Os meus companheiros bebem uma cerveja depois da partida, eu não.”",
			note: "O presente de *bere* inteiro: *bevo, bevi, beve, beviamo, bevete, bevono* (lição 5). Tudo sobre *bev-*."
		},
		{
			it: "«E il pallone della partita?» «L'ho portato a casa e l'ho messo in salotto.»",
			pt: "“E a bola do jogo?” “Levei para casa e coloquei na sala.”",
			lit: "“E o balão da partida?” “O tenho levado a casa e o tenho posto em sala.”",
			note: "*Il pallone* (a bola de futebol) é masculino: *l'ho portato*, *l'ho messo*, em *-o*. *Mettere* → *messo*, irregular."
		},
		{
			it: "«Grazie, Ferri, e in bocca al lupo per domenica!» «Crepi! Grazie a Lei.»",
			pt: "“Obrigado, Ferri, e boa sorte no domingo!” “Obrigado! Eu é que agradeço.”",
			lit: "“Obrigado, Ferri, e na boca do lobo para domingo!” “Que morra! Obrigado a Lei.”",
			note: "*In bocca al lupo!* (na boca do lobo) é o “boa sorte!” dos italianos, e a resposta é sempre *crepi!* (que o lobo morra!). Desejar *buona fortuna* a um italiano antes de uma prova soa até um pouco estranho."
		},
		{
			it: "Ho comprato la torta e l'ho messa in frigo.",
			pt: "Comprei a torta e coloquei na geladeira.",
			sep: true,
			note: "*La torta* → *l'ho messa*. *Frigo* é a forma curta de *frigorifero*."
		},
		{
			it: "Siamo dovuti partire presto.",
			pt: "Tivemos que partir cedo.",
			note: "*Partire* usa *essere*, e o modal acompanha: *siamo dovuti*."
		},
		{ it: "Che cosa bevi? Bevo un succo di frutta.", pt: "O que você bebe? Bebo um suco de fruta." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "L'ho calciata: o particípio concorda com o pronome",
			blocks: [
				{
					type: 'p',
					text: "Com *avere*, o particípio fica em *-o*: *ho calciato la palla*. Mas se a coisa vem antes, como pronome *lo, la, li, le*, o particípio passa a concordar com ela. Lembre que *lo* e *la* perdem a vogal diante de *ho, hai, ha, hanno*: *l'ho*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il pallone? L'ho portato a casa.", pt: "A bola? Levei para casa. (*il pallone*, masculino)" },
						{ it: "La palla? L'ho calciata.", pt: "A bola? Chutei. (*la palla*, feminino)" },
						{ it: "La torta? L'ho messa in frigo.", pt: "A torta? Pus na geladeira." },
						{ it: "L'intervista? Non l'ho letta.", pt: "A entrevista? Não li." }
					]
				},
				{
					type: 'p',
					text: "Na escrita, *l'ho* esconde se o pronome é *lo* ou *la*. Quem conta é a última vogal do particípio: *l'ho portato* (ele), *l'ho portata* (ela). Os plurais *li* e *le* você vai treinar na próxima lição."
				},
				{ type: 'h', text: 'Modais no passado' },
				{
					type: 'p',
					text: "*Volere*, *dovere* e *potere* sozinhos usam *avere*: *ho voluto*, *ho dovuto*, *ho potuto*. Seguidos de um infinitivo, costumam pegar o auxiliar desse infinitivo. Se ele usa *essere*, o modal também usa, e o particípio concorda."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ho dovuto lavorare.", pt: "Tive que trabalhar. (*lavorare* usa *avere*)" },
						{ it: "Sono dovuto tornare a Bari.", pt: "Tive que voltar para Bari. (*tornare* usa *essere*)" },
						{ it: "Chiara è voluta restare a casa.", pt: "A Chiara quis ficar em casa." },
						{ it: "Non siamo potuti venire.", pt: "Não pudemos vir." }
					]
				},
				{
					type: 'dica',
					text: "Na conversa, muitos italianos usam *avere* sempre com os modais: *ho dovuto partire*, *non ho potuto venire*. Pode usar, ninguém vai estranhar. Mas reconheça a outra forma, que é a que você vai ler no jornal."
				},
				{ type: 'h', text: 'Mais três irregulares' },
				{
					type: 'p',
					text: "*Succedere* → *successo* (com *essere*: *che cosa è successo?*), *mettere* → *messo*, *dire* → *detto*. Do mesmo modelo de *messo* vêm *promesso* (de *promettere*, lição 31) e *permesso* (de *permettere*, permitir)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O futebol na Itália',
			blocks: [
				{
					type: 'p',
					text: "*Il calcio* (o futebol) é o esporte nacional, e a primeira divisão se chama *Serie A*. Cada cidade tem o seu time, e a torcida muitas vezes passa de pai para filho. Os times levam artigo masculino, mesmo que o nome da cidade seja feminino: *il Bologna*, *il Napoli*. Há exceções famosas, que levam artigo feminino: *la Juventus*, de Turim (*Juventus* é “juventude” em latim, palavra feminina), *l'Inter*, *la Lazio*, *la Roma*, *la Fiorentina*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la par**ti**ta", pt: "o jogo, a partida" },
						{ it: "il ti**fo**so, i ti**fo**si", pt: "o torcedor, os torcedores" },
						{ it: "l'allena**to**re", pt: "o técnico" },
						{ it: "se**gna**re un gol", pt: "marcar um gol" },
						{ it: "**vin**cere, **per**dere, pareg**gia**re", pt: "ganhar, perder, empatar" }
					]
				},
				{
					type: 'p',
					text: "Torcer, em italiano, é *tifare*: *tifo per il Bologna* (torço para o Bologna). E o placar se lê com *a*: *due a uno* (dois a um), como em português."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa è successo ieri sera?", pt: "O que aconteceu ontem à noite?" },
				{ it: "Il giornale? L'ho messo sul tavolo.", pt: "O jornal? Coloquei na mesa." },
				{ it: "La partita? Non l'ho guardata.", pt: "O jogo? Não assisti." },
				{ it: "Sono dovuta andare dal medico.", pt: "Tive que ir ao médico." },
				{ it: "Matteo mi ha detto la verità.", pt: "O Matteo me disse a verdade." },
				{ it: "Noi beviamo vino, ma Chiara beve acqua.", pt: "Nós bebemos vinho, mas a Chiara bebe água." },
				{ it: "Domani hai l'esame? In bocca al lupo!", pt: "Amanhã você tem prova? Boa sorte!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O que aconteceu?", parts: ["Che cosa è ", null, "?"], answers: ["successo"] },
				{ pt: "A pizza? Comi.", parts: ["La pizza? L'ho ", null, "."], answers: ["mangiata"] },
				{ pt: "Tive que voltar para Bari (fala um homem).", parts: ["Sono ", null, " tornare a Bari."], answers: ["dovuto"] },
				{ pt: "Onde você colocou a bola?", parts: ["Dove hai ", null, " il pallone?"], answers: ["messo"] },
				{ pt: "Os rapazes bebem uma cerveja.", parts: ["I ragazzi ", null, " una birra."], answers: ["bevono"] }
			]
		}
	]
};

const licao34: Lesson = {
	no: 34,
	kind: 'licao',
	title: 'Una notizia curiosa',
	titlePt: 'Uma notícia curiosa',
	lines: [
		{
			it: "Chiara, hai letto il giornale stamattina?",
			pt: "Chiara, você leu o jornal hoje de manhã?",
			note: "*Leggere* → *letto*, irregular. Cuidado: *il letto* é a cama. *Ho letto* (li) e *vado a letto* (vou para a cama)."
		},
		{
			it: "No, non l'ho ancora letto. Perché?",
			pt: "Não, ainda não li. Por quê?",
			lit: "Não, não o tenho ainda lido. Por quê?",
			note: "*Il giornale* → *l'ho letto*, masculino, como na lição 33. *Non... ancora* = ainda não; *ancora* fica entre o auxiliar e o particípio."
		},
		{
			it: "Senti questa: «Ferrara, un uomo e le sue cinquemila paperelle».",
			pt: "Escuta esta: “Ferrara, um homem e seus cinco mil patinhos”.",
			lit: "Sente esta: “Ferrara, um homem e as suas cinco mil patinhas”.",
			note: "*Senti* = escuta (imperativo de *sentire*). *La paperella* é o patinho de borracha, aquele da banheira. Ferrara é uma cidade perto de Bolonha."
		},
		{
			it: "Paperelle? Quelle di gomma?",
			pt: "Patinhos? Aqueles de borracha?",
			note: "*Di gomma*: *di* para o material, como *di lana* (lição 26)."
		},
		{
			it: "Proprio quelle. Il signor Bruno, pensionato, le colleziona da quarant'anni.",
			pt: "Esses mesmos. O seu Bruno, aposentado, coleciona há quarenta anos.",
			lit: "Justamente aquelas. O senhor Bruno, aposentado, as coleciona desde quarenta anos.",
			note: "*Da* + tempo com o presente: uma coisa que começou no passado e continua (lição 20). *Pensionato* = aposentado."
		},
		{
			it: "E dove le ha trovate, tutte quelle paperelle?",
			pt: "E onde ele achou todos esses patinhos?",
			lit: "E onde as tem encontradas, todas aquelas patinhas?",
			note: "*Le* (as paperelle) vem antes do verbo, então o particípio concorda: *le ha trovate*, feminino plural. Com *li* e *le* não há apóstrofo."
		},
		{
			it: "Le ha comprate nei mercatini, su internet, in vacanza... Ne ha comprate anche in Giappone!",
			pt: "Comprou nas feirinhas, na internet, nas férias... Comprou alguns até no Japão!",
			lit: "As tem compradas nas feirinhas, sobre internet, em férias... Delas tem compradas também em Japão!",
			note: "*Ne* = “delas”, “alguns deles”: retoma uma parte de um conjunto. Com *ne* antes, o particípio também concorda: *ne ha comprate*, porque são as *paperelle*."
		},
		{ it: "E ha speso molto?", pt: "E ele gastou muito?" },
		{
			it: "Parecchio. E le ha messe tutte in casa: in cucina, in camera, perfino nella vasca da bagno.",
			pt: "Bastante. E colocou todos em casa: na cozinha, no quarto, até na banheira.",
			lit: "Bastante. E as tem postas todas em casa: em cozinha, em quarto, até na banheira de banho.",
			note: "*Spendere* → *speso* (gastar → gasto). *Parecchio* = bastante, um bom tanto. Aqui é advérbio e não muda. *Perfino* = até, inclusive."
		},
		{
			it: "E la moglie? Che cosa ha detto?",
			pt: "E a mulher dele? O que ela disse?"
		},
		{
			it: "La moglie è stata gentile: ne ha regalate duecento ai nipoti.",
			pt: "A mulher foi gentil: deu duzentos de presente para os netos.",
			lit: "A esposa é estada gentil: delas tem presenteadas duzentas aos netos.",
			note: "*Ne ha regalate duecento*: duzentos deles, os patinhos. *Regalare* = dar de presente. *Nipote* é neto e também sobrinho."
		},
		{
			it: "Certi uomini sono proprio strani. Mio nonno colleziona tappi di bottiglia.",
			pt: "Certos homens são estranhos mesmo. Meu avô coleciona tampinhas de garrafa.",
			note: "*Uomo* tem plural irregular: *uomini*. *Un uomo*, *due uomini*, *gli uomini*."
		},
		{
			it: "Anche le donne, eh! Mia zia ha parecchie bambole: ne ha più di cento.",
			pt: "As mulheres também, hein! Minha tia tem um monte de bonecas: tem mais de cem.",
			lit: "Também as mulheres, eh! Minha tia tem bastantes bonecas: delas tem mais de cem.",
			note: "Antes de um substantivo, *parecchio* é adjetivo e concorda: *parecchie bambole*, *parecchi soldi*. E *ne ha più di cento* = tem mais de cem (delas)."
		},
		{
			it: "E tu? Hai una collezione?",
			pt: "E você? Tem alguma coleção?"
		},
		{
			it: "No... però ieri al mercato ho trovato una paperella napoletana, con la pizza in mano...",
			pt: "Não... mas ontem, no mercado, encontrei um patinho napolitano, com uma pizza na mão...",
			note: "*In mano* = na mão, sem artigo."
		},
		{
			it: "Rafael! Non dirmi che l'hai comprata!",
			pt: "Rafael! Não me diga que você comprou!",
			lit: "Rafael! Não dizer-me que a tens comprada!",
			note: "*Non dirmi che...* = não me diga que... É uma fórmula pronta; o imperativo negativo com pronome vem mais adiante."
		},
		{
			it: "Ne ho comprate due: una per me e una per te!",
			pt: "Comprei dois: um para mim e um para você!",
			lit: "Delas tenho compradas duas: uma por mim e uma por ti!",
			note: "*Ne ho comprate due*: dois (patinhos). Em italiano, *paperella* é feminino, por isso *comprate*, *una*."
		},
		{
			it: "Ecco: il signor Bruno ha cominciato così.",
			pt: "Pronto: o seu Bruno começou assim."
		},
		{
			it: "Hai comprato le arance? Sì, le ho prese al mercato.",
			pt: "Você comprou as laranjas? Comprei, peguei no mercado.",
			lit: "Tens comprado as laranjas? Sim, as tenho pegadas ao mercado.",
			sep: true,
			note: "*Le arance* → *le ho prese*."
		},
		{
			it: "Quante foto hai fatto? Ne ho fatte parecchie.",
			pt: "Quantas fotos você tirou? Tirei bastante.",
			lit: "Quantas fotos tens feito? Delas tenho feitas bastantes.",
			note: "Foto se *faz*: *fare una foto*. *La foto* é feminino, por isso *fatte*."
		},
		{ it: "Ci sono tre uomini e due donne alla porta.", pt: "Tem três homens e duas mulheres na porta." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Li ho presi, ne ho fatte: concordância com pronome',
			blocks: [
				{
					type: 'p',
					text: "Na lição 33 você viu *l'ho calciata*. A regra vale para os quatro pronomes *lo, la, li, le*: quando um deles vem antes de *avere*, o particípio concorda com ele em gênero e número."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il giornale? L'ho letto.", pt: "O jornal? Li." },
						{ it: "La notizia? L'ho letta.", pt: "A notícia? Li." },
						{ it: "I biglietti? Li ho presi.", pt: "Os ingressos? Peguei." },
						{ it: "Le paperelle? Le ha comprate.", pt: "Os patinhos? Ele comprou." }
					]
				},
				{ type: 'h', text: 'Com ne' },
				{
					type: 'p',
					text: "*Ne* retoma uma quantidade de alguma coisa: “disso”, “delas”, “alguns”. Muitas vezes vem com um número ou com *parecchio*, *tanto*, *poco*. Quando *ne* vem antes do passato, o particípio concorda com a coisa de que se fala."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Quante paperelle hai comprato? Ne ho comprate due.", pt: "Quantos patinhos você comprou? Comprei dois." },
						{ it: "Quante foto hai fatto? Ne ho fatte parecchie.", pt: "Quantas fotos você tirou? Tirei várias." },
						{ it: "Quanti caffè hai bevuto? Ne ho bevuti tre.", pt: "Quantos cafés você tomou? Tomei três." }
					]
				},
				{
					type: 'dica',
					text: "Em português, a resposta “comprei dois” não tem pronome nenhum. Em italiano, *ne* é obrigatório: *ne ho comprate due*. Dizer só *ho comprato due* soa incompleto."
				},
				{ type: 'h', text: 'Parecchio e uomo' },
				{
					type: 'p',
					text: "*Parecchio* quer dizer bastante, muito. Sozinho ou com verbo, não muda: *ha speso parecchio*. Antes de um substantivo, concorda como adjetivo: *parecchio tempo*, *parecchia gente*, *parecchi soldi*, *parecchie bambole*."
				},
				{
					type: 'p',
					text: "E *uomo* (homem) é um dos poucos substantivos com plural irregular: *gli uomini*. O feminino *donna* é regular: *le donne*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Hai letto questa notizia? No, non l'ho letta.", pt: "Você leu esta notícia? Não, não li." },
				{ it: "I biglietti? Li ho presi ieri.", pt: "Os ingressos? Comprei ontem." },
				{ it: "Quante paperelle ha comprato? Ne ha comprate parecchie.", pt: "Quantos patinhos ele comprou? Comprou um monte." },
				{ it: "Gli uomini e le donne sono arrivati insieme.", pt: "Os homens e as mulheres chegaram juntos." },
				{ it: "Ho speso parecchi soldi in vacanza.", pt: "Gastei bastante dinheiro nas férias." },
				{ it: "Le chiavi? Le ho messe nello zaino.", pt: "As chaves? Coloquei na mochila." },
				{ it: "Quanti caffè hai bevuto? Ne ho bevuti due.", pt: "Quantos cafés você tomou? Tomei dois." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Os ingressos? Peguei.", parts: ["I biglietti? ", null, " ho presi."], answers: ["li"] },
				{ pt: "As laranjas? Comprei no mercado.", parts: ["Le arance? Le ho ", null, " al mercato."], answers: ["comprate"] },
				{ pt: "Quantas fotos? Tirei dez.", parts: ["Quante foto? ", null, " ho fatte dieci."], answers: ["ne"] },
				{ pt: "Você leu o jornal?", parts: ["Hai ", null, " il giornale?"], answers: ["letto"] },
				{ pt: "Tem dois homens na porta.", parts: ["Ci sono due ", null, " alla porta."], answers: ["uomini"] }
			]
		}
	]
};

const licao35: Lesson = {
	no: 35,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'O passato prossimo: auxiliar + particípio',
			blocks: [
				{
					type: 'p',
					text: "Nesta semana todo mundo contou o que aconteceu: o dia da Chiara, a festa, o jantar com a Serena, os gols do Ferri, os patinhos do seu Bruno. Tudo com o mesmo tempo verbal, o *passato prossimo*. Vamos juntar as peças."
				},
				{
					type: 'p',
					text: "Ele tem sempre duas partes: o presente de *avere* ou de *essere* e o particípio do verbo. *Ho comprato* (comprei), *sono andata* (fui)."
				},
				{ type: 'h', text: 'Avere ou essere?' },
				{
					type: 'p',
					text: "A maioria dos verbos usa *avere*: todos os que têm objeto (*ho comprato il pane*) e vários que não têm (*ho dormito*, *ho riso*, *ho ballato*). Usam *essere* os verbos de movimento ou de mudança sem objeto, além de *essere* e *stare*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "andare, venire, arrivare, partire", pt: "ir, vir, chegar, partir" },
						{ it: "tornare, uscire, entrare, restare", pt: "voltar, sair, entrar, ficar" },
						{ it: "essere, stare, succedere", pt: "ser, estar, acontecer" }
					]
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Siamo arrivati ieri sera, stanchissimi.", pt: "Chegamos ontem à noite, mortos de cansaço. (lição 29)" },
						{ it: "Gli ultimi ospiti sono usciti alle due e mezza.", pt: "Os últimos convidados saíram às duas e meia. (lição 31)" },
						{ it: "Abbiamo avuto ospiti.", pt: "Recebemos visitas. (lição 31)" },
						{ it: "È successo tutto in dieci minuti.", pt: "Aconteceu tudo em dez minutos. (lição 33)" }
					]
				},
				{
					type: 'dica',
					text: "Na dúvida, aposte em *avere*: é o auxiliar da grande maioria. E guarde os verbos com *essere* em pares de opostos: *andare/venire*, *arrivare/partire*, *entrare/uscire*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os particípios',
			blocks: [
				{
					type: 'p',
					text: "Os regulares seguem três modelos, um para cada grupo de verbos:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "-are → -ato: comprato, andato, dato", pt: "comprado, ido, dado (lição 29)" },
						{ it: "-ere → -uto: bevuto, venduto, conosciuto", pt: "bebido, vendido, conhecido (lição 30)" },
						{ it: "-ire → -ito: dormito, capito, uscito", pt: "dormido, entendido, saído (lição 31)" }
					]
				},
				{
					type: 'p',
					text: "*Venire* faz *venuto*, como se fosse um verbo em *-ere*. E muitos verbos comuns, quase todos em *-ere*, têm particípio irregular. Estes apareceram no bloco:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "fare → fatto", pt: "fazer → feito" },
						{ it: "dire → detto", pt: "dizer → dito" },
						{ it: "essere, stare → stato", pt: "ser, estar → sido, estado" },
						{ it: "prendere → preso; spendere → speso", pt: "pegar → pegado; gastar → gasto" },
						{ it: "mettere → messo; promettere → promesso", pt: "pôr → posto; prometer → prometido" },
						{ it: "ridere → riso; chiedere → chiesto", pt: "rir → rido; pedir → pedido" },
						{ it: "leggere → letto; succedere → successo", pt: "ler → lido; acontecer → acontecido" }
					]
				},
				{
					type: 'dica',
					text: "Três desses particípios são também substantivos: *il riso* (o arroz), *il letto* (a cama), *il successo* (o sucesso). O contexto sempre separa: *ho riso*, *ho letto*, *è successo*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Quando o particípio concorda',
			blocks: [
				{
					type: 'p',
					text: "O particípio fica em *-o* na maioria das frases com *avere*. Ele muda, como um adjetivo, em três situações."
				},
				{ type: 'h', text: '1. Com essere, concorda com o sujeito' },
				{
					type: 'exemplos',
					items: [
						{ it: "Stamattina sono andata dal medico.", pt: "Quem fala é a Chiara. (lição 29)" },
						{ it: "Sono andate tutte da lei.", pt: "Só mulheres. (lição 30)" },
						{ it: "Sono venuti i miei colleghi, le amiche di Chiara...", pt: "Grupo misto, masculino. (lição 30)" }
					]
				},
				{ type: 'h', text: '2. Com lo, la, li, le antes, concorda com o pronome' },
				{
					type: 'exemplos',
					items: [
						{ it: "L'ho portato a casa e l'ho messo in salotto.", pt: "*Il pallone*. (lição 33)" },
						{ it: "La palla? L'ho calciata senza pensare.", pt: "*La palla*. (lição 33)" },
						{ it: "Le ha comprate nei mercatini.", pt: "*Le paperelle*. (lição 34)" }
					]
				},
				{ type: 'h', text: '3. Com ne antes, concorda com a coisa retomada' },
				{
					type: 'exemplos',
					items: [
						{ it: "Ne ho comprate due.", pt: "Dois patinhos (*paperelle*). (lição 34)" },
						{ it: "Ne ha regalate duecento ai nipoti.", pt: "Duzentos patinhos. (lição 34)" }
					]
				},
				{ type: 'h', text: 'Os modais' },
				{
					type: 'p',
					text: "*Volere, dovere, potere* + infinitivo pegam o auxiliar do infinitivo: *ho dovuto lavorare*, mas *sono dovuto tornare a Bari* (lição 33). Com *essere*, o modal também concorda: *Chiara è voluta restare*. Na fala, *ho dovuto tornare* também se ouve muito e está certo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Passato prossimo × pretérito do português',
			blocks: [
				{
					type: 'p',
					text: "A forma engana: *ho mangiato* parece o nosso “tenho comido”, mas quer dizer “comi”. O “tenho comido” do português fala de uma coisa que se repete até agora (“tenho dormido mal”). Para isso, o italiano usa o presente, muitas vezes com *in questi giorni* ou com *da* + tempo: *in questi giorni dormo male*, *colleziona paperelle da quarant'anni* (lição 34)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ieri ho dormito male.", pt: "Ontem dormi mal." },
						{ it: "In questi giorni dormo male.", pt: "Tenho dormido mal esses dias." },
						{ it: "Ho letto il giornale.", pt: "Li o jornal." },
						{ it: "Leggo il giornale da anni.", pt: "Leio o jornal há anos." }
					]
				},
				{
					type: 'p',
					text: "O *passato prossimo* serve para o que aconteceu hoje, ontem ou há muito tempo, sobretudo na conversa: *siamo stati a Napoli*, *Ferri ha segnato due gol*. Existe outro passado, o *passato remoto*, mais usado em livros e no sul da Itália; você vai reconhecê-lo mais adiante. E para descrever como as coisas eram no passado, o italiano tem um imperfeito, como o nosso “era”, “fazia”, que também vem depois."
				},
				{
					type: 'dica',
					text: "Para contar o que você fez ontem, o *passato prossimo* resolve quase tudo. Experimente hoje à noite: três frases sobre o seu dia, em voz alta. *Stamattina ho...*, *poi sono andato...*, *stasera ho mangiato...*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Expressões das lições 29 a 34. Leia em voz alta e lembre onde apareceram."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che cosa hai fatto di bello?", pt: "O que você fez de bom?" },
						{ it: "fare la spesa", pt: "fazer as compras (de mercado)" },
						{ it: "come al solito", pt: "como sempre" },
						{ it: "fare tardi", pt: "ficar acordado até tarde; chegar tarde" },
						{ it: "andare in giro", pt: "dar uma volta, passear" },
						{ it: "da me, da te, da noi", pt: "na minha casa, na sua, na nossa" },
						{ it: "Ho capito.", pt: "Entendi." },
						{ it: "Lo so.", pt: "Eu sei." },
						{ it: "Mi raccomando!", pt: "Vê lá, hein! Não esqueça!" },
						{ it: "Siamo in tre.", pt: "Somos três." },
						{ it: "essere in ritardo", pt: "estar atrasado" },
						{ it: "Ce l'ho. / Ce li ho.", pt: "Tenho. / Estão comigo." },
						{ it: "Eccola! / Eccoli!", pt: "Olha ela aí! / Olha eles aí!" },
						{ it: "il più presto possibile", pt: "o mais rápido possível" },
						{ it: "Che cosa è successo?", pt: "O que aconteceu?" },
						{ it: "Non ci credo!", pt: "Não acredito!" },
						{ it: "In bocca al lupo! Crepi!", pt: "Boa sorte! Obrigado!" }
					]
				},
				{
					type: 'dica',
					text: "*In bocca al lupo* serve para qualquer desafio: prova, entrevista, jogo, primeiro dia de trabalho. Na próxima vez que um amigo tiver uma prova, deseje assim, e espere o *crepi!*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Stamattina Chiara è andata dal medico e poi ha fatto la spesa.", pt: "Hoje de manhã a Chiara foi ao médico e depois fez as compras." },
				{ it: "Ieri sera sono venuti da noi Luca e Serena.", pt: "Ontem à noite o Luca e a Serena vieram à nossa casa." },
				{ it: "Non ho dormito per niente: i vicini hanno fatto una festa.", pt: "Não dormi nada: os vizinhos deram uma festa." },
				{ it: "Serena è arrivata in ritardo e ha dimenticato il portafoglio.", pt: "A Serena chegou atrasada e esqueceu a carteira." },
				{ it: "La torta? L'ho messa in frigo.", pt: "A torta? Coloquei na geladeira." },
				{ it: "Siamo dovuti tornare a casa presto.", pt: "Tivemos que voltar para casa cedo." },
				{ it: "Quanti biglietti hai preso? Ne ho presi quattro.", pt: "Quantos ingressos você comprou? Comprei quatro." },
				{ it: "Che cosa è successo? Non ho capito niente.", pt: "O que aconteceu? Não entendi nada." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "A Chiara e a Serena saíram às dez.", parts: ["Chiara e Serena sono ", null, " alle dieci."], answers: ["uscite"] },
				{ pt: "Ontem eu fui ao cinema.", parts: ["Ieri ", null, " andato al cinema."], answers: ["sono"] },
				{ pt: "A notícia? Não li.", parts: ["La notizia? Non l'ho ", null, "."], answers: ["letta"] },
				{ pt: "Quantas fotos você tirou? Tirei muitas.", parts: ["Quante foto hai fatto? Ne ho ", null, " tante."], answers: ["fatte"] },
				{ pt: "O que o técnico disse?", parts: ["Che cosa ha ", null, " l'allenatore?"], answers: ["detto"] }
			]
		}
	]
};

export const unidade: Unit = { no: 5, title: 'De volta a Bolonha', lessons: [29, 30, 31, 32, 33, 34, 35] };

export const licoes: Lesson[] = [licao29, licao30, licao31, licao32, licao33, licao34, licao35];
