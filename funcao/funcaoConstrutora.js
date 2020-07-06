function Carro(veleocidadeMaxima = 200, delta = 5) {
  //atribuido privado
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= veleocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = veleocidadeMaxima;
    }
  };

  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
