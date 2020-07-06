function montanteJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  return capitalInicial + capitalInicial * taxaJuros * tempoAplicacao;
  //M = C+ c*i*t
}
console.log(montanteJurosSimples(1000, 10 / 100, 2));

function montanteJurosComposto(capitalInicial, taxaJuros, tempoAplicacao) {
  return capitalInicial * (1 + taxaJuros) ** tempoAplicacao;
}
console.log(montanteJurosComposto(1000, 10 / 100, 2));
// M = c.(1+i*t)
