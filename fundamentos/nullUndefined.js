//AULA 25 Sessao 03

let valor // nãi inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Error!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco //para deletar um atributo do Objeto
console.log(produto)

produto.preco = null //quando quero deixar claro que o produto nao tem preco 0
console.log(!!produto.preco)
console.log(produto)