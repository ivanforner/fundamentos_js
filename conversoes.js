// tipo de dado
// booleans

// conversão implicita
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString); // compara valor e tipo
console.log(numero == numeroString); // compara somente valor
console.log(numero + numeroString); // concatenação

console.log();

// conversão explicita

// Number() => converte uma string em número
// String() => converte um número em uma string

console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);

console.log();

// erros

let numeroErrado = '456a';
console.log(Number(numeroErrado));