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
//Var

//Uma forma antiga de declarar variáveis em JavaScript,
// que permite redeclaração, reatribuição e tem escopo de função 

var nome = "Jonatas";
console.log(nome); // o resultado desse console.log será o nome Jonatas.

// O var também pode ser redeclarado, onde o JS(Javascript) vai usar apenas o último nome declarado, no caso Maria 
var nome = "Maria";
console.log(nome); //A saída após a redeclaração do var.

// Pode ser também reatribuída para novos valores. Sendo eles strings ou números.
nome = "Carlos";
console.log(nome); // Resultado da retribuição da variável que será mostrado no console.log como Carlos.

//Let

//Uma forma mais moderna de declarar variáveis em JavaScript,
// que não permite redeclaração, mas permite reatribuição e tem escopo de bloco

let nome2 = "Jonatas";
console.log(nome2); // o resultado desse console.log será o nome Jonatas.

nome2 = "Maria"; // O let pode ser reatribuído para novos valores.
console.log(nome2); //A saída após a reatribuição do let, que será mostrado no console.log como Maria.

//Porem, o let não pode ser redeclarado, ou seja, não podemos fazer isso:
let nome2 = "Carlos"; // Isso gerará um erro.(Redeclaração)

//Const

//Outra forma moderna de declarar variáveis em JavaScript,
// que não permite redeclaração, não permite reatribuição e tem escopo de bloco

const nome3 = "Jonatas";
console.log(nome3); // o resultado desse console.log será o nome Jonatas.

// Porem, o const não pode ser reatribuído, ou seja, caso seja feito uma reatribuição ou redeclaração, como abaixo, isso gerará um erro.

nome3 = "Maria"; // Isso gerará um erro.(Reatribuição)

const nome3 = "Carlos"; // Isso também gerará um erro.(Redeclaração)


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


//Forma de uso do IF / ELSE em ternários.

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

# **Função Assíncrona**<br>
```javascript
//SetInterval
//Ele executa uma função em um determinado intervalo de tempo. 

//Por exemplo, a cada 1 segundo ele continua executando a função ate que seja parado usando um clearInterval.

//Tanto o setInterval quanto o setTimeout recebem dois parâmetros: o primeiro é a função que será executada e o segundo e o tempo em milissegundos.

//Neste exemplo, a função ação sera executada a cada 1 segundo e escrevera "Executando..." na tela ate que seja parado com clearInterval
function acao(){
    document.write("Executando...<br/>")
}

setInterval(acao, 1000)


//SetTimeout.

//No caso do setTimeout, a função será executada apenas uma vez, após o tempo especificado.

//Neste exemplo, a função ação sera executada apenas uma vez, após 3 segundos, escrevendo "Executando..." na tela e depois disso, não sera mais executada.

function acao(){
    document.write("Executando...<br/>")
}

setTimeout(acao, 3000);
```

# **Objetos**<br>
```Javascript
// Objetos

// São coleções de propriedades, onde cada propriedade é definida por uma chave e um valor.

// Um objeto pode ser criado usando chaves {} e as propriedades são definidas como pares chave-valor.

// Neste exemplo, criamos um objeto simples chamado "Carro" com algumas propriedades.
// Dentro de um objeto simples não podemos ter propriedades repetidas, ou seja, não podemos ter duas propriedades com o mesmo nome.
// Pois o JavaScript vai sobrepor a propriedade anterior e acontecerá isso a perda de dados.

    let Carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        cor: "Prata"
    }

console.log(Carro); // Mostra o objeto completo no console.

// Acessando propriedades do objeto.
console.log(Carro.marca); // Acessa a propriedade como "marca", "modelo", "ano" e "cor" do objeto Carro.

//Um array de objetos.
// Cada objeto dentro do array representa um usuário com suas respectivas propriedades.

let Usuarios = [
  { nome: "Jonatas", idade: 25, profissao: "Desenvolvedor" },
  { nome: "Luana", idade: 30, profissao: "Designer" },
  { nome: "Carlos", idade: 28, profissao: "Gerente de Projetos" }
];

console.log(Usuarios);

// Acessando propriedades dos objetos dentro do array.
console.log(Usuarios[0].nome); // Acessa o nome do primeiro usuário no array.
console.log(Usuarios[1].profissao); // Acessa a profissão do segundo usuário no array.
```
## 🛠️ Tecnologias

- JavaScript (ES6+)
- HTML/CSS (em exemplos de DOM)
- VS Code / Navegador

## ✍️ Autor

Feito por [Jônatas Gomes](https://github.com/Jonatas-Gomes21)🫡

---

> Este repositório está em constante evolução à medida que avanço nos estudos.
