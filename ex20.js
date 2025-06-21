import prompt from 'prompt-sync';
let ler = prompt();

function menu() {

    let entrada = ler();

    let valores = [];

    let numAtual = "";
    

    for (let i = 0; i < entrada.length; i++) {
        let c = entrada[i];

        if (c === '-' || (c >= '0' && c <= '9')) {
            numAtual += c;
        } 
        
        else if (numAtual !== "") {
            valores.push(Number(numAtual));
            numAtual = "";
        }
    }

    if (numAtual !== "") {
        valores.push(Number(numAtual));
    }
    
    let H = valores[0]; 
    let P = valores[1]; 
    let F = valores[2]; 
    let D = valores[3]; 
    
    let fugiu = false;
    let posicaoAtual = F;
    

    while (true) {

        if (posicaoAtual === H) {
            fugiu = true;
            break;
        }

        if (posicaoAtual === P) {
            fugiu = false;
            break;
        }
        

        if (D === -1) { 
            posicaoAtual -= 1;

            if (posicaoAtual < 0) {
                posicaoAtual = 15;
            }
        } 
        
        else { 
            posicaoAtual += 1;

            if (posicaoAtual > 15) {
                posicaoAtual = 0;
            }
        }
    }
    
    if (fugiu) {
        console.log("S");
    } 
    
    else {
        console.log("N");
    }
}

menu();