const alunos = [
  { nome: "Joao", nota: 7.3, bolsita: false },
  { nome: "Davi", nota: 9.3, bolsita: true },
  { nome: "Carlos", nota: 3.2, bolsita: false },
  { nome: "maria", nota: 4.6, bolsita: true },
];

//Desafio 1: Todos os alunos São bolsistas ?
const todosSaoBolsistas = (resultado, bolsita) => resultado && bolsita;
console.log(alunos.map((a) => a.bolsita).reduce(todosSaoBolsistas));
// E &&


//Desafio 2: Algum algum alguno é bolsista?
const algumAlunoBolsita = (resultado, bolsita) => resultado || bolsita;
console.log(alunos.map((a) => a.bolsita).reduce(algumAlunoBolsita));
//OU ||