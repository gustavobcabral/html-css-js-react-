//pessoa -> 123 -> {...}
const pessoa = { nome: "Joao" };
pessoa.nome = "Pedro";
console.log(pessoa);
// Não estou mudando a constante mas sim o valor adc na memoria onde foi definido a const

// pessoa -> 456 -> {...}
//pessoa = { nome: "Ana" };
//Não posso atribuir outro obj a constante. apenas 1 vez.

Object.freeze(pessoa); //Congelei a cosnt Pessoa nao eh possivel fazer nenhuma alteraçao

pessoa.nome = "Maria";
pessoa.end = "Rua abc";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);


// Ja criar uma constante onde nào sera possivel fazer nenhuma alteracao.
const pessoaConstante = Object.freeze({ nome: "Joao" });
console.log(pessoaConstante);
