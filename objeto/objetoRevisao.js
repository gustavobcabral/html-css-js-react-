//Coleçao dinamica de pares chaves/valor
const produto = new Object();
produto.name = "Cadeira";
produto["marca do produto"] = "Generica";
produto.valor = 220;

console.log(produto);
delete produto["marca do produto"];
delete produto.valor;
console.log(produto);

const carro = {
  modelo: "A3",
  valor: 89000,
  propietario: {
    nome: "Gustavo",
    idade: 25,
    endereco: {
      logradouru: "Rua Abc",
      numero: 10,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 30,
    },
  ],
  calcularValorSeguro: function () {
    //...
  },
};
carro.propietario.endereco.numero = 100;
console.log(carro);

delete carro.condutores;
delete carro.propietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
