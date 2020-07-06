const funcionarios = [
  { nome: "Gustavo", idade: 25, salario: 1500 },
  { nome: "Guilherme", idade: 27, salario: 2000 },
  { nome: "Gabriele", idade: 23, salario: 2500 },
  { nome: "Cabral", idade: 50, salario: 10000 },
];

const todasIdades = funcionarios.map((f) => f.idade);
console.log(todasIdades);

const somaDasIdades = funcionarios
  .map((f) => f.idade)
  .reduce(function (valorInicial, total) {
    console.log(valorInicial, total);
    return valorInicial + total;
  });
console.log(`A idade de todos os funcionários é : ${somaDasIdades} anos`);

const todosSalarios = funcionarios.map((f) => f.salario);
console.log(`Essa é o salário de todos os funcionários ${todosSalarios}`);

const somaDosSalarios = funcionarios
  .map((f) => f.salario)
  .reduce(function (valorInicial, total) {
    console.log(valorInicial, total);
    return valorInicial + total;
  });

console.log(`Esse é a soma de todos os salários ${somaDosSalarios}`);
