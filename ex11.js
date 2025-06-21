import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let v = Number(ler('Valor total: '));
    let p = Number(ler('Parcelas: '));
    let parte = Number(v / p);
    let sobra = v % p;
    
    for (let i = 1; i <= p; i++) {
        if (i <= sobra) {
            console.log(parte + 1);
        } 
        
        else {
            console.log(parte);
        }
    }
}

menu();