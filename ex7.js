import prompt from 'prompt-sync';
let ler = prompt();

function copeiro() {
    let A = Number(ler());
    let S = Number(ler());
    let D = Number(ler());
    
    let dias = calcular(A, S, D);
    console.log(dias);
}

function calcular(A, S, D) {
    if (S >= A) {
        return 1;
    } 
    
    else {
        let faltam = A - S;
        let porDia = S - D;
        let extras = Number(faltam / porDia);
        
        if (faltam % porDia !== 0) {
            extras++;
        }
        
        return extras + 1;
    }
}

copeiro();