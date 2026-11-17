import type { Lesson, Unit } from '../types.ts';

// Lições 99–105: começo do verão, formalidades e a despedida. A bolsa do Rafael acaba no fim de junho:
// ele pega a assinatura do professor Ferraresi no departamento (títulos, tu e Lei), escreve à signora Zanetti
// para apresentar a nova coinquilina, Irene (de Trieste, estuda tradução, fica com o quarto escuro a partir
// de 1º de julho; o aviso de três meses foi dado em março), recebe o convite do casamento da Giulia e do Luca
// (12 de setembro, em Bolonha) e um convite formal da diretora do departamento para falar em nome dos
// estudantes estrangeiros. Os três reservam por e-mail um último fim de semana em Sirmione, no lago de Garda;
// o Rafael se despede dos Bernardi no bar embaixo do prédio antigo; a Chiara reserva um camarote para
// *La locandiera* no Teatro Duse; e, no aeroporto Marconi, a despedida. A Larissa voltou ao Recife em abril.
// Ver docs/agents/curso-assimil-mapa.md.

const licao99: Lesson = {
	no: 99,
	kind: 'licao',
	title: 'Professore o ingegnere?',
	titlePt: 'Professor ou engenheiro?',
	lines: [
		{
			it: "Buongiorno. Cerco il professor Ferraresi: mi serve la sua firma sulla relazione finale della borsa.",
			pt: "Bom dia. Procuro o professor Ferraresi: preciso da assinatura dele no relatório final da bolsa.",
			lit: "Bom-dia. Procuro o professor Ferraresi: me serve a sua assinatura sobre o relatório final da bolsa.",
			note: "Começo do verão. A bolsa do Rafael acaba no fim de junho, e antes de voltar ao Recife há papéis a resolver. Ele está na secretaria do departamento de engenharia. *Il professor Ferraresi*: antes do nome, *professore* perde o *-e* (lição 16). *La relazione* = o relatório."
		},
		{
			it: "Il professore è a lezione fino alle undici. Lei è uno studente del corso di laurea?",
			pt: "O professor está em aula até as onze. O senhor é aluno da graduação?",
			note: "*Essere a lezione* = estar em aula, dando ou assistindo. *Il corso di laurea* = o curso de graduação."
		},
		{
			it: "No, sono un borsista brasiliano. Sono qui da quasi due anni.",
			pt: "Não, sou um bolsista brasileiro. Estou aqui há quase dois anos.",
			note: "*Il borsista, la borsista* = o bolsista, a bolsista. *Sono qui da due anni*: o presente com *da* para o que começou no passado e continua."
		},
		{
			it: "Ah, è Lei il ragazzo di Recife! Il professore parla spesso di Lei. Si accomodi pure.",
			pt: "Ah, é o senhor o rapaz do Recife! O professor fala muito do senhor. Fique à vontade, sente-se.",
			note: "*Si accomodi pure*: imperativo de *Lei* com *pure* (lição 78). A secretária trata o Rafael por *Lei*, mesmo ele sendo jovem: num escritório, entre desconhecidos, é o normal."
		},
		{
			it: "Grazie. Scusi, posso chiederLe una cosa? Come lo devo chiamare: professore, ingegnere o dottore?",
			pt: "Obrigado. Desculpe, posso perguntar uma coisa à senhora? Como devo chamá-lo: professor, engenheiro ou doutor?",
			note: "*ChiederLe* = perguntar à senhora. O *Le* de cortesia (lição 41) gruda no infinitivo; por escrito, muita gente põe a inicial maiúscula para mostrar respeito."
		},
		{
			it: "Professore. È ingegnere, certo, però all'università si usa il titolo accademico.",
			pt: "Professor. Ele é engenheiro, claro, mas na universidade se usa o título acadêmico.",
			note: "*Però* = mas, porém. É mais forte que *ma* e pode ir no fim da frase: *è caro, però*. Na universidade, quem dá aula é *professore* ou *professoressa*; fora dela, um engenheiro é chamado de *ingegnere*."
		},
		{
			it: "E Lei? Come preferisce: signora o dottoressa?",
			pt: "E a senhora? Como prefere: senhora ou doutora?",
			note: "Lembre: na Itália, todo mundo que tem diploma universitário é *dottore* ou *dottoressa* (lição 45)."
		},
		{
			it: "Signora Bassi, semplicemente. Però la dottoressa Neri, l'assegnista, Le darà subito del tu.",
			pt: "Senhora Bassi, simplesmente. Mas a doutora Neri, a pesquisadora, vai tratar o senhor por você logo de cara.",
			lit: "Senhora Bassi, simplesmente. Porém a doutora Neri, a pesquisadora, Lhe dará logo do tu.",
			note: "*L'assegnista* é o pesquisador jovem com um contrato de pesquisa (*assegno di ricerca*) na universidade. *Dare del tu, dare del Lei* = tratar por você, por senhor (lição 27)."
		},
		{
			it: "Ciao, Rafael! Allora, parti davvero?",
			pt: "Oi, Rafael! E aí, você vai mesmo embora?",
			note: "Chega a Elisa Neri, a pesquisadora que trabalhou com o Rafael no laboratório."
		},
		{
			it: "Buongiorno, dottoressa. Sì, purtroppo: il trenta giugno.",
			pt: "Bom dia, doutora. Sim, infelizmente: no dia trinta de junho."
		},
		{
			it: "Ma che dottoressa! Ho trent'anni, dammi del tu. Te l'ho già detto cento volte!",
			pt: "Que doutora, que nada! Tenho trinta anos, me chame de você. Já disse isso cem vezes!",
			note: "*Ma che dottoressa!* = que doutora, que nada! *Ma che* + a palavra do outro recusa o que ele disse. *Dammi del tu*, como a nonna Teresa nas Langhe (lição 72)."
		},
		{
			it: "Scusa, Elisa, è l'abitudine. Con la signora Bassi devo dare del Lei, con te del tu...",
			pt: "Desculpe, Elisa, é o costume. Com a senhora Bassi tenho que usar o senhor, com você o você...",
			note: "*Scusa* para quem você trata por *tu*; *scusi* para quem você trata por *Lei*. O Rafael troca de registro no meio da frase, como todo italiano faz o dia inteiro."
		},
		{
			it: "Senti, venerdì facciamo un aperitivo per salutarti. Vieni, vero?",
			pt: "Escuta, sexta a gente vai fazer um aperitivo para se despedir de você. Você vem, né?",
			note: "*Salutare* é cumprimentar e também se despedir: *salutare qualcuno* antes de uma viagem = ir se despedir."
		},
		{
			it: "Senz'altro! Ci sarò.",
			pt: "Com certeza! Vou estar lá.",
			note: "*Senz'altro* = sem dúvida, com certeza. É uma resposta educada e firme: serve tanto com *tu* quanto com *Lei*."
		},
		{
			it: "Rafael, eccoLa! Venga nel mio studio. Ho letto la Sua relazione: ottimo lavoro.",
			pt: "Rafael, aí está o senhor! Venha à minha sala. Li o seu relatório: ótimo trabalho.",
			note: "Chega o professor Ferraresi. Muitos professores italianos tratam os alunos por *Lei*, mesmo os jovens. *EccoLa* = eis o senhor: *ecco* aceita pronome colado, como *eccomi*. *Lo studio* do professor é a sala dele."
		},
		{
			it: "Grazie, professore. È stato un onore lavorare con Lei.",
			pt: "Obrigado, professor. Foi uma honra trabalhar com o senhor."
		},
		{
			it: "L'onore è stato mio. Ecco la firma. ArrivederLa, ingegnere, e buon viaggio!",
			pt: "A honra foi minha. Aqui está a assinatura. Até logo, engenheiro, e boa viagem!",
			note: "*ArrivederLa* é o *arrivederci* de quem trata o outro por *Lei*, com o pronome de cortesia no fim. É bem formal, e vale só para uma pessoa. E o professor já chama o Rafael de *ingegnere*: um elogio."
		},
		{
			it: "Ingegnere? Non ancora... ArrivederLa, professore.",
			pt: "Engenheiro? Ainda não... Até logo, professor."
		},
		{
			it: "Senz'altro, signora: ci vediamo lunedì alle nove.",
			pt: "Com certeza, senhora: nos vemos segunda às nove.",
			sep: true
		},
		{
			it: "La casa è bella, però costa troppo.",
			pt: "A casa é bonita, mas custa caro demais."
		},
		{
			it: "Grazie di tutto, dottore. ArrivederLa!",
			pt: "Obrigado por tudo, doutor. Até logo!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Títulos e profissões',
			blocks: [
				{
					type: 'p',
					text: "Na Itália, os títulos aparecem muito mais que no Brasil. Num escritório, num consultório ou numa carta, as pessoas são chamadas pela profissão ou pelo diploma: *buongiorno, avvocato*; *grazie, ingegnere*; *mi scusi, architetto*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Buon**gior**no, profes**so**re.", pt: "Bom dia, professor." },
						{ it: "Il profes**sor** Fer**ra**resi è a le**zio**ne.", pt: "O professor Ferraresi está em aula." },
						{ it: "Ho appunta**men**to con l'inge**gner** **Bian**chi.", pt: "Tenho hora marcada com o engenheiro Bianchi." },
						{ it: "Il dot**tor** **Ric**ci ri**ce**ve il **lu**nedì.", pt: "O doutor Ricci atende às segundas." },
						{ it: "La profes**so**ressa **Gal**li è la diret**tri**ce.", pt: "A professora Galli é a diretora." },
						{ it: "**Gra**zie, avvo**ca**to.", pt: "Obrigado, doutor (advogado)." }
					]
				},
				{
					type: 'p',
					text: "Duas regras. Antes do nome, os títulos em *-ore* e *-ere* perdem o *-e* e levam artigo: *il professor Ferraresi*, *l'ingegner Bianchi*, *il dottor Ricci*. Quando você fala diretamente com a pessoa, o artigo some e o título fica inteiro: *buongiorno, professore*."
				},
				{
					type: 'dica',
					text: "*Avvocato*, *architetto* e *ingegnere* funcionam como o nosso “doutor”: são títulos que se usam no lugar do nome. Já *maestro* e *maestra* são os professores do ensino fundamental, e também o regente de uma orquestra."
				}
			]
		},
		{
			kind: 'leitura',
			title: "Tu ou Lei? ArrivederLa, senz'altro, però",
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 27 você sabe que o italiano tem *tu* e *Lei*. Na prática: *tu* com amigos, família, colegas da mesma idade e crianças; *Lei* com desconhecidos, pessoas mais velhas, funcionários, professores e clientes. Quem passa do *Lei* ao *tu* é, em geral, a pessoa mais velha ou mais importante: *dammi del tu*, *possiamo darci del tu?*."
				},
				{
					type: 'p',
					text: "Na universidade, os estudantes tratam os professores por *Lei*, e muitos professores devolvem o *Lei*. Entre estudantes e pesquisadores jovens, o *tu* é imediato."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Pos**sia**mo **dar**ci del **tu**?", pt: "Podemos nos tratar por você?" },
						{ it: "**Scu**si, profes**so**re. **Scu**sa, E**li**sa.", pt: "Desculpe, professor. Desculpe, Elisa." },
						{ it: "Arrive**der**La, si**gno**ra.", pt: "Até logo, senhora." },
						{ it: "Ci **sei** ve**ner**dì? Sen**z'al**tro!", pt: "Você vai estar lá sexta? Com certeza!" },
						{ it: "È **bra**vo, pe**rò** **par**la **trop**po.", pt: "Ele é bom, mas fala demais." }
					]
				},
				{
					type: 'dica',
					text: "*ArrivederLa* soa formal até para os italianos. Hoje muita gente diz *arrivederci* até com quem trata por *Lei*, e não há nada de errado nisso. Mas, numa repartição ou com um professor idoso, *ArrivederLa* sempre cai bem."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Il professor Ferraresi è a lezione fino alle undici.", pt: "O professor Ferraresi está em aula até as onze." },
				{ it: "Buongiorno, ingegnere. Si accomodi pure.", pt: "Bom dia, engenheiro. Fique à vontade, sente-se." },
				{ it: "Ho trent'anni: dammi del tu!", pt: "Tenho trinta anos: me chame de você!" },
				{ it: "Possiamo darci del tu?", pt: "Podemos nos tratar por você?" },
				{ it: "Vieni all'aperitivo? Senz'altro!", pt: "Você vem ao aperitivo? Com certeza!" },
				{ it: "Il ristorante è buono, però è un po' caro.", pt: "O restaurante é bom, mas é um pouco caro." },
				{ it: "Grazie di tutto, signora. ArrivederLa!", pt: "Obrigado por tudo, senhora. Até logo!" }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Tenho hora marcada com o doutor Ricci.", parts: ["Ho appuntamento con il ", null, " Ricci."], answers: ["dottor"] },
				{ pt: "Bom dia, professor!", parts: ["Buongiorno, ", null, "!"], answers: ["professore"] },
				{ pt: "Me chame de você, por favor.", parts: [null, " del tu, per favore."], answers: ["dammi"] },
				{ pt: "Você vem na sexta? Com certeza!", parts: ["Vieni venerdì? ", null, "!"], answers: ["senz'altro"] },
				{ pt: "É bonito, mas é caro.", parts: ["È bello, ", null, " è caro."], answers: ["però"] }
			]
		}
	]
};

const licao100: Lesson = {
	no: 100,
	kind: 'licao',
	title: 'Gentile signora Zanetti',
	titlePt: 'Prezada senhora Zanetti',
	lines: [
		{
			it: "Chiara, mi aiuti con un'e-mail? Devo scrivere alla signora Zanetti.",
			pt: "Chiara, você me ajuda com um e-mail? Preciso escrever para a senhora Zanetti.",
			note: "A signora Zanetti é a senhoria, a *padrona di casa d'oro* que foi morar com a filha em Modena (lições 65 e 66)."
		},
		{
			it: "Per la tua partenza? Ma gliel'abbiamo già detto a marzo, come vuole il contratto.",
			pt: "Por causa da sua partida? Mas já dissemos isso a ela em março, como o contrato manda.",
			note: "O contrato diz que, se o Rafael sair, avisam com três meses de antecedência e acham outro *coinquilino* (lição 66). Eles avisaram em março. *Gliel'abbiamo detto*: pronomes combinados (lição 50)."
		},
		{
			it: "Sì, però adesso devo presentarle la nuova coinquilina e chiedere del deposito.",
			pt: "Sim, mas agora tenho que apresentar a nova colega de apartamento a ela e perguntar sobre a caução.",
			note: "*Il deposito cauzionale*, ou só *il deposito* = a caução, o dinheiro que o inquilino deixa com o dono e recebe de volta na saída."
		},
		{
			it: "Va bene. Come cominci? «Egregia signora»?",
			pt: "Tá bom. Como você começa? “Ilustríssima senhora”?"
		},
		{
			it: "Egregia? Non è un po' troppo?",
			pt: "Ilustríssima? Não é um pouco demais?"
		},
		{
			it: "Hai ragione. Egregio si usa nelle lettere molto formali, soprattutto con un uomo. Per lei basta «Gentile signora».",
			pt: "Você tem razão. *Egregio* se usa nas cartas muito formais, sobretudo para um homem. Para ela, basta “Prezada senhora”.",
			note: "*Egregio* (ilustre) é o começo mais solene: *Egregio avvocato*, *Egregio direttore*. *Gentile* serve para homens e mulheres e é o mais usado hoje: *Gentile signora Zanetti*, *Gentile dottore*."
		},
		{
			it: "«Gentile signora Zanetti, Le scrivo per presentarLe Irene Russo, che dal primo luglio prenderà la mia camera.»",
			pt: "“Prezada senhora Zanetti, escrevo-lhe para apresentar-lhe Irene Russo, que a partir de primeiro de julho ficará com o meu quarto.”",
			note: "Nas cartas formais, os pronomes de cortesia levam maiúscula, até grudados no verbo: *Le scrivo*, *presentarLe*, *la Sua lettera*."
		},
		{
			it: "Perfetto. E dille chi è: la signora vorrà saperlo.",
			pt: "Perfeito. E diga quem ela é: a senhora vai querer saber.",
			note: "*Vorrà saperlo*: o futuro de probabilidade (lição 86), “com certeza vai querer saber”."
		},
		{
			it: "«Irene è di Trieste e studia per diventare traduttrice e interprete.»",
			pt: "“Irene é de Trieste e estuda para se tornar tradutora e intérprete.”",
			note: "Masculinos em *-tore* fazem o feminino em *-trice*: *traduttore, traduttrice*; *attore, attrice*; *ambasciatore, ambasciatrice* (lição 90). *L'interprete* serve para os dois gêneros."
		},
		{
			it: "Aggiungi che è una studentessa seria. Così la signora è contenta.",
			pt: "Acrescente que ela é uma estudante séria. Assim a senhora fica contente.",
			note: "Outro feminino: *-essa*. *Studente, studentessa*; *professore, professoressa*; *dottore, dottoressa*."
		},
		{
			it: "«Le sarei grato se potesse restituirmi il deposito entro la fine del mese.»",
			pt: "“Eu lhe ficaria grato se pudesse me devolver a caução até o fim do mês.”",
			note: "*Le sarei grato se...* = eu lhe ficaria grato se...: a fórmula clássica de um pedido por escrito. *Potesse* é o imperfeito do subjuntivo (lições 96 e 98); a lição 102 volta a ele. *Entro* = até, dentro de (lição 87)."
		},
		{
			it: "Benissimo. E per chiudere: «Cordiali saluti», e la tua firma.",
			pt: "Ótimo. E para terminar: “Atenciosamente”, e a sua assinatura.",
			note: "*Cordiali saluti* (cordiais saudações) é o fecho mais comum de um e-mail formal. Mais solene: *Distinti saluti*."
		},
		{
			it: "Posta per voi! Una busta elegantissima, da Giulia e Luca.",
			pt: "Correio para vocês! Um envelope elegantíssimo, da Giulia e do Luca.",
			note: "Chega o Matteo. *La busta* = o envelope; *la posta* = o correio, as cartas."
		},
		{
			it: "Fammi vedere! «Giulia e Luca annunciano il loro matrimonio. Bologna, 12 settembre.» Finalmente!",
			pt: "Deixa eu ver! “Giulia e Luca anunciam o seu casamento. Bolonha, 12 de setembro.” Finalmente!",
			note: "Os dois ficaram noivos na primavera do ano passado e ainda não tinham data (lição 52). *Il matrimonio* = o casamento; *le nozze*, mais solene."
		},
		{
			it: "Settembre... e io sarò a Recife. Che peccato!",
			pt: "Setembro... e eu vou estar no Recife. Que pena!"
		},
		{
			it: "Allora scrivi anche a loro: un biglietto di auguri.",
			pt: "Então escreva para eles também: um cartão de felicitações."
		},
		{
			it: "«Carissimi Giulia e Luca, in occasione del vostro matrimonio vi mando i miei più sinceri auguri. Farò di tutto per esserci!»",
			pt: "“Queridíssimos Giulia e Luca, por ocasião do casamento de vocês, mando as minhas mais sinceras felicitações. Vou fazer de tudo para estar aí!”",
			note: "*In occasione di* = por ocasião de: *in occasione del tuo compleanno*. *Carissimi* é o começo de uma carta para amigos. *Fare di tutto per* = fazer de tudo para."
		},
		{
			it: "Gentile dottoressa, Le scrivo per chiederLe un appuntamento.",
			pt: "Prezada doutora, escrevo-lhe para pedir um horário.",
			sep: true
		},
		{
			it: "Mia cugina fa l'attrice; sua sorella è professoressa.",
			pt: "A minha prima é atriz; a irmã dele é professora."
		},
		{
			it: "In occasione del tuo compleanno, tanti auguri da tutti noi!",
			pt: "Por ocasião do seu aniversário, muitas felicidades de todos nós!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Cartas e e-mails',
			blocks: [
				{
					type: 'p',
					text: "Uma carta ou um e-mail formal em italiano segue um roteiro fixo. O começo depende de quem recebe:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "E**gre**gio diret**to**re,", pt: "Ilustríssimo diretor, (muito formal)" },
						{ it: "Gen**ti**le si**gno**ra Za**net**ti,", pt: "Prezada senhora Zanetti," },
						{ it: "Gen**ti**li si**gno**ri,", pt: "Prezados senhores, (quando você não sabe quem vai ler)" },
						{ it: "**Ca**ra **Chia**ra, / Ca**ris**simi **tut**ti,", pt: "Querida Chiara, / Queridíssimos todos, (amigos)" }
					]
				},
				{
					type: 'p',
					text: "No meio, as fórmulas de sempre: *Le scrivo per...* (escrevo-lhe para...), *in merito alla Sua lettera* (a respeito da sua carta), *Le sarei grato se...* (eu lhe ficaria grato se...). E no fim:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Cor**dia**li sa**lu**ti.", pt: "Atenciosamente. (o mais comum)" },
						{ it: "Di**stin**ti sa**lu**ti.", pt: "Respeitosamente. (mais solene)" },
						{ it: "In at**te**sa di un **Suo** ri**scon**tro...", pt: "Aguardando o seu retorno..." },
						{ it: "Un ab**brac**cio, a **pre**sto!", pt: "Um abraço, até logo! (amigos)" }
					]
				},
				{
					type: 'dica',
					text: "*Egregio* é como o nosso “egrégio”: só cabe em cartas muito formais. Para uma mulher, *Egregia* existe, mas hoje quase todo mundo prefere *Gentile*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Femininos em -trice e -essa; felicitações',
			blocks: [
				{
					type: 'p',
					text: "A maioria das profissões faz o feminino trocando a vogal: *cuoco, cuoca*; *infermiere, infermiera*. Mas há dois grupos especiais:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "tradut**to**re → tradut**tri**ce", pt: "tradutor → tradutora" },
						{ it: "at**to**re → at**tri**ce", pt: "ator → atriz" },
						{ it: "diret**to**re → diret**tri**ce", pt: "diretor → diretora" },
						{ it: "stu**den**te → studen**tes**sa", pt: "estudante (m.) → estudante (f.)" },
						{ it: "profes**so**re → professo**res**sa", pt: "professor → professora" },
						{ it: "dot**to**re → dotto**res**sa", pt: "doutor → doutora" }
					]
				},
				{
					type: 'p',
					text: "Para felicitar alguém, a palavra é *auguri*: *auguri per il matrimonio*, *tanti auguri di buon compleanno*. Num cartão: *in occasione del vostro matrimonio, i nostri più sinceri auguri*. E a quem acaba de conseguir algo, *congratulazioni!* ou *complimenti!*."
				},
				{
					type: 'dica',
					text: "Hoje se ouve cada vez mais *la ministra*, *l'avvocata*, *l'ingegnera*, *l'architetta*. Algumas mulheres preferem a forma masculina para o título, outras a feminina: na dúvida, use a que a própria pessoa usa."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Gentile signora, Le scrivo per presentarLe la nuova coinquilina.", pt: "Prezada senhora, escrevo-lhe para apresentar a nova colega de apartamento." },
				{ it: "Egregio direttore, La ringrazio per la Sua lettera.", pt: "Ilustríssimo diretor, agradeço-lhe pela sua carta." },
				{ it: "Irene studia per diventare traduttrice.", pt: "A Irene estuda para se tornar tradutora." },
				{ it: "La professoressa Galli è la direttrice del dipartimento.", pt: "A professora Galli é a diretora do departamento." },
				{ it: "In occasione del vostro matrimonio vi mando i miei auguri.", pt: "Por ocasião do casamento de vocês, mando as minhas felicitações." },
				{ it: "Farò di tutto per esserci.", pt: "Vou fazer de tudo para estar aí." },
				{ it: "Cordiali saluti, Rafael.", pt: "Atenciosamente, Rafael." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Prezada senhora Zanetti,", parts: [null, " signora Zanetti,"], answers: ["gentile"] },
				{ pt: "Ela é atriz.", parts: ["Lei fa l'", null, "."], answers: ["attrice"] },
				{ pt: "A minha irmã é estudante de direito.", parts: ["Mia sorella è ", null, " di giurisprudenza."], answers: ["studentessa"] },
				{ pt: "Por ocasião do seu aniversário...", parts: ["In ", null, " del tuo compleanno..."], answers: ["occasione"] },
				{ pt: "Atenciosamente.", parts: [null, " saluti."], answers: ["cordiali"] }
			]
		}
	]
};

const licao101: Lesson = {
	no: 101,
	kind: 'licao',
	title: 'Un invito ufficiale',
	titlePt: 'Um convite oficial',
	lines: [
		{
			it: "Ragazzi, sentite qua: un invito ufficiale dell'università!",
			pt: "Pessoal, escutem só: um convite oficial da universidade!",
			note: "*Sentite qua* = escutem só: imperativo de *voi*, para chamar a atenção."
		},
		{
			it: "Fa' sentire! Chi ti invita?",
			pt: "Deixa ouvir! Quem está convidando você?",
			note: "*Fa'* = faz, deixa: a forma curta do imperativo de *fare* (lição 71). *Fa' sentire, fa' vedere* = deixa ouvir, deixa ver."
		},
		{
			it: "«La Direttrice del Dipartimento di Ingegneria è lieta di invitarLa alla cerimonia di saluto agli studenti internazionali.»",
			pt: "“A Diretora do Departamento de Engenharia tem o prazer de convidá-lo para a cerimônia de despedida dos estudantes internacionais.”",
			lit: "“A Diretora do Departamento de Engenharia é contente de convidá-Lo à cerimônia de saudação aos estudantes internacionais.”",
			note: "*Essere lieto di* = ter o prazer de, ficar feliz em. *Lieto* é a palavra formal para “contente”: você já disse *molto lieto* ao conhecer alguém (lição 19). *Il saluto* = a saudação, o cumprimento, e também a despedida."
		},
		{
			it: "Che onore! E quando è?",
			pt: "Que honra! E quando é?"
		},
		{
			it: "«Giovedì 18 giugno, alle ore 17, nell'Aula Magna. Si prega di confermare entro il 10 giugno.»",
			pt: "“Quinta-feira, 18 de junho, às 17 horas, no Auditório Principal. Pede-se confirmar até 10 de junho.”",
			note: "*Si prega di* = pede-se, favor: muito usado em avisos e convites (*si prega di non fumare*). *L'Aula Magna* é o grande auditório da universidade, onde acontecem as cerimônias."
		},
		{
			it: "E c'è di più: vogliono che io dica due parole a nome di tutti gli studenti stranieri.",
			pt: "E tem mais: querem que eu diga umas palavras em nome de todos os estudantes estrangeiros.",
			note: "*Vogliono che io dica*: subjuntivo depois de *volere che*. *Dire due parole* = dizer umas palavras, um discurso curto. *A nome di* = em nome de."
		},
		{
			it: "Un discorso! Allora ci vogliono giacca e cravatta.",
			pt: "Um discurso! Então vai precisar de paletó e gravata.",
			note: "*Ci vuole, ci vogliono* = é preciso, precisa-se de: *ci vuole un'ora*, *ci vogliono giacca e cravatta*."
		},
		{
			it: "La cravatta? Ne ho una sola, quella blu...",
			pt: "Gravata? Só tenho uma, a azul..."
		},
		{
			it: "Ovvio, è blu! Prima, però, rispondi all'invito. Scrivi: «Gentile Direttrice, La ringrazio per il gentile invito...»",
			pt: "Claro, é azul! Antes, porém, responda ao convite. Escreva: “Prezada Diretora, agradeço-lhe pelo gentil convite...”",
			note: "O Rafael e a sua roupa azul, piada antiga da casa. *Ringraziare qualcuno* não leva preposição: *La ringrazio* = agradeço à senhora, com o *La* de cortesia."
		},
		{
			it: "«...e sarò lieto di partecipare.» E poi? «Ciao»?",
			pt: "“...e terei o prazer de participar.” E depois? “Tchau”?"
		},
		{
			it: "Ma sei matto? «Le porgo i miei più cordiali saluti.»",
			pt: "Você ficou louco? “Apresento-lhe as minhas mais cordiais saudações.”",
			note: "*Porgere* = estender, oferecer, apresentar. É um verbo formal, quase só de cartas e cerimônias: *porgere i saluti, gli auguri, le scuse, la mano*. Particípio irregular: *porto*."
		},
		{
			it: "E alla cerimonia, quando ti presentano la Direttrice, che le dici?",
			pt: "E na cerimônia, quando apresentarem você à Diretora, o que você diz a ela?"
		},
		{
			it: "«Piacere»? O «molto lieto»?",
			pt: "“Prazer”? Ou “muito prazer”?"
		},
		{
			it: "«Molto lieto» va benissimo. E aspetta che sia lei a porgerti la mano.",
			pt: "“Muito prazer” está ótimo. E espere que ela estenda a mão primeiro.",
			lit: "“Muito contente” vai muito bem. E espera que seja ela a te estender a mão.",
			note: "Pela etiqueta, quem estende a mão primeiro é a pessoa mais velha ou mais importante. *Aspettare che* pede subjuntivo: *aspetta che sia lei*."
		},
		{
			it: "E non darle del tu, mi raccomando!",
			pt: "E não vá tratá-la por você, hein!"
		},
		{
			it: "Tranquillo. «Gentile Direttrice, a nome di tutti noi, Le porgo un grazie di cuore per questi due anni.»",
			pt: "Pode ficar tranquilo. “Prezada Diretora, em nome de todos nós, deixo-lhe um obrigado de coração por estes dois anos.”"
		},
		{
			it: "Bellissimo. Quasi mi commuovo.",
			pt: "Lindo. Eu quase me emociono.",
			note: "*Commuoversi* = emocionar-se, comover-se. Conjuga-se como *muovere*: *mi commuovo*, particípio *commosso*."
		},
		{
			it: "Siamo lieti di annunciare la nascita di nostra figlia.",
			pt: "Temos o prazer de anunciar o nascimento da nossa filha.",
			sep: true
		},
		{
			it: "Le porgo le mie scuse per il ritardo.",
			pt: "Peço-lhe desculpas pelo atraso."
		},
		{
			it: "La ringrazio, signora: è molto gentile.",
			pt: "Agradeço à senhora: é muito gentil."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'La, Le, Suo: a cortesia por escrito',
			blocks: [
				{
					type: 'p',
					text: "Você já conhece os pronomes de cortesia (lição 41): *La* (o senhor, a senhora, como objeto), *Le* (ao senhor, à senhora) e o possessivo *Suo* (seu, do senhor). Numa carta ou num convite, eles costumam vir com maiúscula, mesmo grudados no verbo:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La rin**gra**zio per il **Suo** in**vi**to.", pt: "Agradeço-lhe pelo seu convite." },
						{ it: "Le **scri**vo per confer**mar**Le la mia pre**sen**za.", pt: "Escrevo-lhe para confirmar a minha presença." },
						{ it: "**Sia**mo **lie**ti di invi**tar**La.", pt: "Temos o prazer de convidá-lo." },
						{ it: "Le **por**go i **miei** sa**lu**ti.", pt: "Apresento-lhe as minhas saudações." },
						{ it: "**Por**ga i **miei** sa**lu**ti a **Sua** **mo**glie.", pt: "Transmita os meus cumprimentos à sua esposa." }
					]
				},
				{
					type: 'p',
					text: "Fora das cartas, ninguém escreve maiúscula no meio da frase, e na fala ela não existe. Mas num e-mail para um professor ou para a senhoria, a maiúscula mostra cuidado."
				},
				{
					type: 'dica',
					text: "Não exagere: num e-mail de trabalho, *Gentile* + nome e *Cordiali saluti* bastam. *Porgere* fica para convites, cerimônias e cartas oficiais."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Convites e etiqueta',
			blocks: [
				{
					type: 'p',
					text: "Um convite formal italiano tem quase sempre as mesmas peças: quem convida, *è lieto di invitarLa*, o evento, a data, o lugar e *si prega di confermare* (às vezes só a sigla *R.S.V.P.*, do francês). Para responder:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "La rin**gra**zio per il gen**ti**le in**vi**to.", pt: "Agradeço-lhe pelo gentil convite." },
						{ it: "Sa**rò** **lie**to di parteci**pa**re.", pt: "Terei o prazer de participar." },
						{ it: "Pur**trop**po non po**trò** es**se**re pre**sen**te.", pt: "Infelizmente não poderei estar presente." },
						{ it: "Le **por**go i **miei** **più** cor**dia**li sa**lu**ti.", pt: "Apresento-lhe as minhas mais cordiais saudações." }
					]
				},
				{
					type: 'p',
					text: "Na hora de cumprimentar: espere que a pessoa mais velha ou mais importante estenda a mão, diga *molto lieto* (ou *molto lieta*, se você é mulher) e use o título: *buonasera, professoressa*. Os beijinhos ficam para os amigos."
				},
				{
					type: 'dica',
					text: "*Lieto* aparece também em *lieto fine* (final feliz) e em *lieti eventi* (nascimentos). Na conversa do dia a dia, *contento* e *felice* são mais comuns."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "La ringrazio per il gentile invito.", pt: "Agradeço-lhe pelo gentil convite." },
				{ it: "Sarò lieto di partecipare.", pt: "Terei o prazer de participar." },
				{ it: "Vogliono che io dica due parole.", pt: "Querem que eu diga umas palavras." },
				{ it: "Si prega di confermare entro venerdì.", pt: "Favor confirmar até sexta-feira." },
				{ it: "Le porgo le mie scuse.", pt: "Peço-lhe desculpas." },
				{ it: "Per un discorso ci vogliono giacca e cravatta.", pt: "Para um discurso é preciso paletó e gravata." },
				{ it: "Aspetta che sia lei a porgerti la mano.", pt: "Espere que ela estenda a mão primeiro." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Temos o prazer de convidá-lo.", parts: ["Siamo ", null, " di invitarLa."], answers: ["lieti"] },
				{ pt: "Agradeço-lhe, senhora.", parts: [null, " ringrazio, signora."], answers: ["la"] },
				{ pt: "Apresento-lhe as minhas saudações.", parts: ["Le ", null, " i miei saluti."], answers: ["porgo"] },
				{ pt: "Favor confirmar até o dia 10.", parts: ["Si ", null, " di confermare entro il 10."], answers: ["prega"] },
				{ pt: "Obrigado pela sua carta, diretor.", parts: ["Grazie per la ", null, " lettera, direttore."], answers: ["sua"] }
			]
		}
	]
};

const licao102: Lesson = {
	no: 102,
	kind: 'licao',
	title: 'Una camera sul lago',
	titlePt: 'Um quarto no lago',
	lines: [
		{
			it: "Ultimo fine settimana tutti e tre insieme: che ne dite del lago di Garda?",
			pt: "Último fim de semana nós três juntos: o que vocês acham do lago de Garda?",
			note: "Faltam duas semanas para o Rafael partir, e o Matteo quer uma última viagem. O lago de Garda, o maior da Itália, fica entre a Lombardia, o Vêneto e o Trentino, a menos de duas horas de carro de Bolonha. *Tutti e tre* = os três, todos os três."
		},
		{
			it: "A Sirmione! Ma a giugno sarà tutto pieno.",
			pt: "Em Sirmione! Mas em junho vai estar tudo lotado.",
			note: "Sirmione é uma cidadezinha numa península estreita no sul do lago, com um castelo na entrada. *Sarà tutto pieno*: futuro de probabilidade (lição 86)."
		},
		{
			it: "Proviamo: scriviamo all'albergo che ci ha consigliato Giulia.",
			pt: "Vamos tentar: escrevemos para o hotel que a Giulia nos recomendou."
		},
		{
			it: "Scrivo io. «Gentili signori, saremmo interessati a due camere per la notte del 20 giugno.»",
			pt: "Eu escrevo. “Prezados senhores, teríamos interesse em dois quartos para a noite de 20 de junho.”",
			note: "*Gentili signori* quando você não sabe quem vai ler. *Saremmo interessati*: o condicional deixa o pedido mais educado (lição 80)."
		},
		{
			it: "Due camere? Io voglio una singola. Voi due russate!",
			pt: "Dois quartos? Eu quero um de solteiro. Vocês dois roncam!",
			note: "*Russare* = roncar. *Una singola, una doppia* = um quarto de solteiro, um quarto duplo."
		},
		{
			it: "Allora tre camere: ognuno la propria.",
			pt: "Então três quartos: cada um com o seu.",
			note: "*Proprio* = próprio, seu. Ele pode substituir *suo* quando o dono é o sujeito; é obrigatório com o *si* impessoal e o mais comum com sujeitos gerais como *ognuno* e *nessuno*: *ognuno la propria camera*."
		},
		{
			it: "Tre camere costano troppo. Se fossimo ricchi, prenderemmo anche la suite!",
			pt: "Três quartos custam caro demais. Se fôssemos ricos, ficaríamos até com a suíte!",
			note: "*Fossimo* é o imperfeito do subjuntivo de *essere*, que você viu nas lições 96 e 98. Com *se*, ele faz a hipótese que talvez não se realize, e a consequência vai no condicional: *se fossimo ricchi, prenderemmo*. É igual ao português: “se fôssemos... ficaríamos”."
		},
		{
			it: "Se vincessi alla lotteria, offrirei io a tutti.",
			pt: "Se eu ganhasse na loteria, eu pagaria para todo mundo.",
			note: "*Vincessi* = se eu ganhasse, de *vincere*. *Offrire* = oferecer e também pagar a conta para alguém: *offro io* (eu pago)."
		},
		{
			it: "Va bene, va bene: una doppia per voi e una singola per me.",
			pt: "Tá bom, tá bom: um duplo para vocês e um de solteiro para mim."
		},
		{
			it: "«Se fosse possibile, preferiremmo camere con vista sul lago.»",
			pt: "“Se fosse possível, preferiríamos quartos com vista para o lago.”",
			note: "*Se fosse possibile* = se fosse possível: a fórmula mais educada de um pedido por escrito."
		},
		{
			it: "E aggiungi: «Vi saremmo grati se poteste indicarci il prezzo con la colazione.»",
			pt: "E acrescente: “Ficaríamos gratos se pudessem nos informar o preço com café da manhã.”",
			note: "*Poteste* = se vocês pudessem: imperfeito do subjuntivo de *potere*, na forma de *voi*. O hotel é tratado por *voi*, como uma equipe. Para uma pessoa só: *Le saremmo grati se potesse...*"
		},
		{
			it: "Ecco la risposta: «Siamo lieti di confermare le due camere. La vista sul lago, purtroppo, è disponibile solo per la singola.»",
			pt: "Aqui está a resposta: “Temos o prazer de confirmar os dois quartos. A vista para o lago, infelizmente, está disponível só para o de solteiro.”",
			note: "No dia seguinte, o Matteo lê a resposta do hotel. *Disponibile* = disponível."
		},
		{
			it: "Benissimo: la camera con vista è la mia!",
			pt: "Ótimo: o quarto com vista é meu!"
		},
		{
			it: "Come sempre. E noi due in una camera sul cortile, come a casa.",
			pt: "Como sempre. E nós dois num quarto de frente para o pátio, como em casa.",
			note: "Em casa, o Rafael paga menos porque o quarto dele é o escuro, que dá para o pátio (lição 66). A piada o acompanha até o lago."
		},
		{
			it: "«Il prezzo, colazione inclusa, è di 140 euro a notte per la doppia.» Ottimo!",
			pt: "“O preço, café da manhã incluído, é de 140 euros por noite para o duplo.” Ótimo!"
		},
		{
			it: "Magari fosse sempre così facile prenotare!",
			pt: "Quem dera fosse sempre tão fácil reservar!",
			note: "*Magari* + imperfeito do subjuntivo = quem dera: *magari fosse vero!*, quem dera fosse verdade. Sozinho, *magari!* também quer dizer “tomara!” ou “talvez”."
		},
		{
			it: "Se potessi, resterei in Italia un altro anno.",
			pt: "Se eu pudesse, ficaria na Itália mais um ano.",
			sep: true
		},
		{
			it: "Le sarei grato se mi rispondesse presto.",
			pt: "Eu lhe ficaria grato se me respondesse logo."
		},
		{
			it: "Ognuno pensa ai propri problemi.",
			pt: "Cada um pensa nos seus próprios problemas."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O imperfeito do subjuntivo',
			blocks: [
				{
					type: 'p',
					text: "Você já encontrou este tempo nas lições 96 e 98; agora ele fica de vez. O imperfeito do subjuntivo corresponde ao nosso “se eu falasse, se eu fosse”. A boa notícia: é um dos tempos mais regulares do italiano. Tire o *-re* do infinitivo e acrescente *-ssi, -ssi, -sse, -ssimo, -ste, -ssero*:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "par**las**si, par**las**si, par**las**se", pt: "eu falasse, você falasse, ele falasse" },
						{ it: "par**las**simo, par**la**ste, par**las**sero", pt: "nós falássemos, vocês falassem, eles falassem" },
						{ it: "pren**des**si, dor**mis**si, po**tes**si", pt: "eu pegasse, eu dormisse, eu pudesse" },
						{ it: "**fos**si, **fos**se, **fos**simo, **fo**ste, **fos**sero", pt: "eu fosse, ele fosse, nós fôssemos, vocês fossem, eles fossem" },
						{ it: "fa**ces**si, di**ces**si, **des**si, **stes**si", pt: "eu fizesse, eu dissesse, eu desse, eu estivesse" }
					]
				},
				{
					type: 'p',
					text: "*Essere* é irregular (*fossi*). *Fare* e *dire* usam o radical antigo, *fac-* e *dic-*: *facessi, dicessi*. *Dare* e *stare* fazem *dessi* e *stessi*. *Avere* é regular: *avessi*."
				},
				{ type: 'h', text: 'Quando usar' },
				{
					type: 'p',
					text: "Por enquanto, três usos. A hipótese com *se*, com a consequência no condicional: *se potessi, resterei*. O pedido educado: *Le sarei grato se potesse...*. E o desejo com *magari*: *magari fosse vero!*. Cuidado: depois do *se* da hipótese, o italiano nunca usa o condicional. *Se potrei* é erro; o certo é *se potessi*."
				},
				{
					type: 'dica',
					text: "Na pronúncia, o *-ss-* é duplo de verdade, e o acento cai sempre na vogal que vem antes da terminação: par**las**si, par**las**simo, po**tes**si, par**la**ste, **fo**ste."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Reservar por escrito; proprio',
			blocks: [
				{
					type: 'p',
					text: "Um e-mail para reservar hotel junta tudo o que você viu nestas lições: *Gentili signori*, o condicional de cortesia, *se fosse possibile*, *Vi saremmo grati se* e *Cordiali saluti*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sa**rem**mo interes**sa**ti a una **ca**mera **dop**pia.", pt: "Teríamos interesse num quarto duplo." },
						{ it: "Se **fos**se pos**si**bile, vor**rem**mo la **vi**sta sul **la**go.", pt: "Se fosse possível, gostaríamos da vista para o lago." },
						{ it: "Vi sa**rem**mo **gra**ti se po**te**ste rispon**der**ci **pre**sto.", pt: "Ficaríamos gratos se pudessem nos responder logo." },
						{ it: "La cola**zio**ne è in**clu**sa nel **prez**zo?", pt: "O café da manhã está incluído no preço?" }
					]
				},
				{
					type: 'p',
					text: "*Proprio* (*propria, propri, proprie*) é o possessivo que olha para o sujeito. Com sujeito definido, *suo* e *proprio* convivem: *Matteo ama la sua città* ou *la propria città*. Com o *si* impessoal, só *proprio*; com *ognuno*, *nessuno* e *tutti*, ele é o mais comum: *ognuno paga la propria parte*; *si deve pensare al proprio futuro*."
				},
				{
					type: 'dica',
					text: "Não confunda com o advérbio *proprio* = justamente, mesmo, bem: *proprio lui!* (ele mesmo!), *è proprio bello* (é muito bonito mesmo)."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Se fossimo ricchi, prenderemmo la suite.", pt: "Se fôssemos ricos, ficaríamos com a suíte." },
				{ it: "Se potessi, resterei un altro anno.", pt: "Se eu pudesse, ficaria mais um ano." },
				{ it: "Se fosse possibile, preferiremmo una camera con vista.", pt: "Se fosse possível, preferiríamos um quarto com vista." },
				{ it: "Le sarei grato se mi rispondesse presto.", pt: "Eu lhe ficaria grato se me respondesse logo." },
				{ it: "Magari fosse sempre così facile!", pt: "Quem dera fosse sempre tão fácil!" },
				{ it: "Ognuno paga la propria parte.", pt: "Cada um paga a sua parte." },
				{ it: "La colazione è inclusa nel prezzo.", pt: "O café da manhã está incluído no preço." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Se eu pudesse, viajaria mais.", parts: ["Se ", null, ", viaggerei di più."], answers: ["potessi"] },
				{ pt: "Se fôssemos ricos...", parts: ["Se ", null, " ricchi..."], answers: ["fossimo"] },
				{ pt: "Se fosse possível, gostaríamos de um quarto de solteiro.", parts: ["Se fosse possibile, ", null, " una singola."], answers: ["vorremmo"] },
				{ pt: "Quem dera fosse verdade!", parts: [null, " fosse vero!"], answers: ["magari"] },
				{ pt: "Cada um com o seu quarto.", parts: ["Ognuno la ", null, " camera."], answers: ["propria"] }
			]
		}
	]
};

const licao103: Lesson = {
	no: 103,
	kind: 'licao',
	title: 'Tocca a me!',
	titlePt: 'É a minha vez!',
	lines: [
		{
			it: "Ma guarda chi si vede! Il brasiliano che canta!",
			pt: "Olha só quem apareceu! O brasileiro que canta!",
			lit: "Mas olha quem se vê! O brasileiro que canta!",
			note: "O Rafael voltou à rua do apartamento antigo para se despedir. No bar embaixo do prédio, encontra a signora Bernardi e o marido, os vizinhos de baixo que não dormiram na noite da festa (lição 31). *Guarda chi si vede!* = olha quem está aqui!"
		},
		{
			it: "Signora Bernardi! Buongiorno! E buongiorno anche a Lei, signor Bernardi.",
			pt: "Senhora Bernardi! Bom dia! E bom dia também ao senhor, senhor Bernardi."
		},
		{
			it: "Allora, ragazzo, è vero che parti?",
			pt: "Então, rapaz, é verdade que você vai embora?"
		},
		{
			it: "Purtroppo sì: fra dieci giorni torno a Recife. La borsa è finita.",
			pt: "Infelizmente sim: daqui a dez dias volto para o Recife. A bolsa acabou."
		},
		{
			it: "Che peccato! Da quando siete andati via voi, il palazzo è troppo silenzioso.",
			pt: "Que pena! Desde que vocês foram embora, o prédio está silencioso demais.",
			note: "*Andare via* = ir embora. *Da quando* = desde que."
		},
		{
			it: "Non ci credo, signora! Lei si lamentava sempre della musica.",
			pt: "Não acredito, senhora! A senhora vivia reclamando da música.",
			note: "*Si lamentava*: o imperfeito para o que acontecia sempre (lição 63). *Lamentarsi di* = reclamar de, queixar-se de."
		},
		{
			it: "Sì, ma adesso mi manca! Al piano di sopra c'è un signore che non fa mai rumore. Che noia!",
			pt: "Sim, mas agora sinto falta! No andar de cima mora um senhor que nunca faz barulho. Que tédio!",
			note: "*Mi manca* = sinto falta disso, me faz falta. *Il piano di sopra, il piano di sotto* = o andar de cima, o andar de baixo."
		},
		{
			it: "Su, prendi un caffè con noi. Offro io.",
			pt: "Vamos, tome um café com a gente. Eu pago."
		},
		{
			it: "No, no, stavolta tocca a me. L'ultima volta ha offerto Lei.",
			pt: "Não, não, agora é a minha vez. Da última vez o senhor pagou.",
			note: "*Tocca a me* = é a minha vez, cabe a mim. *Toccare a qualcuno* serve para turnos e obrigações: *tocca a te* (é a sua vez), *a chi tocca?* (de quem é a vez?), *mi tocca lavorare* (tenho que trabalhar, fazer o quê)."
		},
		{
			it: "Non importa! Chi se lo ricorda?",
			pt: "Não importa! Quem se lembra disso?",
			note: "*Non importa* = não importa, tanto faz, não tem problema. É parente do *non fa niente* que você ouviu em Nápoles, antes da ópera (lição 24)."
		},
		{
			it: "Io me lo ricordo benissimo. Tre caffè, per favore!",
			pt: "Eu me lembro muito bem. Três cafés, por favor!"
		},
		{
			it: "E Chiara? Ha finito gli esami?",
			pt: "E a Chiara? Já terminou as provas?"
		},
		{
			it: "Ne ha ancora uno lunedì. È nervosissima.",
			pt: "Ainda tem uma na segunda. Está nervosíssima.",
			note: "*Ne ha uno*: o *ne* retoma *esami*, “tem uma delas”."
		},
		{
			it: "Allora salutami Chiara, e anche Matteo. Digli che il palazzo li aspetta!",
			pt: "Então mande lembranças para a Chiara, e para o Matteo também. Diga a eles que o prédio está esperando por eles!",
			note: "*Salutami Chiara* = mande lembranças minhas para a Chiara, literalmente “cumprimente-me a Chiara”. É o imperativo de *tu* com o pronome *mi*. *Digli* = diga a ele, a eles: na fala, *gli* vale também para o plural."
		},
		{
			it: "Senz'altro. E voi, se venite in Brasile, chiamatemi. Non scherzo!",
			pt: "Com certeza. E vocês, se forem ao Brasil, me liguem. Não estou brincando!"
		},
		{
			it: "In Brasile, alla nostra età? Magari!",
			pt: "No Brasil, na nossa idade? Quem dera!"
		},
		{
			it: "Buon viaggio, caro. E fatti sentire!",
			pt: "Boa viagem, querido. E dê notícias!",
			note: "*Farsi sentire* = dar notícias, aparecer: *fatti sentire!* é o que se diz a quem viaja. *Fatti vivo!* quer dizer o mesmo."
		},
		{
			it: "Prometto. E mi saluti tutti al palazzo!",
			pt: "Prometo. E mande lembranças para todos no prédio!",
			note: "Repare: a signora trata o Rafael por *tu* e diz *salutami*; ele a trata por *Lei* e diz *mi saluti*, com o imperativo de cortesia (lição 78)."
		},
		{
			it: "Tocca a te: io ho pagato ieri.",
			pt: "É a sua vez: eu paguei ontem.",
			sep: true
		},
		{
			it: "Non importa se arrivi tardi: ti aspettiamo.",
			pt: "Não importa se você chegar tarde: a gente espera você."
		},
		{
			it: "Salutami tua madre! Grazie, e Lei mi saluti suo marito.",
			pt: "Mande lembranças para a sua mãe! Obrigado, e a senhora mande lembranças para o seu marido."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Salutami, tocca a me, non importa',
			blocks: [
				{
					type: 'p',
					text: "Para mandar lembranças a alguém, o italiano usa *salutare* no imperativo com o pronome de quem manda: *salutami Chiara* (tu), *mi saluti Chiara* (Lei), *salutatemi Chiara* (voi). Em nome de mais de uma pessoa, *ci*: *salutaci Larissa* (mande lembranças nossas)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sa**lu**tami tua **ma**dre!", pt: "Mande lembranças para a sua mãe! (tu)" },
						{ it: "Mi sa**lu**ti suo ma**ri**to!", pt: "Mande lembranças para o seu marido! (Lei)" },
						{ it: "Sa**lu**taci **tut**ti!", pt: "Mande lembranças nossas para todos!" },
						{ it: "**Toc**ca a **te**: io ho pa**ga**to i**e**ri.", pt: "É a sua vez: eu paguei ontem." },
						{ it: "A chi **toc**ca a**des**so?", pt: "De quem é a vez agora?" },
						{ it: "Mi **toc**ca la**vo**rare do**me**nica.", pt: "Vou ter que trabalhar no domingo." },
						{ it: "Non im**por**ta, **fal**lo do**ma**ni.", pt: "Não importa, faça amanhã." }
					]
				},
				{
					type: 'p',
					text: "*Toccare* tem dois sentidos: tocar com a mão (*non toccare!*) e caber a alguém (*tocca a me*). No segundo, a pessoa vem com *a*, e o que se tem de fazer vem no infinitivo: *tocca a te lavare i piatti*. Com pronome, *mi tocca, ti tocca*, há um tom de “fazer o quê”."
				},
				{
					type: 'dica',
					text: "*Non importa* e *non fa niente* às vezes se trocam. *Non fa niente* responde a um pedido de desculpas (“não foi nada”). *Non importa* diz que algo não tem importância: *non importa se piove*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Frases feitas',
			blocks: [
				{
					type: 'p',
					text: "Toda língua tem frases que se dizem sempre do mesmo jeito, em situações certas. Muitas você já conhece. Aqui vão as das despedidas e dos encontros:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Guar**da chi si **ve**de!", pt: "Olha só quem apareceu!" },
						{ it: "**Fat**ti sen**ti**re!", pt: "Dê notícias!" },
						{ it: "Buon vi**ag**gio e **buo**na for**tu**na!", pt: "Boa viagem e boa sorte!" },
						{ it: "In **boc**ca al **lu**po! **Cre**pi!", pt: "Boa sorte! Obrigado! (lição 33)" },
						{ it: "Non **ve**do l'**o**ra di rive**der**ti.", pt: "Mal posso esperar para ver você de novo." },
						{ it: "Ci man**che**rai.", pt: "Vamos sentir a sua falta." }
					]
				},
				{
					type: 'dica',
					text: "*Ci mancherai* é o futuro de *mancare*: “você vai fazer falta para nós”. A estrutura é a de *mi manca*: quem sente falta vai como pronome indireto, e quem faz falta é o sujeito. *Mi manchi* = sinto a sua falta."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Guarda chi si vede!", pt: "Olha só quem apareceu!" },
				{ it: "Stavolta tocca a me: offro io.", pt: "Agora é a minha vez: eu pago." },
				{ it: "Non importa, non me lo ricordo.", pt: "Não importa, não me lembro disso." },
				{ it: "Salutami Chiara e Matteo!", pt: "Mande lembranças para a Chiara e o Matteo!" },
				{ it: "Signora, mi saluti suo marito.", pt: "Senhora, mande lembranças para o seu marido." },
				{ it: "Buon viaggio, e fatti sentire!", pt: "Boa viagem, e dê notícias!" },
				{ it: "Mi manca la musica di una volta.", pt: "Sinto falta da música de antigamente." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "É a minha vez!", parts: [null, " a me!"], answers: ["tocca"] },
				{ pt: "Não importa se chove.", parts: ["Non ", null, " se piove."], answers: ["importa"] },
				{ pt: "Mande lembranças para a sua irmã! (tu)", parts: [null, " tua sorella!"], answers: ["salutami"] },
				{ pt: "Mande lembranças para todos! (Lei)", parts: ["Mi ", null, " tutti!"], answers: ["saluti"] },
				{ pt: "Dê notícias!", parts: [null, " sentire!"], answers: ["fatti"] }
			]
		}
	]
};

const licao104: Lesson = {
	no: 104,
	kind: 'licao',
	title: 'Un palco a teatro',
	titlePt: 'Um camarote no teatro',
	lines: [
		{
			it: "Teatro Duse, buonasera.",
			pt: "Teatro Duse, boa noite.",
			note: "A Chiara quer fazer uma surpresa para uma das últimas noites do Rafael em Bolonha e liga para a bilheteria do Teatro Duse, um teatro do centro. *Buonasera* vale a partir do meio da tarde."
		},
		{
			it: "Buonasera. Vorrei prenotare dei posti per La locandiera di sabato sera.",
			pt: "Boa noite. Gostaria de reservar lugares para *A estalajadeira* de sábado à noite.",
			note: "*La locandiera* (1753) é uma comédia de Carlo Goldoni, o grande autor de teatro de Veneza. A heroína, Mirandolina, dona de uma *locanda* (estalagem), faz todos os hóspedes se apaixonarem por ela."
		},
		{
			it: "Sabato... è quasi tutto esaurito. Mi resta qualche posto in galleria.",
			pt: "Sábado... está quase tudo esgotado. Ainda tenho alguns lugares no balcão.",
			note: "*Esaurito* = esgotado. *La platea* é a plateia, embaixo; *la galleria*, o balcão, no alto; *il palco*, o camarote."
		},
		{
			it: "In galleria? Speravo che ci fossero ancora posti in platea.",
			pt: "No balcão? Eu esperava que ainda houvesse lugares na plateia.",
			note: "*Speravo che ci fossero*: como na revisão da lição 98, quando o verbo principal está no passado, o subjuntivo que depende dele vai para o imperfeito. Presente: *spero che ci siano*. Passado: *speravo che ci fossero*. Como em português: “espero que haja”, “esperava que houvesse”."
		},
		{
			it: "In platea ho ancora due posti, ma non sono vicini.",
			pt: "Na plateia ainda tenho dois lugares, mas não são juntos."
		},
		{
			it: "Ah, no. Vorrei che stessimo vicini: è una delle ultime serate di un nostro amico.",
			pt: "Ah, não. Eu queria que ficássemos juntos: é uma das últimas noites de um amigo nosso.",
			note: "*Vorrei che* + imperfeito do subjuntivo, como o *vorrei che qualcuno pagasse* do estádio (lição 96): depois do condicional, o subjuntivo também vai para o imperfeito. *Stessimo* vem de *stare*. *Un nostro amico* = um amigo nosso."
		},
		{
			it: "Capisco. Allora Le consiglio un palco: cinque posti, e si vede benissimo.",
			pt: "Entendo. Então eu lhe recomendo um camarote: cinco lugares, e se vê muito bem."
		},
		{
			it: "Un palco! Come al San Carlo! E quanto costa?",
			pt: "Um camarote! Como no San Carlo! E quanto custa?",
			note: "A Chiara e o Rafael viram *La traviata* de um camarote do San Carlo, em Nápoles (lição 25)."
		},
		{
			it: "Centoventi euro in tutto. Se foste in cinque, spendereste ventiquattro euro a testa.",
			pt: "Cento e vinte euros no total. Se vocês fossem cinco, gastariam vinte e quatro euros por pessoa.",
			note: "*Foste* = vocês fossem; *spendereste* = vocês gastariam. *Essere in cinque* = ser cinco pessoas. *A testa* = por cabeça, por pessoa."
		},
		{
			it: "In cinque? Perfetto: veniamo anche con Giulia e Luca. Lo prendo.",
			pt: "Cinco? Perfeito: vamos também com a Giulia e o Luca. Eu fico com ele."
		},
		{
			it: "Benissimo. Allora, ascoltate bene: venite almeno mezz'ora prima e ritirate i biglietti alla cassa.",
			pt: "Ótimo. Então, escutem bem: venham pelo menos meia hora antes e retirem os ingressos na bilheteria.",
			note: "A moça fala com a Chiara, mas pensa no grupo inteiro, por isso usa *voi*. O imperativo de *voi* é igual ao presente: *venite, ritirate, ascoltate* (lição 18). *La cassa* = o caixa, a bilheteria."
		},
		{
			it: "E se arrivassimo un po' in ritardo?",
			pt: "E se a gente chegasse um pouco atrasado?",
			note: "*Arrivassimo* = nós chegássemos: uma hipótese, com *se* e o imperfeito do subjuntivo."
		},
		{
			it: "Non arrivate in ritardo, mi raccomando: a spettacolo iniziato non si entra.",
			pt: "Não cheguem atrasados, por favor: depois que o espetáculo começa, não se entra.",
			lit: "Não chegueis em atraso, me recomendo: a espetáculo iniciado não se entra.",
			note: "Imperativo negativo de *voi*: *non* + a forma de *voi*: *non arrivate, non dimenticate* (lição 23). *A spettacolo iniziato* = com o espetáculo já começado."
		},
		{
			it: "Capito. Grazie mille, buonasera!",
			pt: "Entendido. Muito obrigada, boa noite!"
		},
		{
			it: "Rafa, sabato sera non prendere impegni: andiamo a teatro, in un palco!",
			pt: "Rafa, sábado à noite não marque nada: vamos ao teatro, num camarote!",
			note: "*Prendere un impegno* = assumir um compromisso, marcar alguma coisa."
		},
		{
			it: "In un palco? Credevo che ci andassero solo i ricchi!",
			pt: "Num camarote? Eu achava que só os ricos iam lá!",
			note: "*Credevo che ci andassero*: de novo, verbo principal no passado, subjuntivo no imperfeito. *Andassero* vem de *andare*, totalmente regular."
		},
		{
			it: "Stavolta ci andiamo noi. È il nostro regalo d'addio.",
			pt: "Desta vez vamos nós. É o nosso presente de despedida.",
			note: "*L'addio* = o adeus, a despedida definitiva."
		},
		{
			it: "Pensavo che il concerto fosse domani.",
			pt: "Eu pensava que o show fosse amanhã.",
			sep: true
		},
		{
			it: "Ragazzi, non dimenticate i biglietti: portateli tutti!",
			pt: "Pessoal, não esqueçam os ingressos: tragam todos!"
		},
		{
			it: "Vorrei che tu restassi ancora un po'.",
			pt: "Eu queria que você ficasse mais um pouco."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O imperfeito do subjuntivo depois do passado',
			blocks: [
				{
					type: 'p',
					text: "Na lição 102 você usou o imperfeito do subjuntivo com *se*. Hoje voltou o outro uso, que você viu nas lições 96 e 97 e no quadro da revisão (lição 98): quando o verbo que pede subjuntivo está no passado ou no condicional, o subjuntivo vai para o imperfeito. O português faz igual:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "**Spe**ro che ci **sia**no **po**sti.", pt: "Espero que haja lugares." },
						{ it: "Spe**ra**vo che ci **fos**sero **po**sti.", pt: "Esperava que houvesse lugares." },
						{ it: "**Cre**do che **sia** **tar**di.", pt: "Acho que é tarde." },
						{ it: "Cre**de**vo che **fos**se **tar**di.", pt: "Achava que era tarde." },
						{ it: "Vor**rei** che tu res**tas**si.", pt: "Eu queria que você ficasse." },
						{ it: "Pen**sa**vo che il con**cer**to **fos**se do**ma**ni.", pt: "Eu pensava que o show fosse amanhã." }
					]
				},
				{
					type: 'p',
					text: "Repare em *credevo che fosse tardi* = achava que era tarde. Onde o português às vezes usa o indicativo, o italiano mantém o subjuntivo depois de *credere* e *pensare*."
				},
				{
					type: 'dica',
					text: "*Vorrei che* + imperfeito do subjuntivo é o jeito mais delicado de pedir algo a alguém: *vorrei che mi ascoltassi* (eu queria que você me escutasse)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O imperativo de voi; no teatro',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 18 você usa o imperativo de *voi*: é igual ao presente. Para negar, ponha *non* antes (lição 23). Os pronomes grudam no fim (lição 71):"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Ve**ni**te mez**z'o**ra **pri**ma.", pt: "Venham meia hora antes." },
						{ it: "Riti**ra**te i bi**gliet**ti alla **cas**sa.", pt: "Retirem os ingressos na bilheteria." },
						{ it: "Non arri**va**te in ri**tar**do!", pt: "Não cheguem atrasados!" },
						{ it: "Por**ta**teli **tut**ti!", pt: "Tragam todos!" },
						{ it: "Non dimenti**ca**teli!", pt: "Não os esqueçam!" }
					]
				},
				{
					type: 'p',
					text: "No teatro italiano: *la platea* (a plateia), *i palchi* (os camarotes), *la galleria* (o balcão) e, no último andar, *il loggione* (a galeria, onde ficam os mais apaixonados), *il palcoscenico* (o palco), *il sipario* (a cortina), *la maschera* (o lanterninha), *l'intervallo* (o intervalo)."
				},
				{
					type: 'dica',
					text: "Para reservar por telefone: *vorrei prenotare due posti per sabato*, *è ancora disponibile?*, *dove si ritirano i biglietti?*. E a frase temida: *è tutto esaurito*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Speravo che ci fossero ancora posti.", pt: "Eu esperava que ainda houvesse lugares." },
				{ it: "Vorrei che stessimo vicini.", pt: "Eu queria que ficássemos juntos." },
				{ it: "Credevo che fosse più caro.", pt: "Eu achava que era mais caro." },
				{ it: "Venite mezz'ora prima e ritirate i biglietti alla cassa.", pt: "Venham meia hora antes e retirem os ingressos na bilheteria." },
				{ it: "Non arrivate in ritardo!", pt: "Não cheguem atrasados!" },
				{ it: "Sabato è tutto esaurito.", pt: "No sábado está tudo esgotado." },
				{ it: "Spendiamo venti euro a testa.", pt: "Gastamos vinte euros por pessoa." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Eu achava que era tarde.", parts: ["Credevo che ", null, " tardi."], answers: ["fosse"] },
				{ pt: "Eu queria que você ficasse.", parts: ["Vorrei che tu ", null, "."], answers: ["restassi"] },
				{ pt: "Venham cedo!", parts: [null, " presto!"], answers: ["venite"] },
				{ pt: "Não esqueçam os ingressos!", parts: ["Non ", null, " i biglietti!"], answers: ["dimenticate"] },
				{ pt: "Está tudo esgotado.", parts: ["È tutto ", null, "."], answers: ["esaurito"] }
			]
		}
	]
};

const licao105: Lesson = {
	no: 105,
	kind: 'licao',
	title: 'Arrivederci, Bologna',
	titlePt: 'Até logo, Bolonha',
	lines: [
		{
			it: "Eccoci all'aeroporto: ce l'abbiamo fatta, e con un'ora di anticipo!",
			pt: "Chegamos ao aeroporto: conseguimos, e com uma hora de antecedência!",
			note: "Fim de junho. Os amigos levam o Rafael ao aeroporto Marconi, em Bolonha. *Ce l'abbiamo fatta*: o *farcela* da lição 97, no passado com *avere*. *In anticipo* = adiantado; *in ritardo* = atrasado."
		},
		{
			it: "Per fortuna guidavi tu. Ti ricordi Campobasso?",
			pt: "Ainda bem que era você dirigindo. Lembra de Campobasso?",
			note: "Nas férias, o Rafael era o navegador e levou todo mundo para Campobasso em vez de Vieste (lição 58)."
		},
		{
			it: "Come no! Allora: passaporto?",
			pt: "Claro que lembro! Então: passaporte?"
		},
		{
			it: "Nello zaino, sotto il computer. Come sempre!",
			pt: "Na mochila, embaixo do computador. Como sempre!",
			note: "A resposta de sempre, desde a viagem a Nápoles (lição 15)."
		},
		{
			it: "Che gran festa ieri sera! Abbiamo ballato fino all'una.",
			pt: "Que festão ontem à noite! A gente dançou até uma da manhã.",
			note: "*Gran* é a forma curta de *grande* antes de consoante: *una gran festa*, *un gran ragazzo*, *un gran caldo*. Antes de vogal, *grande* ou *grand'*: *un grande amico*. E antes de *s* + consoante, *z* ou *ps*, só *grande*: *un grande scrittore*."
		},
		{
			it: "E pensa: è venuta anche la signora Bernardi, col marito!",
			pt: "E imagina: veio até a senhora Bernardi, com o marido!"
		},
		{
			it: "E la signora Zanetti ha mandato da Modena una bottiglietta di aceto balsamico.",
			pt: "E a senhora Zanetti mandou de Modena uma garrafinha de vinagre balsâmico.",
			note: "O *aceto balsamico tradizionale di Modena* envelhece por anos em barris de madeira. Uma garrafinha pequena é um presente de verdade."
		},
		{
			it: "Ti ricordi il primo giorno? Avevi una paura di sbagliare...",
			pt: "Lembra do primeiro dia? Você tinha tanto medo de errar...",
			note: "*Avevi una paura...*: o artigo *una* com a frase suspensa dá intensidade: “você tinha um medo...”, um medo enorme."
		},
		{
			it: "E adesso? Me la sono sbrogliata, no?",
			pt: "E agora? Eu me virei, não?",
			lit: "E agora? Me a sou desembaraçado, não?",
			note: "*Sbrogliarsela* = desenrolar-se, sair de uma situação complicada. *Sbrogliare* é desembaraçar um fio. Funciona como *cavarsela* (lição 85): *me la sbroglio, te la sbrogli*; no passado, com *essere*: *me la sono sbrogliata*."
		},
		{
			it: "Te la sei sbrogliata alla grande. Sei un gran ragazzo, Rafa.",
			pt: "Você se virou muito bem. Você é um cara e tanto, Rafa.",
			note: "*Alla grande* = muito bem, com estilo. *Un gran ragazzo* = um rapaz e tanto, uma ótima pessoa. Cuidado: *un ragazzo grande* é um rapaz alto ou já crescido."
		},
		{
			it: "E a settembre? Al nostro matrimonio ci sarai?",
			pt: "E em setembro? Você vai estar no nosso casamento?"
		},
		{
			it: "Farò di tutto. Ho già cominciato a mettere da parte i soldi.",
			pt: "Vou fazer de tudo. Já comecei a guardar dinheiro.",
			note: "*Mettere da parte* = pôr de lado, guardar, economizar."
		},
		{
			it: "E salutaci Larissa! Dille che a Bologna c'è sempre posto per lei.",
			pt: "E mande lembranças nossas para a Larissa! Diga a ela que em Bolonha sempre tem lugar para ela.",
			note: "A Larissa voltou ao Recife em abril, depois da viagem a Roma. *Salutaci* = mande lembranças nossas (lição 103)."
		},
		{
			it: "Senz'altro. Da quando è tornata, parla italiano anche col cane!",
			pt: "Com certeza. Desde que voltou, ela fala italiano até com o cachorro!",
			note: "O cachorro é o Biscoito, que ficou no Recife com a família."
		},
		{
			it: "«Volo per Lisbona, imbarco immediato all'uscita dodici.»",
			pt: "“Voo para Lisboa, embarque imediato no portão doze.”",
			note: "O Rafael faz escala em Lisboa. *L'imbarco* = o embarque; *l'uscita* = a saída, e no aeroporto, o portão (*il gate* também se diz)."
		},
		{
			it: "È il tuo. Vai, sennò perdi l'aereo.",
			pt: "É o seu. Vai, senão você perde o avião.",
			note: "*Sennò* = senão, do contrário."
		},
		{
			it: "Non è un addio, eh. È un arrivederci.",
			pt: "Não é um adeus, hein. É um até logo.",
			note: "*Addio* é o adeus para sempre; *arrivederci* quer dizer, ao pé da letra, “até nos revermos”."
		},
		{
			it: "Lo so. Arrivederci, Rafa. E torna presto.",
			pt: "Eu sei. Até logo, Rafa. E volte logo."
		},
		{
			it: "Ciao, ragazzi. Grazie di tutto. Mi mancherete.",
			pt: "Tchau, pessoal. Obrigado por tudo. Vou sentir falta de vocês.",
			note: "*Mi mancherete* = vocês vão me fazer falta. Como em *mi manca* (lição 103), quem faz falta é o sujeito."
		},
		{
			it: "È stata una gran bella giornata.",
			pt: "Foi um dia lindo mesmo.",
			sep: true
		},
		{
			it: "Non ti preoccupare: me la sbroglio da solo.",
			pt: "Não se preocupe: eu me viro sozinho."
		},
		{
			it: "Non è un addio: ci rivedremo presto!",
			pt: "Não é um adeus: vamos nos ver de novo logo!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Gran, grande; sbrogliarsela',
			blocks: [
				{
					type: 'p',
					text: "Como *buono* (lição 16), *grande* encurta antes do substantivo. Antes de consoante vira *gran*; antes de vogal, *grande* ou *grand'*; antes de *s* + consoante, *z* e *ps*, fica *grande*:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "una **gran** **fe**sta", pt: "uma festa e tanto" },
						{ it: "un **gran** ra**gaz**zo", pt: "um cara e tanto" },
						{ it: "Fa un **gran** **cal**do!", pt: "Está um calor enorme!" },
						{ it: "un **gran**de a**mi**co", pt: "um grande amigo" },
						{ it: "un **gran**de scrit**to**re", pt: "um grande escritor" },
						{ it: "una **gran** **bel**la gior**na**ta", pt: "um dia lindo mesmo" }
					]
				},
				{
					type: 'p',
					text: "Antes do substantivo, *grande* costuma ser elogio (*un grand'uomo*, um grande homem); depois, fala de tamanho (*un uomo grande*, um homem grandão). E *gran* também reforça adjetivos: *una gran bella giornata*."
				},
				{
					type: 'p',
					text: "*Sbrogliarsela* entra na família dos verbos com *-sela*: *cavarsela* (virar-se, lição 85), *prendersela* (ficar chateado), *godersela* (aproveitar). Todos fazem *me la, te la, se la, ce la, ve la, se la*, e o passado vai com *essere*: *te la sei sbrogliata*."
				},
				{
					type: 'dica',
					text: "*Farcela* (conseguir) se parece com eles, mas o pronome é *ce*: *ce la faccio*, *ce l'abbiamo fatta*. E o passado vai com *avere*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Arrivederci!',
			blocks: [
				{
					type: 'p',
					text: "Esta foi a última lição. Você acompanhou o Rafael desde a chegada a Bolonha: o apartamento com a Chiara e o Matteo, Nápoles, as férias, a mudança, as Langhe, o inverno, Roma com a Larissa e, agora, a despedida. Com ele, você passou do *ciao* ao subjuntivo e às cartas formais."
				},
				{
					type: 'p',
					text: "Mas o curso ainda não terminou. Desde a lição 50, você está na segunda onda: junto com cada lição nova, refaz uma antiga, agora traduzindo do português para o italiano. Hoje é a vez da lição 56. Faltam 49 dias de segunda onda, até a lição 105. Continue no mesmo ritmo: uma lição por dia, sem pular."
				},
				{
					type: 'p',
					text: "É na segunda onda que o italiano que você entende vira o italiano que você fala. Você vai rever estas lições e reparar no quanto ficaram fáceis. Quando terminar, continue ouvindo, lendo e falando: músicas, filmes, livros, uma conversa com um italiano. Você já sabe se virar: *te la sei sbrogliata alla grande*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non è un ad**di**o: è un arrive**der**ci.", pt: "Não é um adeus: é um até logo." },
						{ it: "In **boc**ca al **lu**po per la se**con**da **on**da!", pt: "Boa sorte na segunda onda!" },
						{ it: "**Cre**pi!", pt: "Obrigado! (a resposta de sempre)" }
					]
				},
				{
					type: 'dica',
					text: "*Grazie di tutto, e a presto!*"
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Ce l'abbiamo fatta, e con un'ora di anticipo!", pt: "Conseguimos, e com uma hora de antecedência!" },
				{ it: "Che gran festa ieri sera!", pt: "Que festão ontem à noite!" },
				{ it: "Sei un gran ragazzo.", pt: "Você é um cara e tanto." },
				{ it: "Me la sono sbrogliata da solo.", pt: "Eu me virei sozinho." },
				{ it: "Salutaci tua sorella!", pt: "Mande lembranças nossas para a sua irmã!" },
				{ it: "Non è un addio, è un arrivederci.", pt: "Não é um adeus, é um até logo." },
				{ it: "Grazie di tutto. Mi mancherete.", pt: "Obrigado por tudo. Vou sentir falta de vocês." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Que festão!", parts: ["Che ", null, " festa!"], answers: ["gran"] },
				{ pt: "Ele é um grande amigo.", parts: ["È un ", null, " amico."], answers: ["grande"] },
				{ pt: "Você se virou muito bem.", parts: ["Te la sei ", null, " alla grande."], answers: ["sbrogliata"] },
				{ pt: "Conseguimos!", parts: ["Ce l'abbiamo ", null, "!"], answers: ["fatta"] },
				{ pt: "Vou sentir falta de vocês.", parts: ["Mi ", null, "."], answers: ["mancherete"] }
			]
		}
	]
};

export const unidade: Unit = { no: 15, title: 'Formalidades e despedida', lessons: [99, 100, 101, 102, 103, 104, 105] };

export const licoes: Lesson[] = [licao99, licao100, licao101, licao102, licao103, licao104, licao105];
