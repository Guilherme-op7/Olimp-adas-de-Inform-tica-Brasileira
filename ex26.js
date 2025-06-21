import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let entrada = ler("N e M (separados por espaço):");

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
    
    let N = valores[0];
    let M = valores[1];
    
    if (N % (M + 1) === 0) {
        console.log("Carlos");
    } 
    
    else {
        console.log("Paula");
    }
}

menu();