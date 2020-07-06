class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}
//Relacao de prototype de pai com avo
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
}

const filho = new Filho
console.log(filho)
