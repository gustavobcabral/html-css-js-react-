function triangulos(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    return "Esse é um trinagulo Equilátero";
  }
  if (lado1 == lado2 && lado2 != lado3) {
    return "Esse é um triangulo Isocelis ";
  } else {
    return "Esse é um triangulo  Escaleno";
  }
}

console.log(triangulos(2, 2, 2));
console.log(triangulos(2, 2, 3));
console.log(triangulos(2, 3, 4));

