const alunos = [
  { nome: "Joao", nota: 7.3, bolsita: false },
  { nome: "Davi", nota: 9.3, bolsita: false },
  { nome: "Carlos", nota: 3.2, bolsita: false },
  { nome: "maria", nota: 4.6, bolsita: false },
];

const resultado = alunos.map((a) => a.nota).reduce(function (acumulador, valoratual) {
    console.log(acumulador, valoratual);
    return acumulador + valoratual;
  }, );
console.log(resultado);
