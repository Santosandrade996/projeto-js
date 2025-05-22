# Aula 4 – O Poder das Funções em JavaScript 🚀

## 📌 Conteúdo estudado

Nesta aula, aprendemos:

- A importância das **funções** para organizar e reutilizar código.
- Como **declarar funções** usando `function nome() { }`.
- Como **passar parâmetros** e **retornar valores**.
- A diferença entre **funções simples** e **funções com lógica mais complexa**, como o fatorial.
- Que funções ajudam a deixar o código mais limpo, reutilizável e fácil de manter.

---

## 🧠 Exercícios Extras Praticados (sem respostas)

1. **Verificar se um número é positivo, negativo ou zero**
2. **Gerar uma saudação personalizada com o nome**
3. **Calcular o fatorial de um número**
4. **Converter Celsius para Fahrenheit**
5. **Verificar quantos anos faltam para a aposentadoria (considerando 65 anos)**

---

## 🔍 Explicação extra – Fatorial com loop `for`

```javascript
function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
