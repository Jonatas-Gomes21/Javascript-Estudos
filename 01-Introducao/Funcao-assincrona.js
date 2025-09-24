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

//Neste exemplo, a função ação sera executada apenas uma vez, após 3 segundos, escrevendo "Executando..." na tela
//E depois disso, não sera mais executada.

function acao(){
    document.write("Executando...<br/>")
}

setTimeout(acao, 3000);