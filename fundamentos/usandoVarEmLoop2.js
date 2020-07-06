//AULA 34 sessao 03

const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
funcs[3]()