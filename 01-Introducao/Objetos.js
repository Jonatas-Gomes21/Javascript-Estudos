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