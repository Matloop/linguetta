import type { Course, Lesson } from './types.ts';

/*
 * Curso de italiano para quem fala português do Brasil, no espírito do método Assimil.
 * Diálogos, explicações e exemplos são originais; do livro de referência só seguimos a ordem dos temas.
 *
 * Pronúncia aproximada (campo `pron`): a sílaba tônica leva acento (á, é/ê, í, ó/ô, ú;
 * é e ó abertos, ê e ô fechados); e e o átonos leem-se sempre ê e ô, nunca i e u; t e d são secos
 * (nunca “tchi”, “dji”); consoante dobrada aparece repetida e separada por hífen (pal-la).
 */

const licao0: Lesson = {
	no: 0,
	kind: 'introducao',
	title: 'Pronuncia',
	titlePt: 'Pronúncia',
	steps: [
		{
			kind: 'leitura',
			title: 'Bem-vindo ao italiano',
			blocks: [
				{
					type: 'p',
					text: 'Que bom ter você aqui! Este curso segue o espírito do método Assimil: lições curtas, de preferência todo dia (uma ou mais, no seu ritmo), cada uma com um diálogo do dia a dia, a tradução, algumas notas e dois exercícios rápidos. Você não vai decorar listas de palavras nem tabelas de regras. Vai absorver o italiano aos poucos, mais ou menos como aprendeu português quando era criança: ouvindo, entendendo pelo contexto e repetindo até a frase sair sozinha.'
				},
				{
					type: 'p',
					text: 'Para quem fala português, o italiano é um presente: boa parte do vocabulário é parecida, a ordem das palavras é quase a mesma e os sons são, na maioria, conhecidos. O que mais exige atenção é a música da língua (onde cai a força de cada palavra e da frase) e alguns hábitos da nossa pronúncia que precisamos deixar de lado. É disso que trata esta lição 0.'
				},
				{ type: 'h', text: 'Um pouco todo dia' },
				{
					type: 'p',
					text: 'O segredo do método é a regularidade. Vinte ou trinta minutos por dia rendem muito mais do que três horas seguidas no fim de semana. O cérebro precisa de contato frequente com a língua, não de maratonas. Escolha um momento fixo (no café da manhã, no ônibus, antes de dormir) e transforme a lição num hábito, como escovar os dentes.'
				},
				{
					type: 'p',
					text: 'Num dia corrido, faça pelo menos o essencial: ouvir o diálogo e repeti-lo em voz alta. Melhor uma lição curta hoje do que uma lição perfeita na semana que vem.'
				},
				{ type: 'h', text: 'Como estudar cada lição' },
				{
					type: 'p',
					text: '**Ouvir.** Primeiro, escute o diálogo inteiro sem ler nada. Não se preocupe se entender pouco: você está acostumando o ouvido à melodia.'
				},
				{
					type: 'p',
					text: '**Ler.** Depois, leia fala por fala com a tradução ao lado. Quando houver uma tradução literal, dê uma olhada: ela mostra como o italiano monta a frase. Leia também as notas, que explicam o que pode ter causado estranheza.'
				},
				{
					type: 'p',
					text: '**Repetir.** Então repita cada fala em voz alta, imitando o ritmo e a entonação do áudio. Sim, em voz alta: é a parte mais importante. Falar baixinho para dentro não treina a boca.'
				},
				{
					type: 'p',
					text: '**Exercícios.** Por fim, traduza algumas frases e complete as lacunas. Eles servem para você se conferir, não para dar nota. Errou? Volte ao diálogo, releia a nota e siga em frente, sem drama.'
				},
				{
					type: 'dica',
					text: 'Não tente decorar. Se uma estrutura não entrou hoje, ela vai aparecer de novo nas próximas lições, e de novo, e de novo. A repetição faz o trabalho por você.'
				},
				{ type: 'h', text: 'A fase passiva e a segunda onda' },
				{
					type: 'p',
					text: 'Nas primeiras semanas, seu trabalho é passivo: entender e repetir. Você não precisa produzir frases sozinho ainda. Parece pouco, mas é assim que o italiano vai se acomodando na sua cabeça.'
				},
				{
					type: 'p',
					text: 'A partir da lição 50 começa a fase ativa, a **segunda onda**. Junto com cada lição nova, você refaz uma lição antiga (a 1 junto com a 50, a 2 junto com a 51, e assim por diante), só que ao contrário: lendo o português e dizendo a frase em italiano. É nesse momento que você percebe, com surpresa, o quanto já sabe.'
				},
				{
					type: 'dica',
					text: 'As três primeiras semanas são as mais difíceis, porque tudo é novo. Depois que o hábito pega, o progresso fica visível e o estudo vira prazer. Constância vale mais que talento.'
				},
				{ type: 'h', text: 'Como o app ajuda' },
				{
					type: 'p',
					text: '**Tradução literal.** Em muitas falas você encontra, além da tradução natural, uma versão palavra por palavra. Por exemplo, *Come ti chiami?* quer dizer “Como você se chama?”, mas literalmente é “Como te chamas?”. Ver a frase assim ajuda a entender a lógica do italiano sem precisar de uma regra.'
				},
				{
					type: 'p',
					text: '**Notas.** Algumas falas trazem uma nota com uma explicação de gramática, de uso ou de cultura. Leia com calma, mas sem se preocupar em decorar.'
				},
				{
					type: 'p',
					text: '**Salvar palavras.** Toque numa palavra italiana para salvá-la no seu banco de palavras. Ela vira um cartão de revisão, e você a reencontra nas revisões espaçadas junto com as palavras que guardou de filmes, músicas e livros.'
				},
				{
					type: 'p',
					text: '**Pronúncia aproximada.** Nos exemplos, a pronúncia vem escrita como um brasileiro leria. A sílaba forte leva acento: é e ó são abertos (como em “pé” e “avó”), ê e ô são fechados (como em “você” e “avô”). As outras vogais têm o som pleno: *e* é sempre ê e *o* é sempre ô, inclusive no fim da palavra. Consoante dobrada aparece repetida e separada por hífen. Na sílaba tônica de cada exemplo em italiano, o negrito mostra onde cai a força.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**Cia**o!', pt: 'Oi! / Tchau!', pron: 'tcháo' },
						{ it: '**Gra**zie!', pt: 'Obrigado!', pron: 'grá-tsie' },
						{ it: '**Pre**go.', pt: 'De nada. / Por favor, fique à vontade.', pron: 'pré-go' },
						{ it: 'Buon**gior**no!', pt: 'Bom dia!', pron: 'buon-djôr-no' }
					]
				},
				{
					type: 'dica',
					text: 'A pronúncia escrita é uma muleta para os primeiros dias. O modelo de verdade é o áudio: ouça sempre e use a escrita só para tirar dúvidas.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O acento tônico',
			blocks: [
				{
					type: 'p',
					text: 'Toda palavra italiana tem uma sílaba mais forte que as outras, a sílaba tônica. Em português é igual, com uma diferença importante: em português o acento escrito nos avisa muitas vezes onde está a força (“música”, “café”, “lâmpada”). Em italiano, o acento quase nunca aparece no papel. Por isso vale conhecer as tendências e, principalmente, prestar atenção no áudio.'
				},
				{ type: 'h', text: 'A regra geral: a penúltima sílaba' },
				{
					type: 'p',
					text: 'A grande maioria das palavras italianas tem a força na penúltima sílaba, exatamente como a maioria das palavras portuguesas. Nesses casos você raramente erra, porque o instinto do português já leva para lá.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'a**mi**co', pt: 'amigo', pron: 'a-mí-ko' },
						{ it: 'ra**gaz**zo', pt: 'rapaz, garoto', pron: 'ra-gát-tso' },
						{ it: 'Bo**lo**gna', pt: 'Bolonha', pron: 'bo-lô-nha' },
						{ it: 'si**gno**ra', pt: 'senhora', pron: 'si-nhô-ra' },
						{ it: 'ita**lia**no', pt: 'italiano', pron: 'i-ta-liá-no' }
					]
				},
				{ type: 'h', text: 'Muitas na antepenúltima' },
				{
					type: 'p',
					text: 'Um grupo grande de palavras leva a força na antepenúltima sílaba. Aqui mora a armadilha: algumas são parecidas com palavras portuguesas que têm o acento em outro lugar, e o instinto engana. Repare em *telefono*: em português dizemos “telefone”, com força no “fo”; em italiano a força vem antes, no “le”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'te**le**fono', pt: 'telefone', pron: 'te-lé-fo-no' },
						{ it: '**zuc**chero', pt: 'açúcar', pron: 'tsúk-ke-ro' },
						{ it: '**mac**china', pt: 'carro (automóvel)', pron: 'mák-ki-na' },
						{ it: '**mu**sica', pt: 'música', pron: 'mú-zi-ka' },
						{ it: '**ta**volo', pt: 'mesa', pron: 'tá-vo-lo' }
					]
				},
				{
					type: 'p',
					text: 'Alguns verbos vão ainda mais longe. Na forma “eles”, o acento fica na mesma sílaba do singular, o que às vezes o empurra para a quarta sílaba contando do fim: *abita* (mora) vira *abitano* (moram), com a força no primeiro *a*: “**á**-bi-ta-no”, e não “a-bi-tá-no”. Você vai ver isso com calma na lição 3.'
				},
				{ type: 'h', text: 'Na última sílaba: só com acento escrito' },
				{
					type: 'p',
					text: 'Quando a força cai na última sílaba, aí sim o italiano escreve o acento. É o único caso em que ele aparece regularmente. Se você vê uma palavra terminada em vogal acentuada, já sabe onde apoiar a voz.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'cit**tà**', pt: 'cidade', pron: 'tchit-tá' },
						{ it: 'caf**fè**', pt: 'café', pron: 'kaf-fé' },
						{ it: 'per**ché**', pt: 'por que / porque', pron: 'per-kê' },
						{ it: 'pe**rò**', pt: 'porém, mas', pron: 'pe-ró' },
						{ it: 'vener**dì**', pt: 'sexta-feira', pron: 've-ner-dí' }
					]
				},
				{
					type: 'p',
					text: 'Repare que existem dois acentos. O grave (à, è, ì, ò, ù) é o mais comum; sobre o *e* indica som aberto, como em *caffè*. O agudo (é) aparece sobre um *e* fechado, como em *perché*. Não se preocupe em escrever certo agora; só saiba que os dois existem.'
				},
				{
					type: 'p',
					text: 'Algumas palavras de uma sílaba só levam acento para não se confundirem com outras: *è* (é, verbo) e *e* (e, conjunção); *sì* (sim) e *si* (se); *là* (lá) e *la* (a, artigo); *tè* (chá) e *te* (te).'
				},
				{ type: 'h', text: 'Palavras pequenas se apoiam na seguinte' },
				{
					type: 'p',
					text: 'Artigos, preposições e certos pronomes não têm força própria. Eles se grudam na palavra seguinte e são ditos como se fossem uma sílaba a mais dela. *La casa* soa como uma palavra só, “lacasa”; *di Roma* soa “diRoma”. Quando o artigo perde a vogal e ganha apóstrofo, a fusão aparece até na escrita: *l\'amica* soa “lamica”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'la **ca**sa', pt: 'a casa', pron: 'la-ká-za' },
						{ it: 'di **Ro**ma', pt: 'de Roma', pron: 'di-rô-ma' },
						{ it: 'l\'a**mi**ca', pt: 'a amiga', pron: 'la-mí-ka' },
						{ it: 'non è **ve**ro', pt: 'não é verdade', pron: 'non-é-vê-ro' }
					]
				},
				{
					type: 'dica',
					text: 'Na dúvida diante de uma palavra nova, aposte na penúltima sílaba: você vai acertar na grande maioria das vezes. E quando o áudio mostrar outra coisa, confie no áudio.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O acento da frase e a entonação',
			blocks: [
				{
					type: 'p',
					text: 'Além do acento de cada palavra, a frase inteira tem seus pontos altos. Nem todas as palavras recebem a mesma força: as que carregam a informação importante (o nome, o verbo principal, a novidade) se destacam, e as outras passam rapidinho, quase coladas umas nas outras. É essa alternância entre partes fortes e partes leves que dá ao italiano aquele jeito cantado que todo mundo reconhece.'
				},
				{
					type: 'p',
					text: 'Pegue a frase *Vado a Firenze domani* (vou a Florença amanhã). Quem fala não martela cada sílaba; a voz se apoia em *Firenze* e em *domani*, e o resto escorrega: “vadoaFIRENze doMAni”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'Vado a Fi**ren**ze do**ma**ni.', pt: 'Vou a Florença amanhã.', pron: 'vá-do a fi-rén-tse do-má-ni' },
						{ it: 'Il caffè è **pron**to.', pt: 'O café está pronto.', pron: 'il kaf-fé é prôn-to' }
					]
				},
				{ type: 'h', text: 'A melodia da afirmação e da pergunta' },
				{
					type: 'p',
					text: 'Numa afirmação, a voz desce suavemente no fim. Numa pergunta que se responde com sim ou não, a voz sobe no fim. E aqui vem uma ótima notícia para quem fala português: em italiano, como em português, **a pergunta pode ser idêntica à afirmação**. Não é preciso inverter palavras nem acrescentar nada; só a melodia muda.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'Parli italiano.', pt: 'Você fala italiano.', pron: 'pár-li i-ta-liá-no ↘' },
						{ it: 'Parli italiano?', pt: 'Você fala italiano?', pron: 'pár-li i-ta-liá-no ↗' },
						{ it: 'Giulia è a casa.', pt: 'A Giulia está em casa.', pron: 'djú-lia é a ká-za ↘' },
						{ it: 'Giulia è a casa?', pt: 'A Giulia está em casa?', pron: 'djú-lia é a ká-za ↗' }
					]
				},
				{ type: 'h', text: 'Perguntas com palavra interrogativa' },
				{
					type: 'p',
					text: 'Quando a pergunta começa com *dove* (onde), *come* (como), *quando* (quando), *chi* (quem) ou *che cosa* (o que), a palavra interrogativa já faz o serviço. A voz costuma começar mais alta nela e depois desce, um pouco como no português.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**Do**ve abiti?', pt: 'Onde você mora?', pron: 'dô-ve á-bi-ti' },
						{ it: '**Co**me stai?', pt: 'Como você está?', pron: 'kô-me stái' },
						{ it: 'Che **co**sa prendi?', pt: 'O que você vai querer?', pron: 'ke kó-za prén-di' }
					]
				},
				{ type: 'h', text: 'Ênfase e emoção' },
				{
					type: 'p',
					text: 'Para destacar uma palavra, basta dar mais força a ela: *Io lavoro, tu no!* (eu trabalho, você não!), com a voz batendo em *io* e em *tu*. E as exclamações, tão frequentes no italiano falado, costumam ter uma subida bem marcada seguida de uma descida: *Che bello!* (que lindo!), *Che peccato!* (que pena!).'
				},
				{
					type: 'dica',
					text: 'Trate cada frase do áudio como o trecho de uma música. Antes de se preocupar com cada som, tente reproduzir a curva da voz: onde ela sobe, onde se apoia, onde desce. Uma frase com a melodia certa e um som imperfeito soa muito mais italiana do que o contrário.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'As vogais',
			blocks: [
				{
					type: 'p',
					text: 'O italiano escreve cinco vogais (*a, e, i, o, u*) e pronuncia sete sons, porque o *e* e o *o* podem ser abertos ou fechados. Se isso lembra o português, é porque é igual: nós também temos “avó” e “avô”, “pé” e “pê”. A grande diferença está em outra coisa: o italiano pronuncia todas as vogais por inteiro, sempre, em qualquer posição da palavra.'
				},
				{ type: 'h', text: 'A, I, U: claras e sem nasal' },
				{
					type: 'p',
					text: 'O *a*, o *i* e o *u* soam como em “pá”, “vi” e “tu”. Um cuidado: o italiano não tem vogais nasais. Em português, um *a* antes de *m* ou *n* vira “ã” (“cama”, “banco”). Em italiano o *a* continua aberto e limpo, e o *n* ou o *m* é pronunciado depois, como consoante de verdade.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**ca**ne', pt: 'cachorro', pron: 'ká-ne (não “kãni”)' },
						{ it: '**an**che', pt: 'também', pron: 'án-ke' },
						{ it: '**mam**ma', pt: 'mamãe', pron: 'mám-ma' },
						{ it: '**lu**na', pt: 'lua', pron: 'lú-na' }
					]
				},
				{ type: 'h', text: 'E e O: abertas e fechadas' },
				{
					type: 'p',
					text: 'O *e* pode ser fechado, como em “você”, ou aberto, como em “café”. O *o* pode ser fechado, como em “avô”, ou aberto, como em “avó”. Às vezes essa diferença separa duas palavras escritas do mesmo jeito.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'è', pt: 'é (verbo)', pron: 'é' },
						{ it: 'e', pt: 'e (conjunção)', pron: 'ê' },
						{ it: '**pe**sca', pt: 'pêssego', pron: 'pés-ka' },
						{ it: '**pe**sca', pt: 'pesca, pescaria', pron: 'pês-ka' },
						{ it: '**ven**ti', pt: 'vinte', pron: 'vên-ti' },
						{ it: '**ven**ti', pt: 'ventos', pron: 'vén-ti' }
					]
				},
				{
					type: 'p',
					text: 'A escrita não mostra essa diferença (só o acento no fim da palavra dá uma pista: *caffè* aberto, *perché* fechado). E a pronúncia varia bastante de região para região: um milanês, um romano e um napolitano abrem e fecham essas vogais de jeitos diferentes, e todos se entendem perfeitamente. Siga o áudio e não perca o sono com isso: ninguém vai deixar de entender você por causa de um *e* mais aberto.'
				},
				{ type: 'h', text: 'Nada de “i” e “u” no fim da palavra' },
				{
					type: 'p',
					text: 'Este é o ponto mais importante da lição para um brasileiro. No português do Brasil, o *e* e o *o* átonos do fim da palavra viram “i” e “u”: escrevemos “leite” e dizemos “leitchi”; escrevemos “vinho” e dizemos “vinhu”. Em italiano isso não acontece nunca. O *e* final é um “ê” de verdade, e o *o* final é um “ô” de verdade.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**lat**te', pt: 'leite', pron: 'lát-te (não “látchi”)' },
						{ it: '**vi**no', pt: 'vinho', pron: 'ví-no (não “vínu”)' },
						{ it: '**gran**de', pt: 'grande', pron: 'grán-de (não “grãdji”)' },
						{ it: '**mol**to', pt: 'muito', pron: 'môl-to' },
						{ it: 'Mi**la**no', pt: 'Milão', pron: 'mi-lá-no' }
					]
				},
				{
					type: 'p',
					text: 'Isso não é detalhe. No italiano, a vogal final carrega informação: *amico* (amigo), *amica* (amiga), *amici* (amigos), *amiche* (amigas). Se você disser “amicu” e “amichi”, quem escuta perde justamente a parte que diz se é um ou vários, homem ou mulher.'
				},
				{ type: 'h', text: 'Duas vogais seguidas' },
				{
					type: 'p',
					text: 'Quando duas ou três vogais aparecem juntas, cada uma é pronunciada, sem engolir nenhuma: *aiuto* (socorro) soa “a-iú-to”, *buono* (bom) soa “buó-no”, *Europa* soa “e-u-ró-pa”.'
				},
				{ type: 'h', text: 'Outros hábitos do português para deixar de lado' },
				{
					type: 'p',
					text: '**T e D antes de i.** No Brasil, “tia” vira “tchia” e “dia” vira “djia”. Em italiano, *t* e *d* são sempre secos, como em “tatu” e “dado”: *tutti* (todos) é “tút-ti”, *di* (de) é “di”, *dieci* (dez) é “dié-tchi”.'
				},
				{
					type: 'p',
					text: '**L no fim da sílaba.** Nós dizemos “Brasiu” e “autu”. Em italiano o *l* é sempre um *l* de verdade, com a ponta da língua nos dentes de cima: *il* (o), *alto* (“ál-to”), *calcio* (futebol, “kál-tcho”).'
				},
				{
					type: 'dica',
					text: 'No começo, exagere. Diga as vogais finais como se elas fossem a parte mais importante da palavra (às vezes são!). Com o tempo, o exagero vira naturalidade.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'C e G, duro e doce; o H mudo',
			blocks: [
				{
					type: 'p',
					text: 'As letras *c* e *g* têm dois sons cada uma, e quem decide qual é a vogal que vem depois. A lógica é a mesma do português com o *g* (“gato”, mas “gente”), só que os sons doces são outros. Domine esta página e você vai ler corretamente quase tudo em italiano.'
				},
				{ type: 'h', text: 'Som duro: ca, co, cu; ga, go, gu' },
				{
					type: 'p',
					text: 'Antes de *a*, *o* e *u*, o *c* soa “k” e o *g* soa como em “gato”. Nada de novo aqui.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**ca**sa', pt: 'casa', pron: 'ká-za' },
						{ it: '**co**sa', pt: 'coisa', pron: 'kó-za' },
						{ it: '**gat**to', pt: 'gato', pron: 'gát-to' },
						{ it: '**gu**sto', pt: 'gosto, sabor', pron: 'gús-to' }
					]
				},
				{ type: 'h', text: 'Som doce: ce, ci; ge, gi' },
				{
					type: 'p',
					text: 'Antes de *e* e *i*, o *c* soa “tch” (como em “tchau”) e o *g* soa “dj” (como em “adjetivo”, dito bem rápido). Atenção: não é o “s” de “cena” nem o “j” de “gelo” do português.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**ce**na', pt: 'jantar', pron: 'tchê-na' },
						{ it: '**ci**nema', pt: 'cinema', pron: 'tchí-ne-ma' },
						{ it: 'ge**la**to', pt: 'sorvete', pron: 'dje-lá-to' },
						{ it: '**gi**ta', pt: 'passeio, excursão', pron: 'djí-ta' }
					]
				},
				{ type: 'h', text: 'O H mudo endurece: che, chi; ghe, ghi' },
				{
					type: 'p',
					text: 'E se o italiano quiser o som duro antes de *e* ou *i*? Ele coloca um *h* no meio. O *h* não tem som nenhum; é só um sinal que diz “aqui o *c* e o *g* continuam duros”. Cuidado com o hábito do português: em italiano, *ch* nunca é o “x” de “chave”. É sempre “k”. E *gh* soa como o “gu” de “guerra”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'che', pt: 'que', pron: 'ke' },
						{ it: 'chi', pt: 'quem', pron: 'ki' },
						{ it: '**chie**sa', pt: 'igreja', pron: 'kié-za' },
						{ it: 'spa**ghet**ti', pt: 'espaguete', pron: 'spa-guêt-ti' },
						{ it: '**la**ghi', pt: 'lagos', pron: 'lá-gui' }
					]
				},
				{
					type: 'p',
					text: 'O *h* aparece também no começo de algumas formas do verbo *avere* (ter): *ho*, *hai*, *ha*, *hanno*. Ali ele também é mudo; só serve para distinguir na escrita palavras que soam igual. Voltaremos a isso na lição 2.'
				},
				{ type: 'h', text: 'CI e GI antes de outra vogal' },
				{
					type: 'p',
					text: 'Quando depois de *ci* ou *gi* vem *a*, *o* ou *u*, o *i* praticamente não se pronuncia. Ele está ali só para avisar que o som é doce. Por isso *ciao* soa “tchao” e não “tchi-ao”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**cia**o', pt: 'oi, tchau', pron: 'tcháo' },
						{ it: '**gior**no', pt: 'dia', pron: 'djôr-no' },
						{ it: 'già', pt: 'já', pron: 'djá' },
						{ it: '**giu**sto', pt: 'certo, justo', pron: 'djús-to' },
						{ it: 'ciocco**la**to', pt: 'chocolate', pron: 'tchok-ko-lá-to' }
					]
				},
				{
					type: 'dica',
					text: 'Resumo para colar na geladeira: *ca, co, cu, che, chi* = k. *ce, ci, cia, cio, ciu* = tch. *ga, go, gu, ghe, ghi* = g de “gato”. *ge, gi, gia, gio, giu* = dj.'
				},
				{
					type: 'p',
					text: 'Essa regra explica por que algumas palavras mudam de som no plural: *amico* (“a-mí-ko”) vira *amici* (“a-mí-tchi”), enquanto *amica* (“a-mí-ka”) vira *amiche* (“a-mí-ke”), com o *h* para manter o som duro. Você vai encontrar muitos casos assim; agora já sabe lê-los.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'SC, SCI e Q',
			blocks: [
				{
					type: 'p',
					text: 'O grupo *sc* segue exatamente a mesma lógica do *c* sozinho: duro antes de *a, o, u* (e com *h*), doce antes de *e, i*. Só que o som doce aqui é outro: o “x” de “xícara”.'
				},
				{ type: 'h', text: 'sca, sco, scu, sche, schi = “sk”' },
				{
					type: 'exemplos',
					items: [
						{ it: '**scuo**la', pt: 'escola', pron: 'skuó-la' },
						{ it: '**scu**sa', pt: 'desculpa', pron: 'skú-za' },
						{ it: '**ta**sca', pt: 'bolso', pron: 'tás-ka' },
						{ it: '**scher**mo', pt: 'tela', pron: 'skêr-mo' }
					]
				},
				{
					type: 'dica',
					text: 'Cuidado com uma mania brasileira: colocar um “i” antes do *s* no começo da palavra. Em italiano, *scuola* começa direto no *s*: “skuó-la”, e não “iskuóla”. O mesmo vale para *studente*, *spesa*, *stazione*.'
				},
				{ type: 'h', text: 'sce, sci = “x”' },
				{
					type: 'p',
					text: 'Antes de *e* e de *i*, o grupo soa como o “x” de “xícara” ou o “ch” de “chuva”. Entre duas vogais, esse som sai naturalmente um pouco mais longo, como se fosse dobrado.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**sce**na', pt: 'cena', pron: 'xé-na' },
						{ it: 'sci', pt: 'esqui', pron: 'xí' },
						{ it: '**pe**sce', pt: 'peixe', pron: 'pê-xe' },
						{ it: 'u**sci**ta', pt: 'saída', pron: 'u-xí-ta' }
					]
				},
				{ type: 'h', text: 'sci antes de outra vogal' },
				{
					type: 'p',
					text: 'Como acontece com *ci* e *gi*, quando *sci* vem antes de *a, o, u*, o *i* quase some: é só um sinal de que o som é “x”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**sciar**pa', pt: 'cachecol', pron: 'xár-pa' },
						{ it: '**la**scia', pt: 'deixa', pron: 'lá-xa' },
						{ it: 'pro**sciut**to', pt: 'presunto', pron: 'pro-xút-to' },
						{ it: '**scioc**co', pt: 'bobo', pron: 'xók-ko' }
					]
				},
				{ type: 'h', text: 'Q: sempre “ku”' },
				{
					type: 'p',
					text: 'O *q* vem sempre seguido de *u*, e esse *u* é sempre pronunciado. Em português, o *u* de “quero” e “quilo” é mudo; em italiano, nunca. Quando o italiano quer o som de “k” sozinho antes de *e* ou *i*, ele escreve *che*, *chi* (como você viu na página anterior). Assim, *qu* fica livre para ser sempre “ku”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**quan**do', pt: 'quando', pron: 'kuán-do' },
						{ it: '**que**sto', pt: 'este', pron: 'kuês-to' },
						{ it: 'qui', pt: 'aqui', pron: 'kuí' },
						{ it: '**quin**dici', pt: 'quinze', pron: 'kuín-di-tchi' },
						{ it: '**ac**qua', pt: 'água', pron: 'ák-kua' }
					]
				},
				{
					type: 'p',
					text: 'O mesmo vale para *gu* seguido de vogal: o *u* soa. *Guida* (guia) é “gu-í-da”, e não “guída” como em “guitarra”.'
				},
				{
					type: 'dica',
					text: 'Compare: o “quilo” português se escreve *chilo* em italiano, e se pronuncia “kí-lo”. Já o italiano *qui* se pronuncia “kuí”. Se aparecer *q*, diga o *u*; se aparecer *ch*, diga só “k”.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'GL, GLI e GN',
			blocks: [
				{
					type: 'p',
					text: 'Dois grupos de letras escondem sons que o português já tem, só que escritos de outro jeito: o nosso “lh” e o nosso “nh”. A boa notícia é que você não precisa aprender som novo, só reconhecer a escrita.'
				},
				{ type: 'h', text: 'GLI soa parecido com “lh”' },
				{
					type: 'p',
					text: 'O grupo *gli* corresponde mais ou menos ao “lh” de “filho”. Se depois dele vem outra vogal, o *i* não se pronuncia: está ali só para formar o som. Se o *gli* está sozinho ou no fim da palavra, aí sim o *i* soa: “lhi”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**fi**glio', pt: 'filho', pron: 'fí-lho' },
						{ it: 'fa**mi**glia', pt: 'família', pron: 'fa-mí-lha' },
						{ it: '**lu**glio', pt: 'julho', pron: 'lú-lho' },
						{ it: '**mo**glie', pt: 'esposa', pron: 'mô-lhe' },
						{ it: 'gli', pt: 'os (artigo) / lhe (a ele)', pron: 'lhi' },
						{ it: '**fi**gli', pt: 'filhos', pron: 'fí-lhi' }
					]
				},
				{
					type: 'p',
					text: 'Entre duas vogais, esse som é naturalmente um pouco mais longo e mais “apertado” que o nosso “lh”: a língua fica um instante a mais colada no céu da boca. Ouça com atenção *famiglia* no áudio.'
				},
				{ type: 'h', text: 'GL antes de a, e, o, u: g + l' },
				{
					type: 'p',
					text: 'Sem o *i*, não há “lh”: o *g* e o *l* se pronunciam separados, como em “glória” ou “inglês”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'in**gle**se', pt: 'inglês', pron: 'in-glê-ze' },
						{ it: '**glo**ria', pt: 'glória', pron: 'gló-ria' },
						{ it: '**glo**bo', pt: 'globo', pron: 'gló-bo' }
					]
				},
				{ type: 'h', text: 'Poucas exceções' },
				{
					type: 'p',
					text: 'Um punhado de palavras eruditas, quase todas vindas do grego, pronuncia *gli* como “gli” mesmo, com *g* e *l* separados: *glicine* (glicínia, a planta), *glicemia*, *anglicano*, *negligente*. São raras; quando aparecerem, o áudio avisa.'
				},
				{
					type: 'exemplos',
					items: [{ it: '**gli**cine', pt: 'glicínia (planta)', pron: 'glí-tchi-ne' }]
				},
				{ type: 'h', text: 'GN soa como “nh”' },
				{
					type: 'p',
					text: 'O grupo *gn* é o nosso “nh” de “banho”. Também aqui o som entre vogais é um pouco mais longo que o nosso.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**ba**gno', pt: 'banheiro, banho', pron: 'bá-nho' },
						{ it: 'si**gno**re', pt: 'senhor', pron: 'si-nhô-re' },
						{ it: '**so**gno', pt: 'sonho', pron: 'sô-nho' },
						{ it: 'la**sa**gne', pt: 'lasanha', pron: 'la-zá-nhe' }
					]
				},
				{
					type: 'dica',
					text: 'O brasileiro costuma nasalar a vogal antes do “nh” (“bãnho”). Em italiano, a vogal antes de *gn* fica oral e aberta: “bá-nho”, com o *a* de “pá”. E lembre do fim da palavra: *signore* é “si-nhô-re”, nunca “si-nhô-ri”.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Z e S',
			blocks: [
				{
					type: 'p',
					text: 'O *z* e o *s* são as letras em que o italiano mais surpreende o brasileiro. O *z*, principalmente, nunca soa como o nosso “z” de “zebra”.'
				},
				{ type: 'h', text: 'Z: “ts” ou “dz”' },
				{
					type: 'p',
					text: 'O *z* italiano é sempre um som duplo: ou “ts” (como no fim de “tsé-tsé”), ou “dz” (como em “adzê”, dito de uma vez). Qual dos dois? Não há uma regra que resolva tudo; o jeito é ouvir e guardar junto com a palavra. Algumas tendências ajudam.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**gra**zie', pt: 'obrigado', pron: 'grá-tsie' },
						{ it: 'sta**zio**ne', pt: 'estação', pron: 'sta-tsiô-ne' },
						{ it: '**piz**za', pt: 'pizza', pron: 'pít-tsa' },
						{ it: '**piaz**za', pt: 'praça', pron: 'piát-tsa' },
						{ it: '**prez**zo', pt: 'preço', pron: 'prét-tso' }
					]
				},
				{
					type: 'p',
					text: 'Terminações como *-zione*, *-ezza* e *-anza* têm quase sempre o som “ts”: *stazione*, *bellezza* (beleza), *stanza* (quarto). Já o som “dz” aparece em palavras como estas:'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**ze**ro', pt: 'zero', pron: 'dzé-ro' },
						{ it: '**zo**na', pt: 'zona', pron: 'dzó-na' },
						{ it: '**zai**no', pt: 'mochila', pron: 'dzái-no' },
						{ it: '**mez**zo', pt: 'meio', pron: 'méd-dzo' },
						{ it: 'az**zur**ro', pt: 'azul-claro', pron: 'ad-dzúr-ro' }
					]
				},
				{
					type: 'p',
					text: 'No começo da palavra, o mais comum na pronúncia padrão é “dz” (*zero*, *zona*, *zaino*), mas há palavras de uso diário com “ts”, como *zio* (tio, “tsí-o”) e *zucchero* (açúcar). No norte da Itália, o *z* inicial costuma ser sempre “dz”. E entre duas vogais o *z* soa sempre forte, como se estivesse dobrado, mesmo escrito com uma letra só: *Venezia* soa “ve-nét-tsia”.'
				},
				{ type: 'h', text: 'S: quase sempre como em português' },
				{
					type: 'p',
					text: 'No começo da palavra, antes de vogal, o *s* soa como o nosso “s” de “sapo”: *sono* (sou), *sera* (noite), *sale* (sal). Dobrado, *ss* é sempre “s” forte: *rosso* (vermelho, “rôs-so”), *basso* (baixo).'
				},
				{
					type: 'p',
					text: 'Antes de consoante, o *s* faz o mesmo que em português: soa “s” antes de *p, t, c, f* (*studente*, *spesa*) e soa “z” antes de *b, d, g, l, m, n, r, v*, como no nosso “mesmo” ou “rasgar”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: 'stu**den**te', pt: 'estudante', pron: 'stu-dén-te' },
						{ it: '**spe**sa', pt: 'compras (de mercado)', pron: 'spê-za' },
						{ it: '**sba**glio', pt: 'erro', pron: 'zbá-lho' },
						{ it: '**smet**tere', pt: 'parar (de fazer algo)', pron: 'zmêt-te-re' }
					]
				},
				{
					type: 'p',
					text: 'Entre duas vogais, depende da região. No norte, e na maior parte do italiano que se ouve na TV, o *s* soa “z”: *casa* (“ká-za”), *cosa*, *mese* (mês, “mê-ze”). Em boa parte do centro e do sul, muitas dessas palavras se dizem com “s”. As duas pronúncias são corretas e todo mundo entende. Neste curso, a pronúncia escrita segue a tendência “z”.'
				},
				{
					type: 'dica',
					text: 'O que importa mesmo é a diferença entre *s* simples e *ss* dobrado entre vogais: *casa* (casa) e *cassa* (caixa, a do supermercado) são palavras diferentes. Na página seguinte você treina isso.'
				}
			]
		},
		{
			kind: 'leitura',
			title: 'As consoantes duplas',
			blocks: [
				{
					type: 'p',
					text: 'Este é o som do italiano que mais escapa ao ouvido brasileiro, porque em português não existe. Nós escrevemos “carro” e “passo” com letra dobrada, mas é só ortografia. Em italiano, consoante dobrada é pronunciada dobrada: ela dura mais. E isso muda o significado das palavras.'
				},
				{ type: 'h', text: 'Como fazer' },
				{
					type: 'p',
					text: 'Com *p, t, c, b, d, g*, a boca fecha e segura o som por um instante antes de soltar, como se houvesse uma pequena pausa no meio: *gatto* soa “gat…to”, *bocca* (boca) soa “bok…ka”. Com *l, m, n, r, s, f, v*, o som simplesmente se prolonga: *palla* soa “pal-la”, *mamma* soa “mam-ma”, *rosso* soa “ros-so”. A vogal antes da dupla, por sua vez, fica mais curta.'
				},
				{ type: 'h', text: 'Pares que só a dupla separa' },
				{
					type: 'exemplos',
					items: [
						{ it: '**pa**la / **pal**la', pt: 'pá / bola', pron: 'pá-la / pál-la' },
						{ it: '**pe**na / **pen**na', pt: 'pena, dó / caneta', pron: 'pê-na / pên-na' },
						{ it: '**ca**sa / **cas**sa', pt: 'casa / caixa (registradora)', pron: 'ká-za / kás-sa' },
						{ it: '**no**no / **non**no', pt: 'nono / avô', pron: 'nó-no / nón-no' },
						{ it: '**ca**ro / **car**ro', pt: 'caro, querido / carroça', pron: 'ká-ro / kár-ro' },
						{ it: '**se**te / **set**te', pt: 'sede / sete', pron: 'sê-te / sét-te' }
					]
				},
				{
					type: 'p',
					text: 'Repare no último par, que é uma pegadinha para nós: *sete*, com um *t*, quer dizer “sede” (*ho sete*, estou com sede); o número 7 é *sette*. E *carro* em italiano é uma carroça; o carro de passeio é *macchina*.'
				},
				{ type: 'h', text: 'Um R, dois R' },
				{
					type: 'p',
					text: 'O *r* simples entre vogais é o mesmo “r” brando de “caro” e “hora”. O *rr* dobrado (e, em geral, também o *r* no começo da palavra) é vibrado: a ponta da língua bate várias vezes atrás dos dentes, como o “r” de muitos falantes do interior ou de Portugal. Nunca é o “rr” de garganta do carioca ou do paulistano, aquele de “carro” e “rato”.'
				},
				{
					type: 'exemplos',
					items: [
						{ it: '**Ro**ma', pt: 'Roma', pron: 'rô-ma (r vibrado)' },
						{ it: 'chi**tar**ra', pt: 'violão, guitarra', pron: 'ki-tár-ra' },
						{ it: '**o**ra', pt: 'hora, agora', pron: 'ô-ra' }
					]
				},
				{ type: 'h', text: 'Uma curiosidade: a dupla que não se escreve' },
				{
					type: 'p',
					text: 'Na Toscana, em Roma e no sul, certas palavras curtas (*a*, *e*, *è*, *da*, *tre*, *più* e outras) fazem a consoante seguinte soar dobrada, mesmo sem nada escrito: *a casa* soa quase “ak-ká-za”, *tre giorni* soa “tred-djôr-ni”. No norte isso não acontece. Você não precisa fazer de propósito; só não estranhe quando ouvir.'
				},
				{
					type: 'dica',
					text: 'Nas primeiras semanas, exagere as duplas sem medo: *pizza* “pit…tsa”, *nonno* “non…no”, *sette* “set…te”. É melhor longa demais do que curta demais. Com o tempo o ouvido acerta a medida.'
				}
			]
		},
		{
			kind: 'frases',
			title: 'Ritmo e melodia',
			lead: 'Ouça cada frase e repita em voz alta, imitando a curva da voz. O negrito marca onde a voz se apoia; o resto passa leve e rápido. Nas perguntas, deixe a voz subir no fim.',
			items: [
				{ it: '**Cia**o, come **sta**i?', pt: 'Oi, tudo bem?', pron: 'tcháo, kô-me stái?' },
				{ it: '**Be**ne, **gra**zie!', pt: 'Bem, obrigado!', pron: 'bé-ne, grá-tsie!' },
				{ it: 'Sei di **Ro**ma?', pt: 'Você é de Roma?', pron: 'séi di rô-ma?' },
				{ it: 'No, sono di Fi**ren**ze.', pt: 'Não, sou de Florença.', pron: 'nó, sô-no di fi-rén-tse.' },
				{ it: 'Che **bel**la **piaz**za!', pt: 'Que praça bonita!', pron: 'ke bél-la piát-tsa!' },
				{ it: '**Do**ve abiti, **Giu**lia?', pt: 'Onde você mora, Giulia?', pron: 'dô-ve á-bi-ti, djú-lia?' },
				{ it: 'Parli ita**lia**no?', pt: 'Você fala italiano?', pron: 'pár-li i-ta-liá-no?' },
				{ it: 'Un **po**\', ma **pia**no **pia**no.', pt: 'Um pouco, mas devagarinho.', pron: 'un pó, ma piá-no piá-no.' },
				{ it: 'Il caffè è **pron**to!', pt: 'O café está pronto!', pron: 'il kaf-fé é prôn-to!' }
			]
		},
		{
			kind: 'frases',
			title: 'Os sons em frases',
			lead: 'Agora os sons das páginas anteriores aparecem juntos. Repita devagar primeiro, depois no ritmo do áudio. Capriche nas consoantes duplas e nas vogais finais.',
			items: [
				{ it: 'Gli a**mi**ci di **Chia**ra sono sim**pa**tici.', pt: 'Os amigos da Chiara são simpáticos.', pron: 'lhi a-mí-tchi di kiá-ra sô-no sim-pá-ti-tchi.' },
				{ it: 'Il **non**no **be**ve un caf**fè** in **piaz**za.', pt: 'O vovô toma um café na praça.', pron: 'il nón-no bê-ve un kaf-fé in piát-tsa.' },
				{ it: 'Ci ve**dia**mo do**ma**ni a **scuo**la?', pt: 'A gente se vê amanhã na escola?', pron: 'tchi ve-diá-mo do-má-ni a skuó-la?' },
				{ it: 'Il **ba**gno è in **fon**do, si**gno**ra.', pt: 'O banheiro fica no fundo, senhora.', pron: 'il bá-nho é in fôn-do, si-nhô-ra.' },
				{ it: '**Que**sta **piz**za è squi**si**ta!', pt: 'Esta pizza está deliciosa!', pron: 'kuês-ta pít-tsa é skui-zí-ta!' },
				{ it: 'Che **co**sa **cer**chi? Il gior**na**le?', pt: 'O que você está procurando? O jornal?', pron: 'ke kó-za tchêr-ki? il djor-ná-le?' },
				{ it: '**La**scia la **sciar**pa sulla **se**dia.', pt: 'Deixe o cachecol na cadeira.', pron: 'lá-xa la xár-pa súl-la sé-dia.' },
				{ it: 'Mia **fi**glia ha **set**te **an**ni.', pt: 'Minha filha tem sete anos.', pron: 'mí-a fí-lha a sét-te án-ni.' }
			]
		}
	]
};

const licao1: Lesson = {
	no: 1,
	kind: 'licao',
	title: 'Alla porta',
	titlePt: 'Na porta',
	lines: [
		{
			it: "Sì? Chi è?",
			pt: "Pois não? Quem é?",
			lit: "Sim? Quem é?",
			note: "*Chi è?* é o que se diz ao atender a porta ou o interfone. *Chi* = quem; *è* = é. Repare no acento: *è* (verbo) não é a mesma palavra que *e* (a conjunção “e”)."
		},
		{
			it: "Ciao! Sono Rafael, il nuovo coinquilino.",
			pt: "Oi! Sou o Rafael, o novo colega de apartamento.",
			lit: "Oi! Sou Rafael, o novo coinquilino.",
			note: "*Sono* = (eu) sou. Como no português, o pronome *io* (eu) costuma ficar de fora, porque o verbo já diz quem é. Antes de nome de pessoa, o italiano padrão não usa artigo: *sono Rafael*. *Coinquilino* é quem divide o apartamento com você."
		},
		{
			it: "Ah, Rafael! Sei brasiliano, vero?",
			pt: "Ah, Rafael! Você é brasileiro, né?",
			lit: "Ah, Rafael! És brasileiro, verdade?",
			note: "*Sei* = (tu) és, você é. Entre jovens, amigos e família, o italiano usa *tu*, com o verbo na segunda pessoa. *Vero?* no fim da frase funciona como o nosso “né?”."
		},
		{
			it: "Sì, sono di Recife. E tu? Sei di Bologna?",
			pt: "Sou, sim, sou de Recife. E você? É de Bolonha?",
			lit: "Sim, sou de Recife. E tu? És de Bolonha?",
			note: "*Essere di* + cidade = ser de algum lugar. Repare que, para responder “sou”, o italiano diz simplesmente *sì*, onde nós costumamos repetir o verbo."
		},
		{
			it: "No, non sono di Bologna, sono di Napoli.",
			pt: "Não, não sou de Bolonha, sou de Nápoles.",
			note: "Para negar, basta pôr *non* antes do verbo: *non sono*, não sou. *No* é a resposta “não”; *non* é o que nega o verbo. Por isso a frase começa com *No, non...*"
		},
		{
			it: "E Matteo? È a casa?",
			pt: "E o Matteo? Está em casa?",
			lit: "E Matteo? Está a casa?",
			note: "A pergunta é igual à afirmação; só a melodia sobe no fim: *Matteo è a casa.* / *Matteo è a casa?* E *essere* faz o papel do nosso “ser” e de boa parte do “estar”: *è a casa*, está em casa."
		},
		{
			it: "No, Matteo non è a casa. È a lezione.",
			pt: "Não, o Matteo não está em casa. Está na aula.",
			lit: "Não, Matteo não está a casa. Está a aula.",
			note: "*Lezione* é aula, e também lição. *Essere a lezione* = estar em aula."
		},
		{
			it: "Siete studenti, tu e Matteo?",
			pt: "Vocês são estudantes, você e o Matteo?",
			lit: "Sois estudantes, tu e Matteo?",
			note: "*Siete* = vocês são. O italiano tem um “vocês” próprio, *voi*, de uso diário, com uma forma verbal só dele: *siete*."
		},
		{
			it: "Sì, siamo studenti tutti e due. E tu?",
			pt: "Somos, nós dois somos estudantes. E você?",
			lit: "Sim, somos estudantes todos e dois. E tu?",
			note: "*Siamo* = somos. *Tutti e due* = os dois, ambos (para duas mulheres, *tutte e due*)."
		},
		{
			it: "Anch'io sono studente. Sono qui per sei mesi.",
			pt: "Eu também sou estudante. Estou aqui por seis meses.",
			lit: "Também eu sou estudante. Sou aqui por seis meses.",
			note: "*Anch'io* = eu também: *anche* (também) perde o *e* diante de *io*. Aqui o *io* aparece porque há ênfase. E em *sono qui*, de novo, *essere* faz o papel de “estar”."
		},
		{
			it: "Allora benvenuto! Io sono Chiara.",
			pt: "Então seja bem-vindo! Eu sou a Chiara.",
			lit: "Então bem-vindo! Eu sou Chiara.",
			note: "*Benvenuto* para homem, *benvenuta* para mulher. O *io* aparece para fazer contraste: você é o Rafael, *eu* sou a Chiara."
		},
		{ it: "Piacere, Chiara!", pt: "Muito prazer, Chiara!", lit: "Prazer, Chiara!" },
		{
			it: "Piacere mio! Dai, entra!",
			pt: "O prazer é meu! Vamos, entre!",
			lit: "Prazer meu! Vai, entra!",
			note: "*Dai* é uma palavrinha de incentivo muito comum: “vai”, “vamos”, “anda”. *Entra* é o convite com *tu*."
		},
		{
			it: "Sei stanco? No, non sono stanco.",
			pt: "Você está cansado? Não, não estou cansado.",
			sep: true,
			note: "Com *stanco* (cansado), mais um caso de *essere* = estar."
		},
		{
			it: "Chiara e Matteo sono di Napoli?",
			pt: "A Chiara e o Matteo são de Nápoles?",
			note: "*Sono* serve para “eu sou” e para “eles são”. O contexto desfaz a dúvida: aqui o sujeito é *Chiara e Matteo*."
		},
		{ it: "No, Matteo è di Torino.", pt: "Não, o Matteo é de Turim." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O verbo essere',
			blocks: [
				{
					type: 'p',
					text: "Hoje você conheceu o verbo mais usado do italiano: *essere*, ser. Ele apareceu em quase todas as falas do diálogo. Veja as seis formas juntas; não precisa decorar, só reconhecer."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **so**no", pt: "eu sou", pron: "sô-no" },
						{ it: "(tu) **se**i", pt: "tu és, você é", pron: "séi" },
						{ it: "(lui, lei) è", pt: "ele, ela é", pron: "é" },
						{ it: "(noi) **sia**mo", pt: "nós somos", pron: "siá-mo" },
						{ it: "(voi) **sie**te", pt: "vós sois, vocês são", pron: "sié-te" },
						{ it: "(loro) **so**no", pt: "eles, elas são", pron: "sô-no" }
					]
				},
				{ type: 'h', text: "O pronome fica de fora" },
				{
					type: 'p',
					text: "Os pronomes *io, tu, lui, lei, noi, voi, loro* aparecem entre parênteses porque, no dia a dia, quase nunca são ditos. A terminação do verbo já mostra quem é: *sono di Recife* (sou de Recife), *siamo studenti* (somos estudantes). O pronome só entra para dar ênfase ou fazer contraste, como em *Io sono Chiara* ou *Anch'io sono studente*."
				},
				{
					type: 'p',
					text: "*Sono* serve para “eu” e para “eles”, mas isso quase nunca confunde: o resto da frase resolve. *Sono stanco* é eu; *Chiara e Matteo sono di Napoli* são eles."
				},
				{ type: 'h', text: "Um verbo para ser e estar" },
				{
					type: 'p',
					text: "O italiano não separa “ser” de “estar” como nós. *Essere* cobre os dois na maioria dos casos: origem, profissão e características, mas também lugar e estado passageiro."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**So**no brasi**lia**no.", pt: "Sou brasileiro." },
						{ it: "**So**no **stan**co.", pt: "Estou cansado." },
						{ it: "Matteo è a **ca**sa.", pt: "O Matteo está em casa." },
						{ it: "**Sia**mo a le**zio**ne.", pt: "Estamos em aula." }
					]
				},
				{ type: 'h', text: "Negar: non antes do verbo" },
				{
					type: 'p',
					text: "Para negar, coloque *non* logo antes do verbo, e pronto: *non sono*, *non è*, *non siamo*. Para responder “não” a uma pergunta, use *no*. Por isso é tão comum ouvir os dois juntos: *No, non sono di Bologna.*"
				},
				{ type: 'h', text: "Perguntar: só a melodia" },
				{
					type: 'p',
					text: "Para transformar uma afirmação em pergunta, não mude nada na frase: faça a voz subir no fim. *Sei stanco.* (você está cansado) vira *Sei stanco?* (você está cansado?). Exatamente como em português."
				},
				{
					type: 'dica',
					text: "*Lei* com minúscula é “ela”. Na próxima lição você vai conhecer o *Lei* de cortesia, que quer dizer “o senhor”, “a senhora”, e usa o verbo na mesma forma: *Lei è...?*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: è, e e a pergunta',
			blocks: [
				{
					type: 'p',
					text: "Nesta primeira lição, o mais importante é pegar o ritmo das frases curtas. Mas alguns sons do diálogo merecem atenção desde já."
				},
				{ type: 'h', text: "È e e" },
				{
					type: 'p',
					text: "*È* (verbo) é um *e* aberto, como em “pé”. *E* (conjunção) é fechado, como em “você”. Na frase eles passam rápido, mas a diferença existe: *Chiara è di Napoli* (a Chiara é de Nápoles) e *Chiara e Matteo* (a Chiara e o Matteo)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Chi è?", pt: "Quem é?", pron: "ki é?" },
						{ it: "**Chia**ra e Mat**te**o", pt: "a Chiara e o Matteo", pron: "kiá-ra ê mat-té-o" }
					]
				},
				{ type: 'h', text: "Os sons do diálogo" },
				{
					type: 'p',
					text: "Repare em *ciao* (“tchao”) e *Chiara* (“kiá-ra”): o *ci* é doce, o *chi* é duro, como você viu na lição 0. Em *Matteo* e *anch'io*, o *t* é seco, sem virar “tch”. E nas palavras terminadas em *-e* e *-o*, nada de “i” e “u”: *studente* termina em “ê”, *stanco* termina em “ô”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**cia**o", pt: "oi", pron: "tcháo" },
						{ it: "**Chia**ra", pt: "Chiara", pron: "kiá-ra" },
						{ it: "Mat**te**o", pt: "Matteo", pron: "mat-té-o" },
						{ it: "stu**den**te", pt: "estudante", pron: "stu-dén-te" },
						{ it: "pia**ce**re", pt: "prazer", pron: "pia-tchê-re" }
					]
				},
				{ type: 'h', text: "A curva da pergunta" },
				{
					type: 'p',
					text: "Ouça de novo *È a casa?* e *Siete studenti?*. A voz fica mais ou menos plana e sobe na última palavra. Já em *Chi è?*, que começa com palavra interrogativa, a voz se apoia em *chi*. Repita as duas curvas várias vezes, sem pressa."
				},
				{
					type: 'dica',
					text: "Grave-se repetindo o diálogo e compare com o áudio. Você vai notar na hora se alguma vogal final escapou para “i” ou “u”."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Chiara è a casa?", pt: "A Chiara está em casa?" },
				{ it: "Non siamo di Recife, siamo di Salvador.", pt: "Não somos de Recife, somos de Salvador." },
				{ it: "Sei stanca, Chiara?", pt: "Você está cansada, Chiara?" },
				{ it: "Matteo e Rafael sono studenti.", pt: "O Matteo e o Rafael são estudantes." },
				{ it: "Siete a lezione?", pt: "Vocês estão em aula?" },
				{ it: "Anch'io sono di Bologna.", pt: "Eu também sou de Bolonha." },
				{ it: "No, non è vero!", pt: "Não, não é verdade!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Não sou de Bolonha.", parts: ["Non ", null, " di Bologna."], answers: ["sono"] },
				{ pt: "Vocês são estudantes?", parts: ["Voi ", null, " studenti?"], answers: ["siete"] },
				{ pt: "O Matteo não está em casa.", parts: ["Matteo ", null, " è a casa."], answers: ["non"] },
				{ pt: "Nós somos de Nápoles.", parts: ["Noi ", null, " di Napoli."], answers: ["siamo"] },
				{ pt: "Você é brasileiro, né?", parts: ["Sei brasiliano, ", null, "?"], answers: ["vero"] }
			]
		}
	]
};

const licao2: Lesson = {
	no: 2,
	kind: 'licao',
	title: 'In segreteria',
	titlePt: 'Na secretaria',
	lines: [
		{
			it: "Buongiorno, signora. Ho una domanda.",
			pt: "Bom dia, senhora. Tenho uma pergunta.",
			note: "*Ho* = (eu) tenho, do verbo *avere*. O *h* não se pronuncia: diga só “ó”. E *domanda* é pergunta, não “demanda”."
		},
		{
			it: "Buongiorno! Mi dica.",
			pt: "Bom dia! Pois não.",
			lit: "Bom dia! Me diga.",
			note: "*Mi dica* é o jeito educado de dizer “pode falar, estou ouvindo”, típico de balcão, loja e escritório."
		},
		{
			it: "C'è un corso di italiano la sera?",
			pt: "Tem algum curso de italiano à noite?",
			lit: "Há um curso de italiano a noite?",
			note: "*C'è* (de *ci è*) quer dizer “há”, “tem”, para uma coisa só. *La sera* = à noite, no período da noite."
		},
		{
			it: "Sì, ci sono due corsi: uno il lunedì e uno il giovedì.",
			pt: "Tem, sim, há dois cursos: um às segundas e um às quintas.",
			lit: "Sim, há dois cursos: um a segunda e um a quinta.",
			note: "Para mais de uma coisa, *ci sono*: *ci sono due corsi*. Com artigo, o dia da semana indica costume: *il lunedì* = às segundas, toda segunda."
		},
		{
			it: "Il giovedì va benissimo.",
			pt: "Quinta está ótimo.",
			lit: "A quinta vai muitíssimo bem.",
			note: "*Va bene* = está bem, tudo certo. *Benissimo* = muito bem: o sufixo *-issimo* intensifica, como o nosso “-íssimo”."
		},
		{
			it: "Bene. Lei ha un documento?",
			pt: "Certo. O senhor tem um documento?",
			lit: "Bem. O senhor tem um documento?",
			note: "*Lei* (muitas vezes com maiúscula, por cortesia) é o tratamento formal: “o senhor”, “a senhora”. O verbo vai na mesma forma de *lui* e *lei* (ele, ela): *Lei ha* = o senhor tem. Use com desconhecidos, funcionários, professores."
		},
		{
			it: "Sì, ho il passaporto. Ecco.",
			pt: "Tenho, sim, o passaporte. Aqui está.",
			note: "*Ecco* = eis, aqui está. Serve para entregar alguma coisa ou para apontar."
		},
		{
			it: "Grazie. Ha anche un indirizzo in Italia?",
			pt: "Obrigada. Tem também um endereço na Itália?",
			note: "*Ha* (o senhor tem) soa “á”, igual à preposição *a*. Na escrita, o *h* serve só para distinguir as duas."
		},
		{
			it: "Sì, ho una stanza in via Mazzini.",
			pt: "Tenho, sim, um quarto na rua Mazzini.",
			note: "*Stanza* = quarto, cômodo. Nos endereços, *via* (rua) vem sem artigo: *in via Mazzini*."
		},
		{
			it: "Perfetto. E ha un'email?",
			pt: "Perfeito. E tem e-mail?",
			lit: "Perfeito. E tem um e-mail?",
			note: "*Una* perde o *a* diante de vogal e ganha apóstrofo: *un'email*, *un'amica*. No masculino não há apóstrofo: *un amico*. Em italiano, *email* é feminino."
		},
		{
			it: "Certo. Ah, scusi: c'è uno sconto per studenti?",
			pt: "Claro. Ah, desculpe: tem desconto para estudante?",
			lit: "Certo. Ah, desculpe: há um desconto para estudantes?",
			note: "*Scusi* é o “desculpe” formal (com *tu*, *scusa*). E repare em *uno sconto*: o artigo *un* vira *uno* diante de *s* + consoante (*uno studente*) e diante de *z* (*uno zaino*)."
		},
		{
			it: "Sì, c'è: il dieci per cento. Ed ecco un foglio con gli orari.",
			pt: "Tem, sim: dez por cento. E aqui está uma folha com os horários.",
			lit: "Sim, há: o dez por cento. E eis uma folha com os horários.",
			note: "Diante de vogal, *e* pode virar *ed* para soar melhor: *ed ecco*. *Foglio* (folha de papel) tem o som de “lh”: “fó-lho”."
		},
		{
			it: "Grazie mille! Allora ho tutto.",
			pt: "Muito obrigado! Então tenho tudo.",
			lit: "Obrigado mil! Então tenho tudo.",
			note: "*Grazie mille* = mil obrigados, muitíssimo obrigado."
		},
		{
			it: "Hai una penna? No, mi dispiace, non ce l'ho.",
			pt: "Você tem uma caneta? Não, sinto muito, não tenho.",
			lit: "Tens uma caneta? Não, me desagrada, não (a) tenho.",
			sep: true,
			note: "Na fala, para responder sobre ter alguma coisa, diz-se *ce l'ho* (tenho) e *non ce l'ho* (não tenho). O *l'* retoma a coisa de que se fala; o *ce* não tem tradução. Guarde como expressão pronta. *Mi dispiace* = sinto muito."
		},
		{
			it: "Chiara e Matteo hanno una cucina e un bagno, ma non c'è il balcone.",
			pt: "A Chiara e o Matteo têm cozinha e banheiro, mas não tem varanda.",
			lit: "Chiara e Matteo têm uma cozinha e um banheiro, mas não há a varanda.",
			note: "*Hanno* = (eles) têm. O *h* é mudo de novo: “án-no”."
		},
		{
			it: "Avete tempo stasera? Abbiamo un'idea!",
			pt: "Vocês têm tempo hoje à noite? Temos uma ideia!",
			note: "*Avete* = vocês têm; *abbiamo* = temos. *Stasera* (de *questa sera*) = hoje à noite."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Avere, c\'è e ci sono',
			blocks: [
				{
					type: 'p',
					text: "Depois de *essere*, o segundo verbo mais importante: *avere*, ter. Ele apareceu em todas as formas no diálogo de hoje."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) ho", pt: "eu tenho", pron: "ó" },
						{ it: "(tu) hai", pt: "tu tens, você tem", pron: "ái" },
						{ it: "(lui, lei, Lei) ha", pt: "ele, ela tem; o senhor, a senhora tem", pron: "á" },
						{ it: "(noi) ab**bia**mo", pt: "nós temos", pron: "ab-biá-mo" },
						{ it: "(voi) a**ve**te", pt: "vós tendes, vocês têm", pron: "a-vê-te" },
						{ it: "(loro) **han**no", pt: "eles, elas têm", pron: "án-no" }
					]
				},
				{
					type: 'p',
					text: "Como no português, *avere* serve para posse (*ho il passaporto*), mas também para algumas coisas que nós dizemos de outro jeito. A mais útil: a idade. Em italiano, idade se *tem*, como em português: *Quanti anni hai?* (quantos anos você tem?), *Ho ventitré anni* (tenho vinte e três anos)."
				},
				{ type: 'h', text: "C'è e ci sono: o nosso “tem” de existir" },
				{
					type: 'p',
					text: "No Brasil dizemos “tem um bar aqui perto” no sentido de “existe”. O italiano não usa *avere* para isso; usa *c'è* (para uma coisa) e *ci sono* (para várias). É o equivalente do “há”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "C'è un **cor**so la **se**ra?", pt: "Tem um curso à noite?", pron: "tché un kôr-so la sê-ra?" },
						{ it: "Ci **so**no due **cor**si.", pt: "Há dois cursos.", pron: "tchi sô-no dú-e kôr-si" },
						{ it: "Non c'è il bal**co**ne.", pt: "Não tem varanda.", pron: "non tché il bal-kô-ne" }
					]
				},
				{
					type: 'p',
					text: "Cuidado para não confundir *c'è* (há) com *è* (é, está). *Chiara è a casa* = a Chiara está em casa. *C'è Chiara?* = a Chiara está aí? (literalmente “há Chiara?”), a pergunta clássica ao telefone ou na porta."
				},
				{ type: 'h', text: "Os artigos indefinidos: un, uno, una, un'" },
				{
					type: 'p',
					text: "Onde o português tem “um” e “uma”, o italiano tem quatro formas. A escolha depende do gênero e do som com que começa a palavra seguinte."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un **cor**so, un in**di**rizzo", pt: "masculino, na maioria dos casos: *un*" },
						{ it: "**u**no **scon**to, **u**no **zai**no", pt: "masculino antes de *s* + consoante ou de *z*: *uno*" },
						{ it: "una **stan**za, una **pen**na", pt: "feminino antes de consoante: *una*" },
						{ it: "un'e**mail**, un'i**de**a", pt: "feminino antes de vogal: *un'*" }
					]
				},
				{
					type: 'dica',
					text: "O apóstrofo só existe no feminino. *Un amico* (um amigo) não tem apóstrofo; *un'amica* (uma amiga), sim. Na fala soam quase igual; na escrita, o apóstrofo mostra que é feminino."
				},
				{ type: 'h', text: "O Lei de cortesia" },
				{
					type: 'p',
					text: "Para falar com um desconhecido, um funcionário ou alguém mais velho, o italiano usa *Lei*, que equivale ao nosso “o senhor”, “a senhora”. O verbo vai na terceira pessoa, igual a “ele” e “ela”: *Lei ha un documento?*, *Lei è di Roma?*. Muitas vezes o *Lei* nem aparece: *Ha un'email?*, *Scusi!*. Entre jovens, amigos e colegas, usa-se *tu*. Se estiver em dúvida, comece com *Lei*: o outro logo propõe o *tu* se quiser."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o H mudo',
			blocks: [
				{
					type: 'p',
					text: "No italiano, o *h* nunca tem som. Para um brasileiro isso é fácil, porque em português também é assim (“hora”, “hoje”). O perigo vem do inglês: quem estudou inglês às vezes aspira o *h* de *ho* ou *hanno*. Não faça isso: *ho* é só “ó”."
				},
				{ type: 'h', text: "Por que escrever uma letra que não se diz?" },
				{
					type: 'p',
					text: "Nas formas de *avere*, o *h* existe só para separar na escrita palavras que soam exatamente igual. Na fala, o contexto resolve."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ho / o", pt: "eu tenho / ou", pron: "ó / ô" },
						{ it: "hai / ai", pt: "você tem / aos", pron: "ái / ái" },
						{ it: "ha / a", pt: "ele tem / a, para", pron: "á / á" },
						{ it: "**han**no / **an**no", pt: "eles têm / ano", pron: "án-no / án-no" }
					]
				},
				{
					type: 'p',
					text: "Repare: *ho* tem o *o* aberto e a conjunção *o* (ou) tem o *o* fechado. Mas, numa frase, ninguém confunde *Ho una domanda* (tenho uma pergunta) com outra coisa."
				},
				{ type: 'h', text: "O H depois de C e G" },
				{
					type: 'p',
					text: "A outra função do *h* você já conhece da lição 0: depois de *c* e *g*, antes de *e* e *i*, ele mantém o som duro. *Chi* é “ki”, *anche* é “án-ke”. Fora isso, o *h* só aparece em palavras estrangeiras, e continua mudo: *hotel* soa “o-tél”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Ho** una do**man**da.", pt: "Tenho uma pergunta.", pron: "ó u-na do-mán-da" },
						{ it: "Lei ha un docu**men**to?", pt: "O senhor tem um documento?", pron: "léi á un do-ku-mên-to?" },
						{ it: "Non ce l'ho.", pt: "Não tenho.", pron: "non tche ló" },
						{ it: "**Han**no un ba**gno**.", pt: "Eles têm um banheiro.", pron: "án-no un bá-nho" }
					]
				},
				{
					type: 'dica',
					text: "Em *non ce l'ho*, tudo se junta numa palavra só, com a força no fim: “nontchelÓ”. É assim que os italianos dizem, bem rápido."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ha una penna, signora?", pt: "A senhora tem uma caneta?" },
				{ it: "C'è uno studente brasiliano a lezione.", pt: "Tem um estudante brasileiro na aula." },
				{ it: "Ci sono due bagni in casa?", pt: "Tem dois banheiros na casa?" },
				{ it: "Abbiamo un'ora libera.", pt: "Temos uma hora livre." },
				{ it: "Scusi, Lei è il professore?", pt: "Desculpe, o senhor é o professor?" },
				{ it: "Matteo ha uno zaino e una bicicletta.", pt: "O Matteo tem uma mochila e uma bicicleta." },
				{ it: "Quanti anni hai? Ho ventitré anni.", pt: "Quantos anos você tem? Tenho vinte e três anos." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Desculpe, tem desconto para estudantes?", parts: ["Scusi, ", null, " uno sconto per studenti?"], answers: ["c'è"] },
				{ pt: "À noite há dois cursos.", parts: ["La sera ", null, " due corsi."], answers: ["ci sono"] },
				{ pt: "O senhor tem um endereço na Itália?", parts: ["Lei ", null, " un indirizzo in Italia?"], answers: ["ha"] },
				{ pt: "Eles têm uma mochila.", parts: ["Loro hanno ", null, " zaino."], answers: ["uno"] },
				{ pt: "Aqui está um e-mail da Chiara.", parts: ["Ecco ", null, "email di Chiara."], answers: ["un'"] }
			]
		}
	]
};

const licao3: Lesson = {
	no: 3,
	kind: 'licao',
	title: 'In cucina',
	titlePt: 'Na cozinha',
	lines: [
		{
			it: "Chiara, tu studi o lavori?",
			pt: "Chiara, você estuda ou trabalha?",
			lit: "Chiara, tu estudas ou trabalhas?",
			note: "*Studi* e *lavori* vêm de *studiare* e *lavorare*, verbos em *-are*, o grupo mais numeroso do italiano. Com *tu*, a terminação é *-i*. Em *studiare*, o *i* do radical já faz o serviço: *studi*, e não “studii”."
		},
		{
			it: "Tutte e due le cose! Studio medicina e lavoro in una libreria.",
			pt: "As duas coisas! Estudo medicina e trabalho numa livraria.",
			lit: "Todas e duas as coisas! Estudo medicina e trabalho em uma livraria.",
			note: "Com *io*, a terminação é *-o*, como em português: *studio*, *lavoro*. Atenção: *libreria* é livraria; biblioteca é *biblioteca*."
		},
		{
			it: "Lavori qui a Bologna?",
			pt: "Você trabalha aqui em Bolonha?",
			lit: "Trabalhas aqui a Bolonha?",
			note: "Com cidades, o italiano usa *a*, tanto para estar como para ir: *lavoro a Bologna*, *abito a Recife*, *vado a Roma*."
		},
		{
			it: "Sì, in centro, il sabato e la domenica.",
			pt: "Sim, no centro, aos sábados e domingos.",
			lit: "Sim, em centro, o sábado e o domingo.",
			note: "Com países, regiões e vários lugares da cidade, a preposição é *in*: *in Italia*, *in Brasile*, *in centro*, *in cucina*."
		},
		{
			it: "E Matteo? Lavora anche lui?",
			pt: "E o Matteo? Ele também trabalha?",
			lit: "E Matteo? Trabalha também ele?",
			note: "Com *lui*, *lei* e *Lei*, a terminação é *-a*: *lavora*. *Anche lui* = ele também."
		},
		{
			it: "No, Matteo suona la chitarra in un gruppo e cerca lavoro.",
			pt: "Não, o Matteo toca violão numa banda e está procurando emprego.",
			lit: "Não, Matteo toca a guitarra em um grupo e procura trabalho.",
			note: "*Suonare* = tocar (instrumento). *Cercare* = procurar. O presente italiano também cobre o nosso “estar fazendo”: *cerca lavoro*, está procurando trabalho."
		},
		{
			it: "Anch'io cerco un lavoretto. Parlo un po' di italiano...",
			pt: "Eu também estou procurando um bico. Falo um pouco de italiano...",
			lit: "Também eu procuro um trabalhinho. Falo um pouco de italiano...",
			note: "*Lavoretto*: trabalhinho, bico (*-etto* é diminutivo). *Un po'* é a forma curta de *un poco*, um pouco; por isso o apóstrofo."
		},
		{
			it: "Ma parli già bene! E tua madre? Abita a Recife?",
			pt: "Mas você já fala bem! E a sua mãe? Mora em Recife?",
			lit: "Mas falas já bem! E tua mãe? Mora a Recife?",
			note: "*Abitare* = morar; com cidade, *abitare a*. Com nomes de parentes no singular, o possessivo vem sem artigo: *tua madre*, *mio padre*."
		},
		{
			it: "Sì, e parla solo portoghese. Ogni domenica telefono a casa.",
			pt: "Mora, e só fala português. Todo domingo eu ligo para casa.",
			lit: "Sim, e fala só português. Cada domingo telefono a casa.",
			note: "*Telefonare a* = ligar para. Repare na força: *telefono* (eu ligo) soa “te-lé-fo-no”, como o substantivo *il telefono*."
		},
		{
			it: "E quando torni in Brasile?",
			pt: "E quando você volta para o Brasil?",
			lit: "E quando voltas em Brasil?",
			note: "*Tornare* = voltar. Com país, *in*, tanto para estar como para ir: *torno in Brasile*, *abito in Italia*."
		},
		{
			it: "A dicembre. Torno per Natale.",
			pt: "Em dezembro. Volto para o Natal.",
			lit: "A dezembro. Volto para Natal.",
			note: "Com os meses, usa-se *a* ou *in*: *a dicembre*, *in dicembre*."
		},
		{
			it: "Allora stasera cuciniamo insieme? Tu prepari un piatto brasiliano e io uno napoletano.",
			pt: "Então hoje à noite a gente cozinha junto? Você prepara um prato brasileiro e eu, um napolitano.",
			lit: "Então esta noite cozinhamos juntos? Tu preparas um prato brasileiro e eu um napolitano.",
			note: "Com *noi*, a terminação é *-iamo*: *cuciniamo*, *parliamo*. O italiano não tem um “a gente” com verbo de terceira pessoa; usa *noi*."
		},
		{
			it: "Affare fatto! Io compro il riso e i fagioli.",
			pt: "Fechado! Eu compro o arroz e o feijão.",
			lit: "Negócio feito! Eu compro o arroz e os feijões.",
			note: "*Affare fatto* = negócio fechado. O feijão, em italiano, normalmente vai no plural: *i fagioli*."
		},
		{
			it: "Dove abitate? Abitiamo a Torino, ma lavoriamo a Milano.",
			pt: "Onde vocês moram? Moramos em Turim, mas trabalhamos em Milão.",
			sep: true,
			note: "Com *voi*, *-ate*: *abitate*. Com *noi*, *-iamo*: *abitiamo*, *lavoriamo*."
		},
		{
			it: "Sara e Luca parlano bene inglese.",
			pt: "A Sara e o Luca falam bem inglês.",
			note: "Com *loro*, *-ano*. A força fica na mesma sílaba do singular: *parla* → *parlano* (“pár-la-no”), *lavora* → *lavorano* (“la-vô-ra-no”). Nunca no *-a-* da terminação."
		},
		{ it: "Chi arriva stasera? Arriva Matteo.", pt: "Quem chega hoje à noite? O Matteo." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os verbos em -are',
			blocks: [
				{
					type: 'p',
					text: "A maioria dos verbos italianos termina em *-are* no infinitivo: *parlare* (falar), *lavorare* (trabalhar), *abitare* (morar), *studiare*, *cercare*, *tornare*, *arrivare*, *comprare*... E a ótima notícia é que quase todos seguem o mesmo modelo. Aprendeu um, aprendeu centenas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **par**lo", pt: "eu falo", pron: "pár-lo" },
						{ it: "(tu) **par**li", pt: "tu falas, você fala", pron: "pár-li" },
						{ it: "(lui, lei, Lei) **par**la", pt: "ele, ela fala; o senhor fala", pron: "pár-la" },
						{ it: "(noi) par**lia**mo", pt: "nós falamos", pron: "par-liá-mo" },
						{ it: "(voi) par**la**te", pt: "vocês falam", pron: "par-lá-te" },
						{ it: "(loro) **par**lano", pt: "eles, elas falam", pron: "pár-la-no" }
					]
				},
				{
					type: 'p',
					text: "Tire o *-are* e acrescente as terminações *-o, -i, -a, -iamo, -ate, -ano*. Compare com o português: “falo, falas, fala, falamos, falais, falam”. As diferenças são poucas: *tu* termina em *-i*, *noi* em *-iamo* e *loro* em *-ano*."
				},
				{ type: 'h', text: "Onde cai a força" },
				{
					type: 'p',
					text: "Nas três pessoas do singular e em *loro*, a força fica no radical, e a sílaba forte do singular continua forte no plural: *abito* → *abitano* (força no primeiro *a*), *lavoro* → *lavorano* (força no *vo*), *telefono* → *telefonano* (força no *le*). Só *noi* e *voi* puxam a força para a terminação: *abitiamo*, *abitate*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**a**bito, **a**bitano", pt: "moro, moram", pron: "á-bi-to, á-bi-ta-no" },
						{ it: "la**vo**ro, la**vo**rano", pt: "trabalho, trabalham", pron: "la-vô-ro, la-vô-ra-no" },
						{ it: "abi**tia**mo, abi**ta**te", pt: "moramos, vocês moram", pron: "a-bi-tiá-mo, a-bi-tá-te" }
					]
				},
				{ type: 'h', text: "Dois detalhes de escrita" },
				{
					type: 'p',
					text: "Em *cercare* (procurar), o som “k” precisa continuar duro antes de *-i* e *-iamo*. Por isso entra o *h* da lição 0: *cerco, cerchi, cerca, cerchiamo, cercate, cercano*. O mesmo com *pagare* (pagar): *pago, paghi, paghiamo*. Já nos verbos em *-iare*, como *studiare* e *cominciare*, o *i* não se repete: *studi*, *studiamo*."
				},
				{ type: 'h', text: "A, in: para onde e onde" },
				{
					type: 'p',
					text: "Enquanto o português usa “em” para quase tudo, o italiano distribui: *a* com cidades (*a Bologna*, *a Recife*) e com *casa* (*a casa*); *in* com países, regiões e muitos lugares (*in Italia*, *in Puglia*, *in centro*, *in cucina*, *in una libreria*). E serve tanto para onde se está quanto para onde se vai: *abito a Bologna* (moro em Bolonha), *torno a Bologna* (volto para Bolonha)."
				},
				{
					type: 'dica',
					text: "Não tente aplicar a regra de cabeça enquanto fala. Repita *a Bologna*, *in Italia*, *a casa*, *in centro* como blocos prontos; com o tempo, o par certo sai sozinho."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: as consoantes duplas na prática',
			blocks: [
				{
					type: 'p',
					text: "Na lição 0 você viu que consoante dobrada se pronuncia dobrada. O diálogo de hoje está cheio delas, e vale treinar cada uma. Lembre: com *t, p, c*, a boca segura um instante antes de soltar; com *l, r, s, m, n*, o som se prolonga."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**tut**te", pt: "todas", pron: "tút-te" },
						{ it: "Mat**te**o", pt: "Matteo", pron: "mat-té-o" },
						{ it: "chi**tar**ra", pt: "violão", pron: "ki-tár-ra" },
						{ it: "**grup**po", pt: "grupo, banda", pron: "grúp-po" },
						{ it: "al**lo**ra", pt: "então", pron: "al-lô-ra" },
						{ it: "af**fa**re **fat**to", pt: "negócio fechado", pron: "af-fá-re fát-to" },
						{ it: "**piat**to", pt: "prato", pron: "piát-to" }
					]
				},
				{ type: 'h', text: "Os sufixos sempre dobrados" },
				{
					type: 'p',
					text: "Alguns sufixos muito comuns têm sempre consoante dupla, e vale gravá-los pelo som: *-etto* (diminutivo: *lavoretto*, trabalhinho), *-issimo* (superlativo: *benissimo*, muito bem). Diga “la-vo-rêt-to”, “be-nís-si-mo”, segurando bem o *t* e o *s*."
				},
				{ type: 'h', text: "Por que isso importa" },
				{
					type: 'p',
					text: "Não é capricho: uma dupla mal feita pode trocar a palavra. *Nonno* (avô) e *nono* (nono), *sette* (sete) e *sete* (sede), *anno* (ano) e *ano* (ânus, sim!). Um italiano entende pelo contexto, mas vai sorrir. Melhor caprichar."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**an**no / **a**no", pt: "ano / ânus", pron: "án-no / á-no" },
						{ it: "**fat**to / **fa**to", pt: "feito / destino", pron: "fát-to / fá-to" },
						{ it: "**cop**pia / **co**pia", pt: "casal / cópia", pron: "kóp-pia / kó-pia" }
					]
				},
				{
					type: 'dica',
					text: "Um truque: diga a palavra batendo palmas no ritmo. *Mat-te-o* tem uma pausa curta entre *mat* e *te*, como se o *t* fosse o fim de uma sílaba e o começo da outra."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Dove lavori? Lavoro in una libreria.", pt: "Onde você trabalha? Trabalho numa livraria." },
				{ it: "Non parliamo inglese, parliamo portoghese.", pt: "Não falamos inglês, falamos português." },
				{ it: "Matteo e Chiara cucinano insieme la domenica.", pt: "O Matteo e a Chiara cozinham juntos aos domingos." },
				{ it: "Quando tornate a Roma?", pt: "Quando vocês voltam para Roma?" },
				{ it: "Cerco un lavoro in centro.", pt: "Estou procurando um trabalho no centro." },
				{ it: "Rafael telefona a Chiara stasera.", pt: "O Rafael liga para a Chiara hoje à noite." },
				{ it: "Abitiamo in Italia, a Bologna.", pt: "Moramos na Itália, em Bolonha." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Você fala italiano?", parts: ["Tu ", null, " italiano?"], answers: ["parli"] },
				{ pt: "Nós moramos em Bolonha.", parts: ["Noi ", null, " a Bologna."], answers: ["abitiamo"] },
				{ pt: "Eles trabalham em Milão.", parts: ["Loro lavorano ", null, " Milano."], answers: ["a"] },
				{ pt: "Vocês voltam para o Brasil em dezembro?", parts: ["Tornate ", null, " Brasile a dicembre?"], answers: ["in"] },
				{ pt: "O Matteo está procurando um trabalho.", parts: ["Matteo ", null, " un lavoro."], answers: ["cerca"] }
			]
		}
	]
};

const licao4: Lesson = {
	no: 4,
	kind: 'licao',
	title: 'Al mercato',
	titlePt: 'No mercado',
	lines: [
		{
			it: "Che bello questo mercato!",
			pt: "Que bonito este mercado!",
			note: "*Che bello!* = que bonito! *Questo* = este; no feminino, *questa*."
		},
		{
			it: "Sì, e i prezzi sono buoni. Guarda i pomodori!",
			pt: "É, e os preços são bons. Olha os tomates!",
			lit: "Sim, e os preços são bons. Olha os tomates!",
			note: "*Il prezzo* → *i prezzi*; *il pomodoro* → *i pomodori*. A maioria dos masculinos em *-o* faz o plural em *-i*, e o artigo *il* vira *i*."
		},
		{
			it: "Buongiorno, ragazzi! Che cosa desiderate?",
			pt: "Bom dia, pessoal! O que vocês desejam?",
			lit: "Bom dia, rapazes! Que coisa desejais?",
			note: "*Ragazzi*, plural de *ragazzo*, serve para um grupo de jovens, mesmo misto: “pessoal”, “gente”."
		},
		{ it: "Buongiorno! Quanto costano i pomodori?", pt: "Bom dia! Quanto custam os tomates?" },
		{
			it: "Tre euro al chilo. E oggi le fragole sono in offerta!",
			pt: "Três euros o quilo. E hoje os morangos estão em promoção!",
			lit: "Três euros ao quilo. E hoje os morangos são em oferta!",
			note: "*La fragola* → *le fragole*: femininos em *-a* fazem o plural em *-e*, e *la* vira *le*. *Euro* não muda no plural: *un euro*, *tre euro*."
		},
		{
			it: "Le fragole sono bellissime! E gli asparagi?",
			pt: "Os morangos estão lindos! E os aspargos?",
			note: "*Gli asparagi*: diante de vogal, o plural masculino usa *gli*. No singular, *l'asparago*."
		},
		{
			it: "Gli asparagi sono finiti, mi dispiace. Ma ci sono gli spinaci, freschissimi.",
			pt: "Os aspargos acabaram, sinto muito. Mas tem espinafre, fresquíssimo.",
			lit: "Os aspargos são acabados, me desagrada. Mas há os espinafres, fresquíssimos.",
			note: "*Gli* também é o plural de *lo*, usado antes de *s* + consoante: *gli spinaci*. Em *freschissimi*, o *h* mantém o som de “k” (*fresco* → *freschi*)."
		},
		{
			it: "Allora un chilo di pomodori, le fragole e gli spinaci.",
			pt: "Então um quilo de tomate, os morangos e o espinafre."
		},
		{
			it: "Ecco a voi. Altro?",
			pt: "Aqui está. Mais alguma coisa?",
			lit: "Eis a vós. Outro?",
			note: "*Ecco a voi* (ou *ecco a Lei*, a uma pessoa só) = aqui está, ao entregar alguma coisa. *Altro?* é a pergunta de todo vendedor: “mais alguma coisa?”."
		},
		{
			it: "Sì, l'olio. È di qui?",
			pt: "Sim, o azeite. É daqui?",
			note: "*L'olio*: diante de vogal, *il*, *lo* e *la* viram *l'*. Na cozinha, *olio* quase sempre quer dizer azeite de oliva."
		},
		{
			it: "È l'olio della mia famiglia! Gli ulivi sono in Puglia, vicino a Bari.",
			pt: "É o azeite da minha família! As oliveiras ficam na Puglia, perto de Bari.",
			lit: "É o azeite da minha família! As oliveiras são em Puglia, perto a Bari.",
			note: "*Famiglia* e *gli* têm o som parecido com o nosso “lh”: “fa-mí-lha”, “lhi”. *Della* = *di* + *la*; essas contrações virão com calma."
		},
		{
			it: "Prendiamo anche l'olio, allora. Quant'è in tutto?",
			pt: "Vamos levar o azeite também, então. Quanto dá tudo?",
			lit: "Pegamos também o azeite, então. Quanto é em tudo?",
			note: "*Quant'è?* (de *quanto è*) é a pergunta clássica na hora de pagar."
		},
		{
			it: "Sono ventidue euro. Grazie, ragazzi, e buona giornata!",
			pt: "São vinte e dois euros. Obrigado, pessoal, e tenham um bom dia!",
			note: "*Buongiorno* é o cumprimento; *buona giornata* é o “tenha um bom dia” da despedida."
		},
		{
			it: "Lo studente parla inglese. Gli studenti parlano inglese.",
			pt: "O estudante fala inglês. Os estudantes falam inglês.",
			sep: true,
			note: "*Lo* no singular e *gli* no plural, antes de *s* + consoante e antes de *z*: *lo zaino*, *gli zaini*."
		},
		{
			it: "L'amica di Chiara arriva oggi. Le amiche di Chiara arrivano oggi.",
			pt: "A amiga da Chiara chega hoje. As amigas da Chiara chegam hoje.",
			note: "No plural feminino, *le* não leva apóstrofo: *l'amica*, mas *le amiche*. E o *h* de *amiche* mantém o som de “k”."
		},
		{
			it: "Il ragazzo è di Torino. I ragazzi sono di Torino.",
			pt: "O rapaz é de Turim. Os rapazes são de Turim."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os artigos definidos e o plural',
			blocks: [
				{
					type: 'p',
					text: "O português tem quatro artigos definidos: o, a, os, as. O italiano tem sete. Parece muito, mas a lógica é a mesma dos indefinidos da lição 2: o que manda é o gênero e o som com que começa a palavra seguinte."
				},
				{ type: 'h', text: "Masculino" },
				{
					type: 'exemplos',
					items: [
						{ it: "il **prez**zo → i **prez**zi", pt: "antes de consoante: *il*, plural *i*" },
						{ it: "lo stu**den**te → gli stu**den**ti", pt: "antes de *s* + consoante e de *z*: *lo*, plural *gli*" },
						{ it: "lo **zai**no → gli **zai**ni", pt: "a mochila → as mochilas" },
						{ it: "l'**o**lio, l'a**mi**co → gli a**mi**ci", pt: "antes de vogal: *l'*, plural *gli*" }
					]
				},
				{ type: 'h', text: "Feminino" },
				{
					type: 'exemplos',
					items: [
						{ it: "la **fra**gola → le **fra**gole", pt: "antes de consoante: *la*, plural *le*" },
						{ it: "l'a**mi**ca → le a**mi**che", pt: "antes de vogal: *l'*, plural *le* (sem apóstrofo)" }
					]
				},
				{
					type: 'dica',
					text: "Repare no paralelo com os indefinidos: onde se diz *uno* (*uno studente*, *uno zaino*), o definido é *lo*; onde se diz *un'* ou *un* antes de vogal, o definido é *l'*. Aprendeu um, ganhou o outro."
				},
				{ type: 'h', text: "Como se forma o plural" },
				{
					type: 'p',
					text: "O italiano não usa o *-s* do plural. Ele troca a vogal final. São três regras principais:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "il pomo**do**ro → i pomo**do**ri", pt: "masculino em *-o* → *-i*" },
						{ it: "la **fra**gola → le **fra**gole", pt: "feminino em *-a* → *-e*" },
						{ it: "lo stu**den**te → gli stu**den**ti", pt: "palavras em *-e* (dos dois gêneros) → *-i*" },
						{ it: "la le**zio**ne → le le**zio**ni", pt: "a aula → as aulas" }
					]
				},
				{
					type: 'p',
					text: "As palavras terminadas em *-e* podem ser masculinas (*lo studente*, *il giornale*) ou femininas (*la lezione*, *la sera*). A terminação não diz o gênero; o artigo, sim. Por isso vale guardar cada palavra nova junto com o artigo: *la lezione*, e não só *lezione*."
				},
				{ type: 'h', text: "Os que não mudam" },
				{
					type: 'p',
					text: "Algumas palavras ficam iguais no plural, e só o artigo mostra o número: as que terminam em vogal acentuada (*la città* → *le città*, *il caffè* → *i caffè*), as estrangeiras (*il bar* → *i bar*, *l'email* → *le email*) e algumas abreviadas, como *la foto* → *le foto*. E *euro*, como você viu: *tre euro*."
				},
				{ type: 'h', text: "O som que muda no plural" },
				{
					type: 'p',
					text: "Com palavras em *-ca*, *-ga*, o plural acrescenta *h* para manter o som duro: *amica* → *amiche*, *fresca* → *fresche*. Com *-co*, *-go*, às vezes o *h* entra (*fresco* → *freschi*, *lago* → *laghi*) e às vezes não, e o som fica doce (*amico* → *amici*, “a-mí-tchi”; *asparago* → *asparagi*, “a-spá-ra-dji”). Não há regra simples para isso; o ouvido aprende com o uso."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o gli',
			blocks: [
				{
					type: 'p',
					text: "Com o artigo *gli*, o som “lh” do italiano passa a aparecer em todo lugar. Hoje ele surgiu em *gli asparagi*, *gli spinaci*, *gli ulivi*, *famiglia*. Vamos treinar."
				},
				{ type: 'h', text: "O artigo gli" },
				{
					type: 'p',
					text: "*Gli* soa “lhi”, como a última sílaba de “filhinho” sem o “nho”. E, como todo artigo, se apoia na palavra seguinte: *gli amici* soa como uma palavra só, “lhiamítchi”. Diante de *i*, os dois *i* se fundem: *gli italiani* soa “lhitaliáni”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "gli a**spa**ragi", pt: "os aspargos", pron: "lhi a-spá-ra-dji" },
						{ it: "gli spi**na**ci", pt: "o espinafre", pron: "lhi spi-ná-tchi" },
						{ it: "gli u**li**vi", pt: "as oliveiras", pron: "lhi u-lí-vi" },
						{ it: "gli ita**lia**ni", pt: "os italianos", pron: "lhi-ta-liá-ni" }
					]
				},
				{ type: 'h', text: "Gli no meio da palavra" },
				{
					type: 'p',
					text: "No meio da palavra, antes de outra vogal, o *i* de *gli* não soa. E o “lh” é mais longo e mais apertado que o nosso: a língua se apoia firme no céu da boca por um instante."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "fa**mi**glia", pt: "família", pron: "fa-mí-lha" },
						{ it: "**fo**glio", pt: "folha (de papel)", pron: "fó-lho" },
						{ it: "**vo**glio", pt: "quero", pron: "vó-lho" },
						{ it: "bot**ti**glia", pt: "garrafa", pron: "bot-tí-lha" },
						{ it: "**fi**glie", pt: "filhas", pron: "fí-lhe" }
					]
				},
				{ type: 'h', text: "Sem i, sem lh" },
				{
					type: 'p',
					text: "Só *gli* faz “lh”. *Gla*, *gle*, *glo*, *glu* são *g* + *l* normais: *inglese* (inglês), *globale*. E não confunda com o *gn* (“nh”) de *Bologna* e *bagno*: *voglio* (quero, “vó-lho”) e *sogno* (sonho, “sô-nho”) são sons diferentes."
				},
				{
					type: 'dica',
					text: "Para sentir a diferença entre *gli* e *ll*, diga em sequência *moglie* (esposa, “mô-lhe”) e *molle* (mole, “mól-le”). No primeiro, o meio da língua sobe; no segundo, só a ponta toca os dentes."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Le fragole costano tre euro.", pt: "Os morangos custam três euros." },
				{ it: "Gli studenti sono in centro.", pt: "Os estudantes estão no centro." },
				{ it: "Lo zaino di Rafael è in cucina.", pt: "A mochila do Rafael está na cozinha." },
				{ it: "Gli amici di Chiara abitano in Puglia.", pt: "Os amigos da Chiara moram na Puglia." },
				{ it: "La famiglia di Matteo è di Torino.", pt: "A família do Matteo é de Turim." },
				{ it: "L'olio e i pomodori sono in offerta.", pt: "O azeite e os tomates estão em promoção." },
				{ it: "Ci sono due bar e tre librerie in via Mazzini.", pt: "Há dois bares e três livrarias na rua Mazzini." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Hoje os tomates estão bons.", parts: ["Oggi ", null, " pomodori sono buoni."], answers: ["i"] },
				{ pt: "Onde está o espinafre?", parts: ["Dove sono ", null, " spinaci?"], answers: ["gli"] },
				{ pt: "Aqui está o azeite da minha família.", parts: ["Ecco ", null, "olio della mia famiglia."], answers: ["l'"] },
				{ pt: "As amigas da Chiara chegam hoje.", parts: ["Le amiche di Chiara ", null, " oggi."], answers: ["arrivano"] },
				{ pt: "Onde está a mochila do Rafael?", parts: ["Dov'è ", null, " zaino di Rafael?"], answers: ["lo"] }
			]
		}
	]
};

const licao5: Lesson = {
	no: 5,
	kind: 'licao',
	title: 'Al bar',
	titlePt: 'No bar',
	lines: [
		{
			it: "Che cosa prendi? Offro io!",
			pt: "O que você vai querer? Eu pago!",
			lit: "Que coisa pegas? Ofereço eu!",
			note: "*Prendere* = pegar, e também tomar, pedir (comida, bebida, transporte). É um verbo em *-ere*, do segundo grupo: *prendo, prendi, prende*... *Offro io* = eu ofereço, eu pago."
		},
		{
			it: "Grazie! Prendo un cappuccino e un cornetto.",
			pt: "Obrigado! Vou querer um cappuccino e um croissant.",
			lit: "Obrigado! Pego um cappuccino e um cornetto.",
			note: "*Cornetto* (em Milão, *brioche*) é o croissant do café da manhã italiano, simples ou recheado."
		},
		{
			it: "Un cappuccino a mezzogiorno? Gli italiani prendono il cappuccino solo la mattina!",
			pt: "Um cappuccino ao meio-dia? Os italianos só tomam cappuccino de manhã!",
			lit: "Um cappuccino a meio-dia? Os italianos tomam o cappuccino só a manhã!",
			note: "Com *loro*, a terminação de *prendere* é *-ono*: *prendono*. E o costume é real: bebidas com bastante leite são coisa do café da manhã."
		},
		{
			it: "Davvero? Allora prendo un caffè, come voi.",
			pt: "Sério? Então vou tomar um café, como vocês.",
			lit: "Deveras? Então pego um café, como vós.",
			note: "No bar, *un caffè* é sempre um espresso, curto e forte. Não precisa dizer *espresso*."
		},
		{
			it: "Io invece prendo un macchiato.",
			pt: "Já eu vou de macchiato.",
			lit: "Eu, ao contrário, pego um macchiato.",
			note: "*Invece* marca contraste: “já eu”, “por outro lado”. *Caffè macchiato*: espresso com um pingo de leite (*macchiato* = manchado)."
		},
		{
			it: "Buongiorno! Avete lo scontrino?",
			pt: "Bom dia! Vocês têm o recibo?",
			note: "Em muitos bares, sobretudo nas cidades grandes, primeiro se paga no caixa (*la cassa*), pega-se o *scontrino* e depois se pede no balcão."
		},
		{
			it: "Sì, eccolo. Un caffè e un macchiato, per favore.",
			pt: "Temos, está aqui. Um café e um macchiato, por favor.",
			lit: "Sim, eis-o. Um café e um macchiato, por favor.",
			note: "*Eccolo* = *ecco* + *lo*: aqui está ele."
		},
		{
			it: "Scusi, al banco costa meno, vero?",
			pt: "Desculpe, no balcão sai mais barato, né?",
			lit: "Desculpe, no balcão custa menos, verdade?",
			note: "Tomar de pé, *al banco*, é o jeito mais italiano e o mais barato. *Al* = *a* + *il*."
		},
		{
			it: "Sì, al tavolo il servizio costa di più.",
			pt: "Sim, na mesa o serviço é mais caro.",
			lit: "Sim, à mesa o serviço custa de mais."
		},
		{
			it: "Matteo, che cosa leggi?",
			pt: "Matteo, o que você está lendo?",
			lit: "Matteo, que coisa lês?",
			note: "*Leggere* = ler: *leggo, leggi, legge*... A escrita é regular, mas o som muda com a vogal: *leggo* tem *g* duro (“lég-go”) e *leggi* tem *g* doce (“léd-dji”). É a regra do *c* e do *g* da lição 0."
		},
		{
			it: "Il giornale. Vedi? Stasera c'è la partita del Bologna.",
			pt: "O jornal. Está vendo? Hoje à noite tem jogo do Bologna.",
			lit: "O jornal. Vês? Esta noite há a partida do Bologna.",
			note: "*Vedere* = ver. *La partita* = o jogo, a partida. Muitos times levam artigo masculino: *il Bologna*, *il Napoli*. *Del* = *di* + *il*."
		},
		{
			it: "Dove vediamo la partita?",
			pt: "Onde a gente vê o jogo?",
			lit: "Onde vemos a partida?",
			note: "*Vediamo*: com *noi*, *-iamo*, igual aos verbos em *-are*. É a única forma idêntica nos dois grupos."
		},
		{
			it: "Qui! La sera mettono le partite sul grande schermo.",
			pt: "Aqui! À noite eles passam os jogos no telão.",
			lit: "Aqui! A noite põem as partidas sobre o grande ecrã.",
			note: "*Mettere* = pôr, colocar; *mettono* = (eles) põem. Sem sujeito, a terceira pessoa do plural funciona como o nosso “eles” indefinido. *Schermo* = tela."
		},
		{ it: "Perfetto! Allora stasera torniamo qui.", pt: "Perfeito! Então hoje à noite a gente volta aqui." },
		{
			it: "Che cosa bevete? Beviamo un'acqua frizzante.",
			pt: "O que vocês vão beber? Vamos tomar uma água com gás.",
			lit: "Que coisa bebeis? Bebemos uma água frisante.",
			sep: true,
			note: "*Bere* (beber) só é irregular no infinitivo. O resto se forma sobre *bev-*, com as terminações regulares: *bevo, bevi, beve, beviamo, bevete, bevono*."
		},
		{ it: "Leggete in italiano? Sì, un po' ogni sera.", pt: "Vocês leem em italiano? Sim, um pouco toda noite." },
		{ it: "Rafael scrive un messaggio a Chiara.", pt: "O Rafael escreve uma mensagem para a Chiara." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os verbos em -ere',
			blocks: [
				{
					type: 'p',
					text: "O segundo grupo de verbos italianos termina em *-ere*: *prendere* (pegar, tomar), *leggere* (ler), *vedere* (ver), *mettere* (pôr), *scrivere* (escrever), *credere* (crer, achar), *vivere* (viver). O modelo é parecido com o dos verbos em *-are*; mudam só algumas vogais."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "(io) **pren**do", pt: "eu pego, tomo", pron: "prén-do" },
						{ it: "(tu) **pren**di", pt: "você pega", pron: "prén-di" },
						{ it: "(lui, lei, Lei) **pren**de", pt: "ele, ela pega", pron: "prén-de" },
						{ it: "(noi) pren**dia**mo", pt: "nós pegamos", pron: "pren-diá-mo" },
						{ it: "(voi) pren**de**te", pt: "vocês pegam", pron: "pren-dê-te" },
						{ it: "(loro) **pren**dono", pt: "eles pegam", pron: "prén-do-no" }
					]
				},
				{ type: 'h', text: "Comparando com o -are" },
				{
					type: 'p',
					text: "Ponha os dois lado a lado: *parlo / prendo*, *parli / prendi*, *parla / prende*, *parliamo / prendiamo*, *parlate / prendete*, *parlano / prendono*. As formas de *io*, *tu* e *noi* terminam igual. Nas outras, onde o *-are* tem *a*, o *-ere* tem *e* ou *o*: *-a* → *-e*, *-ate* → *-ete*, *-ano* → *-ono*. É quase o mesmo que acontece em português: “fala / come”, “falam / comem”."
				},
				{ type: 'h', text: "Atenção à força" },
				{
					type: 'p',
					text: "No infinitivo, a maioria desses verbos tem a força no radical, e não no *-e-* da terminação: *prendere* soa “prén-de-re”, *leggere* “léd-dje-re”, *mettere* “mêt-te-re”, *scrivere* “skrí-ve-re”. Alguns poucos, como *vedere* (“ve-dê-re”), levam a força no *-e-*. No dia a dia, isso só aparece no infinitivo; as formas conjugadas seguem o padrão de sempre."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**pren**dere", pt: "pegar, tomar", pron: "prén-de-re" },
						{ it: "**leg**gere", pt: "ler", pron: "léd-dje-re" },
						{ it: "ve**de**re", pt: "ver", pron: "ve-dê-re" },
						{ it: "**met**tono", pt: "eles põem", pron: "mêt-to-no" }
					]
				},
				{ type: 'h', text: "O presente faz muita coisa" },
				{
					type: 'p',
					text: "O presente italiano serve para o que fazemos sempre (*gli italiani prendono il caffè al banco*), para o que está acontecendo agora (*che cosa leggi?*, o que você está lendo?) e para planos próximos (*stasera torniamo qui*, hoje à noite voltamos aqui). Onde nós usamos “estar + -ndo” ou “vou + infinitivo”, o italiano muitas vezes usa o presente simples."
				},
				{
					type: 'dica',
					text: "No bar, *prendo...* é a forma mais natural de pedir: *Prendo un caffè*. Soa como o nosso “vou querer um café”. Com *per favore* no fim, fica perfeito."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O bar italiano',
			blocks: [
				{
					type: 'p',
					text: "Na Itália, *bar* não é o lugar de beber cerveja à noite. É a padaria-cafeteria da esquina, onde se toma o café da manhã em pé, se faz uma pausa no meio da tarde, se compra uma água, se lê o jornal e, à noite, às vezes se vê o jogo. Existe um em cada quarteirão, e cada italiano tem o seu."
				},
				{ type: 'h', text: "O ritual" },
				{
					type: 'p',
					text: "Em muitos bares, sobretudo nos mais movimentados, você primeiro diz o pedido no caixa (*la cassa*), paga e recebe o *scontrino*, o recibo. Depois leva o recibo ao balcão (*il banco*) e repete o pedido ao barista. Em bares menores, pede-se direto no balcão e paga-se na saída. Na dúvida, observe o que os outros fazem."
				},
				{
					type: 'p',
					text: "O café se toma em pé, no balcão, em poucos goles. Sentar-se a uma mesa (*al tavolo*), com serviço, custa mais, às vezes o dobro, principalmente nas praças turísticas. E é comum o barista servir um copinho de água junto com o café."
				},
				{ type: 'h', text: "O que pedir" },
				{
					type: 'exemplos',
					items: [
						{ it: "un caf**fè**", pt: "um espresso, curto e forte", pron: "un kaf-fé" },
						{ it: "un **mac**chi**a**to", pt: "espresso com um pingo de leite", pron: "un mak-kiá-to" },
						{ it: "un caf**fè** **lun**go", pt: "espresso com mais água, mais longo", pron: "un kaf-fé lún-go" },
						{ it: "un caf**fè** ri**stret**to", pt: "espresso ainda mais curto e concentrado", pron: "un kaf-fé ri-strêt-to" },
						{ it: "un cappuc**ci**no", pt: "espresso com leite vaporizado e espuma", pron: "un kap-put-tchí-no" },
						{ it: "un **lat**te mac**chia**to", pt: "copo de leite quente com um pouco de café", pron: "un lát-te mak-kiá-to" },
						{ it: "un cor**net**to", pt: "croissant", pron: "un kor-nêt-to" },
						{ it: "una spre**mu**ta", pt: "suco de laranja espremido na hora", pron: "u-na spre-mú-ta" }
					]
				},
				{
					type: 'dica',
					text: "Cuidado com *latte*: quer dizer leite. Quem pede *un latte* num bar italiano recebe um copo de leite. Se quiser o que no Brasil chamamos de “latte”, peça *un latte macchiato*."
				},
				{ type: 'h', text: "A hora de cada coisa" },
				{
					type: 'p',
					text: "O cappuccino e o cornetto são o café da manhã clássico, tomados no balcão a caminho do trabalho. Depois do almoço, a regra (não escrita, mas muito seguida) é só espresso. No fim da tarde chega a hora do *aperitivo*: uma bebida acompanhada de petiscos, para encontrar os amigos antes do jantar. Ninguém vai expulsar você por pedir um cappuccino à tarde, mas agora você sabe por que o Matteo riu."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o S',
			blocks: [
				{
					type: 'p',
					text: "O diálogo de hoje está cheio de *s* em posições diferentes. Na lição 0 você viu as regras; agora vamos aplicá-las às palavras da lição."
				},
				{ type: 'h', text: "S no começo: sempre “s”" },
				{
					type: 'p',
					text: "No começo da palavra, antes de vogal, o *s* é o nosso “s” de “sapo”: *sono*, *sera*, *servizio*, *solo*. Antes de *p, t, c*, também: *scontrino*, *stasera*, *schermo*, *spremuta*. Lembre de não pôr um “i” na frente: “skon-trí-no”, não “iskontríno”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ser**vi**zio", pt: "serviço", pron: "ser-ví-tsio" },
						{ it: "scon**tri**no", pt: "recibo", pron: "skon-trí-no" },
						{ it: "**scher**mo", pt: "tela", pron: "skêr-mo" },
						{ it: "**scu**si", pt: "desculpe", pron: "skú-zi" }
					]
				},
				{ type: 'h', text: "S entre vogais: mais suave" },
				{
					type: 'p',
					text: "Entre duas vogais, o *s* é mais suave. Na pronúncia que você ouve na maior parte da Itália e na TV, ele soa como o nosso “z”: *cosa* (“kó-za”), *casa*, *scusi* (“skú-zi”), *frase*. No centro e no sul, muitos dizem um “s” brando. As duas versões estão certas; o que não pode é confundir com o *ss*, que é sempre forte."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**co**sa", pt: "coisa", pron: "kó-za" },
						{ it: "**ro**sa / **ros**sa", pt: "rosa / vermelha", pron: "ró-za / rôs-sa" },
						{ it: "**ca**sa / **cas**sa", pt: "casa / caixa", pron: "ká-za / kás-sa" },
						{ it: "be**nis**simo", pt: "muito bem", pron: "be-nís-si-mo" }
					]
				},
				{ type: 'h', text: "S antes de consoante sonora: “z”" },
				{
					type: 'p',
					text: "Antes de *b, d, g, l, m, n, r, v*, o *s* vira “z”, exatamente como no português “mesmo” e “rasgo”. Para um brasileiro isso sai naturalmente: *sbaglio* (erro, “zbá-lho”), *svelto* (rápido, “zvél-to”), *smettere* (parar, “zmêt-te-re”)."
				},
				{
					type: 'dica',
					text: "Repare em *mezzogiorno*, do diálogo: não tem *s*, mas tem um *zz*. Na próxima lição você aprende a separar o *z* “ts” do *z* “dz”; *mezzogiorno* é do segundo tipo: “med-dzo-djôr-no”."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Prendo un caffè al banco.", pt: "Tomo um café no balcão." },
				{ it: "Che cosa leggete? Leggiamo il giornale.", pt: "O que vocês estão lendo? Estamos lendo o jornal." },
				{ it: "Matteo e Chiara prendono un cornetto la mattina.", pt: "O Matteo e a Chiara comem um croissant de manhã." },
				{ it: "Vedi la cassa? Paghiamo lì.", pt: "Está vendo o caixa? A gente paga ali." },
				{ it: "Rafael beve un'acqua frizzante.", pt: "O Rafael bebe uma água com gás." },
				{ it: "Scrivo un messaggio a mia madre.", pt: "Escrevo uma mensagem para a minha mãe." },
				{ it: "Stasera vediamo la partita al bar.", pt: "Hoje à noite vamos ver o jogo no bar." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu vou tomar um cappuccino.", parts: ["Io ", null, " un cappuccino."], answers: ["prendo"] },
				{ pt: "O que você está lendo, Matteo?", parts: ["Che cosa ", null, ", Matteo?"], answers: ["leggi"] },
				{ pt: "Os italianos tomam o café no balcão.", parts: ["Gli italiani ", null, " il caffè al banco."], answers: ["prendono"] },
				{ pt: "Vocês bebem uma água?", parts: ["Voi ", null, " un'acqua?"], answers: ["bevete"] },
				{ pt: "Hoje à noite vemos o jogo juntos.", parts: ["Stasera ", null, " la partita insieme."], answers: ["vediamo"] }
			]
		}
	]
};

const licao6: Lesson = {
	no: 6,
	kind: 'licao',
	title: 'La giacca nuova',
	titlePt: 'O casaco novo',
	lines: [
		{
			it: "Buongiorno! Cerca qualcosa?",
			pt: "Bom dia! Procura alguma coisa?",
			note: "A vendedora usa *Lei* sem dizer o pronome: *cerca* = o senhor procura."
		},
		{
			it: "Sì, cerco una giacca. A Bologna fa già freddo!",
			pt: "Sim, estou procurando um casaco. Em Bolonha já está frio!",
			lit: "Sim, procuro uma jaqueta. A Bolonha faz já frio!",
			note: "*Fa freddo* = faz frio, está frio (do verbo *fare*, fazer). *Fa caldo* = faz calor. *Giacca* é um casaco mais leve: jaqueta, paletó."
		},
		{
			it: "Guardi questa: è nuova ed è molto elegante.",
			pt: "Olhe esta: é nova e é muito elegante.",
			note: "*Guardi* = olhe (forma do *Lei*; com *tu*, *guarda*). *Nuova* termina em *-a* porque concorda com *giacca*. Já *elegante* é igual para os dois gêneros."
		},
		{
			it: "È bella, ma è un po' corta.",
			pt: "É bonita, mas é um pouco curta.",
			note: "*Bello, bella, belli, belle*: os adjetivos em *-o* têm quatro formas, como em português."
		},
		{
			it: "Allora provi quella grigia. È lunga e calda.",
			pt: "Então experimente aquela cinza. É comprida e quente.",
			lit: "Então prove aquela cinza. É longa e quente.",
			note: "*Provi* = experimente (forma do *Lei*). *Quella* = aquela. *Grigio* (cinza) tem quatro formas: *grigio, grigia, grigi, grigie*."
		},
		{
			it: "Mmm, le maniche sono troppo lunghe.",
			pt: "Hum, as mangas estão compridas demais.",
			lit: "Hum, as mangas são demasiado longas.",
			note: "*Lunga* → *lunghe*: no plural, o *h* garante o som duro do *g*. *Troppo* = demais."
		},
		{
			it: "C'è anche la taglia più piccola. Ecco.",
			pt: "Tem também o tamanho menor. Aqui está.",
			lit: "Há também o tamanho mais pequeno. Eis.",
			note: "*La taglia* = o tamanho da roupa. *Più piccola* = menor (literalmente “mais pequena”)."
		},
		{
			it: "Perfetta! Quanto costa?",
			pt: "Perfeito! Quanto custa?",
			lit: "Perfeita! Quanto custa?",
			note: "*Perfetta* concorda com *la giacca*, que está subentendida."
		},
		{
			it: "Novanta euro, ma oggi c'è il venti per cento di sconto.",
			pt: "Noventa euros, mas hoje tem vinte por cento de desconto."
		},
		{
			it: "Ottimo! E quei pantaloni neri in vetrina?",
			pt: "Ótimo! E aquelas calças pretas na vitrine?",
			lit: "Ótimo! E aquelas calças pretas em vitrine?",
			note: "*I pantaloni* (as calças) é masculino plural, por isso *neri*. *Quei* é um plural de *quello* (aquele); você verá essas formas com calma mais adiante."
		},
		{
			it: "Sono italiani, comodi e molto eleganti. Ma non sono economici.",
			pt: "São italianas, confortáveis e muito elegantes. Mas não são baratas.",
			lit: "São italianos, cômodos e muito elegantes. Mas não são econômicos.",
			note: "Aqui aparecem os dois grupos de adjetivos: *italiano* (quatro formas: *italiani*) e *elegante* (duas formas: *eleganti*). *Economico* → *economici*: no plural masculino o *c* fica doce, “e-ko-nó-mi-tchi”."
		},
		{
			it: "Allora oggi solo la giacca. Il prezzo è giusto.",
			pt: "Então hoje só o casaco. O preço é justo.",
			note: "*Prezzo*: o *zz* soa “ts” forte, “prét-tso”."
		},
		{
			it: "Ottima scelta! Ecco lo scontrino. Buona giornata!",
			pt: "Ótima escolha! Aqui está o recibo. Tenha um bom dia!",
			note: "*Scelta*: *sce* soa “xe”, como você viu na lição 0: “xêl-ta”."
		},
		{
			it: "La piazza è grande e le strade sono strette.",
			pt: "A praça é grande e as ruas são estreitas.",
			sep: true,
			note: "*Grande* serve para os dois gêneros; plural *grandi*. *Stretta* → *strette*."
		},
		{
			it: "Questo ragazzo è simpatico; queste ragazze sono simpatiche.",
			pt: "Este rapaz é simpático; estas moças são simpáticas.",
			note: "*Simpatico* → *simpatici* (“tchi”), mas *simpatica* → *simpatiche* (“ke”). É a mesma história de *amico, amici, amica, amiche*."
		},
		{
			it: "Il museo è aperto la domenica? No, è chiuso.",
			pt: "O museu abre aos domingos? Não, fica fechado.",
			lit: "O museu é aberto o domingo? Não, é fechado."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Os adjetivos: dois grupos',
			blocks: [
				{
					type: 'p',
					text: "Como em português, o adjetivo italiano concorda em gênero e número com o substantivo. Ele se divide em dois grupos, conforme a terminação no masculino singular."
				},
				{ type: 'h', text: "Primeiro grupo: em -o, quatro formas" },
				{
					type: 'p',
					text: "Os adjetivos que terminam em *-o* têm uma forma para cada combinação, com as mesmas vogais do plural que você viu na lição 4: *-o, -a, -i, -e*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un pan**ta**lone **ne**ro", pt: "masculino singular: *nero*" },
						{ it: "una **giac**ca **ne**ra", pt: "feminino singular: *nera*" },
						{ it: "i panta**lo**ni **ne**ri", pt: "masculino plural: *neri*" },
						{ it: "le **giac**che **ne**re", pt: "feminino plural: *nere*" }
					]
				},
				{
					type: 'p',
					text: "São desse grupo *bello, nuovo, corto, lungo, caldo, freddo, piccolo, caro, comodo, italiano, brasiliano, aperto, chiuso, stanco, simpatico*... a maioria."
				},
				{ type: 'h', text: "Segundo grupo: em -e, duas formas" },
				{
					type: 'p',
					text: "Os adjetivos que terminam em *-e* servem para masculino e feminino. Só mudam no plural, de *-e* para *-i*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un ra**gaz**zo ele**gan**te / una ra**gaz**za ele**gan**te", pt: "um rapaz elegante / uma moça elegante" },
						{ it: "i ra**gaz**zi ele**gan**ti / le ra**gaz**ze ele**gan**ti", pt: "os rapazes elegantes / as moças elegantes" },
						{ it: "una **piaz**za **gran**de / due **piaz**ze **gran**di", pt: "uma praça grande / duas praças grandes" }
					]
				},
				{
					type: 'p',
					text: "Desse grupo são *grande, elegante, verde, inglese, francese, felice* (feliz), *forte, dolce* (doce)... Repare: *inglese* é igual para homem e mulher, enquanto *italiano* muda. Não há como adivinhar; o masculino singular conta tudo."
				},
				{ type: 'h', text: "Onde fica o adjetivo" },
				{
					type: 'p',
					text: "Normalmente depois do substantivo, como em português: *una giacca nuova*, *i pantaloni neri*. Alguns adjetivos muito comuns, como *bello*, *buono*, *grande* e *piccolo*, aparecem muitas vezes antes: *una bella piazza*, *un piccolo bar*. Com *essere*, o adjetivo vem depois do verbo e concorda com o sujeito: *la giacca è perfetta*, *le maniche sono lunghe*."
				},
				{ type: 'h', text: "Os sons que mudam" },
				{
					type: 'p',
					text: "Os adjetivos em *-co*, *-ca*, *-go*, *-ga* seguem a regra de *c* e *g*: o feminino plural sempre leva *h* (*lunghe*, *simpatiche*, *fresche*). No masculino plural, alguns levam *h* e mantêm o som duro (*lunghi*, *freschi*), outros não e ficam doces (*simpatici*, *economici*). Mais uma vez: ouça e repita a palavra inteira."
				},
				{
					type: 'dica',
					text: "Para intensificar: *molto* (muito) antes do adjetivo, *troppo* (demais), *un po'* (um pouco), ou o sufixo *-issimo*: *bellissima*, *freschissimi*. Repare que *molto* aqui não muda: *molto eleganti*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: o Z',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 1 você vem encontrando o *z* italiano: *grazie*, *stanza*, *ragazzi*, *mezzogiorno*, *piazza*, *prezzo*. Hoje é o dia de olhar para ele com calma. Lembre: o *z* italiano nunca é o “z” de “zebra”. É sempre “ts” ou “dz”."
				},
				{ type: 'h', text: "O z de “ts”" },
				{
					type: 'p',
					text: "É o mais frequente. A língua toca atrás dos dentes como para dizer “t” e solta um “s”. Quando o *z* está dobrado, segure o “t” um instante antes do “s”: *piazza* soa “piát…tsa”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**piaz**za", pt: "praça", pron: "piát-tsa" },
						{ it: "**prez**zo", pt: "preço", pron: "prét-tso" },
						{ it: "ra**gaz**zo, ra**gaz**ze", pt: "rapaz, moças", pron: "ra-gát-tso, ra-gát-tse" },
						{ it: "**gra**zie", pt: "obrigado", pron: "grá-tsie" },
						{ it: "**stan**za", pt: "quarto", pron: "stán-tsa" },
						{ it: "ser**vi**zio", pt: "serviço", pron: "ser-ví-tsio" }
					]
				},
				{ type: 'h', text: "O z de “dz”" },
				{
					type: 'p',
					text: "O outro *z* é sonoro: a língua faz um “d” e solta um “z”. É o que você ouve em *mezzogiorno* e em várias palavras que começam com *z*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "mezzo**gior**no", pt: "meio-dia", pron: "med-dzo-djôr-no" },
						{ it: "**zai**no", pt: "mochila", pron: "dzái-no" },
						{ it: "az**zur**ro", pt: "azul-claro", pron: "ad-dzúr-ro" },
						{ it: "**ze**ro", pt: "zero", pron: "dzé-ro" }
					]
				},
				{ type: 'h', text: "Como saber qual é" },
				{
					type: 'p',
					text: "Não há regra completa, e mesmo os italianos variam de região para região: no norte, por exemplo, quase todo *z* do começo da palavra é “dz”. Algumas pistas funcionam bem: *-zione*, *-ezza*, *-anza*, *-enza* e *-izia* são “ts” (*stazione*, *bellezza*, *stanza*, *partenza*, *notizia*). De resto, guarde cada palavra com o som que ouvir no áudio."
				},
				{
					type: 'p',
					text: "E se errar? Ninguém deixa de entender *pizza* dita com “dz”. O que soa realmente estrangeiro é o “z” de “zebra” ou um *zz* curto, sem a pausa da dupla."
				},
				{
					type: 'dica',
					text: "Treino rápido: *la piazza è grande, il prezzo è giusto, grazie ragazzi!*. Diga devagar, segurando cada *zz*, depois no ritmo normal."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Le giacche nuove sono in vetrina.", pt: "Os casacos novos estão na vitrine." },
				{ it: "Questa piazza è bella e molto grande.", pt: "Esta praça é bonita e muito grande." },
				{ it: "I pantaloni grigi sono un po' corti.", pt: "As calças cinza estão um pouco curtas." },
				{ it: "Gli amici di Rafael sono simpatici.", pt: "Os amigos do Rafael são simpáticos." },
				{ it: "La libreria è chiusa la domenica.", pt: "A livraria fica fechada aos domingos." },
				{ it: "Oggi fa caldo: la giacca è troppo calda.", pt: "Hoje está calor: o casaco é quente demais." },
				{ it: "Le ragazze sono italiane, ma abitano in Brasile.", pt: "As moças são italianas, mas moram no Brasil." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "As mangas estão compridas demais.", parts: ["Le maniche sono troppo ", null, "."], answers: ["lunghe"] },
				{ pt: "As calças são elegantes e confortáveis.", parts: ["I pantaloni sono ", null, " e comodi."], answers: ["eleganti"] },
				{ pt: "Esta praça é muito bonita.", parts: ["Questa piazza è molto ", null, "."], answers: ["bella"] },
				{ pt: "A livraria está aberta hoje?", parts: ["La libreria è ", null, " oggi?"], answers: ["aperta"] },
				{ pt: "Os amigos do Matteo são simpáticos.", parts: ["Gli amici di Matteo sono ", null, "."], answers: ["simpatici"] }
			]
		}
	]
};

const licao7: Lesson = {
	no: 7,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Essere e avere',
			blocks: [
				{
					type: 'p',
					text: "Primeira semana concluída! Hoje não há diálogo novo: vamos arrumar na cabeça o que apareceu nas lições 1 a 6. Leia com calma, volte às lições se quiser e repita os exemplos em voz alta. Comecemos pelos dois verbos que sustentam quase todas as frases."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "sono / ho", pt: "eu sou / eu tenho", pron: "sô-no / ó" },
						{ it: "sei / hai", pt: "você é / você tem", pron: "séi / ái" },
						{ it: "è / ha", pt: "ele, ela, o senhor é / tem", pron: "é / á" },
						{ it: "siamo / abbiamo", pt: "somos / temos", pron: "siá-mo / ab-biá-mo" },
						{ it: "siete / avete", pt: "vocês são / vocês têm", pron: "sié-te / a-vê-te" },
						{ it: "sono / hanno", pt: "eles são / eles têm", pron: "sô-no / án-no" }
					]
				},
				{ type: 'h', text: "O que você já sabe fazer com eles" },
				{
					type: 'exemplos',
					items: [
						{ it: "No, non sono di Bologna, sono di Napoli.", pt: "Negar com *non* antes do verbo (lição 1)." },
						{ it: "E Matteo? È a casa?", pt: "Perguntar só com a melodia; *essere* como “estar” (lição 1)." },
						{ it: "Lei ha un documento?", pt: "Tratar alguém por “o senhor” com *Lei* + 3ª pessoa (lição 2)." },
						{ it: "C'è un corso di italiano la sera?", pt: "Dizer que existe uma coisa: *c'è* (lição 2)." },
						{ it: "Ci sono due corsi.", pt: "Dizer que existem várias: *ci sono* (lição 2)." },
						{ it: "Hai una penna? No, non ce l'ho.", pt: "Responder sobre ter algo: *ce l'ho*, *non ce l'ho* (lição 2)." }
					]
				},
				{
					type: 'p',
					text: "Lembre também que o pronome quase sempre cai (*sono di Recife*, e não *io sono di Recife*), a não ser para dar ênfase ou contraste (*Io sono Chiara*, *Anch'io*). E que *essere* faz o trabalho de “ser” e de “estar”: *sono brasiliano*, *sono stanco*, *sono qui*."
				},
				{
					type: 'dica',
					text: "Idade se *tem*: *Ho ventitré anni*. E existir é *c'è*, nunca *ha*: “tem um bar aqui” é *c'è un bar qui*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Artigos, plurais e adjetivos',
			blocks: [
				{
					type: 'p',
					text: "Os artigos italianos dependem de duas coisas: o gênero da palavra e o som com que ela começa. Veja tudo junto, com palavras das suas lições."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un corso / il corso / i corsi", pt: "masculino, antes de consoante" },
						{ it: "uno sconto / lo sconto / gli sconti", pt: "masculino, antes de *s* + consoante" },
						{ it: "uno zaino / lo zaino / gli zaini", pt: "masculino, antes de *z*" },
						{ it: "un indirizzo / l'indirizzo / gli indirizzi", pt: "masculino, antes de vogal" },
						{ it: "una stanza / la stanza / le stanze", pt: "feminino, antes de consoante" },
						{ it: "un'amica / l'amica / le amiche", pt: "feminino, antes de vogal" }
					]
				},
				{ type: 'h', text: "O plural troca a vogal" },
				{
					type: 'p',
					text: "*-o* → *-i* (*pomodoro, pomodori*); *-a* → *-e* (*fragola, fragole*); *-e* → *-i* (*studente, studenti*; *lezione, lezioni*). Não mudam as palavras com acento no fim (*la città, le città*; *il caffè, i caffè*), as estrangeiras (*il bar, i bar*) e *euro*."
				},
				{ type: 'h', text: "Os adjetivos acompanham" },
				{
					type: 'p',
					text: "Adjetivos em *-o* têm quatro formas (*nero, nera, neri, nere*); adjetivos em *-e* têm duas (*elegante, eleganti*). Eles concordam com o substantivo, esteja ao lado dele ou depois de *essere*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Le fragole sono bellissime!", pt: "Os morangos estão lindos! (lição 4)" },
						{ it: "Le maniche sono troppo lunghe.", pt: "As mangas estão compridas demais. (lição 6)" },
						{ it: "Sono italiani, comodi e molto eleganti.", pt: "São italianas, confortáveis e muito elegantes. (lição 6)" },
						{ it: "La piazza è grande e le strade sono strette.", pt: "A praça é grande e as ruas são estreitas. (lição 6)" }
					]
				},
				{
					type: 'dica',
					text: "Guarde cada palavra nova com o artigo: *la lezione*, *il giornale*, *lo scontrino*. Assim você aprende o gênero de graça, e o artigo certo sai sem pensar."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Verbos em -are e -ere',
			blocks: [
				{
					type: 'p',
					text: "Você já conhece os dois primeiros grupos de verbos regulares. Compare as terminações lado a lado:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "parlo / prendo", pt: "eu falo / eu pego" },
						{ it: "parli / prendi", pt: "você fala / você pega" },
						{ it: "parla / prende", pt: "ele fala / ele pega" },
						{ it: "parliamo / prendiamo", pt: "falamos / pegamos" },
						{ it: "parlate / prendete", pt: "vocês falam / vocês pegam" },
						{ it: "parlano / prendono", pt: "eles falam / eles pegam" }
					]
				},
				{
					type: 'p',
					text: "*Io*, *tu* e *noi* terminam igual nos dois grupos. Nas outras pessoas, o *a* do primeiro grupo vira *e* ou *o* no segundo. Na forma *loro*, a força fica na mesma sílaba do singular: *parlano* (“pár-la-no”), *prendono* (“prén-do-no”), *abitano* (“á-bi-ta-no”)."
				},
				{ type: 'h', text: "Detalhes que você já viu" },
				{
					type: 'exemplos',
					items: [
						{ it: "cerco, cerchi, cerchiamo", pt: "*cercare*: o *h* mantém o som de “k” (lição 3)" },
						{ it: "studio, studi", pt: "*studiare*: o *i* não se repete (lição 3)" },
						{ it: "leggo, leggi", pt: "*leggere*: mesma escrita, som duro e doce (lição 5)" },
						{ it: "bevo, bevi, beviamo", pt: "*bere*: tudo se forma sobre *bev-* (lição 5)" }
					]
				},
				{ type: 'h', text: "Com as preposições certas" },
				{
					type: 'exemplos',
					items: [
						{ it: "Lavori qui a Bologna?", pt: "*a* com cidades (lição 3)" },
						{ it: "E quando torni in Brasile?", pt: "*in* com países (lição 3)" },
						{ it: "Ogni domenica telefono a casa.", pt: "*a casa*: em casa, para casa (lição 3)" },
						{ it: "Gli italiani prendono il caffè al banco.", pt: "*al* = *a* + *il* (lição 5)" }
					]
				},
				{
					type: 'dica',
					text: "O presente italiano vale também para “estar fazendo” e para planos próximos: *Che cosa leggi?* (o que você está lendo?), *Stasera torniamo qui* (hoje à noite a gente volta aqui)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Os sons até aqui',
			blocks: [
				{
					type: 'p',
					text: "O alfabeto italiano tem 21 letras. As letras *j, k, w, x, y* só aparecem em palavras estrangeiras (*il jazz, il kiwi, il weekend*). Fora isso, quase tudo se lê como se escreve, desde que você lembre de algumas combinações."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "ciao, cena / che, chi", pt: "*c* doce (“tch”) antes de *e, i*; duro com *h*", pron: "tcháo, tchê-na / ke, ki" },
						{ it: "giorno, leggi / spaghetti", pt: "*g* doce (“dj”); duro com *h*", pron: "djôr-no, léd-dji / spa-guêt-ti" },
						{ it: "ho, hai, ha, hanno", pt: "o *h* é sempre mudo (lição 2)", pron: "ó, ái, á, án-no" },
						{ it: "scontrino / scelta", pt: "*sc* duro (“sk”) e doce (“x”)", pron: "skon-trí-no / xêl-ta" },
						{ it: "famiglia, gli / bagno", pt: "*gli* ≈ “lh”; *gn* ≈ “nh” (lição 4)", pron: "fa-mí-lha, lhi / bá-nho" },
						{ it: "cosa / rossa", pt: "*s* suave entre vogais; *ss* forte (lição 5)", pron: "kó-za / rôs-sa" },
						{ it: "piazza / mezzogiorno", pt: "*z* “ts” e “dz” (lição 6)", pron: "piát-tsa / med-dzo-djôr-no" },
						{ it: "Matteo, chitarra, affare fatto", pt: "consoantes duplas mais longas (lição 3)", pron: "mat-té-o, ki-tár-ra, af-fá-re fát-to" }
					]
				},
				{ type: 'h', text: "Os três hábitos para vigiar" },
				{
					type: 'p',
					text: "Se você cuidar de três coisas, sua pronúncia já fica muito mais italiana: as vogais finais (*latte* termina em “ê”, *molto* em “ô”), o *t* e o *d* secos antes de *i* (*tutti*, não “tútchi”; *di*, não “dji”) e as consoantes duplas (*sette*, com uma pequena pausa no meio)."
				},
				{
					type: 'p',
					text: "E não esqueça a música: a força da palavra (*telefono* no “le”, *città* no fim) e a melodia da frase, com a voz subindo no fim das perguntas de sim ou não."
				},
				{
					type: 'dica',
					text: "Releia em voz alta um diálogo antigo, de preferência o da lição 1. Você vai notar que hoje ele sai com muito mais facilidade. É o método funcionando."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Nestas seis lições apareceram várias expressões prontas, daquelas que os italianos usam o tempo todo. Leia cada uma em voz alta e tente lembrar em que situação ela apareceu."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Chi è?", pt: "Quem é? (ao atender a porta)", pron: "ki é?" },
						{ it: "Piacere! / Piacere mio!", pt: "Muito prazer! / O prazer é meu!", pron: "pia-tchê-re / pia-tchê-re mí-o" },
						{ it: "Dai!", pt: "Vai! Vamos! Anda!", pron: "dái" },
						{ it: "Mi dica.", pt: "Pois não. (no balcão, na loja)", pron: "mi dí-ka" },
						{ it: "Ecco.", pt: "Aqui está.", pron: "ék-ko" },
						{ it: "Scusi! / Scusa!", pt: "Desculpe! (formal / informal)", pron: "skú-zi / skú-za" },
						{ it: "Grazie mille!", pt: "Muito obrigado!", pron: "grá-tsie míl-le" },
						{ it: "Mi dispiace.", pt: "Sinto muito.", pron: "mi di-spiá-tche" },
						{ it: "Va bene. / Benissimo!", pt: "Está bem. / Muito bem!", pron: "va bé-ne / be-nís-si-mo" },
						{ it: "Affare fatto!", pt: "Fechado! Negócio feito!", pron: "af-fá-re fát-to" },
						{ it: "Che bello!", pt: "Que lindo!", pron: "ke bél-lo" },
						{ it: "Altro?", pt: "Mais alguma coisa?", pron: "ál-tro?" },
						{ it: "Quant'è?", pt: "Quanto é? Quanto dá?", pron: "kuan-té?" },
						{ it: "Buona giornata!", pt: "Tenha um bom dia!", pron: "buó-na djor-ná-ta" },
						{ it: "Offro io!", pt: "Eu pago!", pron: "óf-fro í-o" },
						{ it: "Davvero?", pt: "Sério? É mesmo?", pron: "dav-vê-ro?" },
						{ it: "Fa freddo. / Fa caldo.", pt: "Está frio. / Está calor.", pron: "fa frêd-do / fa kál-do" },
						{ it: "un po'", pt: "um pouco", pron: "un pó" }
					]
				},
				{
					type: 'dica',
					text: "Escolha três dessas expressões e use hoje mesmo, nem que seja falando sozinho: *Dai!* ao sair de casa, *Ecco!* ao achar a chave, *Che bello!* diante de qualquer coisa bonita."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Scusi, Lei è di Napoli? No, sono di Torino.", pt: "Desculpe, o senhor é de Nápoles? Não, sou de Turim." },
				{ it: "Abbiamo una stanza in centro, ma non c'è il balcone.", pt: "Temos um quarto no centro, mas não tem varanda." },
				{ it: "Gli studenti parlano inglese e prendono un caffè al bar.", pt: "Os estudantes falam inglês e tomam um café no bar." },
				{ it: "Le fragole sono bellissime, ma costano molto.", pt: "Os morangos estão lindos, mas custam caro." },
				{ it: "Matteo cerca lavoro e legge il giornale ogni mattina.", pt: "O Matteo está procurando emprego e lê o jornal toda manhã." },
				{ it: "Quanti anni hai? Ho trent'anni.", pt: "Quantos anos você tem? Tenho trinta anos." },
				{ it: "Ci sono due bar in piazza: uno è caro, l'altro è economico.", pt: "Há dois bares na praça: um é caro, o outro é barato." },
				{ it: "Stasera cuciniamo insieme e vediamo la partita.", pt: "Hoje à noite a gente cozinha junto e vê o jogo." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "A Chiara é de Nápoles e tem vinte e dois anos.", parts: ["Chiara ", null, " di Napoli e ", null, " ventidue anni."], answers: ["è", "ha"] },
				{ pt: "Na rua Mazzini há três livrarias.", parts: ["In via Mazzini ", null, " tre librerie."], answers: ["ci sono"] },
				{ pt: "O Rafael está procurando uma mochila nova.", parts: ["Rafael cerca ", null, " zaino nuovo."], answers: ["uno"] },
				{ pt: "Vocês moram em Bolonha ou em Milão?", parts: ["Voi ", null, " a Bologna o a Milano?"], answers: ["abitate"] },
				{ pt: "Os casacos são novos, mas as calças são velhas.", parts: ["Le giacche sono ", null, ", ma i pantaloni sono ", null, "."], answers: ["nuove", "vecchi"] }
			]
		}
	]
};

export const italiano: Course = {
	id: 'italiano-1',
	language: 'it',
	title: 'Italiano',
	planned: 100,
	units: [{ no: 1, title: 'Primeiros dias', lessons: [0, 1, 2, 3, 4, 5, 6, 7] }],
	lessons: [licao0, licao1, licao2, licao3, licao4, licao5, licao6, licao7]
};
