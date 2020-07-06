const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //Remove o ultimo elemento do Array
console.log(pilotos);

pilotos.push("Verstappen"); //Adc um novo elemento no ultima posiço do array
console.log(pilotos);

pilotos.shift(); //Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); //Adc um novo elemento na primeira posição do Array
console.log(pilotos);

/*Splice pode adicionar e remover elementos*/

//adcionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1); //no indice 3 remover 1 elemento. Massa
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Novo array a partidar do indice 1 ate o 3. o 4 nao entra
console.log(algunsPilotos2);

/*
pop() //Remove ultimo elemento
push() //Adiciona no ultimo elemento
shift() //Remove do primeiro elemento
unshift() //Adiciona no primeiro elemento
splice() //Adciona e remove 
slice() //Novo array a partir do indice até o indice anterior 
*/
