import prompt from 'prompt-sync';
let ler = prompt();

function gg() {
    let mega = Number(ler('Megabytes mensais: '));
    let meses = Number(ler('Número de meses: '));
    let sobra = 0;
    
    for (let i = 0; i < meses; i++) {
        let uso = Number(ler(`Uso no mês ${i+1}: `));
        sobra += mega - uso;
    }
    
    console.log(sobra + mega);
}

gg();