import prompt from 'prompt-sync';
let ler = prompt();

function menu1() {
    let C = Number(ler());
    let lajotas = [];
    
    for (let i = 0; i < C; i++) {
        lajotas.push(Number(ler()));
    }
    
    let posicao = 0;
    let pulos = 0;
    
    while (posicao < C - 1) {
        if (posicao + 2 < C && lajotas[posicao + 2] === 1) {
            posicao += 2;
        } 
        
        else if (posicao + 1 < C && lajotas[posicao + 1] === 1) {
            posicao += 1;
        } 
        
        else {
            console.log(-1);
            return;
        }

        pulos++;
    }
    
    console.log(pulos);
}

menu1();