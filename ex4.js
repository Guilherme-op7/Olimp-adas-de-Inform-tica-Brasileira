import prompt from 'prompt-sync';
let ler = prompt();

function oi() {
    let vitorias = contarvitorias();
    let resultado = classificar(vitorias);
    console.log(resultado);
}

function contarvitorias() {
    let vitorias = 0;
    for (let i = 0; i < 6; i++) {
        let resultado = ler(`Resultado do jogo ${i+1} (V/P): `)
        if (resultado === 'V') vitorias++;
    }
    return vitorias;
}

function classificar(vitorias) {
    if (vitorias >= 5) {
        return 1;
    }

    else if (vitorias >= 3) {
        return 2;
    }

    else if (vitorias >= 1) {
        return 3;
    }

    else {
        return -1;
    }
}

oi();