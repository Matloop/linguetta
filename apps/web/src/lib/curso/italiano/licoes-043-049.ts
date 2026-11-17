import type { Lesson, Unit } from '../types.ts';

// Lições 43–49: Matteo reencontra Davide, amigo do liceo de Turim; responde ao anúncio de uma fábrica
// de instrumentos musicais, faz o currículo com Rafael e Chiara, passa a manhã da entrevista nervoso
// e é contratado; num jantar, Francesca (mulher do Davide, professora primária) explica a escola italiana.
// A 49 revisa o bloco e anuncia a segunda onda. Ver docs/agents/curso-assimil-mapa.md.

const licao43: Lesson = {
	no: 43,
	kind: 'licao',
	title: 'Che sorpresa!',
	titlePt: 'Que surpresa!',
	lines: [
		{
			it: "Matteo? Ma sei proprio tu?",
			pt: "Matteo? É você mesmo?",
			lit: "Matteo? Mas és mesmo tu?",
			note: "*Proprio* reforça: “mesmo”, “em pessoa” (lição 12). O *ma* do começo não é “mas”: só mostra surpresa, como o nosso “ué” ou “não acredito”."
		},
		{
			it: "Davide! Che sorpresa! Che cosa stai facendo a Bologna?",
			pt: "Davide! Que surpresa! O que você está fazendo em Bolonha?",
			note: "*Stai facendo* = está fazendo. É o verbo *stare* (lição 9) + o gerúndio *facendo*, de *fare*. Serve, como em português, para o que está em andamento agora ou nestes dias."
		},
		{
			it: "Abito qui da un anno. Lavoro in una banca in centro.",
			pt: "Moro aqui há um ano. Trabalho num banco no centro.",
			note: "*Da* + tempo com o presente, como na lição 20: a coisa começou há um ano e continua. *La banca* é o banco onde se guarda dinheiro; o de sentar é *la panchina*."
		},
		{ it: "E tu? Stai ancora studiando?", pt: "E você? Ainda está estudando?" },
		{
			it: "Sì, sto finendo la tesi di laurea.",
			pt: "Estou, sim, estou terminando a dissertação.",
			lit: "Sim, estou terminando a tese de formatura.",
			note: "*La tesi di laurea* é o trabalho final da faculdade, algo como o nosso TCC (na *laurea triennale*) ou a dissertação de mestrado (na *magistrale*). *La tesi* não muda no plural: *le tesi*. A *laurea* é o diploma universitário; mais sobre ela na lição 45. Repare: *finire* faz *finisco* no presente (lição 11), mas o gerúndio é simplesmente *finendo*."
		},
		{
			it: "Bravo! E lui chi è?",
			pt: "Muito bem! E ele, quem é?",
			note: "*Bravo!* = muito bem!, parabéns! E *bravo* quer dizer competente, bom no que faz: *un bravo medico*. Falso amigo: o nosso “bravo” (zangado) é *arrabbiato*."
		},
		{ it: "Rafael, il mio coinquilino. È di Recife.", pt: "O Rafael, meu colega de apartamento. É de Recife." },
		{
			it: "Piacere! Vi conoscete da tanto tempo?",
			pt: "Prazer! Vocês se conhecem há muito tempo?",
			lit: "Prazer! Vos conheceis desde tanto tempo?",
			note: "*Vi conoscete* = vocês se conhecem: *conoscere* (lição 12) com o pronome *vi*. *Da tanto tempo* = há muito tempo."
		},
		{
			it: "Dal liceo! E abbiamo anche avuto un gruppo insieme.",
			pt: "Desde o colégio! E até tivemos uma banda juntos.",
			lit: "Desde o liceu! E temos também tido um grupo juntos.",
			note: "*Il liceo* é um tipo de ensino médio; na lição 48 você vê como é a escola italiana. *Dal* = *da* + *il*: desde o."
		},
		{
			it: "Lui alla chitarra e io alla batteria. Un disastro!",
			pt: "Ele no violão e eu na bateria. Um desastre!",
			note: "Para dizer quem toca o quê numa banda: *alla chitarra*, *alla batteria*, *al basso*."
		},
		{
			it: "E il matrimonio con Francesca? Com'è andato?",
			pt: "E o casamento com a Francesca? Como foi?",
			lit: "E o casamento com Francesca? Como é andado?",
			note: "*Com'è andato?* = como foi? *Andare* faz o passado com *essere* (lição 29), e o particípio concorda: *com'è andata la festa?*, *come sono andati gli esami?*."
		},
		{
			it: "Benissimo! Siamo sposati da un anno, e Francesca adesso insegna qui.",
			pt: "Ótimo! Estamos casados há um ano, e a Francesca agora dá aula aqui.",
			lit: "Muito bem! Somos casados desde um ano, e Francesca agora ensina aqui.",
			note: "*Sposato*, *sposata* = casado, casada. *Il matrimonio* é o casamento, tanto a festa quanto a vida a dois. *Insegnare* = ensinar, dar aula."
		},
		{
			it: "Sposato, una casa a Bologna, un lavoro in banca... Beato te!",
			pt: "Casado, uma casa em Bolonha, um emprego no banco... Sorte sua!",
			lit: "Casado, uma casa a Bolonha, um trabalho em banco... Bem-aventurado tu!",
			note: "*Beato te!* = sorte sua!, que inveja! *Beato* é “bem-aventurado”. Muda conforme a pessoa: *beata te* (para uma mulher), *beato lui*, *beati voi*."
		},
		{
			it: "Eh, mi hanno assunto a tempo indeterminato. E tu, a parte la tesi?",
			pt: "É, me contrataram como efetivo. E você, além da dissertação?",
			lit: "Eh, me assumiram a tempo indeterminado. E tu, à parte a tese?",
			note: "*Assumere* = contratar; o particípio é *assunto*. Nada a ver com o nosso “assunto”, que em italiano é *argomento*. *A tempo indeterminato* = sem data para acabar: é o emprego fixo, o sonho de muito italiano. *A parte* = fora, além de."
		},
		{
			it: "Sto cercando lavoro, ma per ora niente.",
			pt: "Estou procurando emprego, mas por enquanto nada.",
			note: "*Per ora* = por enquanto. Repare que basta *niente* para dizer “não achei nada”."
		},
		{
			it: "Dai, coraggio! Ti mando qualche annuncio interessante.",
			pt: "Vamos, ânimo! Vou te mandar uns anúncios interessantes.",
			lit: "Vai, coragem! Te mando algum anúncio interessante.",
			note: "*Coraggio!* = ânimo!, força! *Ti mando* = te mando (pronome indireto, lição 36). *Qualche* vem sempre com o singular, mesmo querendo dizer “alguns” (lição 40)."
		},
		{
			it: "Ragazzi, stiamo bloccando il marciapiede. Andiamo a prendere un caffè?",
			pt: "Gente, estamos bloqueando a calçada. Vamos tomar um café?",
			note: "Mais um *stare* + gerúndio: *stiamo bloccando*. *Andare a* + infinitivo (lição 24): *andiamo a prendere*."
		},
		{
			it: "Che cosa state facendo? Stiamo guardando la partita.",
			pt: "O que vocês estão fazendo? Estamos vendo o jogo.",
			sep: true,
			note: "Verbos em *-are* fazem o gerúndio em *-ando*: *guardando*, *parlando*, *cercando*."
		},
		{
			it: "Chiara sta leggendo e Matteo sta scrivendo la tesi.",
			pt: "A Chiara está lendo e o Matteo está escrevendo a dissertação.",
			note: "Verbos em *-ere* e em *-ire* fazem o gerúndio em *-endo*: *leggendo*, *scrivendo*, *dormendo*."
		},
		{
			it: "Com'è andata la lezione? È andata bene, grazie.",
			pt: "Como foi a aula? Foi bem, obrigado.",
			note: "*La lezione* é feminino, então *andata*."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Stare + gerúndio',
			blocks: [
				{
					type: 'p',
					text: "Hoje apareceu uma construção que o brasileiro usa o dia inteiro: “estar + -ndo”. Em italiano ela existe e se monta do mesmo jeito: o verbo *stare* no presente + o gerúndio. *Stare* você conhece da lição 9: *sto, stai, sta, stiamo, state, stanno*."
				},
				{ type: 'h', text: 'Como se forma o gerúndio' },
				{
					type: 'p',
					text: "Tire a terminação do infinitivo e ponha *-ando* nos verbos em *-are*, *-endo* nos verbos em *-ere* e *-ire*. O gerúndio não muda nunca: nem de pessoa, nem de gênero, nem de número."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**cer**co → cer**can**do", pt: "procurando (*-are* → *-ando*)" },
						{ it: "**leg**go → leg**gen**do", pt: "lendo (*-ere* → *-endo*)" },
						{ it: "fi**ni**sco → fi**nen**do", pt: "terminando (*-ire* → *-endo*, sem o *-isc-*)" },
						{ it: "fa**cen**do, di**cen**do, be**ven**do", pt: "fazendo, dizendo, bebendo", pron: "fa-tchên-do, di-tchên-do, be-vên-do" }
					]
				},
				{
					type: 'p',
					text: "Os três últimos são os irregulares mais comuns. Eles saem do mesmo radical que você já conhece de *facciamo*, *diciamo* (lição 28) e *beviamo* (lição 5)."
				},
				{ type: 'h', text: 'Quando usar' },
				{
					type: 'p',
					text: "Para uma ação em andamento neste momento ou neste período: *Sto finendo la tesi*, *Stiamo bloccando il marciapiede*. Mas o italiano usa bem menos do que nós. Onde o brasileiro diz “o que você está fazendo?”, o italiano diz tranquilamente *che cosa fai?*, com o presente simples (lição 5). Com *stare*, a frase ganha ênfase: está acontecendo agora, bem no meio."
				},
				{
					type: 'dica',
					text: "Nunca use *stare* + gerúndio para o futuro, como no “vou estar enviando” do atendimento por telefone. Para o que vai acontecer, o italiano usa o presente: *Ti mando l'annuncio domani* (te mando o anúncio amanhã)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Trabalho e casamento',
			blocks: [
				{
					type: 'p',
					text: "O reencontro do Matteo com o Davide trouxe as palavras de quem está começando a vida adulta. Repare no artigo de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il **la**voro, il **po**sto di **la**voro", pt: "o trabalho, o emprego (a vaga)" },
						{ it: "as**sun**to, as**sun**ta", pt: "contratado, contratada (de *assumere*)" },
						{ it: "a **tem**po indetermi**na**to", pt: "efetivo, sem prazo (o contrário: *a tempo determinato*)" },
						{ it: "spo**sa**to, spo**sa**ta", pt: "casado, casada" },
						{ it: "il matri**mo**nio", pt: "o casamento", pron: "il ma-tri-mó-nio" }
					]
				},
				{
					type: 'p',
					text: "Duas expressões do diálogo servem para muita coisa. *Com'è andato?* pergunta como foi qualquer coisa que já aconteceu: a viagem, a prova, o jantar. A resposta usa o mesmo verbo: *è andato bene*, *è andata malissimo*. E *Beato te!* é o “sorte sua!” de quem ouve uma boa notícia, com um pouquinho de inveja."
				},
				{
					type: 'dica',
					text: "*Bravo* é elogio: *Sei bravo in cucina!* (você cozinha bem!). Para dizer que alguém está zangado, use *arrabbiato*: *Chiara è arrabbiata*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa stai facendo? Sto scrivendo un messaggio a Davide.", pt: "O que você está fazendo? Estou escrevendo uma mensagem para o Davide." },
				{ it: "Matteo sta finendo la tesi.", pt: "O Matteo está terminando a dissertação." },
				{ it: "Com'è andata la festa? È andata benissimo!", pt: "Como foi a festa? Foi ótima!" },
				{ it: "Davide e Francesca sono sposati da un anno.", pt: "O Davide e a Francesca estão casados há um ano." },
				{ it: "Beato te! Io sto ancora cercando lavoro.", pt: "Sorte sua! Eu ainda estou procurando emprego." },
				{ it: "Mi hanno assunto in una banca.", pt: "Me contrataram num banco." },
				{ it: "Stiamo andando al bar: vieni anche tu?", pt: "Estamos indo ao bar: você também vem?" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu estou lendo o jornal.", parts: ["Io ", null, " leggendo il giornale."], answers: ["sto"] },
				{ pt: "O que vocês estão fazendo?", parts: ["Che cosa state ", null, "?"], answers: ["facendo"] },
				{ pt: "Como foi a aula?", parts: ["Com'è ", null, " la lezione?"], answers: ["andata"] },
				{ pt: "Te contrataram? Sorte sua!", parts: ["Ti hanno assunto? ", null, " te!"], answers: ["beato"] },
				{ pt: "O Matteo e o Rafael estão dormindo.", parts: ["Matteo e Rafael ", null, " dormendo."], answers: ["stanno"] }
			]
		}
	]
};

const licao44: Lesson = {
	no: 44,
	kind: 'licao',
	title: "L'annuncio",
	titlePt: 'O anúncio',
	lines: [
		{
			it: "Matteo, che cosa stai guardando con quella faccia?",
			pt: "Matteo, o que você está olhando com essa cara?",
			lit: "Matteo, que coisa estás olhando com aquela cara?",
			note: "*La faccia* = a cara, o rosto. *Quella* (aquela) faz aqui o papel do nosso “essa”."
		},
		{
			it: "Un annuncio di lavoro. L'ha mandato Davide stamattina.",
			pt: "Um anúncio de emprego. O Davide mandou hoje de manhã.",
			lit: "Um anúncio de trabalho. O mandou Davide esta manhã.",
			note: "*L'ha mandato*: o *l'* (de *lo*) retoma *l'annuncio*, como você viu na lição 42. *Stamattina* (de *questa mattina*) = hoje de manhã, como *stasera*."
		},
		{ it: "Davvero? Leggi, dai!", pt: "Sério? Lê, vai!" },
		{
			it: "«Azienda bolognese di strumenti musicali cerca giovane laureato in economia per l'ufficio vendite.»",
			pt: "«Empresa bolonhesa de instrumentos musicais procura jovem formado em economia para o setor de vendas.»",
			note: "Anúncio economiza palavras: some o artigo (*azienda* em vez de *un'azienda*). *L'azienda* = a empresa. *Laureato* = formado na faculdade."
		},
		{ it: "Strumenti musicali? Ma è perfetto per te!", pt: "Instrumentos musicais? Mas é perfeito para você!" },
		{
			it: "Aspetta, non è finito: «Richiesto inglese fluente. Gradita esperienza nel settore.»",
			pt: "Espera, não acabou: «Exige-se inglês fluente. Desejável experiência na área.»",
			lit: "Espera, não é acabado: «Pedido inglês fluente. Bem-vinda experiência no setor.»",
			note: "Mais linguagem de anúncio: *richiesto* (pedido, exigido) e *gradito* (bem-vindo, desejável). Os dois concordam como adjetivos: *gradita esperienza*, *richiesta esperienza*."
		},
		{
			it: "Il tuo inglese è ottimo. E l'esperienza? Hai lavorato per tre anni in un negozio di musica!",
			pt: "Seu inglês é ótimo. E a experiência? Você trabalhou três anos numa loja de música!",
			lit: "O teu inglês é ótimo. E a experiência? Tens trabalhado por três anos em uma loja de música!",
			note: "*Per* + duração com o passado: um período que começou e terminou. Compare com a lição 43: *abito qui da un anno*, com *da* e o presente, porque ainda continua."
		},
		{ it: "Sì, ma solo il sabato. È esperienza anche quella?", pt: "Sim, mas só aos sábados. Isso também conta como experiência?", lit: "Sim, mas só o sábado. É experiência também aquela?" },
		{
			it: "Certo! Hai venduto chitarre e amplificatori. Sei adatto a quel posto.",
			pt: "Claro! Você vendeu violões e amplificadores. Você tem o perfil para essa vaga.",
			lit: "Certo! Tens vendido guitarras e amplificadores. És adequado àquele posto.",
			note: "*Adatto a* = adequado para, feito para. *Il posto* (de lavoro) = a vaga, o emprego."
		},
		{
			it: "All'inizio mi è sembrato troppo bello. Adesso mi sembra fatto apposta per me!",
			pt: "No começo me pareceu bom demais. Agora me parece feito sob medida para mim!",
			lit: "Ao início me é parecido demasiado belo. Agora me parece feito de propósito para mim!",
			note: "*Sembrare* (parecer) faz o passado com *essere*: *mi è sembrato*. O particípio concorda com a coisa que parece: *l'annuncio mi è sembrato bello*, *la casa mi è sembrata piccola*. *Apposta* = de propósito; *fatto apposta per me* = feito para mim."
		},
		{
			it: "Allora hai già risposto?",
			pt: "Então você já respondeu?",
			note: "*Risposto* é o particípio de *rispondere*. Responde-se *a* alguém ou alguma coisa: *ho risposto all'annuncio*."
		},
		{
			it: "Non ancora. Ho scritto la lettera di presentazione, ma il curriculum è vecchio.",
			pt: "Ainda não. Escrevi a carta de apresentação, mas o currículo está velho.",
			note: "*Scritto* é o particípio de *scrivere*. *Il curriculum* (ou *il CV*, “tchi-vú”) não muda no plural."
		},
		{
			it: "Fino a quando puoi rispondere?",
			pt: "Até quando você pode responder?",
			note: "*Fino a* = até: *fino a venerdì*, *fino a Roma*."
		},
		{
			it: "Una settimana. La scadenza è venerdì.",
			pt: "Uma semana. O prazo é sexta.",
			note: "*La scadenza* = o prazo final, o vencimento (de uma conta, de um documento)."
		},
		{
			it: "Allora stasera lo sistemiamo insieme. Anche Rafael ti aiuta!",
			pt: "Então hoje à noite a gente arruma ele juntos. O Rafael também te ajuda!",
			lit: "Então esta noite o arrumamos juntos. Também Rafael te ajuda!",
			note: "*Sistemare* = arrumar, ajeitar. O *lo* retoma *il curriculum*."
		},
		{
			it: "Grazie, Chiara. Siete due tesori!",
			pt: "Obrigado, Chiara. Vocês são uns amores!",
			lit: "Obrigado, Chiara. Sois dois tesouros!",
			note: "*Sei un tesoro!* = você é um amor! É o que se diz a quem faz uma gentileza."
		},
		{
			it: "Ieri ho dormito per dieci ore.",
			pt: "Ontem eu dormi dez horas.",
			lit: "Ontem tenho dormido por dez horas.",
			sep: true,
			note: "*Per* com uma duração que acabou. Muitas vezes o *per* cai: *ho dormito dieci ore*."
		},
		{
			it: "Al telefono tua madre mi è sembrata molto contenta.",
			pt: "No telefone, sua mãe me pareceu muito contente.",
			note: "*Tua madre* é feminino, então *sembrata*."
		},
		{
			it: "Hai risposto a Davide? Sì, gli ho scritto stamattina.",
			pt: "Você respondeu ao Davide? Sim, escrevi para ele hoje de manhã.",
			note: "*Gli* = a ele (lição 36)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Per, da e fa com o tempo',
			blocks: [
				{
					type: 'p',
					text: "Em português, “há” serve para muita coisa: “moro aqui há um ano”, “cheguei há um ano”. O italiano separa os casos, e a escolha depende de uma pergunta: a coisa ainda continua?"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Abito a Bologna da un anno.", pt: "Moro em Bolonha há um ano. (*da* + presente: continua)" },
						{ it: "Ho lavorato per tre anni in un negozio.", pt: "Trabalhei três anos numa loja. (*per* + passado: acabou)" },
						{ it: "Ho finito il liceo sei anni fa.", pt: "Terminei o colégio há seis anos. (*fa*: quanto tempo atrás, lição 37)" }
					]
				},
				{
					type: 'p',
					text: "O erro típico do brasileiro é usar o passado com *da*: “ho abitato qui da un anno”. Se você ainda mora, o verbo fica no presente: *abito qui da un anno*. Se não mora mais, conte a duração com *per*: *ho abitato qui per un anno*."
				},
				{
					type: 'dica',
					text: "Na fala, o *per* muitas vezes cai: *ho lavorato tre anni a Milano*. O *da*, nunca."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Sembrare e dois particípios novos',
			blocks: [
				{
					type: 'p',
					text: "*Sembrare* (parecer) funciona como o nosso “parecer”: *mi sembra fatto per me*, me parece feito para mim. A novidade está no passado: ele usa *essere*, e o particípio concorda com a coisa ou a pessoa que parece, não com quem acha."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "L'annuncio mi è sem**bra**to interes**san**te.", pt: "O anúncio me pareceu interessante." },
						{ it: "La **ca**sa ci è sem**bra**ta **pic**cola.", pt: "A casa nos pareceu pequena." },
						{ it: "I ra**gaz**zi mi sono sem**bra**ti **stan**chi.", pt: "Os rapazes me pareceram cansados." }
					]
				},
				{ type: 'h', text: 'Risposto e scritto' },
				{
					type: 'p',
					text: "Dois particípios irregulares para guardar junto com os que você viu nas lições 29 a 34. Muitos verbos em *-ere* fazem o particípio em *-sto* ou *-tto*: *rispondere* → *risposto*, *chiedere* → *chiesto*, *vedere* → *visto*; *scrivere* → *scritto*, *leggere* → *letto*, *dire* → *detto*, *fare* → *fatto*."
				},
				{
					type: 'dica',
					text: "Vocabulário de anúncio: *cercasi* (procura-se), *richiesto* (exige-se), *gradito* (desejável), *inviare il CV* (enviar o currículo), *la scadenza* (o prazo)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ho studiato inglese per cinque anni.", pt: "Estudei inglês por cinco anos." },
				{ it: "Studio italiano da sei mesi.", pt: "Estudo italiano há seis meses." },
				{ it: "L'annuncio ci è sembrato perfetto.", pt: "O anúncio nos pareceu perfeito." },
				{ it: "Chiara mi è sembrata stanca.", pt: "A Chiara me pareceu cansada." },
				{ it: "Avete risposto all'email?", pt: "Vocês responderam ao e-mail?" },
				{ it: "Matteo ha scritto una lettera di presentazione.", pt: "O Matteo escreveu uma carta de apresentação." },
				{ it: "Questo lavoro è adatto a te.", pt: "Este trabalho combina com você." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Trabalhei três anos numa livraria (e saí).", parts: ["Ho lavorato ", null, " tre anni in una libreria."], answers: ["per"] },
				{ pt: "Moro em Bolonha há dois anos.", parts: ["Abito a Bologna ", null, " due anni."], answers: ["da"] },
				{ pt: "A Chiara me pareceu contente.", parts: ["Chiara mi è ", null, " contenta."], answers: ["sembrata"] },
				{ pt: "Você já respondeu ao anúncio?", parts: ["Hai già ", null, " all'annuncio?"], answers: ["risposto"] },
				{ pt: "Escrevemos o currículo juntos.", parts: ["Abbiamo ", null, " il curriculum insieme."], answers: ["scritto"] }
			]
		}
	]
};

const licao45: Lesson = {
	no: 45,
	kind: 'licao',
	title: 'Il curriculum',
	titlePt: 'O currículo',
	lines: [
		{
			it: "Allora, cominciamo: dati personali.",
			pt: "Então, vamos começar: dados pessoais.",
			lit: "Então, começamos: dados pessoais.",
			note: "Com *noi*, o presente vale também como convite: *cominciamo* = vamos começar."
		},
		{
			it: "Nome e cognome li sappiamo. Data di nascita?",
			pt: "Nome e sobrenome a gente sabe. Data de nascimento?",
			lit: "Nome e sobrenome os sabemos. Data de nascimento?",
			note: "*Il cognome* = o sobrenome. O *li* retoma *nome e cognome* (lição 42)."
		},
		{
			it: "Sono nato a Torino il tre marzo duemilauno.",
			pt: "Nasci em Turim no dia três de março de 2001.",
			lit: "Sou nascido a Turim o três março dois mil e um.",
			note: "*Nascere* faz o passado com *essere*: *sono nato* (uma mulher diz *sono nata*). Na data completa, o artigo vem antes do dia, e não há “de” entre os pedaços: *il 3 marzo 2001*."
		},
		{ it: "Stato civile?", pt: "Estado civil?" },
		{
			it: "Celibe. Per ora!",
			pt: "Solteiro. Por enquanto!",
			note: "Nos documentos, *celibe* é o homem solteiro e *nubile*, a mulher solteira. Na conversa, diz-se *single*. Casado é *sposato*, *sposata* (lição 43)."
		},
		{
			it: "Studi: quando hai preso il diploma?",
			pt: "Estudos: quando você terminou o colégio?",
			lit: "Estudos: quando tens pegado o diploma?",
			note: "*Il diploma* é o certificado do fim do ensino médio; *prendere il diploma* = formar-se no colégio. Não confunda com a *laurea*, o diploma da faculdade."
		},
		{
			it: "Nel duemilaventi, al liceo scientifico. Poi, nel duemilaventitré, la laurea triennale in economia.",
			pt: "Em 2020, no liceo científico. Depois, em 2023, a graduação de três anos em economia.",
			lit: "No dois mil e vinte, ao liceu científico. Depois, no dois mil e vinte e três, a láurea trienal em economia.",
			note: "Antes do ano, o italiano põe artigo: *nel 2020* (*in* + *il*), porque subentende *l'anno*. A faculdade tem duas etapas: a *laurea triennale* (três anos) e depois a *laurea magistrale* (mais dois). Quem tem a *laurea* é *laureato*."
		},
		{
			it: "E adesso la magistrale. Quindi fra qualche mese sei dottore!",
			pt: "E agora o mestrado. Então daqui a alguns meses você é doutor!",
			lit: "E agora a magistral. Portanto entre algum mês és doutor!",
			note: "Na Itália, quem se forma na faculdade ganha o título de *dottore* ou *dottoressa*, e é assim que muita gente é chamada no trabalho. A rigor, com a *triennale* o Matteo já é *dottore*; a frase brinca com a segunda formatura, que dá o título de *dottore magistrale*. *Fra* + tempo = daqui a (lição 19). *Quindi* = então, portanto."
		},
		{
			it: "Dottore sì, ma disoccupato!",
			pt: "Doutor, sim, mas desempregado!",
			note: "*Disoccupato* = desempregado (*occupato* = ocupado, empregado)."
		},
		{
			it: "Esperienze di lavoro: dal duemilaventuno al duemilaventiquattro, commesso in un negozio di musica.",
			pt: "Experiência profissional: de 2021 a 2024, vendedor numa loja de música.",
			lit: "Experiências de trabalho: do dois mil e vinte e um ao dois mil e vinte e quatro, balconista em uma loja de música.",
			note: "Com *da... a*, o artigo também aparece: *dal 2021 al 2024*. *Il commesso*, *la commessa* = vendedor, vendedora de loja."
		},
		{
			it: "Non «commesso»: scrivi «addetto alle vendite». Suona meglio!",
			pt: "Não “vendedor”: escreve “responsável pelas vendas”. Soa melhor!",
			note: "*Suonare* você conhece como “tocar” (lição 3); também quer dizer “soar” e “tocar” de campainha e celular: *il telefono suona*. *Meglio* = melhor; você vai vê-lo com calma na lição 60."
		},
		{ it: "Lingue: inglese, livello avanzato. E poi?", pt: "Línguas: inglês, nível avançado. E que mais?", lit: "Línguas: inglês, nível avançado. E depois?" },
		{ it: "Portoghese... livello base?", pt: "Português... nível básico?" },
		{
			it: "Base? Ormai capisci anche mia madre al telefono!",
			pt: "Básico? A esta altura você entende até a minha mãe no telefone!",
			note: "*Ormai* = a esta altura, agora já. *Mia madre*, sem artigo, como com todo parente no singular (lição 13)."
		},
		{
			it: "Ecco fatto! Manca solo una foto seria.",
			pt: "Pronto! Só falta uma foto séria.",
			lit: "Eis feito! Falta só uma foto séria.",
			note: "*Ecco fatto!* = pronto!, está feito! *Mancare* = faltar: *manca una foto*, *mancano due pagine*."
		},
		{ it: "Seria? Ma io sono sempre serio!", pt: "Séria? Mas eu sou sempre sério!" },
		{
			it: "Mio nonno è nato nel millenovecentoquarantotto.",
			pt: "Meu avô nasceu em 1948.",
			sep: true,
			note: "O ano se lê como um número só, e se escreve numa palavra: *millenovecentoquarantotto*. Em *quarantotto*, o *a* de *quaranta* cai diante de *otto*."
		},
		{
			it: "La dottoressa Ricci lavora qui dal duemiladiciotto.",
			pt: "A doutora Ricci trabalha aqui desde 2018.",
			note: "*Dal* + ano com o presente: começou em 2018 e continua."
		},
		{
			it: "Questo computer costa milleduecento euro.",
			pt: "Este computador custa mil e duzentos euros.",
			note: "*Mille* não leva “um” antes: *mille euro*, mil euros."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Anos, datas e o título de dottore',
			blocks: [
				{
					type: 'p',
					text: "Em português, “em 2020”; em italiano, *nel 2020*. O artigo aparece porque se subentende *l'anno*: “no (ano de) 2020”. Ele aparece também com *da... a* e quando o ano é sujeito da frase: *il 2026 è un anno importante*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "nel duemila**ven**ti", pt: "em 2020" },
						{ it: "dal duemilaven**tu**no al duemilaventi**quat**tro", pt: "de 2021 a 2024" },
						{ it: "il tre **mar**zo duemila**u**no", pt: "3 de março de 2001" },
						{ it: "il **pri**mo **mag**gio", pt: "1º de maio" }
					]
				},
				{
					type: 'p',
					text: "Para o dia 1º, o italiano usa o ordinal, *il primo*, como nós. Para os outros dias, o número normal: *il due*, *il tre*, *il trentuno*. E o mês vai com minúscula: *marzo*, *maggio*."
				},
				{ type: 'h', text: 'Dottore e dottoressa' },
				{
					type: 'p',
					text: "Na Itália, toda pessoa formada na faculdade é *dottore* ou *dottoressa*, seja em medicina, direito ou letras. Num escritório, numa empresa ou numa repartição, é comum ouvir *Buongiorno, dottore!* para alguém que não é médico. Antes do sobrenome, *dottore* perde o *-e*: *il dottor Bianchi* (lição 16). O feminino não muda: *la dottoressa Ricci*."
				},
				{
					type: 'dica',
					text: "Na dúvida sobre como tratar alguém num ambiente de trabalho, *dottore* ou *dottoressa* quase nunca ofende. Pelo contrário."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: os números grandes',
			blocks: [
				{
					type: 'p',
					text: "Os números italianos se escrevem numa palavra só, por mais compridos que sejam: 1998 é *millenovecentonovantotto*. Assusta no papel, mas a lógica é a nossa: mil, novecentos, noventa e oito, só que sem o “e” e sem espaços."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**cen**to, due**cen**to", pt: "100, 200", pron: "tchén-to, du-e-tchén-to" },
						{ it: "**mil**le, due**mi**la", pt: "1.000, 2.000", pron: "míl-le, du-e-mí-la" },
						{ it: "venti**tré**", pt: "23", pron: "ven-ti-trê" },
						{ it: "millenovecentonovan**tot**to", pt: "1998", pron: "mil-le-no-ve-tchen-to-no-van-tót-to" },
						{ it: "duemilaventi**sei**", pt: "2026", pron: "du-e-mi-la-ven-ti-séi" },
						{ it: "un mi**lio**ne", pt: "um milhão", pron: "un mi-liô-ne" }
					]
				},
				{ type: 'h', text: 'Três detalhes' },
				{
					type: 'p',
					text: "**Mille vira mila.** No singular, *mille*; no plural, *-mila*: *duemila*, *tremila*, *diecimila*. **Vogal que cai.** Diante de *uno* e *otto*, as dezenas perdem a vogal final: *ventuno*, *ventotto*, *trentuno*, *quarantotto*. **Tré com acento.** Quando *tre* fecha um número composto, ganha acento e força: *ventitré*, *centotré*."
				},
				{
					type: 'p',
					text: "E onde cai a força num número desse tamanho? A força principal fica na última parte, e o resto passa leve e rápido, sem pausas: “millenovecentonovanTÓTto”. Os italianos não param entre os pedaços."
				},
				{
					type: 'dica',
					text: "Treino de hoje: diga em voz alta o ano em que você nasceu, o ano de hoje e o número da sua casa."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Sono nata a Recife nel duemila.", pt: "Nasci em Recife em 2000. (uma mulher falando)" },
				{ it: "Mia sorella è laureata in medicina.", pt: "Minha irmã é formada em medicina." },
				{ it: "Buongiorno, dottoressa!", pt: "Bom dia, doutora!" },
				{ it: "Ho lavorato in un bar dal duemiladiciannove al duemilaventidue.", pt: "Trabalhei num bar de 2019 a 2022." },
				{ it: "Il biglietto costa duecentotrenta euro.", pt: "A passagem custa duzentos e trinta euros." },
				{ it: "Matteo è celibe, ma Davide è sposato.", pt: "O Matteo é solteiro, mas o Davide é casado." },
				{ it: "Il corso comincia il primo ottobre.", pt: "O curso começa no dia 1º de outubro." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Terminei o colégio em 2020.", parts: ["Ho finito il liceo ", null, " duemilaventi."], answers: ["nel"] },
				{ pt: "Trabalhei lá de 2021 a 2024.", parts: ["Ho lavorato lì ", null, " duemilaventuno ", null, " duemilaventiquattro."], answers: ["dal", "al"] },
				{ pt: "Nasci no dia 1º de maio.", parts: ["Sono nato il ", null, " maggio."], answers: ["primo"] },
				{ pt: "Três mil euros.", parts: ["Tre", null, " euro."], answers: ["mila"] },
				{ pt: "Qual é o sobrenome do senhor?", parts: ["Qual è il Suo ", null, "?"], answers: ["cognome"] }
			]
		}
	]
};

const licao46: Lesson = {
	no: 46,
	kind: 'licao',
	title: 'Che ansia!',
	titlePt: 'Que nervoso!',
	lines: [
		{
			it: "Matteo! Sono le sette e sei già vestito?",
			pt: "Matteo! São sete horas e você já está vestido?",
			note: "*Vestito* = vestido, pronto. Como substantivo, *il vestito* é a roupa social: o terno do homem, o vestido da mulher."
		},
		{
			it: "Mi sono alzato alle cinque. Non ho chiuso occhio!",
			pt: "Levantei às cinco. Não preguei o olho!",
			lit: "Me sou levantado às cinco. Não tenho fechado olho!",
			note: "*Alzarsi* = levantar-se. No passado, os verbos com pronome reflexivo usam sempre *essere*, e o particípio concorda com quem fala: *mi sono alzato* (Matteo), *mi sono alzata* (Chiara). *Non chiudere occhio* = não pregar o olho."
		},
		{
			it: "Alle cinque? Ma il colloquio è alle dieci!",
			pt: "Às cinco? Mas a entrevista é às dez!",
			note: "*Il colloquio* (“kol-ló-kuio”) = a entrevista de emprego. A entrevista de jornal é *l'intervista*."
		},
		{
			it: "Lo so. Ho fatto la doccia, mi sono lavato i capelli, mi sono fatto la barba...",
			pt: "Eu sei. Tomei banho, lavei o cabelo, fiz a barba...",
			lit: "O sei. Tenho feito a ducha, me sou lavado os cabelos, me sou feito a barba...",
			note: "Com partes do corpo e roupa, o italiano usa o pronome reflexivo e o artigo, sem possessivo: *mi sono lavato i capelli*, e não “ho lavato i miei capelli”. Repare: *ho fatto la doccia*, sem pronome, vai com *avere*; *mi sono fatto la barba*, com pronome, vai com *essere*. *I capelli* (o cabelo) é sempre plural."
		},
		{
			it: "E ti sei messo la cravatta! Non ti ho mai visto così elegante.",
			pt: "E você pôs gravata! Nunca te vi tão elegante.",
			lit: "E te és posto a gravata! Não te tenho nunca visto assim elegante.",
			note: "*Mettersi* = pôr (uma roupa em si mesmo): *mi metto la giacca*. *Mai* (nunca) fica entre o auxiliar e o particípio: *non ti ho mai visto*."
		},
		{
			it: "È di mio padre. Come mi sta?",
			pt: "É do meu pai. Como ficou em mim?",
			lit: "É de meu pai. Como me está?",
			note: "*Stare bene* a alguém = ficar bem, cair bem: *la giacca ti sta benissimo*."
		},
		{
			it: "Benissimo, ma è un po' storta. Aspetta... ecco, così è perfetta.",
			pt: "Muito bem, mas está um pouco torta. Espera... pronto, assim está perfeita.",
			note: "*Storto*, *storta* = torto, torta."
		},
		{
			it: "Buongiorno! Ma che succede? Perché vi siete alzati così presto?",
			pt: "Bom dia! Mas o que está acontecendo? Por que vocês se levantaram tão cedo?",
			note: "*Vi siete alzati*: com *voi*, *vi siete*. Para um grupo misto, o particípio vai no masculino plural."
		},
		{
			it: "Io mi sono alzata adesso. È Matteo che si è alzato all'alba!",
			pt: "Eu levantei agora. O Matteo é que levantou de madrugada!",
			lit: "Eu me sou levantada agora. É Matteo que se é levantado à alvorada!",
			note: "Chiara é mulher: *mi sono alzata*. *All'alba* = ao amanhecer, de madrugada. *È Matteo che...* = é o Matteo que..., para destacar quem."
		},
		{
			it: "Hai fatto colazione, almeno?",
			pt: "Você tomou café da manhã, pelo menos?",
			note: "*Fare colazione* = tomar o café da manhã. *Almeno* = pelo menos."
		},
		{
			it: "No, ho lo stomaco chiuso. Non riesco a mangiare niente.",
			pt: "Não, estou sem fome de nervoso. Não consigo comer nada.",
			lit: "Não, tenho o estômago fechado. Não consigo a comer nada.",
			note: "*Avere lo stomaco chiuso* é ficar sem fome por nervoso ou emoção. *Riuscire a* = conseguir (lição 39)."
		},
		{
			it: "Mangia qualcosa lo stesso. Un cornetto, dai.",
			pt: "Come alguma coisa mesmo assim. Um croissant, vai.",
			note: "*Lo stesso*, no fim da frase, quer dizer “mesmo assim”, “de qualquer jeito”."
		},
		{
			it: "E se mi chiedono qualcosa e non so rispondere?",
			pt: "E se me perguntarem alguma coisa e eu não souber responder?",
			lit: "E se me perguntam alguma coisa e não sei responder?",
			note: "Depois de *se*, o italiano falado usa tranquilamente o presente, onde nós usamos o futuro do subjuntivo: *se mi chiedono*, se me perguntarem."
		},
		{
			it: "Ti sei preparato per una settimana! Sai tutto di quell'azienda.",
			pt: "Você se preparou uma semana inteira! Sabe tudo dessa empresa.",
			lit: "Te és preparado por uma semana! Sabes tudo daquela empresa.",
			note: "*Prepararsi* = preparar-se. E o *per* com duração terminada, da lição 44."
		},
		{ it: "È vero. Ma sono nervoso lo stesso.", pt: "É verdade. Mas estou nervoso mesmo assim." },
		{
			it: "È normale. Anch'io mi sono sentito così prima dell'esame di italiano.",
			pt: "É normal. Eu também me senti assim antes da prova de italiano.",
			note: "*Sentirsi* = sentir-se: *mi sento bene*, *mi sono sentito male*. *Prima di* = antes de; *dell'* = *di* + *l'*."
		},
		{
			it: "Dai, è ora. In bocca al lupo!",
			pt: "Vamos, está na hora. Boa sorte!",
			lit: "Vai, é hora. Na boca do lobo!",
			note: "*In bocca al lupo!* é o “boa sorte!” dos italianos antes de uma prova, uma entrevista, uma estreia. E não se responde *grazie*: a resposta é *Crepi!* (que morra o lobo!)."
		},
		{ it: "Crepi!", pt: "Valeu!", lit: "Que morra (o lobo)!" },
		{
			it: "Ogni mattina mi alzo alle sette, mi lavo i denti e mi vesto.",
			pt: "Toda manhã eu me levanto às sete, escovo os dentes e me visto.",
			lit: "Cada manhã me levanto às sete, me lavo os dentes e me visto.",
			sep: true,
			note: "No presente, o pronome reflexivo vem antes do verbo: *mi alzo*, *mi lavo*, *mi vesto*. Escovar os dentes, em italiano, é “lavá-los”: *lavarsi i denti*."
		},
		{
			it: "Ieri sera Chiara si è addormentata sul divano.",
			pt: "Ontem à noite a Chiara pegou no sono no sofá.",
			note: "*Addormentarsi* = adormecer, pegar no sono. Em italiano é reflexivo; em português, não."
		},
		{
			it: "Rafael e Matteo hanno la stessa giacca!",
			pt: "O Rafael e o Matteo têm o mesmo casaco!",
			note: "Antes do substantivo, *stesso* é “mesmo” e concorda: *lo stesso giorno*, *la stessa giacca*. No fim da frase, *lo stesso* é “mesmo assim”."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os verbos reflexivos',
			blocks: [
				{
					type: 'p',
					text: "Você conhece um verbo reflexivo desde a lição 13: *chiamarsi*, chamar-se. Hoje apareceram vários outros, todos com o mesmo modelo. O infinitivo leva o pronome *si* colado no fim (*alzarsi*, *lavarsi*, *sentirsi*); conjugado, o pronome passa para a frente do verbo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "mi **al**zo, ti **al**zi, si **al**za", pt: "eu me levanto, você se levanta, ele se levanta" },
						{ it: "ci al**zia**mo, vi al**za**te, si **al**zano", pt: "nós nos levantamos, vocês se levantam, eles se levantam" },
						{ it: "mi sono al**za**to, mi sono al**za**ta", pt: "eu me levantei (homem, mulher)" },
						{ it: "ci siamo al**za**ti, ci siamo al**za**te", pt: "nós nos levantamos (grupo misto ou de homens, grupo de mulheres)" }
					]
				},
				{ type: 'h', text: 'No passado, sempre essere' },
				{
					type: 'p',
					text: "Todo verbo usado com pronome reflexivo faz o passado com *essere*, e o particípio concorda com o sujeito, como em *sono andato*, *sono andata* (lição 29): *Matteo si è alzato*, *Chiara si è alzata*, *vi siete alzati*. É o pronome que puxa o *essere*: *ho fatto la doccia*, mas *mi sono fatto la barba*."
				},
				{ type: 'h', text: 'Reflexivo lá, não aqui' },
				{
					type: 'p',
					text: "Muitos reflexivos italianos também são reflexivos em português: *alzarsi* (levantar-se), *vestirsi* (vestir-se), *sentirsi* (sentir-se), *prepararsi* (preparar-se). Outros não: *addormentarsi* (adormecer), *svegliarsi* (acordar), *laurearsi* (formar-se na faculdade), *sposarsi* (casar). E no Brasil a gente muitas vezes deixa o pronome de fora (“levantei cedo”); o italiano nunca: *mi sono alzato presto*."
				},
				{
					type: 'dica',
					text: "Na fala, o pronome se junta ao verbo como uma sílaba a mais, sem força própria: *mi alzo* soa “mialzo”, *si è alzato* soa “sié-alzato”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O artigo no lugar do possessivo; lo stesso',
			blocks: [
				{
					type: 'p',
					text: "Quando a frase já deixa claro de quem é a parte do corpo ou a roupa, o italiano dispensa o possessivo e usa só o artigo. O pronome reflexivo já diz tudo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi **la**vo i ca**pel**li.", pt: "Lavo o (meu) cabelo." },
						{ it: "Ti sei **mes**so la cra**vat**ta.", pt: "Você pôs a (sua) gravata." },
						{ it: "Ho lo **sto**maco **chiu**so.", pt: "Estou com o estômago fechado." },
						{ it: "**So**no ner**vo**so lo **stes**so.", pt: "Estou nervoso mesmo assim." }
					]
				},
				{
					type: 'p',
					text: "Já *lo stesso* tem dois usos. Antes do substantivo, concorda e quer dizer “o mesmo”: *lo stesso bar*, *la stessa ora*, *gli stessi amici*. Sozinho, no fim da frase, não muda e quer dizer “mesmo assim”: *piove, ma esco lo stesso* (está chovendo, mas saio mesmo assim)."
				},
				{
					type: 'dica',
					text: "Atenção ao plural: *i capelli* é o cabelo todo; *un capello* é um fio. Dizer *ho un capello nero* é falar de um fio só."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "A che ora ti sei alzato stamattina?", pt: "A que horas você se levantou hoje de manhã?" },
				{ it: "Chiara si è vestita in cinque minuti.", pt: "A Chiara se vestiu em cinco minutos." },
				{ it: "Ci siamo preparati per l'esame.", pt: "Nós nos preparamos para a prova." },
				{ it: "Mi lavo i denti dopo colazione.", pt: "Escovo os dentes depois do café da manhã." },
				{ it: "Fa freddo, ma esco lo stesso.", pt: "Está frio, mas vou sair mesmo assim." },
				{ it: "Abbiamo la stessa età.", pt: "Temos a mesma idade." },
				{ it: "Domani hai l'esame? In bocca al lupo!", pt: "Amanhã você tem prova? Boa sorte!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O Matteo se levantou às cinco.", parts: ["Matteo si è ", null, " alle cinque."], answers: ["alzato"] },
				{ pt: "Vocês se levantaram cedo?", parts: ["Vi ", null, " alzati presto?"], answers: ["siete"] },
				{ pt: "Eu lavei o cabelo.", parts: ["Mi sono lavato ", null, " capelli."], answers: ["i"] },
				{ pt: "Estou nervoso mesmo assim.", parts: ["Sono nervoso lo ", null, "."], answers: ["stesso"] },
				{ pt: "Boa sorte!", parts: ["In bocca al ", null, "!"], answers: ["lupo"] }
			]
		}
	]
};

const licao47: Lesson = {
	no: 47,
	kind: 'licao',
	title: 'Il colloquio',
	titlePt: 'A entrevista',
	lines: [
		{
			it: "Buongiorno! Lei deve essere Matteo.",
			pt: "Bom dia! O senhor deve ser o Matteo.",
			note: "Com *dovere* (lição 23) também se faz uma suposição, como em português: *deve essere*, deve ser."
		},
		{ it: "Sì, buongiorno. Molto piacere.", pt: "Sim, bom dia. Muito prazer." },
		{
			it: "Laura Marchi, ufficio del personale. Prego, si accomodi.",
			pt: "Laura Marchi, do RH. Por favor, sente-se.",
			lit: "Laura Marchi, escritório do pessoal. Por favor, se acomode.",
			note: "*Si accomodi* = sente-se, fique à vontade. É o jeito de pedir algo a quem se trata por *Lei*, como *guardi* e *provi* da lição 6; com verbo reflexivo, o pronome *si* vem na frente. Você verá essas formas com calma na lição 78. *L'ufficio del personale* é o RH."
		},
		{
			it: "Grazie. Mi scusi, posso togliermi la giacca? Fa un po' caldo.",
			pt: "Obrigado. Com licença, posso tirar o casaco? Está um pouco quente.",
			lit: "Obrigado. Me desculpe, posso me tirar o casaco? Faz um pouco de calor.",
			note: "*Togliersi* = tirar (roupa de si). Com *potere*, *dovere* e *volere*, o pronome pode ir colado no infinitivo, que perde o *-e* (*posso togliermi*), ou antes do verbo conjugado (*mi posso togliere*). As duas formas estão certas. E *la giacca*, sem possessivo, como na lição 46."
		},
		{
			it: "Si figuri! Allora, mi parli un po' di Lei.",
			pt: "Imagine! Então, me fale um pouco do senhor.",
			note: "*Si figuri!* = imagine!, não tem de quê. Com *tu*, *figurati!*. *Mi parli* é mais um pedido com *Lei*."
		},
		{
			it: "Sto finendo la magistrale in economia. Discuto la tesi fra due mesi.",
			pt: "Estou terminando o mestrado em economia. Defendo a dissertação daqui a dois meses.",
			lit: "Estou terminando a magistral em economia. Discuto a tese entre dois meses.",
			note: "*Discutere la tesi* = apresentar o trabalho final diante da banca, o último passo antes da *laurea*."
		},
		{
			it: "E perché vuole lavorare proprio da noi?",
			pt: "E por que o senhor quer trabalhar justamente com a gente?",
			lit: "E por que quer trabalhar justamente de nós?",
			note: "*Da noi* = na nossa casa, na nossa empresa, como *da me* (lição 30)."
		},
		{
			it: "Perché la musica è la mia passione. Ho cominciato a suonare la chitarra a dodici anni.",
			pt: "Porque a música é a minha paixão. Comecei a tocar violão aos doze anos.",
			lit: "Porque a música é a minha paixão. Tenho começado a tocar a guitarra a doze anos.",
			note: "*Cominciare a* + infinitivo = começar a. Quando alguém começa alguma coisa, o passado vai com *avere*: *ho cominciato a suonare*, *ho cominciato il lavoro*. *A dodici anni* = aos doze anos."
		},
		{ it: "E nel negozio di musica che cosa ha imparato?", pt: "E na loja de música, o que o senhor aprendeu?" },
		{
			it: "A parlare con i clienti. E a vendere una chitarra anche a chi non suona!",
			pt: "A falar com os clientes. E a vender violão até para quem não toca!",
			note: "*Imparare a* + infinitivo = aprender a. *A chi* = para quem (lição 37)."
		},
		{
			it: "Ottimo! Noi esportiamo molto in Sudamerica. Lei parla spagnolo?",
			pt: "Ótimo! Nós exportamos muito para a América do Sul. O senhor fala espanhol?"
		},
		{
			it: "Mi dispiace, lo spagnolo no. Ma parlo un po' di portoghese: il mio coinquilino è brasiliano.",
			pt: "Sinto muito, espanhol não. Mas falo um pouco de português: o meu colega de apartamento é brasileiro.",
			note: "*Mi dispiace* (lição 2) = sinto muito, lamento. Depois de *parlare*, a língua costuma vir sem artigo (*parlo spagnolo*); em outros casos, leva artigo: *lo spagnolo è facile*, *lo spagnolo no*."
		},
		{
			it: "Interessante! Allora, Matteo: Le offriamo un contratto di un anno, con uno stipendio di milleseicento euro al mese.",
			pt: "Interessante! Então, Matteo: oferecemos ao senhor um contrato de um ano, com um salário de mil e seiscentos euros por mês.",
			note: "*Le* = ao senhor (lição 41). *Lo stipendio* (“sti-pén-dio”) = o salário. Para valores, *di*: *uno stipendio di 1.600 euro*."
		},
		{
			it: "Quindi... mi prendete?",
			pt: "Então... vocês vão me contratar?",
			lit: "Portanto... me pegais?",
			note: "Na conversa, *prendere* também quer dizer contratar, aceitar: *mi hanno preso!*, me pegaram!, fui contratado!"
		},
		{
			it: "Sì, è assunto! Può cominciare lunedì?",
			pt: "Sim, o senhor está contratado! Pode começar segunda?",
			note: "*Assunto*, de *assumere* (lição 43). E o presente pelo futuro: *può cominciare lunedì*."
		},
		{
			it: "Lunedì? Sì! Cioè... certo, volentieri.",
			pt: "Segunda? Sim! Quer dizer... claro, com prazer.",
			note: "*Cioè* = quer dizer, ou seja: serve para explicar ou para se corrigir. *Volentieri* = com prazer, de bom grado."
		},
		{
			it: "Benissimo. Il colloquio è durato solo venti minuti, ma è stato perfetto.",
			pt: "Ótimo. A entrevista durou só vinte minutos, mas foi perfeita.",
			lit: "Muito bem. O colóquio é durado só vinte minutos, mas é estado perfeito.",
			note: "*Durare* faz o passado com *essere*: *è durato*, *la lezione è durata un'ora*. *È stato* = foi (lição 31)."
		},
		{ it: "Grazie mille, dottoressa! A lunedì!", pt: "Muito obrigado, doutora! Até segunda!" },
		{
			it: "Il colloquio è cominciato alle dieci, ma io ho cominciato a sudare alle otto!",
			pt: "A entrevista começou às dez, mas eu comecei a suar às oito!",
			sep: true,
			note: "Quando a própria coisa começa, sem objeto, *cominciare* vai com *essere*: *il colloquio è cominciato*. Quando alguém começa algo, com *avere*: *ho cominciato a sudare*. *Finire* funciona igual: *il film è finito*, *ho finito la tesi*."
		},
		{
			it: "Mi devo alzare presto. Devo alzarmi presto.",
			pt: "Preciso levantar cedo. Preciso levantar cedo.",
			note: "As duas posições do pronome, com o mesmo sentido."
		},
		{
			it: "In azienda mi hanno accolto con un caffè e tanti sorrisi.",
			pt: "Na empresa me receberam com um café e muitos sorrisos.",
			note: "*Accogliere* = receber, acolher; o particípio é *accolto*. Daí *l'accoglienza*, a acolhida."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O pronome com o infinitivo; cominciare e durare',
			blocks: [
				{
					type: 'p',
					text: "Na lição 42 você viu que os pronomes podem se colar no fim do infinitivo: *comprarlo*. Com os reflexivos é igual, e o pronome muda conforme a pessoa: *posso togliermi*, *puoi toglierti*, *può togliersi*. O infinitivo perde o *-e* final."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Pos**so to**glier**mi la **giac**ca? / Mi **pos**so **to**gliere la **giac**ca?", pt: "Posso tirar o casaco?" },
						{ it: "**De**vo al**zar**mi **pre**sto. / Mi **de**vo al**za**re **pre**sto.", pt: "Preciso levantar cedo." },
						{ it: "Vor**rei** pre**pa**rarmi **me**glio.", pt: "Eu queria me preparar melhor." }
					]
				},
				{
					type: 'p',
					text: "*Vorrei* (eu queria, eu gostaria) é a forma educada de *volere*; você vai conhecer o tempo dela na lição 80. Fora dos modais, quando o infinitivo vem sozinho, o pronome vai sempre no fim: *per svegliarmi*, *prima di vestirti*."
				},
				{ type: 'h', text: 'Cominciare, finire e durare' },
				{
					type: 'p',
					text: "*Cominciare* e *finire* têm duas caras no passado. Se alguém começa ou termina alguma coisa, *avere*: *ho cominciato a lavorare*, *Matteo ha finito la tesi*. Se a coisa começa ou termina sozinha, *essere*, com concordância: *il colloquio è cominciato*, *la lezione è finita*. Já *durare* vai sempre com *essere*: *il film è durato tre ore*."
				},
				{
					type: 'dica',
					text: "No passado com modal, as duas posições também valem, mas o auxiliar muda: *ho dovuto alzarmi presto* (pronome no fim, *avere*) ou *mi sono dovuto alzare presto* (pronome na frente, *essere*)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O mundo do trabalho',
			blocks: [
				{
					type: 'p',
					text: "O Matteo agora vai precisar de um vocabulário novo. Algumas palavras do contrato e do dia a dia de quem trabalha na Itália:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "lo sti**pen**dio **lor**do / **net**to", pt: "o salário bruto / líquido" },
						{ it: "la tredi**ce**sima", pt: "o 13º salário" },
						{ it: "il pe**ri**odo di **pro**va", pt: "o período de experiência" },
						{ it: "le **fe**rie", pt: "as férias (do trabalho)" },
						{ it: "il / la col**le**ga", pt: "o colega, a colega" }
					]
				},
				{
					type: 'p',
					text: "Como no Brasil, a maioria dos empregados na Itália recebe um salário a mais no fim do ano, *la tredicesima* (a décima terceira). As férias do trabalho são *le ferie*, sempre no plural; *le vacanze* são as férias em geral, da escola ou da viagem. E *il collega* é masculino mesmo terminando em *-a*, como *il turista* (lição 16)."
				},
				{ type: 'h', text: 'Mi dispiace' },
				{
					type: 'p',
					text: "*Mi dispiace* é o “sinto muito”: para recusar com educação (*mi dispiace, lo spagnolo no*), para dar uma má notícia ou para consolar alguém. Para pedir desculpas por um erro seu, use *scusa* ou *scusi*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Si accomodi, dottore.", pt: "Sente-se, doutor." },
				{ it: "Posso sedermi qui?", pt: "Posso me sentar aqui?" },
				{ it: "Devo prepararmi per il colloquio.", pt: "Preciso me preparar para a entrevista." },
				{ it: "Il film è cominciato alle nove ed è durato tre ore.", pt: "O filme começou às nove e durou três horas." },
				{ it: "Ho cominciato a lavorare a diciotto anni.", pt: "Comecei a trabalhar aos dezoito anos." },
				{ it: "Mi dispiace, oggi il direttore non c'è.", pt: "Sinto muito, hoje o diretor não está." },
				{ it: "Lo stipendio è buono e i colleghi sono simpatici.", pt: "O salário é bom e os colegas são simpáticos." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Posso tirar o casaco?", parts: ["Posso ", null, " la giacca?"], answers: ["togliermi"] },
				{ pt: "A entrevista começou às dez.", parts: ["Il colloquio è ", null, " alle dieci."], answers: ["cominciato"] },
				{ pt: "Comecei a estudar italiano em janeiro.", parts: ["Ho cominciato ", null, " studiare italiano a gennaio."], answers: ["a"] },
				{ pt: "A reunião durou duas horas.", parts: ["La riunione è ", null, " due ore."], answers: ["durata"] },
				{ pt: "Sinto muito, não falo espanhol.", parts: ["Mi ", null, ", non parlo spagnolo."], answers: ["dispiace"] }
			]
		}
	]
};

const licao48: Lesson = {
	no: 48,
	kind: 'licao',
	title: 'La scuola italiana',
	titlePt: 'A escola italiana',
	lines: [
		{
			it: "Al nuovo lavoro di Matteo! Cin cin!",
			pt: "Ao novo emprego do Matteo! Saúde!",
			note: "*Cin cin!* (“tchin tchin”) é o brinde informal. Também se diz *Alla salute!*."
		},
		{ it: "Grazie, ragazzi! E grazie a te per l'annuncio, Davide.", pt: "Obrigado, gente! E obrigado a você pelo anúncio, Davide." },
		{ it: "Francesca, anche tu lavori in un ufficio?", pt: "Francesca, você também trabalha num escritório?" },
		{
			it: "No, io faccio la maestra. Insegno in una scuola elementare.",
			pt: "Não, eu sou professora primária. Dou aula numa escola de ensino fundamental.",
			lit: "Não, eu faço a mestra. Ensino em uma escola elementar.",
			note: "*Fare* + artigo + profissão é um jeito comum de dizer o que se faz: *faccio la maestra*, *fa il medico*. *Il maestro*, *la maestra* ensinam às crianças pequenas; nas outras escolas e na faculdade, *il professore*, *la professoressa*."
		},
		{ it: "Che bello! E quanti anni hanno i bambini alle elementari?", pt: "Que legal! E quantos anos têm as crianças no primário?" },
		{
			it: "Da sei a dieci, più o meno. Le elementari durano cinque anni, poi ci sono le medie.",
			pt: "De seis a dez, mais ou menos. O primário dura cinco anos, depois vem o ginásio.",
			lit: "De seis a dez, mais ou menos. As elementares duram cinco anos, depois há as médias.",
			note: "*Le elementari* e *le medie* são formas curtas de *le scuole elementari*, *le scuole medie*; por isso são femininas e plurais."
		},
		{
			it: "E dopo le medie tutti i ragazzi vanno al liceo?",
			pt: "E depois do ginásio todos os jovens vão para o liceo?",
			note: "*Tutti* + artigo + plural = todos os: *tutti i ragazzi*, *tutte le scuole*, *tutti gli studenti*. O artigo não cai, como em português."
		},
		{
			it: "No, non tutti. Ci sono i licei, ma anche gli istituti tecnici e professionali.",
			pt: "Não, nem todos. Há os licei, mas também as escolas técnicas e profissionalizantes.",
			lit: "Não, não todos. Há os liceus, mas também os institutos técnicos e profissionais.",
			note: "*Liceo* → *licei*, plural regular. *Non tutti* = nem todos."
		},
		{
			it: "E alla fine delle superiori c'è la maturità, un esame bello difficile.",
			pt: "E no fim do ensino médio tem a maturità, uma prova bem difícil.",
			lit: "E ao fim das superiores há a maturidade, um exame belo difícil.",
			note: "*Le superiori* = o ensino médio. *La maturità* é o exame final que dá o *diploma*. *Bello* antes de outro adjetivo reforça, como o nosso “bem”: *bello difficile*, *bello stanco*."
		},
		{
			it: "Io la ricordo ancora: tutta la notte sui libri!",
			pt: "Eu ainda lembro dela: a noite inteira em cima dos livros!",
			lit: "Eu a recordo ainda: toda a noite sobre os livros!",
			note: "No singular, *tutto* + artigo = inteiro: *tutta la notte*, *tutto il giorno*, *tutta la famiglia*."
		},
		{
			it: "E per entrare all'università basta il diploma?",
			pt: "E para entrar na faculdade basta o diploma?",
			note: "*Bastare* = bastar, ser suficiente. Concorda com o que basta: *basta il diploma*, *bastano due anni*."
		},
		{
			it: "Sì, di solito basta. Ma per alcuni corsi c'è anche un test d'ingresso.",
			pt: "Sim, normalmente basta. Mas para alguns cursos tem também uma prova de admissão.",
			lit: "Sim, de costume basta. Mas para alguns cursos há também um teste de ingresso.",
			note: "*Di solito* = normalmente, em geral. *Alcuni* = alguns, com o plural."
		},
		{
			it: "E all'università i voti vanno da diciotto a trenta. Io ho preso anche qualche trenta e lode!",
			pt: "E na faculdade as notas vão de dezoito a trinta. Eu tirei até uns trinta com louvor!",
			lit: "E à universidade os votos vão de dezoito a trinta. Eu tenho pegado também algum trinta e louvor!",
			note: "*Il voto* = a nota. Na faculdade, cada exame vale de 18 (o mínimo para passar) a 30; a nota máxima com elogio é *trenta e lode*. *Prendere un voto* = tirar uma nota."
		},
		{ it: "Sì, sì... e anche qualche diciotto!", pt: "Sei, sei... e uns dezoito também!", lit: "Sim, sim... e também algum dezoito!" },
		{
			it: "Basta parlare di scuola, ragazzi! Mi bastano i miei venticinque bambini.",
			pt: "Chega de falar de escola, gente! Já me bastam as minhas vinte e cinco crianças.",
			lit: "Basta falar de escola, rapazes! Me bastam os meus vinte e cinco meninos.",
			note: "*Basta!* sozinho = chega!; *basta* + infinitivo = chega de: *basta parlare*. E com pronome: *mi basta*, *mi bastano* (me basta, me bastam)."
		},
		{ it: "Venticinque? Tutti insieme? Che pazienza!", pt: "Vinte e cinco? Todas juntas? Que paciência!" },
		{
			it: "Tutti gli amici di Matteo sono venuti alla festa.",
			pt: "Todos os amigos do Matteo vieram à festa.",
			sep: true,
			note: "*Tutti gli* antes de vogal e de *s* + consoante, como o artigo."
		},
		{
			it: "Ti bastano dieci euro? Sì, mi basta anche meno.",
			pt: "Dez euros são suficientes para você? Sim, até menos me basta.",
			lit: "Te bastam dez euros? Sim, me basta também menos."
		},
		{
			it: "Per il colloquio sono bastati venti minuti.",
			pt: "Para a entrevista bastaram vinte minutos.",
			note: "*Bastare* faz o passado com *essere*, e o particípio concorda: *sono bastati venti minuti*, *è bastata una telefonata*."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Tutto e bastare',
			blocks: [
				{
					type: 'p',
					text: "*Tutto* concorda como qualquer adjetivo em *-o* e quase sempre vem com o artigo depois. No plural, é “todos os”; no singular, “o inteiro”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**tut**ti i ra**gaz**zi, **tut**ti gli stu**den**ti", pt: "todos os jovens, todos os estudantes" },
						{ it: "**tut**te le **scuo**le", pt: "todas as escolas" },
						{ it: "**tut**ta la **not**te, **tut**to il **gior**no", pt: "a noite inteira, o dia inteiro" },
						{ it: "**tut**ti e due, **tut**te e tre", pt: "os dois, as três" }
					]
				},
				{
					type: 'p',
					text: "*Tutti e due* você conhece desde a lição 1. E sozinho, *tutto* é “tudo” (*sai tutto*), *tutti* é “todo mundo”: *Ciao a tutti!*, oi, pessoal!"
				},
				{ type: 'h', text: 'Bastare' },
				{
					type: 'p',
					text: "*Bastare* se usa como em português, mas o italiano presta atenção ao número: o verbo concorda com aquilo que basta. *Basta un caffè*, *bastano due caffè*. Com a pessoa, entra um pronome indireto: *mi basta*, *ti bastano*, *gli basta*. No passado, *essere*: *è bastata un'ora*, *sono bastati venti minuti*."
				},
				{
					type: 'dica',
					text: "*Basta!* sozinho é o “chega!” que você vai ouvir muito na Itália, de pais para filhos e de amigos à mesa. Em loja, *basta così* quer dizer “só isso, obrigado”."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A escola na Itália',
			blocks: [
				{
					type: 'p',
					text: "A escola italiana tem uma etapa a mais que a brasileira: são 13 anos até o diploma do ensino médio, contra os nossos 12. Veja o caminho de uma criança italiana:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "la **scuo**la dell'in**fan**zia", pt: "a pré-escola, dos 3 aos 6 anos (não obrigatória)" },
						{ it: "le ele**men**tari", pt: "o primário: 5 anos, dos 6 aos 11" },
						{ it: "le **me**die", pt: "o ginásio: 3 anos, dos 11 aos 14" },
						{ it: "le supe**rio**ri", pt: "o ensino médio: 5 anos, dos 14 aos 19" },
						{ it: "l'universi**tà**", pt: "a faculdade: *laurea triennale* (3 anos) + *magistrale* (2 anos)" }
					]
				},
				{
					type: 'p',
					text: "Nas *superiori*, o aluno escolhe um caminho aos 14 anos: o *liceo* (clássico, científico, de línguas, artístico...), que prepara para a universidade, o *istituto tecnico* ou o *istituto professionale*, mais voltados para uma profissão. A escola é obrigatória até os 16 anos. No fim das *superiori* vem a *maturità*, o exame que dá o diploma e que todo italiano lembra pelo resto da vida."
				},
				{ type: 'h', text: 'As notas' },
				{
					type: 'p',
					text: "Na escola, as notas vão de 1 a 10, e o mínimo para passar é 6, *la sufficienza*. Na universidade, cada exame vale de 18 a 30, e o melhor resultado possível é *trenta e lode*. Muitos exames da faculdade são orais: o aluno conversa com o professor, diante de outros alunos."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Tutti i bambini sono in classe.", pt: "Todas as crianças estão na sala de aula." },
				{ it: "Ho letto tutto il libro in un giorno.", pt: "Li o livro inteiro em um dia." },
				{ it: "Ti basta un'ora? No, mi bastano due ore.", pt: "Uma hora é suficiente para você? Não, preciso de duas horas." },
				{ it: "Mia cugina fa la maestra a Torino.", pt: "Minha prima é professora primária em Turim." },
				{ it: "Le medie durano tre anni.", pt: "O ginásio dura três anos." },
				{ it: "Basta, ragazzi! È tardi.", pt: "Chega, gente! Está tarde." },
				{ it: "Matteo ha preso trenta e lode all'esame.", pt: "O Matteo tirou trinta com louvor na prova." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Vieram todos os estudantes.", parts: ["Sono venuti ", null, " gli studenti."], answers: ["tutti"] },
				{ pt: "A família inteira está aqui.", parts: ["C'è ", null, " la famiglia."], answers: ["tutta"] },
				{ pt: "Um café me basta.", parts: ["Mi ", null, " un caffè."], answers: ["basta"] },
				{ pt: "Dois dias me bastam.", parts: ["Mi ", null, " due giorni."], answers: ["bastano"] },
				{ pt: "Minha irmã é professora primária.", parts: ["Mia sorella fa la ", null, "."], answers: ["maestra"] }
			]
		}
	]
};

const licao49: Lesson = {
	no: 49,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Stare + gerúndio',
			blocks: [
				{
					type: 'p',
					text: "Mais uma semana! O Matteo achou emprego, e você juntou ferramentas novas. Vamos arrumá-las. Primeiro, a ação em andamento: *stare* (*sto, stai, sta, stiamo, state, stanno*) + gerúndio. O gerúndio termina em *-ando* nos verbos em *-are* e em *-endo* nos outros, e não muda nunca."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che cosa stai facendo a Bologna?", pt: "O que você está fazendo em Bolonha? (lição 43)" },
						{ it: "Sto finendo la tesi di laurea.", pt: "Estou terminando a dissertação. (lição 43)" },
						{ it: "Stiamo bloccando il marciapiede.", pt: "Estamos bloqueando a calçada. (lição 43)" },
						{ it: "Che cosa stai guardando con quella faccia?", pt: "O que você está olhando com essa cara? (lição 44)" }
					]
				},
				{
					type: 'p',
					text: "Os irregulares que vale a pena guardar: *facendo* (*fare*), *dicendo* (*dire*), *bevendo* (*bere*). E lembre que o italiano usa essa construção menos que nós: *che cosa fai?* é perfeitamente natural para “o que você está fazendo?”."
				},
				{
					type: 'dica',
					text: "Nada de gerúndio para o futuro. “Vou estar te mandando o currículo amanhã” é simplesmente *ti mando il curriculum domani*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os verbos reflexivos',
			blocks: [
				{
					type: 'p',
					text: "No presente, o pronome vem antes do verbo: *mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano*. No passado, o auxiliar é sempre *essere*, e o particípio concorda com o sujeito."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi sono alzato alle cinque.", pt: "Levantei às cinco. (Matteo, lição 46)" },
						{ it: "Io mi sono alzata adesso.", pt: "Eu levantei agora. (Chiara, lição 46)" },
						{ it: "Perché vi siete alzati così presto?", pt: "Por que vocês se levantaram tão cedo? (lição 46)" },
						{ it: "Mi sono lavato i capelli.", pt: "Lavei o cabelo: artigo, não possessivo. (lição 46)" }
					]
				},
				{ type: 'h', text: 'Com o infinitivo' },
				{
					type: 'p',
					text: "Com um infinitivo, o pronome se cola no fim dele, e o infinitivo perde o *-e*: *alzarmi*, *prepararti*, *svegliarsi*. Com *potere*, *dovere* e *volere*, você escolhe: pronome no fim do infinitivo ou antes do verbo conjugado."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Posso togliermi la giacca?", pt: "Posso tirar o casaco? (lição 47)" },
						{ it: "Mi devo alzare presto.", pt: "Preciso levantar cedo. (lição 47)" }
					]
				},
				{
					type: 'dica',
					text: "O pronome muda com a pessoa também no infinitivo: *devo alzarmi*, *devi alzarti*, *deve alzarsi*, *dobbiamo alzarci*, *dovete alzarvi*, *devono alzarsi*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Verbos que pedem essere',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 29 você sabe que alguns verbos fazem o passado com *essere*: os de movimento (*andare, venire, arrivare*), por exemplo. Neste bloco entraram os reflexivos (lição 46) e outros mais. Em comum, eles não têm objeto direto: a coisa acontece com o sujeito. E o particípio sempre concorda com ele."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Com'è andato il matrimonio?", pt: "*andare*: como foi o casamento? (lição 43)" },
						{ it: "Al telefono tua madre mi è sembrata molto contenta.", pt: "*sembrare*: sua mãe me pareceu muito contente. (lição 44)" },
						{ it: "Sono nato a Torino.", pt: "*nascere*: nasci em Turim. (lição 45)" },
						{ it: "Il colloquio è durato solo venti minuti.", pt: "*durare*: a entrevista durou só vinte minutos. (lição 47)" },
						{ it: "Per il colloquio sono bastati venti minuti.", pt: "*bastare*: bastaram vinte minutos. (lição 48)" }
					]
				},
				{
					type: 'p',
					text: "*Cominciare* e *finire* fazem as duas coisas. Com objeto, ou quando alguém começa algo, *avere*: *ho cominciato a suonare a dodici anni* (lição 47). Sem objeto, quando a coisa começa sozinha, *essere*: *il colloquio è cominciato alle dieci*."
				},
				{ type: 'h', text: 'Per, da e fa' },
				{
					type: 'p',
					text: "E para medir o tempo: *da* com o presente para o que continua (*abito qui da un anno*), *per* com o passado para o que acabou (*ho lavorato per tre anni in un negozio*, lição 44), *fa* para quanto tempo atrás (*sei anni fa*)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do reencontro na rua até o brinde, estas expressões apareceram nas lições 43 a 48. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che sorpresa!", pt: "Que surpresa!" },
						{ it: "Beato te!", pt: "Sorte sua!" },
						{ it: "Com'è andato?", pt: "Como foi?" },
						{ it: "Dai, coraggio!", pt: "Vamos, ânimo!" },
						{ it: "per ora", pt: "por enquanto" },
						{ it: "fatto apposta per me", pt: "feito sob medida para mim" },
						{ it: "Sei un tesoro!", pt: "Você é um amor!" },
						{ it: "Ecco fatto!", pt: "Pronto!" },
						{ it: "Non ho chiuso occhio.", pt: "Não preguei o olho." },
						{ it: "Ho lo stomaco chiuso.", pt: "Estou sem fome de nervoso." },
						{ it: "lo stesso", pt: "mesmo assim" },
						{ it: "In bocca al lupo! Crepi!", pt: "Boa sorte! Valeu!" },
						{ it: "Si accomodi. / Si figuri!", pt: "Sente-se. / Imagine! (com *Lei*)" },
						{ it: "Cioè...", pt: "Quer dizer..." },
						{ it: "Volentieri!", pt: "Com prazer!" },
						{ it: "Cin cin!", pt: "Saúde! (no brinde)" },
						{ it: "Basta!", pt: "Chega!" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém que você conhece tiver uma prova ou uma entrevista, mande um *In bocca al lupo!*. E, se receber um, não esqueça: *Crepi!*, nunca *grazie*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'A segunda onda',
			blocks: [
				{
					type: 'p',
					text: "Com esta revisão termina a primeira fase do curso. Desde a lição 1 o seu trabalho foi passivo: ouvir, ler, entender e repetir. Parece pouco, mas, sem perceber, você guardou centenas de palavras e um bom pedaço da gramática: o presente, o passado, os pronomes, os reflexivos, o gerúndio."
				},
				{
					type: 'p',
					text: "Amanhã, na lição 50, começa a **segunda onda**, a fase ativa. Funciona assim: junto com cada lição nova, você refaz uma lição antiga, contando 49 para trás. Com a 50, a lição 1; com a 51, a lição 2; e assim por diante, até o fim do curso."
				},
				{ type: 'h', text: 'Como refazer uma lição antiga' },
				{
					type: 'p',
					text: "Desta vez, ao contrário. Leia a frase em português, sem olhar o italiano, e diga a frase em italiano, em voz alta. Depois confira. Faça isso com as falas do diálogo e com as frases do exercício de tradução. No fim, ouça o diálogo antigo mais uma vez, inteiro."
				},
				{
					type: 'p',
					text: "Não se cobre perfeição. Se a frase não sair, olhe o italiano, repita duas ou três vezes e siga em frente. Uma palavra trocada ou um artigo errado não têm importância; importa tentar montar a frase sozinho. São uns dez minutos a mais por dia."
				},
				{
					type: 'p',
					text: "A lição nova continua do jeito de sempre: ouvir, ler, repetir, exercícios. As duas andam juntas: a nova traz o que você ainda não sabe, a antiga transforma em fala o que você já sabe."
				},
				{
					type: 'dica',
					text: "A lição 1 vai parecer fácil, talvez fácil demais. É exatamente esse o ponto: você vai ver, com os próprios olhos, quanto caminho já fez desde o *Chi è?* da primeira porta."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa state facendo? Stiamo preparando la cena.", pt: "O que vocês estão fazendo? Estamos preparando o jantar." },
				{ it: "Mi sono alzato presto, ma sono arrivato tardi lo stesso.", pt: "Levantei cedo, mas cheguei atrasado mesmo assim." },
				{ it: "Chiara si è vestita e si è messa la giacca nuova.", pt: "A Chiara se vestiu e pôs o casaco novo." },
				{ it: "Devo svegliarmi alle sei: domani comincio a lavorare.", pt: "Preciso acordar às seis: amanhã começo a trabalhar." },
				{ it: "L'esame è durato tre ore, ma mi è sembrato facile.", pt: "A prova durou três horas, mas me pareceu fácil." },
				{ it: "Ho lavorato per due anni a Milano, ma abito a Bologna da un anno.", pt: "Trabalhei dois anos em Milão, mas moro em Bolonha há um ano." },
				{ it: "Tutti i miei amici sono venuti alla festa.", pt: "Todos os meus amigos vieram à festa." },
				{ it: "Com'è andato il colloquio? Benissimo, mi hanno assunto!", pt: "Como foi a entrevista? Ótima, me contrataram!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O Matteo está escrevendo a dissertação.", parts: ["Matteo sta ", null, " la tesi."], answers: ["scrivendo"] },
				{ pt: "Nós nos levantamos às sete.", parts: ["Ci ", null, " alzati alle sette."], answers: ["siamo"] },
				{ pt: "A festa me pareceu bonita.", parts: ["La festa mi è ", null, " bella."], answers: ["sembrata"] },
				{ pt: "Preciso me preparar.", parts: ["Devo ", null, "."], answers: ["prepararmi"] },
				{ pt: "Bastaram cinco minutos.", parts: ["Sono ", null, " cinque minuti."], answers: ["bastati"] }
			]
		}
	]
};

export const unidade: Unit = { no: 7, title: 'Primeiro emprego', lessons: [43, 44, 45, 46, 47, 48, 49] };

export const licoes: Lesson[] = [licao43, licao44, licao45, licao46, licao47, licao48, licao49];
