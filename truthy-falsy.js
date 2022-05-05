// boolean

const usuarioLogado = true;
const contaPaga = false;


// truthy ou falsy
// 0 === false
// 1 === true

// Exemplos de false

console.log(0 == false); // compara valor
console.log(0 === false); // compara valor e tipo
console.log('' == false); // compara o valor

console.log();

// Exemplos de true
console.log(1 == true);
console.log(1 === true);
console.log('teste' == true);

console.log();

// undefined
// null => vazio ou nada

let varUnd; // a variável foi declarada, o espaço na memória foi criado mas não foi atribuido nenhum valor
let varNull = null;

console.log(varUnd);
console.log(varNull);

console.log();

let numero = 3;
let texto = "Alura";

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(varUnd));
console.log(typeof(varNull)); // o tipo de null é object, esse é um bug da linguagem.