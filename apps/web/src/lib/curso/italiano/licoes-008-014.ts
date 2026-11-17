import type { Lesson, Unit } from '../types.ts';

// Lições 8–14: Bolonha, o outono depois das lições 1–7. Giulia (colega de medicina da Chiara) conhece a casa;
// os pais do Matteo (Paola e Giorgio) vêm de Turim com a netinha Bianca e pagam o almoço de domingo numa trattoria;
// a rotina e as horas; videochamada com a irmã do Rafael (Larissa) e a mãe (Ana) em Recife; a redação do Rafael
// sobre a família. Ver docs/agents/curso-assimil-mapa.md.

const licao8: Lesson = {
	no: 8,
	kind: 'licao',
	title: 'La nostra casa',
	titlePt: 'A nossa casa',
	lines: [
		{
			it: "Ciao! Tu sei Rafael, vero? Io sono Giulia, un'amica di Chiara.",
			pt: "Oi! Você é o Rafael, né? Eu sou a Giulia, uma amiga da Chiara.",
			lit: "Oi! Tu és Rafael, verdade? Eu sou Giulia, uma amiga de Chiara.",
			note: "A Giulia estuda medicina com a Chiara. Repare em *un'amica*, com apóstrofo: feminino antes de vogal (lição 2)."
		},
		{
			it: "Ciao, Giulia! Chiara non è ancora a casa, ma arriva subito. Entra, entra!",
			pt: "Oi, Giulia! A Chiara ainda não está em casa, mas já está chegando. Entre, entre!",
			lit: "Oi, Giulia! Chiara não está ainda a casa, mas chega logo. Entra, entra!",
			note: "*Non... ancora* = ainda não. *Subito* = já, logo, num instante (e não “de repente”). Repetir o convite, *entra, entra!*, é bem italiano."
		},
		{
			it: "Grazie! Che bella casa! E questa è la vostra cucina?",
			pt: "Obrigada! Que casa bonita! E esta é a cozinha de vocês?",
			lit: "Obrigada! Que bela casa! E esta é a vossa cozinha?",
			note: "*Vostra* = de vocês (de *voi*). Em italiano, o possessivo vem normalmente com artigo: *la vostra cucina*, *la mia casa*. Em português o artigo é opcional (“a minha casa” ou “minha casa”); em italiano, não."
		},
		{
			it: "Sì, è la nostra cucina. E quello è il soggiorno, con il divano e la televisione.",
			pt: "É, é a nossa cozinha. E aquela é a sala, com o sofá e a televisão.",
			lit: "Sim, é a nossa cozinha. E aquele é o estar, com o divã e a televisão.",
			note: "*Questo* aponta o que está perto de quem fala; *quello* (aquele), o que está longe. O italiano do dia a dia não tem o nosso “esse”: ou é *questo*, ou é *quello*. *Il soggiorno* é a sala de estar."
		},
		{
			it: "E quella porta là, in fondo?",
			pt: "E aquela porta lá, no fundo?",
			note: "*Qui* e *qua* = aqui; *lì* e *là* = ali, lá. Na prática, *qui* e *qua* se usam quase sem diferença, e o mesmo vale para *lì* e *là*. Repare no acento escrito de *lì* e *là*."
		},
		{
			it: "Là c'è il bagno. Le camere invece sono qua, a destra.",
			pt: "Lá fica o banheiro. Já os quartos ficam aqui, à direita.",
			lit: "Lá há o banheiro. Os quartos, ao contrário, são aqui, a direita.",
			note: "*La camera* é o quarto de dormir (não a câmera, que é *la fotocamera*); *la stanza*, da lição 2, é qualquer cômodo. *A destra* = à direita; *a sinistra* = à esquerda."
		},
		{
			it: "Questa è la tua camera?",
			pt: "Este é o seu quarto?",
			lit: "Esta é a tua câmara?",
			note: "*Tua* concorda com *camera*, que é feminino. Com *tu*, o possessivo é *tuo*, *tua*: teu, seu."
		},
		{
			it: "Sì, è la mia. È piccola, ma ha una finestra sul cortile.",
			pt: "É, é o meu. É pequeno, mas tem uma janela para o pátio.",
			lit: "Sim, é a minha. É pequena, mas tem uma janela sobre o pátio.",
			note: "*La mia*, sem o substantivo, funciona como em português: “é o meu”. *Sul* = *su* + *il*. *Il cortile* é o pátio interno, comum nos prédios antigos de Bolonha."
		},
		{
			it: "E questo computer? È tuo?",
			pt: "E este computador? É seu?",
			lit: "E este computador? É teu?",
			note: "Depois de *essere*, para dizer de quem é uma coisa, o possessivo dispensa o artigo: *è tuo?*, *è mio*."
		},
		{
			it: "No, è di Matteo. Il suo computer è sempre qui, perché la sua camera è un disastro!",
			pt: "Não, é do Matteo. O computador dele fica sempre aqui, porque o quarto dele é um desastre!",
			lit: "Não, é de Matteo. O seu computador é sempre aqui, porque a sua câmara é um desastre!",
			note: "*Suo* e *sua* querem dizer “dele” e “dela”, e concordam com a coisa, não com o dono: *il suo computer* (o computador dele), *la sua camera* (o quarto dele). *Di Matteo* = do Matteo: antes de nome de pessoa, *di* vai sem artigo."
		},
		{
			it: "Anche lui studia qui a Bologna?",
			pt: "Ele também estuda aqui em Bolonha?",
			lit: "Também ele estuda aqui a Bolonha?",
			note: "*Anche lui* = ele também. O *anche* vem antes do pronome, ao contrário do português: *anche lei* (ela também), *anche noi* (nós também), *anch'io* (eu também, lição 1)."
		},
		{
			it: "Sì, studia economia. E suona la chitarra con il suo gruppo.",
			pt: "Estuda, faz economia. E toca violão com a banda dele.",
			lit: "Sim, estuda economia. E toca a guitarra com o seu grupo."
		},
		{ it: "E tu che cosa studi?", pt: "E você, o que estuda?", lit: "E tu que coisa estudas?" },
		{
			it: "Ingegneria. Questa scrivania è mia: libri, quaderni e tre tazze di caffè!",
			pt: "Engenharia. Esta escrivaninha é minha: livros, cadernos e três xícaras de café!",
			note: "*La scrivania* = a escrivaninha; *la tazza* = a xícara. *Ingegneria* tem o *gn* de *Bologna*: “in-dje-nhe-rí-a”."
		},
		{
			it: "Ah, ecco Chiara! Ciao, cara!",
			pt: "Ah, olha a Chiara aí! Oi, querida!",
			lit: "Ah, eis Chiara! Oi, querida!",
			note: "*Ecco* também anuncia quem chega: *ecco Chiara!*, aí vem a Chiara. *Cara* = querida; *caro* também quer dizer caro, de preço."
		},
		{
			it: "Ciao, Giulia! Scusa il ritardo. Rafael, è tua quella giacca lì, sul divano?",
			pt: "Oi, Giulia! Desculpe o atraso. Rafael, é seu aquele casaco ali, no sofá?",
			lit: "Oi, Giulia! Desculpa o atraso. Rafael, é tua aquela jaqueta ali, sobre o divã?",
			note: "*Scusa il ritardo* = desculpe o atraso. Em *quella giacca lì*, o *lì* reforça o *quella*, como no nosso “aquele ali”."
		},
		{
			it: "Sì, è mia. È la mia giacca nuova!",
			pt: "É, é meu. É o meu casaco novo!",
			lit: "Sim, é minha. É a minha jaqueta nova!",
			note: "O casaco da lição 6. Compare: *è mia* diz de quem é; *è la mia giacca nuova* diz qual é."
		},
		{
			it: "Questa è la mia città e quella è la tua.",
			pt: "Esta é a minha cidade e aquela é a sua.",
			sep: true
		},
		{
			it: "Anche voi abitate in centro? Sì, anche noi.",
			pt: "Vocês também moram no centro? Sim, nós também.",
			lit: "Também vós morais em centro? Sim, também nós."
		},
		{
			it: "Dov'è il vostro bagno? È lì, a sinistra.",
			pt: "Onde fica o banheiro de vocês? Fica ali, à esquerda.",
			lit: "Onde é o vosso banheiro? É ali, a esquerda.",
			note: "*Dov'è* = *dove è*: onde está, onde fica."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os possessivos',
			blocks: [
				{
					type: 'p',
					text: "Mostrando a casa, o Rafael usou quase todos os possessivos do italiano. Veja as formas do singular juntas, sempre com o artigo:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **mi**o, la **mi**a", pt: "meu, minha", pron: "il mí-o, la mí-a" },
						{ it: "il **tu**o, la **tu**a", pt: "teu, tua; seu, sua (de você)", pron: "il tú-o, la tú-a" },
						{ it: "il **su**o, la **su**a", pt: "dele, dela; seu, sua (do senhor)", pron: "il sú-o, la sú-a" },
						{ it: "il **no**stro, la **no**stra", pt: "nosso, nossa", pron: "il nós-tro, la nós-tra" },
						{ it: "il **vo**stro, la **vo**stra", pt: "de vocês", pron: "il vós-tro, la vós-tra" },
						{ it: "il **lo**ro, la **lo**ro", pt: "deles, delas", pron: "il lô-ro, la lô-ro" }
					]
				},
				{ type: 'h', text: "O artigo vem junto" },
				{
					type: 'p',
					text: "Em português podemos dizer “minha casa” ou “a minha casa”. Em italiano o artigo é a regra: *la mia camera*, *il nostro soggiorno*, *la vostra cucina*. Sozinho, sem o substantivo, também: *Questa è la tua camera? Sì, è la mia.*"
				},
				{ type: 'h', text: "Concorda com a coisa" },
				{
					type: 'p',
					text: "O possessivo concorda com a coisa possuída, como o nosso “seu, sua”. *Il suo computer* pode ser o computador do Matteo ou da Chiara; *la sua camera*, o quarto dele ou dela. Quem resolve é o contexto. Com o *Lei* de cortesia, *suo* quer dizer “do senhor”, “da senhora”, e às vezes se escreve com maiúscula: *il Suo passaporto*."
				},
				{
					type: 'p',
					text: "*Loro* (deles, delas) é a exceção: não muda nunca e leva sempre artigo: *il loro soggiorno*, *la loro cucina*."
				},
				{ type: 'h', text: "Quando o artigo cai" },
				{
					type: 'p',
					text: "Depois de *essere*, quando se diz de quem é uma coisa: *È tuo? No, è di Matteo.* E com parentes no singular, como você viu na lição 3: *tua madre*, *mio padre*. Essa regra dos parentes volta com calma na lição 13."
				},
				{
					type: 'dica',
					text: "No plural, *mio*, *tuo* e *suo* mudam de um jeito inesperado (*i miei*, *i tuoi*, *i suoi*). Fica para a lição 10."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Questo e quello, qui e lì',
			blocks: [
				{
					type: 'p',
					text: "*Questo* aponta o que está perto de quem fala; *quello*, o que está longe. Os dois concordam com o substantivo, como adjetivos: *questo computer*, *questa porta*, *quella porta*. No plural, *questi* e *queste*. As formas de *quello* no plural (como o *quei pantaloni* da lição 6) mudam conforme a palavra seguinte, igual ao artigo; você vai vê-las mais adiante."
				},
				{
					type: 'p',
					text: "Com eles andam os advérbios de lugar: *qui* ou *qua* (aqui), *lì* ou *là* (ali, lá). É comum usar os dois juntos para reforçar: *questa scrivania qui*, *quella giacca lì*."
				},
				{ type: 'h', text: "Os cômodos da casa" },
				{
					type: 'exemplos',
					items: [
						{ it: "la cu**ci**na", pt: "a cozinha", pron: "la ku-tchí-na" },
						{ it: "il sog**gior**no", pt: "a sala de estar", pron: "il sod-djôr-no" },
						{ it: "la **ca**mera", pt: "o quarto (de dormir)", pron: "la ká-me-ra" },
						{ it: "il **ba**gno", pt: "o banheiro", pron: "il bá-nho" },
						{ it: "la fi**ne**stra", pt: "a janela", pron: "la fi-nés-tra" },
						{ it: "la scriva**ni**a", pt: "a escrivaninha", pron: "la skri-va-ní-a" }
					]
				},
				{
					type: 'dica',
					text: "A força de *camera* fica na antepenúltima, como em “câmera” e em *telefono*: “**ká**-me-ra”."
				},
				{ type: 'h', text: "Anche + pronome" },
				{
					type: 'p',
					text: "Para dizer “eu também”, “ele também”, o italiano põe *anche* antes do pronome: *anch'io*, *anche tu*, *anche lui*, *anche lei*, *anche noi*, *anche voi*, *anche loro*. Nunca “io anche”. Diante de *io*, *anche* perde o *e* e ganha apóstrofo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Questa è la mia camera e quella è la camera di Matteo.", pt: "Este é o meu quarto e aquele é o quarto do Matteo." },
				{ it: "La vostra casa è bella, ma il bagno è piccolo.", pt: "A casa de vocês é bonita, mas o banheiro é pequeno." },
				{ it: "Anche lei studia medicina?", pt: "Ela também estuda medicina?" },
				{ it: "Il loro soggiorno ha due finestre.", pt: "A sala deles tem duas janelas." },
				{ it: "È tuo questo libro? No, è di Chiara.", pt: "Este livro é seu? Não, é da Chiara." },
				{ it: "Il computer di Matteo è lì, sul tavolo.", pt: "O computador do Matteo está ali, na mesa." },
				{ it: "Qui c'è la cucina e là c'è il bagno.", pt: "Aqui fica a cozinha e lá fica o banheiro." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Este é o meu quarto.", parts: ["Questa è la ", null, " camera."], answers: ["mia"] },
				{ pt: "A cozinha de vocês é grande.", parts: ["La ", null, " cucina è grande."], answers: ["vostra"] },
				{ pt: "O computador do Matteo? Sim, é dele.", parts: ["Il computer di Matteo? Sì, è ", null, "."], answers: ["suo"] },
				{ pt: "Ele também mora em Bolonha.", parts: ["Abita a Bologna ", null, " lui."], answers: ["anche"] },
				{ pt: "Este é o nosso sofá.", parts: ["Questo è il ", null, " divano."], answers: ["nostro"] }
			]
		}
	]
};

const licao9: Lesson = {
	no: 9,
	kind: 'licao',
	title: 'Una visita da Torino',
	titlePt: 'Uma visita de Turim',
	lines: [
		{
			it: "Mamma! Papà! Benvenuti! Come state?",
			pt: "Mãe! Pai! Bem-vindos! Como vocês estão?",
			lit: "Mamãe! Papai! Bem-vindos! Como estais?",
			note: "Os pais do Matteo chegaram de Turim. *Stare* é um verbo novo: *come stai?* (como você está?), *come state?* (como vocês estão?). Para falar da saúde e de como alguém vai, o italiano usa *stare*, e não *essere*. *Benvenuti* está no plural porque são duas pessoas."
		},
		{
			it: "Io sto bene, grazie. Ma tuo padre non sta bene: ha il raffreddore.",
			pt: "Eu estou bem, obrigada. Mas o seu pai não está bem: está resfriado.",
			lit: "Eu estou bem, obrigada. Mas teu pai não está bem: tem o resfriado.",
			note: "*Sto bene* = estou bem; *non sto bene* ou *sto male* = não estou bem. *Avere il raffreddore* = estar resfriado (literalmente, “ter o resfriado”)."
		},
		{
			it: "Non è niente, solo un po' di raffreddore. Ciao, ragazzi! Io sono Giorgio.",
			pt: "Não é nada, só um resfriadinho. Oi, pessoal! Eu sou o Giorgio.",
			lit: "Não é nada, só um pouco de resfriado. Oi, rapazes! Eu sou Giorgio.",
			note: "*Non è niente* = não é nada. Como em português, a negação dupla é normal: *non... niente*."
		},
		{
			it: "Piacere! Io sono Chiara, e lui è Rafael. Prego, entrate!",
			pt: "Muito prazer! Eu sou a Chiara, e ele é o Rafael. Por favor, entrem!",
			lit: "Prazer! Eu sou Chiara, e ele é Rafael. Por favor, entrai!",
			note: "*Prego* aqui é “por favor, fiquem à vontade”. *Entrate* é o convite para *voi*; com *tu*, *entra* (lição 1)."
		},
		{
			it: "Zio Matteo, chi sono loro?",
			pt: "Tio Matteo, quem são eles?",
			note: "A Bianca, de seis anos, é filha da Elena, a irmã do Matteo, e veio com os avós. *Zio* = tio; *zia* = tia. O *z* aqui soa “ts”: “tsí-o”."
		},
		{
			it: "Sono Chiara e Rafael. Abitano qui con me.",
			pt: "São a Chiara e o Rafael. Moram aqui comigo.",
			lit: "São Chiara e Rafael. Moram aqui com mim.",
			note: "*Con me* = comigo; *con te* = contigo. Depois de preposição, *io* vira *me* e *tu* vira *te*."
		},
		{
			it: "Ecco, questi sono per voi: cioccolatini di Torino!",
			pt: "Olhem, estes são para vocês: bombons de Turim!",
			lit: "Eis, estes são para vós: chocolatinhos de Turim!",
			note: "*Cioccolatini* (de *cioccolato* + o diminutivo *-ino*) são bombons. Turim é a terra do *gianduiotto*, bombom de chocolate com avelã."
		},
		{
			it: "Grazie, signora, che gentile! Apriamo subito la scatola?",
			pt: "Obrigado, senhora, que gentileza! Vamos abrir a caixa agora mesmo?",
			lit: "Obrigado, senhora, que gentil! Abrimos logo a caixa?",
			note: "*Aprire* (abrir) é do terceiro grupo de verbos, os que terminam em *-ire*. *Apriamo* = abrimos; a pergunta com *noi* funciona como convite, como o nosso “vamos abrir?”."
		},
		{
			it: "Io apro! Io apro!",
			pt: "Eu abro! Eu abro!",
			note: "*Apro* = (eu) abro. Com *io*, a terminação é *-o*, como nos outros dois grupos."
		},
		{
			it: "Papà, senti freddo? Chiara prepara un tè caldo.",
			pt: "Pai, está com frio? A Chiara vai fazer um chá quente.",
			lit: "Papai, sentes frio? Chiara prepara um chá quente.",
			note: "*Sentire* = sentir, e também ouvir: *senti freddo?* (sente frio?), *senti la musica?* (está ouvindo a música?). Para o frio, também se diz *hai freddo?*, com *avere*."
		},
		{
			it: "Sì, grazie. In treno non dormo mai e oggi sono stanco.",
			pt: "Sim, obrigado. No trem eu nunca durmo, e hoje estou cansado.",
			lit: "Sim, obrigado. Em trem não durmo nunca e hoje sou cansado.",
			note: "*Dormire* = dormir: *dormo, dormi, dorme*... *Non... mai* = nunca, mais uma negação dupla. E repare: *sono stanco*, com *essere* (lição 1), mas *sto male*, com *stare*. Saúde e “como vai” pedem *stare*; cansaço, *essere*."
		},
		{
			it: "Allora un tè con miele e limone: il rimedio di mia nonna!",
			pt: "Então um chá com mel e limão: o remédio da minha avó!",
			note: "*Il miele* = o mel; *il limone* = o limão. *Mia nonna*, sem artigo: com parente no singular, o possessivo dispensa o artigo (como *tua madre*, na lição 3)."
		},
		{
			it: "E voi, ragazzi, come state? Studiate molto?",
			pt: "E vocês, pessoal, como estão? Estudam muito?",
			lit: "E vós, rapazes, como estais? Estudais muito?"
		},
		{
			it: "Stiamo bene, grazie. E studiamo... abbastanza!",
			pt: "Estamos bem, obrigado. E estudamos... o suficiente!",
			note: "*Stiamo* = estamos. *Abbastanza* = o suficiente, razoavelmente; não quer dizer “muito”. O Rafael está brincando."
		},
		{
			it: "Zio, qui fa troppo caldo! Apri la finestra?",
			pt: "Tio, aqui está quente demais! Abre a janela?",
			lit: "Tio, aqui faz demasiado calor! Abres a janela?",
			note: "*Apri* = (você) abre. Nos três grupos, a forma do *tu* termina em *-i*: *parli*, *prendi*, *apri*."
		},
		{
			it: "No, Bianca: il nonno sta male. Mamma, quando partite?",
			pt: "Não, Bianca: o vovô está doente. Mãe, quando vocês vão embora?",
			lit: "Não, Bianca: o avô está mal. Mamãe, quando partis?",
			note: "*Partire* = partir, ir embora, sair de viagem. *Partite* = (vocês) partem. Com *voi*, os verbos em *-ire* terminam em *-ite*: *prendete*, mas *partite*."
		},
		{
			it: "Lunedì mattina. E domenica offriamo noi il pranzo a tutti!",
			pt: "Segunda de manhã. E no domingo quem paga o almoço para todo mundo somos nós!",
			lit: "Segunda manhã. E domingo oferecemos nós o almoço a todos!",
			note: "*Offrire* = oferecer, e também pagar a conta para alguém: *offro io* (lição 5), *offriamo noi*. *Lunedì*, sem artigo, é esta segunda; *il lunedì*, com artigo, é toda segunda (lição 2)."
		},
		{
			it: "Dormi bene qui? No, sento sempre la chitarra di Matteo.",
			pt: "Você dorme bem aqui? Não, sempre escuto o violão do Matteo.",
			lit: "Dormes bem aqui? Não, sinto sempre a guitarra de Matteo.",
			sep: true,
			note: "*Sento* = escuto, ouço."
		},
		{
			it: "I bambini stanno bene, ma la nonna sta male.",
			pt: "As crianças estão bem, mas a avó está doente.",
			lit: "Os meninos estão bem, mas a avó está mal.",
			note: "*Stanno* = (eles) estão. *I bambini* = as crianças, meninos e meninas."
		},
		{ it: "Il treno per Torino parte domani mattina.", pt: "O trem para Turim sai amanhã de manhã.", lit: "O trem para Turim parte amanhã manhã." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os verbos em -ire',
			blocks: [
				{
					type: 'p',
					text: "Você já conhece os verbos em *-are* (lição 3) e em *-ere* (lição 5). Hoje chegou o terceiro grupo, o dos verbos em *-ire*: *dormire* (dormir), *aprire* (abrir), *offrire* (oferecer), *sentire* (sentir, ouvir), *partire* (partir)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **dor**mo", pt: "eu durmo", pron: "dór-mo" },
						{ it: "(tu) **dor**mi", pt: "você dorme", pron: "dór-mi" },
						{ it: "(lui, lei, Lei) **dor**me", pt: "ele, ela dorme", pron: "dór-me" },
						{ it: "(noi) dor**mia**mo", pt: "nós dormimos", pron: "dor-miá-mo" },
						{ it: "(voi) dor**mi**te", pt: "vocês dormem", pron: "dor-mí-te" },
						{ it: "(loro) **dor**mono", pt: "eles dormem", pron: "dór-mo-no" }
					]
				},
				{ type: 'h', text: "Quase igual ao -ere" },
				{
					type: 'p',
					text: "Compare com *prendere*: *prendo / dormo*, *prendi / dormi*, *prende / dorme*, *prendiamo / dormiamo*, *prendono / dormono*. A única forma diferente é a de *voi*: *prendete*, mas *dormite*, *aprite*, *partite*. Ou seja: quem sabe o *-ere* já sabe quase todo o *-ire*."
				},
				{
					type: 'p',
					text: "Alguns verbos em *-ire* ganham um pedacinho a mais no meio (*finire* → *finisco*). Você vai conhecê-los na lição 11."
				},
				{ type: 'h', text: "Crianças e saúde" },
				{
					type: 'exemplos',
					items: [
						{ it: "il **bam**bino, la **bam**bina", pt: "o menino, a menina; a criança", pron: "il bam-bí-no, la bam-bí-na" },
						{ it: "**Ho** il raffred**do**re.", pt: "Estou resfriado.", pron: "ó il raf-fred-dô-re" },
						{ it: "**Ho** la **feb**bre.", pt: "Estou com febre.", pron: "ó la féb-bre" },
						{ it: "**Ho** mal di **te**sta.", pt: "Estou com dor de cabeça.", pron: "ó mal di tés-ta" }
					]
				},
				{
					type: 'dica',
					text: "Repare que, para quase todo mal-estar, o italiano usa *avere*: *ho la febbre*, *ho mal di testa*, *ho freddo*. Em português às vezes é “estar com”; em italiano, é “ter”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Stare e essere',
			blocks: [
				{
					type: 'p',
					text: "Na lição 1 você viu que *essere* faz o papel de “ser” e de quase todo “estar”. Mas existe também *stare*, que hoje apareceu várias vezes. Ele é irregular e curtinho:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) sto", pt: "eu estou", pron: "stó" },
						{ it: "(tu) **sta**i", pt: "você está", pron: "stái" },
						{ it: "(lui, lei, Lei) sta", pt: "ele, ela está", pron: "stá" },
						{ it: "(noi) **stia**mo", pt: "nós estamos", pron: "stiá-mo" },
						{ it: "(voi) **sta**te", pt: "vocês estão", pron: "stá-te" },
						{ it: "(loro) **stan**no", pt: "eles estão", pron: "stán-no" }
					]
				},
				{ type: 'h', text: "Quando usar stare" },
				{
					type: 'p',
					text: "O uso mais comum é para a saúde e para o “como vai”: *Come stai? Sto bene. Il nonno sta male.* Dizer “*come sei?*” nesse sentido seria um erro. *Stare* também quer dizer “ficar”, “permanecer”: *Stasera sto a casa* (hoje à noite eu fico em casa)."
				},
				{ type: 'h', text: "Quando usar essere" },
				{
					type: 'p',
					text: "Para quase todo o resto, inclusive estados passageiros e lugares: *sono stanco* (estou cansado), *Matteo è a casa* (o Matteo está em casa), *la finestra è aperta* (a janela está aberta). Na dúvida, use *essere*; guarde *stare* para a saúde e algumas expressões que você vai encontrar aos poucos."
				},
				{
					type: 'dica',
					text: "Uma frase para fixar a diferença: *Sono stanco, ma sto bene.* (Estou cansado, mas estou bem.)"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Come stai, Chiara? Sto bene, grazie.", pt: "Como você está, Chiara? Estou bem, obrigada." },
				{ it: "I genitori di Matteo partono lunedì.", pt: "Os pais do Matteo vão embora na segunda." },
				{ it: "Apro la finestra? Qui fa caldo.", pt: "Abro a janela? Aqui está quente." },
				{ it: "Giorgio ha il raffreddore e non dorme bene.", pt: "O Giorgio está resfriado e não dorme bem." },
				{ it: "Offriamo un tè a tutti.", pt: "Oferecemos um chá a todos." },
				{ it: "Bianca abita a Torino con sua madre.", pt: "A Bianca mora em Turim com a mãe." },
				{ it: "Senti la musica? Sì, è Matteo con la chitarra.", pt: "Está ouvindo a música? Sim, é o Matteo com o violão." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Como vocês estão?", parts: ["Come ", null, "?"], answers: ["state"] },
				{ pt: "No trem eu nunca durmo.", parts: ["In treno non ", null, " mai."], answers: ["dormo"] },
				{ pt: "Eles vão embora amanhã.", parts: ["Loro ", null, " domani."], answers: ["partono"] },
				{ pt: "O avô está doente.", parts: ["Il nonno ", null, " male."], answers: ["sta"] },
				{ pt: "Vocês abrem a caixa?", parts: ["Voi ", null, " la scatola?"], answers: ["aprite"] }
			]
		}
	]
};

const licao10: Lesson = {
	no: 10,
	kind: 'licao',
	title: 'Il pranzo della domenica',
	titlePt: 'O almoço de domingo',
	lines: [
		{
			it: "Buongiorno! Siete in sei? Prego, il vostro tavolo è qui.",
			pt: "Bom dia! São seis pessoas? Por favor, a mesa de vocês é aqui.",
			lit: "Bom dia! Sois em seis? Por favor, a vossa mesa é aqui.",
			note: "Domingo, numa trattoria do centro: os pais do Matteo pagam o almoço, como prometido. *Essere in sei* = ser seis (pessoas). *Il cameriere* é o garçom."
		},
		{
			it: "Grazie. Allora, ragazzi: quali sono le specialità di Bologna?",
			pt: "Obrigado. Então, pessoal: quais são as especialidades de Bolonha?",
			lit: "Obrigado. Então, rapazes: quais são as especialidades de Bolonha?",
			note: "*Quale* = qual; no plural, *quali*. *Specialità* termina em vogal acentuada e por isso não muda no plural (lição 4): *la specialità, le specialità*, como *la città, le città*."
		},
		{
			it: "Facile, papà: tortellini, tagliatelle al ragù e lasagne!",
			pt: "Fácil, pai: tortellini, tagliatelle à bolonhesa e lasanha!",
			lit: "Fácil, papai: tortellini, talharins ao ragu e lasanhas!",
			note: "*Il ragù* é o molho de carne cozido por horas que o mundo chama de “à bolonhesa”. *Tagliatelle* e *lasagne* são plurais em italiano: *le tagliatelle*, *le lasagne*."
		},
		{ it: "E gli spaghetti alla bolognese?", pt: "E o espaguete à bolonhesa?", lit: "E os espaguetes à bolonhesa?" },
		{
			it: "Shh! Qui a Bologna gli spaghetti alla bolognese non esistono!",
			pt: "Psiu! Aqui em Bolonha espaguete à bolonhesa não existe!",
			lit: "Psiu! Aqui a Bolonha os espaguetes à bolonhesa não existem!",
			note: "É quase verdade: em Bolonha o ragù vai com *tagliatelle*, uma massa larga feita com ovos. O espaguete à bolonhesa é coisa de turista, e os bolonheses adoram dizer isso."
		},
		{
			it: "Io prendo i tortellini in brodo. E tu, Rafael? Quale piatto prendi?",
			pt: "Eu vou de tortellini em caldo. E você, Rafael? Que prato vai querer?",
			lit: "Eu pego os tortellini em caldo. E tu, Rafael? Qual prato pegas?",
			note: "*Quale* também acompanha um substantivo, quando se escolhe entre opções: *quale piatto?* (qual prato?), *quali vini?* (quais vinhos?). *In brodo* = num caldo de carne."
		},
		{ it: "Le tagliatelle al ragù, naturalmente!", pt: "O tagliatelle à bolonhesa, claro!", lit: "Os talharins ao ragu, naturalmente!" },
		{
			it: "Io le lasagne! Sono le mie preferite.",
			pt: "Eu, a lasanha! É a minha preferida.",
			lit: "Eu as lasanhas! São as minhas preferidas.",
			note: "*Le mie* é o plural de *la mia*. No plural, o possessivo também concorda com a coisa: *le mie lasagne*, *i miei tortellini*."
		},
		{
			it: "E da bere? Un Lambrusco o un Sangiovese?",
			pt: "E para beber? Um Lambrusco ou um Sangiovese?",
			note: "*Da bere* = para beber. O Lambrusco é um tinto levemente frisante, típico da Emília; o Sangiovese é um tinto mais encorpado, da Romanha e da Toscana."
		},
		{
			it: "Il Sangiovese della casa è ottimo.",
			pt: "O Sangiovese da casa é ótimo.",
			note: "*Ottimo* = ótimo, excelente; o contrário é *pessimo*, péssimo. *Della* = *di* + *la*."
		},
		{
			it: "Ecco i tortellini, le tagliatelle e le lasagne. Buon appetito!",
			pt: "Aqui estão os tortellini, o tagliatelle e a lasanha. Bom apetite!",
			lit: "Eis os tortellini, os talharins e as lasanhas. Bom apetite!",
			note: "*Buon appetito!* é o que se diz antes de começar a comer."
		},
		{
			it: "Mamma mia, che buone! Le mie tagliatelle a casa sono pessime, in confronto.",
			pt: "Minha nossa, que delícia! O tagliatelle que eu faço em casa é péssimo, comparado a este.",
			lit: "Mãe minha, que boas! Os meus talharins em casa são péssimos, em comparação.",
			note: "*Mamma mia!* é exclamação de surpresa: “nossa!”, “minha nossa!”. *Che buone!* concorda com *tagliatelle*, que é feminino plural. *In confronto* = em comparação."
		},
		{
			it: "Matteo, i tuoi amici sono molto simpatici.",
			pt: "Matteo, os seus amigos são muito simpáticos.",
			lit: "Matteo, os teus amigos são muito simpáticos.",
			note: "*I tuoi* é o plural de *il tuo*. *Mio, tuo, suo* têm um plural irregular: *miei, tuoi, suoi*."
		},
		{
			it: "Lo so, mamma. E le nostre cene in cucina sono famose!",
			pt: "Eu sei, mãe. E os nossos jantares na cozinha são famosos!",
			lit: "O sei, mamãe. E as nossas ceias em cozinha são famosas!",
			note: "*Lo so* = eu sei, fórmula pronta (o verbo *sapere* vem mais adiante). *La cena* = o jantar; *le nostre cene* = os nossos jantares."
		},
		{
			it: "Alla fine tre caffè, due tè e un gelato per Bianca. Paghiamo noi!",
			pt: "No fim, três cafés, dois chás e um sorvete para a Bianca. Quem paga somos nós!",
			lit: "Ao fim três cafés, dois chás e um sorvete para Bianca. Pagamos nós!",
			note: "*Caffè* e *tè* também não mudam no plural: *un caffè, tre caffè*. *Paghiamo*, com *h*, como você viu na lição 3."
		},
		{ it: "Due gelati, nonno!", pt: "Dois sorvetes, vovô!" },
		{ it: "Bianca! Uno solo.", pt: "Bianca! Só um.", lit: "Bianca! Um só." },
		{
			it: "Quali sono le città più belle d'Italia?",
			pt: "Quais são as cidades mais bonitas da Itália?",
			sep: true,
			note: "*Città* não muda no plural. *D'Italia* = *di Italia*: a preposição perde a vogal diante de outra vogal."
		},
		{ it: "I miei genitori abitano a Torino, i tuoi a Recife.", pt: "Os meus pais moram em Turim, os seus em Recife.", lit: "Os meus genitores moram a Turim, os teus a Recife." },
		{ it: "Le tue tagliatelle sono ottime, Rafael!", pt: "O seu tagliatelle está ótimo, Rafael!", lit: "Os teus talharins são ótimos, Rafael!" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Possessivos no plural, quale e ottimo',
			blocks: [
				{
					type: 'p',
					text: "Na lição 8 você viu os possessivos no singular. No plural, eles seguem a regra geral (*-i* para o masculino, *-e* para o feminino), com três formas irregulares no masculino:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "i mi**ei**, le **mi**e", pt: "meus, minhas", pron: "i miéi, le mí-e" },
						{ it: "i tu**o**i, le **tu**e", pt: "teus, tuas; seus, suas", pron: "i tuói, le tú-e" },
						{ it: "i su**o**i, le **su**e", pt: "dele, dela (plural)", pron: "i suói, le sú-e" },
						{ it: "i **no**stri, le **no**stre", pt: "nossos, nossas", pron: "i nós-tri, le nós-tre" },
						{ it: "i **vo**stri, le **vo**stre", pt: "de vocês", pron: "i vós-tri, le vós-tre" },
						{ it: "i **lo**ro, le **lo**ro", pt: "deles, delas", pron: "i lô-ro, le lô-ro" }
					]
				},
				{
					type: 'p',
					text: "*Miei*, *tuoi* e *suoi* têm um ditongo: “miéi”, “tuói”, “suói”, numa sílaba só. E *loro*, como sempre, não muda."
				},
				{ type: 'h', text: "Quale e quali" },
				{
					type: 'p',
					text: "*Quale* (qual) serve para escolher entre opções. Tem só duas formas: *quale* para o singular e *quali* para o plural, sem diferença de gênero. Diante de *è*, perde o *e* e fica *qual è*, sem apóstrofo: *Qual è il tuo piatto preferito?*"
				},
				{ type: 'h', text: "Ottimo e pessimo" },
				{
					type: 'p',
					text: "*Ottimo* (ótimo) e *pessimo* (péssimo) são os extremos de *buono* e *cattivo* (ruim), e concordam como qualquer adjetivo em *-o*: *un vino ottimo*, *tagliatelle pessime*."
				},
				{ type: 'h', text: "Os plurais que não mudam" },
				{
					type: 'p',
					text: "Palavras com acento na última sílaba ficam iguais no plural; só o artigo mostra o número: *la città, le città*; *la specialità, le specialità*; *l'università, le università*; *il caffè, i caffè*; *il tè, i tè*; *il lunedì, i lunedì*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o i que não soa',
			blocks: [
				{
					type: 'p',
					text: "Na lição 0 você viu que, em *ciao* e *giorno*, o *i* só serve para mostrar que o *c* e o *g* são doces. O mesmo acontece com *gli* e *sci* antes de outra vogal. O cardápio de hoje está cheio desses casos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "taglia**tel**le", pt: "tagliatelle", pron: "ta-lha-tél-le" },
						{ it: "for**mag**gio", pt: "queijo", pron: "for-mád-djo" },
						{ it: "a**ran**cia", pt: "laranja", pron: "a-rán-tcha" },
						{ it: "man**gia**re", pt: "comer", pron: "man-djá-re" },
						{ it: "bot**ti**glia", pt: "garrafa", pron: "bot-tí-lha" },
						{ it: "la**scia**re", pt: "deixar", pron: "la-xá-re" }
					]
				},
				{
					type: 'p',
					text: "Mas atenção: quando o *i* é a sílaba forte, ele soa, e bem. *Farmacia* é “far-ma-tchí-a”, com a força no *i*; *bugia* (mentira) é “bu-djí-a”. Nesses casos, o áudio e o dicionário mostram onde fica a força."
				},
				{
					type: 'dica',
					text: "Em *tagliatelle*, cuidado com dois hábitos ao mesmo tempo: o “lh” do *gli* e o *ll* dobrado do fim. “ta-lha-tél-le”, segurando o *l* um instante."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Quali sono i tuoi piatti preferiti?", pt: "Quais são os seus pratos preferidos?" },
				{ it: "Le mie amiche sono di Napoli.", pt: "As minhas amigas são de Nápoles." },
				{ it: "Prendiamo due caffè e due tè.", pt: "Vamos tomar dois cafés e dois chás." },
				{ it: "Questo vino è ottimo, ma il pane è pessimo.", pt: "Este vinho é ótimo, mas o pão é péssimo." },
				{ it: "I nostri vicini sono molto simpatici.", pt: "Os nossos vizinhos são muito simpáticos." },
				{ it: "Qual è la tua città preferita?", pt: "Qual é a sua cidade preferida?" },
				{ it: "Le specialità di questa città sono famose.", pt: "As especialidades desta cidade são famosas." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Os meus pais moram em Turim.", parts: ["I ", null, " genitori abitano a Torino."], answers: ["miei"] },
				{ pt: "E você, qual prato vai querer?", parts: ["E tu, ", null, " piatto prendi?"], answers: ["quale"] },
				{ pt: "Três cafés, por favor.", parts: ["Tre ", null, ", per favore."], answers: ["caffè"] },
				{ pt: "O vinho é ótimo.", parts: ["Il vino è ", null, "."], answers: ["ottimo"] },
				{ pt: "As suas amigas são simpáticas, Chiara.", parts: ["Le ", null, " amiche sono simpatiche, Chiara."], answers: ["tue"] }
			]
		}
	]
};

const licao11: Lesson = {
	no: 11,
	kind: 'licao',
	title: 'Che ore sono?',
	titlePt: 'Que horas são?',
	lines: [
		{
			it: "Chiara, scusa, che ore sono?",
			pt: "Chiara, desculpe, que horas são?",
			note: "Segunda de manhã, na cozinha. Para perguntar as horas: *che ore sono?* ou *che ora è?*. As duas formas se usam em toda a Itália."
		},
		{
			it: "Sono le sette e mezza. Perché?",
			pt: "São sete e meia. Por quê?",
			lit: "São as sete e meia. Por quê?",
			note: "As horas levam artigo feminino plural, porque se subentende *ore*: *sono le sette*, *sono le dieci*. *E mezza* = e meia."
		},
		{
			it: "Alle nove ho lezione e il mio telefono è scarico.",
			pt: "Às nove eu tenho aula e o meu celular está sem bateria.",
			lit: "Às nove tenho lição e o meu telefone é descarregado.",
			note: "*Alle nove* = *a* + *le*: às nove. *Il telefono* é também o celular (que se chama *cellulare*). *Scarico* = descarregado, sem bateria."
		},
		{
			it: "Allora c'è tempo. Prendi un caffè con me?",
			pt: "Então dá tempo. Toma um café comigo?",
			lit: "Então há tempo. Pegas um café com mim?"
		},
		{
			it: "Volentieri! E tu, a che ora finisci oggi?",
			pt: "Com prazer! E você, a que horas termina hoje?",
			note: "*Volentieri* = com prazer. *Finire* = terminar, acabar. É um verbo em *-ire*, mas com um pedacinho a mais: *finisco, finisci, finisce*... Veja na leitura. *A che ora?* = a que horas?"
		},
		{
			it: "Finisco alle sei, ma poi studio in biblioteca. Preferisco studiare lì: qui c'è troppo rumore.",
			pt: "Termino às seis, mas depois estudo na biblioteca. Prefiro estudar lá: aqui tem barulho demais.",
			lit: "Termino às seis, mas depois estudo em biblioteca. Prefiro estudar lá: aqui há demasiado rumor.",
			note: "*Preferire* (preferir) segue o modelo de *finire*: *preferisco, preferisci*... Depois dele, o verbo fica no infinitivo, como em português: *preferisco studiare*. *Il rumore* = o barulho."
		},
		{ it: "Il rumore è Matteo con la chitarra?", pt: "O barulho é o Matteo com o violão?", lit: "O rumor é Matteo com a guitarra?" },
		{
			it: "Esatto! Suona fino a mezzanotte e poi dorme fino a mezzogiorno.",
			pt: "Exato! Toca até a meia-noite e depois dorme até o meio-dia.",
			note: "*Mezzanotte* = meia-noite; *mezzogiorno* = meio-dia. Os dois vão sem artigo: *è mezzogiorno*, *fino a mezzanotte*. *Fino a* = até."
		},
		{
			it: "Ma oggi Matteo è già qui, in cucina! È strano.",
			pt: "Mas hoje o Matteo já está aqui, na cozinha! Que estranho.",
			lit: "Mas hoje Matteo é já aqui, em cozinha! É estranho.",
			note: "*È strano* = é estranho. Expressões assim, com *è* + adjetivo, não têm sujeito: *è presto* (é cedo), *è tardi* (é tarde), *è facile*, *è normale*."
		},
		{
			it: "Buongiorno! Lo so, è presto per me. Ma alle otto e un quarto ho un esame.",
			pt: "Bom dia! Eu sei, é cedo para mim. Mas às oito e quinze tenho uma prova.",
			lit: "Bom dia! O sei, é cedo para mim. Mas às oito e um quarto tenho um exame.",
			note: "*E un quarto* = e quinze (um quarto de hora). *L'esame* é a prova da faculdade. *Lo so* (eu sei) você viu na lição 10."
		},
		{
			it: "Un esame alle otto e un quarto? Poveretto!",
			pt: "Uma prova às oito e quinze? Coitado!",
			note: "*Poveretto* = coitadinho, de *povero* (pobre) com o diminutivo *-etto*."
		},
		{
			it: "Eh, sì. E non capisco niente di statistica!",
			pt: "Pois é. E eu não entendo nada de estatística!",
			lit: "Eh, sim. E não entendo nada de estatística!",
			note: "*Capire* (entender) também leva *-isc-*: *capisco, capisci, capisce*. *Non capisco niente* = não entendo nada."
		},
		{
			it: "Io capisco la statistica: studio ingegneria! Stasera studiamo insieme?",
			pt: "Eu entendo estatística: estudo engenharia! Hoje à noite a gente estuda junto?",
			lit: "Eu entendo a estatística: estudo engenharia! Esta noite estudamos juntos?"
		},
		{
			it: "Grazie, ma l'esame è stamattina! Che ore sono adesso?",
			pt: "Obrigado, mas a prova é hoje de manhã! Que horas são agora?",
			note: "*Stamattina* = hoje de manhã, como *stasera* = hoje à noite (lição 2). *Adesso* = agora."
		},
		{
			it: "Sono le otto meno dieci.",
			pt: "São dez para as oito.",
			lit: "São as oito menos dez.",
			note: "Para os minutos que faltam, usa-se *meno* (menos): *le otto meno dieci* = dez para as oito; *le nove meno un quarto* = quinze para as nove."
		},
		{
			it: "Le otto meno dieci?! È tardi! Ciao, ragazzi!",
			pt: "Dez para as oito?! Está tarde! Tchau, pessoal!",
			lit: "As oito menos dez?! É tarde! Tchau, rapazes!"
		},
		{
			it: "A che ora pranzate? Di solito all'una.",
			pt: "A que horas vocês almoçam? Normalmente à uma.",
			lit: "A que hora almoçais? De costume à uma.",
			sep: true,
			note: "Uma hora é singular: *è l'una*, *all'una*. *Di solito* = normalmente, em geral."
		},
		{ it: "I negozi aprono alle nove e chiudono alle sette e mezza.", pt: "As lojas abrem às nove e fecham às sete e meia." },
		{
			it: "Capite tutto? No, ma preferiamo l'italiano all'inglese.",
			pt: "Vocês entendem tudo? Não, mas preferimos o italiano ao inglês.",
			lit: "Entendeis tudo? Não, mas preferimos o italiano ao inglês.",
			note: "*Capite*, *preferiamo*: com *noi* e *voi*, o *-isc-* não aparece."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'As horas',
			blocks: [
				{
					type: 'p',
					text: "Para perguntar, *che ore sono?* ou *che ora è?*. Para responder, *sono le* + o número, com o artigo feminino plural. Só três horas fogem disso, porque são singulares: *è l'una*, *è mezzogiorno*, *è mezzanotte*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "È l'**u**na.", pt: "É uma hora.", pron: "é lú-na" },
						{ it: "**So**no le **tre** e **die**ci.", pt: "São três e dez.", pron: "sô-no le trê e dié-tchi" },
						{ it: "**So**no le **quat**tro e un **quar**to.", pt: "São quatro e quinze.", pron: "sô-no le kuát-tro e un kuár-to" },
						{ it: "**So**no le **cin**que e **mez**za.", pt: "São cinco e meia.", pron: "sô-no le tchín-kue e méd-dza" },
						{ it: "**So**no le **sei** **me**no un **quar**to.", pt: "São quinze para as seis.", pron: "sô-no le séi mê-no un kuár-to" },
						{ it: "È mezza**not**te.", pt: "É meia-noite.", pron: "é med-dza-nót-te" }
					]
				},
				{
					type: 'p',
					text: "Para dizer a que horas acontece alguma coisa, *a* + artigo: *alle nove*, *alle sette e mezza*, *all'una*. Mas *a mezzogiorno* e *a mezzanotte*, sem artigo."
				},
				{ type: 'h', text: "As partes do dia" },
				{
					type: 'p',
					text: "*La mattina* (a manhã), *il pomeriggio* (a tarde), *la sera* (a noite, até a hora de dormir) e *la notte* (a madrugada, a noite alta). Para tirar a dúvida entre a manhã e a noite: *alle otto di mattina*, *alle tre del pomeriggio*, *alle dieci di sera*, *alle due di notte*. E para hoje: *stamattina*, *oggi pomeriggio*, *stasera*, *stanotte* (esta noite; dito de manhã, a noite passada)."
				},
				{
					type: 'dica',
					text: "Em horários oficiais (trem, cinema, loja), o italiano usa as 24 horas: *alle diciannove* (às sete da noite). Você vai treinar isso na revisão da lição 14."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Verbos em -ire com -isc-',
			blocks: [
				{
					type: 'p',
					text: "Alguns verbos em *-ire* acrescentam *-isc-* entre o radical e a terminação, em quatro pessoas: *io*, *tu*, *lui/lei* e *loro*. Com *noi* e *voi*, nada muda."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) fi**ni**sco", pt: "eu termino", pron: "fi-nís-ko" },
						{ it: "(tu) fi**ni**sci", pt: "você termina", pron: "fi-ní-xi" },
						{ it: "(lui, lei, Lei) fi**ni**sce", pt: "ele, ela termina", pron: "fi-ní-xe" },
						{ it: "(noi) fi**nia**mo", pt: "nós terminamos", pron: "fi-niá-mo" },
						{ it: "(voi) fi**ni**te", pt: "vocês terminam", pron: "fi-ní-te" },
						{ it: "(loro) fi**ni**scono", pt: "eles terminam", pron: "fi-nís-ko-no" }
					]
				},
				{
					type: 'p',
					text: "Repare no som: *-isco* e *-iscono* têm “sk”; *-isci* e *-isce* têm “x”. É a regra do *sc* da lição 0, que você vai treinar na próxima lição."
				},
				{
					type: 'p',
					text: "Seguem esse modelo *capire* (entender), *preferire* (preferir), *pulire* (limpar) e *spedire* (enviar), entre outros. Pelo infinitivo não dá para saber: *dormire* e *partire* não levam *-isc-*; *finire* e *capire*, sim. O dicionário avisa, e o ouvido aprende rápido."
				},
				{ type: 'h', text: "È presto, è tardi, è strano" },
				{
					type: 'p',
					text: "Com *è* + adjetivo, o italiano faz frases sem sujeito, como o nosso “é cedo”: *è presto*, *è tardi*, *è strano*, *è facile*, *è normale*. Se vier um verbo depois, ele fica no infinitivo: *è facile capire*, é fácil entender."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che ore sono? È l'una e mezza.", pt: "Que horas são? É uma e meia." },
				{ it: "Il corso di italiano finisce alle nove di sera.", pt: "O curso de italiano termina às nove da noite." },
				{ it: "Preferisci il tè o il caffè?", pt: "Você prefere chá ou café?" },
				{ it: "È tardi, e domani ho lezione alle otto.", pt: "Está tarde, e amanhã tenho aula às oito." },
				{ it: "Matteo dorme fino a mezzogiorno.", pt: "O Matteo dorme até o meio-dia." },
				{ it: "Non capisco: è strano!", pt: "Não entendo: é estranho!" },
				{ it: "I miei amici finiscono di lavorare alle sei.", pt: "Os meus amigos terminam de trabalhar às seis." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "São três e quinze.", parts: ["Sono le tre e un ", null, "."], answers: ["quarto"] },
				{ pt: "Eu termino às cinco.", parts: ["Io ", null, " alle cinque."], answers: ["finisco"] },
				{ pt: "É meio-dia.", parts: ["È ", null, "."], answers: ["mezzogiorno"] },
				{ pt: "Eles preferem estudar em casa.", parts: ["Loro ", null, " studiare a casa."], answers: ["preferiscono"] },
				{ pt: "Que horas são? É uma hora.", parts: ["Che ore sono? È ", null, "."], answers: ["l'una"] }
			]
		}
	]
};

const licao12: Lesson = {
	no: 12,
	kind: 'licao',
	title: 'Una videochiamata',
	titlePt: 'Uma videochamada',
	lines: [
		{
			it: "Ciao, Rafa! Oggi parliamo in italiano, va bene?",
			pt: "Oi, Rafa! Hoje a gente fala em italiano, combinado?",
			lit: "Oi, Rafa! Hoje falamos em italiano, vai bem?",
			note: "Domingo, a ligação de sempre para casa. Do outro lado está a Larissa, irmã do Rafael, que estuda italiano num aplicativo e quer praticar. *Va bene?* = pode ser?, combinado? (lição 2)."
		},
		{
			it: "In italiano? Brava! Parli proprio bene.",
			pt: "Em italiano? Muito bem! Você fala bem mesmo.",
			lit: "Em italiano? Brava! Falas propriamente bem.",
			note: "*Proprio* = mesmo, de verdade: reforça a palavra seguinte. *Brava!* (para homem, *bravo!*) é o elogio “muito bem!”, e não quer dizer “zangada”."
		},
		{
			it: "Studio un po' ogni giorno. Che ore sono lì a Bologna?",
			pt: "Estudo um pouco todo dia. Que horas são aí em Bolonha?",
			lit: "Estudo um pouco cada dia. Que horas são lá a Bolonha?"
		},
		{
			it: "Sono le otto di sera. A Recife sono le quattro, vero?",
			pt: "São oito da noite. Em Recife são quatro da tarde, né?",
			lit: "São as oito de noite. A Recife são as quatro, verdade?",
			note: "Entre a Itália e Recife a diferença é de quatro horas (cinco quando a Itália está no horário de verão)."
		},
		{
			it: "Sì. La mamma è qui con me e domanda: mangi bene? Quanto paghi per la stanza?",
			pt: "É. A mãe está aqui comigo e pergunta: você come bem? Quanto você paga pelo quarto?",
			lit: "Sim. A mamãe está aqui com mim e pergunta: comes bem? Quanto pagas pelo quarto?",
			note: "*Domandare* = perguntar (lembre de *la domanda*, lição 2). *Paghi*: o *h* mantém o *g* duro antes de *i*, como você viu na lição 3."
		},
		{
			it: "Mangio benissimo, mamma! E pago trecentocinquanta euro al mese.",
			pt: "Como muito bem, mãe! E pago trezentos e cinquenta euros por mês.",
			lit: "Como muitíssimo bem, mamãe! E pago trezentos e cinquenta euro ao mês.",
			note: "*Al mese* = por mês. Os números se escrevem numa palavra só: *trecentocinquanta* (350)."
		},
		{ it: "Per la mamma è caro!", pt: "Para a mãe, é caro!", lit: "Para a mamãe é caro!" },
		{
			it: "Per Bologna è normale. E cerco un lavoretto in un bar.",
			pt: "Para Bolonha é normal. E estou procurando um bico num bar.",
			lit: "Para Bolonha é normal. E procuro um trabalhinho em um bar."
		},
		{
			it: "Cerchi lavoro? E l'università?",
			pt: "Você está procurando trabalho? E a faculdade?",
			lit: "Procuras trabalho? E a universidade?",
			note: "*Cerchi*, com *h*, como *paghi*: em todos os verbos em *-care* e *-gare*, o *h* aparece antes de *i*."
		},
		{
			it: "Studio la mattina e lavoro la sera. Tranquilla!",
			pt: "Estudo de manhã e trabalho à noite. Fica tranquila!",
			lit: "Estudo a manhã e trabalho a noite. Tranquila!",
			note: "*Tranquilla!* = fique tranquila!, para mulher; para homem, *tranquillo!*."
		},
		{
			it: "E Chiara? È la tua fidanzata? La mamma domanda sempre!",
			pt: "E a Chiara? É sua namorada? A mãe pergunta toda hora!",
			lit: "E Chiara? É a tua noiva? A mamãe pergunta sempre!",
			note: "*Il fidanzato*, *la fidanzata* = o namorado, a namorada (e também noivo, noiva). Para amizade, *amico*, *amica*. *La mia ragazza* também pode ser “a minha namorada”, conforme o contexto."
		},
		{
			it: "No! Chiara è un'amica, e basta.",
			pt: "Não! A Chiara é uma amiga, e só.",
			lit: "Não! Chiara é uma amiga, e basta.",
			note: "*E basta* = e pronto, e só isso."
		},
		{
			it: "Ciao, Larissa! Buonasera, signora! Sono Chiara, l'amica.",
			pt: "Oi, Larissa! Boa noite, senhora! Sou a Chiara, a amiga.",
			lit: "Oi, Larissa! Boa noite, senhora! Sou Chiara, a amiga.",
			note: "A Chiara entra na tela bem nessa hora. *Buonasera* serve a partir do meio da tarde. Com a mãe do Rafael, que ela ainda não conhece, a Chiara usa *signora*."
		},
		{
			it: "Piacere, Chiara! Conosci il Brasile?",
			pt: "Prazer, Chiara! Você conhece o Brasil?",
			lit: "Prazer, Chiara! Conheces o Brasil?",
			note: "*Conoscere* = conhecer (pessoas, lugares): *conosco, conosci, conosce*... O som muda com a vogal: *conosco* com “sk”, *conosci* com “x”."
		},
		{
			it: "No, non conosco il Brasile. Ma conosco la cucina brasiliana: i fagioli di Rafael sono fantastici!",
			pt: "Não, não conheço o Brasil. Mas conheço a cozinha brasileira: o feijão do Rafael é fantástico!",
			lit: "Não, não conheço o Brasil. Mas conheço a cozinha brasileira: os feijões de Rafael são fantásticos!",
			note: "Compare os sons: *conosco* (“ko-nôs-ko”) e *conosci* (“ko-nô-xi”). E o feijão, de novo no plural: *i fagioli* (lição 3)."
		},
		{
			it: "Allora ciao, mamma! Ciao, Larissa! Ci sentiamo domenica prossima.",
			pt: "Então tchau, mãe! Tchau, Larissa! A gente se fala no próximo domingo.",
			lit: "Então tchau, mamãe! Tchau, Larissa! Nos ouvimos domingo próximo.",
			note: "*Ci sentiamo* = a gente se fala (literalmente, “nos ouvimos”, do verbo *sentire*), a despedida típica ao telefone. *Prossimo* = próximo."
		},
		{
			it: "Conoscete i genitori di Matteo? Sì, sono proprio simpatici.",
			pt: "Vocês conhecem os pais do Matteo? Sim, são muito simpáticos mesmo.",
			lit: "Conheceis os genitores de Matteo? Sim, são propriamente simpáticos.",
			sep: true
		},
		{
			it: "Quanto paghiamo per la luce? Quaranta euro al mese.",
			pt: "Quanto a gente paga de luz? Quarenta euros por mês.",
			lit: "Quanto pagamos pela luz? Quarenta euro ao mês.",
			note: "*Paghiamo*, também com *h*: *pago, paghi, paga, paghiamo, pagate, pagano*."
		},
		{ it: "Luca è il fidanzato di Giulia.", pt: "O Luca é o namorado da Giulia." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Conoscere, proprio e os verbos em -care e -gare',
			blocks: [
				{
					type: 'p',
					text: "*Conoscere* (conhecer) é um verbo regular em *-ere*: segue *prendere* direitinho. A única surpresa está no som, porque o *sc* muda conforme a vogal que vem depois."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) co**no**sco", pt: "eu conheço", pron: "ko-nôs-ko" },
						{ it: "(tu) co**no**sci", pt: "você conhece", pron: "ko-nô-xi" },
						{ it: "(lui, lei, Lei) co**no**sce", pt: "ele, ela conhece", pron: "ko-nô-xe" },
						{ it: "(noi) cono**scia**mo", pt: "nós conhecemos", pron: "ko-no-xá-mo" },
						{ it: "(voi) cono**sce**te", pt: "vocês conhecem", pron: "ko-no-xê-te" },
						{ it: "(loro) co**no**scono", pt: "eles conhecem", pron: "ko-nôs-ko-no" }
					]
				},
				{
					type: 'p',
					text: "*Conoscere* é conhecer pessoas e lugares: *conosco Chiara*, *non conosco il Brasile*. Para saber uma informação, o italiano usa outro verbo, *sapere*, que você já ouviu em *lo so* (eu sei) e que vem com calma mais adiante."
				},
				{ type: 'h', text: "Proprio" },
				{
					type: 'p',
					text: "*Proprio*, antes de um adjetivo ou de um advérbio, reforça como o nosso “mesmo”, “de verdade”: *parli proprio bene* (você fala bem mesmo), *sono proprio simpatici*. Sozinho, como resposta, quer dizer “exatamente”: *Proprio!*"
				},
				{ type: 'h', text: "Cercare e pagare" },
				{
					type: 'p',
					text: "Como você viu na lição 3, os verbos em *-care* e *-gare* põem um *h* antes de *i* para o som continuar duro: *cerco, cerchi, cerca, cerchiamo, cercate, cercano*; *pago, paghi, paga, paghiamo, pagate, pagano*. Na fala não muda nada: *cerchi* é “tchêr-ki”, *paghi* é “pá-gui”."
				},
				{ type: 'h', text: "Amico, ragazzo, fidanzato" },
				{
					type: 'p',
					text: "*Un amico*, *un'amica*: amizade. *Il fidanzato*, *la fidanzata*: namorado, namorada, e também noivo, noiva. *Il mio ragazzo*, *la mia ragazza*: com o possessivo, quase sempre quer dizer namorado e namorada. Por isso a pergunta da mãe do Rafael deu tanto o que falar."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o sc antes de cada vogal',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 11 o *sc* vem aparecendo no meio dos verbos: *capisco, capisci*; *finisco, finisce*; *conosco, conosci*. A regra é a da lição 0: antes de *a, o, u*, o *sc* é “sk”; antes de *e, i*, é “x”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ca**pi**sco / ca**pi**sci", pt: "entendo / você entende", pron: "ka-pís-ko / ka-pí-xi" },
						{ it: "co**no**scono / cono**sce**te", pt: "eles conhecem / vocês conhecem", pron: "ko-nôs-ko-no / ko-no-xê-te" },
						{ it: "**scuo**la / **sce**na", pt: "escola / cena", pron: "skuó-la / xé-na" },
						{ it: "pre**fe**risco / pre**fe**risce", pt: "prefiro / ele prefere", pron: "pre-fe-rís-ko / pre-fe-rí-xe" }
					]
				},
				{
					type: 'p',
					text: "Assim, o mesmo verbo troca de som dentro da conjugação, sem que a escrita do radical mude. Não pense na regra enquanto fala: repita as formas em pares, *conosco, conosci*, até o ouvido fazer a troca sozinho."
				},
				{
					type: 'dica',
					text: "Cuidado para não separar o *s* do *c*: *conosci* é “ko-nô-xi”, e não “ko-nôs-tchi”. E no fim, nada de “xi” virar “chí” com força: a sílaba forte é a do *no*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Conosci la sorella di Rafael? No, non conosco la sua famiglia.", pt: "Você conhece a irmã do Rafael? Não, não conheço a família dele." },
				{ it: "Quanto paghi per il telefono?", pt: "Quanto você paga pelo celular?" },
				{ it: "Cerchiamo una casa in centro.", pt: "Estamos procurando uma casa no centro." },
				{ it: "Chiara non è la sua fidanzata, è un'amica.", pt: "A Chiara não é a namorada dele, é uma amiga." },
				{ it: "Questo bar è proprio caro!", pt: "Este bar é caro mesmo!" },
				{ it: "Ci sentiamo domenica, mamma!", pt: "A gente se fala no domingo, mãe!" },
				{ it: "Conoscono bene Bologna.", pt: "Eles conhecem bem Bolonha." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você conhece o Matteo?", parts: ["Tu ", null, " Matteo?"], answers: ["conosci"] },
				{ pt: "Quanto você paga por mês?", parts: ["Quanto ", null, " al mese?"], answers: ["paghi"] },
				{ pt: "O que você está procurando?", parts: ["Che cosa ", null, "?"], answers: ["cerchi"] },
				{ pt: "Ela é a namorada do Luca.", parts: ["È la ", null, " di Luca."], answers: ["fidanzata"] },
				{ pt: "Você fala bem mesmo!", parts: ["Parli ", null, " bene!"], answers: ["proprio"] }
			]
		}
	]
};

const licao13: Lesson = {
	no: 13,
	kind: 'licao',
	title: 'La mia famiglia',
	titlePt: 'A minha família',
	lines: [
		{
			it: "Mi chiamo Rafael, ho ventitré anni e sono di Recife, nel nord-est del Brasile.",
			pt: "Eu me chamo Rafael, tenho vinte e três anos e sou de Recife, no Nordeste do Brasil.",
			lit: "Me chamo Rafael, tenho vinte e três anos e sou de Recife, no nordeste do Brasil.",
			note: "Hoje, no lugar do diálogo, um texto: a redação que o Rafael escreveu para o curso de italiano de quinta-feira. *Mi chiamo* = eu me chamo, do verbo *chiamarsi*. *Nel* = *in* + *il*; *del* = *di* + *il*."
		},
		{
			it: "La mia famiglia non è grande, ma è molto rumorosa.",
			pt: "A minha família não é grande, mas é muito barulhenta.",
			note: "*Rumoroso* = barulhento, de *il rumore* (lição 11)."
		},
		{
			it: "Mio padre si chiama Roberto ed è ingegnere: lavora al porto.",
			pt: "O meu pai se chama Roberto e é engenheiro: trabalha no porto.",
			lit: "Meu pai se chama Roberto e é engenheiro: trabalha ao porto.",
			note: "*Mio padre*, sem artigo: com parentes no singular, o possessivo dispensa o artigo. *Ed è*: diante de vogal, principalmente de outro *e*, a conjunção *e* costuma virar *ed*. *Si chiama* = se chama."
		},
		{
			it: "Mia madre si chiama Ana ed è maestra in una scuola elementare.",
			pt: "A minha mãe se chama Ana e é professora numa escola primária.",
			lit: "Minha mãe se chama Ana e é mestra em uma escola elementar.",
			note: "*La maestra*, *il maestro*: professor das crianças pequenas. A partir da *scuola media* (dos 11 anos), *il professore*, *la professoressa*."
		},
		{
			it: "Ho un fratello e una sorella.",
			pt: "Tenho um irmão e uma irmã.",
			note: "*Fratello* = irmão; *sorella* = irmã. No plural, *i fratelli* pode ser “os irmãos” em geral, homens e mulheres juntos."
		},
		{
			it: "Mia sorella Larissa ha diciannove anni e studia giurisprudenza. Ora studia anche l'italiano, con un'app.",
			pt: "A minha irmã Larissa tem dezenove anos e faz direito. Agora estuda também italiano, num aplicativo.",
			lit: "Minha irmã Larissa tem dezenove anos e estuda jurisprudência. Agora estuda também o italiano, com um app.",
			note: "*Giurisprudenza* é o curso de direito. *Ora* = agora, como *adesso*."
		},
		{
			it: "Mio fratello Bruno è più grande: ha trent'anni ed è sposato.",
			pt: "O meu irmão Bruno é mais velho: tem trinta anos e é casado.",
			lit: "Meu irmão Bruno é mais grande: tem trinta anos e é casado.",
			note: "Entre irmãos, *più grande* = mais velho; *più piccolo* = mais novo. *Sposato* = casado. *Trent'anni*: *trenta* perde o *a* diante de *anni*."
		},
		{
			it: "Sua moglie si chiama Fernanda e hanno due figli, Davi e Alice.",
			pt: "A mulher dele se chama Fernanda, e eles têm dois filhos, o Davi e a Alice.",
			lit: "Sua esposa se chama Fernanda e têm dois filhos, Davi e Alice.",
			note: "*Sua moglie* = a esposa dele, também sem artigo. *I figli* = os filhos de alguém, meninos ou meninas: *un figlio* e *una figlia* fazem *due figli*."
		},
		{
			it: "Davi ha sei anni e Alice tre: sono due bambini molto vivaci.",
			pt: "O Davi tem seis anos e a Alice, três: são duas crianças cheias de energia.",
			lit: "Davi tem seis anos e Alice três: são dois meninos muito vivazes.",
			note: "*Bambini* são crianças, pela idade; *figli* são filhos, pela relação. Um senhor de cinquenta anos ainda é *figlio* dos pais, mas não é mais *bambino*. *Vivace* = animado, agitado: “vi-vá-tche”."
		},
		{
			it: "Sono i miei nipoti, e io sono lo zio preferito!",
			pt: "São os meus sobrinhos, e eu sou o tio preferido!",
			note: "*Nipote* quer dizer sobrinho e também neto. No plural, *i miei nipoti* leva artigo: a regra dos parentes sem artigo vale só para o singular."
		},
		{
			it: "Con i miei genitori abita anche mia nonna Lúcia, che ha ottantadue anni.",
			pt: "Com os meus pais mora também a minha avó Lúcia, que tem oitenta e dois anos.",
			lit: "Com os meus genitores mora também minha avó Lúcia, que tem oitenta e dois anos.",
			note: "*I genitori* = os pais (pai e mãe). Cuidado: *i parenti* são os parentes, e não os pais."
		},
		{
			it: "La nonna cucina per tutti, e la domenica tutta la famiglia pranza a casa dei miei genitori.",
			pt: "A vovó cozinha para todos, e aos domingos a família inteira almoça na casa dos meus pais.",
			lit: "A avó cozinha para todos, e o domingo toda a família almoça a casa dos meus genitores.",
			note: "*La nonna*, com artigo e sem possessivo, como o nosso “a vovó”. *Dei* = *di* + *i*."
		},
		{
			it: "La loro casa è piccola, ma c'è sempre posto per tutti.",
			pt: "A casa deles é pequena, mas sempre tem lugar para todo mundo.",
			lit: "A deles casa é pequena, mas há sempre lugar para todos.",
			note: "*Loro* (deles) leva sempre artigo, até com parentes: *la loro casa*, *il loro figlio*."
		},
		{
			it: "Abbiamo anche un cane: si chiama Biscoito ed è il re della casa.",
			pt: "Temos também um cachorro: ele se chama Biscoito e é o rei da casa.",
			note: "*Il cane* = o cachorro; *il re* = o rei (invariável: *i re*)."
		},
		{
			it: "La mia famiglia è lontana, ma ogni domenica telefono a casa e parlo con tutti.",
			pt: "A minha família está longe, mas todo domingo eu ligo para casa e falo com todo mundo.",
			lit: "A minha família é distante, mas cada domingo telefono a casa e falo com todos.",
			note: "*Lontano* = longe, distante. Aqui também com *essere*: *è lontana*."
		},
		{
			it: "Bravo, Rafael! Un testo molto bello, e senza errori.",
			pt: "Muito bem, Rafael! Um texto muito bonito, e sem erros.",
			note: "É a professora do curso devolvendo a redação. *Senza* = sem."
		},
		{
			it: "Come si chiamano i tuoi fratelli? Si chiamano Bruno e Larissa.",
			pt: "Como se chamam os seus irmãos? Eles se chamam Bruno e Larissa.",
			lit: "Como se chamam os teus irmãos? Se chamam Bruno e Larissa.",
			sep: true
		},
		{
			it: "Mia madre ed io parliamo ogni domenica.",
			pt: "A minha mãe e eu conversamos todo domingo.",
			lit: "Minha mãe e eu falamos cada domingo."
		},
		{
			it: "I miei figli non sono più bambini: hanno vent'anni!",
			pt: "Os meus filhos não são mais crianças: têm vinte anos!",
			note: "*Non... più* = não... mais."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os parentes e o possessivo',
			blocks: [
				{
					type: 'p',
					text: "Na lição 8 você viu que o possessivo italiano vem com artigo: *la mia casa*, *il tuo computer*. Os nomes de parentes no singular são a grande exceção: com eles, o artigo cai."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**mi**o **pa**dre, **mi**a **ma**dre", pt: "o meu pai, a minha mãe" },
						{ it: "**mi**o fra**tel**lo, **mi**a so**rel**la", pt: "o meu irmão, a minha irmã" },
						{ it: "**su**a **mo**glie, **tu**o **zi**o", pt: "a mulher dele, o seu tio" }
					]
				},
				{ type: 'h', text: "Quando o artigo volta" },
				{
					type: 'p',
					text: "O artigo reaparece em três casos. No plural: *i miei genitori*, *i miei nipoti*, *le mie sorelle*. Com *loro*, sempre: *la loro figlia*, *il loro nonno*. E quando o parente vem modificado por um adjetivo ou um diminutivo: *il mio fratello preferito*, *la mia sorellina* (a minha irmãzinha)."
				},
				{
					type: 'p',
					text: "*Mamma* e *papà*, palavras carinhosas, costumam levar artigo: *la mia mamma*, *il mio papà*. Já *mia madre* e *mio padre* vão sem."
				},
				{ type: 'h', text: "Chiamarsi" },
				{
					type: 'p',
					text: "Para dizer o nome, o italiano usa *chiamarsi* (chamar-se), como nós: *mi chiamo Rafael*, *si chiama Ana*. O pronome (*mi, ti, si*...) vem antes do verbo. Os verbos desse tipo, os reflexivos, vão aparecer bastante mais adiante; por enquanto, guarde estas formas:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "mi **chia**mo", pt: "eu me chamo", pron: "mi kiá-mo" },
						{ it: "ti **chia**mi", pt: "você se chama", pron: "ti kiá-mi" },
						{ it: "si **chia**ma", pt: "ele, ela se chama; o senhor se chama", pron: "si kiá-ma" },
						{ it: "si **chia**mano", pt: "eles se chamam", pron: "si kiá-ma-no" }
					]
				},
				{ type: 'h', text: "E ou ed" },
				{
					type: 'p',
					text: "Diante de vogal, a conjunção *e* pode virar *ed*, para as duas vogais não se chocarem: *ed è*, *mia madre ed io*. O uso é mais firme diante de outro *e*; diante das outras vogais, varia de pessoa para pessoa. O mesmo vale para *a*, que pode virar *ad*: *ad Ancona*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A família',
			blocks: [
				{
					type: 'p',
					text: "Os nomes de parentes mais usados. Repare que muitos têm masculino e feminino, como em português."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "i geni**to**ri", pt: "os pais (pai e mãe)", pron: "i dje-ni-tô-ri" },
						{ it: "il fra**tel**lo, la so**rel**la", pt: "o irmão, a irmã", pron: "il fra-tél-lo, la so-rél-la" },
						{ it: "il **fi**glio, la **fi**glia", pt: "o filho, a filha", pron: "il fí-lho, la fí-lha" },
						{ it: "il **non**no, la **non**na", pt: "o avô, a avó", pron: "il nón-no, la nón-na" },
						{ it: "lo **zi**o, la **zi**a", pt: "o tio, a tia", pron: "lo tsí-o, la tsí-a" },
						{ it: "il ni**po**te, la ni**po**te", pt: "o sobrinho, a sobrinha; o neto, a neta", pron: "il ni-pô-te, la ni-pô-te" },
						{ it: "il cu**gi**no, la cu**gi**na", pt: "o primo, a prima", pron: "il ku-djí-no, la ku-djí-na" },
						{ it: "il ma**ri**to, la **mo**glie", pt: "o marido, a esposa", pron: "il ma-rí-to, la mô-lhe" }
					]
				},
				{
					type: 'p',
					text: "Repare em *lo zio*: diante de *z*, o artigo é *lo* (lição 4). E em *nipote*, que serve para sobrinho e para neto; o contexto resolve."
				},
				{ type: 'h', text: "Figli ou bambini?" },
				{
					type: 'p',
					text: "*Figlio* diz a relação com os pais; *bambino*, a idade. *Hanno due figli* = eles têm dois filhos (de qualquer idade). *Ci sono tre bambini in piazza* = há três crianças na praça. Quando alguém pergunta *Hai figli?*, quer saber se você tem filhos, mesmo que já sejam adultos."
				},
				{
					type: 'dica',
					text: "Para falar da idade, você já sabe: *ha sei anni*. E para comparar irmãos, *più grande* (mais velho) e *più piccolo* (mais novo): *Bruno è più grande di me*, o Bruno é mais velho que eu."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Come si chiama tua sorella? Si chiama Larissa.", pt: "Como se chama a sua irmã? Ela se chama Larissa." },
				{ it: "I miei genitori abitano a Recife con mia nonna.", pt: "Os meus pais moram em Recife com a minha avó." },
				{ it: "Mio fratello ha due figli.", pt: "O meu irmão tem dois filhos." },
				{ it: "La loro figlia ha sei anni.", pt: "A filha deles tem seis anos." },
				{ it: "Ci sono dieci bambini in piazza.", pt: "Há dez crianças na praça." },
				{ it: "Sua moglie è di Olinda ed è medico.", pt: "A mulher dele é de Olinda e é médica." },
				{ it: "Mi chiamo Chiara e sono di Napoli.", pt: "Eu me chamo Chiara e sou de Nápoles." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "A Ana é a minha mãe.", parts: ["Ana è ", null, " madre."], answers: ["mia"] },
				{ pt: "Como você se chama?", parts: ["Come ti ", null, "?"], answers: ["chiami"] },
				{ pt: "A casa deles é pequena.", parts: ["La ", null, " casa è piccola."], answers: ["loro"] },
				{ pt: "O pai se chama Roberto e é engenheiro.", parts: ["Il padre si chiama Roberto ", null, " è ingegnere."], answers: ["ed"] },
				{ pt: "Os filhos dele são crianças: têm cinco e sete anos.", parts: ["I suoi figli sono ", null, ": hanno cinque e sette anni."], answers: ["bambini"] }
			]
		}
	]
};

const licao14: Lesson = {
	no: 14,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Os possessivos',
			blocks: [
				{
					type: 'p',
					text: "Segunda semana concluída! Nestas seis lições você conheceu a casa em Bolonha, a família do Matteo e a do Rafael. Vamos arrumar o que apareceu, começando pelos possessivos, que estiveram em quase todas as falas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il mio, la mia / i miei, le mie", pt: "meu, minha / meus, minhas" },
						{ it: "il tuo, la tua / i tuoi, le tue", pt: "teu, tua; seu, sua / teus, tuas" },
						{ it: "il suo, la sua / i suoi, le sue", pt: "dele, dela; do senhor (singular / plural)" },
						{ it: "il nostro, la nostra / i nostri, le nostre", pt: "nosso, nossa / nossos, nossas" },
						{ it: "il vostro, la vostra / i vostri, le vostre", pt: "de vocês (singular / plural)" },
						{ it: "il loro, la loro / i loro, le loro", pt: "deles, delas (não muda)" }
					]
				},
				{ type: 'h', text: "Quando o artigo cai" },
				{
					type: 'exemplos',
					items: [
						{ it: "E questo computer? È tuo?", pt: "Depois de *essere*, para dizer de quem é (lição 8)" },
						{ it: "Mio padre si chiama Roberto.", pt: "Parente no singular (lição 13)" },
						{ it: "Sua moglie si chiama Fernanda.", pt: "Também com *suo*, *sua* (lição 13)" }
					]
				},
				{ type: 'h', text: "Quando o artigo fica" },
				{
					type: 'exemplos',
					items: [
						{ it: "Sì, è la mia. È piccola.", pt: "Possessivo sozinho, no lugar do substantivo (lição 8)" },
						{ it: "Sono i miei nipoti.", pt: "Parentes no plural (lição 13)" },
						{ it: "La loro casa è piccola.", pt: "Com *loro*, sempre (lição 13)" }
					]
				},
				{
					type: 'dica',
					text: "O possessivo concorda com a coisa, não com o dono: *il suo computer* é o computador dele ou dela; *la sua camera*, o quarto dele ou dela (lição 8)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O presente dos três grupos',
			blocks: [
				{
					type: 'p',
					text: "Com os verbos em *-ire* das lições 9 e 11, você fechou o quadro do presente regular. Veja os quatro modelos lado a lado: *parlare*, *prendere*, *partire* e *finire*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "parlo / prendo / parto / finisco", pt: "eu" },
						{ it: "parli / prendi / parti / finisci", pt: "tu, você" },
						{ it: "parla / prende / parte / finisce", pt: "ele, ela, o senhor" },
						{ it: "parliamo / prendiamo / partiamo / finiamo", pt: "nós" },
						{ it: "parlate / prendete / partite / finite", pt: "vocês" },
						{ it: "parlano / prendono / partono / finiscono", pt: "eles, elas" }
					]
				},
				{
					type: 'p',
					text: "*Io*, *tu* e *noi* terminam igual nos três grupos (*-o, -i, -iamo*). O *-ire* só se separa do *-ere* na forma de *voi* (*partite*). E os verbos como *finire*, *capire* e *preferire* ganham *-isc-* em todas as pessoas, menos *noi* e *voi*."
				},
				{ type: 'h', text: "Os que pedem atenção" },
				{
					type: 'exemplos',
					items: [
						{ it: "sto, stai, sta, stiamo, state, stanno", pt: "*stare*: saúde e “como vai” (lição 9)" },
						{ it: "cerco, cerchi / pago, paghi", pt: "*-care*, *-gare*: o *h* antes de *i* (lição 12)" },
						{ it: "conosco, conosci", pt: "*conoscere*: “sk” e “x” (lição 12)" },
						{ it: "capisco, capisci", pt: "*capire*: o *-isc-*, também com os dois sons (lição 11)" }
					]
				},
				{
					type: 'dica',
					text: "*Sono stanco, ma sto bene.* O cansaço e os lugares ficam com *essere*; a saúde e o “como vai”, com *stare*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'As horas',
			blocks: [
				{
					type: 'p',
					text: "Na lição 11 você aprendeu a perguntar e dizer as horas. Relembre as formas principais:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che ore sono? / Che ora è?", pt: "Que horas são?" },
						{ it: "È l'una. / È mezzogiorno. / È mezzanotte.", pt: "É uma hora. / É meio-dia. / É meia-noite." },
						{ it: "Sono le sette e mezza.", pt: "São sete e meia." },
						{ it: "Sono le otto meno dieci.", pt: "São dez para as oito." }
					]
				},
				{ type: 'h', text: "O relógio de 24 horas" },
				{
					type: 'p',
					text: "Nos horários de trem, de cinema, de loja e de consultório, o italiano usa as 24 horas, como nós fazemos nos horários oficiais. Na escrita, as horas e os minutos se separam com ponto: *18.40*. Na fala, diz-se o número das horas e o dos minutos, sem *mezza* nem *meno*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il **tre**no **par**te alle di**ciot**to e qua**ran**ta.", pt: "O trem sai às 18h40.", pron: "il tré-no pár-te al-le di-tchót-to e kua-rán-ta" },
						{ it: "Il **ne**gozio **chiu**de alle di**cian**nove e **tren**ta.", pt: "A loja fecha às 19h30.", pron: "il ne-gó-tsio kiú-de al-le di-tchán-no-ve e trên-ta" },
						{ it: "Il **film** co**min**cia alle ven**tu**no.", pt: "O filme começa às 21h.", pron: "il film ko-mín-tcha al-le ven-tú-no" }
					]
				},
				{
					type: 'p',
					text: "No dia a dia, entre amigos, volta o relógio de 12 horas, com as partes do dia para tirar a dúvida: *alle otto di mattina*, *alle tre del pomeriggio*, *alle nove di sera*, *alle due di notte*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os sons da semana',
			blocks: [
				{
					type: 'p',
					text: "Duas lições desta semana trataram de pronúncia. Repita estes exemplos em voz alta, prestando atenção no que soa e no que não soa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "tagliatelle, formaggio, arancia", pt: "o *i* que não soa depois de *gl*, *g* e *c* (lição 10)", pron: "ta-lha-tél-le, for-mád-djo, a-rán-tcha" },
						{ it: "farmacia", pt: "mas soa quando é a sílaba forte (lição 10)", pron: "far-ma-tchí-a" },
						{ it: "conosco, conosci", pt: "*sc* “sk” e “x” no mesmo verbo (lição 12)", pron: "ko-nôs-ko, ko-nô-xi" },
						{ it: "la camera", pt: "força na antepenúltima (lição 8)", pron: "la ká-me-ra" },
						{ it: "i miei, i tuoi", pt: "ditongos numa sílaba só (lição 10)", pron: "i miéi, i tuói" }
					]
				},
				{
					type: 'dica',
					text: "Releia em voz alta a redação do Rafael, da lição 13. É um bom texto para treinar: frases curtas, números, nomes de parentes e vários *gli* e *gn*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Estas são as expressões prontas das lições 8 a 13. Leia cada uma em voz alta e tente lembrar quem disse e em que situação."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Entra, entra!", pt: "Entre, entre! (lição 8)", pron: "ên-tra, ên-tra" },
						{ it: "Scusa il ritardo.", pt: "Desculpe o atraso. (lição 8)", pron: "skú-za il ri-tár-do" },
						{ it: "Non è niente.", pt: "Não é nada. (lição 9)", pron: "non é nién-te" },
						{ it: "Che gentile!", pt: "Que gentileza! (lição 9)", pron: "ke djen-tí-le" },
						{ it: "Abbastanza.", pt: "O suficiente; razoavelmente. (lição 9)", pron: "ab-bas-tán-tsa" },
						{ it: "Da bere?", pt: "Para beber? (lição 10)", pron: "da bê-re?" },
						{ it: "Buon appetito!", pt: "Bom apetite! (lição 10)", pron: "buón ap-pe-tí-to" },
						{ it: "Mamma mia!", pt: "Minha nossa! (lição 10)", pron: "mám-ma mí-a" },
						{ it: "Lo so.", pt: "Eu sei. (lição 10)", pron: "lo só" },
						{ it: "Volentieri!", pt: "Com prazer! (lição 11)", pron: "vo-len-tié-ri" },
						{ it: "Poveretto!", pt: "Coitado! (lição 11)", pron: "po-ve-rêt-to" },
						{ it: "È presto. / È tardi!", pt: "É cedo. / Está tarde! (lição 11)", pron: "é prés-to / é tár-di" },
						{ it: "Brava! / Bravo!", pt: "Muito bem! (lições 12 e 13)", pron: "brá-va / brá-vo" },
						{ it: "Tranquilla! / Tranquillo!", pt: "Fique tranquila! / Fique tranquilo! (lição 12)", pron: "tran-kuíl-la / tran-kuíl-lo" },
						{ it: "... e basta.", pt: "... e só, e pronto. (lição 12)", pron: "e bás-ta" },
						{ it: "Ci sentiamo!", pt: "A gente se fala! (lição 12)", pron: "tchi sen-tiá-mo" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima ligação para alguém, termine com *Ci sentiamo!*. E na próxima refeição, comece com *Buon appetito!*, mesmo que esteja comendo sozinho."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il mio computer è in camera, il tuo è in cucina.", pt: "O meu computador está no quarto, o seu está na cozinha." },
				{ it: "I genitori di Matteo partono lunedì mattina.", pt: "Os pais do Matteo vão embora segunda de manhã." },
				{ it: "Mia sorella preferisce studiare la sera.", pt: "A minha irmã prefere estudar à noite." },
				{ it: "Che ore sono? Sono le dieci meno un quarto.", pt: "Que horas são? São quinze para as dez." },
				{ it: "Come sta tuo padre? Sta bene, grazie.", pt: "Como está o seu pai? Está bem, obrigado." },
				{ it: "Conosci i miei amici? Sono di Napoli.", pt: "Você conhece os meus amigos? São de Nápoles." },
				{ it: "La loro casa ha due bagni e una cucina grande.", pt: "A casa deles tem dois banheiros e uma cozinha grande." },
				{ it: "Il treno per Torino parte alle diciotto e quaranta.", pt: "O trem para Turim sai às 18h40." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Os meus irmãos se chamam Bruno e Larissa.", parts: ["I miei fratelli si ", null, " Bruno e Larissa."], answers: ["chiamano"] },
				{ pt: "Você entende? Sim, entendo tudo.", parts: ["Capisci? Sì, ", null, " tutto."], answers: ["capisco"] },
				{ pt: "Como você está? Eu estou bem, obrigado.", parts: ["Come stai? Io ", null, " bene, grazie."], answers: ["sto"] },
				{ pt: "A casa deles fica no centro, e a nossa também.", parts: ["La loro casa è in centro, e anche la ", null, "."], answers: ["nostra"] },
				{ pt: "É meia-noite: está tarde!", parts: ["È ", null, ": è tardi!"], answers: ["mezzanotte"] }
			]
		}
	]
};

export const unidade: Unit = { no: 2, title: 'A casa em Bolonha', lessons: [8, 9, 10, 11, 12, 13, 14] };

export const licoes: Lesson[] = [licao8, licao9, licao10, licao11, licao12, licao13, licao14];
