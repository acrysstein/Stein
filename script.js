/* =========================================================
   STEIN - DESAFIO MATEMÁTICO
   6º ANO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SETORES
    ===================================================== */

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


    /* =====================================================
       FUNÇÕES AUXILIARES
    ===================================================== */

    function embaralhar(array) {

        return [...array].sort(() => Math.random() - 0.5);

    }


    function criarQuestao(pergunta, correta, alternativas, categoria) {

        return {
            pergunta: pergunta,
            correta: String(correta),
            alternativas: alternativas.map(String),
            categoria: categoria
        };

    }


    function criarAlternativas(correta, erros) {

        const opcoes = [
            String(correta),
            ...erros.map(String)
        ];

        return embaralhar(opcoes);

    }


    /* =====================================================
       BANCO DE PERGUNTAS
    ===================================================== */

    const banco = {


        /* =================================================
           ADIÇÃO
        ================================================= */

        adicao: [

            criarQuestao(
                "Quanto é 27 + 15?",
                "42",
                criarAlternativas(42, [40, 41, 45]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 48 + 32?",
                "80",
                criarAlternativas(80, [70, 78, 90]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 125 + 74?",
                "199",
                criarAlternativas(199, [189, 209, 179]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 236 + 145?",
                "381",
                criarAlternativas(381, [371, 391, 401]),
                "➕ Adição"
            ),

            criarQuestao(
                "O número 67 apareceu 👀! Quanto é 67 + 24?",
                "91",
                criarAlternativas(91, [81, 87, 97]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 350 + 125?",
                "475",
                criarAlternativas(475, [465, 485, 450]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 418 + 231?",
                "649",
                criarAlternativas(649, [639, 659, 619]),
                "➕ Adição"
            ),

            criarQuestao(
                "67 entrou no chat 😂. Quanto é 56 + 67?",
                "123",
                criarAlternativas(123, [113, 133, 127]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 129 + 271?",
                "400",
                criarAlternativas(400, [390, 410, 420]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 505 + 95?",
                "600",
                criarAlternativas(600, [590, 610, 500]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 333 + 222?",
                "555",
                criarAlternativas(555, [545, 565, 535]),
                "➕ Adição"
            ),

            criarQuestao(
                "POV: você encontra 67 no exercício 😂. Quanto é 76 + 89?",
                "165",
                criarAlternativas(165, [155, 175, 185]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 145 + 155?",
                "300",
                criarAlternativas(300, [290, 310, 280]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 267 + 133?",
                "400",
                criarAlternativas(400, [390, 410, 420]),
                "➕ Adição"
            ),

            criarQuestao(
                "Quanto é 408 + 192?",
                "600",
                criarAlternativas(600, [590, 610, 620]),
                "➕ Adição"
            )

        ],


        /* =================================================
           SUBTRAÇÃO
        ================================================= */

        subtracao: [

            criarQuestao(
                "Quanto é 45 − 18?",
                "27",
                criarAlternativas(27, [25, 28, 30]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 72 − 29?",
                "43",
                criarAlternativas(43, [41, 45, 49]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 100 − 37?",
                "63",
                criarAlternativas(63, [53, 67, 73]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 145 − 56?",
                "89",
                criarAlternativas(89, [79, 99, 91]),
                "➖ Subtração"
            ),

            criarQuestao(
                "O 67 chegou no exercício 😎. Quanto é 167 − 100?",
                "67",
                criarAlternativas(67, [57, 77, 87]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 250 − 125?",
                "125",
                criarAlternativas(125, [115, 135, 150]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 300 − 78?",
                "222",
                criarAlternativas(222, [212, 232, 228]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 425 − 214?",
                "211",
                criarAlternativas(211, [201, 221, 231]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 500 − 267?",
                "233",
                criarAlternativas(233, [223, 243, 263]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 650 − 150?",
                "500",
                criarAlternativas(500, [400, 450, 550]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 720 − 321?",
                "399",
                criarAlternativas(399, [389, 409, 419]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 800 − 433?",
                "367",
                criarAlternativas(367, [357, 377, 387]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 900 − 567?",
                "333",
                criarAlternativas(333, [323, 343, 353]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Quanto é 1000 − 333?",
                "667",
                criarAlternativas(667, [657, 677, 687]),
                "➖ Subtração"
            ),

            criarQuestao(
                "Desafio 67 👀: quanto é 167 − 100?",
                "67",
                criarAlternativas(67, [57, 77, 87]),
                "➖ Subtração"
            )

        ],


        /* =================================================
           MULTIPLICAÇÃO
        ================================================= */

        multiplicacao: [

            criarQuestao(
                "Quanto é 3 × 4?",
                "12",
                criarAlternativas(12, [10, 14, 16]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 5 × 7?",
                "35",
                criarAlternativas(35, [30, 40, 45]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 6 × 8?",
                "48",
                criarAlternativas(48, [42, 54, 56]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 9 × 5?",
                "45",
                criarAlternativas(45, [40, 50, 55]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 7 × 7?",
                "49",
                criarAlternativas(49, [42, 48, 56]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 12 × 4?",
                "48",
                criarAlternativas(48, [44, 52, 56]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 15 × 6?",
                "90",
                criarAlternativas(90, [80, 85, 100]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 8 × 9?",
                "72",
                criarAlternativas(72, [64, 68, 81]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 11 × 7?",
                "77",
                criarAlternativas(77, [67, 87, 70]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 12 × 8?",
                "96",
                criarAlternativas(96, [86, 88, 108]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 14 × 5?",
                "70",
                criarAlternativas(70, [60, 65, 75]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 16 × 6?",
                "96",
                criarAlternativas(96, [86, 92, 106]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 18 × 4?",
                "72",
                criarAlternativas(72, [62, 68, 82]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "Quanto é 21 × 3?",
                "63",
                criarAlternativas(63, [53, 66, 73]),
                "✖️ Multiplicação"
            ),

            criarQuestao(
                "67 vibes 😎: quanto é 10 × 7?",
                "70",
                criarAlternativas(70, [60, 67, 77]),
                "✖️ Multiplicação"
            )

        ],


        /* =================================================
           DIVISÃO
        ================================================= */

        divisao: [

            criarQuestao(
                "Quanto é 12 ÷ 3?",
                "4",
                criarAlternativas(4, [3, 5, 6]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 20 ÷ 4?",
                "5",
                criarAlternativas(5, [4, 6, 8]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 30 ÷ 5?",
                "6",
                criarAlternativas(6, [5, 7, 8]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 42 ÷ 6?",
                "7",
                criarAlternativas(7, [6, 8, 9]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 56 ÷ 7?",
                "8",
                criarAlternativas(8, [7, 9, 10]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 64 ÷ 8?",
                "8",
                criarAlternativas(8, [6, 7, 9]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 72 ÷ 9?",
                "8",
                criarAlternativas(8, [7, 9, 10]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 81 ÷ 9?",
                "9",
                criarAlternativas(9, [7, 8, 10]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 100 ÷ 10?",
                "10",
                criarAlternativas(10, [5, 8, 12]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 120 ÷ 12?",
                "10",
                criarAlternativas(10, [8, 12, 15]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 144 ÷ 12?",
                "12",
                criarAlternativas(12, [10, 11, 14]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 150 ÷ 15?",
                "10",
                criarAlternativas(10, [5, 15, 20]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 180 ÷ 20?",
                "9",
                criarAlternativas(9, [8, 10, 12]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Quanto é 200 ÷ 10?",
                "20",
                criarAlternativas(20, [10, 15, 25]),
                "➗ Divisão"
            ),

            criarQuestao(
                "Desafio final 👀: 134 ÷ 2 = ? 67 apareceu!",
                "67",
                criarAlternativas(67, [57, 77, 87]),
                "➗ Divisão"
            )

        ],


        /* =================================================
           FRAÇÕES
        ================================================= */

        fracoes: [

            criarQuestao(
                "Qual fração representa metade de um inteiro?",
                "1/2",
                ["1/2", "1/3", "2/3", "3/4"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual fração representa um quarto?",
                "1/4",
                ["1/4", "1/2", "2/4", "3/4"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual é o numerador de 3/5?",
                "3",
                ["3", "5", "2", "8"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual é o denominador de 7/9?",
                "9",
                ["9", "7", "2", "16"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual fração é equivalente a 1/2?",
                "2/4",
                ["2/4", "2/3", "3/5", "4/5"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual fração representa três partes de um total de quatro?",
                "3/4",
                ["3/4", "1/4", "2/4", "4/3"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 1/2 + 1/2?",
                "1",
                ["1", "1/2", "2", "1/4"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 1/4 + 1/4?",
                "1/2",
                ["1/2", "1/4", "1", "3/4"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 2/5 + 1/5?",
                "3/5",
                ["3/5", "2/5", "4/5", "1/5"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 5/6 − 2/6?",
                "3/6",
                ["3/6", "2/6", "4/6", "1/6"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual é maior: 1/2 ou 1/4?",
                "1/2",
                ["1/2", "1/4", "1/8", "São iguais"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Qual é menor: 2/3 ou 1/3?",
                "1/3",
                ["1/3", "2/3", "3/3", "São iguais"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 3/4 de 20?",
                "15",
                ["15", "10", "12", "16"],
                "🍕 Frações"
            ),

            criarQuestao(
                "Quanto é 1/2 de 30?",
                "15",
                ["15", "10", "20", "25"],
                "🍕 Frações"
            ),

            criarQuestao(
                "67 apareceu 👀. Qual fração representa 67 de 100?",
                "67/100",
                ["67/100", "6/7", "7/6", "67/10"],
                "🍕 Frações"
            )

        ],


        /* =================================================
           DECIMAIS
        ================================================= */

        decimais: [

            criarQuestao(
                "Qual número é maior?",
                "2,5",
                ["2,5", "2,05", "2,15", "2,01"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 1,5 + 2,5?",
                "4",
                ["4", "3", "4,5", "5"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 5,5 − 2,5?",
                "3",
                ["3", "2", "3,5", "4"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 2,5 × 2?",
                "5",
                ["5", "4", "4,5", "6"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 10,5 ÷ 2?",
                "5,25",
                ["5,25", "5", "5,5", "6,25"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Qual número representa cinco décimos?",
                "0,5",
                ["0,5", "0,05", "5,0", "0,15"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Qual número é igual a 2 + 0,5?",
                "2,5",
                ["2,5", "2,05", "3,5", "2,15"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Qual é maior: 3,7 ou 3,07?",
                "3,7",
                ["3,7", "3,07", "3,17", "3,007"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 4,25 + 1,75?",
                "6",
                ["6", "5", "5,5", "6,5"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 8,5 − 3,5?",
                "5",
                ["5", "4", "5,5", "6"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 0,5 + 0,25?",
                "0,75",
                ["0,75", "0,5", "0,25", "1"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Quanto é 6,7 + 0,3?",
                "7",
                ["7", "6", "6,9", "7,3"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Qual número é menor?",
                "1,25",
                ["1,25", "1,5", "1,75", "2,05"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "Qual número decimal representa 67 centésimos?",
                "0,67",
                ["0,67", "6,7", "0,067", "67,0"],
                "🔢 Números Decimais"
            ),

            criarQuestao(
                "O meme 67 virou decimal 😂. Qual é 67 ÷ 10?",
                "6,7",
                ["6,7", "0,67", "67", "0,067"],
                "🔢 Números Decimais"
            )

        ],


        /* =================================================
           PORCENTAGEM
        ================================================= */

        porcentagem: [

            criarQuestao(
                "Quanto é 10% de 100?",
                "10",
                ["10", "5", "20", "50"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 50% de 80?",
                "40",
                ["40", "20", "30", "60"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 25% de 100?",
                "25",
                ["25", "20", "50", "75"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 50% de 60?",
                "30",
                ["30", "20", "40", "50"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 10% de 70?",
                "7",
                ["7", "6", "8", "10"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 20% de 50?",
                "10",
                ["10", "5", "15", "20"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 25% de 40?",
                "10",
                ["10", "5", "15", "20"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 50% de 200?",
                "100",
                ["100", "50", "150", "120"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 10% de 250?",
                "25",
                ["25", "20", "30", "50"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 75% de 100?",
                "75",
                ["75", "25", "50", "80"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 50% de 34?",
                "17",
                ["17", "14", "16", "20"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 25% de 80?",
                "20",
                ["20", "10", "30", "40"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Quanto é 10% de 90?",
                "9",
                ["9", "8", "10", "18"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "Qual porcentagem representa metade de um total?",
                "50%",
                ["50%", "10%", "25%", "75%"],
                "💯 Porcentagem"
            ),

            criarQuestao(
                "67 entrou na porcentagem 😎. Quanto é 100% de 67?",
                "67",
                ["67", "6,7", "33,5", "134"],
                "💯 Porcentagem"
            )

        ],


        /* =================================================
           GEOMETRIA
        ================================================= */

        geometria: [

            criarQuestao(
                "Quantos lados possui um triângulo?",
                "3",
                ["3", "2", "4", "5"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos lados possui um quadrado?",
                "4",
                ["4", "3", "5", "6"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos lados possui um pentágono?",
                "5",
                ["5", "4", "6", "7"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos lados possui um hexágono?",
                "6",
                ["6", "5", "7", "8"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos lados possui um octógono?",
                "8",
                ["8", "6", "7", "9"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos graus possui um ângulo reto?",
                "90°",
                ["90°", "45°", "60°", "180°"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual figura possui três lados?",
                "Triângulo",
                ["Triângulo", "Quadrado", "Pentágono", "Hexágono"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual figura possui quatro lados iguais?",
                "Quadrado",
                ["Quadrado", "Triângulo", "Círculo", "Pentágono"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual é o perímetro de um quadrado com lado de 5 cm?",
                "20 cm",
                ["20 cm", "10 cm", "15 cm", "25 cm"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual é o perímetro de um retângulo com lados 5 cm e 3 cm?",
                "16 cm",
                ["16 cm", "8 cm", "15 cm", "20 cm"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual é a área de um quadrado de lado 4 cm?",
                "16 cm²",
                ["16 cm²", "8 cm²", "12 cm²", "20 cm²"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos vértices possui um cubo?",
                "8",
                ["8", "6", "10", "12"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Quantos graus possui uma volta completa?",
                "360°",
                ["360°", "90°", "180°", "270°"],
                "📐 Geometria"
            ),

            criarQuestao(
                "Qual figura não possui lados retos?",
                "Círculo",
                ["Círculo", "Triângulo", "Quadrado", "Pentágono"],
                "📐 Geometria"
            ),

            criarQuestao(
                "O 67 chegou na geometria 👀. Um hexágono possui quantos lados?",
                "6",
                ["6", "5", "7", "8"],
                "📐 Geometria"
            )

        ]

    };


    /* =====================================================
       ESTADO DO JOGO
    ===================================================== */

    let setorAtual = null;
    let perguntasAtuais = [];
    let indiceAtual = 0;
    let pontuacao = 0;
    let vidas = 3;
    let acertos = 0;
    let erros = 0;
    let respondeu = false;


    /* =====================================================
       ELEMENTOS HTML
    ===================================================== */

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


    /* =====================================================
       VERIFICAÇÃO
       Se algum elemento estiver faltando, avisa no console.
    ===================================================== */

    const elementosObrigatorios = [
        telaInicial,
        telaSetores,
        telaJogo,
        telaFinal,
        btnComecar,
        btnVoltarInicio,
        btnVoltarSetores,
        btnProxima,
        btnJogarNovamente,
        btnEscolherSetor,
        gridSetores
    ];


    const htmlEstaCorreto =
        elementosObrigatorios.every(
            elemento => elemento !== null
        );


    if (!htmlEstaCorreto) {

        console.error(
            "STEIN: algum elemento do HTML não foi encontrado."
        );

        return;

    }


    /* =====================================================
       TROCAR DE TELA
    ===================================================== */

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


    /* =====================================================
       MENU DE SETORES
    ===================================================== */

    function criarMenuSetores() {

        gridSetores.innerHTML = "";


        Object.entries(setores).forEach(
            ([chave, setor]) => {

                const botao =
                    document.createElement("button");


                botao.type = "button";

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


    /* =====================================================
       INICIAR SETOR
    ===================================================== */

    function iniciarSetor(chave) {

        setorAtual = chave;


        // Copia e embaralha as perguntas
        perguntasAtuais =
            embaralhar(banco[chave]);


        // Garante exatamente 15
        perguntasAtuais =
            perguntasAtuais.slice(0, 15);


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


    /* =====================================================
       CARREGAR PERGUNTA
    ===================================================== */

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


                botao.type = "button";

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


    /* =====================================================
       VERIFICAR RESPOSTA
    ===================================================== */

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
                        String(alternativa) ===
                        String(perguntaAtual.correta)
                );


        if (
            indiceSelecionado ===
            respostaCorreta
        ) {

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

            botaoSelecionado
                .classList
                .add("errada");


            if (respostaCorreta >= 0) {

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


    /* =====================================================
       PONTUAÇÃO
    ===================================================== */

    function atualizarPontuacao() {

        pontuacaoElemento.textContent =
            pontuacao;

    }


    /* =====================================================
       VIDAS
    ===================================================== */

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


    /* =====================================================
       PRÓXIMA QUESTÃO
    ===================================================== */

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


    /* =====================================================
       FINALIZAR
    ===================================================== */

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

            iconeResultado.textContent = "💪";

            tituloResultado.textContent =
                "Suas vidas acabaram!";

            mensagemResultado.textContent =
                "Não desista! Continue praticando e tente novamente.";

        }

        else if (porcentagem >= 90) {

            iconeResultado.textContent = "🏆";

            tituloResultado.textContent =
                "VOCÊ É BRABO!";

            mensagemResultado.textContent =
                "Mandou muito bem! Seu cérebro está em modo STEIN.";

        }

        else if (porcentagem >= 70) {

            iconeResultado.textContent = "🌟";

            tituloResultado.textContent =
                "Muito bem!";

            mensagemResultado.textContent =
                "Você está dominando esse setor!";

        }

        else if (porcentagem >= 50) {

            iconeResultado.textContent = "👍";

            tituloResultado.textContent =
                "Bom trabalho!";

            mensagemResultado.textContent =
                "Você está no caminho certo. Continue praticando!";

        }

        else {

            iconeResultado.textContent = "🧠";

            tituloResultado.textContent =
                "Hora de tentar de novo!";

            mensagemResultado.textContent =
                "Cada erro é uma oportunidade de aprender.";

        }


        mostrarTela(telaFinal);

    }


    /* =====================================================
       EVENTOS DOS BOTÕES
    ===================================================== */

    btnComecar.addEventListener(
        "click",
        function () {

            mostrarTela(telaSetores);

        }
    );


    btnVoltarInicio.addEventListener(
        "click",
        function () {

            mostrarTela(telaInicial);

        }
    );


    btnVoltarSetores.addEventListener(
        "click",
        function () {

            mostrarTela(telaSetores);

        }
    );


    btnProxima.addEventListener(
        "click",
        function () {

            proximaPergunta();

        }
    );


    btnJogarNovamente.addEventListener(
        "click",
        function () {

            if (setorAtual) {

                iniciarSetor(setorAtual);

            } else {

                mostrarTela(telaSetores);

            }

        }
    );


    btnEscolherSetor.addEventListener(
        "click",
        function () {

            mostrarTela(telaSetores);

        }
    );


    /* =====================================================
       INICIAR MENU
    ===================================================== */

    criarMenuSetores();

    console.log("STEIN carregado com sucesso! 🎮");

});