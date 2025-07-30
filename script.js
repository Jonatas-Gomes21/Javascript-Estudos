var Mensagem = document.getElementById("Mensagem");

function entrou(){
    var Nome = prompt("Qual o seu nome?")
    var Sobrenome = prompt("Qual o seu sobrenome?")
    if(Nome === "" || Nome === null){
        alert("Bota o nome ai vai")
        Mensagem.innerHTML = ("Clica para acessar ai va")
    }else{
        Mensagem.innerHTML = ("Seja bem vindo " + Nome + " " + Sobrenome + " ")

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        Mensagem.appendChild(botaoSair);
    }
   
}

function sair(){
    alert("Ja vai tarde");
    Mensagem.innerText = ("Ja foi Otario")
}