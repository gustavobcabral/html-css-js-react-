const carrinho = [
  '{"Nome": "Borracha", "preco": 3.45}',
  '{"Nome": "Caderno", "preco": 13.90}',
  '{"Nome": "Kit de lapis", "preco": 41.22}',
  '{"Nome": "Caneta", "preco": 7.50}',
];
// console.log(carrinho);
//return um array apenas com os precos.

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);
