//Um array é uma lista de valores, onde cada valor ocupa uma posição (índice).

/*const frutas =['maçã', 'banana', 'laranja', 'uva'];
console.log(frutas[0]); // Acessa o primeiro elemento do array
console.log(frutas[2]); // Acessa o terceiro elemento do array  
console.log(frutas.length); // Exibe o tamanho do array*/

/*const numeros = [10, 20, 30, 40, 50];
numeros.push(60); // Adiciona o número 60 ao final do array
numeros.pop(); // Remove o último elemento do array
numeros[4] = 100; // Substitui o quinto elemento do array por 100
console.log(numeros); // Exibe o array atualizado*/

/*for (let i =0; i < 10; i++) {
    console.log(i); // Exibe os números de 0 a 9
}*/

/*let contador = 0;
while (contador < 3) {
    console.log(contador); // Exibe os números de 0 a 2
    contador++; // Incrementa o contador
}*/

/*const nomes = ['Alice', 'Bob', 'Charlie', 'David'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]); // Exibe cada nome do array
}*/

/* (let i = 0; i <= 10; i++) {
    if (i % 2 ===0) {
        console.log(i + ' é par'); // Exibe se o número é par
    }
    
}*/

//Exercicios

/*  Crie um array com 4 cores favoritas suas. Depois, exiba no console:*/
const cores = ['azul', 'verde', 'vermelho', 'amarelo'];
console.log('Primeira cor:', cores[0]); // azul
console.log('Última cor:', cores[cores.length - 1]); // amarelo


/*rie um for que imprima os números de 1 a 10 no console.
Bônus: Se o número for par, imprima "é par", se for ímpar, imprima "é ímpar".*/


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' é par');
        numero = i;
    } else {
        console.log(i + ' é ímpar');
        numero = i;
    }
}
console.log('Último número verificado: ' + numero);


// Crie um array com 5 números e use um for para: somar todos os valores do array. Exibir a soma total no console.//


const numeros = [49, 90, 74, 45, 12];

let soma = 0;
for (let i =0; i < numeros.length; i++) {
    soma += numeros[i]; // Soma cada número do array
}
console.log('Soma total: ' + soma); // Exibe a soma total no console