// const

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
// const area; não pode ser declarado como const porque a variável area é variável =).
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);