alert("Ola Tudo bem!")
var Nome = prompt("Qual o seu nome?")
var Sobrenome = prompt("Qual seu sobrenome?")

console.log("Ola " + Nome + " " + Sobrenome)

var Mensagem = document.getElementById("Mensagem"); //Cria uma variável e utiliza o document.getElementById e utiliza com o Id no HTML.
Mensagem.innerText="Bem vindo ao projeto " + Nome +" "+ Sobrenome //Chama a variável e utiliza o innerText e a mensagem que quer exibir.