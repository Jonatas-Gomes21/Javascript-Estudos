var Mensagem = document.getElementById("Mensagem");

//Criado a função com o ID atibuido a função onclick no HTML
function entrou(){
    var Nome = prompt("Qual o seu nome?")
    var Sobrenome = prompt("Qual o seu sobrenome?")
    if(Nome === "" || Nome === null){
        alert("Algo deu errado!")
        Mensagem.innerHTML = ("Clique aqui para acessar")
    }else{
        Mensagem.innerHTML = ("Seja bem vindo " + Nome + " " + Sobrenome + " ")

        let botaoSair = document.createElement("button"); //Cria um novo elemento com o create.Element e define qual o tipo do elemento vai ser criado.

        botaoSair.innerText = "Sair da conta";//Cria um texto dentro do document(HTML) atraves do innerText.

        botaoSair.onclick = sair;//Atribui ao botão a função (sair) e atraves do onclick a ação vai acontecer e a função vai ser ativada.

        Mensagem.appendChild(botaoSair);//Utilizando o appendChild colocamos o botão no HTML inserindo o ID no qual o elemento vai ser adicionado.
    }
   
}

function sair(){
    alert("Ate Breve!");
    Mensagem.innerText = ("Você Saiu!")
}