//AULA 35 sessao 03

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
funcs[6]()
funcs[8]()

//LET USA BLOCO