import prompt from 'prompt-sync';
let ler = prompt();

function menu() {

    let N = Number(ler());
    

    let posicao = ler();

    let pos;

    if (posicao[0] === 'A' || posicao[0] === 'B' || posicao[0] === 'C') {
        pos = posicao[0];
    } 
    
    else if (posicao[1] === 'A' || posicao[1] === 'B' || posicao[1] === 'C') {
        pos = posicao[1];
    } 
    
    else {
        pos = 'A'; 
    }
    

    let movimentos = [];

    for (let i = 0; i < N; i++) {
        let move = ler();
 
        let num;

        if (move[0] === '1') {
            num = 1;
        } 

        else if (move[0] === '2') {
            num = 2;
        } 
        
        else if (move[0] === '3') {
            num = 3;
        } 
        
        else {
            num = 1; 
        }

        movimentos.push(num);
    }

    for (let i = 0; i < N; i++) {
    let movimento = movimentos[i];

    if (movimento === 1) {

        if (pos === 'A') {
            pos = 'B';
        } 
        
        else {
            if (pos === 'B') {
                pos = 'A';
            }
        }

    } 

    else {
        if (movimento === 2) {
            if (pos === 'B') {
                pos = 'C';
            } 
            else {
                if (pos === 'C') {
                    pos = 'B';
                }
            }
        } 
        
    else {
        if (movimento === 3) {

            if (pos === 'A') {
                pos = 'C';
            } 
                
            else {
                if (pos === 'C') {
                pos = 'A';
                }
            }
        }
    }
    }
    }

    console.log(pos);
    }

menu();