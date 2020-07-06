const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 23,
};

console.log(Object.keys(pessoa)); //keys - lista as chaves do obj
console.log(Object.values(pessoa)); //values - lista os valores das chaves no obj
console.log(Object.entries(pessoa)); //entreis - lista todas as entras em Arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}, ${valor}`);
});//fazendo um Destruction

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assing (ES6)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
//assign concatena os valores sobrescrevendo e mantendo sempre o ultimo

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
