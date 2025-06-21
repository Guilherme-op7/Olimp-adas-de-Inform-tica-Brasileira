import prompt from 'prompt-sync';
let ler = prompt();

function gremio() {
    let A = Number(ler());
    let B = Number(ler());
    let C = Number(ler());
    
    let resultado = calculardistancia(A, B, C);
    console.log(resultado);
}

function calculardistancia(A, B, C) {
    let distanciaA = B - A;
    let distanciaC = C - B;
    
    if (distanciaA < distanciaC) {
        return 1;
    }

    else if (distanciaA > distanciaC) {
        return -1;
    }

    else {
        return 0;
    }
}

gremio();