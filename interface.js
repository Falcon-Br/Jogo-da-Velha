
//Garante que arquivo já foi carregado
document.addEventListener('DOMContentLoaded',()=>{

    //Seleciona todos as classes ".quadrado"
    let quadrados = document.querySelectorAll(".quadrado");

    //Para cada quadrado, adiciona um evento de "click"
    quadrados.forEach((quadrado)=>{
        quadrado.addEventListener('click', clickJogador);
    })
})

function clickJogador(evento){
    
    console.log(evento.target);// "target" é o elemento que sofreu a evento
    let quadrado = evento.target;
    let posicao = quadrado.id;

    movimento(posicao);
    updateQuadrado(posicao);
}

function updateQuadrado(posicao){
    let quadrado = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    quadrado.innerHTML = `<div class='${simbolo}'></div>`
}

function continuar(){
    const nomeJogador1 = document.getElementById("nomeJogador1");
    const jogador1 = document.getElementById("jogador1");
    jogador1.innerHTML = `<p>${nomeJogador1.value}</p>`
    console.log(nomeJogador1.value);
    

    const nomeJogador2 = document.getElementById("nomeJogador2");
    const jogador2 = document.getElementById("jogador2");
    jogador2.innerHTML = `<p>${nomeJogador2.value}</p>`
    console.log(nomeJogador2.value);

    const comecoStyle = document.getElementById("comecoDeJogo");
    comecoStyle.style.display = 'none';
    
}
