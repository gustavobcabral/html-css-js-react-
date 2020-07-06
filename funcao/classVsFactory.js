//Class

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Gustavo");
p1.falar();

//Factory
const CriarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = CriarPessoa('Tiao')
p2.falar()