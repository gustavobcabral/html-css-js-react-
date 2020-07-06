function getInteiroAleatorioEntre (min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 20)
  console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

//WHILE é usado quando não se tem uma quantidade limite, repetição baseado em verdadeiro ou falso.
//enquato for falso continua a repetição.