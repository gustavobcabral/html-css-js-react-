//usando notacao literal
const obj1 = {};
console.log(obj1);

//Object in Js
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//Funçoes construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2900, 0.25);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

//Function Factoty

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("Gustavo", 10500, 1);
const f2 = criarFuncionario("Joao", 5000, 5);

console.log(f1.getSalario(), f2.getSalario());
