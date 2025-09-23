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

nome3 = "Luana"; // Isso gerará um erro.(Reatribuição)

const nome3 = "Carlos"; // Isso também gerará um erro.(Redeclaração)

