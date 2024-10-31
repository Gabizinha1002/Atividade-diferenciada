let perguntaAtual = 0;
let perguntas = [
    {
        codigo: `let x = 10;\nx += 5;\nx *= 2;\nconsole.log(x);`,
        resposta: 30,
        escolha: [15, 20, 25, 30]
    },
    {
        codigo: `let y = 3;\ny -= 1;\ny **= 2;\nconsole.log(y);`,
        resposta: 4,
        escolha: [2, 4, 8, 9]
    },
    {
        codigo: `let a = 2;\nlet b = 5;\nlet c = a + b * 3;\nconsole.log(c);`,
        resposta: 17,
        escolha: [11, 15, 17, 21]
    }
];

function exibirPergunta() {
    document.getElementById("codigo").innerText = perguntas[perguntaAtual].codigo;
    let escolha = document.getElementById("escolha");
    escolha.innerHTML = "";
    perguntas[perguntaAtual].escolha.forEach(opcao => {
        let botao = document.createElement("button");
        botao.innerText = opcao;
        botao.onclick = () => verificarResposta(opcao);
        escolha.appendChild(botao);
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
