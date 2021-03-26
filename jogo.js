//Iniciar Variáveis
const tabuleiro = ['', '', '', '', '', '', '', '', ''];
let vezJogador = 0;
let fimDeJogo = false;

let simbolos = ['o', 'x'];

 //Array que contem todas as condições de vitória
const condicaoDeVitoria = [
    //Condições na Horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //Condições na Vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //Condições na Diagonal
    [0,4,8],
    [2,4,6]
]


function movimento(posicao){

    if(fimDeJogo){
        
        return;
    }

    //Verifica se o campo já foi preenchido
    if(tabuleiro[posicao] == ''){
        tabuleiro[posicao] = simbolos[vezJogador];

        fimDeJogo = venceu();

        if(fimDeJogo == false){
            //Muda a vez do jogar, entre o jogador 1 e 2
            vezJogador == 0 ? vezJogador = 1 : vezJogador = 0;
        }else{
            //Atrasa a mensagem para dar tempo de colocar a imagem
            setTimeout(() =>{
                alert("O jogo acabou!");
            },10);
        }

    }else{
        alert("Campo já preenchido!");
    } 

    return fimDeJogo;
}

function venceu(){

    for(let i = 0; i < condicaoDeVitoria.length; i++){
        let sequencia = condicaoDeVitoria[i];

        let posicao1 = sequencia[0];
        let posicao2 = sequencia[1];
        let posicao3 = sequencia[2];

        //Verifica se em uma condição de vitória, foi atendida por um jogador. Também verifica se o compo está vazio
        if(tabuleiro[posicao1] == tabuleiro[posicao2] && 
            tabuleiro[posicao1] == tabuleiro[posicao3] && 
            tabuleiro[posicao1] != ''){
                
            return true;
        }
    }
    return false;
}

function zerarPlacar(){
    let quadrados = document.querySelectorAll(".quadrado");

    //Para cada quadrado, adiciona um evento de "click"
        quadrados.forEach((quadrado)=>{
            quadrado.tabuleiro = '';
            quadrado.vezJogador = 0;
            quadrado.fimDeJogo = false;
    })
}
