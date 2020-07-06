//AULA 31 sessão 03
// VAR - 2 escopos. De função e Global
// LET - 3 escopos. De função, Global e menor escopo.

let numero = 1
{
  let numero = 2
  console.log('Dentro =', numero)
}

console.log('Fora =', numero)