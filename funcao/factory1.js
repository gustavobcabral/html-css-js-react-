//Function Factory é uma funcao que retorna um objeto (fabricar isntancia de obj)

//Factory Simples

function criarPessoa() {
  return {
    nome: "Ana",
    sobrenome: "Cabral",
  };
}

console.log(criarPessoa())