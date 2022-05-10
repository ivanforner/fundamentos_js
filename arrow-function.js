// Arrow function

// Se tiver apenas uma linha de código, não precisa escrever return
const apresentar = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;


// Arrow function com mais de uma linha
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'Somente números de 1 a 9';
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1, 1));
console.log(somaNumerosPequenos(1, 11));

// Sintaxe
const variavel = (param1, param2) => {
    'bloco de código';
}

// Hoisting: arrow function se comporta como expressão