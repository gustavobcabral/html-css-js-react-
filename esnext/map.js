const tecnologias = new Map();
tecnologias.set("react", { freamwork: false });
tecnologias.set("angular", { freamwork: true });

console.log(tecnologias.react);
console.log(tecnologias.get("react"));
console.log(tecnologias.get("react").freamwork);

const chavesVariadas = new Map([
  [function () {}, "funcao"],
  [{}, "objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
chavesVariadas.set(456, "b");
console.log(chavesVariadas);
