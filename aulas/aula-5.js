//Entendendo Objetos

/*let pessoa = {
    nome: "Ana Clara",
    idade: 56,
    cidade: "São Paulo",
    falar: function() {
        console.log("Oi, meu nome é:" + this.nome);
    }
};

pessoa.falar();
// Adicionando uma nova propriedade */

// Entendendo Classes
/*class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade= idade;
    }

    falar() {
        console.log(`oi, meu nome é: ${this.nome}`);
    }
}
let pessoa1 = new Pessoa("Ana Clara", 29);
pessoa1.falar(); //saída: oi, meu nome é: Ana Clara*/

//Praticando com Objetos e Classes
/*class carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    buzinar() {
        console.log(`${this.modelo} Buzinando: Beep beep!`);
    }
}
let carro1 = new carro("Toyota", "Corolla", 2020);
let carro2 =new carro("Honda", "Civic", 2021);

carro1.buzinar(); //saída: Buzinando: Beep beep!
carro2.buzinar(); //saída: Buzinando: Beep beep!*/

//exercicios

//1.  Desafio 1: Cadastro de Produto
/*let produto = {
    nome: "Tablet",
    preco: 2500,
    estoque: 45,
};

// Função para cadastrar produto
function cadastroProduto(produto) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço: R$ ${produto.preco}`);
    console.log(`Estoque: ${produto.estoque} unidades`);
}
cadastroProduto(produto); //saída: Produto: Tablet
//Preço: R$ 250000
//Estoque: 45 unidades*/

//2. Desafio classe: Cadastro de Aluno
/*class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e estou cursando ${this.curso}`);
    }
}

let aluno1 = new Aluno("Clarice", 34, "Engenharia");
let aluno2 = new Aluno("Lucas", 22, "Administração");

aluno1.apresentar(); //saída: olá, meu nome é Clarice, eu tenho 34 anos e estou cursando no momento Engenharia
aluno2.apresentar(); //saída: olá, meu nome é Lucas, eu tenho 22 anos e estou cursando no momento Administração*/

//3. Desafio classe: Sistema de Conta Bancária
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`${this.titular}: Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`${this.titular}: Saldo insuficiente para saque de R$ ${valor.toFixed(2)}. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
        } else {
            this.saldo -= valor;
            console.log(`${this.titular}: Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        }
    }
}

// Criando contas
let conta1 = new ContaBancaria("Ana Clara", 5000);
let conta2 = new ContaBancaria("Lucas", 2000);

// Operações
conta1.depositar(1000);   // Ana Clara: Depósito...
conta1.sacar(2000);       // Ana Clara: Saque...

conta2.sacar(2500);       // Lucas: Saldo insuficiente...

conta2.depositar(500);    // Lucas: Depósito...
conta2.sacar(2000);       // Lucas: Saque...

