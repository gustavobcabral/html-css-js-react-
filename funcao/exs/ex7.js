function Bhaskara(ax2, bx, c) {
  const resultado = [];

  const delta = bx ** 2 - 4 * ax2 * c;

  if (delta < 0) {
    return "Delta é negativo";
  }

  const x1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;
  const x2 = ((-bx - Math.sqrt(delta)) / 2) * ax2;

  resultado.push(x1);
  resultado.push(x2);
  return resultado;
}

console.log(Bhaskara(1, 3, 2));
