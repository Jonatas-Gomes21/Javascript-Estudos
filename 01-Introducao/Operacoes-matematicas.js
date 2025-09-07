function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("O aluno foi aprovado com a média " + media +"!")
    }else if(media < 7){
        console.log("O aluno foi reprovado com a média  " + media)
    }

}