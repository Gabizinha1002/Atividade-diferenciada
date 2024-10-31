let perguntaAtual = 0;
let perguntas = [
    {
        codigo: `Em uma página web, temos dois parágrafos dentro de uma caixa. Quantos elementos de parágrafo existem dentro dessa caixa?\n\nExemplo de código:\nDiv - Início\n    Parágrafo - Primeiro parágrafo\n    Parágrafo - Segundo parágrafo\nDiv - Fim`,
        resposta: 2,
        opcoes: [1, 2, 3, 4]
    },
    {
        codigo: `Em um arquivo CSS, temos a seguinte regra:\n\n.caixa {\n    background-color: red;\n}\n\nNo HTML, aplicamos essa classe em um elemento Div:\n\n<div class="caixa"></div>\n\nQual será a cor de fundo exibida no elemento?`,
        resposta: "vermelho",
        opcoes: ["azul", "verde", "vermelho", "sem cor"]
    },
    {
        codigo: `Um loop em HTML/CSS imprime o valor de i de 0 a 2. Qual será a saída do programa?\n\nExemplo de código:\npara i em intervalo(3):\n    Imprimir(i)`,
        resposta: "0 1 2",
        opcoes: ["1", "2", "0 1 2", "Nenhuma saída"]
    }
];

function exibirPergunta() {
    document.getElementById("codigo").innerText = perguntas[perguntaAtual].codigo;
    let opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";
    perguntas[perguntaAtual].opcoes.forEach(opcao => {
        let botao = document.createElement("button");
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(opcao);
        opcoes.appendChild(botao);
    });
    document.getElementById("feedback").innerText = "";
    document.getElementById("proximo-botao").style.display = "none";
}

function verificarResposta(respostaSelecionada) {
    let respostaCorreta = perguntas[perguntaAtual].resposta;
    if (respostaSelecionada === respostaCorreta) {
        document.getElementById("feedback").innerText = "Correto!";
        document.getElementById("proximo-botao").style.display = "inline";
    } else {
        document.getElementById("feedback").innerText = "Incorreto. Tente novamente!";
    }
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        document.getElementById("pergunta").innerHTML = "<p>Parabéns! Você completou todos os desafios!</p>";
    }
}

// Inicializa o jogo com a primeira pergunta
exibirPergunta();
