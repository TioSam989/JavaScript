var vezDeQuem = 0;
var contador = 0;

number1 = 0;
number2 = 0;

var tabuleiro = {
    nome: 'Jogo do Davi',
    '0_0': '1',
    '1_0': '2',
    '2_0': '3',
    '0_1': '4',
    '1_1': '5',
    '2_1': '6',
    '0_2': '7',
    '1_2': '8',
    '2_2': '9',
};

/**
 * Variavel do jogador 1.
 */
var player1 = {};

var player2 = {};

function Distribuir(x, y) {
    // console.log(x, y);

    var valor = tabuleiro[`${x}_${y}`];

    // verificarLocal(x, y, valor);
    verificarVez(x, y, valor);


}

function verificarVez(x, y, valor) {

    if (document.getElementById(valor).style.backgroundColor) {

    } else {

        if (vezDeQuem == 0) {
            var cor = "blue";
            // console.log("vez de " + vezDeQuem);

            vezDeQuem = 1;
            mudarCor(x, y, valor, cor);

        } else if (vezDeQuem == 1) {
            var cor = "green";
            // console.log("vez de " + vezDeQuem);

            vezDeQuem = 0;
            mudarCor(x, y, valor, cor);
        }
    }


}

function mudarCor(x, y, valor, cor) {

    document.getElementById(valor).style.backgroundColor = cor;
    contador++;
    // console.log("contador esta em " + contador);
    // NESSA PARTE SE VERIFICA SE TEM COMO GANHAR NA ATUAL RODADA****************************
    if (contador >= 1) {

        // console.log("contador é " + contador);
        // console.log("resto de divisão por 5 deu " + contador % 5);
        // console.log("por acaso deu ? " + contador % 5 == 0);

        if (contador / 5 >= 1) {
            verificarGanhador(x, y, valor);

        } else {

            verificarGanhador(x, y, valor);
            // console.log("ainda nao da pra ganhar na " + contador + "ª rodada")
        }
    }
    // ****************************************************************************************
}

function verificarGanhador(x, y, valor) {
    // ESSA PARTE FAÇO DEPOIS, CHEGA POR HOJE*****************************
    if (contador % 2 == 1) {
        // console.log("funcao jogador 1 chamada");
        primeiroJogador(x, y, valor);    //<= mudei de funcao pessoal para compartilhada 
        // number1++;
        // ganhadorJogador(x, y, valor, "1");



    } else if (contador % 2 == 0) {
        // console.log("funcao jogador 2 chamada");
        segundoJogador(x, y, valor);      //<= mudei de funcao pessoal oara compartilhada
        // number2++;
        // ganhadorJogador(x, y, valor, "2");

    }
    // *******************************************************************

    verificaEmXeY(player1, 'Davi');
    verificaEmXeY(player2, 'Arthur');


}

/**
 * Posição da letra dentro da chave dentro do jogador:
 * ex:
 *  x_y -> 3_1 -> 
 *      X é posição 0, que então é 3
 *      Y é posição 2, que então é 1
 */
const POSICOES = {
    X: 0,
    Y: 2,
}

function verificaEmXeY(jogador, nomeJogador) {
    verificaEmPosicao(jogador, nomeJogador, POSICOES.X);
    verificaEmPosicao(jogador, nomeJogador, POSICOES.Y);
    verificaEmDiagonal(jogador, nomeJogador )
}

function verificaEmPosicao(jogador, nomeJogador, posicao) {
    var quantasVezes = {
        0: 0,
        1: 0,
        2: 0
    };

    Object.keys(jogador).forEach(key => {
        const parteDaChave = key[posicao]; // "x_y" -> "2_0 ->" -> "0"
        quantasVezes[parteDaChave]++;   
    });

    // console.log({ jogador, quantasVezes });

    Object.values(quantasVezes).forEach(value => {
        if (value >= 3) {
            // alert(`Jogador ${nomeJogador} ganhou.`);
            vitoria(nomeJogador)
        }
    });
}

function verificaEmDiagonal(jogador, nomeJogador) {

    var quantasVezesX = {
        0: 0,
        1: 0,
        2: 0
    };

    var quantasVezesY = {
        0: 0,
        1: 0,
        2: 0
    };

    Object.keys(jogador).forEach(key => {
        const parteDaChaveY = key[POSICOES.Y]; // "x_y" -> "2_0 ->" -> "0"
        const parteDaChaveX = key[POSICOES.X];
        quantasVezesY[parteDaChaveY]++;
        quantasVezesX[parteDaChaveX]++;
    });

    var estaGanhando = true;
    Object.values(quantasVezesY).forEach(value => { 
        estaGanhando = estaGanhando && value >= 1;
        // estaGanhando &= value >= 1;
    });

    Object.values(quantasVezesY).forEach(value => {
        estaGanhando = estaGanhando && value >= 1;
        // estaGanhando &= value >= 1;
    });
    Object.values(quantasVezesX).forEach(value => {
        estaGanhando = estaGanhando && value >= 1;
        // estaGanhando &= value >= 1;
    });
     

    
    if (estaGanhando ) {

        // bugDiagonal()
        // var valores = 
        // console.log(`Values: ${valores}`)
        console.log("AQUI CARALHO "+Object.keys(jogador))
        console.log(quantasVezesX[1] +" E "+quantasVezesY[1]);      

        bugDiagonal(jogador, nomeJogador)
    }
        
}

function primeiroJogador(x, y, valor) {
    // alert("jogador um clicou");

    number1++;

    // // console.log("contador do numero 1 ta em " + number1);
    // // console.log("valor player 1: " + valor);
    // // console.log("x é " + x + " e y é " + y);

    player1[`${x}_${y}`] = number1;

    var chaves1 = Object.keys(player1);

    console.clear();
    console.log("valor: "+Object.keys(player1));
    console.log("player1 : "+player1);
    console.log("number1 : "+number1);



    // console.log("chaves do 1 são "+chaves1);

    // console.log("**************************");

}

function segundoJogador(x, y, valor) {
    // alert("jogador dois clicou");

    number2++;

    // // console.log("contador do numero 2 ta em " + number2);
    // // console.log("valor player 2: " + player2);
    // // console.log("x é " + x + " e y é " + y);

    player2[`${x}_${y}`] = number2;

    var chaves2 = Object.keys(player2);


    console.clear();
    console.log("valor:"+Object.keys(player2));
    console.log("chaves2: "+chaves2);
    console.log("player2 jogou em: "+player2);
    console.log("number2 : "+number2)

    var chaves2 = Object.keys(player2);

    // console.log("o objeto tem " + chaves2);

    // console.log("o x é " + x);

    for (let comeco = 0; comeco < Object.keys(player2).length; comeco++) {
        // console.log(chaves2 [comeco]);

    }
    // // console.log("chaves do 2 são "+ chaves2 []);

    // var pares2 = chaves2.forEach (function (x , y){
    //     // console.log("aqui esta o X e Y: " + x, y);
    // });

}
// ganhadorJogador(x, y, valor, qualJogador){

// }

function bugDiagonal(jogador, nomeJogador){
    console.clear();
    // console.log("amem")
    var listaKeys = [];

    for (var index = 0; index < Object.keys(jogador).length; index++) {
        
        // console.log("RESULTADO: "+Object.keys(jogador)[index]);
        listaKeys.push(Object.keys(jogador)[index])
    }

    console.log(listaKeys)

    var copy = listaKeys.slice() 
    var iDontKnow = []

    for (let i = 0; i < copy.length; i++) {
        if(copy[i][0] != copy[i][2]){
            let result = copy[i][0]+"_"+copy[i][2] 
            iDontKnow.push(result)
        }      
    }
    if(Array.isArray(iDontKnow)){
        if(iDontKnow == ""){ //ver se ela esta vazia (se fosse so um ! seria vazio, ent pus !! para contrariar o contrario)
            // vitoria(nomeJogador);
            alert(`Jogador ${nomeJogador} ganhou.`);
            // window.location.reload(true);
            console.log("") 
        }else{
            alert("copy: "+copy)
            console.log("Copy: "+copy)
            console.log("jogador: "+jogador)
            console.log("iDontKnow: "+iDontKnow)
            

            // console.clear();
        }
    }

}  
// function verSedarCerto(copy,){
//     if(copy  
// }

function vitoria(nomeJogador){
        //  alert()
        alert(`Jogador ${nomeJogador} ganhou.`);
        window.location.reload(true); 
}

// COISAS PARA FAZER => a funcao diagonal so ve no sentido esquerda para direita e tem um bug no outro sentido
// BUG => a funcao so ve se for direto para a direita, nao deixando nenhum rastro

