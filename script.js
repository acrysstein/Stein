/* =========================================================
   STEIN
   DESAFIO MATEMÁTICO - 6º ANO

   8 setores
   15 perguntas por setor
   120 desafios no total
========================================================= */


/* =========================================================
   CONFIGURAÇÃO DOS SETORES
========================================================= */

const setores = {

    adicao: {
        nome: "Adição",
        icone: "➕",
        cor: "#246bfd"
    },

    subtracao: {
        nome: "Subtração",
        icone: "➖",
        cor: "#7048e8"
    },

    multiplicacao: {
        nome: "Multiplicação",
        icone: "✖️",
        cor: "#20c997"
    },

    divisao: {
        nome: "Divisão",
        icone: "➗",
        cor: "#ff922b"
    },

    fracoes: {
        nome: "Frações",
        icone: "🍕",
        cor: "#f06595"
    },

    decimais: {
        nome: "Números Decimais",
        icone: "🔢",
        cor: "#845ef7"
    },

    porcentagem: {
        nome: "Porcentagem",
        icone: "💯",
        cor: "#e03131"
    },

    geometria: {
        nome: "Geometria",
        icone: "📐",
        cor: "#1098ad"
    }

};


/* =========================================================
   BANCO DE DADOS
========================================================= */

/*
    Cada setor possui exatamente 15 desafios.

    Para evitar que o código fique gigantesco,
    as perguntas matemáticas são geradas a partir
    de conjuntos de valores.

    Isso também permite aumentar o banco futuramente.
*/


/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function criarQuestao(pergunta, correta, alternativas, categoria) {

    return {
        pergunta,
        correta,
        alternativas,
        categoria
    };

}


function embaralhar(array) {

    return [...array].sort(() => Math.random() - 0.5);

}


/*
    Cria alternativas automaticamente.

    A resposta correta sempre fica entre as opções,
    mas sua posição é embaralhada.
*/

function criarAlternativas(correta, erros) {

    const lista = [
        String(correta),
        ...erros.map(String)
    ];

    const embaralhada = embaralhar(lista);

    return {
        alternativas: embaralhada,
        resposta: embaralhada.indexOf(String(correta))
    };

}


/* =========================================================
   ADIÇÃO — 15 QUESTÕES
========================================================= */

function gerarAdicao() {

    const dados = [

        [27, 15],
        [48, 32],
        [125, 74],
        [236, 145],
        [67, 24],
        [350, 125],
        [418, 231],
        [56, 67],
        [129, 271],
        [505, 95],
        [333, 222],
        [76, 89],
        [145, 155],
        [267, 133],
        [408, 192]

    ];

    return dados.map((item, i) => {

        const a = item[0];
        const b = item[1];

        const resposta = a + b;

        let texto =
            `Quanto é ${a} + ${b}?`;

        if (i === 4) {
            texto =
                `O número 67 apareceu 👀! Quanto é 67 + 24?`;
        }

        if (i === 7) {
            texto =
                `67 entrou no chat 😂. Quanto é 56 + 67?`;
        }

        if (i === 11) {
            texto =
                `POV: você encontra 67 no exercício. Quanto é 76 + 89?`;
        }

        const opcoes = criarAlternativas(
            resposta,
            [
                resposta + 5,
                resposta - 7,
                resposta + 12
            ]
        );

        return criarQuestao(
            texto,
            resposta,
            opcoes.alternativas,
            "➕ Adição"
        );

    });

}


/* =========================================================
   SUBTRAÇÃO — 15 QUESTÕES
========================================================= */

function gerarSubtracao() {

    const dados = [

        [45, 18],
        [72, 29],
        [100, 37],
        [145, 56],
        [167, 100],
        [250, 125],
        [300, 78],
        [425, 214],
        [500, 267],
        [650, 150],
        [720, 321],
        [800, 433],
        [900, 567],
        [1000, 333],
        [167, 100]

    ];

    return dados.map((item, i) => {

        const a = item[0];
        const b = item[1];

        const resposta = a - b;

        let texto =
            `Quanto é ${a} − ${b}?`;

        if (i === 4) {
            texto =
                `O 67 chegou no exercício 😎. Quanto é 167 − 100?`;
        }

        if (i === 14) {
            texto =
                `Desafio 67: quanto é 167 − 100?`;
        }

        const opcoes = criarAlternativas(
            resposta,
            [
                resposta + 8,
                resposta - 6,
                resposta + 15
            ]
        );

        return criarQuestao(
            texto,
            resposta,
            opcoes.alternativas,
            "➖ Subtração"
        );

    });

}


/* =========================================================
   MULTIPLICAÇÃO — 15 QUESTÕES
========================================================= */

function gerarMultiplicacao() {

    const dados = [

        [3, 4],
        [5, 7],
        [6, 8],
        [9, 5],
        [7, 7],
        [12, 4],
        [15, 6],
        [8, 9],
        [11, 7],
        [12, 8],
        [14, 5],
        [16, 6],
        [18, 4],
        [21, 3],
        [10, 7]

    ];

    return dados.map((item, i) => {

        const a = item[0];
        const b = item[1];

        const resposta = a * b;

        let texto =
            `Quanto é ${a} × ${b}?`;

        if (i === 14) {
            texto =
                `67 vibes 😎: quanto é 10 × 7?`;
        }

        const opcoes = criarAlternativas(
            resposta,
            [
                resposta + 7,
                resposta - 5,
                resposta + 12
            ]
        );

        return criarQuestao(
            texto,
            resposta,
            opcoes.alternativas,
            "✖️ Multiplicação"
        );

    });

}


/* =========================================================
   DIVISÃO — 15 QUESTÕES
========================================================= */

function gerarDivisao() {

    const dados = [

        [12, 3],
        [20, 4],
        [30, 5],
        [42, 6],
        [56, 7],
        [64, 8],
        [72, 9],
        [81, 9],
        [100, 10],
        [120, 12],
        [144, 12],
        [150, 15],
        [180, 20],
        [200, 10],
        [134, 2]

    ];

    return dados.map((item, i) => {

        const a = item[0];
        const b = item[1];

        const resposta = a / b;

        let texto =
            `Quanto é ${a} ÷ ${b}?`;

        if (i === 14) {
            texto =
                `Desafio final: 134 ÷ 2 = ? 67 apareceu 👀`;
        }

        const opcoes = criarAlternativas(
            resposta,
            [
                resposta + 3,
                resposta - 2,
                resposta + 5
            ]
        );

        return criarQuestao(
            texto,
            resposta,
            opcoes.alternativas,
            "➗ Divisão"
        );

    });

}


/* =========================================================
   FRAÇÕES — 15 QUESTÕES
========================================================= */

function gerarFracoes() {

    const perguntas = [

        ["Qual fração representa metade de um inteiro?", "1/2", ["1/3", "2/3", "3/4"]],
        ["Qual fração representa um quarto?", "1/4", ["1/2", "2/4", "3/4"]],
        ["Qual é o numerador de 3/5?", "3", ["5", "2", "8"]],
        ["Qual é o denominador de 7/9?", "9", ["7", "2", "16"]],
        ["Qual fração é equivalente a 1/2?", "2/4", ["2/3", "3/5", "4/5"]],
        ["Qual fração representa três partes de um total de quatro?", "3/4", ["1/4", "2/4", "4/3"]],
        ["Quanto é 1/2 + 1/2?", "1", ["1/2", "2", "1/4"]],
        ["Quanto é 1/4 + 1/4?", "1/2", ["1/4", "1", "3/4"]],
        ["Quanto é 2/5 + 1/5?", "3/5", ["2/5", "4/5", "1/5"]],
        ["Quanto é 5/6 − 2/6?", "3/6", ["2/6", "4/6", "1/6"]],
        ["Qual é maior: 1/2 ou 1/4?", "1/2", ["1/4", "São iguais", "1/8"]],
        ["Qual é menor: 2/3 ou 1/3?", "1/3", ["2/3", "São iguais", "3/3"]],
        ["Quanto é 3/4 de 20?", "15", ["10", "12", "16"]],
        ["Quanto é 1/2 de 30?", "15", ["10", "20", "25"]],
        ["67 apareceu 👀. Qual fração representa 67 de 100?", "67/100", ["6/7", "7/6", "67/10"]]

    ];

    return perguntas.map(item => {

        return criarQuestao(
            item[0],
            item[1],
            item[1] === "67/100"
                ? item[2]
                : embaralhar([item[1], ...item[2]]),
            "🍕 Frações"
        );

    });

}


/* =========================================================
   DECIMAIS — 15 QUESTÕES
========================================================= */

function gerarDecimais() {

    const perguntas = [

        ["Qual número é maior?", "2,5", ["2,05", "2,15", "2,01"]],
        ["Quanto é 1,5 + 2,5?", "4", ["3", "4,5", "5"]],
        ["Quanto é 5,5 − 2,5?", "3", ["2", "3,5", "4"]],
        ["Quanto é 2,5 × 2?", "5", ["4", "4,5", "6"]],
        ["Quanto é 10,5 ÷ 2?", "5,25", ["5", "5,5", "6,25"]],
        ["Qual número representa cinco décimos?", "0,5", ["0,05", "5,0", "0,15"]],
        ["Qual número é igual a 2 + 0,5?", "2,5", ["2,05", "2,05", "3,5"]],
        ["Qual é maior: 3,7 ou 3,07?", "3,7", ["3,07", "3,17", "3,007"]],
        ["Quanto é 4,25 + 1,75?", "6", ["5", "5,5", "6,5"]],
        ["Quanto é 8,5 − 3,5?", "5", ["4", "5,5", "6"]],
        ["Quanto é 0,5 + 0,25?", "0,75", ["0,5", "0,25", "1"]],
        ["Quanto é 6,7 + 0,3?", "7", ["6", "6,9", "7,3"]],
        ["Qual número é menor?", "1,25", ["1,5", "1,75", "2,05"]],
        ["Qual número decimal representa 67 centésimos?", "0,67", ["6,7", "0,067", "67,0"]],
        ["O meme 67 virou decimal 😂. Qual é 67 ÷ 10?", "6,7", ["0,67", "67", "0,067"]]

    ];

    return perguntas.map(item => {

        return criarQuestao(
            item[0],
            item[1],
            embaralhar([item[1], ...item[2]]),
            "🔢 Números Decimais"
        );

    });

}


/* =========================================================
   PORCENTAGEM — 15 QUESTÕES
========================================================= */

function gerarPorcentagem() {

    const perguntas = [

        ["Quanto é 10% de 100?", "10", ["5", "20", "50"]],
        ["Quanto é 50% de 80?", "40", ["20", "30", "60"]],
        ["Quanto é 25% de 100?", "25", ["20", "50", "75"]],
        ["Quanto é 50% de 60?", "30", ["20", "40", "50"]],
        ["Quanto é 10% de 70?", "7", ["6", "8", "10"]],
        ["Quanto é 20% de 50?", "10", ["5", "15", "20"]],
        ["Quanto é 25% de 40?", "10", ["5", "15", "20"]],
        ["Quanto é 50% de 200?", "100", ["50", "150", "120"]],
        ["Quanto é 10% de 250?", "25", ["20", "30", "50"]],
        ["Quanto é 75% de 100?", "75", ["25", "50", "80"]],
        ["Quanto é 50% de 34?", "17", ["14", "16", "20"]],
        ["Quanto é 25% de 80?", "20", ["10", "30", "40"]],
        ["Quanto é 10% de 90?", "9", ["8", "10", "18"]],
        ["Qual porcentagem representa metade de um total?", "50%", ["10%", "25%", "75%"]],
        ["67 entrou na porcentagem 😎. Quanto é 100% de 67?", "67", ["6,7", "33,5", "134"]]

    ];

    return perguntas.map(item => {

        return criarQuestao(
            item[0],
            item[1],
            embaralhar([item[1], ...item[2]]),
            "💯 Porcentagem"
        );

    });

}


/* =========================================================
   GEOMETRIA — 15 QUESTÕES
========================================================= */

function gerarGeometria() {

    const perguntas = [

        ["Quantos lados possui um triângulo?", "3", ["2", "4", "5"]],
        ["Quantos lados possui um quadrado?", "4", ["3", "5", "6"]],
        ["Quantos lados possui um pentágono?", "5", ["4", "6", "7"]],
        ["Quantos lados possui um hexágono?", "6", ["5", "7", "8"]],
        ["Quantos lados possui um octógono?", "8", ["6", "7", "9"]],
        ["Quantos graus possui um ângulo reto?", "90°", ["45°", "60°", "180°"]],
        ["Qual figura possui três lados?", "Triângulo", ["Quadrado", "Pentágono", "Hexágono"]],
        ["Qual figura possui quatro lados iguais?", "Quadrado", ["Triângulo", "Círculo", "Pentágono"]],
        ["Qual é o perímetro de um quadrado com lado de 5 cm?", "20 cm", ["10 cm", "15 cm", "25 cm"]],
        ["Qual é o perímetro de um retângulo com lados 5 cm e 3 cm?", "16 cm", ["8 cm", "15 cm", "20 cm"]],
        ["Qual é a área de um quadrado de lado 4 cm?", "16 cm²", ["8 cm²", "12 cm²", "20 cm²"]],
        ["Quantos vértices possui um cubo?", "8", ["6", "10", "12"]],
        ["Quantos graus possui uma volta completa?", "360°", ["90°", "180°", "270°"]],
        ["Qual figura não possui lados retos?", "Círculo", ["Triângulo", "Quadrado", "Pentágono"]],
        ["O 67 chegou na geometria 👀. Um hexágono possui quantos lados?", "6", ["5", "7", "8"]]

    ];

    return perguntas.map(item => {

        return criarQuestao(
            item[0],
            item[1],
            embaralhar([item[1], ...item[2]]),
            "📐 Geometria"
        );

    });

}


/* =========================================================
   BANCO COMPLETO
========================================================= */

const banco = {

    adicao: gerarAdicao(),

    subtracao: gerarSubtracao(),

    multiplicacao: gerarMultiplicacao(),

    divisao: gerarDivisao(),

    fracoes: gerarFracoes(),

    decimais: gerarDecimais(),

    porcentagem: gerarPorcentagem(),

    geometria: gerarGeometria()

};


/* =========================================================
   VARIÁVEIS DO JOGO
========================================================= */

let setorAtual = null;

let perguntasAtuais = [];

let indiceAtual = 0;

let pontuacao = 0;

let vidas = 3;

let acertos = 0;

let erros = 0;

let respondeu = false;


/* =========================================================
   ELEMENTOS
========================================================= */

const telaInicial =
    document.getElementById("tela-inicial");

const telaSetores =
    document.getElementById("tela-setores");

const telaJogo =
    document.getElementById("tela-jogo");

const telaFinal =
    document.getElementById("tela-final");


const btnComecar =
    document.getElementById("btn-comecar");

const btnVoltarInicio =
    document.getElementById("btn-voltar-inicio");

const btnVoltarSetores =
    document.getElementById("btn-voltar-setores");

const btnProxima =
    document.getElementById("btn-proxima");

const btnJogarNovamente =
    document.getElementById("btn-jogar-novamente");

const btnEscolherSetor =
    document.getElementById("btn-escolher-setor");


const gridSetores =
    document.getElementById("grid-setores");


const pontuacaoElemento =
    document.getElementById("pontuacao");

const vidasElemento =
    document.getElementById("vidas");

const questaoAtualElemento =
    document.getElementById("questao-atual");

const barraProgresso =
    document.getElementById("barra-progresso");


const categoriaElemento =
    document.getElementById("categoria");

const perguntaElemento =
    document.getElementById("pergunta");

const alternativasElemento =
    document.getElementById("alternativas");

const feedbackElemento =
    document.getElementById("feedback");


const nomeSetorAtual =
    document.getElementById("nome-setor-atual");

const iconeSetorAtual =
    document.getElementById("icone-setor-atual");


const pontuacaoFinal =
    document.getElementById("pontuacao-final");

const acertosFinal =
    document.getElementById("acertos-final");

const errosFinal =
    document.getElementById("erros-final");

const tituloResultado =
    document.getElementById("titulo-resultado");

const mensagemResultado =
    document.getElementById("mensagem-resultado");

const iconeResultado =
    document.getElementById("icone-resultado");


/* =========================================================
   TROCAR DE TELA
========================================================= */

function mostrarTela(tela) {

    document
        .querySelectorAll(".tela")
        .forEach(elemento => {

            elemento.classList.remove("ativa");

        });

    tela.classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CRIAR MENU DE SETORES
========================================================= */

function criarMenuSetores() {

    gridSetores.innerHTML = "";

    Object.entries(setores).forEach(
        ([chave, setor]) => {

            const botao =
                document.createElement("button");

            botao.className = "setor-card";

            botao.innerHTML = `

                <div
                    class="setor-icone"
                    style="color: ${setor.cor};"
                >
                    ${setor.icone}
                </div>

                <h3>
                    ${setor.nome}
                </h3>

                <span>
                    15 desafios
                </span>

            `;

            botao.addEventListener(
                "click",
                () => iniciarSetor(chave)
            );

            gridSetores.appendChild(botao);

        }
    );

}


/* =========================================================
   INICIAR SETOR
========================================================= */

function iniciarSetor(chave) {

    setorAtual = chave;

    perguntasAtuais =
        embaralhar(banco[chave]).slice(0, 15);

    indiceAtual = 0;

    pontuacao = 0;

    vidas = 3;

    acertos = 0;

    erros = 0;

    nomeSetorAtual.textContent =
        setores[chave].nome;

    iconeSetorAtual.textContent =
        setores[chave].icone;

    atualizarPontuacao();

    atualizarVidas();

    mostrarTela(telaJogo);

    carregarPergunta();

}


/* =========================================================
   CARREGAR PERGUNTA
========================================================= */

function carregarPergunta() {

    respondeu = false;

    const perguntaAtual =
        perguntasAtuais[indiceAtual];


    categoriaElemento.textContent =
        perguntaAtual.categoria;


    perguntaElemento.textContent =
        perguntaAtual.pergunta;


    questaoAtualElemento.textContent =
        indiceAtual + 1;


    const progresso =
        ((indiceAtual + 1) / 15) * 100;

    barraProgresso.style.width =
        `${progresso}%`;


    alternativasElemento.innerHTML = "";

    feedbackElemento.textContent = "";

    feedbackElemento.className =
        "feedback";

    btnProxima.style.display =
        "none";


    perguntaAtual.alternativas
        .forEach((alternativa, indice) => {

            const botao =
                document.createElement("button");

            botao.className =
                "alternativa";

            botao.textContent =
                alternativa;

            botao.addEventListener(
                "click",
                () => verificarResposta(
                    indice,
                    botao
                )
            );

            alternativasElemento
                .appendChild(botao);

        });

}


/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function verificarResposta(
    indiceSelecionado,
    botaoSelecionado
) {

    if (respondeu) {
        return;
    }

    respondeu = true;


    const perguntaAtual =
        perguntasAtuais[indiceAtual];


    const botoes =
        document.querySelectorAll(
            ".alternativa"
        );


    botoes.forEach(botao => {

        botao.disabled = true;

    });


    const respostaCorreta =
        perguntaAtual.alternativas
            .findIndex(
                alternativa =>
                    alternativa ===
                    perguntaAtual.correta
            );


    if (indiceSelecionado === respostaCorreta) {

        /* =========================
           ACERTO
        ========================= */

        botaoSelecionado
            .classList
            .add("correta");


        pontuacao += 100;

        acertos++;


        feedbackElemento.textContent =
            "🎉 ACERTOU! +100 pontos";


        feedbackElemento.classList
            .add("certo");


    } else {

        /* =========================
           ERRO
        ========================= */

        botaoSelecionado
            .classList
            .add("errada");


        if (botoes[respostaCorreta]) {

            botoes[respostaCorreta]
                .classList
                .add("correta");

        }


        vidas--;

        erros++;


        feedbackElemento.textContent =
            `😅 Quase! A resposta era ${perguntaAtual.correta}.`;


        feedbackElemento.classList
            .add("errado");

    }


    atualizarPontuacao();

    atualizarVidas();

    btnProxima.style.display =
        "block";

}


/* =========================================================
   PONTUAÇÃO
========================================================= */

function atualizarPontuacao() {

    pontuacaoElemento.textContent =
        pontuacao;

}


/* =========================================================
   VIDAS
========================================================= */

function atualizarVidas() {

    let coracoes = "";

    for (let i = 0; i < 3; i++) {

        if (i < vidas) {

            coracoes += "❤️";

        } else {

            coracoes += "🖤";

        }

    }

    vidasElemento.textContent =
        coracoes;

}


/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

function proximaPergunta() {

    if (vidas <= 0) {

        finalizarJogo();

        return;

    }


    if (indiceAtual >= 14) {

        finalizarJogo();

        return;

    }


    indiceAtual++;

    carregarPergunta();

}


/* =========================================================
   FINALIZAR JOGO
========================================================= */

function finalizarJogo() {

    pontuacaoFinal.textContent =
        pontuacao;

    acertosFinal.textContent =
        acertos;

    errosFinal.textContent =
        erros;


    const porcentagem =
        (acertos / 15) * 100;


    if (vidas <= 0) {

        iconeResultado.textContent =
            "💪";

        tituloResultado.textContent =
            "Suas vidas acabaram!";

        mensagemResultado.textContent =
            "Não desista! A matemática fica mais fácil quando você pratica.";

    }

    else if (porcentagem >= 90) {

        iconeResultado.textContent =
            "🏆";

        tituloResultado.textContent =
            "VOCÊ É BRABO!";

        mensagemResultado.textContent =
            "Mandou muito bem! Seu cérebro está em modo STEIN.";

    }

    else if (porcentagem >= 70) {

        iconeResultado.textContent =
            "🌟";

        tituloResultado.textContent =
            "Muito bem!";

        mensagemResultado.textContent =
            "Você está dominando esse setor!";

    }

    else if (porcentagem >= 50) {

        iconeResultado.textContent =
            "👍";

        tituloResultado.textContent =
            "Bom trabalho!";

        mensagemResultado.textContent =
            "Você está no caminho certo. Continue praticando!";

    }

    else {

        iconeResultado.textContent =
            "🧠";

        tituloResultado.textContent =
            "Hora de tentar de novo!";

        mensagemResultado.textContent =
            "Cada erro é uma oportunidade de aprender.";

    }


    mostrarTela(telaFinal);

}


/* =========================================================
   EVENTOS
========================================================= */

btnComecar.addEventListener(
    "click",
    () => {

        mostrarTela(telaSetores);

    }
);


btnVoltarInicio.addEventListener(
    "click",
    () => {

        mostrarTela(telaInicial);

    }
);


btnVoltarSetores.addEventListener(
    "click",
    () => {

        mostrarTela(telaSetores);

    }
);


btnProxima.addEventListener(
    "click",
    proximaPergunta
);


btnJogarNovamente.addEventListener(
    "click",
    () => {

        iniciarSetor(setorAtual);

    }
);


btnEscolherSetor.addEventListener(
    "click",
    () => {

        mostrarTela(telaSetores);

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

criarMenuSetores();