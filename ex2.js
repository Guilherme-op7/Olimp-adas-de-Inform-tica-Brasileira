import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let R = Number(ler('Melhor resultado do atleta: '));
    let M = Number(ler('Recorde mundial: '));
    let L = Number(ler('Recorde olímpico: '));
    
    verificarRecordes(R, M, L);
}

function verificarRecordes(R, M, L) {
    if (R < M) {
        console.log('RM')
    }

    else {
        console.log('*');
    }

    if (R < L) {
        console.log('RO');
    }

    else {
        console.log('*');
    }
}

menu();