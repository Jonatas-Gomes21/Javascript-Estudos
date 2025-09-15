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
# **Condicionais**<br>

```Javascript

// IF / ELSE 

let idade = 20;

// O if verifica se a condição envolvendo a variável é verdadeira ou falsa.
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}


//Forma de uso do IF / ELSE em ternários

? //significa “se a condição for verdadeira”.

: //significa “senão” (o que acontece se a condição for falsa).

var numero = 10;

numero === 10 ? console.log("NUMERO É IGUAL A 10") : console.log("NUMERO NÃO TEM O VALOR 10");


// Utilização do igual(=) na condicional

(==) // Faz a conversão do valor seja para (número, string, boolean, etc.) e só depois compara.

console.log(5 == "5");   
// Aqui a string "5" é transformada em número → 5 == 5 → true

console.log(0 == false); 
// O boolean false é transformado em número (0) → 0 == 0 → true

console.log("10" == true); 
// O true vira número (1), "10" vira número (10) → 10 == 1 → false

(===) // Ele vai compara valor e tipo ao mesmo tempo. Se os tipos forem diferentes, já retorna false.

console.log(5 === "5");   // false → número diferente de string
console.log(0 === false); // false → number diferente de boolean
console.log(null === undefined); // false → tipos diferentes
console.log(5 === 5);     // true  → valor e tipo iguais

```
# **Funções**<br>

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Você pode **declarar**, **chamar (invocar)** e até **passar dados** para elas.

```Javascript
var Mensagem = document.getElementById("Mensagem");

//Criado a função com o ID atribuído a função onclick no HTML
function entrou(){
    var Nome = prompt("Qual o seu nome?")
    var Sobrenome = prompt("Qual o seu sobrenome?")
    if(Nome === "" || Nome === null){
        alert("Algo deu errado!")
        Mensagem.innerHTML = ("Clique aqui para acessar")
    }else{
        Mensagem.innerHTML = ("Seja bem vindo " + Nome + " " + Sobrenome + " ")

        let botaoSair = document.createElement("button"); //Cria um novo elemento com o create.Element e define qual o tipo do elemento vai ser criado.

        botaoSair.innerText = "Sair da conta";//Cria um texto dentro do document(HTML) através do innerText.

        botaoSair.onclick = sair;//Atribui ao botão a função (sair) e através do onclick a ação vai acontecer e a função vai ser ativada.

        Mensagem.appendChild(botaoSair);//Utilizando o appendChild colocamos o botão no HTML inserindo o ID no qual o elemento vai ser adicionado.
    }
   
}

function sair(){
    alert("Ate Breve!");
    Mensagem.innerText = ("Você Saiu!")
}
```
# **Loops**<br>
```Javascript
//Loop WHILE    

var x = 0; // contador inicial do loop

// While = Enquanto. Enquanto 0 for menor que 10. O while vai continuar fazendo o loop. após chegar no numero 9, ele irá encerrar o loop.
while(x < 10){
    document.write("<br>O valor de x é: " + x);

    x++; // Vai aumentando o valor de X a cada passada do loop
}

//Loop FOR

// For = Usado quando sabemos quantas vezes queremos repetir
for(a = 0; a < valor; a++){
    document.write("<br> O valor de A = " + a);
}
```
## 🛠️ Tecnologias

- JavaScript (ES6+)
- HTML/CSS (em exemplos de DOM)
- VS Code / Navegador

## ✍️ Autor

Feito por [Jônatas Gomes](https://github.com/Jonatas-Gomes21)🫡

---

> Este repositório está em constante evolução à medida que avanço nos estudos.
