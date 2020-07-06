function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: "15%",
  };
}

console.log(criarProduto("Caneta", "10 Reais"));

console.log(criarProduto("Carro", "10.000 Reais"));


