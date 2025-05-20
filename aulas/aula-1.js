//Como declarar as variáveis

/*let nome = "Lucas";
const idade = 25;
let altura = 1.75;

//Operadores matemáticos
let soma = 10 + 5;
let subtração = 10 - 2;
let multiplicação = 10 * 2;
let divisao = 20 / 4;

//operadores lógicos e comparação
let maiorDeIdade = idade >= 18; //true
let eIgual = nome === "Lucas"; //true

//Exibindo os resultados
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("É maior de idade?", maiorDeIdade);*/

//Exercício 1

const nomeproduto ="Camiseta";
const valorProduto = 150;
const quantComprada = 2;

const valorTotal = valorProduto * quantComprada;
const desconto = 0.1; //10% de desconto
const valorComDesconto = valorTotal - (valorTotal * desconto);

console.log("Você comprou", quantComprada, "unidades de Camisetas", "No Total de: R$", valorTotal);
console.log("Com desconto de 10%:", valorComDesconto);
