let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a 
}

dobro = a => 2 * a //retorno inplicito e quando só tem um parametro posso tirar os ().
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá!'
}

ola = () => 'Olá'
console.log(ola())