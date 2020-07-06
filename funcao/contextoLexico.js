const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}


// A funcao carrega consigo o local onde foi definida, 
// entao vai buscar no contexto lexico, 
// nao no local de execulcao mas onde foi definida

function exec() {
  const valor = "local";
  minhaFuncao();
}

exec();

