/*function saudacao() {
    console.log("Bem-vindo ao curso de JavaScript!");
}*/

//1-Função sem parametros
/*function mostrarMensagem() {
    console.log("Essa é uma função sem parâmetros.");
}

mostrarMensagem();

//2-Função com parâmetros
function somar(a, b) {
    console.log("Resultado", a + b);
}

somar(5, 10); //Resultado: 15

//3-Função com retorno
function dividir(x,y) {
    return x / y;
}

let resultado = dividir(10, 2);
console.log("Resultado da divisão:", resultado); //Resultado: 5

//4-Função anônima(Sem nome)
const saudacao = function(nome) {
    return `olá, ${nome}!`;
};
console.log(saudacao("Lucas")); //Resultado: olá, Lucas!

//5-função arrow(Função de seta)
const dobre = (n) => n * 2;
console.log(dobre(5)); //Resultado: 10*/

//exercicios

//1-Função que verifica se um número é positivo, negativo ou zero
function verificaNumero(n) {
    if (n > 0){
        return "O número é positivo.";
    }else if (n < 0){
        return "O número é negativo.";
    }else{
        return "O número é zero.";
    }
}

console.log(verificaNumero(-3)); //Resultado: O número é negativo.


//2-Função que recebe um nome e retorna uma saudação personalizada
function cumprimentar(nome){
    return `olá, ${nome}! Seja bem-vindo(a) ao mundo de JavaScript!`;
}

console.log(cumprimentar("Mario Jorge")); //Resultado: olá, Mario Jorge! Seja bem-vindo(a) ao mundo de JavaScript!

//3- Função que calcula o fatorial de um número
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusParaFahrenheit(25)); //Resultado: 77

//4-Função que calcula quanto tempo falta até uma pessoa se aposentar
function tempoAposentadoria(idadeAtual, idadeAposentadoria) {
    let anosRestantes = idadeAposentadoria - idadeAtual;
    if (anosRestantes > 0) {
        return `Faltam ${anosRestantes} anos para a aposentadoria.`;
    } else {
        return "Você já pode se aposentar!";
    }
}
console.log(tempoAposentadoria(30, 65)); //Resultado: Faltam 35 anos para a aposentadoria.

//5-Função que calcula o fatorial de um número
function fatorial(n) {
    let resultado =1;
    for (let i =1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5)); //Resultado: 120