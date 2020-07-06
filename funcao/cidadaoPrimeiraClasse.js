// criar de forma literal
function fun1() { }

// Armazenar em uma váriavel
const fun2 = function() { }

// Armazenar em um array 
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
obj.texto = function () { return 'Função Texto'}
console.log(obj.falar())
console.log(obj.texto())

// Passar funcao como param
function run(fun) {
  fun()
}

run(function () { console.log('Execultando...') })

// Um funcao pode retornar/conter um funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(4)

const cincoMais = soma (2, 2)
cincoMais(4)