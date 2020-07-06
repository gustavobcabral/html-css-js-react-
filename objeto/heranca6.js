function Aula(nome, videoId) {
  (this.nome = nome), (this.videoId = videoId);
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 456);

console.log(aula1, aula2);
