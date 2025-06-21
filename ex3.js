import prompt from 'prompt-sync';
let ler = prompt();

function oi() {
    let A = Number(ler('Moedas na arca: '));
    let N = Number(ler('Número de marinheiros: '));
    
    let moedasCapitao = calcularmoedas(A, N);
    console.log(`O capitão recebeu ${moedasCapitao} moedas`);
}

function calcularmoedas(A, N) {
    return (A / (N + 2)) * 2;
}

oi();