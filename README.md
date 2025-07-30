# 📚 Repositório de Estudos: JavaScript

Este repositório foi criado com o objetivo de organizar e documentar meu aprendizado em **JavaScript**, desde os conceitos mais básicos até tópicos mais avançados.

## 📌 Estrutura dos estudos

- `01-introdução` — Conceitos básicos, variáveis e tipos de dados.
## **Tipos Primitivos**
Tipos primitivos são os valores mais simples e básicos que existem no JavaScript. Eles não são objetos, são imutáveis (o valor não pode ser alterado diretamente) e armazenam dados diretos.
# 🧩 Exemplos
**Strings**
```Javascript
let nome = "Jonatas";   // Declara uma string usando aspas duplas
let saudacao = 'Olá!'; // Declara uma string usando aspas simples
let frase = `Olá, ${nome}!`;  // Template string com crase e variável inserida com ${}

// Não há diferença em utilizar aspas duplas ou simples na hora de declarar.
```
#
**Number**<br><br>
O tipo Number representa valores numéricos, sejam eles:

**inteiros (10, 3)**

**decimais (3.14, 0.5)**

**negativos (-15.75)**


```Javascript
let idade = 30;    // Número inteiro
let preco = 99.99; // Número decimal
let saldo = -15;  // Número negativo
```
**Boolean**<br>
O tipo Boolean representa dois valores lógicos possíveis:

true → verdadeiro

false → falso

São usados em comparações, estruturas condicionais (if, while), validações e lógicas em geral.
```Javascript
let ativo = true;    // Representa um estado verdadeiro (ligado, disponível, etc)
let bloqueado = false;   // Representa um estado falso (desligado, inativo, etc)
```

**Undefined (Indefinido)**<br>
O tipo undefined indica que uma variável foi declarada, mas ainda não recebeu um valor.

```Javascript
let nome;  // Variável declarada, mas sem valor atribuído
console.log(nome);  // Não há definição pois a variável não tem valor.
```

# **Variáveis**<br>
**Variáveis com var: conceito e uso**
```Javascript
// Declaração com var

// Declara a variável "nome" com o valor "Jonatas"
var nome = "Jonatas";
console.log(nome); //O resultado desse console.log será o nome Jonatas.

// Redeclaração com var

// Redeclara a variável "nome" com o valor "Maria"
// O JavaScript usa o último valor declarado
var nome = "Maria";
console.log(nome); //A saída após a redeclaração do var.

// Reatribuição de valor

// Apenas reatribui um novo valor para a variável "nome". Sendo eles strings ou números.
nome = "Carlos";
console.log(nome); //Resultado da reatribuição será Carlos.
```
# **Funçôes**<br>

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Você pode **declarar**, **chamar (invocar)** e até **passar dados** para elas.

```Javascript
var Mensagem = document.getElementById("Mensagem");

function entrou() {
    var Nome = prompt("Qual o seu nome?");
    var Sobrenome = prompt("Qual o seu sobrenome?");
    
    if (Nome === "" || Nome === null) {
        alert("Algo deu errado!");
        Mensagem.innerHTML = "Clique aqui para acessar";
    } else {
        Mensagem.innerHTML = "Seja bem-vindo " + Nome + " " + Sobrenome;

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        Mensagem.appendChild(botaoSair);
    }
}

function sair() {
    alert("Até breve!");
    Mensagem.innerText = "Você saiu!";
}

```
- `02-condicionais-e-loops` — Estruturas de decisão e repetição.
- `03-funções` — Declaração de funções, arrow functions e parâmetros.
- `04-objetos-e-arrays` — Manipulação de arrays e objetos.
- `05-dom-e-eventos` — Interações com HTML e eventos do navegador.
- `06-async-e-promises` — Programação assíncrona com Promises e async/await.
- `07-projetos-práticos` — Pequenos projetos para fixação do conteúdo.

## 🛠️ Tecnologias

- JavaScript (ES6+)
- HTML/CSS (em exemplos de DOM)
- VS Code / Navegador

## ✍️ Autor

Feito por [Jônatas Gomes](https://github.com/Jonatas-Gomes21)🫡

---

> Este repositório está em constante evolução à medida que avanço nos estudos.
