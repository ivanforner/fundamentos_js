// 1) Declaração de função
function imprimeTexto(texto) {
    console.log(texto);
}

// Função sem parâmetros
function soma() {
    // return deve ser a última cláusula
    return 2+2;
}

// 2) Executa a função 1 ou + vezes
imprimeTexto('Hello World!');
imprimeTexto('Outro texto');

console.log(soma());

imprimeTexto(soma());


// Existem mais formas de escrever funções