// Parâmetros de função

function soma(x, y) {
    return x + y;
}

console.log(soma());
console.log(soma(1, 2));

// Parâmetros x Argumentos

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Ivan', 28));
console.log(nomeIdade(28, 'Ivan')); // Ordem errada dos parâmetros

function multiplica(x, y) {
    return x * y;
}

let mult = multiplica(soma(3, 3), soma(4, 5));
console.log(mult);

console.log(multiplica(1)); // Colocando um parâmero só em uma função que espera receber dois parâmetros => NaN

// Função com parâmetro padrão
function multiplicaNovo(x = 1, y = 1) {
    return x * y;
}

console.log(multiplicaNovo(9));