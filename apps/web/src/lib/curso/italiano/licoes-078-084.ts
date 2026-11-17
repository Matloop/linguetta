import type { Lesson, Unit } from '../types.ts';

// Lições 78–84: inverno em Bolonha, no apartamento novo. Rafael cai da bicicleta no gelo e vai pela
// primeira vez ao médico de família, o dottor Ricci (garganta inflamada, pulso torcido, uma semana sem
// bicicleta); Matteo, hipocondríaco, quer faltar à reunião com o chefe; Rafael e Matteo se matriculam na
// academia (instrutora Sara); Serena se apaixona pelo dentista, o dottor Daniele Conti, e "esquece" a
// carteira no consultório; Giulia e Chiara estudam anatomia e as expressões com o corpo; Matteo corta o
// dedo e passa três horas no pronto-socorro, onde Chiara explica a saúde pública italiana.
// A 84 revisa o condicional e os usos de appena. Ver docs/agents/curso-assimil-mapa.md.

const licao78: Lesson = {
	no: 78,
	kind: 'licao',
	title: 'Dal medico',
	titlePt: 'No médico',
	lines: [
		{
			it: "Avanti! Entri pure.",
			pt: "Pode entrar! Entre, por favor.",
			lit: "Adiante! Entre mesmo.",
			note: "*Entri* = entre: é o imperativo de *Lei*, o jeito de pedir algo a quem se trata por “o senhor”, como *guardi* e *provi* (lição 6) e *si accomodi* (lição 47). *Pure*, depois do imperativo, deixa o convite mais gentil: “fique à vontade para entrar”. *Avanti!* é o que se responde a quem bate à porta."
		},
		{
			it: "Buongiorno, dottore. È la prima volta che vengo da Lei.",
			pt: "Bom dia, doutor. É a primeira vez que me consulto com o senhor.",
			lit: "Bom dia, doutor. É a primeira vez que venho de Si.",
			note: "*Da Lei*: com pessoas, *da*, como em *dal medico* (lição 29)."
		},
		{
			it: "Ah, sì, lo studente brasiliano. Si accomodi. Che cosa si sente?",
			pt: "Ah, sim, o estudante brasileiro. Sente-se. O que o senhor está sentindo?",
			lit: "Ah, sim, o estudante brasileiro. Se acomode. Que coisa se sente?",
			note: "*Sentirsi* (lição 46): *mi sento male*, *come si sente?*. Com *Lei*, *si sente*: o senhor se sente."
		},
		{
			it: "Da tre giorni ho mal di gola, e ieri sera avevo trentotto e mezzo di febbre.",
			pt: "Faz três dias que estou com dor de garganta, e ontem à noite eu estava com trinta e oito e meio de febre.",
			lit: "Desde três dias tenho mal de garganta, e ontem à noite tinha trinta e oito e meio de febre.",
			note: "*Da tre giorni* + presente: o que começou há três dias e continua (lição 20). *Avere mal di* + parte do corpo (lição 9): *mal di gola*, *mal di testa*, *mal di pancia*. Para a febre, basta o número: *trentotto*, sem “graus”."
		},
		{
			it: "Vediamo. Apra la bocca e dica «aaa».",
			pt: "Vamos ver. Abra a boca e diga “aaa”.",
			note: "Mais dois imperativos de *Lei*: *apra* (de *aprire*) e *dica* (de *dire*). Nos verbos em *-are*, essa forma termina em *-i* (*entri*, *guardi*); nos verbos em *-ere* e *-ire*, em *-a* (*apra*, *prenda*)."
		},
		{
			it: "La gola è molto rossa. Le fa male quando mangia?",
			pt: "A garganta está bem vermelha. Dói quando o senhor come?",
			lit: "A garganta é muito vermelha. Lhe faz mal quando come?",
			note: "*Fare male* = doer. Quem sente a dor vem como pronome indireto (lição 36): *mi fa male la gola* (minha garganta dói), *Le fa male?* (dói no senhor?). Com várias coisas, *fanno*: *mi fanno male i piedi*."
		},
		{
			it: "Sì, molto. E mi fa male anche il polso: domenica sono caduto dalla bicicletta.",
			pt: "Sim, muito. E meu pulso também dói: domingo eu caí da bicicleta.",
			lit: "Sim, muito. E me faz mal também o pulso: domingo sou caído da bicicleta.",
			note: "*Cadere* (cair) faz o passado com *essere*: *sono caduto*, *è caduta*. *Il polso* = o pulso, a articulação (e também a pulsação)."
		},
		{
			it: "In bicicletta, con il ghiaccio? Mi faccia vedere.",
			pt: "De bicicleta, com o gelo? Deixe-me ver.",
			lit: "Em bicicleta, com o gelo? Me faça ver.",
			note: "*Faccia* = faça, imperativo de *Lei* de *fare*. *Mi faccia vedere* = deixe-me ver; com *tu*, *fammi vedere* (lição 77). Os verbos irregulares tiram essa forma do *io* do presente: *faccio* → *faccia*, *dico* → *dica*."
		},
		{
			it: "Ahi! Piano, dottore!",
			pt: "Ai! Devagar, doutor!",
			note: "*Piano* = devagar, com cuidado; e também baixinho (lição 59)."
		},
		{
			it: "Non è rotto. Si è fatto male cadendo, ma è solo una distorsione.",
			pt: "Não está quebrado. O senhor se machucou na queda, mas é só uma torção.",
			lit: "Não é rompido. Se é feito mal caindo, mas é só uma distorção.",
			note: "*Farsi male* = machucar-se. É reflexivo, então vai com *essere* no passado (lição 46): *mi sono fatto male*, *Chiara si è fatta male*. Compare: *fare male* é doer, *farsi male* é se machucar. *Cadendo* = ao cair: o gerúndio diz como aconteceu (lição 69). *Rotto* (quebrado) você viu na lição 68."
		},
		{
			it: "Meno male! Allora posso andare a lezione in bici?",
			pt: "Ainda bem! Então posso ir para a aula de bicicleta?",
			note: "*Meno male* = ainda bem (lição 15). *La bici* é a forma curta de *la bicicletta*, invariável: *le bici*."
		},
		{
			it: "Neanche per sogno! Tenga il polso fermo e ci metta il ghiaccio due volte al giorno.",
			pt: "Nem pensar! Mantenha o pulso parado e ponha gelo nele duas vezes por dia.",
			lit: "Nem por sonho! Tenha o pulso firme e ali meta o gelo duas vezes ao dia.",
			note: "*Tenga* vem de *tenere* (*tengo* → *tenga*). *Ci metta* = ponha ali: o *ci* vem antes do imperativo de *Lei*, como todo pronome. *Due volte al giorno* = duas vezes por dia; *una volta alla settimana*, uma vez por semana. *Neanche per sogno!* = nem sonhando!, nem pensar!"
		},
		{
			it: "E per la gola? Mi serve l'antibiotico?",
			pt: "E a garganta? Preciso de antibiótico?",
			lit: "E para a garganta? Me serve o antibiótico?",
			note: "*Mi serve* = preciso de (lição 41)."
		},
		{
			it: "No, è un virus. Prenda questo antinfiammatorio: una compressa tre volte al giorno, dopo i pasti.",
			pt: "Não, é um vírus. Tome este anti-inflamatório: um comprimido três vezes por dia, depois das refeições.",
			note: "*Prenda* = tome. Remédio se “pega”, como o café: *prendere una medicina*. *La compressa* = o comprimido. *Il pasto* = a refeição."
		},
		{
			it: "E l'università? Venerdì ho un esame.",
			pt: "E a universidade? Sexta-feira tenho uma prova."
		},
		{
			it: "Rimanga a casa almeno due giorni, beva molto e si riposi.",
			pt: "Fique em casa pelo menos dois dias, beba bastante e descanse.",
			lit: "Permaneça a casa ao menos dois dias, beba muito e se repouse.",
			note: "*Rimanere* = ficar, permanecer. É irregular: *rimango, rimani, rimane, rimaniamo, rimanete, rimangono*; no passado, *sono rimasto*. De *rimango* sai *rimanga*; de *bevo*, *beva*. Com o reflexivo *riposarsi*, o *si* vem na frente: *si riposi*."
		},
		{
			it: "Va bene, rimango a letto. Quanto Le devo?",
			pt: "Está bem, fico de cama. Quanto lhe devo?",
			note: "*Le devo* = devo ao senhor: *Le* é o pronome indireto de *Lei*. *A letto*, sem artigo, como *a casa* (lição 25)."
		},
		{
			it: "Niente, la visita dal medico di famiglia è gratuita. Guarisca presto!",
			pt: "Nada, a consulta com o médico de família é gratuita. Melhoras!",
			lit: "Nada, a visita do médico de família é gratuita. Sare logo!",
			note: "*Il medico di famiglia*, ou *medico di base*, é o clínico geral que cada pessoa escolhe no serviço público (mais na lição 83). *La visita* = a consulta. *Guarisca!*, de *guarire* (sarar, com *-isc-*: *guarisco* → *guarisca*), é o nosso “melhoras!”. Também se diz *Buona guarigione!*."
		},
		{
			it: "Mi sono fatto male alla schiena giocando a calcetto.",
			pt: "Machuquei as costas jogando futebol society.",
			sep: true,
			note: "*Farsi male a* + parte do corpo: *al piede*, *alla schiena*. *La schiena* = as costas, no singular. *Il calcetto* é o futebol de cinco."
		},
		{
			it: "Chiara è rimasta in biblioteca fino a mezzanotte.",
			pt: "A Chiara ficou na biblioteca até meia-noite.",
			note: "*Rimanere* faz o passado com *essere*: *è rimasta*."
		},
		{
			it: "Scusi, mi dica: quante volte al giorno devo prendere lo sciroppo?",
			pt: "Desculpe, me diga: quantas vezes por dia tenho que tomar o xarope?"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O imperativo de Lei',
			blocks: [
				{
					type: 'p',
					text: "Na lição 77 você fechou o imperativo de *tu* e de *voi*. Falta o de *Lei*, que você ouve desde a lição 6 (*guardi*, *provi*) e que hoje o médico usou a consulta inteira. A regra é uma troca de vogal: os verbos em *-are* terminam em *-i*; os verbos em *-ere* e *-ire*, em *-a*. É o contrário do imperativo de *tu*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "En**tri** pure! / **Guar**di!", pt: "Entre! / Olhe! (*entrare*, *guardare*)" },
						{ it: "**Pren**da! / **A**pra!", pt: "Tome! / Abra! (*prendere*, *aprire*)" },
						{ it: "Gua**ri**sca!", pt: "Sare! (*guarire*, com *-isc-*)" }
					]
				},
				{ type: 'h', text: 'Os irregulares saem do “io”' },
				{
					type: 'p',
					text: "Quando o *io* do presente é irregular, o imperativo de *Lei* nasce dele: *faccio* → *faccia*, *dico* → *dica*, *vengo* → *venga*, *rimango* → *rimanga*, *tengo* → *tenga*, *bevo* → *beva*, *esco* → *esca*, *vado* → *vada*. E há cinco que você precisa guardar à parte: *sia* (*essere*), *abbia* (*avere*), *stia* (*stare*), *dia* (*dare*), *sappia* (*sapere*)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi **fac**cia ve**de**re.", pt: "Deixe-me ver." },
						{ it: "Ri**man**ga a **ca**sa e **be**va **mol**to.", pt: "Fique em casa e beba bastante." },
						{ it: "**Stia** tran**quil**lo, non è **nien**te.", pt: "Fique tranquilo, não é nada." },
						{ it: "**Ab**bia pa**zien**za!", pt: "Tenha paciência!" }
					]
				},
				{ type: 'h', text: 'O pronome vem antes' },
				{
					type: 'p',
					text: "Com *tu* e *voi*, o pronome gruda no fim (*dimmi*, *accomodatevi*). Com *Lei*, nunca: ele vem sempre antes, como no presente. *Mi dica*, *si accomodi*, *si riposi*, *ci metta il ghiaccio*, *lo prenda dopo i pasti*. Para negar, basta *non* na frente: *non si preoccupi* (não se preocupe), *non lo prenda a stomaco vuoto* (não tome em jejum)."
				},
				{
					type: 'dica',
					text: "Várias fórmulas que você já usa são esse imperativo: *Mi dica* (pois não, lição 7), *Scusi* (desculpe), *Senta* (escute), *Si figuri* (imagine, lição 27). Agora você sabe de onde vêm."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O corpo e a dor',
			blocks: [
				{
					type: 'p',
					text: "Para ir ao médico, umas palavras básicas do corpo. Repare nos artigos: *la mano* é feminina, apesar do *-o* (lição 53)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la **te**sta, la **go**la, lo **sto**maco", pt: "a cabeça, a garganta, o estômago" },
						{ it: "la **schie**na, la **pan**cia, il **pet**to", pt: "as costas, a barriga, o peito" },
						{ it: "il **brac**cio, la **ma**no, il **pol**so", pt: "o braço, a mão, o pulso" },
						{ it: "la **gam**ba, il gi**noc**chio, il **pie**de", pt: "a perna, o joelho, o pé", pron: "la gám-ba, il dji-nók-kio, il pié-de" }
					]
				},
				{ type: 'h', text: 'Fare male e farsi male' },
				{
					type: 'p',
					text: "*Fare male* é doer, e funciona como *piacere*: quem sente vem como pronome indireto, e o verbo concorda com a parte que dói. *Mi fa male la testa*, *ti fanno male i piedi?*, *a Rafael fa male il polso*. Já *farsi male* é machucar-se, reflexivo, com *essere* no passado: *mi sono fatto male al ginocchio*."
				},
				{ type: 'h', text: 'Rimanere e quantas vezes' },
				{
					type: 'p',
					text: "*Rimanere* é sinônimo de *restare* (lição 30): *rimango a casa* = *resto a casa*. No passado, *sono rimasto*. Para a frequência, *volte* + *al giorno*, *alla settimana*, *al mese*, *all'anno*: *tre volte al giorno*, *due volte alla settimana*."
				},
				{
					type: 'dica',
					text: "Quando o médico encosta o estetoscópio nas suas costas, talvez peça: *dica trentatré!*. É uma tradição dos consultórios italianos: o som da palavra faz o peito vibrar. Ninguém sabe muito bem se ainda serve para alguma coisa, mas todo italiano já disse trinta e três ao médico."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Entri pure, signora, e si accomodi.", pt: "Entre, senhora, e sente-se." },
				{ it: "Mi fa male la testa da stamattina.", pt: "Estou com dor de cabeça desde hoje de manhã." },
				{ it: "Mi fanno male i piedi: ho camminato tutto il giorno.", pt: "Meus pés estão doendo: andei o dia inteiro." },
				{ it: "Matteo si è fatto male a una mano.", pt: "O Matteo machucou uma mão." },
				{ it: "Prenda una compressa due volte al giorno.", pt: "Tome um comprimido duas vezes por dia." },
				{ it: "Siamo rimasti a casa perché nevicava.", pt: "Ficamos em casa porque estava nevando." },
				{ it: "Dottore, mi dica la verità: è grave?", pt: "Doutor, me diga a verdade: é grave?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Entre, por favor!", parts: ["Entri ", null, "!"], answers: ["pure"] },
				{ pt: "Minha garganta dói.", parts: ["Mi fa ", null, " la gola."], answers: ["male"] },
				{ pt: "A Chiara se machucou.", parts: ["Chiara si è ", null, " male."], answers: ["fatta"] },
				{ pt: "Senhora, fique em casa dois dias.", parts: ["Signora, ", null, " a casa due giorni."], answers: ["rimanga"] },
				{ pt: "Um comprimido três vezes por dia.", parts: ["Una compressa tre ", null, " al giorno."], answers: ["volte"] }
			]
		}
	]
};

const licao79: Lesson = {
	no: 79,
	kind: 'licao',
	title: 'Il malato immaginario',
	titlePt: 'O doente imaginário',
	lines: [
		{
			it: "Chiara, mi tocchi la fronte? Secondo me ho la febbre.",
			pt: "Chiara, põe a mão na minha testa? Acho que estou com febre.",
			lit: "Chiara, me tocas a fronte? Segundo mim tenho a febre.",
			note: "Falso amigo: *la fronte* é a testa, a parte do rosto; a cabeça inteira é *la testa*. *Secondo me* = na minha opinião, acho que."
		},
		{
			it: "Sei freddo come il ghiaccio. Non hai niente.",
			pt: "Você está gelado. Não tem nada.",
			lit: "És frio como o gelo. Não tens nada.",
			note: "Comparação com *come*, como na lição 61."
		},
		{
			it: "Ma ho la tosse! Senti qua.",
			pt: "Mas estou com tosse! Escuta aqui.",
			lit: "Mas tenho a tosse! Sente aqui.",
			note: "*Avere la tosse* = estar com tosse, com artigo e com *avere*, como *avere il raffreddore* (lição 9). *Sentire* serve para ouvir, sentir e perceber: *senti qua* = escuta só."
		},
		{
			it: "Due colpi di tosse. È inverno: mezza Bologna ha il raffreddore.",
			pt: "Duas tossidinhas. É inverno: meia Bolonha está resfriada.",
			lit: "Dois golpes de tosse. É inverno: meia Bolonha tem o resfriado.",
			note: "*Un colpo di tosse* = uma tossida. *Mezzo*, antes do substantivo, concorda: *mezza Bologna*, *mezza porzione* (lição 51)."
		},
		{
			it: "E Rafael ha avuto l'influenza. Me l'ha attaccata, ne sono sicuro.",
			pt: "E o Rafael teve gripe. Ele me passou, tenho certeza.",
			lit: "E Rafael teve a influenza. Ma a pegou, disso sou seguro.",
			note: "*L'influenza* = a gripe; quem está gripado está *influenzato*. *Attaccare* uma doença = passar, contagiar. *Me l'ha attaccata*: pronome combinado (lição 52), com o particípio concordando com *l'influenza*. *Ne sono sicuro* = tenho certeza disso."
		},
		{
			it: "Guarda che io sto benissimo, eh!",
			pt: "Olha que eu estou ótimo, viu!",
			note: "*Guarda che...* = olha que..., para protestar ou chamar a atenção. O *eh* no fim reforça."
		},
		{
			it: "Ho letto su internet che la tosse può essere il sintomo di cento malattie. Addirittura della polmonite!",
			pt: "Li na internet que a tosse pode ser sintoma de cem doenças. Até de pneumonia!",
			note: "*Addirittura* = até, nada menos que: marca algo que vai além do esperado. Sozinho, mostra espanto: *Addirittura?* = Tudo isso? *La malattia* = a doença; *malato* = doente."
		},
		{
			it: "Smettila di cercare i sintomi su internet. Ti fa più male della tosse.",
			pt: "Para de procurar sintomas na internet. Isso te faz mais mal que a tosse.",
			note: "*Smettila!* = para com isso!: *smettere* (lição 72) no imperativo, com o pronome *la* grudado. *Fare male a* alguém também é fazer mal: *il fumo fa male alla salute*. O contrário é *fare bene a*."
		},
		{
			it: "Forse dovrei fare le analisi del sangue. Per sicurezza.",
			pt: "Talvez eu devesse fazer exame de sangue. Por garantia.",
			lit: "Talvez deveria fazer as análises do sangue. Por segurança.",
			note: "*Dovrei* = eu deveria. É um tempo novo, o condicional, o mesmo do *vorrei* que você usa desde a lição 24. Ele se forma como o futuro (lição 64), com outras terminações: *dovrò* → *dovrei*. Você vai vê-lo com calma na lição 84. *Le analisi* = os exames de laboratório."
		},
		{
			it: "Dovresti dormire di più. Stanotte alle due suonavi ancora la chitarra.",
			pt: "Você deveria dormir mais. Esta noite, às duas, você ainda estava tocando violão.",
			note: "*Dovresti* = você deveria: o condicional dá um conselho com jeito. *Suonavi*, no imperfeito (lição 63): a ação em andamento naquele momento."
		},
		{
			it: "Potresti almeno ascoltarmi i polmoni? Tu hai lo stetoscopio.",
			pt: "Você poderia pelo menos auscultar meus pulmões? Você tem estetoscópio.",
			lit: "Poderias ao menos escutar-me os pulmões? Tu tens o estetoscópio.",
			note: "*Potresti* = você poderia, para pedir um favor. *Ascoltarmi i polmoni*: o pronome diz de quem são, e o possessivo some (lição 46)."
		},
		{
			it: "Va bene. Respira... Ancora... Adesso tossisci.",
			pt: "Está bem. Respira... De novo... Agora tosse.",
			note: "Imperativo de *tu* (lição 18): *respira*, *tossisci* (de *tossire*, com *-isc-*)."
		},
		{
			it: "Allora, dottoressa? È grave?",
			pt: "E aí, doutora? É grave?"
		},
		{
			it: "Gravissimo. Ti servono una tisana calda e otto ore di sonno.",
			pt: "Gravíssimo. Você precisa de um chá quente e de oito horas de sono.",
			note: "*La tisana* é o chá de ervas (camomila, erva-cidreira); *il tè* é só o chá preto ou verde. *Ti servono*, no plural, porque são duas coisas (lição 41)."
		},
		{
			it: "Però un giorno a casa dal lavoro mi farebbe bene...",
			pt: "Mas um dia de folga do trabalho me faria bem...",
			lit: "Porém um dia a casa do trabalho me faria bem...",
			note: "*Mi farebbe bene* = me faria bem: *fare bene a*, agora no condicional. *Stare a casa dal lavoro* = faltar ao trabalho, ficar em casa."
		},
		{
			it: "Ecco la verità! Domani c'è la riunione con il capo, vero?",
			pt: "Aí está a verdade! Amanhã tem a reunião com o chefe, não é?"
		},
		{
			it: "...E tu come lo sai?",
			pt: "...E como você sabe?",
			lit: "...E tu como o sabes?"
		},
		{
			it: "È scritto sul calendario del frigo. Su, vai a dormire: domani starai benissimo.",
			pt: "Está escrito no calendário da geladeira. Anda, vai dormir: amanhã você vai estar ótimo.",
			note: "*Su!* = anda!, vamos! (lição 53). *Starai*, futuro de *stare* (lição 70)."
		},
		{
			it: "Fare sport fa bene, fumare fa male.",
			pt: "Praticar esporte faz bem, fumar faz mal.",
			sep: true,
			note: "O infinitivo pode ser sujeito, sem artigo, como em português."
		},
		{
			it: "Ho il raffreddore, ma per fortuna non ho l'influenza.",
			pt: "Estou resfriado, mas por sorte não estou com gripe."
		},
		{
			it: "Per un raffreddore hai chiamato addirittura il medico?",
			pt: "Por causa de um resfriado você chegou a chamar o médico?",
			lit: "Por um resfriado chamaste até o médico?"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Doenças com avere',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 9 você sabe que, em italiano, quase todo mal-estar se *tem*: *ho la febbre*, *ho mal di testa*. Os males do inverno seguem o mesmo modelo, com o artigo definido."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ho la **tos**se.", pt: "Estou com tosse." },
						{ it: "Ho il raffred**do**re.", pt: "Estou resfriado." },
						{ it: "Ho l'influ**en**za.", pt: "Estou gripado." },
						{ it: "Ho il **na**so **chiu**so.", pt: "Estou com o nariz entupido." },
						{ it: "Ho mal di **pan**cia.", pt: "Estou com dor de barriga." }
					]
				},
				{
					type: 'p',
					text: "Para pegar a doença, *prendere*: *ho preso il raffreddore*, *ho preso freddo* (peguei friagem). Para passá-la a alguém, *attaccare*: *me l'ha attaccata*. Estar doente é *essere malato* ou *stare male*; melhorar é *stare meglio*; sarar é *guarire*, com *-isc-* (*guarisco*) e com *essere* no passado: *sono guarito*."
				},
				{
					type: 'dica',
					text: "*Influenza* também tem o sentido do português (*l'influenza della televisione*), mas no inverno, numa conversa sobre saúde, é sempre a gripe."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Fare bene, fare male e um tempo novo',
			blocks: [
				{
					type: 'p',
					text: "*Fare bene a* e *fare male a* dizem o que é bom ou ruim para alguém ou alguma coisa. Com pronome, o indireto: *mi fa bene*, *ti fa male*. Com substantivo, *a*: *fa bene alla salute*, *fa male allo stomaco*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Una passeggiata ti fa bene.", pt: "Uma caminhada te faz bem." },
						{ it: "Il caffè la sera mi fa male.", pt: "Café à noite me faz mal." },
						{ it: "Cercare i sintomi su internet fa male!", pt: "Procurar sintomas na internet faz mal!" }
					]
				},
				{ type: 'h', text: 'Addirittura' },
				{
					type: 'p',
					text: "*Addirittura* marca o exagero, o que passa do esperado: *ha mangiato addirittura tre pizze* (comeu nada menos que três pizzas). Sozinho, com cara de espanto, vira um comentário: *Tre ore di palestra? Addirittura!* (Três horas de academia? Tudo isso!)."
				},
				{ type: 'h', text: 'Dovrei, potresti, farebbe' },
				{
					type: 'p',
					text: "No diálogo de hoje apareceram várias formas do condicional, o tempo do “deveria”, “poderia”, “faria”. Elas usam a mesma base do futuro: *dovr-*, *potr-*, *far-*. Por enquanto, reconheça as três primeiras pessoas; a lição 84 junta tudo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "do**vrei**, do**vre**sti, do**vreb**be", pt: "eu deveria, você deveria, ele deveria" },
						{ it: "po**trei**, po**tre**sti, po**treb**be", pt: "eu poderia, você poderia, ele poderia" },
						{ it: "fa**rei**, fa**re**sti, fa**reb**be", pt: "eu faria, você faria, ele faria" }
					]
				},
				{
					type: 'dica',
					text: "Uma fórmula muito útil para conselhos: *sarebbe meglio* + infinitivo, seria melhor. *Sarebbe meglio andare dal medico.*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ieri ho preso freddo e oggi ho la tosse.", pt: "Ontem peguei friagem e hoje estou com tosse." },
				{ it: "Il caffè dopo cena non mi fa bene.", pt: "Café depois do jantar não me faz bem." },
				{ it: "Dovresti andare dal medico.", pt: "Você deveria ir ao médico." },
				{ it: "Potresti chiudere la finestra? Ho freddo.", pt: "Você poderia fechar a janela? Estou com frio." },
				{ it: "Mezza classe ha l'influenza.", pt: "Metade da turma está gripada." },
				{ it: "Ha mangiato addirittura tre pizze!", pt: "Ele comeu nada menos que três pizzas!" },
				{ it: "Una tisana calda ti farebbe bene.", pt: "Um chá quente te faria bem." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Estou com tosse.", parts: ["Ho la ", null, "."], answers: ["tosse"] },
				{ pt: "Fumar faz mal à saúde.", parts: ["Fumare fa ", null, " alla salute."], answers: ["male"] },
				{ pt: "Matteo, você deveria dormir mais.", parts: ["Matteo, ", null, " dormire di più."], answers: ["dovresti"] },
				{ pt: "Chiara, você poderia me ajudar?", parts: ["Chiara, ", null, " aiutarmi?"], answers: ["potresti"] },
				{ pt: "Um dia de descanso me faria bem.", parts: ["Un giorno di riposo mi ", null, " bene."], answers: ["farebbe"] }
			]
		}
	]
};

const licao80: Lesson = {
	no: 80,
	kind: 'licao',
	title: 'In palestra',
	titlePt: 'Na academia',
	lines: [
		{
			it: "Buongiorno. Vorremmo iscriverci in palestra.",
			pt: "Bom dia. Nós gostaríamos de nos matricular na academia.",
			lit: "Bom dia. Quereríamos inscrever-nos em academia.",
			note: "*Vorremmo* = gostaríamos, queríamos: o condicional de *volere* para *noi*, o *vorrei* (lição 24) no plural. *Iscriversi* = inscrever-se, matricular-se. Falso amigo: *la palestra* é a academia de ginástica; uma palestra é *una conferenza*."
		},
		{
			it: "Benvenuti! Buoni propositi per l'anno nuovo?",
			pt: "Bem-vindos! Resoluções de ano-novo?",
			lit: "Bem-vindos! Bons propósitos para o ano novo?",
			note: "*I buoni propositi* são as resoluções de ano-novo: fazer academia, comer melhor, estudar italiano todo dia..."
		},
		{
			it: "Esatto. Durante le feste sono ingrassato di quattro chili.",
			pt: "Exato. Nas festas de fim de ano engordei quatro quilos.",
			lit: "Exato. Durante as festas sou engordado de quatro quilos.",
			note: "*Ingrassare* (engordar) e *dimagrire* (emagrecer) fazem o passado com *essere*, porque a mudança acontece com o próprio sujeito: *sono ingrassato*, *Chiara è dimagrita*. A quantidade vem com *di*: *di quattro chili*. *Le feste* são as festas de fim de ano, do Natal até 6 de janeiro."
		},
		{
			it: "E io, da quando sono in Italia, sono ingrassato di sei. Colpa dei tortellini!",
			pt: "E eu, desde que cheguei à Itália, engordei seis. Culpa dos tortellini!",
			lit: "E eu, desde quando sou em Itália, sou engordado de seis. Culpa dos tortellini!",
			note: "*Da quando* + presente: desde que, para o que continua (lição 20). *Colpa di* = culpa de."
		},
		{
			it: "Allora, vediamo. Che sport fate?",
			pt: "Então, vamos ver. Que esporte vocês praticam?",
			note: "Para esporte em geral, *fare*: *fare sport*, *fare nuoto*; para jogos com bola, *giocare a*: *giocare a calcio*."
		},
		{
			it: "Io suono la chitarra due ore al giorno. Vale?",
			pt: "Eu toco violão duas horas por dia. Conta?",
			lit: "Eu toco a guitarra duas horas ao dia. Vale?"
		},
		{
			it: "Purtroppo no! Potrei sapere che cosa mangiate di solito?",
			pt: "Infelizmente não! Eu poderia saber o que vocês costumam comer?",
			lit: "Infelizmente não! Poderia saber que coisa comeis de habitual?",
			note: "*Potrei* = eu poderia. Com o condicional, a pergunta fica mais educada do que com *posso*. *Di solito* = normalmente, de costume (lição 29)."
		},
		{
			it: "A pranzo un panino al bar, la sera un bel piatto di pasta e il sabato la pizza.",
			pt: "No almoço um sanduíche no bar, à noite um belo prato de massa e no sábado pizza."
		},
		{
			it: "La pasta va bene, il problema è la quantità. E il movimento: invece di prendere l'autobus, andate a piedi!",
			pt: "A massa tudo bem, o problema é a quantidade. E o movimento: em vez de pegar o ônibus, vão a pé!",
			note: "*Invece di* + infinitivo = em vez de: *invece di prendere l'autobus*. *Andate*, imperativo de *voi* (lição 18)."
		},
		{
			it: "Io di solito vado in bici, ma il medico me l'ha vietata per una settimana.",
			pt: "Eu normalmente vou de bicicleta, mas o médico me proibiu por uma semana.",
			lit: "Eu de habitual vou em bici, mas o médico ma a vetou por uma semana.",
			note: "*Me l'ha vietata*: *mi* + *la*, com o particípio concordando com *la bici* (lição 52). *Vietare* = proibir; daí o *vietato fumare* das placas. É o pulso da lição 78."
		},
		{
			it: "Allora fate le scale invece dell'ascensore. E più acqua e meno birra.",
			pt: "Então subam pela escada em vez de pegar o elevador. E mais água e menos cerveja.",
			lit: "Então fazei as escadas em vez do elevador. E mais água e menos cerveja.",
			note: "Com substantivo, *invece di* + artigo: *invece dell'ascensore*, *invece del caffè*. *Fare le scale* = subir ou descer pela escada."
		},
		{
			it: "Meno birra? Questo mi dispiacerebbe molto...",
			pt: "Menos cerveja? Isso me deixaria muito triste...",
			lit: "Menos cerveja? Isto me desagradaria muito...",
			note: "*Mi dispiacerebbe*: o condicional de *dispiacere* (lição 47), me desagradaria."
		},
		{
			it: "Chi si muove si ammala di meno. E d'inverno conta!",
			pt: "Quem se mexe adoece menos. E no inverno isso conta!",
			note: "*Ammalarsi* = adoecer, ficar doente. É reflexivo: *mi ammalo*, *mi sono ammalato*. *Muoversi* = mexer-se. *D'inverno* = no inverno (lição 74)."
		},
		{
			it: "È vero. Quest'inverno mi sono già ammalato due volte.",
			pt: "É verdade. Neste inverno eu já fiquei doente duas vezes."
		},
		{
			it: "Senta, Le dispiacerebbe farci vedere la sala pesi?",
			pt: "Escute, a senhora se importaria de nos mostrar a sala de musculação?",
			lit: "Sinta, Lhe desagradaria fazer-nos ver a sala pesos?",
			note: "*Senta* (de *sentire*) é o imperativo de *Lei* usado para chamar a atenção: escute, por favor. *Le dispiacerebbe* + infinitivo = a senhora se importaria de...: um dos pedidos mais educados do italiano. Com *tu*, *ti dispiacerebbe...?*."
		},
		{
			it: "Volentieri, venite. Tre volte alla settimana, un'ora, e fra due mesi sarete dimagriti tutti e due.",
			pt: "Com prazer, venham. Três vezes por semana, uma hora, e daqui a dois meses vocês dois vão ter emagrecido.",
			note: "*Sarete dimagriti*: futuro anterior (lição 70) de *dimagrire*, com *essere*. *Tutti e due* = os dois, ambos."
		},
		{
			it: "Tre volte? Non basterebbe una volta sola, un po' più lunga?",
			pt: "Três vezes? Não bastaria uma vez só, um pouco mais longa?",
			note: "*Basterebbe*, de *bastare* (lição 48): bastaria."
		},
		{
			it: "Per cominciare sì. Ma credetemi: la costanza è tutto!",
			pt: "Para começar, sim. Mas acreditem: a constância é tudo!",
			note: "*Credetemi* = acreditem em mim: imperativo de *voi* com o pronome grudado (lição 71)."
		},
		{
			it: "Vorrei un'informazione, per favore. A che ora apre la palestra?",
			pt: "Eu queria uma informação, por favor. A que horas abre a academia?",
			sep: true
		},
		{
			it: "Invece di guardare la televisione, facciamo una passeggiata.",
			pt: "Em vez de ver televisão, vamos dar uma caminhada.",
			note: "*Facciamo*: a forma de *noi* do presente serve de convite, “vamos fazer”."
		},
		{
			it: "Durante gli esami Chiara è dimagrita di due chili.",
			pt: "Durante as provas, a Chiara emagreceu dois quilos."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Pedir com educação',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 24 você pede *vorrei un caffè* em vez de *voglio un caffè*. Hoje você descobriu que *vorrei* não está sozinho: todo verbo tem essa forma, o condicional, e ela é a ferramenta número um da cortesia italiana. O pedido fica mais suave, como o nosso “gostaria”, “poderia”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Vorremmo iscriverci in palestra.", pt: "Gostaríamos de nos matricular na academia." },
						{ it: "Potrei sapere che cosa mangiate?", pt: "Eu poderia saber o que vocês comem?" },
						{ it: "Potrebbe ripetere, per favore?", pt: "O senhor poderia repetir, por favor?" },
						{ it: "Le dispiacerebbe farci vedere la sala?", pt: "A senhora se importaria de nos mostrar a sala?" },
						{ it: "Mi piacerebbe imparare a nuotare.", pt: "Eu gostaria de aprender a nadar." }
					]
				},
				{
					type: 'p',
					text: "Compare: *puoi aiutarmi?* (você pode me ajudar?) é normal entre amigos; *potresti aiutarmi?* é mais gentil; com *Lei*, *potrebbe aiutarmi?*. Para um desejo, *mi piacerebbe* (eu gostaria), que concorda como *piacere*: *mi piacerebbero due settimane di vacanza*."
				},
				{
					type: 'dica',
					text: "Atenção à pronúncia do *noi*: *vorremmo*, *potremmo*, com *mm* dobrado. O futuro tem um *m* só: *vorremo*, *potremo* (lição 70). Dobrar ou não muda o tempo do verbo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Engordar, emagrecer, adoecer; invece di',
			blocks: [
				{
					type: 'p',
					text: "Os verbos que descrevem uma mudança que acontece com o sujeito fazem o passado com *essere*, e o particípio concorda. Hoje entraram três, e você já conhecia *diventare* (tornar-se)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Matteo è ingrassato.", pt: "O Matteo engordou." },
						{ it: "Chiara è dimagrita.", pt: "A Chiara emagreceu." },
						{ it: "Ci siamo ammalati tutti.", pt: "Todos nós ficamos doentes." },
						{ it: "Rafael è guarito in tre giorni.", pt: "O Rafael sarou em três dias." }
					]
				},
				{
					type: 'p',
					text: "*Dimagrire* e *guarire* têm *-isc-* no presente: *dimagrisco*, *guarisco*. E *ammalarsi* é reflexivo, como tantos verbos de mudança: *mi ammalo spesso* (fico doente com frequência)."
				},
				{ type: 'h', text: 'Invece di' },
				{
					type: 'p',
					text: "*Invece di* = em vez de. Antes de infinitivo, direto: *invece di prendere l'autobus*. Antes de substantivo, junta-se ao artigo: *invece dell'ascensore*, *invece della birra*. Sozinho, *invece* quer dizer “ao contrário”, “já”: *io bevo vino, Chiara invece beve acqua* (eu bebo vinho, já a Chiara bebe água)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vorrei prenotare una visita, per favore.", pt: "Eu queria marcar uma consulta, por favor." },
				{ it: "Potrebbe parlare più piano?", pt: "O senhor poderia falar mais devagar?" },
				{ it: "Le dispiacerebbe chiudere la porta?", pt: "O senhor se importaria de fechar a porta?" },
				{ it: "Mio padre è dimagrito molto.", pt: "Meu pai emagreceu muito." },
				{ it: "Invece del vino, prendo un'acqua minerale.", pt: "Em vez do vinho, vou tomar uma água mineral." },
				{ it: "Mi sono ammalato proprio il giorno della festa.", pt: "Fiquei doente justo no dia da festa." },
				{ it: "Mi piacerebbe imparare a nuotare.", pt: "Eu gostaria de aprender a nadar." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Nós gostaríamos de nos matricular.", parts: ["Noi ", null, " iscriverci."], answers: ["vorremmo"] },
				{ pt: "Engordei três quilos.", parts: ["Sono ", null, " di tre chili."], answers: ["ingrassato"] },
				{ pt: "Em vez de pegar o ônibus, vou a pé.", parts: ["Invece ", null, " prendere l'autobus, vado a piedi."], answers: ["di"] },
				{ pt: "O senhor se importaria de esperar?", parts: ["Le ", null, " aspettare?"], answers: ["dispiacerebbe"] },
				{ pt: "A Chiara emagreceu.", parts: ["Chiara è ", null, "."], answers: ["dimagrita"] }
			]
		}
	]
};

const licao81: Lesson = {
	no: 81,
	kind: 'licao',
	title: 'Innamorata del dentista',
	titlePt: 'Apaixonada pelo dentista',
	lines: [
		{
			it: "Ciao, ragazzi! Indovinate dove sono stata oggi.",
			pt: "Oi, gente! Adivinhem onde eu estive hoje.",
			note: "*Indovinate* = adivinhem, imperativo de *voi* de *indovinare*. *Sono stata*: o passado de *essere* também se faz com *essere* (lição 31)."
		},
		{
			it: "Dal dentista, finalmente! Da quanto tempo avevi mal di denti?",
			pt: "No dentista, finalmente! Fazia quanto tempo que você estava com dor de dente?",
			note: "*Da quanto tempo* + imperfeito: o que vinha durando até aquele momento (lição 64)."
		},
		{
			it: "Da tre settimane. Lo so, sarei dovuta andare subito.",
			pt: "Três semanas. Eu sei, eu devia ter ido logo.",
			lit: "Desde três semanas. O sei, seria devida ir súbito.",
			note: "*Sarei dovuta andare* = eu deveria ter ido. É o condicional composto: auxiliar no condicional (*sarei*, *avrei*) + particípio. Fala do que devia ter acontecido e não aconteceu. Com modal + *andare*, o auxiliar é *essere* e o particípio concorda (lição 33). Mais sobre ele na lição 84."
		},
		{
			it: "E com'è andata? Ti ha fatto male?",
			pt: "E como foi? Doeu?",
			lit: "E como é andada? Te fez mal?",
			note: "*Ti ha fatto male?* = ele te machucou?, doeu? (*fare male*, lição 78)."
		},
		{
			it: "Per niente. Appena mi sono seduta sulla poltrona, il dolore è sparito.",
			pt: "Nem um pouco. Assim que me sentei na cadeira, a dor sumiu.",
			lit: "Por nada. Apenas me sou sentada sobre a poltrona, a dor é sumida.",
			note: "*Appena* + passado = assim que, logo que. Não confunda com *sono appena arrivati*, acabaram de chegar (lições 41 e 73). *La poltrona* é também a cadeira do dentista. *Sparire* (sumir) vai com *essere*."
		},
		{
			it: "Capita spesso: la paura del dentista fa miracoli.",
			pt: "Acontece muito: o medo de dentista faz milagres.",
			note: "*Capitare* = acontecer, por acaso. No passado, com *essere*: *mi è capitato*. É muito comum na fala: *sono cose che capitano*, são coisas que acontecem."
		},
		{
			it: "Ma non si tratta della paura. Si tratta del dentista!",
			pt: "Mas a questão não é o medo. A questão é o dentista!",
			lit: "Mas não se trata do medo. Se trata do dentista!",
			note: "*Si tratta di* = trata-se de, a questão é. É impessoal e não leva sujeito: diz-se *si tratta di un errore*, nunca “il problema si tratta di...”."
		},
		{
			it: "Occhi azzurri, voce calma e una mano leggerissima. Mi sono innamorata!",
			pt: "Olhos azuis, voz calma e uma mão levíssima. Estou apaixonada!",
			lit: "Olhos azuis, voz calma e uma mão levíssima. Me sou enamorada!",
			note: "*Innamorarsi di* = apaixonar-se por: *mi sono innamorata di lui*. Repare no *di*, e não *per*. *Mi sono innamorata* conta o momento; *sono innamorata* descreve o estado."
		},
		{
			it: "Ogni volta la stessa storia. A ottobre era l'istruttore di nuoto.",
			pt: "Toda vez a mesma história. Em outubro era o professor de natação.",
			note: "*Ogni* = cada, todo. Não muda e vai sempre com o singular: *ogni volta*, *ogni giorno*, *ogni settimana*."
		},
		{
			it: "Questa volta è diverso! Si chiama Daniele, il dottor Conti.",
			pt: "Desta vez é diferente! Ele se chama Daniele, o doutor Conti."
		},
		{
			it: "E lui? Ti ha notata?",
			pt: "E ele? Reparou em você?",
			lit: "E ele? Te notou?",
			note: "*Notata*: com o pronome direto *ti*, o particípio pode concordar com a pessoa (lição 34). *Ti ha notato* também está certo."
		},
		{
			it: "Mi ha detto: «Signorina, Lei ha una carie e un sorriso bellissimo».",
			pt: "Ele me disse: “Senhorita, a senhora tem uma cárie e um sorriso lindo”.",
			note: "*La carie* é invariável: *una carie*, *due carie*."
		},
		{
			it: "Una carie e un complimento nella stessa frase: il peggiore dei seduttori!",
			pt: "Uma cárie e um elogio na mesma frase: o pior dos sedutores!",
			note: "*Il peggiore* = o pior. É adjetivo e concorda: *la peggiore*, *i peggiori* (lição 63)."
		},
		{
			it: "E adesso? Come fai a rivederlo?",
			pt: "E agora? Como você vai fazer para vê-lo de novo?",
			lit: "E agora? Como fazes a revê-lo?",
			note: "*Come fai a* + infinitivo = como você consegue, como vai fazer para: *come fai a studiare con la musica?*. Com *Lei*, *come fa a...?*."
		},
		{
			it: "Facile: ho dimenticato il portafoglio nello studio. Domani ci torno!",
			pt: "Fácil: esqueci a carteira no consultório. Amanhã eu volto lá!",
			note: "*Lo studio* do médico ou do dentista é o consultório. *Ci torno* = volto lá. A Serena esquecendo a carteira não é novidade (lição 32); a novidade é fazer de propósito."
		},
		{
			it: "Apposta? Sei peggio di un film romantico!",
			pt: "De propósito? Você é pior que um filme romântico!",
			note: "*Peggio* é o advérbio (*sto peggio*, estou pior), mas depois de *essere*, na fala, faz também papel de adjetivo: *sei peggio di...*. *Apposta* = de propósito (lição 44)."
		},
		{
			it: "Io al tuo posto gli avrei chiesto il numero di telefono.",
			pt: "No seu lugar, eu teria pedido o telefone dele.",
			lit: "Eu ao teu lugar lhe teria pedido o número de telefone.",
			note: "*Avrei chiesto* = eu teria pedido: condicional composto com *avere*. *Al tuo posto* = no seu lugar."
		},
		{
			it: "Non serve: ho già il prossimo appuntamento. Per un'altra carie!",
			pt: "Não precisa: já tenho a próxima consulta. Para outra cárie!",
			note: "*L'appuntamento* serve para consulta marcada e para encontro romântico. No caso da Serena, as duas coisas."
		},
		{
			it: "Appena arrivo a casa, ti scrivo.",
			pt: "Assim que eu chegar em casa, te escrevo.",
			sep: true,
			note: "Para o futuro, *appena* + presente (ou futuro: *appena arriverò*). Em português, futuro do subjuntivo: “assim que eu chegar”."
		},
		{
			it: "Mi sarebbe piaciuto venire, ma avevo la febbre.",
			pt: "Eu teria gostado de ir, mas estava com febre.",
			note: "*Piacere* faz o passado com *essere*, também no condicional composto: *mi sarebbe piaciuto*."
		},
		{
			it: "Oggi sto peggio di ieri: ho la tosse e il naso chiuso.",
			pt: "Hoje estou pior que ontem: estou com tosse e com o nariz entupido."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Appena e ogni',
			blocks: [
				{
					type: 'p',
					text: "*Appena* é uma palavrinha de várias caras. Você já a conhece como “acabar de”: *sono appena arrivati* (acabaram de chegar, lições 41 e 73). Hoje ela apareceu como “assim que”: com o passado e também com o presente, para falar do futuro."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Appena mi sono seduta, il dolore è sparito.", pt: "Assim que me sentei, a dor sumiu." },
						{ it: "Appena arrivo a casa, ti scrivo.", pt: "Assim que eu chegar em casa, te escrevo." },
						{ it: "Il film è appena cominciato.", pt: "O filme acabou de começar." }
					]
				},
				{
					type: 'p',
					text: "Para o futuro, o italiano usa o presente ou o futuro depois de *appena*: *appena arrivo* ou *appena arriverò*. Nunca algo parecido com o nosso “chegar”. Também se diz *non appena*, com o mesmo sentido: *non appena arrivo*."
				},
				{ type: 'h', text: 'Ogni' },
				{
					type: 'p',
					text: "*Ogni* (cada, todo) é invariável e pede o singular: *ogni giorno* (todo dia), *ogni volta* (toda vez), *ogni mattina*, *ogni tanto* (de vez em quando). Para “todos os dias”, o italiano também tem *tutti i giorni*, com o plural (lição 27). As duas formas valem o mesmo."
				},
				{
					type: 'dica',
					text: "*Ogni due giorni* = a cada dois dias; *ogni tre ore* = de três em três horas. Aqui, sim, vem um plural, porque há um número."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Peggio, peggiore e outras peças',
			blocks: [
				{
					type: 'p',
					text: "Na lição 63 você viu a dupla *migliore/meglio* e *peggiore/peggio*. A regra de bolso: *peggiore* é adjetivo e acompanha um substantivo (*il peggiore dei seduttori*, *la giornata peggiore*); *peggio* é advérbio e acompanha um verbo (*sto peggio*, *canta peggio di me*). Na conversa, *peggio* aparece também depois de *essere*: *sei peggio di un film romantico*."
				},
				{ type: 'h', text: 'Expressões do diálogo' },
				{
					type: 'exemplos',
					items: [
						{ it: "Si tratta di un errore.", pt: "Trata-se de um erro." },
						{ it: "Mi è capitato una volta.", pt: "Aconteceu comigo uma vez." },
						{ it: "Come fai a saperlo?", pt: "Como você sabe disso?" },
						{ it: "Si è innamorata del dentista.", pt: "Ela se apaixonou pelo dentista." }
					]
				},
				{
					type: 'p',
					text: "No dentista: *il dente* (o dente), *la carie* (a cárie), *l'otturazione* (a obturação), *la pulizia dei denti* (a limpeza), *l'apparecchio* (o aparelho). E *il mal di denti*, a dor de dente, sempre com *avere*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Appena ho finito l'esame, ho chiamato mia madre.", pt: "Assim que terminei a prova, liguei para minha mãe." },
				{ it: "Ogni mattina Rafael beve un caffè al bar.", pt: "Toda manhã o Rafael toma um café no bar." },
				{ it: "Mi è capitato di incontrare Serena in biblioteca.", pt: "Aconteceu de eu encontrar a Serena na biblioteca." },
				{ it: "Si tratta di un problema serio.", pt: "Trata-se de um problema sério." },
				{ it: "Come fai a dormire con questo rumore?", pt: "Como você consegue dormir com esse barulho?" },
				{ it: "Questo è il caffè peggiore della città.", pt: "Este é o pior café da cidade." },
				{ it: "Avrei dovuto prendere l'ombrello!", pt: "Eu devia ter pegado o guarda-chuva!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Te ligo assim que eu chegar.", parts: ["Ti chiamo ", null, " arrivo."], answers: ["appena"] },
				{ pt: "Ela se apaixonou pelo dentista.", parts: ["Si è innamorata ", null, " dentista."], answers: ["del"] },
				{ pt: "Vou à academia toda semana.", parts: ["Vado in palestra ", null, " settimana."], answers: ["ogni"] },
				{ pt: "Trata-se de um erro.", parts: ["Si ", null, " di un errore."], answers: ["tratta"] },
				{ pt: "Hoje estou pior.", parts: ["Oggi sto ", null, "."], answers: ["peggio"] }
			]
		}
	]
};

const licao82: Lesson = {
	no: 82,
	kind: 'licao',
	title: 'Le mani bucate',
	titlePt: 'As mãos furadas',
	lines: [
		{
			it: "Allora, ultima domanda: quante ossa ci sono nella mano?",
			pt: "Então, última pergunta: quantos ossos há na mão?",
			note: "*L'osso* (o osso) faz o plural em *-a*, feminino: *le ossa*, como *l'uovo, le uova* (lição 40). Várias partes do corpo fazem assim, como você vai ver hoje."
		},
		{
			it: "Ventisette. Basta, Giulia, ho la testa che mi scoppia!",
			pt: "Vinte e sete. Chega, Giulia, minha cabeça vai explodir!",
			lit: "Vinte e sete. Basta, Giulia, tenho a cabeça que me estoura!",
			note: "*Scoppiare* = estourar, explodir. *Ho la testa che mi scoppia* serve para cansaço de estudo e para dor de cabeça forte."
		},
		{
			it: "Ciao, ragazze! Ancora anatomia? Siete proprio in gamba.",
			pt: "Oi, meninas! Anatomia de novo? Vocês são mesmo umas craques.",
			note: "*In gamba* = capaz, esperto (lição 74). Literalmente “em perna”: a primeira expressão com o corpo de hoje."
		},
		{
			it: "Rafael! Cammini a piedi nudi con questo freddo?",
			pt: "Rafael! Você está andando descalço com este frio?",
			lit: "Rafael! Caminhas a pés nus com este frio?",
			note: "*A piedi nudi* = descalço. A preposição *a* + parte do corpo + adjetivo diz de que jeito: *a bocca aperta* (de boca aberta), *a braccia aperte* (de braços abertos), *a occhi chiusi* (de olhos fechados)."
		},
		{
			it: "In Brasile, in casa, stiamo sempre scalzi.",
			pt: "No Brasil, em casa, a gente vive descalço.",
			lit: "Em Brasil, em casa, estamos sempre descalços.",
			note: "*Scalzo* = descalço, outro jeito de dizer *a piedi nudi*."
		},
		{
			it: "Qui il pavimento è gelato. Mia nonna direbbe che ti viene il mal di pancia!",
			pt: "Aqui o chão está gelado. A minha avó diria que você vai ter dor de barriga!",
			lit: "Aqui o pavimento é gelado. Minha avó diria que te vem o mal de barriga!",
			note: "*Direbbe* = diria, condicional de *dire*. *Mi viene* = me dá, me vem: *mi viene fame*, *mi viene sonno*. *Il pavimento* é o piso, o chão de dentro de casa. Falso amigo: o pavimento da rua é *l'asfalto* (ou *la pavimentazione*), e o pavimento de um prédio, o andar, é *il piano*."
		},
		{
			it: "Ragazzi, guardate: scarpe da corsa nuove! Duecento euro.",
			pt: "Gente, olhem: tênis de corrida novos! Duzentos euros.",
			lit: "Rapazes, olhai: sapatos de corrida novos! Duzentos euros.",
			note: "*Da* diz para que serve uma coisa: *scarpe da corsa*, *scarpe da ginnastica*, *sala da pranzo*."
		},
		{
			it: "Duecento? Hai proprio le mani bucate!",
			pt: "Duzentos? Você é mesmo mão-aberta!",
			lit: "Duzentos? Tens mesmo as mãos furadas!",
			note: "*Avere le mani bucate* = gastar demais, não conseguir guardar dinheiro. *Bucato* = furado (*il buco* é o furo)."
		},
		{
			it: "Le mani bucate? Ti sei fatto male?",
			pt: "As mãos furadas? Você se machucou?"
		},
		{
			it: "No, Rafael! Vuol dire che spende troppo. I soldi gli scappano tra le dita.",
			pt: "Não, Rafael! Quer dizer que ele gasta demais. O dinheiro escapa entre os dedos dele.",
			note: "*Le dita*, plural de *il dito*, o dedo. *Gli scappano*: o pronome indireto mostra de quem são os dedos, sem possessivo."
		},
		{
			it: "Ma sono per la palestra! Costano un occhio della testa, è vero, ma sono comodissime.",
			pt: "Mas são para a academia! Custam os olhos da cara, é verdade, mas são confortabilíssimos.",
			lit: "Mas são para a academia! Custam um olho da cabeça, é verdade, mas são comodíssimas.",
			note: "*Costare un occhio della testa* = custar os olhos da cara. Em italiano é um olho só, e da cabeça."
		},
		{
			it: "Da noi si dice «custar os olhos da cara». Quasi uguale!",
			pt: "Lá na minha terra se diz “custar os olhos da cara”. Quase igual!",
			note: "*Da noi* = na nossa terra, entre nós, como *da noi* na empresa da lição 47."
		},
		{
			it: "E quando uno è distratto, come dite? Noi diciamo che ha la testa tra le nuvole.",
			pt: "E quando alguém é distraído, como vocês dizem? A gente diz que ele está com a cabeça nas nuvens.",
			lit: "E quando um é distraído, como dizeis? Nós dizemos que tem a cabeça entre as nuvens.",
			note: "*Uno*, aqui, é “alguém”, uma pessoa qualquer. *Avere la testa tra le nuvole* = estar com a cabeça nas nuvens, distraído."
		},
		{
			it: "Noi diciamo «estar no mundo da lua». Come Serena da quando ha conosciuto il dentista!",
			pt: "A gente diz “estar no mundo da lua”. Como a Serena desde que conheceu o dentista!"
		},
		{
			it: "Ieri l'ho vista in centro: è rimasta a bocca aperta davanti a una vetrina di spazzolini!",
			pt: "Ontem eu a vi no centro: ela ficou de boca aberta diante de uma vitrine de escovas de dente!",
			note: "*Rimanere a bocca aperta* = ficar de boca aberta, de espanto ou de encanto. *Rimanere* (lição 78) vai com *essere*: *è rimasta*. *Lo spazzolino* = a escova de dente (lição 41)."
		},
		{
			it: "Povera Serena! Ma basta chiacchiere: domani ho l'esame.",
			pt: "Coitada da Serena! Mas chega de conversa: amanhã tenho a prova.",
			note: "*Povero*, antes do nome, é “coitado”; depois, “pobre de dinheiro”: *un ragazzo povero* (lição 76). *Le chiacchiere* = conversa fiada, papo."
		},
		{
			it: "In bocca al lupo, allora!",
			pt: "Boa sorte, então!",
			note: "Mais uma com o corpo, a da lição 33: *in bocca al lupo*, e a resposta é *crepi!*."
		},
		{
			it: "Crepi! E tu mettiti subito le pantofole!",
			pt: "Valeu! E você, ponha já os chinelos!",
			note: "*Mettiti*, imperativo de *mettersi* com o pronome grudado (lição 71). *Le pantofole* = os chinelos de ficar em casa."
		},
		{
			it: "Quando ho visto il conto, sono rimasto a bocca aperta.",
			pt: "Quando vi a conta, fiquei de boca aberta.",
			sep: true
		},
		{
			it: "Mi fanno male le ginocchia e le braccia.",
			pt: "Meus joelhos e meus braços estão doendo.",
			note: "*Le ginocchia*, *le braccia*: os plurais em *-a* são femininos, e o adjetivo concorda no feminino: *le braccia stanche*."
		},
		{
			it: "Il nonno di Matteo mi ha accolto a braccia aperte.",
			pt: "O avô do Matteo me recebeu de braços abertos.",
			note: "*Accolto*, de *accogliere* (lição 47)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os plurais do corpo',
			blocks: [
				{
					type: 'p',
					text: "Na lição 40 você conheceu alguns masculinos que viram femininos no plural, com *-a*: *l'uovo, le uova*; *il dito, le dita* (a Chiara estava com *le dita congelate*). Esse grupo pequeno tem muitas partes do corpo, quase sempre as que vêm em par ou em conjunto."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **brac**cio → le **brac**cia", pt: "o braço → os braços" },
						{ it: "il **di**to → le **di**ta", pt: "o dedo → os dedos" },
						{ it: "il gi**noc**chio → le gi**noc**chia", pt: "o joelho → os joelhos", pron: "dji-nók-kio, dji-nók-kia" },
						{ it: "il **lab**bro → le **lab**bra", pt: "o lábio → os lábios" },
						{ it: "l'**os**so → le **os**sa", pt: "o osso → os ossos" }
					]
				},
				{
					type: 'p',
					text: "O adjetivo e o artigo vão para o feminino plural: *le braccia aperte*, *le dita lunghe*. Parecida, mas regular, é *l'orecchio* (a orelha, o ouvido), que faz *le orecchie*. E *la mano*, feminina com *-o*, faz *le mani*."
				},
				{ type: 'h', text: 'A + corpo + adjetivo' },
				{
					type: 'p',
					text: "Para dizer em que posição ou estado alguém faz algo, o italiano usa *a* sem artigo: *a piedi nudi* (descalço), *a bocca aperta* (de boca aberta), *a braccia aperte* (de braços abertos), *a occhi chiusi* (de olhos fechados), *a mani vuote* (de mãos vazias). Em português trocamos o *a* por “de”."
				},
				{
					type: 'dica',
					text: "*A occhi chiusi* também tem sentido figurado: sem pensar, com total confiança: *conosco Bologna a occhi chiusi*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões com o corpo',
			blocks: [
				{
					type: 'p',
					text: "Como o português, o italiano está cheio de expressões com o corpo. Algumas são quase iguais às nossas, outras surpreendem. Estas são das mais usadas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "avere le mani bucate", pt: "ser mão-aberta, gastar demais" },
						{ it: "costare un occhio della testa", pt: "custar os olhos da cara" },
						{ it: "avere la testa tra le nuvole", pt: "estar no mundo da lua" },
						{ it: "in un batter d'occhio", pt: "num piscar de olhos" },
						{ it: "non avere peli sulla lingua", pt: "não ter papas na língua" },
						{ it: "Acqua in bocca!", pt: "Bico calado! (para guardar segredo)" }
					]
				},
				{
					type: 'p',
					text: "E ainda: *a occhio e croce* (mais ou menos, a olho), *avere un nodo alla gola* (ter um nó na garganta), *essere in gamba* (ser capaz, lição 74), *in bocca al lupo* (boa sorte, lição 33). Repare que *non avere peli sulla lingua* é literalmente “não ter pelos na língua”: mesma ideia, outra imagem."
				},
				{
					type: 'dica',
					text: "Expressões assim soam naturais quando usadas na hora certa e com moderação. Comece pelas que se parecem com as nossas: *costa un occhio della testa* entra no seu italiano hoje mesmo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Le bambine correvano a piedi nudi sulla spiaggia.", pt: "As meninas corriam descalças na praia." },
				{ it: "Questa borsa costa un occhio della testa.", pt: "Esta bolsa custa os olhos da cara." },
				{ it: "Mi fa male un dito.", pt: "Um dedo meu está doendo." },
				{ it: "Mio fratello ha le mani bucate: spende tutto lo stipendio.", pt: "Meu irmão é mão-aberta: gasta o salário inteiro." },
				{ it: "Oggi hai la testa tra le nuvole!", pt: "Hoje você está no mundo da lua!" },
				{ it: "Dopo la palestra ho le braccia stanche.", pt: "Depois da academia, fico com os braços cansados." },
				{ it: "I bambini sono rimasti a bocca aperta.", pt: "As crianças ficaram de boca aberta." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Ela anda descalça em casa.", parts: ["Cammina a piedi ", null, " in casa."], answers: ["nudi"] },
				{ pt: "Meus joelhos doem.", parts: ["Mi fanno male le ", null, "."], answers: ["ginocchia"] },
				{ pt: "A mão tem cinco dedos.", parts: ["La mano ha cinque ", null, "."], answers: ["dita"] },
				{ pt: "Custa os olhos da cara.", parts: ["Costa un occhio della ", null, "."], answers: ["testa"] },
				{ pt: "Fiquei de boca aberta.", parts: ["Sono rimasto a ", null, " aperta."], answers: ["bocca"] }
			]
		}
	]
};

const licao83: Lesson = {
	no: 83,
	kind: 'licao',
	title: 'Al pronto soccorso',
	titlePt: 'No pronto-socorro',
	lines: [
		{
			it: "Ahi! Chiara, guarda quanto sangue! Chiamo il 112?",
			pt: "Ai! Chiara, olha quanto sangue! Ligo para o 112?",
			note: "*Il sangue* é masculino. O *112* (*centododici*) é o número único de emergência europeu: ambulância, polícia e bombeiros."
		},
		{
			it: "Per un taglio al dito? Il 112 si chiama solamente per le emergenze vere.",
			pt: "Por um corte no dedo? O 112 só se chama para emergências de verdade.",
			note: "*Solamente* = somente. Muitos advérbios se formam como em português: adjetivo no feminino + *-mente*. *Solo* → *sola* → *solamente*; *vero* → *veramente*. *Il taglio* = o corte."
		},
		{
			it: "Ma non si ferma! Andiamo al pronto soccorso, subito.",
			pt: "Mas não para! Vamos ao pronto-socorro, já.",
			note: "*Fermarsi* = parar. *Il pronto soccorso* = o pronto-socorro."
		},
		{
			it: "Va bene, ti accompagniamo. Rafael, prenota la macchina sull'app.",
			pt: "Está bem, a gente te leva. Rafael, reserva o carro no aplicativo.",
			note: "É o carro compartilhado, o *car sharing* que a Chiara usa desde a lição 38."
		},
		{
			it: "Siamo qui da due ore. Perché quel signore è passato prima di noi?",
			pt: "Estamos aqui há duas horas. Por que aquele senhor passou na nossa frente?",
			lit: "Somos aqui desde duas horas. Por que aquele senhor é passado antes de nós?"
		},
		{
			it: "All'ingresso fanno il triage: un infermiere decide chi è più grave. È così in qualsiasi ospedale.",
			pt: "Na entrada eles fazem a triagem: um enfermeiro decide quem está mais grave. É assim em qualquer hospital.",
			note: "*Qualsiasi* = qualquer. Não muda e vai com o singular: *qualsiasi ospedale*, *qualsiasi cosa*. *Qualunque* é sinônimo. *Il triage* se diz à francesa, “tri-áj”."
		},
		{
			it: "E io intanto perdo sangue...",
			pt: "E eu enquanto isso perco sangue...",
			note: "*Intanto* = enquanto isso, nesse meio-tempo."
		},
		{
			it: "Il sangue si è fermato un'ora fa, Matteo. Mentre aspettiamo, spiego a Rafael come funziona la sanità.",
			pt: "O sangue parou há uma hora, Matteo. Enquanto esperamos, explico para o Rafael como funciona a saúde pública.",
			note: "*Mentre* = enquanto, para duas ações ao mesmo tempo. *La sanità* é a saúde pública, o sistema; *la salute* é a saúde de cada um: *il fumo fa male alla salute*."
		},
		{
			it: "Il servizio sanitario è pubblico e si paga con le tasse. Cura tutti, anche gli stranieri con il permesso di soggiorno.",
			pt: "O serviço de saúde é público e é pago com os impostos. Atende todo mundo, inclusive os estrangeiros com autorização de residência.",
			lit: "O serviço sanitário é público e se paga com as taxas. Cura todos, também os estrangeiros com a permissão de estadia.",
			note: "*Curare* = tratar um doente, cuidar dele; sarar é *guarire* (lição 78). *Le tasse* = os impostos. *Il permesso di soggiorno* é o documento de residência dos estrangeiros na Itália, que o Rafael tem."
		},
		{
			it: "Come il SUS in Brasile. Quindi qui è tutto gratis?",
			pt: "Como o SUS no Brasil. Então aqui é tudo de graça?"
		},
		{
			it: "Quasi. Il medico di base è gratuito, ma per gli esami e gli specialisti normalmente si paga il ticket.",
			pt: "Quase. O clínico geral é gratuito, mas para os exames e os especialistas normalmente se paga o ticket.",
			note: "*Il ticket* é a pequena taxa que o paciente paga por exames, consultas com especialista e alguns remédios. *Normalmente*: nos adjetivos em *-le* e *-re*, o *-e* cai antes de *-mente* (*normale* → *normalmente*)."
		},
		{
			it: "E se uno sta male di notte o la domenica?",
			pt: "E se alguém passa mal de noite ou no domingo?",
			note: "*Uno* = alguém, uma pessoa qualquer (lição 82)."
		},
		{
			it: "C'è la guardia medica. E per le medicine c'è sempre una farmacia di turno, aperta a qualunque ora.",
			pt: "Tem o plantão médico. E para os remédios tem sempre uma farmácia de plantão, aberta a qualquer hora.",
			note: "*La guardia medica* atende à noite e nos fins de semana, quando o médico de família não atende. *Di turno* = de plantão (lição 41: *chi è di turno?*)."
		},
		{
			it: "Matteo...? Prego, venga pure.",
			pt: "Matteo...? Por favor, pode vir.",
			note: "*Venga pure*: imperativo de *Lei* de *venire* (*vengo* → *venga*), com o *pure* da lição 78."
		},
		{
			it: "Vediamo... È un taglietto. Basta un cerotto.",
			pt: "Vamos ver... É um cortezinho. Basta um band-aid.",
			note: "*Taglietto*, diminutivo de *taglio* (lição 76). *Il cerotto* = o curativo adesivo, o band-aid."
		},
		{
			it: "E la prossima volta tagli la cipolla più lentamente!",
			pt: "E da próxima vez corte a cebola mais devagar!",
			note: "*Lentamente* = devagar, de *lento*. *Tagli*, imperativo de *Lei* de *tagliare*."
		},
		{
			it: "Tre ore di attesa per un cerotto?",
			pt: "Três horas de espera por um band-aid?",
			note: "*L'attesa* = a espera; *la sala d'attesa* = a sala de espera."
		},
		{
			it: "Evidentemente era un codice bianco!",
			pt: "Pelo visto era um código branco!",
			note: "*Evidentemente* = obviamente, pelo visto. Na triagem, cada paciente recebe uma cor ou um número conforme a gravidade. O *codice bianco* é o caso sem urgência: espera mais, e em muitas regiões paga um ticket."
		},
		{
			it: "Generalmente il medico di base riceve la mattina.",
			pt: "Geralmente o clínico geral atende de manhã.",
			sep: true,
			note: "*Ricevere*, para médico, é atender no consultório."
		},
		{
			it: "Mentre Matteo aspettava, Rafael ha letto mezzo libro.",
			pt: "Enquanto o Matteo esperava, o Rafael leu meio livro.",
			note: "Com *mentre*, a ação de fundo vai no imperfeito (lição 63): *aspettava*."
		},
		{
			it: "Puoi chiamarmi a qualsiasi ora, anche di notte.",
			pt: "Você pode me ligar a qualquer hora, até de noite."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Advérbios em -mente; mentre; qualsiasi',
			blocks: [
				{
					type: 'p',
					text: "Os advérbios em *-mente* funcionam quase como em português. Pegue o adjetivo no feminino e acrescente *-mente*. Se o adjetivo termina em *-e*, ele não muda; se termina em *-le* ou *-re*, perde o *-e*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**len**to → lenta**men**te", pt: "lento → lentamente, devagar" },
						{ it: "**ve**ro → vera**men**te", pt: "verdadeiro → realmente, de verdade" },
						{ it: "ve**lo**ce → veloce**men**te", pt: "rápido → rapidamente" },
						{ it: "**fa**cile → facil**men**te", pt: "fácil → facilmente" },
						{ it: "nor**ma**le → normal**men**te", pt: "normal → normalmente" }
					]
				},
				{
					type: 'p',
					text: "*Buono* e *cattivo* não seguem a regra: viram *bene* e *male*. E o italiano falado usa muitos advérbios sem *-mente*, como *piano* (devagar), *presto* (cedo, rápido), *forte* (alto, forte), *subito* (já). *Parla piano* é mais comum que *parla lentamente*."
				},
				{ type: 'h', text: 'Mentre' },
				{
					type: 'p',
					text: "*Mentre* = enquanto. No presente, junta duas ações simultâneas: *mentre aspettiamo, ti spiego*. No passado, a ação de fundo vai no imperfeito: *mentre Matteo aspettava, Rafael ha letto mezzo libro*."
				},
				{ type: 'h', text: 'Qualsiasi e qualunque' },
				{
					type: 'p',
					text: "*Qualsiasi* e *qualunque* querem dizer “qualquer”, são sinônimos, não mudam e vão com o substantivo no singular: *qualsiasi ospedale*, *a qualunque ora*, *qualsiasi cosa*. Depois do substantivo, ganham um tom de desprezo, como em português: *un film qualunque* = um filme qualquer, sem graça."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A saúde na Itália',
			blocks: [
				{
					type: 'p',
					text: "A Itália tem, desde 1978, um serviço de saúde público e universal, *il Servizio Sanitario Nazionale*, parecido em espírito com o nosso SUS. Ele é organizado por região, por isso alguns detalhes mudam de Bolonha para Nápoles. Para usá-lo, cada pessoa tem *la tessera sanitaria*, o cartão de saúde, que também traz o código fiscal."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **me**dico di **ba**se", pt: "o médico de família, o clínico geral" },
						{ it: "la ri**cet**ta", pt: "a receita (hoje quase sempre eletrônica)" },
						{ it: "la far**ma**cia di **tur**no", pt: "a farmácia de plantão" },
						{ it: "la **guar**dia **me**dica", pt: "o plantão médico, à noite e nos fins de semana" },
						{ it: "il **pron**to **soc**corso", pt: "o pronto-socorro" }
					]
				},
				{
					type: 'p',
					text: "Cada um escolhe o seu *medico di base* perto de casa; as crianças têm um pediatra. É ele quem faz a primeira consulta, receita remédios e encaminha ao especialista ou aos exames, com a *ricetta*. A consulta com ele é gratuita; exames e especialistas pedem o *ticket*, uma participação nos custos."
				},
				{
					type: 'p',
					text: "Em caso de emergência, *112*, o número único europeu, de graça e de qualquer telefone. No pronto-socorro, a ordem de atendimento depende da gravidade, decidida na triagem, e não da ordem de chegada. Paciência: quem chega com um corte no dedo pode esperar horas, como o Matteo."
				},
				{
					type: 'dica',
					text: "A farmácia de plantão do dia fica afixada na porta de todas as farmácias, e também nos sites e aplicativos da cidade. Muitos remédios simples, como os para gripe, são vendidos sem receita, mas só em farmácias e parafarmácias, muitas vezes com um conselho do farmacêutico."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Parla lentamente, per favore.", pt: "Fale devagar, por favor." },
				{ it: "Generalmente pranzo a mezzogiorno.", pt: "Geralmente almoço ao meio-dia." },
				{ it: "Mentre io cucinavo, Chiara studiava.", pt: "Enquanto eu cozinhava, a Chiara estudava." },
				{ it: "Puoi venire qualunque giorno della settimana.", pt: "Você pode vir qualquer dia da semana." },
				{ it: "In caso di emergenza, chiami il 112.", pt: "Em caso de emergência, ligue para o 112." },
				{ it: "Ho dimenticato la tessera sanitaria a casa.", pt: "Esqueci o cartão de saúde em casa." },
				{ it: "La farmacia di turno è aperta tutta la notte.", pt: "A farmácia de plantão fica aberta a noite toda." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Fale lentamente, por favor.", parts: ["Parli ", null, ", per favore."], answers: ["lentamente"] },
				{ pt: "Conversamos enquanto esperávamos.", parts: ["Abbiamo chiacchierato ", null, " aspettavamo."], answers: ["mentre"] },
				{ pt: "Encontrei o caminho facilmente.", parts: ["Ho trovato la strada ", null, "."], answers: ["facilmente"] },
				{ pt: "O sangue parou.", parts: ["Il sangue si è ", null, "."], answers: ["fermato"] },
				{ pt: "O Rafael geralmente vai à aula de bicicleta.", parts: ["Rafael ", null, " va a lezione in bici."], answers: ["generalmente"] }
			]
		}
	]
};

const licao84: Lesson = {
	no: 84,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'O condicional presente',
			blocks: [
				{
					type: 'p',
					text: "Uma semana de inverno, de médicos e de conselhos, e um tempo verbal novo que apareceu em quase todas as lições: o condicional, o nosso “futuro do pretérito” (“eu faria”, “você poderia”). A boa notícia: ele usa a mesma base do futuro (lição 70). Só as terminações mudam."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "parle**rei** / prende**rei** / dormi**rei**", pt: "eu falaria / pegaria / dormiria" },
						{ it: "parle**re**sti / prende**re**sti / dormi**re**sti", pt: "você falaria / pegaria / dormiria" },
						{ it: "parle**reb**be / prende**reb**be / dormi**reb**be", pt: "ele falaria / pegaria / dormiria" },
						{ it: "parle**rem**mo / prende**rem**mo / dormi**rem**mo", pt: "nós falaríamos / pegaríamos / dormiríamos" },
						{ it: "parle**re**ste / prende**re**ste / dormi**re**ste", pt: "vocês falariam / pegariam / dormiriam" },
						{ it: "parle**reb**bero / prende**reb**bero / dormi**reb**bero", pt: "eles falariam / pegariam / dormiriam" }
					]
				},
				{
					type: 'p',
					text: "Como no futuro, os verbos em *-are* trocam o *a* por *e*: *parlerei*, não “parlarei”. E valem os mesmos ajustes: *cercare* → *cercherei*, *pagare* → *pagherei*, *mangiare* → *mangerei*, *cominciare* → *comincerei*."
				},
				{ type: 'h', text: 'Os irregulares são os do futuro' },
				{
					type: 'p',
					text: "Quem tem o futuro irregular tem o condicional irregular, com a mesma base. Basta trocar *-ò* por *-ei*: *sarò* → *sarei*, *verrò* → *verrei*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "sarei, avrei, farei, starei", pt: "*essere, avere, fare, stare*" },
						{ it: "andrei, potrei, dovrei, saprei", pt: "*andare, potere, dovere, sapere*" },
						{ it: "vorrei, verrei, rimarrei, berrei", pt: "*volere, venire, rimanere, bere*" },
						{ it: "Mia nonna direbbe che ti viene il mal di pancia.", pt: "Minha avó diria que você vai ter dor de barriga. (lição 82)" }
					]
				},
				{
					type: 'dica',
					text: "Cuidado com o *noi*: o condicional tem *mm* (*parleremmo*, *saremmo*), o futuro tem um *m* só (*parleremo*, *saremo*). Na fala, segure o *m* dobrado: é ele que diz qual é o tempo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Para que serve; o condicional composto',
			blocks: [
				{
					type: 'p',
					text: "O condicional italiano é usado como o nosso futuro do pretérito, só que com mais frequência na conversa, onde nós muitas vezes trocamos por “queria”, “podia”. Veja os usos que apareceram no bloco."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Vorremmo iscriverci in palestra.", pt: "Pedir com educação. (lição 80)" },
						{ it: "Le dispiacerebbe farci vedere la sala pesi?", pt: "Pedir um favor a quem se trata por *Lei*. (lição 80)" },
						{ it: "Dovresti dormire di più.", pt: "Dar um conselho. (lição 79)" },
						{ it: "Un giorno a casa dal lavoro mi farebbe bene...", pt: "Falar de um desejo, de uma hipótese. (lição 79)" }
					]
				},
				{ type: 'h', text: 'O condicional composto' },
				{
					type: 'p',
					text: "Para o passado, *avrei* ou *sarei* + particípio, com o auxiliar que o verbo sempre usa. Corresponde ao nosso “teria feito”, “deveria ter feito”. Fala do que não aconteceu: um arrependimento, um conselho tarde demais, um plano que não deu certo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sarei dovuta andare subito.", pt: "Eu devia ter ido logo. (lição 81)" },
						{ it: "Io al tuo posto gli avrei chiesto il numero.", pt: "No seu lugar, eu teria pedido o número dele. (lição 81)" },
						{ it: "Mi sarebbe piaciuto venire, ma avevo la febbre.", pt: "Eu teria gostado de ir, mas estava com febre. (lição 81)" }
					]
				},
				{ type: 'h', text: 'O futuro visto do passado' },
				{
					type: 'p',
					text: "Aqui o italiano e o português se separam. Para contar o que alguém disse que ia fazer, o italiano usa o condicional composto, nunca o simples: *Serena ha detto che sarebbe arrivata alle otto* (a Serena disse que chegaria às oito). Dizer “ha detto che arriverebbe” soa errado."
				},
				{
					type: 'dica',
					text: "Guarde a frase modelo: *ha detto che sarebbe venuto*, ele disse que viria. Toda vez que você for dizer “disse que + futuro do pretérito”, use o composto."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os usos de appena',
			blocks: [
				{
					type: 'p',
					text: "*Appena* apareceu de vários jeitos desde a lição 36 (*appena nati*). Veja todos juntos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Questi mandarini sono appena arrivati dalla Sicilia.", pt: "*essere/avere appena* + particípio: acabar de. (lição 41)" },
						{ it: "Appena mi sono seduta, il dolore è sparito.", pt: "*appena* + passado: assim que, logo que. (lição 81)" },
						{ it: "Appena arrivo a casa, ti scrivo.", pt: "*appena* + presente ou futuro: assim que (eu chegar). (lição 81)" },
						{ it: "Senza occhiali ci vedo appena.", pt: "*appena* = mal, quase não: sem óculos, mal enxergo." }
					]
				},
				{
					type: 'p',
					text: "O lugar ajuda a distinguir. Entre o auxiliar e o particípio, é “acabar de”: *è appena partito*. No começo de uma oração, ligando duas ações, é “assim que”. Depois de um verbo no presente, sozinho, é “mal”: *lo conosco appena* (mal o conheço)."
				},
				{
					type: 'dica',
					text: "*Non appena* é o mesmo que *appena* no sentido de “assim que”: *non appena arrivo, ti chiamo*. O *non* aqui não nega nada."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O imperativo de Lei',
			blocks: [
				{
					type: 'p',
					text: "O médico, a instrutora, a enfermeira: neste bloco todo mundo deu instruções com *Lei*. Lembre a regra: verbos em *-are* terminam em *-i*; em *-ere* e *-ire*, em *-a*; os irregulares saem do *io* do presente. O pronome vem sempre antes."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Entri pure.", pt: "*entrare* → *entri* (lição 78)" },
						{ it: "Prenda questo antinfiammatorio.", pt: "*prendere* → *prenda* (lição 78)" },
						{ it: "Mi faccia vedere.", pt: "*faccio* → *faccia* (lição 78)" },
						{ it: "Rimanga a casa e si riposi.", pt: "*rimango* → *rimanga*; o *si* na frente (lição 78)" },
						{ it: "Prego, venga pure.", pt: "*vengo* → *venga* (lição 83)" }
					]
				},
				{
					type: 'p',
					text: "Para negar, *non* na frente, sem mais nada: *non si preoccupi*, *non lo prenda a stomaco vuoto*. E os cinco que não seguem o *io*: *sia, abbia, stia, dia, sappia*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do consultório ao pronto-socorro, estas expressões apareceram nas lições 78 a 83. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Avanti! Entri pure.", pt: "Pode entrar!" },
						{ it: "Mi faccia vedere.", pt: "Deixe-me ver." },
						{ it: "Neanche per sogno!", pt: "Nem pensar!" },
						{ it: "Guarisca presto! / Buona guarigione!", pt: "Melhoras!" },
						{ it: "Secondo me...", pt: "Acho que..., na minha opinião..." },
						{ it: "Smettila!", pt: "Para com isso!" },
						{ it: "Addirittura!", pt: "Tudo isso!" },
						{ it: "Guarda che...", pt: "Olha que..." },
						{ it: "i buoni propositi", pt: "as resoluções de ano-novo" },
						{ it: "Credetemi.", pt: "Acreditem em mim." },
						{ it: "Sono cose che capitano.", pt: "São coisas que acontecem." },
						{ it: "Al tuo posto...", pt: "No seu lugar..." },
						{ it: "Ho la testa che mi scoppia.", pt: "Minha cabeça vai explodir." },
						{ it: "Costa un occhio della testa.", pt: "Custa os olhos da cara." },
						{ it: "Hai le mani bucate!", pt: "Você é mão-aberta!" },
						{ it: "Sono rimasto a bocca aperta.", pt: "Fiquei de boca aberta." },
						{ it: "Evidentemente...", pt: "Pelo visto..." }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém que você conhece ficar doente, mande um *Guarisca presto!* (com *Lei*) ou um *Guarisci presto!* (com *tu*). É o imperativo de *guarire*, e todo italiano entende como carinho."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Vorrei parlare con il dottor Ricci, per favore.", pt: "Eu queria falar com o doutor Ricci, por favor." },
				{ it: "Al tuo posto andrei dal medico.", pt: "No seu lugar, eu iria ao médico." },
				{ it: "Con più tempo farei sport tutti i giorni.", pt: "Com mais tempo, eu praticaria esporte todos os dias." },
				{ it: "Saremmo venuti volentieri, ma Matteo aveva la febbre.", pt: "Teríamos ido com prazer, mas o Matteo estava com febre." },
				{ it: "Mi ha detto che sarebbe arrivata alle otto, ma è arrivata alle dieci.", pt: "Ela me disse que chegaria às oito, mas chegou às dez." },
				{ it: "Appena finisco di lavorare, vengo da te.", pt: "Assim que eu terminar de trabalhar, vou à sua casa." },
				{ it: "Il treno è appena partito.", pt: "O trem acabou de partir." },
				{ it: "Avreste dovuto chiamarmi!", pt: "Vocês deviam ter me ligado!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu gostaria de um café.", parts: ["Io ", null, " un caffè."], answers: ["vorrei"] },
				{ pt: "Rafael, você poderia fechar a janela?", parts: ["Rafael, ", null, " chiudere la finestra?"], answers: ["potresti"] },
				{ pt: "Nós iríamos ao cinema, mas está chovendo.", parts: ["Noi ", null, " al cinema, ma piove."], answers: ["andremmo"] },
				{ pt: "Ele disse que viria.", parts: ["Ha detto che ", null, " venuto."], answers: ["sarebbe"] },
				{ pt: "Começamos a comer assim que ele chegou.", parts: ["Abbiamo cominciato a mangiare ", null, " è arrivato."], answers: ["appena"] }
			]
		}
	]
};

export const unidade: Unit = { no: 12, title: 'Inverno e saúde', lessons: [78, 79, 80, 81, 82, 83, 84] };

export const licoes: Lesson[] = [licao78, licao79, licao80, licao81, licao82, licao83, licao84];
