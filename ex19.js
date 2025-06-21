import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let N = Number(ler());
    let M = Number(ler());
    let anotacoes = [];
    
    for (let i = 0; i < N; i++) {
        anotacoes.push(Number(ler()));
    }
    
    let menorSoma = 100000000009; 
    
    let soma1 = anotacoes[0];
    let soma2 = M - anotacoes[0];

    if (soma1 < menorSoma) {
        menorSoma = soma1;
    }
    
    if (soma2 < menorSoma) {
        menorSoma = soma2;
    }
    
    if (menorSoma === 100000000009) {
        console.log(-1);
    } 
    
    else {
        console.log(menorSoma);
    }
}

menu();