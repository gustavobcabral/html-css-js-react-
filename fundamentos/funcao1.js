//Aula 27 Sessao 03

//Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a +b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 110)
imprimirSoma()


//function com retorno
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))