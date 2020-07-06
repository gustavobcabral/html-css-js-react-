// let e const => Let tem escopo de BLOCO.

{
  var a = 2;
  let b = 3;
  console.log(b);
}
console.log(a);

// Tamplate String
const produto = "iPad";
console.log(`O ${produto} é caro! `);

// Destructuring - Remover de string, atributos de objeto ...
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade, nome } = { nome: "Ana", idade: 9 };
console.log(nome, idade);
