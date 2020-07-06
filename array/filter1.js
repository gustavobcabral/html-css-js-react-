const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de plastico", preco: 18.99, fragil: false },
];

const caro = (produtos) => produtos.preco >= 500;
const fragil = (produtos) => produtos.fragil === true;

console.log(produtos.filter(caro).filter(fragil));

// console.log(
//   produtos.filter(function (p) {
//     return p.preco > 500 && p.fragil == true;
//   })
// );

