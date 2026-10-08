// ==========================================
// STEIN - DESAFIO MATEMÁTICO
// Jogo educativo para alunos do 6º ano
// ==========================================


// ==========================================
// BANCO DE PERGUNTAS
// ==========================================

const perguntas = [
    {
        categoria: "🔢 Operações",
        pergunta: "Quanto é 245 + 137?",
        alternativas: ["372", "382", "392", "402"],
        resposta: 1
    },

    {
        categoria: "✖️ Multiplicação",
        pergunta: "Quanto é 24 × 6?",
        alternativas: ["124", "134", "144", "154"],
        resposta: 2
    },

    {
        categoria: "➗ Divisão",
        pergunta: "Qual é o resultado de 144 ÷ 12?",
        alternativas: ["10", "11", "12", "14"],
        resposta: 2
    },

    {
        categoria: "🍕 Frações",
        pergunta: "Qual fração representa a metade de um inteiro?",
        alternativas: ["1/3", "1/2", "2/3", "3/4"],
        resposta: 1
    },

    {
        categoria: "💰 Porcentagem",
        pergunta: "Quanto é 50% de 80?",
        alternativas: ["20", "30", "40", "50"],
        resposta: 2
    },

    {
        categoria: "🔢 Números Decimais",
        pergunta: "Qual número é maior?",
        alternativas: ["2,05", "2,5", "2,15", "2,01"],
        resposta: 1
    },

    {
        categoria: "📐 Geometria",
        pergunta: "Quantos lados possui um hexágono?",
        alternativas: ["4", "5", "6", "8"],
        resposta: 2
    },

    {
        categoria: "📏 Geometria",
        pergunta: "Um quadrado possui lados de 5 cm. Qual é o seu perímetro?",
        alternativas: ["10 cm", "15 cm", "20 cm", "25 cm"],
        resposta: 2
    },

    {
        categoria: "🧩 Problemas",
        pergunta: "João tinha 35 figurinhas e ganhou mais 18. Com quantas ficou?",
        alternativas: ["43", "48", "53", "63"],
        resposta: 2
    },

    {
        categoria: "🧠 Raciocínio",
        pergunta: "Qual é o próximo número da sequência: 2, 4, 6, 8, ...?",
        alternativas: ["9", "10", "11", "12"],
        resposta: 1
    }
];


// ==========================================
// VARIÁVEIS DO JOGO
// ==========================================

let indiceAtual = 0;
let pontuacao = 0;
let vidas = 3;
let acertos = 0;
let erros = 0;
let respondeu = false;


// ==========================================
// ELEMENTOS HTML
// ==========================================

const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const btnIniciar = document.getElementById("btn-iniciar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const pontuacaoElemento = document.getElementById("pontuacao");
const vidasElemento = document.getElementById("vidas");
const questaoAtualElemento = document.getElementById("questao-atual");

const categoriaElemento = document.getElementById("categoria");
const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");

const feedbackElemento = document.getElementById("feedback");
const barraProgresso = document.getElementById("barra-progresso");

const pontuacaoFinal = document.getElementById("pontuacao-final");
const acertosFinal = document.getElementById("acertos-final");
const errosFinal = document.getElementById("erros-final");

const tituloResultado = document.getElementById("titulo-resultado");
const mensagemResultado = document.getElementById("mensagem-resultado");
const iconeResultado = document.getElementById("icone-resultado");


// ==========================================
// TROCAR DE TELA
// ==========================================

function mostrarTela(tela) {

    document.querySelectorAll(".tela").forEach(function(elemento) {
        elemento.classList.remove("ativa");
    });

    tela.classList.add("ativa");
}


// ==========================================
// INICIAR JOGO
// ==========================================

function iniciarJogo() {

    indiceAtual = 0;
    pontuacao = 0;
    vidas = 3;
    acertos = 0;
    erros = 0;

    atualizarPontuacao();
    atualizarVidas();

    mostrarTela(telaJogo);

    carregarPergunta();
}


// ==========================================
// CARREGAR PERGUNTA
// ==========================================

function carregarPergunta() {

    respondeu = false;

    const perguntaAtual = perguntas[indiceAtual];

    categoriaElemento.textContent = perguntaAtual.categoria;

    perguntaElemento.textContent = perguntaAtual.pergunta;

    questaoAtualElemento.textContent = indiceAtual + 1;

    // Atualiza a barra de progresso

    const progresso =
        ((indiceAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width = progresso + "%";


    // Limpa alternativas antigas

    alternativasElemento.innerHTML = "";

    feedbackElemento.textContent = "";
    feedbackElemento.className = "feedback";

    btnProxima.style.display = "none";


    // Cria os botões das alternativas

    perguntaAtual.alternativas.forEach(function(alternativa, indice) {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent = alternativa;

        botao.addEventListener("click", function() {

            verificarResposta(indice, botao);

        });

        alternativasElemento.appendChild(botao);
    });
}


// ==========================================
// VERIFICAR RESPOSTA
// ==========================================

function verificarResposta(indiceSelecionado, botaoSelecionado) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const perguntaAtual = perguntas[indiceAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    // Desabilita todas as alternativas

    botoes.forEach(function(botao) {
        botao.disabled = true;
    });


    // Verifica se acertou

    if (indiceSelecionado === perguntaAtual.resposta) {

        // ACERTO

        botaoSelecionado.classList.add("correta");

        pontuacao += 100;
        acertos++;

        feedbackElemento.textContent =
            "🎉 Muito bem! Resposta correta! +100 pontos";

        feedbackElemento.classList.add("certo");

    } else {

        // ERRO

        botaoSelecionado.classList.add("errada");

        botoes[perguntaAtual.resposta]
            .classList.add("correta");

        vidas--;
        erros++;

        feedbackElemento.textContent =
            "😅 Quase! A resposta correta está destacada em verde.";

        feedbackElemento.classList.add("errado");
    }


    atualizarPontuacao();
    atualizarVidas();

    btnProxima.style.display = "block";
}


// ==========================================
// ATUALIZAR PONTUAÇÃO
// ==========================================

function atualizarPontuacao() {

    pontuacaoElemento.textContent = pontuacao;
}


// ==========================================
// ATUALIZAR VIDAS
// ==========================================

function atualizarVidas() {

    let coracoes = "";

    for (let i = 0; i < 3; i++) {

        if (i < vidas) {
            coracoes += "❤️";
        } else {
            coracoes += "🖤";
        }
    }

    vidasElemento.textContent = coracoes;
}


// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

function proximaPergunta() {

    // Se não há mais perguntas, termina o jogo

    if (indiceAtual >= perguntas.length - 1) {

        finalizarJogo();

        return;
    }


    // Se o jogador ficou sem vidas, termina

    if (vidas <= 0) {

        finalizarJogo();

        return;
    }


    indiceAtual++;

    carregarPergunta();
}


// ==========================================
// FINALIZAR JOGO
// ==========================================

function finalizarJogo() {

    pontuacaoFinal.textContent = pontuacao;

    acertosFinal.textContent = acertos;

    errosFinal.textContent = erros;


    // Mensagens de acordo com o desempenho

    const porcentagem =
        (acertos / perguntas.length) * 100;


    if (porcentagem >= 90) {

        tituloResultado.textContent =
            "🏆 Você é um mestre!";

        mensagemResultado.textContent =
            "Excelente! Seu conhecimento matemático está incrível.";

        iconeResultado.textContent = "🏆";

    } else if (porcentagem >= 70) {

        tituloResultado.textContent =
            "🌟 Muito bem!";

        mensagemResultado.textContent =
            "Você mandou muito bem! Continue praticando.";

        iconeResultado.textContent = "🌟";

    } else if (porcentagem >= 50) {

        tituloResultado.textContent =
            "👍 Bom trabalho!";

        mensagemResultado.textContent =
            "Você está no caminho certo. Que tal tentar novamente?";

        iconeResultado.textContent = "👍";

    } else {

        tituloResultado.textContent =
            "💪 Não desista!";

        mensagemResultado.textContent =
            "Errar faz parte de aprender. Tente novamente!";

        iconeResultado.textContent = "💪";
    }


    mostrarTela(telaFinal);
}


// ==========================================
// EVENTOS DOS BOTÕES
// ==========================================

btnIniciar.addEventListener("click", iniciarJogo);

btnProxima.addEventListener("click", proximaPergunta);

btnReiniciar.addEventListener("click", iniciarJogo);