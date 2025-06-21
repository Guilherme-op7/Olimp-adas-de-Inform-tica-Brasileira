import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let idade1 = Number(ler('Digite a primeira idade: '));
    let idade2 = Number(ler('Digite a segunda idade: '));
    let idade3 = Number(ler('Digite a terceira idade: '));
    
    let camila = calcularMediana(idade1, idade2, idade3);
    console.log(`A idade de Camila é: ${camila}`);
}

function calcularMediana(a, b, c) {
    if ((a >= b && a <= c) || (a <= b && a >= c)) {
        return a;
    }


    else if ((b >= a && b <= c) || (b <= a && b >= c)) {
        return b;
    }

    else {
        return c;
    }
}

menu();