import type { Lesson, Unit } from '../types.ts';

// Lições 71–77: outubro, fim de semana no campo, na época da vindima. Rafael, Chiara e Matteo vão a Turim
// e saem com a família da Elena (Paolo, Bianca, 7 anos, e os gêmeos Leo e Nina, quase um ano) para a
// Cascina Bricco, perto de Alba, nas Langhe: a casa dos avós do Matteo, Teresa (80, ex-enfermeira) e
// Aldo (84, trabalhou quarenta anos na Fiat, em Mirafiori), pais da Paola. A cascina era dos pais da
// Teresa. Galinhas, a gata Mimì com filhotes, o cachorro Tobia, horta e vinha de nebbiolo; pesca no
// laghetto com o Aldo e a piada do verme; brincadeira de sufixos com a Bianca à beira do fogão.
// Tema do bloco: o imperativo. Ver docs/agents/curso-assimil-mapa.md.

const licao71: Lesson = {
	no: 71,
	kind: 'licao',
	title: 'Sbrigati, Bianca!',
	titlePt: 'Anda logo, Bianca!',
	lines: [
		{
			it: "Bianca, sbrigati! Fra dieci minuti partiamo.",
			pt: "Bianca, anda logo! Daqui a dez minutos a gente sai.",
			lit: "Bianca, apressa-te! Entre dez minutos partimos.",
			note: "*Sbrigarsi* = apressar-se. No imperativo de *tu*, o pronome do verbo reflexivo gruda no fim: *sbriga* + *ti* = *sbrigati*. A força não sai do lugar: “zbrí-ga-ti”. *Fra dieci minuti*, como na lição 19."
		},
		{
			it: "Mamma, non trovo le scarpe rosse!",
			pt: "Mãe, não estou achando os sapatos vermelhos!"
		},
		{
			it: "Sono sotto il letto. Mettitele e vieni a fare colazione.",
			pt: "Estão debaixo da cama. Calce e venha tomar café.",
			lit: "São sob a cama. Põe-te-as e vem a fazer colazione.",
			note: "*Mettiti le scarpe* = calce os sapatos. Com o pronome *le* (os sapatos), entra o combinado da lição 50: *te le*, que no imperativo gruda no verbo: *mettitele*. É uma palavra só: “mét-ti-te-le”."
		},
		{
			it: "Buongiorno! Noi siamo pronti... voi un po' meno, vedo.",
			pt: "Bom dia! Nós estamos prontos... vocês um pouco menos, pelo que vejo.",
			lit: "Bom-dia! Nós somos prontos... vós um pouco menos, vejo."
		},
		{
			it: "Ciao, ragazzi! Matteo, tienimi Leo un attimo, per favore.",
			pt: "Oi, gente! Matteo, segura o Leo para mim um instante, por favor.",
			lit: "Tchau, rapazes! Matteo, segura-me Leo um átimo, por favor.",
			note: "*Tenere* = segurar, ter na mão, manter. É irregular: *tengo, tieni, tiene, teniamo, tenete, tengono*. O imperativo de *tu* é *tieni*, e o pronome gruda nele: *tienimi* = segura para mim."
		},
		{
			it: "Vieni qui, Leo! Ma quanto pesi? Mangi più di me!",
			pt: "Vem cá, Leo! Mas quanto você pesa? Você come mais que eu!",
			note: "*Vieni* é o imperativo de *venire*, igual ao presente. E *più di me*, o comparativo da lição 60."
		},
		{
			it: "Chiara, scusa, la borsa dei pannolini è in cucina. Passamela, per favore.",
			pt: "Chiara, desculpe, a bolsa das fraldas está na cozinha. Me passa, por favor.",
			lit: "Chiara, desculpa, a bolsa das fraldas é em cozinha. Passa-ma, por favor.",
			note: "*Passa* + *me* + *la* = *passamela*: o imperativo leva os dois pronomes grudados, na ordem que você já conhece de *me la*. *Il pannolino* = a fralda."
		},
		{
			it: "Eccola. E questo zaino blu? Di chi è?",
			pt: "Aqui está. E esta mochila azul? De quem é?",
			note: "*Di chi è?* = de quem é? Para várias coisas: *di chi sono?*. A resposta segue o mesmo molde: *è di Rafael*, *è di mia sorella*."
		},
		{
			it: "Blu? È di Rafael, naturalmente. È suo.",
			pt: "Azul? É do Rafael, claro. É dele.",
			note: "Depois de *essere*, o possessivo pode ficar sem artigo: *è suo* (é dele), *è mio* (é meu), *sono tuoi?* (são seus?). O Rafael, você lembra, adora azul."
		},
		{
			it: "No, il mio è nero. Quello blu è il tuo, Matteo!",
			pt: "Não, a minha é preta. A azul é a sua, Matteo!",
			lit: "Não, o meu é preto. Aquele azul é o teu, Matteo!",
			note: "Sem substantivo, o possessivo vira pronome e leva o artigo: *il mio* (o meu), *il tuo* (o seu). Concorda com a coisa: *lo zaino* é masculino, por isso *il mio, nero*."
		},
		{
			it: "Paolo, va' a prendere la macchina. E fa' presto, che c'è il mercato in piazza!",
			pt: "Paolo, vai pegar o carro. E anda rápido, que tem feira na praça!",
			lit: "Paolo, vai a pegar a máquina. E faz cedo, que há o mercado em praça!",
			note: "*Va'* e *fa'* são as formas curtas do imperativo de *andare* e *fare*; o apóstrofo marca a letra que caiu. Também se diz *vai* e *fai*. *Fare presto* = andar rápido (lição 23). O *che* do fim é o “que” coloquial de “porque”."
		},
		{
			it: "Vado, vado! Ma le chiavi? Dove sono le chiavi?",
			pt: "Já vou, já vou! Mas e as chaves? Cadê as chaves?",
			lit: "Vou, vou! Mas as chaves? Onde são as chaves?"
		},
		{
			it: "Le ho io, papà! Le ho messe nella mia borsetta.",
			pt: "Estão comigo, papai! Eu coloquei na minha bolsinha.",
			lit: "As tenho eu, papai! As tenho postas na minha bolsinha.",
			note: "*Le ho io* = quem as tem sou eu. *Le ho messe*: o particípio concorda com *le*, como na lição 34. *La borsetta* é *la borsa* com o sufixo *-etta*; voltaremos aos sufixos na lição 76."
		},
		{
			it: "Bianca! Portamele subito!",
			pt: "Bianca! Traga para mim agora mesmo!",
			lit: "Bianca! Traz-mas logo!",
			note: "*Porta* + *me* + *le* (as chaves) = *portamele*. *Portare* é levar e também trazer."
		},
		{
			it: "Ecco. Ma non dirlo a nessuno, eh?",
			pt: "Pronto. Mas não conta para ninguém, hein?",
			lit: "Eis. Mas não dizê-lo a ninguém, eh?",
			note: "Eis o imperativo negativo de *tu*, que estava prometido desde a lição 23: *non* + infinitivo. *Non dire!* = não diga! O pronome gruda no infinitivo: *non dirlo*. Com *voi*, você já sabe: *non ditelo*."
		},
		{
			it: "Troppo tardi: l'abbiamo sentito tutti. Allora: borse, pannolini, gemelli... andiamo!",
			pt: "Tarde demais: todo mundo ouviu. Então: bolsas, fraldas, gêmeos... vamos!",
			lit: "Demasiado tarde: o temos ouvido todos. Então: bolsas, fraldas, gêmeos... andamos!",
			note: "*Sentire* aqui é ouvir (lição 9). *Andiamo!* = vamos!: o imperativo de *noi* é igual ao presente."
		},
		{
			it: "Aspettate! Il mio passaporto! Dov'è il mio passaporto?",
			pt: "Esperem! O meu passaporte! Cadê o meu passaporte?"
		},
		{
			it: "Rafael, andiamo nelle Langhe, non in Brasile!",
			pt: "Rafael, a gente vai para as Langhe, não para o Brasil!",
			lit: "Rafael, andamos nas Langhe, não em Brasil!",
			note: "*Le Langhe* são colinas de vinhedos no sul do Piemonte, perto de Alba, a uma hora de Turim. Nome feminino plural: *nelle Langhe*."
		},
		{
			it: "Sbrigatevi, ragazzi! E mettetevi la giacca: fuori fa freddo.",
			pt: "Andem logo, gente! E vistam o casaco: lá fora está frio.",
			sep: true,
			note: "Com *voi* o pronome também gruda: *sbrigatevi*, *mettetevi*. Com *noi*: *sbrighiamoci!* (vamos nos apressar!), com o *h* da lição 12."
		},
		{
			it: "Questi libri sono tuoi? No, non sono miei: sono di Chiara.",
			pt: "Estes livros são seus? Não, não são meus: são da Chiara."
		},
		{
			it: "Porta il caffè al nonno, ma non svegliarlo se dorme.",
			pt: "Leva o café para o vovô, mas não acorda ele se estiver dormindo.",
			lit: "Leva o café ao avô, mas não despertá-lo se dorme.",
			note: "*Porta*: afirmativo. *Non svegliarlo*: negativo, *non* + infinitivo, com o pronome no fim."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O imperativo com pronomes',
			blocks: [
				{
					type: 'p',
					text: "Na lição 18 você aprendeu o imperativo de *tu* e *voi* (*guarda, prendi, apri, guardate*), e o “vamos” com a forma de *noi* (*andiamo*). Hoje ele ganhou pronomes. A regra é a mesma do infinitivo (lição 38): com *tu*, *noi* e *voi*, todo pronome átono gruda no fim do imperativo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**sbri**gati! / sbri**ghia**moci! / sbri**ga**tevi!", pt: "anda logo! / vamos nos apressar! / andem logo!" },
						{ it: "**pren**dilo! / pren**de**telo!", pt: "pega! / peguem! (o objeto: *lo*)" },
						{ it: "**tie**nimi **Le**o!", pt: "segura o Leo para mim!" },
						{ it: "**pas**samela! / **por**tamele!", pt: "me passa (a bolsa)! / me traga (as chaves)!" },
						{ it: "**met**titele!", pt: "calce (os sapatos)!" }
					]
				},
				{
					type: 'p',
					text: "Por mais sílabas que se juntem, a força fica onde estava no verbo sozinho: *passa* → *passamela* (“pás-sa-me-la”). Diga tudo de uma vez, como uma palavra comprida."
				},
				{ type: 'h', text: "Não faça isso: non + infinitivo" },
				{
					type: 'p',
					text: "Com *tu*, a ordem negativa não usa o imperativo: usa *non* + infinitivo. *Non correre!* (não corra!), *non dire niente!* (não diga nada!). O pronome gruda no infinitivo, que perde o *-e*: *non dirlo*, *non chiamarlo*, *non preoccuparti*. Com *noi* e *voi*, basta o *non* na frente: *non diciamolo*, *non ditelo*."
				},
				{ type: 'h', text: "As formas curtas" },
				{
					type: 'p',
					text: "Cinco verbos muito usados têm, no imperativo de *tu*, uma forma curta com apóstrofo: *va'* (*andare*), *fa'* (*fare*), *da'* (*dare*), *sta'* (*stare*) e *di'* (*dire*). Os quatro primeiros também aceitam a forma longa (*vai, fai, dai, stai*); *dire* só tem *di'*. Na lição de amanhã você vai ver o que acontece quando um pronome gruda nessas formas."
				},
				{
					type: 'dica',
					text: "*Tieni!*, sozinho, é o que se diz ao entregar alguma coisa: “toma!”, “aqui está!”. Para várias pessoas, *tenete!*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Di chi è? Os possessivos sozinhos',
			blocks: [
				{
					type: 'p',
					text: "Para perguntar o dono, *di chi è?* ou *di chi sono?*. Na resposta, *di* + pessoa (*è di Rafael*) ou um possessivo. Depois de *essere*, o possessivo dispensa o artigo quando só diz de quem é a coisa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Di chi è questo **zai**no? È **suo**.", pt: "De quem é esta mochila? É dele." },
						{ it: "Di chi sono queste **chia**vi? Sono **mie**!", pt: "De quem são estas chaves? São minhas!" },
						{ it: "Il **mi**o è **ne**ro, il **tu**o è blu.", pt: "A minha é preta, a sua é azul." },
						{ it: "Le **mi**e **scar**pe sono **ros**se. E le **tu**e?", pt: "Os meus sapatos são vermelhos. E os seus?" }
					]
				},
				{
					type: 'p',
					text: "Quando o possessivo está no lugar do substantivo, ele leva artigo, como o nosso “o meu”: *il mio, la mia, i miei, le mie*, *il tuo, il suo, il nostro, il vostro, il loro*. E concorda com a coisa possuída, nunca com o dono: o zaino do Rafael é *il suo*, a bolsa do Rafael é *la sua*."
				},
				{
					type: 'dica',
					text: "*I miei* sozinho, sem substantivo, quer dizer “os meus pais”: *stasera ceno dai miei* (hoje janto na casa dos meus pais). Do mesmo jeito, *i tuoi*, *i suoi*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Sbrigati! Il treno parte fra cinque minuti.", pt: "Anda logo! O trem sai daqui a cinco minutos." },
				{ it: "Questo zaino è tuo? No, il mio è nero.", pt: "Esta mochila é sua? Não, a minha é preta." },
				{ it: "Tienimi la borsa un attimo, per favore.", pt: "Segura a bolsa para mim um instante, por favor." },
				{ it: "La giacca? Mettitela, fa freddo!", pt: "O casaco? Veste, está frio!" },
				{ it: "Va' in cucina e portami un bicchiere d'acqua.", pt: "Vai até a cozinha e me traz um copo d'água." },
				{ it: "Non dirlo alla mamma, è una sorpresa.", pt: "Não conta para a mamãe, é uma surpresa." },
				{ it: "Di chi sono queste chiavi? Sono di Paolo.", pt: "De quem são estas chaves? São do Paolo." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Andem logo, gente!", parts: ["", null, ", ragazzi!"], answers: ["sbrigatevi"] },
				{ pt: "O livro? Me passa, por favor.", parts: ["Il libro? ", null, ", per favore."], answers: ["passamelo"] },
				{ pt: "Não fala para ninguém!", parts: ["Non ", null, " a nessuno!"], answers: ["dirlo"] },
				{ pt: "De quem é este celular?", parts: ["Di ", null, " è questo telefono?"], answers: ["chi"] },
				{ pt: "Este café é seu? Não, o meu está ali.", parts: ["Questo caffè è tuo? No, il ", null, " è lì."], answers: ["mio"] }
			]
		}
	]
};

const licao72: Lesson = {
	no: 72,
	kind: 'licao',
	title: 'Benvenuti in cascina!',
	titlePt: 'Bem-vindos ao sítio!',
	lines: [
		{
			it: "Eccoli! Aldo, vieni: sono arrivati i ragazzi!",
			pt: "Aí estão eles! Aldo, venha: as crianças chegaram!",
			lit: "Eis-os! Aldo, vem: são chegados os rapazes!",
			note: "*La cascina* é a casa de fazenda típica do Piemonte e da Lombardia, com o pátio, a horta e o estábulo. Para os avós, *i ragazzi* são os netos, mesmo com vinte e tantos anos."
		},
		{
			it: "Finalmente! Avete trovato traffico?",
			pt: "Finalmente! Pegaram trânsito?",
			lit: "Finalmente! Haveis encontrado tráfego?"
		},
		{
			it: "Un po'. E poi è piovuto per tutta la strada.",
			pt: "Um pouco. E depois choveu o caminho inteiro.",
			lit: "Um pouco. E depois é chovido por toda a estrada.",
			note: "*Piovere* (chover) e *nevicare* (nevar) fazem o passado com *essere* ou com *avere*, à escolha: *è piovuto* ou *ha piovuto*. Os dois estão certos."
		},
		{
			it: "Qui ha piovuto tutta la notte, ma stamattina ha smesso.",
			pt: "Aqui choveu a noite inteira, mas hoje de manhã parou.",
			lit: "Aqui tem chovido toda a noite, mas esta manhã tem parado.",
			note: "*Smettere* = parar (de fazer algo). Particípio irregular: *smesso*. Com outro verbo, *smettere di*: *ha smesso di piovere*."
		},
		{
			it: "Bianca, tesoro, come sei cresciuta! Da' un bacio alla nonna!",
			pt: "Bianca, meu amor, como você cresceu! Dá um beijo na vovó!",
			lit: "Bianca, tesouro, como és crescida! Dá um beijo à avó!",
			note: "*Crescere* (crescer) faz o passado com *essere*: *sei cresciuta*. *Da'* é a forma curta do imperativo de *dare*. A Teresa é bisavó da Bianca (*la bisnonna*), mas na família todo mundo a chama de *nonna*."
		},
		{
			it: "Nonna, nonno, vi presento Chiara e Rafael, i miei coinquilini.",
			pt: "Vó, vô, apresento a vocês a Chiara e o Rafael, os meus colegas de apartamento.",
			lit: "Avó, avô, vos apresento Chiara e Rafael, os meus coinquilinos."
		},
		{
			it: "Piacere, signora. Grazie dell'invito.",
			pt: "Muito prazer, senhora. Obrigado pelo convite.",
			note: "*Grazie di* (ou *per*) + a coisa: *grazie dell'invito*, *grazie del regalo*."
		},
		{
			it: "Ma quale signora! Dammi del tu e chiamami nonna Teresa, come tutti.",
			pt: "Que senhora que nada! Me chama de você e de vó Teresa, como todo mundo.",
			lit: "Mas qual senhora! Dá-me do tu e chama-me avó Teresa, como todos.",
			note: "*Ma quale...!* rejeita a palavra que o outro disse: “que senhora que nada!”. *Dare del tu* você viu na lição 27. E repare: *da'* + *mi* vira *dammi*, com o *m* dobrado. Depois das formas curtas, a consoante do pronome dobra."
		},
		{
			it: "Va bene... nonna Teresa.",
			pt: "Está bem... vó Teresa."
		},
		{
			it: "Venite dentro, che fa freddo. Volete del caffè? C'è anche della torta di nocciole.",
			pt: "Entrem, que está frio. Querem café? Tem também torta de avelã.",
			lit: "Vinde dentro, que faz frio. Quereis do café? Há também da torta de avelãs.",
			note: "*Del caffè*, *della torta*: é o partitivo, *di* + artigo, que indica uma quantidade indefinida, “um pouco de”. Em português não dizemos nada: “quer café?”. As avelãs do Piemonte, *le nocciole*, são famosas."
		},
		{
			it: "Volentieri! E sento anche un profumo di castagne...",
			pt: "Com prazer! E estou sentindo também um cheiro de castanhas...",
			lit: "De bom grado! E sinto também um perfume de castanhas...",
			note: "*Il profumo* é o cheiro bom de qualquer coisa: comida, flores, café. *Sentire* serve para ouvir, sentir e cheirar."
		},
		{
			it: "Sì, ho fatto delle caldarroste. E stasera faccio i tajarin con dei funghi del bosco.",
			pt: "Sim, fiz castanhas assadas. E hoje à noite vou fazer tajarin com cogumelos do bosque.",
			lit: "Sim, tenho feito das castanhas assadas. E esta noite faço os tajarin com dos cogumelos do bosque.",
			note: "No plural, o partitivo quer dizer “alguns, algumas”: *delle caldarroste*, *dei funghi*. *Le caldarroste* são castanhas assadas na brasa. *I tajarin* (“ta-ia-rín”), palavra piemontesa, são um talharim fininho feito com muitas gemas."
		},
		{
			it: "Nonna, i gemelli dormono. Dove li mettiamo?",
			pt: "Vó, os gêmeos estão dormindo. Onde a gente coloca eles?",
			lit: "Avó, os gêmeos dormem. Onde os pomos?"
		},
		{
			it: "Nella camera grande, di sopra. E tu, Bianca, di' al nonno che cosa vuoi fare oggi.",
			pt: "No quarto grande, lá em cima. E você, Bianca, diga ao vovô o que você quer fazer hoje.",
			lit: "Na câmara grande, de cima. E tu, Bianca, diz ao avô que coisa queres fazer hoje.",
			note: "*Di'* é o imperativo de *dire*, e só existe essa forma. Com pronome, dobra também: *dimmi* (me diga), *dille* (diga a ela)."
		},
		{
			it: "Voglio vedere le galline! E il cane! E la vendemmia!",
			pt: "Quero ver as galinhas! E o cachorro! E a vindima!",
			note: "*La vendemmia* é a colheita da uva. Nas Langhe, o *nebbiolo* é colhido em outubro, por isso o fim de semana caiu bem."
		},
		{
			it: "Dopo pranzo, piccola. Allora, Matteo, Elena è la maggiore e ha già tre figli. E tu, quando ti sposi?",
			pt: "Depois do almoço, pequena. E então, Matteo, a Elena é a mais velha e já tem três filhos. E você, quando vai casar?",
			lit: "Depois de almoço, pequena. Então, Matteo, Elena é a maior e tem já três filhos. E tu, quando te casas?",
			note: "Entre irmãos, *maggiore* = mais velho e *minore* = mais novo, os comparativos irregulares da lição 63. *La maggiore*, *il minore*: o mais velho, o caçula."
		},
		{
			it: "Nonno! Io sono il minore, ho tempo!",
			pt: "Vô! Eu sou o caçula, tenho tempo!",
			lit: "Avô! Eu sou o menor, tenho tempo!"
		},
		{
			it: "Tempo? Alla tua età io ero già sposato!",
			pt: "Tempo? Na sua idade eu já era casado!",
			lit: "Tempo? À tua idade eu era já casado!",
			note: "*Ero*: o imperfeito de *essere* (lição 63)."
		},
		{
			it: "E non smetti mai di ricordarlo!",
			pt: "E nunca para de lembrar isso!",
			lit: "E não paras nunca de recordá-lo!"
		},
		{
			it: "Ieri è nevicato in montagna, ma in città ha solo piovuto.",
			pt: "Ontem nevou na montanha, mas na cidade só choveu.",
			lit: "Ontem é nevado em montanha, mas em cidade tem só chovido.",
			sep: true,
			note: "Os dois auxiliares, lado a lado: *è nevicato*, *ha piovuto*."
		},
		{
			it: "Ho comprato del pane, delle mele e dello zucchero.",
			pt: "Comprei pão, maçãs e açúcar.",
			lit: "Tenho comprado do pão, das maçãs e do açúcar.",
			note: "O partitivo segue o artigo: *dello zucchero* porque é *lo zucchero*."
		},
		{
			it: "Di' la verità: hai smesso di fumare?",
			pt: "Fala a verdade: você parou de fumar?",
			lit: "Diz a verdade: tens parado de fumar?"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O partitivo: del pane, delle mele',
			blocks: [
				{
					type: 'p',
					text: "Quando falamos de uma quantidade que não se conta ou não importa contar, o português usa o substantivo sozinho: “quer café?”, “comprei maçãs”. O italiano pode fazer o mesmo, mas muitas vezes põe na frente *di* + artigo, o partitivo. Você já tinha visto que ele é facultativo (lição 55); hoje ele apareceu em todas as falas da comida."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**vuo**i del caf**fè**?", pt: "quer (um pouco de) café?" },
						{ it: "c'è della **tor**ta", pt: "tem (um pouco de) torta" },
						{ it: "ho **fat**to delle caldar**ro**ste", pt: "fiz (algumas) castanhas assadas" },
						{ it: "con dei **fun**ghi", pt: "com (alguns) cogumelos" },
						{ it: "**del**lo **zuc**chero, degli a**mi**ci", pt: "açúcar, alguns amigos" }
					]
				},
				{
					type: 'p',
					text: "As formas são as preposições articuladas de *di* (lição 21): *del, dello, della, dell', dei, degli, delle*. No singular, “um pouco de”; no plural, “alguns, algumas”. Também valem *un po' di* (*un po' di caffè*) e *qualche* com o singular (*qualche castagna*, lição 40)."
				},
				{
					type: 'dica',
					text: "Na frase negativa, o partitivo some: *non ho fatto caldarroste*, *non c'è pane*. Você vai ver isso de novo na revisão."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Dammi, dimmi; chover e crescer',
			blocks: [
				{
					type: 'p',
					text: "Ontem os pronomes grudaram no imperativo: *tienimi, passamela*. Com as formas curtas *da', di', fa', sta', va'*, acontece uma coisa a mais: a primeira consoante do pronome dobra. E o apóstrofo desaparece."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**dam**mi del tu!", pt: "me trate por você! (*da'* + *mi*)" },
						{ it: "**dim**mi la ve**ri**tà", pt: "me diga a verdade (*di'* + *mi*)" },
						{ it: "**fam**mi ve**de**re", pt: "me deixa ver (*fa'* + *mi*)" },
						{ it: "**dil**lo a **lei**!", pt: "diga isso a ela! (*di'* + *lo*)" }
					]
				},
				{
					type: 'p',
					text: "A única exceção é *gli*, que não dobra: *dagli un bacio* (dá um beijo nele), *digli di venire* (diga a ele para vir)."
				},
				{ type: 'h', text: "Verbos de tempo e de mudança" },
				{
					type: 'p',
					text: "*Piovere* e *nevicare* aceitam os dois auxiliares: *è piovuto* ou *ha piovuto*, *è nevicato* ou *ha nevicato*. Já *crescere* (crescer), como os verbos de mudança, vai com *essere* quando alguém ou alguma coisa cresce: *come sei cresciuta!*, *i prezzi sono cresciuti*."
				},
				{
					type: 'p',
					text: "*Smettere* (parar, deixar de) é o contrário de *cominciare*: *ha smesso di piovere*, *smetti di parlare!*. Particípio: *smesso*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Stanotte ha piovuto, ma adesso ha smesso.", pt: "Esta noite choveu, mas agora parou." },
				{ it: "Volete del vino? C'è anche dell'acqua.", pt: "Querem vinho? Tem água também." },
				{ it: "Ho comprato dei funghi e delle castagne.", pt: "Comprei cogumelos e castanhas." },
				{ it: "Dammi la mano e dimmi come ti chiami.", pt: "Me dá a mão e me diz como você se chama." },
				{ it: "Come siete cresciuti, ragazzi!", pt: "Como vocês cresceram, crianças!" },
				{ it: "Mia sorella è la maggiore; io sono il minore.", pt: "Minha irmã é a mais velha; eu sou o caçula." },
				{ it: "Smetti di guardare il telefono e mangia!", pt: "Para de olhar o celular e come!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Ontem nevou a noite inteira.", parts: ["Ieri è ", null, " tutta la notte."], answers: ["nevicato"] },
				{ pt: "Quer um pouco de torta?", parts: ["Vuoi ", null, " torta?"], answers: ["della"] },
				{ pt: "Comprei alguns cogumelos.", parts: ["Ho comprato ", null, " funghi."], answers: ["dei"] },
				{ pt: "Me diga a verdade!", parts: ["", null, " la verità!"], answers: ["dimmi"] },
				{ pt: "Parou de chover.", parts: ["Ha ", null, " di piovere."], answers: ["smesso"] }
			]
		}
	]
};

const licao73: Lesson = {
	no: 73,
	kind: 'licao',
	title: "Galline, gattini e vendemmia",
	titlePt: 'Galinhas, gatinhos e vindima',
	lines: [
		{
			it: "Allora, chi viene con me a dare da mangiare alle galline?",
			pt: "E então, quem vem comigo dar comida para as galinhas?",
			lit: "Então, quem vem comigo a dar de comer às galinhas?",
			note: "*Dare da mangiare a* = dar de comer a. *La gallina* (galinha), *il gallo* (galo)."
		},
		{
			it: "Io! Io! Nonno, posso prendere le uova?",
			pt: "Eu! Eu! Vô, posso pegar os ovos?",
			note: "*L'uovo*, *le uova*: o plural irregular em *-a* da lição 40."
		},
		{
			it: "Sì, ma piano: prendile una alla volta e tienile in mano con attenzione.",
			pt: "Pode, mas devagar: pegue um de cada vez e segure com cuidado.",
			lit: "Sim, mas devagar: pega-os uma à vez e tem-nos em mão com atenção.",
			note: "*In mano* = na mão, sem artigo, como *in braccio* (no colo) e *in tasca* (no bolso). *Una alla volta* = um de cada vez; *una* porque concorda com *le uova*, que é feminino."
		},
		{
			it: "Guarda, Rafael, questo è ancora caldo! La gallina l'ha appena fatto.",
			pt: "Olha, Rafael, este ainda está quente! A galinha acabou de botar.",
			lit: "Olha, Rafael, este é ainda quente! A galinha o tem apenas feito.",
			note: "*Appena* + passato prossimo = acabar de: *l'ha appena fatto* (acabou de fazer), *sono appena arrivato* (acabei de chegar). Lembra do *appena nati* da lição 36? É o mesmo *appena*."
		},
		{
			it: "E quelli nella cesta chi sono? Sono piccoli piccoli!",
			pt: "E aqueles no cesto, quem são? São pequenininhos!",
			lit: "E aqueles no cesto quem são? São pequenos pequenos!",
			note: "Repetir o adjetivo reforça, como o nosso diminutivo ou o “muito”: *piccolo piccolo* (pequenininho), *piano piano* (devagarinho), *vicino vicino* (bem pertinho)."
		},
		{
			it: "Sono i gattini di Mimì, la nostra gatta. Sono nati la settimana scorsa.",
			pt: "São os gatinhos da Mimì, a nossa gata. Nasceram na semana passada.",
			lit: "São os gatinhos de Mimì, a nossa gata. São nascidos a semana passada."
		},
		{
			it: "Nonno, posso prenderne uno in braccio?",
			pt: "Vô, posso pegar um no colo?",
			lit: "Avô, posso pegar-deles um em braço?",
			note: "*Prenderne uno*: o *ne* (deles) gruda no infinitivo, como os outros pronomes (lição 42). *In braccio* = no colo."
		},
		{
			it: "No, tesoro, non toccarli: sono ancora troppo piccoli. E non lo dire a Tobia, che è geloso!",
			pt: "Não, meu amor, não mexa neles: ainda são pequenos demais. E não conte para o Tobia, que ele é ciumento!",
			lit: "Não, tesouro, não tocá-los: são ainda demasiado pequenos. E não o dizer a Tobia, que é ciumento!",
			note: "No imperativo negativo de *tu*, o pronome tem duas posições, como com *potere* e *dovere*: grudado no infinitivo (*non toccarli*) ou antes dele (*non li toccare*). *Non dirlo* = *non lo dire*. Tobia é o cachorro."
		},
		{
			it: "Nonno Aldo, quest'uva è buonissima! Che uva è?",
			pt: "Vô Aldo, esta uva está uma delícia! Que uva é?",
			lit: "Avô Aldo, esta uva é boníssima! Que uva é?",
			note: "*L'uva* é singular e coletivo, como em português: *quest'uva*, *l'uva è buona*. Um bago é *un acino*."
		},
		{
			it: "Nebbiolo, l'uva del Barolo. Ma non mangiarla tutta, ci serve per il vino!",
			pt: "Nebbiolo, a uva do Barolo. Mas não come tudo, a gente precisa dela para o vinho!",
			lit: "Nebbiolo, a uva do Barolo. Mas não comê-la toda, nos serve para o vinho!",
			note: "*Non mangiarla* (ou *non la mangiare*). *Ci serve* = precisamos dela, com o *servire* da lição 41. O Barolo, vinho famoso das Langhe, é feito só com nebbiolo."
		},
		{
			it: "Io ho già riempito due cassette!",
			pt: "Eu já enchi duas caixas!",
			lit: "Eu tenho já enchido duas caixinhas!",
			note: "*Riempire* = encher. *La cassetta* é a caixa de plástico ou madeira onde se põe a uva colhida."
		},
		{
			it: "Bravo! Ma ricordati di mettere i guanti: le forbici tagliano.",
			pt: "Muito bem! Mas lembre de pôr as luvas: a tesoura corta.",
			lit: "Bravo! Mas recorda-te de pôr as luvas: as tesouras cortam.",
			note: "*Ricordarsi di* + infinitivo = lembrar de. No imperativo: *ricordati!*. E *le forbici*, só no plural, como você viu na lição 50."
		},
		{
			it: "Chiara, ti sei ricordata la crema per le mani?",
			pt: "Chiara, você lembrou do creme para as mãos?",
			lit: "Chiara, te és recordada o creme para as mãos?",
			note: "*Ricordarsi* e *dimenticarsi* (esquecer-se) são reflexivos, por isso o passado vai com *essere* (lição 46). Com uma coisa, podem vir sem *di*: *ti sei ricordata la crema?*."
		},
		{
			it: "No, me la sono dimenticata in macchina. Uffa!",
			pt: "Não, esqueci no carro. Ai, que saco!",
			lit: "Não, me-a sou esquecida em carro. Ufa!",
			note: "*Mi sono dimenticata la crema* → *me la sono dimenticata*: o *mi* do reflexivo vira *me* diante de *la*, como nos combinados da lição 50. O particípio concorda com *la*."
		},
		{
			it: "Dopo passate dall'orto: prendete delle zucche e dei porri per la minestra.",
			pt: "Depois passem na horta: peguem umas abóboras e uns alhos-porós para a sopa.",
			lit: "Depois passai pela horta: pegai das abóboras e dos alhos-porós para a sopa.",
			note: "*Passare da* = passar por, dar uma passada em. *L'orto* é a horta; *il giardino*, o jardim."
		},
		{
			it: "Nonna, e i pomodori? Non ci sono più?",
			pt: "Vó, e os tomates? Não tem mais?"
		},
		{
			it: "No, tesoro, è ottobre: sono finiti. Ma guarda quella zucca!",
			pt: "Não, meu amor, é outubro: acabaram. Mas olha aquela abóbora!"
		},
		{
			it: "Mamma mia! È più grande di Bianca!",
			pt: "Minha nossa! É maior que a Bianca!",
			note: "*Mamma mia!* é o espanto de todo dia, bom ou ruim."
		},
		{
			it: "Non è vero! Non dirlo neanche per scherzo!",
			pt: "Não é verdade! Não diga isso nem de brincadeira!",
			note: "*Per scherzo* = de brincadeira. *Neanche*, lição 40."
		},
		{
			it: "Ci siamo appena alzati e Matteo vuole già fare colazione.",
			pt: "A gente acabou de levantar e o Matteo já quer tomar café.",
			lit: "Nos somos apenas levantados e Matteo quer já fazer colazione.",
			sep: true,
			note: "*Appena* fica entre o auxiliar e o particípio: *siamo appena alzati*, *ho appena mangiato*."
		},
		{
			it: "Il telefono? Non lo lasciare sul tavolo, mettilo in tasca.",
			pt: "O celular? Não deixa em cima da mesa, põe no bolso.",
			lit: "O telefone? Não o deixar sobre a mesa, põe-no em bolso."
		},
		{
			it: "Ricordatevi di chiudere il cancello, se no le galline scappano.",
			pt: "Lembrem de fechar o portão, senão as galinhas fogem.",
			lit: "Recordai-vos de fechar o portão, se não as galinhas escapam."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O negativo com pronomes',
			blocks: [
				{
					type: 'p',
					text: "Na lição 71 você viu que, com *tu*, o “não faça” é *non* + infinitivo. Quando há um pronome, ele tem dois lugares possíveis, e os dois são corretos e frequentes: grudado no infinitivo ou entre *non* e o infinitivo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "non toc**car**li! / non li toc**ca**re!", pt: "não mexa neles!" },
						{ it: "non man**giar**la! / non la man**gia**re!", pt: "não coma (a uva)!" },
						{ it: "non **dir**lo! / non lo **di**re!", pt: "não diga isso!" },
						{ it: "non preoccu**par**ti! / non ti preoccu**pa**re!", pt: "não se preocupe!" }
					]
				},
				{
					type: 'p',
					text: "Com *voi* e *noi*, o negativo é o imperativo com *non* na frente, e o pronome também tem as duas posições: *non toccateli* ou *non li toccate*; *non mangiamola* ou *non la mangiamo*."
				},
				{
					type: 'dica',
					text: "No afirmativo, não há escolha: o pronome sempre vai no fim. *Toccali!*, *mangiala!*, *dillo!*. A liberdade é só do negativo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Appena, ricordarsi, dimenticarsi',
			blocks: [
				{
					type: 'p',
					text: "*Appena* com o passato prossimo é o nosso “acabar de”. Ele fica entre o auxiliar e o particípio."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'ha ap**pe**na **fat**to", pt: "acabou de fazer" },
						{ it: "ci **sia**mo ap**pe**na al**za**ti", pt: "acabamos de levantar" },
						{ it: "**ri**cordati di met**te**re i **guan**ti", pt: "lembre de pôr as luvas" },
						{ it: "me la **so**no dimenti**ca**ta", pt: "esqueci (a coisa)" }
					]
				},
				{
					type: 'p',
					text: "*Ricordarsi* (lembrar-se) e *dimenticarsi* (esquecer-se) são reflexivos: *mi ricordo, ti ricordi*, e no passado *mi sono ricordato*, *mi sono dimenticata*. Com outro verbo, levam *di*: *ricordati di chiudere*, *mi sono dimenticato di telefonare*. Também existem sem o pronome, *ricordare* e *dimenticare*, com o mesmo sentido: *ricordo tutto*, *ho dimenticato le chiavi*."
				},
				{ type: 'h', text: "A vindima" },
				{
					type: 'p',
					text: "Em setembro e outubro, a Itália inteira faz *la vendemmia*. Nas Langhe, primeiro vêm as uvas mais precoces, como o *dolcetto*, e por último o *nebbiolo*, que dá o Barolo e o Barbaresco. Muitas famílias ainda chamam parentes e amigos para ajudar no fim de semana, e o dia termina numa mesa comprida no pátio."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Sono appena arrivato: dammi cinque minuti.", pt: "Acabei de chegar: me dá cinco minutos." },
				{ it: "Non toccare la torta: è per stasera!", pt: "Não mexa na torta: é para hoje à noite!" },
				{ it: "Le chiavi? Non le dimenticare in macchina.", pt: "As chaves? Não esqueça no carro." },
				{ it: "Ti sei ricordato di comprare il pane?", pt: "Você lembrou de comprar o pão?" },
				{ it: "Prendi il gattino in braccio, piano piano.", pt: "Pegue o gatinho no colo, devagarinho." },
				{ it: "Mi sono dimenticata il telefono a casa.", pt: "Esqueci o celular em casa." },
				{ it: "Quest'uva è buonissima, ma non mangiarla tutta!", pt: "Esta uva está uma delícia, mas não coma tudo!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O trem acabou de sair.", parts: ["Il treno è ", null, " partito."], answers: ["appena"] },
				{ pt: "Não mexa neles!", parts: ["Non ", null, "!"], answers: ["toccarli"] },
				{ pt: "Lembre de fechar a porta.", parts: ["", null, " di chiudere la porta."], answers: ["ricordati"] },
				{ pt: "Esqueci (o creme) no carro.", parts: ["Me la sono ", null, " in macchina."], answers: ["dimenticata"] },
				{ pt: "Segure o ovo na mão.", parts: ["Tieni l'uovo in ", null, "."], answers: ["mano"] }
			]
		}
	]
};

const licao74: Lesson = {
	no: 74,
	kind: 'licao',
	title: 'Perché in campagna?',
	titlePt: 'Por que no campo?',
	lines: [
		{
			it: "Nonna Teresa, lascia: i piatti li lavo io.",
			pt: "Vó Teresa, deixa: os pratos eu lavo.",
			lit: "Avó Teresa, deixa: os pratos os lavo eu.",
			note: "*Lascia!* = deixa!, imperativo de *lasciare*. *I piatti li lavo io*: o objeto vem na frente e o pronome o repete, como em *la stampante la porti tu* (lição 38)."
		},
		{
			it: "Ma no, non ti preoccupare, c'è la lavastoviglie. Resta seduto!",
			pt: "Que nada, não se preocupe, tem lava-louças. Fique sentado!",
			lit: "Mas não, não te preocupar, há a lava-louças. Fica sentado!",
			note: "*Non ti preoccupare* e *non preoccuparti* são a mesma coisa, com o pronome nas duas posições da lição 73. É uma das frases que você mais vai ouvir na Itália."
		},
		{
			it: "Ma come mai avete scelto la campagna? Matteo dice che prima abitavate a Torino.",
			pt: "Mas por que vocês escolheram o campo? O Matteo diz que antes vocês moravam em Turim.",
			lit: "Mas como nunca haveis escolhido o campo? Matteo diz que antes moráveis em Turim.",
			note: "*Come mai?* = como assim?, por que será?: um “por quê” com surpresa. *Abitavate* é o imperfeito (lição 63): o que era habitual no passado."
		},
		{
			it: "Sì, per quarant'anni. Io lavoravo alla Fiat, a Mirafiori, e Teresa faceva l'infermiera.",
			pt: "É, por quarenta anos. Eu trabalhava na Fiat, em Mirafiori, e a Teresa era enfermeira.",
			lit: "Sim, por quarenta anos. Eu trabalhava à Fiat, em Mirafiori, e Teresa fazia a enfermeira.",
			note: "Mirafiori é o bairro de Turim onde fica a grande fábrica da Fiat. *Faceva l'infermiera*: *fare* + profissão, como *faccio la maestra* na lição 48."
		},
		{
			it: "Questa cascina era dei miei genitori. Quando siamo andati in pensione, siamo venuti qui.",
			pt: "Esta casa era dos meus pais. Quando nos aposentamos, viemos para cá.",
			lit: "Esta cascina era dos meus genitores. Quando somos andados em pensão, somos vindos aqui.",
			note: "*Andare in pensione* = aposentar-se; *essere in pensione* = estar aposentado; *il pensionato* = o aposentado. Falso amigo: a pensão do hotel é outra coisa (lição 17)."
		},
		{
			it: "E non è difficile vivere qui da soli?",
			pt: "E não é difícil viver aqui sozinhos?",
			note: "*Da solo* = sozinho, sem companhia ou sem ajuda. Concorda: *da solo, da sola, da soli, da sole*."
		},
		{
			it: "Difficile? Anzi! Non ci siamo mai annoiati.",
			pt: "Difícil? Pelo contrário! A gente nunca se entediou.",
			lit: "Difícil? Ao contrário! Não nos somos nunca entediados.",
			note: "*Anzi* corrige o que se disse, para mais: “pelo contrário”, “ou melhor”. *Annoiarsi* = entediar-se; *noioso* = chato."
		},
		{
			it: "D'estate c'è l'orto, d'autunno la vendemmia, in primavera i fiori...",
			pt: "No verão tem a horta, no outono a vindima, na primavera as flores...",
			lit: "De verão há a horta, de outono a vindima, em primavera as flores...",
			note: "As estações: *la primavera, l'estate, l'autunno, l'inverno*. “No verão” é *d'estate* ou *in estate*; “no inverno”, *d'inverno* ou *in inverno*. Com *primavera*, quase sempre *in*."
		},
		{
			it: "E in inverno, nonna? C'è la nebbia e non si vede niente!",
			pt: "E no inverno, vó? Tem neblina e não se vê nada!",
			note: "*La nebbia* = a neblina, forte no Piemonte de novembro a fevereiro. Dizem que o nome do *nebbiolo* vem dela."
		},
		{
			it: "In inverno leggo, faccio la pasta in casa e guardo le partite con tuo nonno.",
			pt: "No inverno eu leio, faço massa em casa e assisto aos jogos com o seu avô.",
			lit: "Em inverno leio, faço a massa em casa e olho as partidas com teu avô."
		},
		{
			it: "E lei grida più forte di me!",
			pt: "E ela grita mais alto que eu!",
			lit: "E ela grita mais forte de mim!"
		},
		{
			it: "Siete proprio in gamba! Ma per il medico, la spesa...?",
			pt: "Vocês são mesmo incríveis! Mas e o médico, as compras...?",
			lit: "Sois próprio em perna! Mas para o médico, a compra...?",
			note: "*Essere in gamba* = ser capaz, esperto, cheio de energia. Serve para um idoso ativo, um profissional competente, um aluno esperto: *un ragazzo in gamba*."
		},
		{
			it: "Il paese è a tre chilometri. E la nonna guida ancora, sai? Meglio di me!",
			pt: "O vilarejo fica a três quilômetros. E a vó ainda dirige, sabia? Melhor que eu!",
			lit: "O país é a três quilômetros. E a avó guia ainda, sabes? Melhor de mim!",
			note: "*Il paese* é o país e também a cidadezinha, o vilarejo. *Meglio di me*, lição 63."
		},
		{
			it: "E il sabato andiamo ad Alba, al mercato. In questa stagione c'è anche la fiera del tartufo.",
			pt: "E aos sábados a gente vai a Alba, à feira. Nesta época tem também a feira da trufa.",
			lit: "E o sábado andamos a Alba, ao mercado. Nesta estação há também a feira da trufa.",
			note: "*Il sabato* com artigo = todo sábado (lição 20). *Ad Alba*: *a* vira *ad* antes de *a*. *La stagione* é estação do ano e também temporada, época."
		},
		{
			it: "Il tartufo? Non l'ho mai assaggiato.",
			pt: "A trufa? Nunca provei.",
			lit: "O tartufo? Não o tenho nunca provado.",
			note: "*Il tartufo* é masculino. *Assaggiare* = provar uma comida."
		},
		{
			it: "Domani te lo faccio assaggiare: un po' sull'uovo al tegamino, e basta. Te lo ricorderai per tutta la vita!",
			pt: "Amanhã eu te faço provar: um pouquinho num ovo frito, e só. Você vai lembrar disso a vida inteira!",
			lit: "Amanhã to faço provar: um pouco sobre o ovo à frigideirinha, e basta. To recordarás por toda a vida!",
			note: "*Te lo* (lição 50) e o futuro *ricorderai* (lição 64). *L'uovo al tegamino* é o ovo frito, o jeito clássico de comer a trufa branca de Alba."
		},
		{
			it: "E domattina, all'alba, chi viene a pescare con me?",
			pt: "E amanhã cedo, ao amanhecer, quem vem pescar comigo?",
			lit: "E amanhã-manhã, à alva, quem vem a pescar comigo?",
			note: "*Domattina* = amanhã de manhã. *L'alba* = o amanhecer (e não confunda com a cidade de Alba!)."
		},
		{
			it: "Io!",
			pt: "Eu!"
		},
		{
			it: "Io no. Io dormo.",
			pt: "Eu não. Eu vou dormir.",
			lit: "Eu não. Eu durmo."
		},
		{
			it: "Non vi preoccupate: ci andiamo da soli.",
			pt: "Não se preocupem: a gente vai sozinho.",
			lit: "Não vos preocupais: lá andamos sós.",
			sep: true,
			note: "Com *voi*: *non vi preoccupate* ou *non preoccupatevi*."
		},
		{
			it: "D'inverno qui fa freddo, anzi, qualche volta nevica già a novembre.",
			pt: "No inverno aqui faz frio, aliás, às vezes já neva em novembro.",
			lit: "De inverno aqui faz frio, aliás, alguma vez neva já em novembro."
		},
		{
			it: "Mia nonna è molto in gamba: fa tutto da sola.",
			pt: "Minha avó é muito ativa: faz tudo sozinha."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Estações, da solo, anzi',
			blocks: [
				{
					type: 'p',
					text: "As quatro estações são *la primavera*, *l'estate* (feminino!), *l'autunno* e *l'inverno*. Para dizer “no verão”, “no inverno”, o italiano usa *in* ou *di*, sem artigo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "in prima**ve**ra", pt: "na primavera" },
						{ it: "d'es**ta**te / in es**ta**te", pt: "no verão" },
						{ it: "d'au**tun**no / in au**tun**no", pt: "no outono" },
						{ it: "d'in**ver**no / in in**ver**no", pt: "no inverno" }
					]
				},
				{
					type: 'p',
					text: "Com um adjetivo, entra o artigo: *l'estate scorsa* (o verão passado), *nell'inverno del 2020*. E lembre que no hemisfério sul as estações se invertem: o Natal do Rafael em Recife cai em pleno verão, *d'estate*."
				},
				{ type: 'h', text: "Da solo, anzi, in gamba" },
				{
					type: 'p',
					text: "*Da solo* é “sozinho”, no sentido de sem companhia ou sem ajuda: *vivono da soli*, *l'ha fatto da sola*. *Solo*, sem o *da*, é “só”: *ho solo dieci euro*."
				},
				{
					type: 'p',
					text: "*Anzi* corrige para mais: *non è difficile, anzi!* (não é difícil, pelo contrário!); *ci vediamo domani, anzi, stasera* (a gente se vê amanhã, ou melhor, hoje à noite). E *in gamba* é um elogio: *la nonna è in gamba*, a vó está ótima, é ativa, dá conta de tudo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'As Langhe',
			blocks: [
				{
					type: 'p',
					text: "As Langhe são colinas no sul do Piemonte, entre Alba e a Ligúria, cobertas de vinhedos e de avelaneiras, com castelos e vilarejos no alto de cada morro. Desde 2014, a paisagem de vinhedos das Langhe, do Roero e do Monferrato é patrimônio da UNESCO."
				},
				{
					type: 'p',
					text: "É terra de vinho (Barolo, Barbaresco, Dolcetto, Barbera), de avelã (a *nocciola* de lá vai para doces do mundo inteiro) e, no outono, da trufa branca: a feira de Alba, de outubro a dezembro, atrai gente de toda parte. A cozinha é de interior: *tajarin*, *agnolotti*, carne crua batida na faca e o *bonet*, um pudim de chocolate e amaretti."
				},
				{
					type: 'p',
					text: "Por muito tempo foi uma região pobre, de onde muitos saíram para trabalhar nas fábricas de Turim. Hoje muitos aposentados fazem o caminho de volta, como os avós do Matteo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non ti preoccupare, i piatti li lavo io.", pt: "Não se preocupe, os pratos eu lavo." },
				{ it: "I miei nonni sono in pensione e vivono in campagna.", pt: "Meus avós são aposentados e moram no campo." },
				{ it: "D'estate andiamo al mare, d'inverno in montagna.", pt: "No verão vamos à praia, no inverno à montanha." },
				{ it: "Bianca ha solo sette anni, ma si veste da sola.", pt: "A Bianca tem só sete anos, mas se veste sozinha." },
				{ it: "Ti piace il paese? Sì, anzi, lo adoro!", pt: "Você gosta do vilarejo? Gosto, aliás, adoro!" },
				{ it: "Come mai sei arrivato così presto?", pt: "Por que você chegou tão cedo?" },
				{ it: "Quella dottoressa è giovane, ma è molto in gamba.", pt: "Aquela médica é jovem, mas é muito competente." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Não se preocupe!", parts: ["Non ti ", null, "!"], answers: ["preoccupare"] },
				{ pt: "Eles moram sozinhos.", parts: ["Vivono da ", null, "."], answers: ["soli"] },
				{ pt: "No verão faz calor.", parts: ["D'", null, " fa caldo."], answers: ["estate"] },
				{ pt: "Meu avô se aposentou no ano passado.", parts: ["Mio nonno è andato in ", null, " l'anno scorso."], answers: ["pensione"] },
				{ pt: "Por que você não veio?", parts: ["Come ", null, " non sei venuto?"], answers: ["mai"] }
			]
		}
	]
};

const licao75: Lesson = {
	no: 75,
	kind: 'licao',
	title: 'A pescare col nonno',
	titlePt: 'Pescando com o vovô',
	lines: [
		{
			it: "Rafael, sveglia! Sono le sei.",
			pt: "Rafael, acorda! São seis horas.",
			lit: "Rafael, despertador! São as seis.",
			note: "*Sveglia!* = acorda!, de *la sveglia*, o despertador. Também se diz *svegliati!*, imperativo de *svegliarsi*."
		},
		{
			it: "Arrivo! Non vedevo l'ora di venire a pescare con te.",
			pt: "Já vou! Eu estava louco para vir pescar com você.",
			lit: "Chego! Não via a hora de vir a pescar contigo.",
			note: "*Non vedere l'ora di* + infinitivo = mal poder esperar, estar louco para. É quase a nossa “não ver a hora”: *non vedo l'ora di partire*."
		},
		{
			it: "Ecco il laghetto. Qui ci sono le trote, e qualche carpa.",
			pt: "Aqui está o laguinho. Aqui tem trutas, e uma ou outra carpa.",
			lit: "Eis o laguinho. Aqui há as trutas, e alguma carpa.",
			note: "*Il laghetto* = *il lago* + *-etto*. *La trota* = a truta."
		},
		{
			it: "Nonno, c'è un cartello: “Divieto di pesca”!",
			pt: "Vô, tem uma placa: “Proibido pescar”!",
			lit: "Avô, há um cartaz: “Proibição de pesca”!",
			note: "*Il divieto* = a proibição. *Divieto di* + substantivo ou infinitivo é a fórmula das placas: *divieto di sosta* (proibido estacionar), *divieto di balneazione* (proibido nadar)."
		},
		{
			it: "Leggi bene: “dal primo novembre”. Siamo ancora in ottobre.",
			pt: "Lê direito: “a partir de primeiro de novembro”. Ainda estamos em outubro.",
			lit: "Lê bem: “do primeiro novembro”. Somos ainda em outubro."
		},
		{
			it: "Ah, meno male! E adesso che cosa devo fare?",
			pt: "Ah, ainda bem! E agora, o que eu tenho que fazer?"
		},
		{
			it: "Metti il verme sull'amo, butta la lenza in acqua... e poi stai lì ad aspettare.",
			pt: "Põe a minhoca no anzol, joga a linha na água... e depois fica lá esperando.",
			lit: "Põe o verme sobre o anzol, joga a linha em água... e depois está lá a esperar.",
			note: "*Stare a* + infinitivo = ficar fazendo algo, passar o tempo fazendo: *stai lì ad aspettare*. Antes de vogal, *a* vira *ad*. É diferente do *stare* + gerúndio da lição 43, que só diz que a ação está em andamento."
		},
		{
			it: "Nonno, è un'ora che aspetto. Perché i pesci non abboccano?",
			pt: "Vô, faz uma hora que estou esperando. Por que os peixes não mordem a isca?",
			lit: "Avô, é uma hora que espero. Por que os peixes não abocanham?",
			note: "*È un'ora che* + presente = faz uma hora que. *Abboccare* = morder a isca (de *bocca*). *Perché* é “por que” na pergunta e “porque” na resposta, sempre com acento agudo: *perché*."
		},
		{
			it: "Perché tu parli troppo! Li fai scappare via tutti.",
			pt: "Porque você fala demais! Você espanta todos eles.",
			lit: "Porque tu falas demais! Os fazes escapar via todos.",
			note: "*Via* depois do verbo dá a ideia de “para longe”: *scappare via* (fugir), *andare via* (ir embora, lição 36), *buttare via* (jogar fora), *portare via* (levar embora). *Fare* + infinitivo = fazer alguém fazer algo."
		},
		{
			it: "Va bene, sto zitto. Mi racconti una storia, allora?",
			pt: "Tá bom, fico quieto. Então me conta uma história?",
			lit: "Vai bem, estou calado. Me contas uma história, então?",
			note: "*Stare zitto* = ficar calado. *Stai zitto!* é o “fica quieto!” mais comum."
		},
		{
			it: "Ti racconto una barzelletta. Sai quella del pescatore e della guardia?",
			pt: "Vou te contar uma piada. Conhece aquela do pescador e do guarda?",
			lit: "Te conto uma piadinha. Sabes aquela do pescador e da guarda?",
			note: "*La barzelletta* = a piada contada, com começo e fim. *Sai quella di...?* (conhece aquela do...?) é o jeito de começar uma. *La guardia* é feminina mesmo quando é um homem."
		},
		{
			it: "Un uomo pesca davanti a un cartello: “Divieto di pesca”. Arriva la guardia: “Scusi, non ha letto il cartello?”",
			pt: "Um homem está pescando na frente de uma placa: “Proibido pescar”. Chega o guarda: “Com licença, o senhor não leu a placa?”",
			lit: "Um homem pesca diante de um cartaz: “Proibição de pesca”. Chega a guarda: “Desculpe, não tem lido o cartaz?”",
			note: "Nas piadas, os italianos contam no presente, como nós."
		},
		{
			it: "E il pescatore: “Ma io non sto pescando! Sto facendo il bagno al mio verme.”",
			pt: "E o pescador: “Mas eu não estou pescando! Estou dando banho na minha minhoca.”",
			lit: "E o pescador: “Mas eu não estou pescando! Estou fazendo o banho ao meu verme.”",
			note: "*Fare il bagno* = tomar banho (de banheira, de mar). *Fare il bagno a qualcuno* = dar banho em alguém."
		},
		{
			it: "Ah ah! E la guardia?",
			pt: "Ha ha! E o guarda?"
		},
		{
			it: "“Allora le faccio la multa: il suo verme non ha il costume!”",
			pt: "“Então vou multar o senhor: a sua minhoca está sem maiô!”",
			lit: "“Então lhe faço a multa: o seu verme não tem o traje!”",
			note: "*Fare la multa a qualcuno* = multar alguém. *Le* é o indireto de cortesia (lição 41). *Il costume (da bagno)* = a roupa de banho."
		},
		{
			it: "Nonno, nonno! Tira! Ha abboccato!",
			pt: "Vô, vô! Puxa! Mordeu!"
		},
		{
			it: "Piano, piano... Eccola! Guarda che bella trota!",
			pt: "Devagar, devagar... Aí está! Olha que truta bonita!"
		},
		{
			it: "E io non ho preso niente!",
			pt: "E eu não peguei nada!"
		},
		{
			it: "Non stare a lamentarti. Tieni, prendi la mia canna: il posto buono è questo.",
			pt: "Não fica se lamentando. Toma, pega a minha vara: o lugar bom é este.",
			lit: "Não estar a lamentar-te. Tem, pega a minha cana: o posto bom é este.",
			note: "*Non stare a* + infinitivo = não fique perdendo tempo com isso: *non stare a lamentarti*, *non stare a preoccuparti*. *La canna da pesca* = a vara de pescar."
		},
		{
			it: "Non vedo l'ora di raccontarlo a Matteo!",
			pt: "Mal posso esperar para contar isso ao Matteo!",
			lit: "Não vejo a hora de contá-lo a Matteo!",
			sep: true
		},
		{
			it: "Qui c'è divieto di sosta: se lasci la macchina, la portano via.",
			pt: "Aqui é proibido estacionar: se você deixar o carro, eles guincham.",
			lit: "Aqui há proibição de parada: se deixas o carro, o levam via."
		},
		{
			it: "Perché ridi? Perché la tua barzelletta è bellissima!",
			pt: "Por que você está rindo? Porque a sua piada é ótima!",
			lit: "Por que ris? Porque a tua piadinha é belíssima!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: "Stare a, verbo + via, non vedere l'ora",
			blocks: [
				{
					type: 'p',
					text: "*Stare a* + infinitivo descreve alguém que fica parado num lugar fazendo uma coisa, muitas vezes por bastante tempo: *stai lì ad aspettare*, *siamo stati a guardare il lago tutta la mattina*. No negativo, é um conselho para não perder tempo: *non stare a lamentarti*, *non stare a pensarci troppo*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**sta**i lì ad aspet**ta**re", pt: "fica lá esperando" },
						{ it: "non **sta**re a lamen**tar**ti", pt: "não fica se lamentando" },
						{ it: "scap**pa**re **vi**a, but**ta**re **vi**a", pt: "fugir, jogar fora" },
						{ it: "non **ve**do l'**o**ra di par**ti**re", pt: "mal posso esperar para viajar" }
					]
				},
				{ type: 'h', text: "Verbo + via" },
				{
					type: 'p',
					text: "*Via* quer dizer rua (*via Mazzini*), mas depois de um verbo de movimento acrescenta “para longe”, “embora”: *andare via*, *scappare via*, *portare via*, *mandare via* (mandar embora), *buttare via* (jogar fora). Num bar, *da portare via* é “para viagem”."
				},
				{ type: 'h', text: "Perché" },
				{
					type: 'p',
					text: "Uma palavra só para os nossos quatro “porquês”: *perché ridi?* (por que você ri?), *perché la barzelletta è bella* (porque a piada é boa). Escreve-se sempre com acento agudo, *é* fechado: “per-kê”. *Il perché* é o motivo: *non so il perché*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Leia as placas',
			blocks: [
				{
					type: 'p',
					text: "Na rua, nos parques e nas estradas, as proibições italianas vêm em poucas fórmulas: *divieto di* + substantivo, *vietato* + infinitivo, e *non* + infinitivo, que você conhece agora como imperativo negativo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "di**vie**to di **so**sta", pt: "proibido estacionar" },
						{ it: "vie**ta**to fu**ma**re", pt: "proibido fumar" },
						{ it: "vie**ta**to l'in**gres**so", pt: "entrada proibida" },
						{ it: "non calpe**sta**re l'**er**ba", pt: "não pise na grama" },
						{ it: "at**ten**ti al **ca**ne", pt: "cuidado com o cão" }
					]
				},
				{
					type: 'p',
					text: "*Vietato* concorda como adjetivo: *è vietata la pesca*. E *attenti al cane* é um imperativo de *voi* com adjetivo: “fiquem atentos”. Na porteira da cascina dos avós do Matteo há uma placa dessas, mas o Tobia só sabe abanar o rabo."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non vedo l'ora di assaggiare il tartufo.", pt: "Estou louco para provar a trufa." },
				{ it: "Siamo stati tutto il pomeriggio a parlare.", pt: "Passamos a tarde inteira conversando." },
				{ it: "Il gatto è scappato via dalla finestra.", pt: "O gato fugiu pela janela." },
				{ it: "Non buttare via quella scatola!", pt: "Não jogue fora aquela caixa!" },
				{ it: "È mezz'ora che aspetto l'autobus.", pt: "Faz meia hora que estou esperando o ônibus." },
				{ it: "Perché non sei venuto? Perché pioveva.", pt: "Por que você não veio? Porque estava chovendo." },
				{ it: "Mio nonno mi ha raccontato una barzelletta.", pt: "Meu avô me contou uma piada." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Mal posso esperar para ver você.", parts: ["Non vedo l'", null, " di vederti."], answers: ["ora"] },
				{ pt: "Não fica pensando nisso.", parts: ["Non stare a ", null, "."], answers: ["pensarci"] },
				{ pt: "O peixe fugiu.", parts: ["Il pesce è scappato ", null, "."], answers: ["via"] },
				{ pt: "Proibido estacionar.", parts: ["", null, " di sosta."], answers: ["divieto"] },
				{ pt: "Por que você está rindo?", parts: ["", null, " ridi?"], answers: ["perché"] }
			]
		}
	]
};

const licao76: Lesson = {
	no: 76,
	kind: 'licao',
	title: 'Parole, parolone e parolacce',
	titlePt: 'Palavras, palavronas e palavrões',
	lines: [
		{
			it: "Rafael, facciamo un gioco? Io dico una parola e tu la fai diventare piccola.",
			pt: "Rafael, vamos brincar? Eu digo uma palavra e você deixa ela pequena.",
			lit: "Rafael, fazemos um jogo? Eu digo uma palavra e tu a fazes tornar-se pequena.",
			note: "*Diventare* = tornar-se, ficar. *Fare diventare* = fazer virar, transformar."
		},
		{
			it: "Va bene. Comincia tu.",
			pt: "Tá bom. Começa você."
		},
		{
			it: "Gatto!",
			pt: "Gato!"
		},
		{
			it: "Gattino! Come quelli di Mimì.",
			pt: "Gatinho! Como os da Mimì.",
			note: "*-ino* é o diminutivo que você conhece desde a lição 36: *gattino, nipotino, cappellino*."
		},
		{
			it: "Casa!",
			pt: "Casa!"
		},
		{
			it: "Casetta! O si dice casina?",
			pt: "Casinha! Ou se diz casina?",
			note: "*-etto, -etta* é outro diminutivo, tão comum quanto *-ino*: *casetta, borsetta, laghetto*. Às vezes os dois servem; o uso decide."
		},
		{
			it: "Vanno bene tutte e due. La nostra è una casetta, ma ci stiamo tutti.",
			pt: "As duas estão certas. A nossa é uma casinha, mas cabe todo mundo.",
			lit: "Vão bem todas e duas. A nossa é uma casinha, mas lá estamos todos.",
			note: "*Starci* = caber, como na lição 67."
		},
		{
			it: "Adesso grande! Libro!",
			pt: "Agora grande! Livro!"
		},
		{
			it: "Librone! Come quello di ricette della nonna.",
			pt: "Livrão! Como o de receitas da vovó.",
			note: "*-one* aumenta: *librone, gattone, nasone* (narigão). Muitas palavras femininas viram masculinas com ele: *una porta* → *un portone*, *la palla* → *il pallone* (a bola de futebol)."
		},
		{
			it: "E se è brutto? Il tempo di ieri, per esempio?",
			pt: "E se for ruim? O tempo de ontem, por exemplo?",
			lit: "E se é feio? O tempo de ontem, por exemplo?"
		},
		{
			it: "Tempaccio!",
			pt: "Tempo horrível!",
			note: "*-accio* acrescenta a ideia de feio, ruim, desagradável: *tempaccio, giornataccia* (um dia péssimo), *ragazzaccio* (moleque malcriado)."
		},
		{
			it: "Papà dice sempre “che tempaccio!” quando piove. E qualche volta dice anche una parolaccia...",
			pt: "O papai sempre diz “que tempo horrível!” quando chove. E às vezes diz até um palavrão...",
			note: "*La parolaccia* = o palavrão. Cuidado: *il parolone* é uma palavra difícil, pomposa. É o nosso “palavrão” só no tamanho."
		},
		{
			it: "Bianca! Non è vero!",
			pt: "Bianca! Não é verdade!"
		},
		{
			it: "E un vino giovane e simpatico? Un vinello! Come questo dolcetto. Assaggiate.",
			pt: "E um vinho jovem e simpático? Um vinhozinho! Como este dolcetto. Provem.",
			note: "*-ello* é mais um diminutivo, com carinho: *vinello, asinello* (burrinho), *alberello* (arvorezinha). E o *dolcetto* nem é tão doce: é o nome de uma uva e de um vinho tinto seco das Langhe."
		},
		{
			it: "Allora il tacchino è un tacco piccolo?",
			pt: "Então o tacchino é um salto pequeno?",
			note: "*Il tacco* é o salto do sapato. Mas *il tacchino* é... o peru! Há palavras que parecem ter sufixo e não têm: são os falsos alterados."
		},
		{
			it: "Ma no! Il tacchino è l'uccello del Natale americano.",
			pt: "Que nada! O tacchino é o peru, a ave do Natal americano.",
			lit: "Mas não! O peru é o pássaro do Natal americano."
		},
		{
			it: "E il lampone non è una lampada grande, e il mattone non è un matto grosso!",
			pt: "E o lampone não é uma lâmpada grande, e o mattone não é um maluco gordo!",
			note: "*Il lampone* = a framboesa; *il mattone* = o tijolo; *matto* = louco. Outros falsos alterados: *il bottone* (o botão), *il portone* (o portão do prédio), *il rubinetto* (a torneira)."
		},
		{
			it: "E tu, nonno, sei un uomo grande o un grande uomo?",
			pt: "E você, vovô, é um homem grande ou um grande homem?"
		},
		{
			it: "Un grande uomo, ma non un uomo grande: il nonno è alto un metro e sessanta!",
			pt: "Um grande homem, mas não um homem grande: o vovô tem um metro e sessenta!",
			lit: "Um grande homem, mas não um homem grande: o avô é alto um metro e sessenta!",
			note: "O lugar do adjetivo muda o sentido: *un grande uomo* (um grande homem, importante) × *un uomo grande* (um homem grandalhão). *Essere alto* + medida = ter de altura."
		},
		{
			it: "Ultima parola: nonna!",
			pt: "Última palavra: vovó!"
		},
		{
			it: "Nonnina!",
			pt: "Vovozinha!"
		},
		{
			it: "Nonnina, a ottant'anni? Sì, mi piace! E adesso, nipotina, a letto: domani si torna a Torino.",
			pt: "Vovozinha, com oitenta anos? Gostei! E agora, bisnetinha, cama: amanhã a gente volta para Turim.",
			lit: "Vovozinha, a oitenta anos? Sim, me agrada! E agora, netinha, a cama: amanhã se volta a Turim.",
			note: "*Nipote* serve para neto e sobrinho (lição 36); a bisneta é *la pronipote*, mas em casa ninguém complica. *Si torna*: o *si* impessoal da lição 27, aqui no lugar de “a gente”."
		},
		{
			it: "Il postino ha portato un pacchetto per Rafael.",
			pt: "O carteiro trouxe um pacotinho para o Rafael.",
			sep: true,
			note: "*Il postino* parece “postinho”, mas é o carteiro. E *il pacchetto*, lição 36."
		},
		{
			it: "Davide è un vecchio amico, non un amico vecchio: ha la mia età!",
			pt: "O Davide é um velho amigo, não um amigo velho: tem a minha idade!",
			note: "*Un vecchio amico* = um amigo de longa data; *un amico vecchio* = um amigo idoso. O mesmo vale para *un povero ragazzo* (coitado) e *un ragazzo povero* (sem dinheiro)."
		},
		{
			it: "Che giornataccia! Ho perso il treno e ho dimenticato l'ombrello.",
			pt: "Que dia horrível! Perdi o trem e esqueci o guarda-chuva.",
			note: "E não confunda *l'ombrello* (guarda-chuva) com *l'ombrellone*, o guarda-sol da praia."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os sufixos',
			blocks: [
				{
					type: 'p',
					text: "O italiano adora mudar o tamanho e o tom das palavras com um sufixo, como fazemos com “-inho” e “-ão”. Os principais são estes, e todos concordam como adjetivos: *-ino, -ina, -ini, -ine*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gat**ti**no, nipo**ti**na", pt: "*-ino*: pequeno, carinhoso" },
						{ it: "ca**set**ta, la**ghet**to", pt: "*-etto*: pequeno" },
						{ it: "vi**nel**lo, asi**nel**lo", pt: "*-ello*: pequeno, simpático" },
						{ it: "li**bro**ne, pal**lo**ne", pt: "*-one*: grande" },
						{ it: "tem**pac**cio, paro**lac**cia", pt: "*-accio*: feio, ruim" }
					]
				},
				{
					type: 'p',
					text: "Os sufixos podem até se somar: *casa* → *casetta* → *casettina*, bem pequenininha. Com *-one*, o feminino muitas vezes vira masculino: *la porta, il portone*; *la palla, il pallone*. E a força vai sempre para o sufixo: “gat-tí-no”, “li-brô-ne”, “tem-pát-tcho”."
				},
				{
					type: 'dica',
					text: "Com nomes de pessoa, *-ino* e *-etto* são carinho puro: *Paolino*, *Giulietta*. Mas use *-accio* com cuidado: *ragazzaccio* pode ser brincadeira entre amigos, ou ofensa."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Falsos alterados e o lugar do adjetivo',
			blocks: [
				{
					type: 'p',
					text: "Muitas palavras terminam em *-ino*, *-etto* ou *-one* e não têm nada de pequeno ou grande. São palavras independentes, que é preciso aprender como tais."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il tac**chi**no", pt: "o peru (*il tacco* = o salto)" },
						{ it: "il lam**po**ne", pt: "a framboesa" },
						{ it: "il mat**to**ne", pt: "o tijolo (*matto* = louco)" },
						{ it: "il rubi**net**to", pt: "a torneira" },
						{ it: "il pos**ti**no", pt: "o carteiro" },
						{ it: "l'ombrel**lo**ne", pt: "o guarda-sol (*l'ombrello* = o guarda-chuva)" }
					]
				},
				{ type: 'h', text: "Antes ou depois" },
				{
					type: 'p',
					text: "Na lição 26 você viu *bello* antes do substantivo; outros adjetivos comuns também podem vir antes. Com alguns deles, a posição muda o sentido: depois, o sentido é concreto; antes, figurado."
				},
				{
					type: 'p',
					text: "*Un uomo grande* é grandalhão; *un grande uomo* é importante. *Un amico vecchio* é idoso; *un vecchio amico* é de longa data. *Un ragazzo povero* não tem dinheiro; *un povero ragazzo* é um coitado. *Una notizia certa* é segura; *una certa notizia* é “uma tal notícia”."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Abbiamo una casetta in campagna.", pt: "Temos uma casinha no campo." },
				{ it: "Che tempaccio! Prendi l'ombrello.", pt: "Que tempo horrível! Pegue o guarda-chuva." },
				{ it: "Per Natale facciamo il tacchino.", pt: "No Natal a gente faz peru." },
				{ it: "Il nonno ha un librone di ricette.", pt: "O vovô tem um livrão de receitas." },
				{ it: "Marco è un vecchio amico di mio padre.", pt: "O Marco é um velho amigo do meu pai." },
				{ it: "Non dire parolacce davanti ai bambini!", pt: "Não fale palavrões na frente das crianças!" },
				{ it: "Il rubinetto della cucina è rotto.", pt: "A torneira da cozinha está quebrada." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Olha que gatinho!", parts: ["Guarda che ", null, "!"], answers: ["gattino"] },
				{ pt: "Que dia horrível!", parts: ["Che ", null, "!"], answers: ["giornataccia"] },
				{ pt: "As crianças brincam com a bola (de futebol).", parts: ["I bambini giocano con il ", null, "."], answers: ["pallone"] },
				{ pt: "Ele é um grande homem.", parts: ["È un ", null, " uomo."], answers: ["grande"] },
				{ pt: "Eu adoro framboesas.", parts: ["Adoro i ", null, "."], answers: ["lamponi"] }
			]
		}
	]
};

const licao77: Lesson = {
	no: 77,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'O imperativo: as formas',
			blocks: [
				{
					type: 'p',
					text: "Um fim de semana no campo e muitas ordens: *sbrigati*, *da' un bacio*, *non toccarli*, *sveglia!*. É hora de juntar todo o imperativo que você viu desde a lição 18. Comecemos pelos verbos regulares, com *tu*, *noi* e *voi*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "guarda / guardiamo / guardate", pt: "*-are*: só o *tu* muda, termina em *-a*" },
						{ it: "prendi / prendiamo / prendete", pt: "*-ere*: igual ao presente" },
						{ it: "apri / apriamo / aprite", pt: "*-ire*: igual ao presente" },
						{ it: "finisci / finiamo / finite", pt: "*-ire* com *-isc-*" }
					]
				},
				{ type: 'h', text: "Os irregulares" },
				{
					type: 'p',
					text: "*Essere* e *avere* têm formas próprias: *sii, siamo, siate* (*sii gentile!*, seja gentil!) e *abbi, abbiamo, abbiate* (*abbi pazienza!*, tenha paciência!). *Tenere* e *venire* fazem *tieni* e *vieni*, como o presente. E cinco verbos têm a forma curta com apóstrofo:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "va' (vai)", pt: "*andare*: va' a prendere la macchina (lição 71)" },
						{ it: "fa' (fai)", pt: "*fare*: fa' presto! (lição 71)" },
						{ it: "da' (dai)", pt: "*dare*: da' un bacio alla nonna! (lição 72)" },
						{ it: "di'", pt: "*dire*: di' al nonno che cosa vuoi fare (lição 72)" },
						{ it: "sta' (stai)", pt: "*stare*: sta' zitto! / stai zitto! (lição 75)" }
					]
				},
				{ type: 'h', text: "O negativo" },
				{
					type: 'p',
					text: "Com *tu*: *non* + infinitivo (*non dire*, *non toccare*, *non buttare via*). Com *noi* e *voi*: *non* + a forma afirmativa (*non andiamo*, *non dimenticate*, lição 23)."
				},
				{
					type: 'dica',
					text: "E com *Lei*? Você já ouviu várias formas, como *guardi*, *provi*, *mi dica*. Elas têm regras próprias, que chegam no próximo bloco, no consultório médico."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O imperativo com pronomes',
			blocks: [
				{
					type: 'p',
					text: "No afirmativo, todo pronome átono gruda no fim do imperativo de *tu*, *noi* e *voi*: reflexivos, diretos, indiretos, *ne*, *ci* e os combinados. A força do verbo não se move."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sbrigati! Sbrighiamoci! Sbrigatevi!", pt: "Anda logo! Vamos nos apressar! Andem logo! (lição 71)" },
						{ it: "Tienimi Leo un attimo.", pt: "Segura o Leo para mim um instante. (lição 71)" },
						{ it: "Passamela, per favore.", pt: "Me passa, por favor. (lição 71)" },
						{ it: "Ricordati di mettere i guanti.", pt: "Lembre de pôr as luvas. (lição 73)" }
					]
				},
				{ type: 'h', text: "A dobra depois das formas curtas" },
				{
					type: 'p',
					text: "Com *va', fa', da', di', sta'*, a consoante do pronome dobra e o apóstrofo some: *dammi*, *dimmi*, *fammi*, *dillo*, *vacci* (vai lá), *stammi bene* (fique bem, se cuide). Só *gli* não dobra: *dagli*, *digli*, *fagli*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Dammi del tu!", pt: "Me trate por você! (lição 72)" },
						{ it: "Dimmi tutto.", pt: "Pode falar. Me conta tudo." },
						{ it: "Fammi vedere la trota!", pt: "Me deixa ver a truta!" }
					]
				},
				{ type: 'h', text: "No negativo, duas posições" },
				{
					type: 'p',
					text: "Com *non*, o pronome pode grudar no fim ou ficar antes do verbo, como com os modais: *non toccarli* = *non li toccare* (lição 73); *non preoccuparti* = *non ti preoccupare* (lição 74); *non dirlo* = *non lo dire* (lições 71 e 73)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Possessivos, di chi è e o partitivo',
			blocks: [
				{
					type: 'p',
					text: "*Di chi è?* (de quem é?) pede como resposta *di* + pessoa ou um possessivo. Depois de *essere*, o possessivo pode ficar sem artigo; no lugar do substantivo, ele leva o artigo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Di chi è? È di Rafael. È suo.", pt: "De quem é? É do Rafael. É dele. (lição 71)" },
						{ it: "Il mio è nero. Quello blu è il tuo.", pt: "A minha é preta. A azul é a sua. (lição 71)" },
						{ it: "Questa cascina era dei miei genitori.", pt: "Esta casa era dos meus pais. (lição 74)" }
					]
				},
				{ type: 'h', text: "O partitivo e a negativa" },
				{
					type: 'p',
					text: "O partitivo (*del, dello, della, dell', dei, degli, delle*) indica uma quantidade indefinida: “um pouco de”, “alguns”. Na frase negativa, ele desaparece, e o substantivo fica sozinho, como em português."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Volete del caffè? No, grazie, non beviamo caffè.", pt: "Querem café? Não, obrigado, não tomamos café." },
						{ it: "Ho preso delle trote. Io non ho preso pesci.", pt: "Peguei umas trutas. Eu não peguei peixe nenhum." },
						{ it: "C'è del pane? No, non c'è pane.", pt: "Tem pão? Não, não tem pão." }
					]
				},
				{
					type: 'dica',
					text: "Para insistir no “nenhum”, use *nessun* + singular (lição 59): *non ho preso nessun pesce*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os sufixos',
			blocks: [
				{
					type: 'p',
					text: "Na brincadeira da Bianca (lição 76) apareceram os principais sufixos. Eles mudam o tamanho e o tom da palavra, e a força passa para eles."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gattino, borsetta, vinello", pt: "pequeno: *-ino, -etto, -ello*" },
						{ it: "librone, pallone", pt: "grande: *-one*" },
						{ it: "tempaccio, giornataccia", pt: "feio, ruim: *-accio*" },
						{ it: "tacchino, mattone, postino", pt: "falsos alterados: peru, tijolo, carteiro" }
					]
				},
				{
					type: 'p',
					text: "E o lugar do adjetivo: *un grande uomo* (importante) × *un uomo grande* (grandalhão); *un vecchio amico* (de longa data) × *un amico vecchio* (idoso)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Da correria em Turim até a beira do fogão, estas expressões apareceram nas lições 71 a 76. Leia em voz alta e lembre de quem disse cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sbrigati!", pt: "Anda logo!" },
						{ it: "Tieni!", pt: "Toma! Aqui está!" },
						{ it: "Di chi è?", pt: "De quem é?" },
						{ it: "Ma quale signora!", pt: "Que senhora que nada!" },
						{ it: "Dammi del tu.", pt: "Me trate por você." },
						{ it: "Grazie dell'invito.", pt: "Obrigado pelo convite." },
						{ it: "per scherzo", pt: "de brincadeira" },
						{ it: "Non ti preoccupare!", pt: "Não se preocupe!" },
						{ it: "Come mai?", pt: "Como assim? Por quê?" },
						{ it: "Anzi!", pt: "Pelo contrário!" },
						{ it: "essere in gamba", pt: "ser capaz, estar em forma" },
						{ it: "andare in pensione", pt: "aposentar-se" },
						{ it: "Sveglia!", pt: "Acorda!" },
						{ it: "Non vedo l'ora!", pt: "Mal posso esperar!" },
						{ it: "Meno male!", pt: "Ainda bem!" },
						{ it: "Stai zitto!", pt: "Fica quieto!" },
						{ it: "Sai quella di...?", pt: "Conhece aquela (piada) do...?" },
						{ it: "Che tempaccio!", pt: "Que tempo horrível!" }
					]
				},
				{
					type: 'dica',
					text: "Da próxima vez que alguém te agradecer por uma ajudinha, experimente um *Figurati!*, a forma de *tu* do *Si figuri!* da lição 47. E, se alguém te tratar com cerimônia demais, devolva como a nonna Teresa: *Dammi del tu!*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Sbrigatevi, ragazzi: il treno parte fra dieci minuti!", pt: "Andem logo, gente: o trem sai daqui a dez minutos!" },
				{ it: "Dimmi la verità: chi ha mangiato la torta?", pt: "Me diz a verdade: quem comeu a torta?" },
				{ it: "Le chiavi? Non le dimenticare, mettitele in tasca.", pt: "As chaves? Não esqueça, põe no bolso." },
				{ it: "Di chi è questa giacca? È mia, dammela.", pt: "De quem é este casaco? É meu, me dá." },
				{ it: "Volete del vino? No, grazie, non beviamo vino.", pt: "Querem vinho? Não, obrigado, não bebemos vinho." },
				{ it: "Non stare a preoccuparti: ci pensiamo noi.", pt: "Não fica se preocupando: a gente cuida disso." },
				{ it: "I miei nonni sono in pensione, ma sono molto in gamba.", pt: "Meus avós são aposentados, mas são muito ativos." },
				{ it: "Che giornataccia! Non vedo l'ora di andare a letto.", pt: "Que dia horrível! Não vejo a hora de ir para a cama." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Tenha paciência!", parts: ["", null, " pazienza!"], answers: ["abbi"] },
				{ pt: "Me faz um favor.", parts: ["", null, " un favore."], answers: ["fammi"] },
				{ pt: "Não se preocupem!", parts: ["Non ", null, "!"], answers: ["preoccupatevi"] },
				{ pt: "De quem são estes livros? São meus.", parts: ["Di chi sono questi libri? Sono ", null, "."], answers: ["miei"] },
				{ pt: "Não tem pão.", parts: ["Non c'è ", null, "."], answers: ["pane"] }
			]
		}
	]
};

export const unidade: Unit = { no: 11, title: 'Fim de semana no campo', lessons: [71, 72, 73, 74, 75, 76, 77] };

export const licoes: Lesson[] = [licao71, licao72, licao73, licao74, licao75, licao76, licao77];
