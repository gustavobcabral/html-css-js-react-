//AULA 23 Seção 3

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //imprimeindo apenas os objetos descrito
console.log(valores[4]) //imprimindo um obejto inesistente não da erro

valores[4] = 10
console.log(valores[4])
console.log(valores.length) //quantidade de elementos no length

valores.push({id:3}, false, null, 'teste') //.push adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) //seleciona ou remove ultimo elemento do array
delete valores[0] //delete o elemento definido no array
console.log(valores)

console.log(typeof valores)

