// Declaração de Strings

const texto1 = "Olá, mundo!"; // aspas duplas
const texto2 = 'Olá, mundo!'; // aspas simples
const senha = "senhaSuperSegura123!"; // senhas geralmente são armazenadas em strings
const stringDeNumeros = "34567" // uma sting composta somente de números

const citacao = 'O Leo disse "Oi!"'; // em caso de citacao
console.log();
console.log(citacao)


// contatenação (+)

const frase1 = "Meu nome é ";
const meuNome = "Ivan";
console.log();
console.log(frase1 + meuNome);


// Caracteres especiais

const tique = '\u2705';
console.log();
console.log(tique);


// Transformando strings em minúsculas

const cidade = 'Belo Horizonte';
const cidadeMinusculas = cidade.toLowerCase();
console.log();
console.log(cidade, cidadeMinusculas);


// Template Strings
console.log();
console.log(`Eu moro na cidade de ${cidade}`);


// Descobrindo o tamanho de uma string
const stringQualquer = '12345';
const tamanhoDaString = stringQualquer.length;
console.log();
console.log(tamanhoDaString, typeof(tamanhoDaString));