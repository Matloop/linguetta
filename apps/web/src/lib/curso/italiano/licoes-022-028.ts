import type { Lesson, Unit } from '../types.ts';

// Lições 22–28: Rafael e Chiara terminam a viagem a Nápoles. Café da manhã no hotel, excursão
// pela costa amalfitana com a guia Rosaria, pizza e ópera no San Carlo, presentes para o Matteo e
// a volta de trem para Bolonha, onde conhecem a senhora Franca e o Matteo os espera na estação.
// Ver docs/agents/curso-assimil-mapa.md.

const licao22: Lesson = {
	no: 22,
	kind: 'licao',
	title: 'La colazione in albergo',
	titlePt: 'O café da manhã no hotel',
	lines: [
		{ it: "Buongiorno! Caffè, cappuccino, tè?", pt: "Bom dia! Café, cappuccino, chá?" },
		{
			it: "Per me un cappuccino. Di mattina va bene, vero, Rafael?",
			pt: "Para mim um cappuccino. De manhã pode, né, Rafael?",
			lit: "Para mim um cappuccino. De manhã vai bem, verdade, Rafael?",
			note: "Lembra da lição 5? Cappuccino, só de manhã. *Di mattina* = de manhã, pela manhã."
		},
		{
			it: "Anche per me, grazie. Ho tanta fame e tanto sonno!",
			pt: "Para mim também, obrigado. Estou com muita fome e muito sono!",
			lit: "Também para mim, obrigado. Tenho tanta fome e tanto sono!",
			note: "Fome e sono, em italiano, se *têm*: *avere fame*, *avere sonno*, como *avere sete* (ter sede). Repare que *tanto* acompanha o substantivo e concorda com ele: *tanta fame* (*la fame* é feminino), *tanto sonno* (*il sonno*, masculino)."
		},
		{
			it: "Il buffet è lì, in terrazza. Potete prendere quello che volete.",
			pt: "O bufê fica ali, no terraço. Vocês podem pegar o que quiserem.",
			lit: "O bufê é lá, em terraço. Podeis pegar aquilo que quereis.",
			note: "*Potete* = vocês podem, do verbo *potere*, que é irregular. Depois dele vem o infinitivo, como em português: *potete prendere*. *Volete* (vocês querem) é de *volere*, que você vê com calma na lição 24."
		},
		{
			it: "Guarda quanta roba! Cornetti, torte, frutta, formaggi...",
			pt: "Olha quanta coisa! Croissants, bolos, frutas, queijos...",
			note: "*Quanta* concorda com *roba*, que é feminino. *Roba* é uma palavra muito usada na fala: “coisa”, “coisas”, um monte de coisas. *Torta* é bolo, torta doce."
		},
		{
			it: "Posso prendere un po' di tutto? Anche prosciutto e melone?",
			pt: "Posso pegar um pouco de tudo? Até presunto com melão?",
			note: "*Posso* = (eu) posso. *Prosciutto e melone* é um clássico do verão italiano: presunto cru com melão."
		},
		{
			it: "Certo. Ma quanti cornetti prendi? Sono già tre!",
			pt: "Claro. Mas quantos croissants você vai pegar? Já são três!",
			note: "*Quanti* concorda com *cornetti*: masculino plural."
		},
		{
			it: "Sono piccoli! E poi stamattina camminiamo molto, no?",
			pt: "Eles são pequenos! E depois hoje de manhã a gente vai andar muito, não?",
			lit: "São pequenos! E depois esta manhã caminhamos muito, não?",
			note: "Aqui *molto* vem depois do verbo e não acompanha nenhum substantivo: é advérbio e nunca muda. Compare *molti cornetti* (muitos croissants) e *camminiamo molto* (caminhamos muito). *Stamattina* = *questa mattina*, como *stasera* (lição 2)."
		},
		{
			it: "Sì, ma tu mangi sempre troppo e dormi troppo poco.",
			pt: "Sim, mas você sempre come demais e dorme pouco demais.",
			note: "*Troppo* e *poco* sem substantivo: advérbios, invariáveis. *Troppo poco* = pouco demais."
		},
		{
			it: "Hai ragione: qui dormo poche ore. Il mare fa troppo rumore!",
			pt: "Você tem razão: aqui eu durmo poucas horas. O mar faz barulho demais!",
			note: "*Avere ragione* = ter razão. Agora *poco* e *troppo* acompanham substantivos e concordam: *poche ore* (feminino plural, com *h* para manter o som de “k”), *troppo rumore* (masculino singular)."
		},
		{
			it: "Ecco i cappuccini. Volete anche una spremuta?",
			pt: "Aqui estão os cappuccinos. Querem também um suco de laranja?",
			note: "*Cappuccino* faz o plural normalmente: *cappuccini*. *La spremuta* é o suco espremido na hora, quase sempre de laranja."
		},
		{
			it: "No, grazie, va bene così. Senta, la gita in costiera di domani parte da qui?",
			pt: "Não, obrigada, está bom assim. Escute, o passeio pela costa amanhã sai daqui?",
			lit: "Não, obrigada, vai bem assim. Escute, a excursão em costa de amanhã parte de aqui?",
			note: "*Senta* (de *sentire*, ouvir) é a forma do *Lei*, como *scusi* e *guardi*: serve para chamar a atenção de um garçom ou de um funcionário. *La costiera* = a costa; *la costiera amalfitana* é a costa de Amalfi, ao sul de Nápoles."
		},
		{
			it: "Sì, il pullman parte alle otto e mezza, qui davanti.",
			pt: "Sim, o ônibus sai às oito e meia, aqui na frente.",
			note: "*Il pullman* é o ônibus de viagem ou de turismo; o da cidade é *l'autobus*. Como toda palavra estrangeira, *pullman* não muda no plural."
		},
		{
			it: "Alle otto e mezza? Allora domani niente colazione...",
			pt: "Às oito e meia? Então amanhã nada de café da manhã...",
			note: "*La colazione* = o café da manhã. *Fare colazione* = tomar o café da manhã."
		},
		{
			it: "Ma no! La sala apre alle sette. Puoi mangiare tutti i cornetti che vuoi!",
			pt: "Que nada! O salão abre às sete. Você pode comer todos os croissants que quiser!",
			lit: "Mas não! A sala abre às sete. Podes comer todos os cornetti que queres!",
			note: "*Ma no!* = que nada!, imagina! *Puoi* (você pode) e *vuoi* (você quer): *potere* e *volere* com *tu*."
		},
		{
			it: "Ci sono molti turisti, ma c'è poca gente sulla spiaggia.",
			pt: "Tem muitos turistas, mas tem pouca gente na praia.",
			sep: true,
			note: "*Molti* concorda com *turisti* (masculino plural) e *poca* com *gente*. Diferente do português, *la gente* é sempre singular: *la gente è simpatica*."
		},
		{
			it: "Questi cornetti sono molto buoni, ma costano troppo.",
			pt: "Estes croissants são muito bons, mas custam caro demais.",
			lit: "Estes croissants são muito bons, mas custam demais.",
			note: "*Molto* antes de adjetivo e *troppo* depois do verbo: advérbios, não mudam."
		},
		{ it: "Possiamo pagare con la carta? Sì, potete.", pt: "Podemos pagar com cartão? Sim, podem." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Molto, tanto, poco, troppo, quanto',
			blocks: [
				{
					type: 'p',
					text: "Estas cinco palavras dizem quantidade: *molto* (muito), *tanto* (tanto, muito), *poco* (pouco), *troppo* (demais) e *quanto* (quanto). Cada uma pode ter dois papéis, e a boa notícia é que o português faz exatamente a mesma coisa."
				},
				{ type: 'h', text: "Com substantivo: concordam" },
				{
					type: 'p',
					text: "Quando acompanham um substantivo, elas se comportam como adjetivos e têm quatro formas: *molto, molta, molti, molte*. Igual ao nosso “muito, muita, muitos, muitas”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ho **tan**ta **fa**me.", pt: "Estou com muita fome. (*la fame*, feminino)" },
						{ it: "**Quan**ti cor**net**ti prendi?", pt: "Quantos croissants você vai pegar?" },
						{ it: "Ci sono **mol**ti tu**ri**sti.", pt: "Tem muitos turistas." },
						{ it: "**Dor**mo **po**che **o**re.", pt: "Durmo poucas horas.", pron: "dór-mo pó-ke ô-re" }
					]
				},
				{ type: 'h', text: "Sem substantivo: não mudam" },
				{
					type: 'p',
					text: "Quando modificam um verbo, um adjetivo ou outro advérbio, são advérbios e ficam sempre na forma masculina singular, em *-o*. Também como em português: dizemos “elas são muito bonitas”, e não “muitas bonitas”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Cammi**nia**mo **mol**to.", pt: "Caminhamos muito." },
						{ it: "Sono **mol**to **buo**ni.", pt: "São muito bons." },
						{ it: "Dormi **trop**po **po**co.", pt: "Você dorme pouco demais." },
						{ it: "**Quan**to **co**sta?", pt: "Quanto custa?" }
					]
				},
				{
					type: 'dica',
					text: "O teste é simples: se em português a palavra mudaria (“muitas horas”), em italiano também muda (*molte ore*). Se em português ficaria “muito” (“muito bons”), em italiano fica *molto*."
				},
				{
					type: 'p',
					text: "Um cuidado com *troppo*: ele quer dizer “demais”, nunca só “muito”. *È troppo caro* = é caro demais (não vou comprar). *È molto caro* = é muito caro (mas talvez eu compre)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O verbo potere e a colazione italiana',
			blocks: [
				{
					type: 'p',
					text: "*Potere* (poder) é irregular, mas as formas são curtas e você vai usá-las o tempo todo. Depois dele, o verbo vai no infinitivo, como em português."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **pos**so", pt: "eu posso", pron: "pós-so" },
						{ it: "(tu) puoi", pt: "você pode", pron: "puói" },
						{ it: "(lui, lei, Lei) può", pt: "ele, ela, o senhor pode", pron: "puó" },
						{ it: "(noi) pos**sia**mo", pt: "nós podemos", pron: "pos-siá-mo" },
						{ it: "(voi) po**te**te", pt: "vocês podem", pron: "po-tê-te" },
						{ it: "(loro) **pos**sono", pt: "eles podem", pron: "pós-so-no" }
					]
				},
				{
					type: 'p',
					text: "*Potere* serve para pedir licença (*Posso prendere un po' di tutto?*), para dizer que algo é possível (*Puoi mangiare tutti i cornetti*) e para pedir um favor com educação: *Può ripetere, per favore?* (o senhor pode repetir, por favor?), uma frase que vale ouro nas primeiras semanas."
				},
				{ type: 'h', text: "O café da manhã italiano" },
				{
					type: 'p',
					text: "Os bufês fartos, com presunto, queijo e ovos, são coisa de hotel, feitos para turistas. Em casa, o italiano toma um café da manhã rápido e doce: café ou leite com café, biscoitos, torradas com geleia. Fora de casa, o clássico é o que você viu na lição 5: cappuccino e cornetto no balcão do bar, em pé, em cinco minutos."
				},
				{
					type: 'dica',
					text: "Em Nápoles, o café é sagrado e sai forte e muito quente. E há um costume bonito, o *caffè sospeso*: quem pode paga dois cafés e deixa um “suspenso”, para alguém que não pode pagar."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Quanti caffè prendi al giorno?", pt: "Quantos cafés você toma por dia?" },
				{ it: "Chiara lavora molto e dorme poco.", pt: "A Chiara trabalha muito e dorme pouco." },
				{ it: "Oggi ci sono troppe persone in piazza.", pt: "Hoje tem gente demais na praça." },
				{ it: "Possiamo prendere un tè in terrazza?", pt: "Podemos tomar um chá no terraço?" },
				{ it: "Rafael non può mangiare tutti i cornetti!", pt: "O Rafael não pode comer todos os croissants!" },
				{ it: "Le torte sono molto buone, ma troppo dolci.", pt: "Os bolos são muito bons, mas doces demais." },
				{ it: "Potete venire stasera?", pt: "Vocês podem vir hoje à noite?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Estou com tanta fome!", parts: ["Ho ", null, " fame!"], answers: ["tanta"] },
				{ pt: "E quantos croissants você vai pegar?", parts: ["E ", null, " cornetti prendi?"], answers: ["quanti"] },
				{ pt: "Você dorme pouco demais.", parts: ["Dormi troppo ", null, "."], answers: ["poco"] },
				{ pt: "Hoje tem pouca gente na praia.", parts: ["Oggi c'è ", null, " gente sulla spiaggia."], answers: ["poca"] },
				{ pt: "Desculpe, podemos pagar com cartão?", parts: ["Scusi, ", null, " pagare con la carta?"], answers: ["possiamo"] }
			]
		}
	]
};

const licao23: Lesson = {
	no: 23,
	kind: 'licao',
	title: 'In costiera',
	titlePt: 'Na costa amalfitana',
	lines: [
		{
			it: "Buongiorno a tutti! Sono Rosaria e oggi sono la vostra guida.",
			pt: "Bom dia a todos! Eu sou a Rosaria e hoje sou a guia de vocês.",
			lit: "Bom dia a todos! Sou Rosaria e hoje sou a vossa guia.",
			note: "*Vostro, vostra* = de vocês, o possessivo de *voi*. *La guida* é feminino, seja o guia homem ou mulher."
		},
		{
			it: "Prima tappa: Positano. Poi Amalfi e, nel pomeriggio, Ravello.",
			pt: "Primeira parada: Positano. Depois Amalfi e, à tarde, Ravello.",
			note: "*La tappa* = a etapa, cada parada de um percurso. *Nel pomeriggio* = à tarde, durante a tarde."
		},
		{
			it: "Che strada! Quante curve!",
			pt: "Que estrada! Quantas curvas!",
			note: "*Quante* concorda com *curve*, feminino plural, como você viu na lição 22."
		},
		{
			it: "Tranquillo, l'autista è bravissimo. E guarda che colori!",
			pt: "Calma, o motorista é ótimo. E olha que cores!",
			lit: "Tranquilo, o motorista é bravíssimo. E olha que cores!",
			note: "*Tranquillo!* = calma!, fica tranquilo. Atenção ao falso amigo: *bravo* quer dizer competente, bom no que faz, e nunca “zangado”. *Bravissimo* = ótimo, muito bom."
		},
		{
			it: "Siamo a Positano! Avete un'ora libera, ma dovete essere qui alle dieci e mezza.",
			pt: "Chegamos a Positano! Vocês têm uma hora livre, mas têm que estar aqui às dez e meia.",
			lit: "Estamos a Positano! Tendes uma hora livre, mas deveis ser aqui às dez e meia.",
			note: "*Dovete* = vocês devem, têm que, do verbo *dovere*. Ele é irregular como *potere*, e também pede o infinitivo depois: *dovete essere*."
		},
		{
			it: "E non dimenticate: il pullman non può aspettare!",
			pt: "E não esqueçam: o ônibus não pode esperar!",
			note: "Para dar uma ordem negativa a várias pessoas, basta pôr *non* antes da forma de *voi*: *non dimenticate*, não esqueçam. É o imperativo da lição 18 com um *non* na frente."
		},
		{
			it: "Un'ora sola? Ma c'è tanto da vedere!",
			pt: "Uma hora só? Mas tem tanta coisa para ver!",
			lit: "Uma hora só? Mas há tanto de ver!",
			note: "*Da* + infinitivo indica algo a ser feito: *tanto da vedere* (tanto para ver), *qualcosa da bere* (algo para beber), *niente da fare* (nada para fazer). Onde nós dizemos “para”, o italiano usa *da*."
		},
		{
			it: "Allora dobbiamo fare presto. Dai, andiamo giù alla spiaggia!",
			pt: "Então temos que ser rápidos. Vamos, vamos descer até a praia!",
			lit: "Então devemos fazer cedo. Vai, vamos abaixo à praia!",
			note: "*Fare presto* = andar logo, apressar-se. *Dobbiamo* = temos que. *Giù* = para baixo, lá embaixo; o contrário é *su*."
		},
		{
			it: "Prego, ragazzi, guardate! Qui è tutto fatto a mano.",
			pt: "Fiquem à vontade, pessoal, olhem! Aqui é tudo feito à mão.",
			note: "*Prego* também é o convite do vendedor: “fiquem à vontade”. A cerâmica pintada à mão, com limões e cores fortes, é o artesanato típico da costa."
		},
		{
			it: "Che belli questi piatti! Cerco qualcosa da portare a mia madre.",
			pt: "Que lindos estes pratos! Estou procurando alguma coisa para levar para a minha mãe.",
			note: "*Qualcosa da portare*: de novo *da* + infinitivo. *Portare* = levar, trazer. E *mia madre*, sem artigo, como na lição 13."
		},
		{
			it: "Questa tazza con i limoni? È piccola, leggera e costa poco.",
			pt: "Esta caneca com os limões? É pequena, leve e custa pouco.",
			note: "*La tazza* = xícara, caneca. *Costa poco*: *poco* depois do verbo, advérbio, como na lição 22."
		},
		{ it: "Perfetta! Mia madre adora i limoni.", pt: "Perfeita! Minha mãe adora limão." },
		{
			it: "Rafael, sono le dieci e venti! Dobbiamo correre!",
			pt: "Rafael, são dez e vinte! Temos que correr!"
		},
		{
			it: "Ci siamo tutti? Bene. Ad Amalfi potete assaggiare il limoncello.",
			pt: "Estão todos aqui? Muito bem. Em Amalfi vocês podem provar o limoncello.",
			lit: "Estamos todos? Bem. A Amalfi podeis provar o limoncello.",
			note: "*Ci siamo tutti?* é a pergunta de todo guia antes de partir. *Ad Amalfi*: diante de vogal, sobretudo de outro *a*, a preposição *a* vira *ad* (lição 20). *Assaggiare* = provar, experimentar comida ou bebida."
		},
		{
			it: "Un liquore alle undici di mattina? Non c'è niente da mangiare prima?",
			pt: "Um licor às onze da manhã? Não tem nada para comer antes?",
			note: "Com *niente* (nada) depois do verbo, o italiano põe *non* antes, como nós: *non c'è niente*. O *limoncello* é o licor de limão da costa, servido gelado."
		},
		{
			it: "Tranquilli, c'è anche la granita al limone!",
			pt: "Calma, tem também a raspadinha de limão!",
			note: "*Tranquilli*: plural, porque a guia fala com o grupo. *La granita* é gelo raspado com suco de fruta e açúcar, especialidade do sul da Itália."
		},
		{
			it: "Dovete prendere il treno delle sei? Allora fate presto!",
			pt: "Vocês têm que pegar o trem das seis? Então andem logo!",
			sep: true,
			note: "*Fate* é a forma de *voi* de *fare*, e serve também de imperativo: *fate presto!*"
		},
		{ it: "Ragazzi, non dimenticate i passaporti!", pt: "Pessoal, não esqueçam os passaportes!" },
		{
			it: "C'è qualcosa da bere in frigo? No, non c'è niente.",
			pt: "Tem alguma coisa para beber na geladeira? Não, não tem nada.",
			note: "*Il frigo* é a forma curta de *frigorifero*, geladeira."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Dovere e o imperativo negativo',
			blocks: [
				{
					type: 'p',
					text: "Ontem foi *potere*; hoje é *dovere*, que corresponde ao nosso “dever” e, muito mais vezes, ao “ter que”. Também é irregular e também pede o infinitivo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **de**vo", pt: "eu devo, tenho que", pron: "dê-vo" },
						{ it: "(tu) **de**vi", pt: "você deve", pron: "dê-vi" },
						{ it: "(lui, lei, Lei) **de**ve", pt: "ele, ela, o senhor deve", pron: "dê-ve" },
						{ it: "(noi) dob**bia**mo", pt: "nós devemos", pron: "dob-biá-mo" },
						{ it: "(voi) do**ve**te", pt: "vocês devem", pron: "do-vê-te" },
						{ it: "(loro) **de**vono", pt: "eles devem", pron: "dê-vo-no" }
					]
				},
				{
					type: 'p',
					text: "Repare que o radical muda: *dev-* em quase todas as formas, *dobb-* e *dov-* com *noi* e *voi*. Onde no Brasil dizemos “tenho que ir”, o italiano diz *devo andare*; *avere che* não existe. E, como em português, *dovere* também serve para dinheiro: *Quanto devo?* (quanto devo?, quanto é?)."
				},
				{ type: 'h', text: "Não façam isso: non + voi" },
				{
					type: 'p',
					text: "Na lição 18 você viu o imperativo de *voi*, que tem a mesma forma do presente: *guardate!*, *prendete!*, *aprite!*. Para a ordem negativa, é só pôr *non* na frente."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non dimen**ti**cate!", pt: "Não esqueçam!" },
						{ it: "Non cor**re**te!", pt: "Não corram!" },
						{ it: "Non a**pri**te la **por**ta!", pt: "Não abram a porta!" }
					]
				},
				{
					type: 'dica',
					text: "Com *tu*, a ordem negativa funciona de outro jeito. Fica para mais adiante; por enquanto, use o plural com toda a segurança."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Da + infinitivo e a costa amalfitana',
			blocks: [
				{
					type: 'p',
					text: "Quando queremos dizer que uma coisa é “para” ser feita, o italiano usa *da* + infinitivo. É uma construção curtinha e muito frequente."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "C'è **tan**to da ve**de**re.", pt: "Tem muita coisa para ver." },
						{ it: "**Cer**co qual**co**sa da por**ta**re.", pt: "Procuro alguma coisa para levar." },
						{ it: "Non c'è **nien**te da man**gia**re?", pt: "Não tem nada para comer?" },
						{ it: "Ho **mol**to da **fa**re.", pt: "Tenho muito o que fazer." }
					]
				},
				{
					type: 'p',
					text: "*Qualcosa* (alguma coisa) e *niente* (nada) são as companhias mais comuns dessa construção. Lembre que *niente* depois do verbo pede *non* antes: *non ho niente da fare*."
				},
				{ type: 'h', text: "A costiera amalfitana" },
				{
					type: 'p',
					text: "Ao sul de Nápoles, depois de Sorrento, a estrada corre pendurada nos penhascos sobre o mar, com uma curva atrás da outra. Positano desce o morro em casinhas coloridas até a praia; Amalfi, que já foi uma república marítima poderosa, tem uma catedral enorme na praça; Ravello, lá no alto, tem jardins com vista para o golfo. Tudo isso cabe num dia de excursão, desde que ninguém se atrase e todo mundo esteja no *pullman* na hora."
				},
				{
					type: 'p',
					text: "Os limões da costa são enormes e perfumados. Viram limoncello, granita, doces e o desenho preferido da cerâmica local, a de Vietri sul Mare, que você encontra em pratos, canecas e azulejos em todas as lojinhas."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Devo comprare qualcosa da portare a Matteo.", pt: "Tenho que comprar alguma coisa para levar para o Matteo." },
				{ it: "Qui non c'è niente da vedere.", pt: "Aqui não tem nada para ver." },
				{ it: "Ragazzi, non dimenticate le giacche!", pt: "Pessoal, não esqueçam os casacos!" },
				{ it: "Dobbiamo essere al pullman alle dieci.", pt: "Temos que estar no ônibus às dez." },
				{ it: "Il treno parte: dovete fare presto!", pt: "O trem está saindo: vocês têm que andar logo!" },
				{ it: "Chiara deve lavorare sabato.", pt: "A Chiara tem que trabalhar no sábado." },
				{ it: "Ad Amalfi assaggiamo la granita al limone.", pt: "Em Amalfi provamos a raspadinha de limão." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Pessoal, vocês têm que estar aqui às dez.", parts: ["Ragazzi, ", null, " essere qui alle dieci."], answers: ["dovete"] },
				{ pt: "Não esqueçam os passaportes!", parts: ["Non ", null, " i passaporti!"], answers: ["dimenticate"] },
				{ pt: "Tem tanta coisa para ver!", parts: ["C'è tanto ", null, " vedere!"], answers: ["da"] },
				{ pt: "Não tem nada para comer?", parts: ["Non c'è ", null, " da mangiare?"], answers: ["niente"] },
				{ pt: "Temos que andar logo.", parts: ["Dobbiamo fare ", null, "."], answers: ["presto"] }
			]
		}
	]
};

const licao24: Lesson = {
	no: 24,
	kind: 'licao',
	title: 'Che facciamo stasera?',
	titlePt: 'O que a gente faz hoje à noite?',
	lines: [
		{
			it: "Allora, stasera che cosa vuoi fare?",
			pt: "E aí, o que você quer fazer hoje à noite?",
			lit: "Então, esta noite que coisa queres fazer?",
			note: "*Vuoi* = você quer, de *volere*, o terceiro verbo irregular da semana, depois de *potere* e *dovere*. Como eles, pede o infinitivo: *vuoi fare*."
		},
		{
			it: "Voglio mangiare una vera pizza napoletana!",
			pt: "Quero comer uma pizza napolitana de verdade!",
			lit: "Quero comer uma verdadeira pizza napolitana!",
			note: "*Voglio* tem o som de “lh” da lição 0: “vó-lho”. *Vero* antes do substantivo = verdadeiro, de verdade."
		},
		{
			it: "Ottima idea. C'è una pizzeria famosa vicino al porto, ma c'è sempre la fila.",
			pt: "Ótima ideia. Tem uma pizzaria famosa perto do porto, mas sempre tem fila.",
			note: "*Vicino a* = perto de; *vicino al porto* = *a* + *il*. *La fila* = a fila."
		},
		{
			it: "E dopo? Andiamo a ballare?",
			pt: "E depois? Vamos dançar?",
			lit: "E depois? Vamos a dançar?",
			note: "*Andare a* + infinitivo = ir fazer alguma coisa: *andiamo a ballare*, vamos dançar. Repare no *a*, que o português não usa."
		},
		{
			it: "Piuttosto andiamo a teatro! Al San Carlo danno la Traviata.",
			pt: "Melhor irmos ao teatro! O San Carlo está apresentando La Traviata.",
			lit: "Antes vamos a teatro! No San Carlo dão a Traviata.",
			note: "*Piuttosto* = em vez disso, de preferência, antes. *Danno* é de *dare* (dar): falando de espetáculo, *danno* quer dizer “está em cartaz”, “vão apresentar”. O San Carlo é o teatro de ópera de Nápoles."
		},
		{
			it: "L'opera? Ma io non capisco niente...",
			pt: "Ópera? Mas eu não entendo nada...",
			note: "*Capisco*, de *capire*, com o *-isc-* que você viu na lição 11."
		},
		{
			it: "Non fa niente: la musica è bellissima. E ci sono i sottotitoli.",
			pt: "Não tem problema: a música é lindíssima. E tem legenda.",
			lit: "Não faz nada: a música é belíssima. E há as legendas.",
			note: "*Non fa niente* = não tem importância, não faz mal. *I sottotitoli* = as legendas; muitos teatros mostram o texto num painel acima do palco."
		},
		{
			it: "Va bene, vengo a vedere la Traviata. Ma stasera no: stasera pizza!",
			pt: "Está bem, eu vou ver La Traviata. Mas hoje não: hoje é pizza!",
			lit: "Vai bem, venho a ver a Traviata. Mas esta noite não: esta noite pizza!",
			note: "*Venire a* + infinitivo funciona como *andare a*. O italiano usa *venire* (vir) quando a gente vai junto com quem fala, ou para onde ele está: *vengo con te* = vou com você. Em português dizemos “vou”; em italiano, *vengo*."
		},
		{
			it: "D'accordo. Prenoto due biglietti per domani sera.",
			pt: "Combinado. Vou reservar dois ingressos para amanhã à noite.",
			lit: "De acordo. Reservo dois bilhetes para amanhã à noite.",
			note: "*D'accordo* = combinado, de acordo. *Il biglietto* serve para ingresso, passagem e bilhete."
		},
		{
			it: "E dopo la pizza, vuoi venire a prendere un gelato?",
			pt: "E depois da pizza, quer ir tomar um sorvete?",
			lit: "E depois a pizza, queres vir a pegar um sorvete?",
			note: "Mais um *venire*: o Rafael convida a Chiara para ir com ele."
		},
		{
			it: "Sì, sul lungomare! Lì c'è una gelateria buonissima.",
			pt: "Sim, na orla! Lá tem uma sorveteria ótima.",
			lit: "Sim, sobre o lungomare! Lá há uma sorveteria boníssima.",
			note: "*Il lungomare* (de *lungo*, ao longo de, e *mare*) é a avenida à beira-mar, o calçadão. O de Nápoles tem vista para o Vesúvio."
		},
		{
			it: "Allora, ragazzi, che pizze volete?",
			pt: "Então, pessoal, que pizzas vocês querem?",
			note: "*Volete* = vocês querem."
		},
		{ it: "Una margherita, per favore.", pt: "Uma margherita, por favor." },
		{
			it: "E per me una marinara: pomodoro, aglio e origano.",
			pt: "E para mim uma marinara: tomate, alho e orégano.",
			note: "A *marinara* não leva peixe nem mozzarella: é a pizza mais simples e mais antiga de Nápoles. A *margherita* tem tomate, mozzarella e manjericão."
		},
		{
			it: "Volete anche qualcosa da bere?",
			pt: "Querem também alguma coisa para beber?",
			note: "*Qualcosa da bere*, como na lição 23."
		},
		{
			it: "Due birre, grazie. E una pizza fritta da dividere: Rafael vuole assaggiare tutto!",
			pt: "Duas cervejas, obrigada. E uma pizza frita para dividir: o Rafael quer provar tudo!",
			note: "*Vuole* = ele quer. *La pizza fritta*, frita e recheada, é outra especialidade napolitana."
		},
		{
			it: "Vogliamo andare a vedere il Vesuvio. Venite anche voi?",
			pt: "Queremos ir ver o Vesúvio. Vocês vêm também?",
			sep: true,
			note: "*Andare* para ir; *venire* para convidar alguém a ir junto."
		},
		{
			it: "Stasera non voglio uscire. Piuttosto guardiamo un film a casa.",
			pt: "Hoje à noite não quero sair. Melhor a gente ver um filme em casa.",
			lit: "Esta noite não quero sair. Antes olhamos um filme a casa.",
			note: "*Uscire* = sair. É irregular (*esco, esci, esce*...); a lição 28 junta tudo."
		},
		{ it: "I ragazzi vogliono andare a ballare.", pt: "Os rapazes querem ir dançar." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Volere, potere, dovere',
			blocks: [
				{
					type: 'p',
					text: "Com *volere* (querer), você completa o trio de verbos que mais aparecem antes de um infinitivo. Veja as formas de *volere*:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **vo**glio", pt: "eu quero", pron: "vó-lho" },
						{ it: "(tu) vuoi", pt: "você quer", pron: "vuói" },
						{ it: "(lui, lei, Lei) **vuo**le", pt: "ele, ela, o senhor quer", pron: "vuó-le" },
						{ it: "(noi) vo**glia**mo", pt: "nós queremos", pron: "vo-lhá-mo" },
						{ it: "(voi) vo**le**te", pt: "vocês querem", pron: "vo-lê-te" },
						{ it: "(loro) **vo**gliono", pt: "eles querem", pron: "vó-lho-no" }
					]
				},
				{
					type: 'p',
					text: "Os três juntos: *voglio, posso, devo*; *vuoi, puoi, devi*; *vuole, può, deve*; *vogliamo, possiamo, dobbiamo*; *volete, potete, dovete*; *vogliono, possono, devono*. Repare como *vuoi* e *puoi*, *vuole* e *può* se parecem. Depois de qualquer um deles, o verbo seguinte vai no infinitivo: *voglio mangiare*, *posso pagare*, *devo partire*."
				},
				{ type: 'h', text: "Querer com educação" },
				{
					type: 'p',
					text: "*Voglio* é direto, às vezes direto demais. Num balcão, numa loja ou num restaurante, o italiano prefere *vorrei* (eu queria, eu gostaria): *Vorrei un caffè, per favore*. É uma forma de outro tempo verbal, que você vai estudar mais adiante; por enquanto, guarde *vorrei* como a forma gentil de pedir."
				},
				{
					type: 'dica',
					text: "Para pedir coisas, você agora tem três jeitos, do mais simples ao mais educado: *Prendo un caffè* (lição 5), *Per me un caffè* e *Vorrei un caffè*. Todos funcionam."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Andare a, venire a; a pizza de Nápoles',
			blocks: [
				{
					type: 'p',
					text: "Para dizer que se vai a algum lugar fazer alguma coisa, o italiano usa *andare a* + infinitivo. O *a* é obrigatório, mesmo que o português não tenha nada ali."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Andi**a**mo a bal**la**re?", pt: "Vamos dançar?" },
						{ it: "**Va**do a pren**de**re il **pa**ne.", pt: "Vou buscar o pão." },
						{ it: "**Ven**go a ve**de**re la Tra**via**ta.", pt: "Eu vou (com você) ver La Traviata." },
						{ it: "Vuoi ve**ni**re a pren**de**re un ge**la**to?", pt: "Quer ir tomar um sorvete (comigo)?" }
					]
				},
				{
					type: 'p',
					text: "E aqui está uma diferença importante entre *andare* e *venire*. O italiano usa *venire* para o movimento em direção a quem fala ou a quem escuta, e também para ir junto com alguém. Quando um amigo chama “vem jantar!”, a resposta é *Vengo!*, que em português seria “já vou!”. Se você responder *Vado!*, o italiano entende que você vai embora para outro lugar."
				},
				{ type: 'h', text: "Piuttosto" },
				{
					type: 'p',
					text: "*Piuttosto* serve para propor uma alternativa: *Piuttosto andiamo a teatro* = melhor irmos ao teatro, em vez disso. Também aparece em comparações: *piuttosto caro* = bem caro, um tanto caro."
				},
				{ type: 'h', text: "A pizza napolitana" },
				{
					type: 'p',
					text: "Em Nápoles, a pizza tem massa macia e borda alta (*il cornicione*), assa em forno a lenha em um minuto e meio e se come com garfo e faca, ou dobrada ao meio, *a portafoglio* (como uma carteira), quando comprada na rua. Cada um pede a sua inteira; dividir uma pizza não é costume. E a arte do *pizzaiolo* napolitano é patrimônio da humanidade da Unesco."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vuoi venire a mangiare una pizza?", pt: "Quer ir comer uma pizza?" },
				{ it: "Vogliamo andare a vedere l'opera.", pt: "Queremos ir ver a ópera." },
				{ it: "Chiara non vuole ballare, vuole dormire.", pt: "A Chiara não quer dançar, quer dormir." },
				{ it: "Volete qualcosa da bere?", pt: "Vocês querem alguma coisa para beber?" },
				{ it: "Non andiamo al cinema: piuttosto facciamo una passeggiata sul lungomare.", pt: "Não vamos ao cinema: melhor darmos uma volta pela orla." },
				{ it: "Andate a teatro? Vengo anch'io!", pt: "Vocês vão ao teatro? Eu vou também!" },
				{ it: "Vorrei due biglietti per domani, per favore.", pt: "Eu queria dois ingressos para amanhã, por favor." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu quero comer uma pizza.", parts: ["Io ", null, " mangiare una pizza."], answers: ["voglio"] },
				{ pt: "Vamos dançar?", parts: ["Andiamo ", null, " ballare?"], answers: ["a"] },
				{ pt: "Pessoal, vocês querem alguma coisa para beber?", parts: ["Ragazzi, ", null, " qualcosa da bere?"], answers: ["volete"] },
				{ pt: "O Rafael quer provar tudo.", parts: ["Rafael ", null, " assaggiare tutto."], answers: ["vuole"] },
				{ pt: "Espera, eu vou com você!", parts: ["Aspetta, ", null, " con te!"], answers: ["vengo"] }
			]
		}
	]
};

const licao25: Lesson = {
	no: 25,
	kind: 'licao',
	title: "All'opera",
	titlePt: 'Na ópera',
	lines: [
		{
			it: "Che meraviglia! Tutto rosso e oro!",
			pt: "Que maravilha! Tudo vermelho e dourado!",
			lit: "Que maravilha! Tudo vermelho e ouro!"
		},
		{
			it: "Il San Carlo ha quasi trecento anni, sai?",
			pt: "O San Carlo tem quase trezentos anos, sabia?",
			lit: "O San Carlo tem quase trezentos anos, sabes?",
			note: "*Sai?* = sabia?, sabe?, do verbo *sapere* (saber): *so, sai, sa*... A lição 28 mostra todas as formas."
		},
		{
			it: "Buonasera. I biglietti, prego... Palco dodici, secondo ordine.",
			pt: "Boa noite. Os ingressos, por favor... Camarote doze, no segundo nível.",
			note: "Falso amigo: *il palco* é o camarote; o palco do teatro é *il palcoscenico*. Quem confere os ingressos e leva você ao lugar é *la maschera*, o lanterninha. Os camarotes ficam em níveis empilhados, os *ordini*: *secondo ordine* é o segundo nível."
		},
		{
			it: "Un palco! Siamo come due nobili dell'Ottocento.",
			pt: "Um camarote! Parecemos dois nobres do século dezenove.",
			lit: "Um camarote! Somos como dois nobres do Oitocentos.",
			note: "*L'Ottocento* (os anos 1800) = o século XIX. Do mesmo jeito, *il Novecento* é o século XX e *il Settecento*, o XVIII."
		},
		{
			it: "Shh! Spengono le luci. Fra un minuto comincia.",
			pt: "Psiu! Estão apagando as luzes. Daqui a um minuto começa.",
			lit: "Psiu! Apagam as luzes. Entre um minuto começa.",
			note: "*Fra* (ou *tra*) + tempo = daqui a, como na lição 19: *fra un minuto*, *tra due giorni*. *Spengono* é de *spegnere*, apagar."
		},
		{
			it: "È già l'intervallo? Ma io voglio sapere come finisce!",
			pt: "Já é o intervalo? Mas eu quero saber como termina!"
		},
		{
			it: "Allora? Non capisci niente, eh?",
			pt: "E aí? Não entende nada, hein?",
			note: "A Chiara está provocando: lembra do que o Rafael disse na lição 24?"
		},
		{
			it: "Capisco tutto! Violetta ama Alfredo, ma il padre di Alfredo non vuole.",
			pt: "Entendo tudo! A Violetta ama o Alfredo, mas o pai do Alfredo não quer."
		},
		{
			it: "Come sempre: fra due innamorati c'è una famiglia!",
			pt: "Como sempre: entre dois apaixonados tem uma família!",
			note: "*Fra* e *tra* também querem dizer “entre”. São a mesma palavra; escolhe-se pelo som. Evita-se *tra* antes de palavra com *tr* e *fra* antes de *fr*: *fra tre giorni*, *tra fratelli*."
		},
		{
			it: "Scusate, ragazzi, è la vostra prima volta al San Carlo?",
			pt: "Com licença, pessoal, é a primeira vez de vocês no San Carlo?",
			note: "*Scusate* = desculpem, com licença, a duas ou mais pessoas. *La volta* = a vez."
		},
		{
			it: "Per lui sì. Io sono di Napoli, ma vivo a Bologna.",
			pt: "Para ele, sim. Eu sou de Nápoles, mas moro em Bolonha.",
			note: "*Vivere* (viver) também se usa no sentido de morar, como *abitare*."
		},
		{
			it: "Io vengo qui da quarant'anni, e il San Carlo dà sempre grandi emozioni.",
			pt: "Eu venho aqui há quarenta anos, e o San Carlo sempre dá grandes emoções.",
			note: "*Dà* (dá), do verbo *dare*, leva acento para não se confundir com a preposição *da*. As duas aparecem nesta fala: *da quarant'anni* (há quarenta anos, lição 20) e *dà emozioni*."
		},
		{
			it: "È vero. Sono emozionatissimo!",
			pt: "É verdade. Estou emocionadíssimo!"
		},
		{
			it: "È quasi mezzanotte. Torniamo in albergo?",
			pt: "É quase meia-noite. Vamos voltar para o hotel?",
			lit: "É quase meia-noite. Voltamos em hotel?",
			note: "*In albergo*, *in centro*, *in cucina*: com muitos lugares, *in* sem artigo."
		},
		{
			it: "Sì, ma a piedi, sul lungomare. Non voglio andare a letto subito!",
			pt: "Sim, mas a pé, pela orla. Não quero ir para a cama agora!",
			lit: "Sim, mas a pés, sobre o lungomare. Não quero ir a cama logo!",
			note: "*A letto* = para a cama, na cama, sem artigo, como *a casa*, *a scuola*, *a teatro*. *A piedi* = a pé. *Subito* = já, imediatamente."
		},
		{
			it: "Tu e la tua Traviata! Va bene, ma fra mezz'ora a letto.",
			pt: "Você e a sua Traviata! Está bem, mas daqui a meia hora, cama.",
			lit: "Tu e a tua Traviata! Vai bem, mas entre meia hora a cama.",
			note: "*Mezz'ora*: *mezza* perde o *a* diante de *ora*."
		},
		{
			it: "I bambini vanno a scuola a piedi.",
			pt: "As crianças vão para a escola a pé.",
			sep: true,
			note: "*A scuola*, sem artigo."
		},
		{ it: "Chi dà i biglietti alla maschera? Chiara.", pt: "Quem dá os ingressos para o lanterninha? A Chiara." },
		{ it: "Il teatro è fra la piazza e il porto.", pt: "O teatro fica entre a praça e o porto." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'A casa, a scuola, a letto: sem artigo',
			blocks: [
				{
					type: 'p',
					text: "Para certos lugares do dia a dia, o italiano usa a preposição sozinha, sem artigo: *a casa*, *a scuola*, *a letto*, *a teatro*. Isso acontece quando falamos do lugar no seu uso habitual: a casa onde se mora, a escola onde se estuda, a cama de dormir. Você já conhecia *a casa* (lição 1) e *a lezione*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**So**no a **ca**sa.", pt: "Estou em casa." },
						{ it: "**Van**no a **scuo**la.", pt: "Vão para a escola." },
						{ it: "**Va**do a **let**to.", pt: "Vou para a cama." },
						{ it: "Andi**a**mo a te**a**tro.", pt: "Vamos ao teatro." }
					]
				},
				{
					type: 'p',
					text: "O mesmo vale para *in* com muitos lugares: *in albergo*, *in centro*, *in cucina*, *in bagno*, *in piazza*, *in biblioteca*. Já quando o lugar é um específico, com nome ou com mais informação, o artigo volta: *al San Carlo*, *nella casa di Chiara*, *alla scuola di Matteo*."
				},
				{
					type: 'dica',
					text: "Não procure lógica em cada caso: *a teatro*, mas *al cinema*; *in banca*, mas *alla posta*. Guarde cada expressão como um bloco, do jeito que ouvir."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Fra e tra, dà e da; a ópera',
			blocks: [
				{ type: 'h', text: "Fra e tra" },
				{
					type: 'p',
					text: "*Fra* e *tra* são a mesma palavra, com dois sentidos: “entre” (*fra la piazza e il porto*) e “daqui a” (*fra un minuto*). Use a que soar melhor; na dúvida, qualquer uma está certa."
				},
				{ type: 'h', text: "Dà e da" },
				{
					type: 'p',
					text: "*Dà*, com acento, é o verbo *dare* (ele dá). *Da*, sem acento, é a preposição de *vengo da Napoli* (venho de Nápoles) e de *da quarant'anni* (há quarenta anos). Na fala soam igual; na escrita, o acento separa. É o mesmo caso de *è* e *e* (lição 1)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il San **Car**lo dà **gran**di emo**zio**ni.", pt: "O San Carlo dá grandes emoções." },
						{ it: "**Ven**go da **Na**poli.", pt: "Venho de Nápoles." }
					]
				},
				{ type: 'h', text: "Uma noite na ópera" },
				{
					type: 'p',
					text: "A ópera nasceu na Itália, e por isso o vocabulário musical do mundo inteiro é italiano: *soprano*, *tenore*, *aria*, *libretto*, *piano*, *forte*. O Teatro di San Carlo, inaugurado em 1737, é o mais antigo teatro de ópera da Europa ainda em atividade. *La Traviata*, de Giuseppe Verdi, é uma das óperas mais encenadas do mundo."
				},
				{
					type: 'p',
					text: "Os teatros italianos têm forma de ferradura, com fileiras de camarotes (*palchi*) subindo até o teto. O público aplaude ao fim das árias famosas e grita *Bravo!* (para um cantor), *Brava!* (para uma cantora) ou *Bravi!* (para todos). Repare que *bravo* concorda, como qualquer adjetivo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Stasera resto a casa e vado a letto presto.", pt: "Hoje à noite fico em casa e vou para a cama cedo." },
				{ it: "Fra dieci minuti comincia l'opera.", pt: "Daqui a dez minutos começa a ópera." },
				{ it: "La farmacia è tra il bar e la libreria.", pt: "A farmácia fica entre o bar e a livraria." },
				{ it: "Matteo dà una mano a Chiara in cucina.", pt: "O Matteo dá uma mão para a Chiara na cozinha." },
				{ it: "Vengo da Napoli e vado a Bologna.", pt: "Venho de Nápoles e vou para Bolonha." },
				{ it: "Dopo l'intervallo torniamo al nostro palco.", pt: "Depois do intervalo voltamos para o nosso camarote." },
				{ it: "Andate a teatro stasera?", pt: "Vocês vão ao teatro hoje à noite?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vamos para a cama?", parts: ["Andiamo ", null, " letto?"], answers: ["a"] },
				{ pt: "O San Carlo dá grandes emoções.", parts: ["Il San Carlo ", null, " grandi emozioni."], answers: ["dà"] },
				{ pt: "Eu venho de Recife.", parts: ["Vengo ", null, " Recife."], answers: ["da"] },
				{ pt: "Rafael, você dá uma mão para o Matteo?", parts: ["Rafael, ", null, " una mano a Matteo?"], answers: ["dai"] },
				{ pt: "As crianças estão na escola.", parts: ["I bambini sono ", null, " scuola."], answers: ["a"] }
			]
		}
	]
};

const licao26: Lesson = {
	no: 26,
	kind: 'licao',
	title: 'Regali e indicazioni',
	titlePt: 'Presentes e informações',
	lines: [
		{
			it: "Che cosa compriamo per Matteo?",
			pt: "O que a gente compra para o Matteo?",
			lit: "Que coisa compramos para Matteo?",
			note: "Para perguntar “o que”, o italiano tem três jeitos: *che cosa*, *cosa* e *che*. Querem dizer a mesma coisa; *cosa* sozinho é o mais comum na fala, *che* sozinho é mais familiar."
		},
		{
			it: "Una sciarpa, forse? Guarda quella bella sciarpa blu in vetrina!",
			pt: "Um cachecol, talvez? Olha aquele cachecol azul bonito na vitrine!",
			lit: "Um cachecol, talvez? Olha aquele belo cachecol azul em vitrine!",
			note: "Antes do substantivo, *quello* e *bello* mudam de forma como o artigo: *la sciarpa* → *quella sciarpa*, *bella sciarpa*. A leitura de hoje mostra todas as formas. *Blu* (azul) não muda nunca."
		},
		{ it: "Buongiorno! Volete vedere quella sciarpa?", pt: "Bom dia! Querem ver aquele cachecol?" },
		{
			it: "Sì, grazie. È di lana?",
			pt: "Sim, obrigado. É de lã?",
			note: "*Di* indica o material, como o nosso “de”: *di lana*, *di seta*, *di cotone*, *d'oro*."
		},
		{
			it: "Di lana e seta, fatta qui a Napoli. E abbiamo anche quei bei guanti di pelle.",
			pt: "De lã e seda, feito aqui em Nápoles. E temos também aquelas luvas de couro bonitas.",
			lit: "De lã e seda, feita aqui em Nápoles. E temos também aquelas belas luvas de pele.",
			note: "*Quei bei guanti*: no plural, como *i guanti*, temos *quei* e *bei*. *La pelle* é pele e também couro. *Fatta* concorda com *sciarpa*, que é feminino em italiano."
		},
		{
			it: "Che begli orecchini rossi!",
			pt: "Que brincos vermelhos lindos!",
			lit: "Que belos brincos vermelhos!",
			note: "*Begli*, como *gli orecchini*: plural masculino diante de vogal."
		},
		{
			it: "Sono di corallo. A Napoli il corallo porta fortuna.",
			pt: "São de coral. Em Nápoles, o coral dá sorte.",
			lit: "São de coral. A Nápoles o coral traz sorte.",
			note: "*Portare fortuna* = dar sorte. Os napolitanos levam a sorte (e o azar) muito a sério."
		},
		{
			it: "Allora prendo la sciarpa per Matteo e un cornetto rosso per me!",
			pt: "Então vou levar o cachecol para o Matteo e um chifrinho vermelho para mim!",
			note: "O *cornetto* aqui não é o croissant da lição 5: é o chifrinho vermelho, o amuleto napolitano contra o azar."
		},
		{
			it: "Scusi, signora, sa dov'è la fermata dell'autobus per la stazione?",
			pt: "Desculpe, senhora, sabe onde é o ponto do ônibus para a estação?",
			note: "*Sa* = (a senhora) sabe, de *sapere*: *so, sai, sa*... *La fermata* = o ponto, a parada. *Dov'è* = *dove è*."
		},
		{
			it: "È lì, davanti alla farmacia. Ma che autobus dovete prendere?",
			pt: "É ali, na frente da farmácia. Mas que ônibus vocês têm que pegar?",
			note: "*Davanti a* = na frente de, diante de. *Che* também acompanha um substantivo: *che autobus?* = que ônibus?, qual ônibus?"
		},
		{
			it: "Non lo so... Quello per la stazione centrale.",
			pt: "Não sei... O que vai para a estação central.",
			lit: "Não o sei... Aquele para a estação central.",
			note: "*Non lo so* = não sei; em italiano, o *lo* quase sempre está ali. *Quello* sozinho, sem substantivo depois, tem só as formas normais: *quello, quella, quelli, quelle*."
		},
		{
			it: "Ma la stazione non è lontana da qui! Sono dieci minuti a piedi.",
			pt: "Mas a estação não é longe daqui! São dez minutos a pé.",
			note: "*Lontano da* = longe de; *vicino a* = perto de. Repare que cada um tem a sua preposição. E *lontano* aqui concorda com *la stazione*: *lontana*."
		},
		{
			it: "Andate sempre dritto e poi girate a destra. La stazione è di fronte a quel grande palazzo grigio.",
			pt: "Sigam sempre reto e depois virem à direita. A estação fica em frente àquele prédio cinza grande.",
			lit: "Ide sempre direito e depois virai à direita. A estação é de frente a aquele grande prédio cinza.",
			note: "*Di fronte a* = em frente a, do outro lado, frente a frente. *Quel*, como *il palazzo*. E *il palazzo* é um prédio qualquer, não necessariamente um palácio. *A destra* = à direita; *a sinistra* = à esquerda."
		},
		{ it: "Grazie mille, signora! Lei è gentilissima.", pt: "Muito obrigado, senhora! A senhora é muito gentil." },
		{
			it: "Prego! E attenti alle borse, eh!",
			pt: "De nada! E cuidado com as bolsas, hein!",
			note: "*Attento, attenti* = atenção, cuidado (lição 20). *Attenti a*: cuidado com."
		},
		{
			it: "Che cosa cerchi? Cerco quel bel negozio di scarpe.",
			pt: "O que você está procurando? Estou procurando aquela loja de sapatos bonita.",
			sep: true,
			note: "*Quel bel negozio*, como *il negozio*. Repare: *negozio* é masculino; a loja, em português, é feminino."
		},
		{
			it: "Quell'anello d'oro costa troppo.",
			pt: "Aquele anel de ouro custa caro demais.",
			note: "*Quell'anello*, como *l'anello*. *D'oro*: *di* perde o *i* diante de vogal."
		},
		{
			it: "La fermata è accanto al bar, di fronte alla chiesa.",
			pt: "O ponto fica ao lado do bar, em frente à igreja.",
			note: "*Accanto a* = ao lado de."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Quello e bello: como o artigo',
			blocks: [
				{
					type: 'p',
					text: "*Quello* (aquele) e *bello* (bonito) têm uma particularidade: antes do substantivo, mudam de forma acompanhando o artigo definido. Se você sabe o artigo (lição 4), já sabe a forma: basta trocar o começo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il ne**go**zio → quel ne**go**zio, bel ne**go**zio", pt: "*il* → *quel*, *bel*" },
						{ it: "lo **zai**no → **quel**lo **zai**no, **bel**lo **zai**no", pt: "*lo* → *quello*, *bello*" },
						{ it: "l'a**nel**lo → quell'a**nel**lo, bell'a**nel**lo", pt: "*l'* → *quell'*, *bell'*" },
						{ it: "la **sciar**pa → **quel**la **sciar**pa, **bel**la **sciar**pa", pt: "*la* → *quella*, *bella*" },
						{ it: "i **guan**ti → quei **guan**ti, bei **guan**ti", pt: "*i* → *quei*, *bei*", pron: "kuêi guán-ti, béi guán-ti" },
						{ it: "gli orec**chi**ni → **que**gli orec**chi**ni, **be**gli orec**chi**ni", pt: "*gli* → *quegli*, *begli*", pron: "kuê-lhi o-rek-kí-ni, bé-lhi o-rek-kí-ni" },
						{ it: "le **bor**se → **quel**le **bor**se, **bel**le **bor**se", pt: "*le* → *quelle*, *belle*" }
					]
				},
				{
					type: 'p',
					text: "Isso só acontece antes do substantivo. Depois dele, ou sozinhos, voltam às quatro formas normais: *un negozio bello*, *questo zaino è bello*, *quello per la stazione*, *quelli sono belli*."
				},
				{
					type: 'dica',
					text: "Com *questo* (este) não há nada disso: *questo negozio*, *questo zaino*, *quest'anello*, *questi guanti*. Só *quello* e *bello* imitam o artigo. E também *buono*, no singular, como você viu na lição 16: *un buon prezzo*, *un buono studente*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Che cosa, de que material e onde fica',
			blocks: [
				{ type: 'h', text: "Che cosa, cosa, che" },
				{
					type: 'p',
					text: "*Che cosa fai?*, *Cosa fai?* e *Che fai?* querem dizer “o que você está fazendo?”. As três estão certas. E *che* também vem antes de substantivo, como o nosso “que”: *che autobus?*, *che colori!*"
				},
				{ type: 'h', text: "Di para o material" },
				{
					type: 'p',
					text: "Igual ao português: *una sciarpa di lana*, *guanti di pelle*, *una maglietta di cotone* (uma camiseta de algodão), *un anello d'oro*, *un piatto di ceramica*."
				},
				{ type: 'h', text: "Onde fica" },
				{
					type: 'p',
					text: "Para pedir e entender o caminho, estas expressões resolvem quase tudo. Repare na preposição de cada uma, que se junta ao artigo: *davanti alla farmacia*, *lontano dal centro*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "da**van**ti a", pt: "na frente de, diante de" },
						{ it: "di **fron**te a", pt: "em frente a, do outro lado de" },
						{ it: "ac**can**to a", pt: "ao lado de" },
						{ it: "vi**ci**no a / lon**ta**no da", pt: "perto de / longe de" },
						{ it: "**sem**pre **drit**to; a **de**stra, a si**ni**stra", pt: "sempre reto; à direita, à esquerda" }
					]
				},
				{
					type: 'dica',
					text: "Para começar a pergunta na rua: *Scusi, sa dov'è...?* (desculpe, sabe onde fica...?). Se a pessoa não souber, vai responder *Mi dispiace, non lo so* ou *Non sono di qui* (não sou daqui)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Cosa compri per tua madre? Quella bella tazza.", pt: "O que você vai comprar para a sua mãe? Aquela caneca bonita." },
				{ it: "Quegli studenti sono di Torino.", pt: "Aqueles estudantes são de Turim." },
				{ it: "Il bar è accanto alla farmacia.", pt: "O bar fica ao lado da farmácia." },
				{ it: "Sa dov'è la stazione? Sì, è vicino al porto.", pt: "O senhor sabe onde fica a estação? Sim, fica perto do porto." },
				{ it: "Vorrei una giacca di pelle.", pt: "Eu queria uma jaqueta de couro." },
				{ it: "Mi dispiace, non lo so: non sono di qui.", pt: "Sinto muito, não sei: não sou daqui." },
				{ it: "Quel ristorante è lontano dal centro.", pt: "Aquele restaurante é longe do centro." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Olha: aquele cachecol é de lã.", parts: ["Guarda: ", null, " sciarpa è di lana."], answers: ["quella"] },
				{ pt: "Que brincos lindos!", parts: ["Che ", null, " orecchini!"], answers: ["begli"] },
				{ pt: "A estação é longe daqui?", parts: ["La stazione è lontana ", null, " qui?"], answers: ["da"] },
				{ pt: "O ponto fica ao lado da farmácia.", parts: ["La fermata è ", null, " alla farmacia."], answers: ["accanto"] },
				{ pt: "Eu queria um cachecol de seda.", parts: ["Vorrei una sciarpa ", null, " seta."], answers: ["di"] }
			]
		}
	]
};

const licao27: Lesson = {
	no: 27,
	kind: 'licao',
	title: 'Paese che vai...',
	titlePt: 'Cada terra com seu uso',
	lines: [
		{
			it: "Scusa, questo è il mio posto.",
			pt: "Desculpa, este é o meu lugar.",
			note: "Ops: o Rafael disse *scusa*, com *tu*, a uma senhora que ele não conhece. O certo seria *scusi* (lição 2)."
		},
		{
			it: "Oh, scusi Lei, giovanotto! Il mio è quello di fronte.",
			pt: "Ah, desculpe o senhor, rapaz! O meu é o da frente.",
			lit: "Oh, desculpe o senhor, mocinho! O meu é aquele de frente.",
			note: "*Scusi Lei* = desculpe o senhor, a desculpa devolvida. *Giovanotto* é como uma pessoa mais velha chama um rapaz."
		},
		{
			it: "Rafael! Alla signora devi dare del Lei!",
			pt: "Rafael! Com a senhora você tem que usar o Lei!",
			lit: "Rafael! À senhora deves dar do Lei!",
			note: "*Dare del Lei* = tratar alguém por *Lei*, “o senhor”, “a senhora”. *Dare del tu* = tratar por *tu*."
		},
		{
			it: "Hai ragione. Mi scusi, signora: in Brasile si dà del tu quasi a tutti.",
			pt: "Você tem razão. Desculpe, senhora: no Brasil a gente trata quase todo mundo por você.",
			lit: "Tens razão. Me desculpe, senhora: em Brasil se dá do tu quase a todos.",
			note: "*Si dà* = dá-se, a gente dá. É o *si* impessoal: *si* + verbo na terceira pessoa, para falar do que se faz em geral, sem dizer quem. Como o nosso “usa-se”, “fala-se”."
		},
		{
			it: "Si figuri! Lei parla benissimo l'italiano. Di dov'è?",
			pt: "Imagine! O senhor fala italiano muito bem. De onde é?",
			note: "*Si figuri!* = imagine!, não foi nada, com *Lei*. Com *tu*, *figurati!*"
		},
		{ it: "Di Recife. Studio a Bologna per sei mesi. E Lei?", pt: "De Recife. Estou estudando em Bolonha por seis meses. E a senhora?" },
		{
			it: "Io sono di Bologna. Ma possiamo darci del tu, eh? Mi chiamo Franca.",
			pt: "Eu sou de Bolonha. Mas podemos nos tratar por você, hein? Meu nome é Franca.",
			lit: "Eu sou de Bolonha. Mas podemos dar-nos do tu, hein? Me chamo Franca.",
			note: "*Darsi del tu* = tratar-se por *tu*, um ao outro. Quem propõe a passagem para o *tu* é, normalmente, a pessoa mais velha ou a de posição mais alta. Foi o que a Franca fez."
		},
		{
			it: "Volentieri! Io sono Rafael, e lei è Chiara.",
			pt: "Com prazer! Eu sou o Rafael, e ela é a Chiara.",
			note: "*Volentieri* = com prazer, de bom grado. E aqui *lei* com minúscula: “ela”."
		},
		{ it: "Allora, Napoli? Bella, eh?", pt: "E então, Nápoles? Linda, hein?" },
		{
			it: "Bellissima! Ma ho una domanda: al ristorante si lascia la mancia?",
			pt: "Lindíssima! Mas tenho uma pergunta: no restaurante se deixa gorjeta?",
			lit: "Belíssima! Mas tenho uma pergunta: ao restaurante se deixa a gorjeta?",
			note: "*La mancia* = a gorjeta. *Si lascia* = deixa-se, a gente deixa."
		},
		{
			it: "Non è obbligatoria: nel conto c'è già il coperto. Ma se il servizio è buono, si lasciano due o tre euro.",
			pt: "Não é obrigatória: na conta já tem o couvert. Mas se o serviço é bom, a gente deixa dois ou três euros.",
			lit: "Não é obrigatória: na conta há já o coperto. Mas se o serviço é bom, se deixam dois ou três euros.",
			note: "Com o *si* impessoal, o verbo concorda com a coisa: *si lascia la mancia* (singular), *si lasciano due euro* (plural). *Il coperto* é um valor fixo por pessoa que muitos restaurantes cobram: pão, toalha, talheres."
		},
		{
			it: "E al bar, al massimo, si lasciano gli spiccioli.",
			pt: "E no bar, no máximo, a gente deixa os trocados.",
			note: "*Gli spiccioli* = os trocados, as moedinhas."
		},
		{
			it: "Esatto. Paese che vai, usanza che trovi!",
			pt: "Exato. Cada terra com seu uso!",
			lit: "Exato. País que vais, costume que encontras!",
			note: "Um ditado: em cada lugar, costumes diferentes. *L'usanza* = o costume."
		},
		{
			it: "Ecco Bologna! E guarda: Matteo è sul binario!",
			pt: "Olha Bolonha! E veja: o Matteo está na plataforma!",
			lit: "Eis Bolonha! E olha: Matteo está sobre o trilho!",
			note: "*Il binario* = o trilho e, na estação, a plataforma: *il treno parte dal binario tre*."
		},
		{
			it: "Bentornati! Andiamo a casa a piedi? Sono venti minuti.",
			pt: "Bem-vindos de volta! Vamos para casa a pé? São vinte minutos.",
			note: "*Bentornato, bentornata, bentornati*: bem-vindo de volta, concordando como um adjetivo. *A piedi* = a pé. Não confunda com *in piedi* = de pé, em pé."
		},
		{
			it: "A piedi, con queste valigie? In Italia si prende il taxi, no?",
			pt: "A pé, com estas malas? Na Itália se pega táxi, não?",
			note: "*La valigia* = a mala; plural *valigie*."
		},
		{
			it: "Si prende l'autobus: costa meno!",
			pt: "Pega-se o ônibus: custa menos!"
		},
		{
			it: "In questo ristorante si mangia bene e non si spende molto.",
			pt: "Neste restaurante se come bem e não se gasta muito.",
			sep: true,
			note: "*Spendere* = gastar (dinheiro)."
		},
		{
			it: "Sull'autobus non ci sono posti: siamo tutti in piedi.",
			pt: "No ônibus não tem lugar: estamos todos de pé."
		},
		{
			it: "Come si dice “gorjeta” in italiano? Si dice “mancia”.",
			pt: "Como se diz “gorjeta” em italiano? Diz-se “mancia”.",
			note: "*Come si dice...?* é a pergunta mais útil para quem está aprendendo."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O si impessoal',
			blocks: [
				{
					type: 'p',
					text: "Para falar do que se faz em geral, sem dizer quem, o italiano usa *si* + o verbo na terceira pessoa. É o nosso “usa-se”, “come-se”, ou o “a gente” e o “você” genéricos: “no Brasil a gente janta tarde”, “aqui você paga antes”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Come si **di**ce “mancia” in porto**ghe**se?", pt: "Como se diz “mancia” em português?" },
						{ it: "Qui si **man**gia **be**ne.", pt: "Aqui se come bem." },
						{ it: "In I**ta**lia si **pren**de il caf**fè** al **ban**co.", pt: "Na Itália se toma o café no balcão." },
						{ it: "Si **pu**ò?", pt: "Pode? Dá licença? (ao entrar numa sala)" }
					]
				},
				{ type: 'h', text: "Singular ou plural" },
				{
					type: 'p',
					text: "Quando há uma coisa depois do verbo, o verbo concorda com ela: no singular se a coisa é singular, no plural se é plural. Também como no português culto: “vende-se casa”, “vendem-se casas”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Si **la**scia la **man**cia.", pt: "Deixa-se gorjeta." },
						{ it: "Si **la**sciano due **eu**ro.", pt: "Deixam-se dois euros." },
						{ it: "Si fa co**sì**. / Si **fan**no **tan**te **co**se.", pt: "Faz-se assim. / Fazem-se muitas coisas." }
					]
				},
				{
					type: 'dica',
					text: "Na prática, quando o brasileiro diria “a gente” no sentido geral (“no Brasil a gente come arroz todo dia”), o italiano diz *si*: *in Brasile si mangia il riso tutti i giorni*. Quando “a gente” quer dizer “nós”, o italiano usa *noi* (lição 3)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Tu ou Lei? E outros costumes',
			blocks: [
				{
					type: 'p',
					text: "Você conhece o *Lei* desde a lição 2. Na Itália, a escolha entre *tu* e *Lei* pesa mais do que entre “você” e “o senhor” no Brasil. Com desconhecidos adultos, funcionários, professores, médicos e pessoas mais velhas, começa-se com *Lei*. Entre jovens, colegas de estudo, amigos e família, usa-se *tu*."
				},
				{
					type: 'p',
					text: "A passagem do *Lei* para o *tu* costuma ser proposta por quem é mais velho ou tem posição mais alta: *Possiamo darci del tu?* ou *Dammi pure del tu!* (pode me tratar por *tu*!). Até lá, mantenha o *Lei*. Ninguém se ofende com excesso de educação; com falta, às vezes sim."
				},
				{ type: 'h', text: "Cumprimentos" },
				{
					type: 'p',
					text: "*Ciao* é só para quem você trata por *tu*. Com *Lei*, diga *buongiorno* (até mais ou menos o começo da tarde), *buonasera* (do fim da tarde em diante) e, para se despedir, *arrivederci*. Ao entrar numa loja pequena, é educado cumprimentar todo mundo com um *buongiorno*."
				},
				{ type: 'h', text: "Gorjeta" },
				{
					type: 'p',
					text: "A gorjeta (*la mancia*) não é obrigatória nem esperada como em outros países. Muitos restaurantes cobram o *coperto* (pão e serviço de mesa) e alguns, o *servizio*, que já vem na conta. Se gostou, deixe uns trocados ou arredonde o valor. No bar, no táxi, com o carregador do hotel, uma moeda já é gentileza."
				},
				{ type: 'h', text: "A piedi, in piedi" },
				{
					type: 'exemplos',
					items: [
						{ it: "**Van**no a **ca**sa a **pie**di.", pt: "Vão para casa a pé." },
						{ it: "Sul **tre**no **sia**mo in **pie**di.", pt: "No trem estamos de pé." }
					]
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Come si dice “gorjeta” in italiano? Si dice “mancia”.", pt: "Como se diz “gorjeta” em italiano? Diz-se “mancia”." },
				{ it: "In Italia si prende il caffè al banco.", pt: "Na Itália se toma o café no balcão." },
				{ it: "In questo negozio si parlano tre lingue.", pt: "Nesta loja se falam três línguas." },
				{ it: "Al professore do del Lei, a Chiara do del tu.", pt: "Com o professor eu uso o Lei, com a Chiara uso o tu." },
				{ it: "Andiamo in centro a piedi.", pt: "Vamos para o centro a pé." },
				{ it: "Sul treno ci sono molte persone in piedi.", pt: "No trem tem muita gente de pé." },
				{ it: "Al bar non si lascia la mancia.", pt: "No bar não se deixa gorjeta." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Como se diz “trem” em italiano?", parts: ["Come si ", null, " “trem” in italiano?"], answers: ["dice"] },
				{ pt: "Na Itália se deixam dois euros de gorjeta.", parts: ["In Italia si ", null, " due euro di mancia."], answers: ["lasciano"] },
				{ pt: "Com a senhora, você tem que usar o Lei!", parts: ["Alla signora devi dare ", null, " Lei!"], answers: ["del"] },
				{ pt: "Vamos para casa a pé.", parts: ["Andiamo a casa a ", null, "."], answers: ["piedi"] },
				{ pt: "No trem lotado se fica de pé.", parts: ["Sul treno pieno si sta ", null, " piedi."], answers: ["in"] }
			]
		}
	]
};

const licao28: Lesson = {
	no: 28,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Fare, dire, dare, sapere, uscire',
			blocks: [
				{
					type: 'p',
					text: "Quarta semana concluída, e o Rafael está de volta a Bolonha! Nesta revisão vamos reunir os verbos irregulares que apareceram nas lições 22 a 27. Comece por cinco verbos curtos e muito usados. Leia cada linha em voz alta; o ritmo ajuda a guardar."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "faccio, fai, fa, facciamo, fate, fanno", pt: "*fare*: fazer", pron: "fát-tcho, fái, fá, fat-tchá-mo, fá-te, fán-no" },
						{ it: "dico, dici, dice, diciamo, dite, dicono", pt: "*dire*: dizer", pron: "dí-ko, dí-tchi, dí-tche, di-tchá-mo, dí-te, dí-ko-no" },
						{ it: "do, dai, dà, diamo, date, danno", pt: "*dare*: dar", pron: "dó, dái, dá, diá-mo, dá-te, dán-no" },
						{ it: "so, sai, sa, sappiamo, sapete, sanno", pt: "*sapere*: saber", pron: "só, sái, sá, sap-piá-mo, sa-pê-te, sán-no" },
						{ it: "esco, esci, esce, usciamo, uscite, escono", pt: "*uscire*: sair", pron: "és-ko, é-xi, é-xe, u-xá-mo, u-xí-te, és-ko-no" }
					]
				},
				{
					type: 'p',
					text: "Repare em *uscire*: o radical é *esc-* nas formas com a força no começo (*esco, esci, esce, escono*) e *usc-* em *usciamo* e *uscite*. E lembre do acento de *dà* (ele dá), que o separa da preposição *da* (lição 25)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Dobbiamo fare presto!", pt: "Temos que andar logo! (lição 23)" },
						{ it: "Il San Carlo dà sempre grandi emozioni.", pt: "O San Carlo sempre dá grandes emoções. (lição 25)" },
						{ it: "Scusi, sa dov'è la fermata?", pt: "Desculpe, sabe onde é o ponto? (lição 26)" },
						{ it: "Come si dice “gorjeta” in italiano?", pt: "Como se diz “gorjeta” em italiano? (lição 27)" }
					]
				},
				{
					type: 'dica',
					text: "*Sapere* é saber uma informação (*so dov'è*) ou saber fazer algo (*so cucinare*, sei cozinhar). Conhecer uma pessoa ou um lugar é *conoscere* (lição 12): *conosco Chiara*, *conosco Napoli*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Volere, potere, dovere + infinitivo',
			blocks: [
				{
					type: 'p',
					text: "Os três verbos que você estudou nas lições 22 a 24 trabalham sempre com outro verbo no infinitivo. Veja-os lado a lado:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "voglio / posso / devo", pt: "eu quero / posso / devo", pron: "vó-lho / pós-so / dê-vo" },
						{ it: "vuoi / puoi / devi", pt: "você quer / pode / deve", pron: "vuói / puói / dê-vi" },
						{ it: "vuole / può / deve", pt: "ele quer / pode / deve", pron: "vuó-le / puó / dê-ve" },
						{ it: "vogliamo / possiamo / dobbiamo", pt: "queremos / podemos / devemos", pron: "vo-lhá-mo / pos-siá-mo / dob-biá-mo" },
						{ it: "volete / potete / dovete", pt: "vocês querem / podem / devem", pron: "vo-lê-te / po-tê-te / do-vê-te" },
						{ it: "vogliono / possono / devono", pt: "eles querem / podem / devem", pron: "vó-lho-no / pós-so-no / dê-vo-no" }
					]
				},
				{ type: 'h', text: "Outras construções com infinitivo" },
				{
					type: 'exemplos',
					items: [
						{ it: "Andiamo a ballare?", pt: "*andare a* + infinitivo: ir fazer algo (lição 24)" },
						{ it: "Va bene, vengo a vedere la Traviata.", pt: "*venire a*: ir junto, ir até quem fala (lição 24)" },
						{ it: "Cerco qualcosa da portare a mia madre.", pt: "*da* + infinitivo: algo para fazer (lição 23)" },
						{ it: "E non dimenticate: il pullman non può aspettare!", pt: "*non* + forma de *voi*: ordem negativa no plural (lição 23)" }
					]
				},
				{
					type: 'dica',
					text: "Para pedir com educação, troque *voglio* por *vorrei*: *Vorrei due biglietti, per favore*. E para pedir um favor, *Può...?*: *Può ripetere, per favore?*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Onde fica',
			blocks: [
				{
					type: 'p',
					text: "Na lição 26, pedindo o caminho em Nápoles, apareceram as expressões de lugar. Cada uma tem a sua preposição, que se junta ao artigo seguinte."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La fermata è davanti alla farmacia.", pt: "O ponto fica na frente da farmácia." },
						{ it: "La stazione è di fronte a quel palazzo.", pt: "A estação fica em frente àquele prédio." },
						{ it: "Il bar è accanto alla chiesa.", pt: "O bar fica ao lado da igreja." },
						{ it: "La pizzeria è vicino al porto.", pt: "A pizzaria fica perto do porto." },
						{ it: "La stazione non è lontana da qui.", pt: "A estação não é longe daqui." },
						{ it: "Il teatro è fra la piazza e il porto.", pt: "O teatro fica entre a praça e o porto." }
					]
				},
				{
					type: 'p',
					text: "Todas pedem *a*, menos *lontano*, que pede *da*, e *fra/tra*, que não pede nada. *Davanti a* e *di fronte a* são quase sinônimos; *di fronte* insiste no “frente a frente”, do outro lado da rua."
				},
				{
					type: 'p',
					text: "E não esqueça os lugares sem artigo da lição 25: *a casa*, *a scuola*, *a letto*, *a teatro*; *in albergo*, *in centro*, *in piazza*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Muito, muitíssimo',
			blocks: [
				{
					type: 'p',
					text: "O italiano adora intensificar. A forma mais conhecida é o sufixo *-issimo*, que você ouviu a semana inteira. Ele se junta ao adjetivo sem a vogal final e concorda como qualquer adjetivo em *-o*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "bello → bellissimo, bellissima", pt: "lindíssimo, lindíssima" },
						{ it: "gentile → gentilissimo, gentilissima", pt: "gentilíssimo (lição 26)" },
						{ it: "bravo → bravissimo", pt: "ótimo, muito competente (lição 23)" },
						{ it: "bene → benissimo; poco → pochissimo", pt: "muito bem; pouquíssimo" }
					]
				},
				{
					type: 'p',
					text: "Nos advérbios também funciona: *benissimo*, *prestissimo*, *pochissimo*, *tantissimo*. Repare no *h* de *pochissimo* e de *larghissimo*, para manter o som duro (lição 0)."
				},
				{ type: 'h', text: "Outros jeitos de dizer “muito”" },
				{
					type: 'p',
					text: "*Molto* antes do adjetivo (*molto buoni*), *proprio* (*è proprio bella*, é bonita mesmo), *davvero* (*davvero gentile*) e, na fala, a repetição: *piano piano* (devagarinho), *bello bello*, *caldo caldo* (bem quentinho). E não esqueça a lição 22: *molto*, *tanto*, *poco*, *troppo* concordam quando acompanham um substantivo (*molte ore*) e não mudam quando acompanham verbo ou adjetivo (*camminiamo molto*, *molto buoni*)."
				},
				{
					type: 'dica',
					text: "Alguns adjetivos já têm uma forma forte própria: *ottimo* (ótimo) e *pessimo* (péssimo), da lição 10. Não se diz “ottimissimo”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Estas são as expressões que acompanharam o Rafael e a Chiara entre Nápoles, a costa e o trem de volta. Diga cada uma em voz alta, com a melodia que você ouviu nos diálogos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ho tanta fame! / Ho sonno.", pt: "Estou com tanta fome! / Estou com sono." },
						{ it: "Hai ragione.", pt: "Você tem razão." },
						{ it: "Ma no!", pt: "Que nada! Imagina!" },
						{ it: "Senta! / Scusate!", pt: "Escute! (ao garçom) / Com licença! (a várias pessoas)" },
						{ it: "Va bene così.", pt: "Está bom assim." },
						{ it: "Tranquillo! / Tranquilli!", pt: "Calma! Fica tranquilo!" },
						{ it: "Facciamo presto!", pt: "Vamos andar logo!" },
						{ it: "Ci siamo tutti?", pt: "Estão todos aqui?" },
						{ it: "Non fa niente.", pt: "Não tem problema." },
						{ it: "D'accordo!", pt: "Combinado!" },
						{ it: "Che meraviglia!", pt: "Que maravilha!" },
						{ it: "Non lo so.", pt: "Não sei." },
						{ it: "Sempre dritto, poi a destra.", pt: "Sempre reto, depois à direita." },
						{ it: "Attenti!", pt: "Cuidado!" },
						{ it: "Si figuri!", pt: "Imagine! Não foi nada!" },
						{ it: "Volentieri!", pt: "Com prazer!" },
						{ it: "Paese che vai, usanza che trovi.", pt: "Cada terra com seu uso." },
						{ it: "Bentornati!", pt: "Bem-vindos de volta!" }
					]
				},
				{
					type: 'dica',
					text: "Da próxima vez que alguém agradecer você por um favor, responda *Si figuri!* (ou *Figurati!*, se for alguém próximo). É pequeno, mas soa muito italiano."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Posso uscire stasera? No, devi studiare.", pt: "Posso sair hoje à noite? Não, você tem que estudar." },
				{ it: "Che cosa fate domani? Andiamo a vedere il Vesuvio.", pt: "O que vocês vão fazer amanhã? Vamos ver o Vesúvio." },
				{ it: "Non so dov'è la fermata: è vicino alla stazione?", pt: "Não sei onde é o ponto: é perto da estação?" },
				{ it: "Il bar è di fronte alla chiesa, accanto alla farmacia.", pt: "O bar fica em frente à igreja, ao lado da farmácia." },
				{ it: "Quei bei piatti di ceramica costano pochissimo.", pt: "Aqueles pratos de cerâmica bonitos custam pouquíssimo." },
				{ it: "Chiara dice che Napoli è bellissima.", pt: "A Chiara diz que Nápoles é lindíssima." },
				{ it: "Al ristorante si lasciano due euro di mancia.", pt: "No restaurante se deixam dois euros de gorjeta." },
				{ it: "Escono a mezzanotte e vanno a letto tardi.", pt: "Eles saem à meia-noite e vão para a cama tarde." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu faço o café e você faz o chá.", parts: ["Io ", null, " il caffè e tu ", null, " il tè."], answers: ["faccio", "fai"] },
				{ pt: "Pessoal, vocês sabem onde fica o teatro?", parts: ["Ragazzi, ", null, " dov'è il teatro?"], answers: ["sapete"] },
				{ pt: "Nós saímos às oito.", parts: ["Noi ", null, " alle otto."], answers: ["usciamo"] },
				{ pt: "O hotel é longe do centro?", parts: ["L'albergo è lontano ", null, " centro?"], answers: ["dal"] },
				{ pt: "Eles dão os ingressos para o lanterninha.", parts: ["Loro ", null, " i biglietti alla maschera."], answers: ["danno"] }
			]
		}
	]
};

export const unidade: Unit = { no: 4, title: 'Nápoles e a costa', lessons: [22, 23, 24, 25, 26, 27, 28] };

export const licoes: Lesson[] = [licao22, licao23, licao24, licao25, licao26, licao27, licao28];
