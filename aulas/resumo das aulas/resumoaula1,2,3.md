# 📘 Primeiros Passos com JavaScript

## ✅ Aula 1 – Variáveis e Operadores

- Declaramos variáveis usando `const`.
- Aplicamos operadores aritméticos como `+`, `*`, `-`.
- Exemplo prático:
  - Cálculo do valor total de uma compra.
  - Aplicação de 10% de desconto sobre o total.
  
```javascript
const nomeProduto = "Camiseta";
const valorProduto = 150;
const quantComprada = 2;

const valorTotal = valorProduto * quantComprada;
const desconto = 0.1;
const valorComDesconto = valorTotal - (valorTotal * desconto);

console.log("Total:", valorTotal);
console.log("Com desconto:", valorComDesconto);
```

## ✅ Aula 2 – Estruturas Condicionais
Utilizamos if, else if e else para tomar decisões com base em condições.

Exemplo:

Verificação de maioridade e possibilidade de tirar habilitação.

📌 Exemplo:
``` javascript
const idade = 25;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else if (idade >= 16 && idade < 18) {
    console.log("Você é menor de idade, mas pode tirar habilitação");
} else {
    console.log("Você é menor de idade");
} 
 ```

 ## ✅ Aula 3 – Praticando: Variáveis + Operadores + Condições
Cálculo da média de 3 notas.

Uso de operadores para fazer o cálculo.

Uso de estrutura condicional para determinar a situação do aluno:

>= 7: Aprovado

>= 5 e < 7: Recuperação

< 5: Reprovado

Utilização de .toFixed(1) para exibir a média com uma casa decimal.

📌 Exemplo:

``` javascript
const nome = "João";
const nota1 = 5;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Aprovado`);
} else if (media >= 5 && media < 7) {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Recuperação`);
} else {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Reprovado`);
}
```
