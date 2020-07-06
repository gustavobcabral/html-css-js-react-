const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c }; //Forma ES6
console.log([obj1, obj2]);

const nomeAtrr = "Nota";
const valorAtrr = 7.85;

const obj3 = {};
obj3[nomeAtrr] = valorAtrr;
console.log(obj3);

const obj4 = { [nomeAtrr]: valorAtrr }; //Forma ES6
console.log(obj4);

const obj5 = {
  funcao1: function (params) {
    //...
  },
  funcao2() {
    //...FORMA ES6
  },
};

console.log(obj5);
