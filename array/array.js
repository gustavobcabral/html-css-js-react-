console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo"; //Método mais usado para SUBSTITUIR um valor do array
aprovados.push("Abia"); //Método mais usado para ADICIONAR um valor no array
console.log(aprovados.length); //Método .length para ver o cumprimento do array

aprovados[9] = "Rafael"; //Adicionei um elemnto no indicice 10.
console.log(aprovados.length); //MOstra 10 pq os outros elementos sao undefined
console.log(aprovados[8] === undefined); //Estritamente igual a undefined. tem os indicie mas nao tem valor atribuido

console.log(aprovados);

aprovados.sort(); //Mistura a ordem do array
console.log(aprovados);

delete aprovados[1]; //Deleta o valor atribuido e nao o indice. fica Undefined
console.log(aprovados[1]);
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
//aprovados.splice(Elemento que vai comecar/ e ate onde vai deletear / "dasd" Oq vai adicionar)
aprovados.splice(1, 2, "Elemento1", "Elemento2"); //Adiciona elemento em indice, Remove elementos de uma array
console.log(aprovados);
