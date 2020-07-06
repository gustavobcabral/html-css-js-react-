// não aceita repetição / não indexada
const times = new Set();
times.add("Vasco");
times.add("Sao paulo").add("Palmeiras").add("Corinthias");
times.add("Vasco");
times.add("Flamengo");

console.log(times);
console.log(times.size);
console.log(times.has("vasco"));
console.log(times.has("Vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));
console.log(times);

const names = ["Raquel", "Julia", "Rafael", "Andre", "Raquel"];
const namesSet = new Set(names);
console.log(namesSet);
