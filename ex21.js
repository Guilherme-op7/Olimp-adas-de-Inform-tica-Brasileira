import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let N = Number(ler("Tamanho da sequência:"));

    let linha = ler("Digite as alturas separadas por espaço:");
    
    let alturas = [];
    let numeroStr = "";
    
    for (let i = 0; i < linha.length; i++) {
        let c = linha[i];

        if (c !== ' ') {
            numeroStr += c;
        } 
        
        else if (numeroStr.length > 0) {
            alturas.push(Number(numeroStr));
            numeroStr = "";
        }

    }
    if (numeroStr.length > 0) {
        alturas.push(Number(numeroStr));
    }
    
    let contadorPicos = 0;

    for (let i = 1; i < N - 1; i++) {
      
        if (alturas[i - 1] > alturas[i] && alturas[i] < alturas[i + 1]) {
            contadorPicos++;
        }

    }
    
    console.log(contadorPicos >= 1 ? "S" : "N");
}

menu();