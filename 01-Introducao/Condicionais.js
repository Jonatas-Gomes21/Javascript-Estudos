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

let valor = 18;

let resultado = valor >= 18 ? "Valor maior que " + valor : "Valor menor que " + valor;
console.log(resultado);


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