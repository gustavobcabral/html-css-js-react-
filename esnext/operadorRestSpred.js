// operador ... rest(juntar)/spread(espalhar)
// usar rest como paramentro de funcao

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 15986.16 };
const clone = { ativo: true, ...funcionario };
console.log(funcionario);
console.log(clone);

// usar spread com array
const grupoA = ["Kelli", "Carla", "Gusta", "Pedro"];
const grupoB = ["Antonio", ...grupoA, 'Joaquim'];
console.log(grupoA)
console.log(grupoB)