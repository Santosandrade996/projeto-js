//Diferenças entre variaveis e tipos operadores
//Exercicio de calculo de valor de uma viagem....

/*let variavel = 10 + 10;
console.log(variavel);*/

//Exercicios

const precoEtanol = 5.79;
const precoGasolina = 7.49;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const valorEtanol = (distanciaEmKm / kmPorLitro) * precoEtanol;
const valorGasolina = (distanciaEmKm / kmPorLitro) * precoGasolina;


console.log('Valor a ser gasto com Etanol: R$' + valorEtanol.toFixed(2));
console.log('Valor a ser gasto com Gasolina: R$' + valorGasolina.toFixed(2));