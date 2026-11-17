import type { Lesson, Unit } from '../types.ts';

// Lições 85–91: primavera em Roma. A Larissa, irmã do Rafael, vem do Brasil e os dois passeiam pela cidade:
// pedem o caminho para o Colosseu sem bateria e sem dinheiro, o caixa eletrônico engole o cartão do Rafael,
// o carro alugado vai para a oficina, a carteira da Larissa some no metrô e aparece no commissariato,
// uma discussão no ônibus 64 e, diante de Montecitorio, o sistema político italiano.
// Ver docs/agents/curso-assimil-mapa.md.

const licao85: Lesson = {
	no: 85,
	kind: 'licao',
	title: 'Scusi, per il Colosseo?',
	titlePt: 'Desculpe, para o Coliseu?',
	lines: [
		{
			it: "Rafa, il mio telefono è morto. Zero per cento!",
			pt: "Rafa, o meu celular morreu. Zero por cento!",
			note: "Primavera em Roma. A Larissa, irmã do Rafael, chegou do Recife há dois dias, e os dois estão num B&B no bairro de Monti. Combinaram falar só italiano durante a viagem: ela estuda no aplicativo há mais de um ano e quer praticar (lição 12)."
		},
		{
			it: "Anche il mio. E in tasca ho solo la carta: niente contanti.",
			pt: "O meu também. E no bolso só tenho o cartão: nada de dinheiro vivo.",
			note: "*I contanti* = o dinheiro vivo, em espécie; *pagare in contanti* = pagar em dinheiro. *La tasca* = o bolso (lição 15)."
		},
		{
			it: "E adesso come ce la caviamo?",
			pt: "E agora, como a gente se vira?",
			lit: "E agora como no-la cavamos?",
			note: "*Cavarsela* = virar-se, sair-se de uma situação difícil. É um verbo com dois pronomes grudados, *si* e *la*, que viram *me la, te la, se la, ce la, ve la, se la* (os combinados da lição 50): *me la cavo, te la cavi, ce la caviamo*."
		},
		{
			it: "All'antica: chiediamo a qualcuno. Scusi, signore, saprebbe dirmi dov'è il Colosseo?",
			pt: "À moda antiga: perguntamos a alguém. Desculpe, senhor, saberia me dizer onde fica o Coliseu?",
			note: "*Saprebbe dirmi...?* = o senhor saberia me dizer...? É o condicional de *sapere* (lições 79–84), o jeito mais educado de pedir uma informação na rua. *All'antica* = à moda antiga."
		},
		{
			it: "Il Colosseo? Tornate indietro fino alla piazza, poi girate a sinistra, dietro la chiesa.",
			pt: "O Coliseu? Voltem até a praça, depois virem à esquerda, atrás da igreja.",
			lit: "O Coliseu? Voltai para trás até a praça, depois girai a esquerda, atrás a igreja.",
			note: "*Indietro* = para trás: *tornare indietro* = voltar. *Dietro* = atrás de: *dietro la chiesa* ou *dietro alla chiesa*. *Girare* = virar (*girate a sinistra*) e também rodar, dar voltas."
		},
		{
			it: "Ma che dice! Il Colosseo è di qua: si passa davanti al bar e si va sempre dritto.",
			pt: "Que nada! O Coliseu é para cá: passa-se na frente do bar e vai-se sempre reto.",
			lit: "Mas que diz! O Coliseu é de cá: se passa diante ao bar e se vai sempre direito.",
			note: "Uma senhora que passava resolve ajudar. *Di qua* = por aqui, deste lado; *di là* = por ali, do outro lado. *Davanti a* você conhece da lição 26. E de novo o *si* impessoal (lição 27): *si passa, si va*."
		},
		{
			it: "Signora mia, io a Roma ci sono nato!",
			pt: "Minha senhora, eu nasci em Roma!",
			lit: "Senhora minha, eu a Roma aí sou nascido!",
			note: "*Ci* retoma o lugar já dito, *a Roma*: *ci sono nato* = nasci aqui. Repetir o lugar com *ci* é muito comum na fala."
		},
		{
			it: "E io ci sono nata prima di Lei, caro!",
			pt: "E eu nasci aqui antes do senhor, meu caro!"
		},
		{
			it: "Rafa, e adesso a chi crediamo? A lui o a lei?",
			pt: "Rafa, e agora em quem a gente acredita? Nele ou nela?",
			lit: "Rafa, e agora a quem cremos? A ele ou a ela?",
			note: "*Credere a qualcuno* = acreditar em alguém. *A lui, a lei*: pronomes tônicos (lição 42)."
		},
		{
			it: "A nessuno dei due. Chiediamo a quel tizio con la maglia della Roma.",
			pt: "Em nenhum dos dois. Vamos perguntar àquele cara com a camisa da Roma.",
			note: "*Un tizio* = um sujeito, um cara qualquer, alguém que não se conhece. *La maglia* = a camisa de time, a camiseta. *La Roma* é o time, feminino como *la Lazio*, o outro time da cidade."
		},
		{
			it: "Il Colosseo? Ma ce l'avete dietro! Giratevi!",
			pt: "O Coliseu? Mas ele está atrás de vocês! Virem-se!",
			lit: "O Coliseu? Mas o tendes atrás! Virai-vos!",
			note: "*Avere qualcosa dietro, davanti* = ter algo atrás, na frente. *Giratevi* = virem-se: imperativo de *voi* com pronome no fim (lição 71)."
		},
		{
			it: "Dietro di noi? Ma come abbiamo fatto a non vederlo?",
			pt: "Atrás de nós? Mas como a gente não viu?",
			lit: "Atrás de nós? Mas como fizemos a não vê-lo?",
			note: "Antes de pronome, *dietro di*: *dietro di noi*, *dietro di te*. *Come hai fatto a...?* = como você conseguiu...?, como foi que...?, como o *come fai a* da lição 81."
		},
		{
			it: "Capita, capita. L'altro giorno un tale mi ha chiesto dov'era San Pietro, e stava proprio in piazza San Pietro!",
			pt: "Acontece, acontece. Outro dia um sujeito me perguntou onde ficava São Pedro, e ele estava bem na praça de São Pedro!",
			note: "*Capitare* = acontecer (lição 81). *Un tale* = um tal, um fulano: alguém de quem não se sabe ou não interessa o nome."
		},
		{ it: "Grazie mille, Lei è stato gentilissimo.", pt: "Muito obrigado, o senhor foi muito gentil." },
		{
			it: "Ma de che! E occhio ai gladiatori: sono tipi simpatici, ma se fate una foto con loro, vogliono dieci euro.",
			pt: "Que nada! E cuidado com os gladiadores: são caras simpáticos, mas se vocês tirarem uma foto com eles, querem dez euros.",
			lit: "Mas de quê! E olho aos gladiadores: são tipos simpáticos, mas se fazeis uma foto com eles, querem dez euros.",
			note: "*Ma de che!* é romano para *ma di che!*: não tem de quê. *Occhio!* = cuidado!, olho vivo!; *occhio a* = cuidado com. *Un tipo* = um tipo, um cara. Os gladiadores são homens fantasiados que cobram pelas fotos na frente do Coliseu."
		},
		{
			it: "Nessun problema: non abbiamo un centesimo!",
			pt: "Sem problema: não temos um centavo!",
			note: "*Nessun* antes de substantivo masculino, como *buon* (lição 16)."
		},
		{
			it: "Appunto. Prima di tutto, cerchiamo un bancomat.",
			pt: "Pois é. Antes de mais nada, vamos procurar um caixa eletrônico.",
			note: "*Appunto* = justamente, pois é: confirma o que o outro disse. *Il bancomat* = o caixa eletrônico."
		},
		{
			it: "C'è un tale al telefono: dice che ti conosce.",
			pt: "Tem um sujeito no telefone: diz que conhece você.",
			sep: true
		},
		{
			it: "Non ti preoccupare per me: me la cavo benissimo.",
			pt: "Não se preocupe comigo: eu me viro muito bem."
		},
		{
			it: "Il bagno? È di là, in fondo al corridoio, dietro la cucina.",
			pt: "O banheiro? É ali, no fim do corredor, atrás da cozinha.",
			note: "*In fondo a* = no fundo de, no fim de."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Pedir e dar o caminho',
			blocks: [
				{
					type: 'p',
					text: "Na lição 26 você pediu o caminho com *sa dov'è...?*. Agora, com o condicional, dá para ser ainda mais educado: *saprebbe dirmi...?* ou *mi saprebbe dire...?*. Os dois querem dizer “o senhor saberia me dizer...?”."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sa**preb**be **dir**mi dov'è la sta**zio**ne?", pt: "O senhor saberia me dizer onde fica a estação?" },
						{ it: "**Tor**ni in**die**tro e **gi**ri a **de**stra.", pt: "Volte e vire à direita." },
						{ it: "La fer**ma**ta è **die**tro la **chie**sa.", pt: "O ponto fica atrás da igreja." },
						{ it: "Il **ba**gno è di **là**; la **cu**cina è di **qua**.", pt: "O banheiro é para lá; a cozinha é para cá." },
						{ it: "Ce l'**a**vete da**van**ti!", pt: "Está bem na frente de vocês!" }
					]
				},
				{ type: 'h', text: 'Dietro, davanti, indietro' },
				{
					type: 'p',
					text: "*Dietro* (atrás de) e *davanti a* (na frente de) dizem onde uma coisa está. Antes de pronome, ganham *di*: *dietro di noi*, *davanti a te*. Já *indietro* é a direção, “para trás”: *tornare indietro* (voltar), *fare un passo indietro* (dar um passo para trás). E o relógio também: *il mio orologio è indietro* = o meu relógio está atrasado."
				},
				{
					type: 'p',
					text: "*Di qua* e *di là* são “para cá” e “para lá”, “deste lado” e “do outro lado”. Em casa, *di là* é o outro cômodo: *Matteo è di là* = o Matteo está lá no outro quarto."
				},
				{
					type: 'dica',
					text: "*Girare* é virar (*giri a sinistra*), mas também rodar, passear: *girare per Roma* = rodar por Roma. E *girarsi* é virar-se: *girati!* = vire-se!"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Tizio, tipo, tale; cavarsela',
			blocks: [
				{
					type: 'p',
					text: "O italiano tem várias palavras para falar de uma pessoa sem dizer o nome. Elas não são iguais:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "un **ti**zio", pt: "um sujeito, um cara qualquer (às vezes com um pouco de desconfiança)" },
						{ it: "un **ti**po sim**pa**tico", pt: "um cara simpático: *tipo* fala do jeito da pessoa" },
						{ it: "un **ta**le", pt: "um tal, um fulano: alguém sem nome" },
						{ it: "**Ti**zio, **Ca**io e Sem**pro**nio", pt: "fulano, beltrano e sicrano" }
					]
				},
				{
					type: 'p',
					text: "*Tipo* também serve como no português falado dos jovens: *era, tipo, enorme* = era, tipo, enorme. E *il signor Tal dei Tali* é o nosso “fulano de tal”."
				},
				{ type: 'h', text: 'Cavarsela' },
				{
					type: 'p',
					text: "*Cavarsela* é virar-se, dar conta: *me la cavo*, *te la cavi*, *se la cava*, *ce la caviamo*, *ve la cavate*, *se la cavano*. No passado, *essere*: *me la sono cavata* (eu me virei). É a resposta modesta clássica: *Parli italiano? Me la cavo.* (Você fala italiano? Eu me viro.)"
				},
				{ type: 'h', text: 'Per carità' },
				{
					type: 'p',
					text: "*Per carità!* tem dois usos. Para recusar com força, é o nosso “Deus me livre!”: *Il tram a quest'ora? Per carità!*. E como resposta a um agradecimento, “imagine, não foi nada”."
				},
				{
					type: 'dica',
					text: "Em Roma você vai ouvir o *romanesco*, o jeito de falar da cidade: *de* no lugar de *di* (*ma de che!*), *er* no lugar de *il* (*er Colosseo*), e o famoso *aò!*, para chamar alguém. Não precisa imitar; só não se assuste."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Scusi, saprebbe dirmi dov'è la fermata del tram?", pt: "Desculpe, o senhor saberia me dizer onde fica o ponto do bonde?" },
				{ it: "Tornate indietro e girate a destra.", pt: "Voltem e virem à direita." },
				{ it: "Il bagno è di là, dietro la cucina.", pt: "O banheiro é ali, atrás da cozinha." },
				{ it: "C'è un tizio alla porta che cerca Matteo.", pt: "Tem um sujeito na porta procurando o Matteo." },
				{ it: "Non ti preoccupare, me la cavo da solo.", pt: "Não se preocupe, eu me viro sozinho." },
				{ it: "Il Colosseo? Ce l'hai davanti!", pt: "O Coliseu? Está bem na sua frente!" },
				{ it: "Mio fratello è un tipo simpatico.", pt: "Meu irmão é um cara simpático." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Desculpe, o senhor saberia me dizer onde fica a estação?", parts: ["Scusi, ", null, " dirmi dov'è la stazione?"], answers: ["saprebbe"] },
				{ pt: "Voltem até a praça.", parts: ["Tornate ", null, " fino alla piazza."], answers: ["indietro"] },
				{ pt: "O ponto fica atrás da igreja.", parts: ["La fermata è ", null, " la chiesa."], answers: ["dietro"] },
				{ pt: "Como você se vira em italiano?", parts: ["Come te la ", null, " con l'italiano?"], answers: ["cavi"] },
				{ pt: "Na esquina, virem à esquerda.", parts: ["All'angolo, ", null, " a sinistra."], answers: ["girate"] }
			]
		}
	]
};

const licao86: Lesson = {
	no: 86,
	kind: 'licao',
	title: 'In banca',
	titlePt: 'No banco',
	lines: [
		{
			it: "No! Il bancomat mi ha mangiato la carta!",
			pt: "Não! O caixa eletrônico engoliu o meu cartão!",
			lit: "Não! O bancomat me comeu o cartão!",
			note: "*Mi ha mangiato la carta*: pronome indireto + artigo no lugar do possessivo, como *mi sono lavato i capelli* (lição 46). Na fala, *il bancomat* é também o próprio cartão de débito."
		},
		{
			it: "Per forza: hai sbagliato il PIN tre volte. Te l'avevo detto di scriverlo!",
			pt: "Claro: você errou a senha três vezes. Eu te disse para anotar!",
			lit: "Por força: erraste o PIN três vezes. To tinha dito de escrevê-lo!",
			note: "*Per forza* = claro, também, não tinha como ser diferente. *Te l'avevo detto* = eu tinha te dito, eu avisei: mais-que-perfeito (lição 63) com pronome combinado (lição 50)."
		},
		{
			it: "Va be'. Guarda, c'è una banca qui di fronte. Sarà aperta?",
			pt: "Tá bom. Olha, tem um banco aqui em frente. Será que está aberto?",
			lit: "Vai bem. Olha, há um banco aqui de frente. Será aberta?",
			note: "O futuro também serve para fazer suposições sobre o presente: *sarà aperta?* = será que está aberto? Atenção ao gênero: *la banca* (o banco, a instituição) é feminino. *Va be'* é *va bene* encurtado."
		},
		{
			it: "Sì, c'è gente dentro. Saranno gli impiegati.",
			pt: "Sim, tem gente lá dentro. Devem ser os funcionários.",
			lit: "Sim, há gente dentro. Serão os empregados.",
			note: "*Saranno* = devem ser, provavelmente são. *L'impiegato* é o funcionário de escritório, de banco, de repartição."
		},
		{
			it: "Buongiorno. Prendete il numero e sedetevi, prego.",
			pt: "Bom dia. Peguem a senha e sentem-se, por favor.",
			lit: "Bom dia. Pegai o número e sentai-vos, por favor.",
			note: "*Sedersi* (sentar-se) é irregular no presente: *mi siedo, ti siedi, si siede, ci sediamo, vi sedete, si siedono*. No imperativo: *siediti* (tu), *si sieda* (Lei), *sedetevi* (voi)."
		},
		{
			it: "Rafa, quanti anni avrà quell'impiegato allo sportello? Sembra un ragazzino.",
			pt: "Rafa, quantos anos será que tem aquele funcionário do guichê? Parece um garoto.",
			lit: "Rafa, quantos anos terá aquele empregado ao guichê? Parece um rapazinho.",
			note: "*Avrà* = terá, deve ter. *Lo sportello* = o guichê (lição 37)."
		},
		{
			it: "Mah! Ne avrà venticinque. E lavora già in banca...",
			pt: "Sei lá! Deve ter uns vinte e cinco. E já trabalha em banco...",
			lit: "Mah! Disso terá vinte e cinco. E trabalha já em banco...",
			note: "*Mah!* = sei lá, hum: dúvida, pouco caso. Com idade, *ne* substitui *anni*: *ne avrà venticinque*. E *in banca*, sem artigo, como *in ufficio* e *in biblioteca*."
		},
		{
			it: "Numero trentadue! Prego, si sieda. Mi dica.",
			pt: "Número trinta e dois! Por favor, sente-se. Pois não.",
			note: "*Si sieda* = sente-se, com *Lei*, como *si accomodi* (lição 78)."
		},
		{
			it: "Buongiorno. Il bancomat qui fuori mi ha trattenuto la carta.",
			pt: "Bom dia. O caixa eletrônico aqui fora reteve o meu cartão.",
			note: "*Trattenere* = reter, segurar; conjuga-se como *tenere* (lição 71): *trattengo, trattieni*, particípio *trattenuto*."
		},
		{
			it: "Ha sbagliato il PIN tre volte? Succede spesso, non si preoccupi. La carta è di questa banca?",
			pt: "O senhor errou a senha três vezes? Acontece muito, não se preocupe. O cartão é deste banco?"
		},
		{ it: "No, è di una banca di Bologna. Studio lì.", pt: "Não, é de um banco de Bolonha. Eu estudo lá." },
		{
			it: "Allora non posso restituirgliela. La spediamo alla Sua filiale: ci vorranno quattro o cinque giorni.",
			pt: "Então não posso devolvê-lo ao senhor. Vamos mandá-lo para a sua agência: vai levar quatro ou cinco dias.",
			lit: "Então não posso restituir-lha. A expedimos à Sua filial: ci quererão quatro ou cinco dias.",
			note: "*Restituirgliela* = devolvê-lo ao senhor: *gli* + *la* colados no infinitivo (lição 51). *La filiale* = a agência do banco. *Ci vorranno*: o *ci vuole* da lição 54, no futuro."
		},
		{
			it: "Ma io torno a Bologna fra due settimane!",
			pt: "Mas eu só volto para Bolonha daqui a duas semanas!",
			note: "*Torno* no presente, mas falando do futuro: com uma data ou um prazo na frase, o italiano prefere o presente, como nós (*volto semana que vem*)."
		},
		{
			it: "Allora la ritira quando torna. Intanto la blocchi con l'app, per sicurezza.",
			pt: "Então o senhor retira quando voltar. Enquanto isso, bloqueie pelo aplicativo, por segurança.",
			note: "*Ritirare* = retirar, ir buscar. *Quando torna*: de novo o presente, onde o português põe “quando voltar”. *Blocchi*: imperativo de *Lei* de *bloccare*, com o *h* para manter o som duro."
		},
		{
			it: "Tranquillo, fratellino: per ora pago io. Scusi, qui si possono cambiare dollari?",
			pt: "Calma, irmãozinho: por enquanto eu pago. Desculpe, aqui dá para trocar dólares?",
			lit: "Tranquilo, irmãozinho: por ora pago eu. Desculpe, aqui se podem trocar dólares?",
			note: "*Fratellino* = irmãozinho (lição 76), mesmo sendo o mais velho. *Si possono cambiare dollari*: com o *si*, o verbo concorda com a coisa, no plural (lição 27)."
		},
		{
			it: "Mi dispiace, noi non facciamo cambio. In centro alcune agenzie lo fanno, ma lì il cambio è caro: Le conviene prelevare con la Sua carta.",
			pt: "Sinto muito, nós não fazemos câmbio. No centro algumas casas de câmbio fazem, mas lá o câmbio é caro: é melhor a senhorita sacar com o seu cartão.",
			note: "*Prelevare* = sacar dinheiro. *Le conviene* = é melhor para a senhorita (lição 38). *Alcune* = algumas, sempre no plural."
		},
		{
			it: "Ecco: cento euro! E la commissione? Mah... preferisco non saperlo.",
			pt: "Pronto: cem euros! E a taxa? Sei lá... prefiro não saber.",
			note: "*La commissione* = a taxa que o banco cobra por uma operação."
		},
		{ it: "Allora oggi offri tu: pizza e gelato!", pt: "Então hoje quem paga é você: pizza e sorvete!" },
		{
			it: "Prima vado in banca, poi passo alla posta.",
			pt: "Primeiro vou ao banco, depois passo no correio.",
			sep: true,
			note: "*In banca*, mas *alla posta*: o costume decide, não há regra que resolva."
		},
		{
			it: "Chi sarà a quest'ora? Sarà la mamma: in Brasile è pomeriggio.",
			pt: "Quem será a esta hora? Deve ser a mãe: no Brasil é de tarde."
		},
		{ it: "Domani andiamo ai Musei Vaticani.", pt: "Amanhã vamos aos Museus Vaticanos." }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'O futuro que supõe; o presente que promete',
			blocks: [
				{
					type: 'p',
					text: "Você conhece o futuro desde a lição 64. Hoje ele apareceu com outro trabalho: fazer suposições sobre o **presente**. Onde nós dizemos “será que...?”, “deve ser”, “deve ter”, o italiano usa o futuro simples."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Sa**rà** a**per**ta?", pt: "Será que está aberto?" },
						{ it: "Sa**ran**no gli impie**ga**ti.", pt: "Devem ser os funcionários." },
						{ it: "**Quan**ti **an**ni a**vrà**? Ne a**vrà** venti**cin**que.", pt: "Quantos anos será que ele tem? Deve ter uns vinte e cinco." },
						{ it: "Che **o**re sa**ran**no? Sa**ran**no le **die**ci.", pt: "Que horas devem ser? Devem ser umas dez." }
					]
				},
				{
					type: 'p',
					text: "Para supor sobre o passado, o futuro anterior (lição 70): *sarà già partito* = ele já deve ter saído; *avrà perso il treno* = deve ter perdido o trem."
				},
				{ type: 'h', text: 'O presente no lugar do futuro' },
				{
					type: 'p',
					text: "Para planos certos e próximos, sobretudo com uma data ou um prazo na frase, o italiano falado usa o presente: *torno a Bologna fra due settimane*, *domani andiamo ai Musei Vaticani*. Depois de *quando*, também: *la ritira quando torna* (o senhor retira quando voltar)."
				},
				{
					type: 'dica',
					text: "*Mah!* é a resposta perfeita para uma suposição: dúvida, um ombro levantado. *Quanto costerà? Mah, cento euro?*"
				}
			]
		},
		{
			kind: 'leitura',
			title: 'No banco; sedersi',
			blocks: [
				{
					type: 'p',
					text: "*In banca*, *in ufficio*, *in biblioteca*, *in farmacia*: com vários lugares do dia a dia, *in* e nenhum artigo. Mas *alla posta*, *al bar*, *al supermercato*, *al cinema*. Guarde cada um como você guardou *a casa* e *a scuola* (lição 25)."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "i con**tan**ti", pt: "o dinheiro vivo" },
						{ it: "prele**va**re", pt: "sacar" },
						{ it: "il **con**to cor**ren**te", pt: "a conta-corrente" },
						{ it: "la fi**lia**le", pt: "a agência" },
						{ it: "il **cam**bio", pt: "o câmbio" },
						{ it: "la commis**sio**ne", pt: "a taxa" }
					]
				},
				{
					type: 'p',
					text: "Na Itália, o cartão de débito se chama, na fala, *il bancomat*, como a máquina. E a senha é *il PIN* (“pin”) ou *il codice*. *Il conto*, sozinho, é também a conta do restaurante: o contexto resolve."
				},
				{ type: 'h', text: 'Sedersi' },
				{
					type: 'p',
					text: "*Sedersi* tem um *ie* nas formas em que a força cai no radical: *mi **sie**do, ti **sie**di, si **sie**de, si **sie**dono*. Nas outras, o radical volta a *sed-*: *ci sediamo, vi sedete*. O passado é regular: *mi sono seduto*. E *seduto* é também “sentado”: *sono seduto* = estou sentado."
				},
				{
					type: 'dica',
					text: "No banco, nos correios e em muitas repartições, a fila é por senha: *prendere il numero*. Quando o painel chamar o seu número, vá até o guichê indicado."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che ore saranno? Saranno le dieci.", pt: "Que horas devem ser? Devem ser umas dez." },
				{ it: "La banca sarà chiusa: è domenica.", pt: "O banco deve estar fechado: é domingo." },
				{ it: "Domani vado in banca e poi alla posta.", pt: "Amanhã vou ao banco e depois ao correio." },
				{ it: "Prego, si sieda.", pt: "Por favor, sente-se." },
				{ it: "Ci sediamo qui, vicino alla finestra?", pt: "Vamos sentar aqui, perto da janela?" },
				{ it: "Il bancomat mi ha mangiato la carta.", pt: "O caixa eletrônico engoliu o meu cartão." },
				{ it: "Quanti anni avrà il direttore? Mah, ne avrà cinquanta.", pt: "Quantos anos será que o diretor tem? Sei lá, deve ter uns cinquenta." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Quantos anos será que ele tem? Deve ter uns trinta.", parts: ["Quanti anni ", null, "? Ne avrà trenta."], answers: ["avrà"] },
				{ pt: "Onde será que está o Rafael? Deve estar no banco.", parts: ["Dove sarà Rafael? ", null, " in banca."], answers: ["sarà"] },
				{ pt: "Sente-se, por favor. (com Lei)", parts: ["Si ", null, ", per favore."], answers: ["sieda"] },
				{ pt: "Nós sempre nos sentamos aqui.", parts: ["Ci ", null, " sempre qui."], answers: ["sediamo"] },
				{ pt: "A Chiara está no escritório.", parts: ["Chiara è ", null, " ufficio."], answers: ["in"] }
			]
		}
	]
};

const licao87: Lesson = {
	no: 87,
	kind: 'licao',
	title: "Dal meccanico",
	titlePt: 'Na oficina',
	lines: [
		{
			it: "Buongiorno, ragazzi! Che cos'ha la macchina?",
			pt: "Bom dia, pessoal! O que o carro tem?",
			note: "Os dois alugaram um carro para ir a Tivoli, a meia hora de Roma, mas o passeio começou numa oficina de bairro. *Che cos'ha?* = o que ele tem?, o que há com ele?, para gente e para coisas."
		},
		{
			it: "Stamattina facevo per partire, e si è accesa questa spia rossa. E fa un rumore strano: tac, tac, tac...",
			pt: "Hoje de manhã eu ia sair, e acendeu esta luz vermelha. E faz um barulho estranho: tac, tac, tac...",
			lit: "Esta manhã fazia para partir, e se acendeu esta espia vermelha. E faz um rumor estranho: tac, tac, tac...",
			note: "*Fare per* + infinitivo, quase sempre no imperfeito = estar para, ir fazer algo (e ser interrompido): *facevo per partire* = eu já ia sair. *La spia* é a luz de aviso do painel; *accendersi* = acender-se."
		},
		{ it: "Vediamo un po'. È a noleggio, vero?", pt: "Vamos ver. É alugado, não é?" },
		{
			it: "Sì, l'abbiamo noleggiata due giorni fa.",
			pt: "É, a gente alugou dois dias atrás.",
			note: "*Noleggiare* = alugar (carro, bicicleta, barco); *a noleggio* = alugado; *l'autonoleggio* = a locadora. Para casa, *affittare* (lição 66). *L'abbiamo noleggiata*: o particípio concorda com *la macchina* (lição 34)."
		},
		{
			it: "Eh, è la cinghia: è tutta consumata. Bisogna sostituirla.",
			pt: "É, é a correia: está toda gasta. Precisa trocar.",
			lit: "Eh, é a cinta: é toda consumida. Precisa substituí-la.",
			note: "*Sostituire* = substituir, trocar. Leva *-isc-*, como *finire*: *sostituisco, sostituisci, sostituisce, sostituiamo, sostituite, sostituiscono*. *Consumato* = gasto, desgastado."
		},
		{
			it: "È grave? Non esplode mica, vero?",
			pt: "É grave? Não vai explodir, né?",
			lit: "É grave? Não explode migalha, verdade?",
			note: "*Mica* reforça a negação, como o nosso “não... coisa nenhuma”: *non esplode mica* = não vai explodir de jeito nenhum, né? É muito falado; na escrita formal, quase não aparece."
		},
		{
			it: "Ma no, signorina, mica siamo in un film! Però così non arrivate lontano.",
			pt: "Que nada, senhorita, a gente não está num filme! Mas assim vocês não chegam longe.",
			note: "No começo da frase, *mica* dispensa o *non*: *mica siamo in un film* = *non siamo mica in un film*."
		},
		{
			it: "Dovevamo andare a Tivoli, a vedere Villa d'Este...",
			pt: "A gente ia a Tivoli, ver a Villa d'Este...",
			lit: "Devíamos ir a Tivoli, a ver Villa d'Este...",
			note: "*Dovevamo* (imperfeito de *dovere*) = era para a gente, a gente ia: um plano que não deu certo. A Villa d'Este, em Tivoli, é famosa pelos jardins com centenas de fontes."
		},
		{
			it: "Ve la sostituisco entro mezzogiorno, se il pezzo arriva in tempo.",
			pt: "Eu troco para vocês até o meio-dia, se a peça chegar a tempo.",
			lit: "Vo-la substituo dentro de meio-dia, se a peça chega em tempo.",
			note: "*Entro* = até, no máximo até, dentro de: *entro mezzogiorno*, *entro venerdì*, *entro tre giorni*. É o prazo final. *Ve la* = *vi* + *la* (lição 50). *Il pezzo (di ricambio)* = a peça (de reposição)."
		},
		{
			it: "E quanto ci costerà?",
			pt: "E quanto vai custar para a gente?",
			note: "*Ci* aqui é o pronome indireto, “para nós”: *ci costerà*."
		},
		{
			it: "Tra pezzo e manodopera, sui duecento euro.",
			pt: "Entre peça e mão de obra, uns duzentos euros.",
			note: "*Su* + artigo + número = cerca de, por volta de: *sui duecento euro*, *sui quarant'anni*. *La manodopera* = a mão de obra."
		},
		{
			it: "Duecento euro? Ma io non ho mica la carta: me l'ha mangiata il bancomat!",
			pt: "Duzentos euros? Mas eu nem estou com o cartão: o caixa eletrônico engoliu!",
			note: "*Me l'ha mangiata*: *mi* + *la* (*la carta*), com o particípio concordando (lição 52)."
		},
		{
			it: "Calma, ragazzi. La macchina è a noleggio: il conto lo mando all'agenzia. Voi non pagate niente.",
			pt: "Calma, pessoal. O carro é alugado: a conta eu mando para a locadora. Vocês não pagam nada.",
			note: "*Il conto lo mando*: o objeto vem antes e é retomado pelo pronome, para destacá-lo, como em *il biglietto lo posso comprare* (lição 38)."
		},
		{
			it: "Davvero? Mica male!",
			pt: "Sério? Nada mal!",
			note: "*Mica male* = nada mal, até que bom. Um elogio bem italiano."
		},
		{
			it: "Intanto andate a fare un giro. Qui dietro c'è un bar che fa dei cornetti buonissimi.",
			pt: "Enquanto isso, vão dar uma volta. Aqui atrás tem um bar que faz uns croissants ótimos.",
			note: "*Fare un giro* = dar uma volta. *Dei cornetti*: o partitivo, “uns croissants” (lição 72)."
		},
		{
			it: "Ecco fatto: cinghia nuova. E ho sostituito anche le spazzole del tergicristallo: ve le regalo.",
			pt: "Pronto: correia nova. E troquei também as palhetas do limpador de para-brisa: é presente.",
			lit: "Eis feito: cinta nova. E substituí também as escovas do limpa-cristal: vo-las presenteio.",
			note: "Duas horas depois. *Ve le regalo* = dou para vocês de presente: *vi* + *le*. *Il tergicristallo* = o limpador de para-brisa."
		},
		{ it: "Grazie! Lei è un mago!", pt: "Obrigado! O senhor é um mago!" },
		{
			it: "Per carità! Faccio questo mestiere da quarant'anni. E andate piano, eh!",
			pt: "Imagine! Faço este trabalho há quarenta anos. E vão devagar, hein!",
			note: "*Per carità!* aqui é o segundo sentido: imagine, não foi nada (lição 85). *Il mestiere* = o ofício, a profissão manual. *Da* + presente para o que continua (lição 20)."
		},
		{
			it: "Facevo per uscire, quando ha cominciato a piovere.",
			pt: "Eu ia sair quando começou a chover.",
			sep: true
		},
		{ it: "Devo consegnare la tesi entro la fine del mese.", pt: "Tenho que entregar a dissertação até o fim do mês." },
		{ it: "L'italiano non è mica difficile, per un brasiliano!", pt: "O italiano não é nada difícil, para um brasileiro!" }
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Mica, fare per, entro',
			blocks: [
				{
					type: 'p',
					text: "*Mica* vem de “migalha”: *non... mica* era “nem uma migalha”. Hoje reforça a negação, com um tom de “de jeito nenhum”, “olha lá”, e é típico da conversa."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non es**plo**de **mi**ca, **ve**ro?", pt: "Não vai explodir, né?" },
						{ it: "**Mi**ca **sia**mo in un **film**!", pt: "A gente não está num filme!" },
						{ it: "Non sono **mi**ca **stan**co.", pt: "Não estou nada cansado." },
						{ it: "**Mi**ca **ma**le!", pt: "Nada mal!" }
					]
				},
				{
					type: 'p',
					text: "Depois do verbo, *mica* pede *non*: *non è mica facile*. No começo da frase, sozinho: *mica è facile*. E *mica male* (nada mal) é um elogio contido, muito usado."
				},
				{ type: 'h', text: 'Fare per' },
				{
					type: 'p',
					text: "*Fare per* + infinitivo, no imperfeito, conta o que alguém ia fazer quando foi interrompido: *facevo per partire, e si è accesa una spia*; *faceva per rispondere, ma il telefono ha smesso di squillare*. É parecido com *stare per* (lição 64), mas com o gesto já começado."
				},
				{ type: 'h', text: 'Entro' },
				{
					type: 'p',
					text: "*Entro* marca o prazo máximo: *entro mezzogiorno* (até o meio-dia, no máximo), *entro venerdì*, *entro tre giorni* (dentro de três dias). Compare com *fino a*, que marca a duração: *lavoro fino alle sei* = trabalho até as seis, o tempo todo; *finisco entro le sei* = termino antes das seis."
				},
				{
					type: 'dica',
					text: "*Sostituire* tem o *-isc-* de *finire* e *capire*: *ve la sostituisco*, *chi sostituisce il professore?*. O mesmo vale para *restituire* (devolver), da lição 86: *te lo restituisco domani*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O carro e a oficina',
			blocks: [
				{
					type: 'p',
					text: "Algumas palavras para quando o carro der problema na Itália:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "l'offi**ci**na, il mec**ca**nico", pt: "a oficina, o mecânico" },
						{ it: "la **gom**ma bu**ca**ta", pt: "o pneu furado" },
						{ it: "i **fre**ni, la batte**ri**a, il mo**to**re", pt: "os freios, a bateria, o motor" },
						{ it: "il preven**ti**vo", pt: "o orçamento" },
						{ it: "fare il **pie**no", pt: "encher o tanque" },
						{ it: "il carroat**trez**zi", pt: "o guincho" }
					]
				},
				{
					type: 'p',
					text: "Antes de deixar o carro, peça *un preventivo*, o orçamento. Na hora de pagar, você recebe *la fattura* ou *la ricevuta*. No posto, quase todas as bombas são de autoatendimento (*self-service*); com frentista, é *servito* e custa um pouco mais."
				},
				{
					type: 'dica',
					text: "Lembre: o carro é *la macchina* (lição 0). E o pneu é *la gomma* (a borracha) ou *lo pneumatico*; *la ruota* é a roda."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non è mica facile trovare parcheggio a Roma.", pt: "Não é nada fácil achar vaga em Roma." },
				{ it: "Facevo per uscire, quando è arrivato Matteo.", pt: "Eu ia sair quando o Matteo chegou." },
				{ it: "Il meccanico ha sostituito la cinghia.", pt: "O mecânico trocou a correia." },
				{ it: "Devo finire tutto entro venerdì.", pt: "Tenho que terminar tudo até sexta." },
				{ it: "Quanto costa? Sui cinquanta euro.", pt: "Quanto custa? Uns cinquenta euros." },
				{ it: "La macchina è a noleggio: il conto lo paga l'agenzia.", pt: "O carro é alugado: a conta quem paga é a locadora." },
				{ it: "Che cos'ha la macchina? Fa un rumore strano.", pt: "O que o carro tem? Está fazendo um barulho estranho." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Não estou nada cansado!", parts: ["Non sono ", null, " stanco!"], answers: ["mica"] },
				{ pt: "Tenho que terminar até sexta.", parts: ["Devo finire ", null, " venerdì."], answers: ["entro"] },
				{ pt: "Eu substituo a lâmpada.", parts: ["Io ", null, " la lampadina."], answers: ["sostituisco"] },
				{ pt: "Eu ia sair quando o telefone tocou.", parts: ["Facevo ", null, " uscire quando ha squillato il telefono."], answers: ["per"] },
				{ pt: "Nada mal, este restaurante!", parts: ["Mica ", null, ", questo ristorante!"], answers: ["male"] }
			]
		}
	]
};

const licao88: Lesson = {
	no: 88,
	kind: 'licao',
	title: 'Il portafoglio',
	titlePt: 'A carteira',
	lines: [
		{
			it: "Rafa... il portafoglio! Non ce l'ho più!",
			pt: "Rafa... a carteira! Sumiu!",
			lit: "Rafa... a carteira! Não a tenho mais!",
			note: "Fim de tarde, num bar perto da Piazza Navona. Na hora de pagar, a Larissa abre a bolsa e..."
		},
		{
			it: "Calma. Hai guardato bene nello zaino? Sotto il computer?",
			pt: "Calma. Você olhou direito na mochila? Embaixo do computador?",
			note: "O Rafael fala por experiência: em Nápoles, o passaporte dele sempre aparecia *nello zaino, sotto il computer* (lição 15)."
		},
		{
			it: "E quando te ne sei accorta?",
			pt: "E quando você percebeu?",
			lit: "E quando te disso és apercebida?",
			note: "*Accorgersi* (“ak-kór-djer-si”) = perceber, dar-se conta. É reflexivo, faz o passado com *essere*, e o particípio é irregular: *accorto*. *Accorgersi di qualcosa*; com *ne* no lugar do *di qualcosa*: *te ne sei accorta?* = você se deu conta disso?"
		},
		{
			it: "Adesso, alla cassa. In metro l'avevo ancora, ne sono sicura.",
			pt: "Agora, no caixa. No metrô eu ainda estava com ela, tenho certeza.",
			note: "*L'avevo* = eu a tinha: o imperfeito (lição 63) para uma situação que durava. *Ne sono sicura* = tenho certeza disso."
		},
		{
			it: "Buonasera. Prego, si accomodino. Che cosa è successo?",
			pt: "Boa noite. Por favor, sentem-se. O que aconteceu?",
			note: "Meia hora depois, no *commissariato*, a delegacia da Polizia di Stato. *Si accomodino* = sentem-se, com *Loro*, o plural muito formal (lição 51)."
		},
		{
			it: "Mia sorella ha perso il portafoglio. O gliel'hanno rubato, non sappiamo.",
			pt: "A minha irmã perdeu a carteira. Ou roubaram dela, não sabemos.",
			lit: "Minha irmã perdeu a carteira. Ou lha roubaram, não sabemos.",
			note: "*Gliel'hanno rubato* = roubaram dela: *gli* (que serve também para *le*, a ela) + *lo* = *glielo* (lição 50)."
		},
		{
			it: "Dove è accaduto, più o meno? E a che ora?",
			pt: "Onde aconteceu, mais ou menos? E a que horas?",
			note: "*Accadere* = acontecer, como *succedere*, mas mais formal: é a palavra da polícia, do jornal, dos livros. Também com *essere*: *è accaduto*."
		},
		{ it: "Oggi pomeriggio, sulla metro, verso le quattro.", pt: "Hoje à tarde, no metrô, lá pelas quatro." },
		{
			it: "E com'è fatto, questo portafoglio?",
			pt: "E como ela é, essa carteira?",
			lit: "E como é feito, esta carteira?",
			note: "*Com'è fatto?* = como ele é?, para descrever um objeto ou uma pessoa. *Il portafoglio* é masculino."
		},
		{
			it: "È verde, piccolo, con un adesivo della bandiera brasiliana.",
			pt: "É verde, pequena, com um adesivo da bandeira do Brasil."
		},
		{
			it: "Un attimo... Oggi ce ne hanno portati due, e sono verdi tutti e due. È questo?",
			pt: "Um momento... Hoje trouxeram duas, e as duas são verdes. É esta?",
			lit: "Um átimo... Hoje nos disso trouxeram dois, e são verdes todos e dois. É este?",
			note: "*Ce ne hanno portati due* = nos trouxeram duas: *ci* + *ne*, com o particípio concordando com *ne* (lição 40)."
		},
		{
			it: "No, questo no. Dentro c'è la foto di un signore con i baffi!",
			pt: "Não, esta não. Dentro tem a foto de um senhor de bigode!",
			note: "*I baffi* = o bigode, no plural, como *gli occhiali* (lição 50)."
		},
		{
			it: "Allora vediamo l'altro... Bandiera brasiliana. Ecco qua.",
			pt: "Então vamos ver a outra... Bandeira brasileira. Aqui está."
		},
		{
			it: "È il mio! Questa sì che è fortuna!",
			pt: "É a minha! Isso é que é sorte!",
			lit: "É o meu! Esta sim que é fortuna!",
			note: "*Questa sì che è...* = isso sim é..., isso é que é...: dá ênfase. *Questo sì che è un bel caffè!* Para dizer “sorte”, *la fortuna*; *che fortuna!* = que sorte!"
		},
		{
			it: "Soldi, carta, documento... c'è tutto! Ma chi l'ha portato qui?",
			pt: "Dinheiro, cartão, documento... está tudo aqui! Mas quem trouxe?"
		},
		{
			it: "Una signora anziana. L'ha trovato su un sedile e non ha voluto lasciare neanche il nome.",
			pt: "Uma senhora de idade. Achou num banco do metrô e não quis deixar nem o nome.",
			note: "*Il sedile* = o assento (de ônibus, trem, carro). *Neanche* = nem (lição 40)."
		},
		{
			it: "Che brava! Uno arriva a Roma con la paura dei borseggiatori, e poi trova gente così.",
			pt: "Que gente boa! A gente chega a Roma com medo dos batedores de carteira, e depois encontra gente assim.",
			lit: "Que brava! Um chega a Roma com o medo dos batedores, e depois encontra gente assim.",
			note: "*Bravo, brava* = competente (*un bravo meccanico*) e também honesto, de bem: *una brava signora*, *un bravo ragazzo*. Nunca “zangado”. *Uno* + verbo na terceira pessoa é outro jeito de falar em geral, como o nosso “a gente” ou “você”: *uno arriva...* = a gente chega... *Il borseggiatore* = o batedor de carteira."
		},
		{
			it: "Eh, basta un attimo, e può capitare a chiunque. Ma la prossima volta, signorina, lo tenga nella tasca davanti!",
			pt: "Pois é, basta um instante, e pode acontecer com qualquer um. Mas da próxima vez, senhorita, guarde no bolso da frente!",
			lit: "Eh, basta um átimo, e pode acontecer a qualquer um. Mas a próxima vez, senhorita, o tenha no bolso da frente!",
			note: "*Chiunque* = qualquer um, quem quer que seja. *Tenga*: imperativo de *Lei* de *tenere* (lição 78)."
		},
		{
			it: "Uno non sa mai che cosa può succedere.",
			pt: "A gente nunca sabe o que pode acontecer.",
			sep: true
		},
		{ it: "Questo sì che è un bel caffè!", pt: "Isso sim é um bom café!" },
		{
			it: "Non mi sono accorto dell'ora: è già mezzanotte!",
			pt: "Não vi a hora passar: já é meia-noite!",
			lit: "Não me sou apercebido da hora: é já meia-noite!"
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Accorgersi, uno, bravo',
			blocks: [
				{
					type: 'p',
					text: "*Accorgersi* (perceber, notar) é um reflexivo com particípio irregular, *accorto*. O que se percebe vem com *di*, e o *di* + coisa vira *ne*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Mi ac**cor**go **sem**pre **tar**di.", pt: "Eu sempre percebo tarde.", pron: "mi ak-kór-go sém-pre tár-di" },
						{ it: "Non mi sono ac**cor**to di **nien**te.", pt: "Não percebi nada." },
						{ it: "Quando te ne sei ac**cor**ta?", pt: "Quando você percebeu?" },
						{ it: "Se n'è ac**cor**ta al **bar**.", pt: "Ela percebeu no bar." }
					]
				},
				{ type: 'h', text: 'Uno = a gente' },
				{
					type: 'p',
					text: "Você já conhece o *si* impessoal (lição 27). *Uno* + verbo na terceira pessoa faz quase o mesmo trabalho, com um tom mais pessoal, de quem fala da própria experiência: *uno arriva a Roma e trova gente così*; *uno non sa mai...*; *se uno vuole, può*. Como o nosso “a gente”, “você”, “um sujeito”."
				},
				{ type: 'h', text: 'Bravo' },
				{
					type: 'p',
					text: "*Bravo* é competente: *un bravo meccanico*, *una brava maestra*. Também é “do bem”, honesto: *una brava signora*, *è un bravo ragazzo*. E sozinho é o elogio *Bravo! Brava!* (lição 12). Para “bravo” no sentido de zangado, o italiano diz *arrabbiato*."
				},
				{
					type: 'dica',
					text: "*Questa sì che è fortuna!* Você pode usar *questo sì che* com qualquer coisa que mereça destaque: *questo sì che è un problema*, *questa sì che è bella!* (essa é boa!)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Polícia e documentos',
			blocks: [
				{
					type: 'p',
					text: "A Itália tem mais de uma polícia. A *Polizia di Stato* atende nos *commissariati* e, nas capitais de província, na *questura*, onde também se tratam as autorizações de residência dos estrangeiros. Os *Carabinieri* são uma força militar que faz trabalho de polícia em todo o país, nas suas *caserme*. E a *Polizia locale* (os *vigili*) cuida do trânsito e da cidade."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "fare la de**nun**cia", pt: "fazer o boletim de ocorrência" },
						{ it: "lo smarri**men**to / il **fur**to", pt: "a perda / o roubo (furto)" },
						{ it: "gli og**get**ti smar**ri**ti", pt: "os achados e perdidos" },
						{ it: "il docu**men**to d'identi**tà**", pt: "o documento de identidade" },
						{ it: "il borseggia**to**re", pt: "o batedor de carteira" }
					]
				},
				{
					type: 'p',
					text: "Perdeu um documento ou foi roubado? Faça a *denuncia* em qualquer delegacia: ela serve para pedir um documento novo e para o seguro. Para o passaporte brasileiro, com a *denuncia* na mão, procure o consulado do Brasil. Em Roma, a embaixada brasileira fica num palácio na própria Piazza Navona."
				},
				{
					type: 'dica',
					text: "O número de emergência na Itália, e em toda a União Europeia, é o 112. Funciona sem crédito no celular."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non mi sono accorto di niente.", pt: "Não percebi nada." },
				{ it: "Quando ve ne siete accorti?", pt: "Quando vocês perceberam?" },
				{ it: "Questa sì che è una bella notizia!", pt: "Isso sim é uma boa notícia!" },
				{ it: "Uno non sa mai cosa può succedere.", pt: "A gente nunca sabe o que pode acontecer." },
				{ it: "Mia sorella ha perso il portafoglio in metro.", pt: "A minha irmã perdeu a carteira no metrô." },
				{ it: "Brava, hai fatto bene!", pt: "Muito bem, você fez certo!" },
				{ it: "Com'è fatto il tuo zaino? È blu, con due tasche.", pt: "Como é a sua mochila? É azul, com dois bolsos." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "A Larissa percebeu tarde demais.", parts: ["Larissa se n'è ", null, " troppo tardi."], answers: ["accorta"] },
				{ pt: "Matteo, você não percebeu nada?", parts: ["Matteo, non ti sei ", null, " di niente?"], answers: ["accorto"] },
				{ pt: "Isso sim é sorte!", parts: ["Questa ", null, " che è fortuna!"], answers: ["sì"] },
				{ pt: "Quando a gente está cansado, erra.", parts: ["Quando ", null, " è stanco, sbaglia."], answers: ["uno"] },
				{ pt: "Fomos à delegacia fazer o boletim de ocorrência.", parts: ["Siamo andati al commissariato a fare la ", null, "."], answers: ["denuncia"] }
			]
		}
	]
};

const licao89: Lesson = {
	no: 89,
	kind: 'licao',
	title: "Sull'autobus",
	titlePt: 'No ônibus',
	lines: [
		{
			it: "Ecco il sessantaquattro! Dai, saliamo!",
			pt: "Olha o sessenta e quatro! Anda, vamos subir!",
			note: "O 64 vai da estação Termini até perto do Vaticano e é famoso por andar sempre lotado. *Salire* = subir, entrar (no ônibus, no trem); *scendere* = descer."
		},
		{
			it: "Ma è pienissimo! Non c'è posto neanche per una formica.",
			pt: "Mas está lotado! Não cabe nem uma formiga.",
			lit: "Mas é cheiíssimo! Não há lugar nem para uma formiga."
		},
		{
			it: "Metti lo zaino davanti e tieni d'occhio il portafoglio.",
			pt: "Põe a mochila na frente e fica de olho na carteira.",
			note: "*Tenere d'occhio* = ficar de olho, vigiar."
		},
		{
			it: "Dopo ieri? Da quel momento in poi, il portafoglio non lo mollo più!",
			pt: "Depois de ontem? Daquele momento em diante, não largo mais a carteira!",
			note: "*Da quel momento in poi* = daquele momento em diante. Também *da oggi in poi*, *da allora in poi*. *Mollare* = largar, soltar (coloquial)."
		},
		{
			it: "Mamma mia, che caldo! E con queste borse...",
			pt: "Minha nossa, que calor! E com estas sacolas...",
			note: "Uma senhora acaba de subir, carregada de sacolas de compras."
		},
		{
			it: "Giovanotto, non vede che la signora è in piedi? Il Suo zaino occupa un posto!",
			pt: "Rapaz, não está vendo que a senhora está de pé? A sua mochila ocupa um lugar!",
			note: "Um senhor se dirige a um rapaz de fones de ouvido, sentado com a mochila no banco ao lado. *Giovanotto* (lição 27). *In piedi* = de pé (lição 27)."
		},
		{
			it: "E allora? Io non ho fatto niente a nessuno!",
			pt: "E daí? Eu não fiz nada para ninguém!",
			note: "Com *niente* e *nessuno* depois do verbo, o *non* vem antes, como em português: *non ho fatto niente a nessuno*."
		},
		{
			it: "Appunto, niente! Oggi nessuno si alza più per gli anziani!",
			pt: "Justamente, nada! Hoje em dia ninguém se levanta mais para os idosos!",
			note: "Antes do verbo, *nessuno* sozinho já nega: *nessuno si alza*, sem *non*. Também como em português: “ninguém se levanta”."
		},
		{
			it: "Anziana io? Ma come si permette?",
			pt: "Idosa, eu? Mas como o senhor se atreve?",
			lit: "Anciã eu? Mas como se permite?",
			note: "*Come si permette?* = como ousa?, quem o senhor pensa que é? (com *Lei*). Com *tu*: *come ti permetti?*"
		},
		{
			it: "Ma signora, volevo solo aiutarLa!",
			pt: "Mas, minha senhora, eu só queria ajudar!",
			note: "*AiutarLa* = ajudar a senhora: o *La* de cortesia (lição 41) colado no infinitivo."
		},
		{
			it: "Basta, niente storie! Ognuno al suo posto, e lo zaino per terra!",
			pt: "Chega, nada de confusão! Cada um no seu lugar, e a mochila no chão!",
			lit: "Basta, nada de histórias! Cada um ao seu lugar, e a mochila por terra!",
			note: "É o motorista, pelo retrovisor. *Niente storie!* = nada de confusão, sem discussão, sem manha. *Ognuno* = cada um, sempre no singular."
		},
		{
			it: "Va be', va be'... Prego, signora, si sieda.",
			pt: "Tá bom, tá bom... Por favor, senhora, sente-se.",
			note: "*Si sieda*, como na lição 86."
		},
		{
			it: "Grazie, caro. Vede? Lei è un bravo ragazzo.",
			pt: "Obrigada, querido. Viu? Você é um bom rapaz.",
			note: "*Bravo* no sentido de “do bem”, como na lição 88."
		},
		{
			it: "E io? Io niente?",
			pt: "E eu? Para mim, nada?"
		},
		{
			it: "Lei, invece, mi ha dato della vecchia!",
			pt: "O senhor, ao contrário, me chamou de velha!",
			lit: "O senhor, ao invés, me deu da velha!",
			note: "*Dare del* + adjetivo = chamar de: *mi ha dato della vecchia*, *mi ha dato dello stupido*. É a mesma estrutura de *dare del tu*, *dare del Lei* (lição 27)."
		},
		{
			it: "Rafa, ho capito quasi tutto! E ciascuno aveva ragione a modo suo.",
			pt: "Rafa, entendi quase tudo! E cada um tinha razão do seu jeito.",
			note: "*Ciascuno* = cada um, igual a *ognuno*, um pouco mais formal. *A modo suo* = do seu jeito."
		},
		{
			it: "Benvenuta a Roma. Qui ci si abitua a tutto, anche alle discussioni sull'autobus.",
			pt: "Bem-vinda a Roma. Aqui a gente se acostuma com tudo, até com as discussões no ônibus.",
			lit: "Bem-vinda a Roma. Aqui nos se habitua a tudo, também às discussões sobre o ônibus.",
			note: "*Abituarsi a* = acostumar-se com. Com um verbo reflexivo, o *si* impessoal vira *ci si*, para não repetir *si si*: *ci si abitua* = a gente se acostuma. Você vai ver isso com calma na revisão."
		},
		{
			it: "Alla festa non è venuto nessuno. Nessuno è venuto alla festa.",
			pt: "Ninguém veio à festa. Ninguém veio à festa.",
			lit: "À festa não é vindo ninguém. Ninguém é vindo à festa.",
			sep: true,
			note: "As duas posições, com o mesmo sentido: depois do verbo, com *non*; antes, sem."
		},
		{ it: "Ciascuno di noi paga il suo biglietto.", pt: "Cada um de nós paga a sua passagem." },
		{
			it: "Da quel giorno in poi, Larissa tiene sempre il portafoglio in mano.",
			pt: "Daquele dia em diante, a Larissa sempre leva a carteira na mão.",
			note: "*In mano* = na mão (lição 73)."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'Niente, nessuno, ognuno, ciascuno',
			blocks: [
				{
					type: 'p',
					text: "*Niente* (nada) e *nessuno* (ninguém) funcionam como em português. Depois do verbo, pedem *non* antes dele; antes do verbo, negam sozinhos."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Non ho **fat**to **nien**te a nes**su**no!", pt: "Não fiz nada para ninguém!" },
						{ it: "Nes**su**no si **al**za per gli an**zia**ni.", pt: "Ninguém se levanta para os idosos." },
						{ it: "**Nien**te è **co**me **pri**ma.", pt: "Nada é como antes." },
						{ it: "Non c'è nes**su**no.", pt: "Não tem ninguém." }
					]
				},
				{
					type: 'p',
					text: "Antes de substantivo, *nessuno* funciona como o artigo *uno*: *nessun problema*, *nessuno studente*, *nessuna idea*, sempre no singular. E sozinho, *niente* também responde: *Che cosa hai comprato? Niente.*"
				},
				{ type: 'h', text: 'Ognuno e ciascuno' },
				{
					type: 'p',
					text: "*Ognuno* e *ciascuno* querem dizer “cada um” e pedem o verbo no singular: *ognuno paga il suo biglietto*. *Ciascuno* é um pouco mais formal. Os dois têm feminino: *ognuna*, *ciascuna di noi*. Antes de substantivo, use *ogni*, que não muda nunca (*ogni giorno*, *ogni volta*)."
				},
				{
					type: 'dica',
					text: "*Niente storie!* é o que pais dizem a crianças na hora de dormir, e motoristas a passageiros: “sem discussão!”. *Fare storie* = fazer manha, criar caso."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Pronúncia: a melodia de uma discussão',
			blocks: [
				{
					type: 'p',
					text: "Numa discussão, a voz italiana trabalha muito. As frases ficam mais curtas, as sílabas fortes ficam mais fortes, e a melodia sobe e desce bem mais do que numa conversa calma. Ouça o diálogo outra vez prestando atenção só nisso."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "E al**lo**ra?", pt: "E daí? A voz sobe forte no fim, em desafio.", pron: "e al-lô-ra" },
						{ it: "Ap**pun**to!", pt: "Justamente! Uma batida só, no “pun”, e a voz cai.", pron: "ap-pún-to" },
						{ it: "Ma **co**me si per**met**te?", pt: "O *ma* se alonga; a voz sobe em *come* e desaba no fim.", pron: "ma kô-me si per-mêt-te" },
						{ it: "**Ba**sta, **nien**te **sto**rie!", pt: "Três batidas fortes, sem pressa, e a voz desce no fim.", pron: "bás-ta, nién-te stó-rie" },
						{ it: "E **i**o? **I**o **nien**te?", pt: "Pergunta de queixa: a voz sobe e fica lá em cima.", pron: "e í-o? í-o nién-te?" }
					]
				},
				{
					type: 'p',
					text: "Repare no *ma* do começo, que quase não tem sentido próprio: ele só abre o protesto (*Ma signora...*, *Ma come si permette?*, *Ma che dice!*). Esticá-lo um pouco já dá à frase o tom certo."
				},
				{
					type: 'dica',
					text: "Ouvido de brasileiro, uma conversa animada entre italianos às vezes parece briga. Quase sempre não é: o volume e a melodia altos fazem parte do jeito de falar, sobretudo no centro e no sul."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Non è venuto nessuno.", pt: "Ninguém veio." },
				{ it: "Nessuno mi ha detto niente.", pt: "Ninguém me disse nada." },
				{ it: "Ognuno paga il suo caffè.", pt: "Cada um paga o seu café." },
				{ it: "Ciascuno di noi ha un biglietto.", pt: "Cada um de nós tem uma passagem." },
				{ it: "Niente storie: a letto!", pt: "Sem discussão: para a cama!" },
				{ it: "Da quel momento in poi, non ho più perso il portafoglio.", pt: "Daquele momento em diante, nunca mais perdi a carteira." },
				{ it: "L'autobus era pieno: non c'era posto neanche per una formica.", pt: "O ônibus estava lotado: não cabia nem uma formiga." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Não vi ninguém.", parts: ["Non ho visto ", null, "."], answers: ["nessuno"] },
				{ pt: "Aqui ninguém sabe nada.", parts: ["Qui nessuno sa ", null, "."], answers: ["niente"] },
				{ pt: "Nada de confusão!", parts: ["Niente ", null, "!"], answers: ["storie"] },
				{ pt: "Daquele momento em diante...", parts: ["Da quel momento in ", null, "..."], answers: ["poi"] },
				{ pt: "Ele me chamou de velha!", parts: ["Mi ha dato della ", null, "!"], answers: ["vecchia"] }
			]
		}
	]
};

const licao90: Lesson = {
	no: 90,
	kind: 'licao',
	title: 'Come funziona la Repubblica',
	titlePt: 'Como funciona a República',
	lines: [
		{
			it: "Guarda, Rafa: Montecitorio! Qui si riunisce la Camera dei deputati.",
			pt: "Olha, Rafa: Montecitorio! Aqui se reúne a Câmara dos Deputados.",
			note: "Para quem estuda direito, como a Larissa, o Palazzo Montecitorio é passeio obrigatório. *Riunirsi* = reunir-se (com *-isc-*: *si riunisce*)."
		},
		{
			it: "Lo so, futura avvocata. C'è anche un pannello per i turisti: leggilo tu.",
			pt: "Eu sei, futura advogada. Tem também um painel para os turistas: lê você.",
			note: "*Leggilo* = lê isso: imperativo de *tu* com o pronome no fim (lição 71). *Avvocata* é o feminino de *avvocato*, cada vez mais usado."
		},
		{
			it: "La Repubblica italiana nacque il 2 giugno 1946.",
			pt: "A República italiana nasceu em 2 de junho de 1946.",
			note: "A Larissa lê o painel. *Nacque* = nasceu. É o **passato remoto**, um tempo do passado usado sobretudo na escrita. Por enquanto, basta reconhecê-lo. Na fala, *è nata* (lição 45)."
		},
		{
			it: "Quel giorno, con un referendum, gli italiani scelsero tra la monarchia e la repubblica.",
			pt: "Naquele dia, num plebiscito, os italianos escolheram entre a monarquia e a república.",
			note: "*Scelsero* = escolheram (passato remoto de *scegliere*). Na fala, *hanno scelto* (lição 60)."
		},
		{
			it: "Nacque? Scelsero? Ma che tempo è? Al bar non l'ho mai sentito!",
			pt: "Nasceu? Escolheram? Mas que tempo é esse? No bar eu nunca ouvi!"
		},
		{
			it: "È il passato remoto. Si usa soprattutto nei libri, e quando si racconta la storia.",
			pt: "É o passato remoto. É usado sobretudo nos livros, e quando se conta a história.",
			lit: "É o passado remoto. Se usa sobretudo nos livros, e quando se conta a história."
		},
		{
			it: "Senti come continua: vinse la repubblica, e per la prima volta votarono anche le donne.",
			pt: "Escuta como continua: a república venceu, e pela primeira vez as mulheres também votaram.",
			lit: "Ouve como continua: venceu a república, e pela primeira vez votaram também as mulheres.",
			note: "*Vinse* (de *vincere*, vencer) e *votarono* (de *votare*): mais dois passati remoti. Os verbos em *-are* fazem *-ò* e *-arono*: *votò, votarono*."
		},
		{
			it: "E il re? Che fine ha fatto?",
			pt: "E o rei? Que fim levou?",
			lit: "E o rei? Que fim fez?",
			note: "*Che fine ha fatto?* = que fim levou?, o que aconteceu com ele?"
		},
		{
			it: "Partì per il Portogallo pochi giorni dopo, e non tornò più.",
			pt: "Partiu para Portugal poucos dias depois, e nunca mais voltou.",
			note: "*Partì, tornò*: no passato remoto, a terceira pessoa do singular leva acento no fim (*-ò* nos verbos em *-are*, *-ì* nos em *-ire*)."
		},
		{
			it: "La Costituzione fu scritta dall'Assemblea Costituente ed entrò in vigore il primo gennaio 1948.",
			pt: "A Constituição foi escrita pela Assembleia Constituinte e entrou em vigor em 1º de janeiro de 1948.",
			lit: "A Constituição foi escrita da Assembleia Constituinte e entrou em vigor o primeiro janeiro 1948.",
			note: "*Fu scritta da...* = foi escrita por...: a **voz passiva**, com *essere* + particípio + *da* para quem faz a ação. *Fu* = foi (passato remoto de *essere*). O particípio concorda com o sujeito: *la Costituzione* → *scritta*."
		},
		{
			it: "E oggi come funziona? Chi comanda?",
			pt: "E hoje, como funciona? Quem manda?"
		},
		{
			it: "Il Parlamento è formato da due Camere: la Camera dei deputati, qui, e il Senato, a Palazzo Madama.",
			pt: "O Parlamento é formado por duas Câmaras: a Câmara dos Deputados, aqui, e o Senado, no Palazzo Madama.",
			note: "*È formato da* = é formado por. Na voz passiva, o “por” do português é *da*, com artigo quando precisa: *dal, dalla, dai*..."
		},
		{
			it: "Deputati e senatori sono eletti dai cittadini maggiorenni.",
			pt: "Deputados e senadores são eleitos pelos cidadãos maiores de idade.",
			note: "*Maggiorenne* = maior de idade (18 anos); *minorenne* = menor de idade. Os dois servem para homem e mulher. *Eletto* é o particípio irregular de *eleggere*, eleger."
		},
		{
			it: "Come da noi, allora: si vota a diciotto anni.",
			pt: "Como lá em casa, então: vota-se aos dezoito anos.",
			note: "*Da noi* = no nosso país, entre nós (lição 30)."
		},
		{
			it: "Anzi, in Brasile si può votare già a sedici! E qui il Presidente della Repubblica non è eletto dal popolo, ma dal Parlamento.",
			pt: "Aliás, no Brasil já se pode votar aos dezesseis! E aqui o Presidente da República não é eleito pelo povo, mas pelo Parlamento.",
			note: "*Anzi* = aliás, ou melhor, pelo contrário (lição 74)."
		},
		{
			it: "Allora è lui che governa?",
			pt: "Então é ele que governa?"
		},
		{
			it: "No, il governo è guidato dal Presidente del Consiglio. Il Presidente della Repubblica resta in carica sette anni e fa un po' da arbitro.",
			pt: "Não, o governo é chefiado pelo Presidente do Conselho. O Presidente da República fica no cargo sete anos e serve um pouco de árbitro.",
			lit: "Não, o governo é guiado do Presidente do Conselho. O Presidente da República fica em cargo sete anos e faz um pouco de árbitro.",
			note: "*Il Presidente del Consiglio (dei ministri)* é o chefe do governo, o primeiro-ministro. *Restare in carica* = ficar no cargo. *Fare da* = servir de, fazer o papel de."
		},
		{
			it: "Brava! Un giorno tornerai a Roma come ambasciatrice del Brasile.",
			pt: "Muito bem! Um dia você vai voltar a Roma como embaixadora do Brasil.",
			note: "*Ambasciatore, ambasciatrice*: o feminino em *-trice*, como *attore, attrice*."
		},
		{
			it: "La Divina Commedia fu scritta da Dante.",
			pt: "A Divina Comédia foi escrita por Dante.",
			sep: true
		},
		{
			it: "Il Colosseo è visitato da milioni di turisti ogni anno.",
			pt: "O Coliseu é visitado por milhões de turistas todo ano."
		},
		{
			it: "Larissa è maggiorenne: ha diciannove anni.",
			pt: "A Larissa é maior de idade: tem dezenove anos."
		}
	],
	steps: [
		{ kind: 'ouvir' },
		{ kind: 'ler' },
		{ kind: 'repetir' },
		{
			kind: 'leitura',
			title: 'A voz passiva',
			blocks: [
				{
					type: 'p',
					text: "A voz passiva italiana se monta como a portuguesa: *essere* + particípio, que concorda com o sujeito. Quem faz a ação vem com *da* (o nosso “por”), que se junta ao artigo: *dal Parlamento*, *dalla signora*, *dai cittadini*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Il Presi**den**te è e**let**to dal Parla**men**to.", pt: "O Presidente é eleito pelo Parlamento." },
						{ it: "I sena**to**ri sono e**let**ti dai citta**di**ni.", pt: "Os senadores são eleitos pelos cidadãos." },
						{ it: "La Costitu**zio**ne fu **scrit**ta dall'As**sem**blea.", pt: "A Constituição foi escrita pela Assembleia." },
						{ it: "Il portafo**glio** è **sta**to tro**va**to da una si**gno**ra.", pt: "A carteira foi encontrada por uma senhora." }
					]
				},
				{
					type: 'p',
					text: "Repare no último exemplo: no passato prossimo, a passiva tem dois particípios, *è stato trovato* (foi encontrado), *è stata scritta* (foi escrita), e os dois concordam."
				},
				{
					type: 'p',
					text: "Na conversa, a passiva é menos comum que na escrita. O italiano prefere a frase ativa (*una signora ha trovato il portafoglio*), o *si* (*qui si vota a diciotto anni*) ou o objeto na frente com pronome (*il portafoglio l'ha trovato una signora*)."
				},
				{
					type: 'dica',
					text: "Nos jornais e nos avisos você também vai ver *venire* no lugar de *essere*: *il Presidente viene eletto ogni sette anni*. O sentido é o mesmo."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O passato remoto: só para reconhecer',
			blocks: [
				{
					type: 'p',
					text: "O italiano tem dois tempos para o passado concluído. O *passato prossimo* (*è nata, hanno scelto*) é o da conversa, e você o usa desde a lição 29. O *passato remoto* (*nacque, scelsero*) é o dos livros, dos romances, da história e dos contos de fada. Você não precisa usá-lo; precisa só reconhecê-lo quando ler."
				},
				{ type: 'h', text: 'A terceira pessoa, a que mais aparece' },
				{
					type: 'exemplos',
					items: [
						{ it: "vo**tò** / vo**ta**rono", pt: "*votare*: votou / votaram" },
						{ it: "cre**dé** (cre**det**te) / cre**de**rono", pt: "*credere*: acreditou / acreditaram" },
						{ it: "par**tì** / par**ti**rono", pt: "*partire*: partiu / partiram" },
						{ it: "fu / **fu**rono", pt: "*essere*: foi / foram" },
						{ it: "**eb**be / **eb**bero", pt: "*avere*: teve / tiveram" },
						{ it: "**fe**ce, **dis**se, **nac**que, **scel**se, **vin**se, **ven**ne", pt: "fez, disse, nasceu, escolheu, venceu, veio" }
					]
				},
				{
					type: 'p',
					text: "Os irregulares são muitos, mas quase sempre lembram o infinitivo: *scegliere* → *scelse*, *vincere* → *vinse*, *venire* → *venne*. É assim que começam e terminam as fábulas: *C'era una volta un re...* (era uma vez um rei) ... *e vissero felici e contenti* (e viveram felizes para sempre)."
				},
				{
					type: 'p',
					text: "Na fala, depende da região. No norte, quase ninguém usa o *passato remoto*. Em partes do sul, sobretudo na Sicília, ele é usado também na conversa, até para coisas de ontem. Na Toscana, aparece para fatos mais distantes."
				},
				{
					type: 'dica',
					text: "Para o brasileiro, o sentido não tem mistério: *nacque*, *scelsero*, *partì* correspondem ao nosso pretérito, “nasceu”, “escolheram”, “partiu”. Na hora de falar, continue com o *passato prossimo*, que você já domina."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "La lettera è stata scritta da mia sorella.", pt: "A carta foi escrita pela minha irmã." },
				{ it: "I deputati sono eletti dai cittadini.", pt: "Os deputados são eleitos pelos cidadãos." },
				{ it: "Il Presidente resta in carica sette anni.", pt: "O Presidente fica no cargo sete anos." },
				{ it: "Dante nacque a Firenze.", pt: "Dante nasceu em Florença." },
				{ it: "Il re partì e non tornò più.", pt: "O rei partiu e nunca mais voltou." },
				{ it: "In Italia si diventa maggiorenni a diciotto anni.", pt: "Na Itália a pessoa se torna maior de idade aos dezoito anos." },
				{ it: "Questo palazzo è visitato da tanti studenti.", pt: "Este palácio é visitado por muitos estudantes." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "O Parlamento é formado por duas Câmaras.", parts: ["Il Parlamento è formato ", null, " due Camere."], answers: ["da"] },
				{ pt: "A Constituição foi escrita pela Assembleia Constituinte.", parts: ["La Costituzione fu scritta ", null, "Assemblea Costituente."], answers: ["dall'"] },
				{ pt: "Os senadores são eleitos pelos cidadãos.", parts: ["I senatori sono ", null, " dai cittadini."], answers: ["eletti"] },
				{ pt: "A Larissa é maior de idade.", parts: ["Larissa è ", null, "."], answers: ["maggiorenne"] },
				{ pt: "A República nasceu em 1946. (passato remoto)", parts: ["La Repubblica ", null, " nel 1946."], answers: ["nacque"] }
			]
		}
	]
};

const licao91: Lesson = {
	no: 91,
	kind: 'revisao',
	title: 'Ripasso',
	titlePt: 'Revisão',
	steps: [
		{
			kind: 'leitura',
			title: 'Succedere, capitare, accadere',
			blocks: [
				{
					type: 'p',
					text: "Uma semana em Roma, e quanta coisa aconteceu! Justamente: o italiano tem três verbos para “acontecer”. Os três fazem o passado com *essere*, e o que acontece com alguém vem com *a*: *è successo a me*, *può capitare a chiunque*."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Che cosa è successo?", pt: "*succedere*: o mais comum, para tudo. (lição 88)" },
						{ it: "Ha sbagliato il PIN? Succede spesso.", pt: "Errou a senha? Acontece muito. (lição 86)" },
						{ it: "Capita, capita.", pt: "*capitare*: acontecer por acaso, de vez em quando. (lição 85)" },
						{ it: "Può capitare a chiunque.", pt: "Pode acontecer com qualquer um. (lição 88)" },
						{ it: "Dove è accaduto, più o meno?", pt: "*accadere*: o mais formal, da polícia e do jornal. (lição 88)" }
					]
				},
				{
					type: 'p',
					text: "*Capitare* tem outros usos práticos. *Mi è capitato di...* = aconteceu de eu...: *mi è capitato di perdere il treno*. E também “aparecer, passar por um lugar”: *se capiti a Bologna, chiamami* (se você passar por Bolonha, me liga)."
				},
				{
					type: 'dica',
					text: "Para consolar alguém depois de um contratempo, a frase pronta é *Sono cose che capitano* (são coisas que acontecem)."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'O si impessoal e o ci si',
			blocks: [
				{
					type: 'p',
					text: "Desde a lição 27 você usa o *si* impessoal: *si* + verbo na terceira pessoa, para falar do que se faz em geral. Com um substantivo no plural, o verbo vai para o plural."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Si passa davanti al bar e si va sempre dritto.", pt: "Passa-se na frente do bar e vai-se sempre reto. (lição 85)" },
						{ it: "Qui si possono cambiare dollari?", pt: "Aqui dá para trocar dólares? (lição 86)" },
						{ it: "Si usa soprattutto nei libri.", pt: "É usado sobretudo nos livros. (lição 90)" },
						{ it: "In Brasile si può votare già a sedici anni.", pt: "No Brasil já se pode votar aos dezesseis. (lição 90)" }
					]
				},
				{ type: 'h', text: 'Ci si: com os verbos reflexivos' },
				{
					type: 'p',
					text: "E se o verbo já é reflexivo, como *abituarsi*, *alzarsi*, *divertirsi*? O italiano não diz *si si*: o primeiro *si* vira *ci*. *Ci si abitua a tutto* (lição 89) = a gente se acostuma com tudo."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "In campagna ci si alza presto.", pt: "No campo a gente se levanta cedo." },
						{ it: "Con gli amici ci si diverte sempre.", pt: "Com os amigos a gente sempre se diverte." },
						{ it: "Quando si è stanchi, si sbaglia il PIN.", pt: "Quando a gente está cansado, erra a senha." }
					]
				},
				{
					type: 'p',
					text: "No último exemplo, repare: com *si è* + adjetivo, o adjetivo vai para o plural, *stanchi*, mesmo com o verbo no singular. E no passado o *si* impessoal usa sempre *essere*: *ieri si è mangiato benissimo*."
				},
				{
					type: 'dica',
					text: "Lembre do primo do *si*, o *uno* da lição 88: *uno arriva a Roma e trova gente così*. É mais coloquial e tem um tom de experiência própria."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Niente e nessuno',
			blocks: [
				{
					type: 'p',
					text: "As palavras negativas seguem a mesma regra do português. Depois do verbo, o verbo leva *non* antes; antes do verbo, elas negam sozinhas."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Io non ho fatto niente a nessuno!", pt: "Eu não fiz nada para ninguém! (lição 89)" },
						{ it: "Oggi nessuno si alza più per gli anziani!", pt: "Hoje ninguém se levanta mais para os idosos! (lição 89)" },
						{ it: "Voi non pagate niente.", pt: "Vocês não pagam nada. (lição 87)" },
						{ it: "Nessun problema!", pt: "Sem problema! (lição 85)" }
					]
				},
				{
					type: 'p',
					text: "Antes de substantivo, *nessuno* muda como o artigo *uno* e fica no singular: *nessun problema*, *nessuno sconto*, *nessuna idea*, *nessun'amica*. Com adjetivo, *niente di* e *qualcosa di*: *niente di grave*, *qualcosa di buono*."
				},
				{
					type: 'dica',
					text: "*Mica* (lição 87) não é uma palavra negativa como as outras: ele só reforça. Por isso, depois do verbo, também pede *non*: *non è mica facile*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Qualcuno, ognuno, chiunque, altro',
			blocks: [
				{
					type: 'p',
					text: "Os outros indefinidos do bloco, com um exemplo de cada:"
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Chiediamo a qualcuno.", pt: "*qualcuno*: alguém; *qualcosa*: alguma coisa. (lição 85)" },
						{ it: "Ognuno al suo posto!", pt: "*ognuno*: cada um, no singular. (lição 89)" },
						{ it: "Ciascuno aveva ragione a modo suo.", pt: "*ciascuno*: cada um, um pouco mais formal. (lição 89)" },
						{ it: "Può capitare a chiunque.", pt: "*chiunque*: qualquer um, quem quer que seja. (lição 88)" },
						{ it: "In centro alcune agenzie lo fanno.", pt: "*alcuni, alcune*: alguns, algumas, sempre no plural. (lição 86)" },
						{ it: "Allora vediamo l'altro.", pt: "*altro*: outro. (lição 88)" }
					]
				},
				{
					type: 'p',
					text: "*Alcuni* (plural) e *qualche* (singular, lição 40) dizem a mesma coisa: *alcune agenzie* = *qualche agenzia*. E *altro* aparece em muitas expressões: *un altro caffè* (outro café), *gli altri* (os outros), *Altro?* (mais alguma coisa?), *nient'altro* (nada mais), *qualcos'altro* (alguma outra coisa), *qualcun altro* (alguma outra pessoa)."
				},
				{
					type: 'dica',
					text: "*Chiunque* não muda e quase sempre fica no singular: *chiunque può venire* (qualquer um pode vir). *Ognuno* também: *ognuno paga il suo caffè*, e nunca *ognuno pagano*."
				}
			]
		},
		{
			kind: 'leitura',
			title: 'Expressões úteis',
			blocks: [
				{
					type: 'p',
					text: "Do Coliseu a Montecitorio, estas expressões apareceram nas lições 85 a 90. Leia em voz alta e lembre a cena de cada uma."
				},
				{
					type: 'exemplos',
					items: [
						{ it: "Saprebbe dirmi dov'è...?", pt: "O senhor saberia me dizer onde fica...?" },
						{ it: "Me la cavo.", pt: "Eu me viro." },
						{ it: "Per carità!", pt: "Deus me livre! / Imagine!" },
						{ it: "Ma de che!", pt: "Não tem de quê! (romano)" },
						{ it: "Occhio!", pt: "Cuidado! Olho vivo!" },
						{ it: "Appunto.", pt: "Justamente. Pois é." },
						{ it: "Te l'avevo detto!", pt: "Eu avisei!" },
						{ it: "Per forza!", pt: "Claro! Também!" },
						{ it: "Mah!", pt: "Sei lá!" },
						{ it: "Che cos'ha?", pt: "O que ele tem?" },
						{ it: "Mica male!", pt: "Nada mal!" },
						{ it: "Lei è un mago!", pt: "O senhor é um mago!" },
						{ it: "Questa sì che è fortuna!", pt: "Isso é que é sorte!" },
						{ it: "Com'è fatto?", pt: "Como ele é?" },
						{ it: "tenere d'occhio", pt: "ficar de olho" },
						{ it: "da quel momento in poi", pt: "daquele momento em diante" },
						{ it: "Niente storie!", pt: "Nada de confusão!" },
						{ it: "Come si permette?", pt: "Como o senhor se atreve?" },
						{ it: "Che fine ha fatto?", pt: "Que fim levou?" }
					]
				},
				{
					type: 'dica',
					text: "Na próxima vez que alguém agradecer a você por um favor pequeno, experimente um *Per carità!*. E, se estiver em Roma, um *Ma de che!*."
				}
			]
		},
		{
			kind: 'traduzir',
			items: [
				{ it: "Che cosa è successo? Niente di grave.", pt: "O que aconteceu? Nada grave." },
				{ it: "Sono cose che capitano: può succedere a chiunque.", pt: "São coisas que acontecem: pode acontecer com qualquer um." },
				{ it: "In Italia ci si saluta con due baci.", pt: "Na Itália a gente se cumprimenta com dois beijos." },
				{ it: "Qui non si può parcheggiare: c'è il divieto di sosta.", pt: "Aqui não se pode estacionar: tem placa de proibido estacionar." },
				{ it: "Nessuno mi ha detto niente.", pt: "Ninguém me disse nada." },
				{ it: "Ognuno ha pagato il suo biglietto.", pt: "Cada um pagou a sua passagem." },
				{ it: "C'è qualcuno? No, non c'è nessuno.", pt: "Tem alguém aí? Não, não tem ninguém." },
				{ it: "Ho perso il portafoglio, ma una signora l'ha portato al commissariato.", pt: "Perdi a carteira, mas uma senhora levou à delegacia." }
			]
		},
		{
			kind: 'completar',
			items: [
				{ pt: "Hoje ninguém me telefonou.", parts: ["Oggi ", null, " mi ha telefonato."], answers: ["nessuno"] },
				{ pt: "Não aconteceu nada.", parts: ["Non è ", null, " niente."], answers: ["successo"] },
				{ pt: "Aqui a gente se acostuma com tudo.", parts: ["Qui ", null, " abitua a tutto."], answers: ["ci si"] },
				{ pt: "Pessoal, cada um no seu lugar!", parts: ["Ragazzi, ", null, " al suo posto!"], answers: ["ognuno"] },
				{ pt: "Pode acontecer com qualquer um.", parts: ["Può capitare a ", null, "."], answers: ["chiunque"] }
			]
		}
	]
};

export const unidade: Unit = { no: 13, title: 'Primavera em Roma', lessons: [85, 86, 87, 88, 89, 90, 91] };

export const licoes: Lesson[] = [licao85, licao86, licao87, licao88, licao89, licao90, licao91];
