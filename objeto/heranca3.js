const pai = { nome: "Pedro", corCabelo: "Preto" };

const filha1 = Object.create(pai); //Define que o obj pai eh o prototype
filha1.nome = "Ana";

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
}); //definindo o valor, se pode ser ReEscrita, e se vai listar com keys.

console.log(filha2.nome);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
  console.log(key);
} //Verifica quais Keys tem em filha 2

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança ${key}`);
} //Verifica quais os atributos vindo por Herança.
