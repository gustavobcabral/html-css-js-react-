//Object.preventExtensions
//Não se pode adcionar novas chaves/valores mas permite deletar e editar valores existentes

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção",
});
console.log(`Extensível:`, Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);


//Objetc.seal (selar)
//Não deleta, Não adiciona, mas permite alterar valores já existentes
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);


//Object.freeze = selado + valores constantes
//Não deleta, Não adiciona, Não altera valores 
