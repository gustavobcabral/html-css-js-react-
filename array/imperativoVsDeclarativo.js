const alunos = [
  { nome: "Joao", nota: 8 },
  { nome: "Maria", nota: 9.8 },
];

//Imperativo - COMO FAZER 
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo - OQ FAZER, NAO IMPORTA COMO
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
