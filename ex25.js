import prompt from 'prompt-sync';
let ler = prompt();

function menu() {

    let entrada = ler("L A P R (separado por espaço):");
    let valores = [];
    let numAtual = "";
    
    for (let i = 0; i < entrada.length; i++) {
        let c = entrada[i];

        if (c >= '0' && c <= '9') {
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
    
    let L = valores[0];
    let A = valores[1];
    let P = valores[2];
    let R = valores[3];
    
    let diagonalQuadrado = L*L + A*A + P*P;
    let raiz = 0;
    
    while (raiz * raiz <= diagonalQuadrado) {
        raiz++;
    }

    raiz--;
    
    console.log(raiz <= 2 * R ? "S" : "N");
}

menu();