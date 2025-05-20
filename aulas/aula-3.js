//Praticando tudo junto

/*let nome = "Lucas";
let idade = 30;
let temRg = true;

console.log("Nome:", nome);
console.log("Idade:", idade);

if(idade >= 18 && temRg === true) {
    console.log("Você pode tirar a habilitação");
}else {
    console.log("Você não pode tirar a habilitação");
}*/

//exercício 3

const nome = "João";
const nota1 = 9;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 +nota3) / 3;

if(media >= 7) {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Aprovado`);
} else if(media >= 5 && media < 6.9) {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Recuperação`);
} else {
    console.log(`Aluno: ${nome}, Média: ${media.toFixed(1)}, Situação: Reprovado`);
}






