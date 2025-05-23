# 📝 Aula 5 - Objetos, Classes e Métodos em JavaScript

Este repositório contém os códigos e o aprendizado da aula 5 do curso de JavaScript, com foco em objetos, classes e métodos.

---

## 📚 Conteúdo Estudado

### ✅ Objetos Literais
Criação e acesso a propriedades:
```javascript
const produto = {
  nome: "Tablet",
  preço: 2500,
  estoque: 45
};
console.log(produto.nome); // "Tablet"
```

## ✅ Classes e Instâncias
Criamos moldes com class para gerar objetos personalizados:

```javascript
class Aluno {
  constructor(nome, idade, curso) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}.`);
  }
}
```

## ✅ Métodos e Encapsulamento
Aprendemos a proteger dados e organizar funções dentro das classes:

```javascript
class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`${this.titular} depositou R$ ${valor.toFixed(2)}. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`${this.titular} tentou sacar R$ ${valor.toFixed(2)}. Saldo insuficiente.`);
    } else {
      this.saldo -= valor;
      console.log(`${this.titular} sacou R$ ${valor.toFixed(2)}. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
}
```

## ✅ O que aprendi
- Criar e manipular objetos em JavaScript.

- Construir classes com construtores.

- Usar this para referenciar a instância.

- Criar métodos que interagem com os atributos dos objetos.

- Validar informações como saldo antes de realizar ações.