//partes do texto que se repetem
const inicioTexto = "O Herói tem o saldo de "
const fimTexto = " vitórias e está no nível: "

// Variável que guarda o resultado da função que calcula o (vitórias - derrotas)
// é nesta váriavel que se altera os números de vítoras e de derrotas
let resultado = calcularSaldoDeVitorias(89, 27);

// Função para calcular (vitorias - derrotas)
function calcularSaldoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}

// FUNÇÃO para classificar o Herói de acordo com o seu número de vitórias
function classificarHeroi(){
    //Se o saldo de vitórias for menor do que 10 = Ferro
    if (resultado <= 10){
        console.log(inicioTexto + resultado + fimTexto + "Ferro");
    }
    //Se o saldo de vitórias for entre 11 e 20 = Bronze
    else if (resultado > 10 && resultado <= 20){
        console.log(inicioTexto + resultado + fimTexto + "Bronze");
    }
    //Se o saldo de vitórias for entre 21 e 50 = Prata
    else if (resultado > 20 && resultado <= 50){
        console.log(inicioTexto + resultado + fimTexto + "Prata");
    }
    //Se o saldo de vitórias for entre 51 e 80 = Ouro
    else if (resultado > 50 && resultado <= 80){
        console.log(inicioTexto + resultado + fimTexto + "Ouro");
    }
    //Se o saldo de vitórias for entre 81 e 90 = Diamante
    else if (resultado > 80 && resultado <= 90){
        console.log(inicioTexto + resultado + fimTexto + "Diamante");
    }
    //Se o saldo de vitórias for entre 91 e 100= Lendário
    else if (resultado > 90 && resultado <= 100){
        console.log(inicioTexto + resultado + fimTexto + "Lendário");
    }
    //Se o saldo de vitórias for maior ou igual a 101 = Imortal
    else {
        console.log(inicioTexto + resultado + fimTexto + "Imortal");
    }
}

//Saída
//Chamando a função que classificou o Herói
classificarHeroi();
