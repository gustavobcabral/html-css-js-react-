//AULA 38 sessao 03

//par nome/valor
const saudacao = 'Opa' //contexto Léxico 1

function exec() {
  const saudacao = 'Faaaaala' //contexto Léxico 2
  return saudacao
}

console.log(saudacao)
console.log(exec())

//Obejtos são grupo alinhado de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
      lougradoro: 'Rua muito legal',
      numero: 123
  }
}

console.log(cliente)