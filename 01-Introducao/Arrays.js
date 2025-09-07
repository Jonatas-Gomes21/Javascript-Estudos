//Em relação a posições o array sempre vai começar na posição zero [0]
//              [0]      [1]     [2]      
var Lista = ["Luana", "Paula", "Jonatas", "Claudia"]; //Um array de 4 elementos

//Acessando os elementos dentro de um array

console.log(Lista[0]); // Vai acessar a posição zero [0] e mostra qual o elemento nessa posição. No caso vai mostrar no console = Jonatas

var Lista = ["Luana", "Paula", "Jonatas", "Claudia"]; //Array de 4 elementos. 

//Comandos para utilizar no array.

//Comando de procura:

console.log(Lista.indexOf()); // Procura se dentro do array tem o elemento procurado.

console.log(Lista.indexOf('Luana')); // Caso tenha o nome Luana dentro do array Lista. Ele vai retornar com a posição do Elemento no array.
                                    // No caso a posição [0] onde se encontra o elemento.

//Comando de adicionar elementos a um array:

console.log(Lista.push('Oliver')); // Faz a adição de um novo elemento ao array, vai fazer inserção na ultima posição do array.
var Lista = ["Luana", "Paula", "Jonatas", "Claudia", "Oliver"]; // Array apos a utilização do comando Lista.push().

// Comando de Exclusão de um elemento no começo do array:

console.log(Lista.shift());// Faz a exclusão do primeiro elemento da lista, no caso a posição [0].

var Lista = ["Luana", "Paula", "Jonatas", "Claudia"];// Ao utilizar o comando o elemento ["Luana"] vai ser excluído do array.

var Lista = ["Paula", "Jonatas", "Claudia"]; // Após o uso do Comando

// Comando de Exclusão de um elemento no final do array:

console.log(Lista.pop());// Faz a exclusão do último elemento da lista, no caso a posição [3].

var Lista = ["Luana", "Paula", "Jonatas", "Claudia"];// Ao utilizar o comando o elemento ["Claudia"] vai ser excluído do array.

var Lista = ["Luana", "Paula", "Jonatas"]; // Após o uso do Comando

// Comando de separação de elementos

console.log(Lista.join()) // Ao utilizar o comando os elementos serão separados utilizando o paramento definido no comando. Pode ser separado por (,) e por (;)

var Lista = ["Luana", "Paula", "Jonatas", "Claudia"]; // Utilizando o comando Lista.join(;). O resultado será mostrado dessa forma.

console.log(Lista.join(";") = "Luana;Paula;Jonatas;Claudia"); // O console. log irá mostrar deste jeito o resultado do array. Separados por ponto e virgula.
