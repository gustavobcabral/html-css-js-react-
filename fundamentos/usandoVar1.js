// Aula 29 Sessão 03
//Exemplo de VAR Global. aparece fora do ESCOPO, não recomendado.
{
  {
    {
      { 
        var sera = 'Sera?'
      }
    }
  }
}

console.log(sera)

//Quando coloca a variavel dentro do ESCOPO de uma FUNÇAO só vai servir aqui.
  function teste() {
    var local = 123
    console.log(local)
  }
  
  teste()