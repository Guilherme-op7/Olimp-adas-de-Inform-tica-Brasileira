import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let N = Number(ler("Tamanho da sequência:"));
    let linha = ler("Alturas separadas por espaço:");
    
    let alturas = [];
    let num = "";
    
    for (let i = 0; i < linha.length; i++) {

        if (linha[i] === ' ') {
            alturas.push(Number(num));
            num = "";
        } 
        
        else {
            num += linha[i];
        }
    }
    
    if (num !== "") {
        alturas.push(Number(num));
    }
    
    let picos = 0;
    for (let i = 1; i < N - 1; i++) {
        if (alturas[i-1] > alturas[i] && alturas[i] < alturas[i+1]) {
            picos++;
        }
    }
    
    if (picos >= 1) {
        console.log("S");
    } 
    
    else {
        console.log("N");
    }
}

menu();