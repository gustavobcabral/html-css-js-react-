//Closure é o escopo criado quando a função é declarada
//Esse escopo perimite a funcao acessar e manipular variaveis externas a funcao

//Contexto léxico em ação

const x = "Global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
