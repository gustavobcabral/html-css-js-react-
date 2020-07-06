const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
const template =`
Olá
${nome}!` //Dolar entre Chaves faz a interpolação ou Interpretação

console.log (nome, concatenacao)
console.log(template)

// expressoes...

const up = texto => texto.toUpperCase()
console.log(`Eii... ${up('cuidado')}!`)