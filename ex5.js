import prompt from 'prompt-sync';
let ler = prompt();

function oi() {
    let A = Number(ler());
    let B = Number(ler());
    let C = Number(ler());
    
    let resultado = comparar(A, B, C);
    console.log(resultado);
}

function comparar(A, B, C) {
    if (A + B < C) {
        return 1;
    }

    else if (A < B || B < C) {
        return 2;
    }

    else {
        return 3;
    }
}

oi();