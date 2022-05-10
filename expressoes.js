// Maneira clássica de escrever funções em JS
function minhaFuncao(param) {
    // bloco de código
    return param;
}

minhaFuncao('Um parâmetro');


// Outra maneira de escrever funções
// Exmpressão de função
// Dessa maneira atribuímos a função à uma variável.

const soma = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 1));

// Diferença principal entre a função clássica e as expressões de função


console.log(apresentar());


function apresentar(){
    return 'Olá!';
}

// No caso das expressões de função, se tentarmos executar a função antes da declaração, o programa vai quebrar

console.log(soma2(1, 1));

const soma2 = function(num1, num2) {
    return num1 + num2;
}

// No JS as Funções clássicas e as "var" são executadas primeiro, por isso ocorre o erro no código acima