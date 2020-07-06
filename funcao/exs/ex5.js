function mostrarValor(x = 0.1 + 0.2, valor = "R$") {
  console.log(`O valor é ${x} em ${valor} é ${x.toFixed(2).replace(".", ",")}`);
}

mostrarValor();
