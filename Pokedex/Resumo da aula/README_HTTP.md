
# 🌐 Entendendo o Protocolo HTTP

Este material tem como objetivo resumir de forma clara e prática os principais conceitos sobre o protocolo HTTP, estudados em uma aula introdutória sobre APIs e comunicação web.

---

## 🚀 O que é HTTP?

HTTP (Hypertext Transfer Protocol) é o protocolo que permite a **comunicação entre cliente e servidor** na web. Toda vez que acessamos um site ou consumimos uma API, estamos usando HTTP (ou HTTPS, que é a versão segura com criptografia).

---

## 📡 Como funcionam as requisições?

Uma requisição HTTP é composta por:

- **Método** (ex: `GET`, `POST`, `PUT`, `DELETE`)
- **URL** (endereço do recurso)
- **Cabeçalhos (Headers)**
- **Corpo da requisição (Body)** – opcional, usado em métodos como `POST` e `PUT`.

A resposta do servidor também vem com:

- **Status Code** (ex: `200 OK`, `404 Not Found`, `500 Internal Server Error`)
- **Corpo da resposta** (normalmente em JSON)

---

## 🔗 URL, Path e Method

- **URL** é o endereço completo: `https://pokeapi.co/api/v2/pokemon`
- **Path** é o caminho do recurso: `/api/v2/pokemon`
- **Method** define a ação:
  - `GET` – buscar informações
  - `POST` – enviar dados
  - `PUT` – atualizar
  - `DELETE` – remover

---

## 🧩 Path Params e Query Strings

- **Path Params**: partes da URL que representam um recurso específico:
  ```
  /pokemon/1 → acessa o Pokémon com ID 1
  ```

- **Query Strings**: parâmetros adicionais usados para filtros ou paginação:
  ```
  /pokemon?offset=0&limit=10
  ```

---

## 📬 Headers (Cabeçalhos)

Os **headers** carregam informações extras na requisição ou resposta, como:

- Tipo de conteúdo: `Content-Type: application/json`
- Token de autenticação: `Authorization: Bearer <token>`

---

## 📨 Body e Status Code

- O **body** é o corpo da requisição, geralmente usado com `POST` ou `PUT`.
  Exemplo de `body` em JSON:
  ```json
  {
    "name": "Giselle",
    "email": "giselle@example.com"
  }
  ```

- O **status code** informa se a requisição deu certo ou não:
  - `200 OK` – sucesso
  - `201 Created` – criado com sucesso
  - `400 Bad Request` – erro do cliente
  - `404 Not Found` – não encontrado
  - `500 Internal Server Error` – erro do servidor

---

## 🛠️ Exemplo com `fetch`:

```javascript
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

---

## 💡 Conclusão

O protocolo HTTP é a base para comunicação na web e o primeiro passo para entender como funcionam APIs. Dominar esses conceitos é essencial para qualquer desenvolvedora front-end, back-end ou full stack.

---

### 👩‍💻 Feito por: Giselle Santos
