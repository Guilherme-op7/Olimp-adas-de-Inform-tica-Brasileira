import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let P = Number(ler("Quem gritou 'par'? (0=Alice, 1=Bob):"));
    let D1 = Number(ler("Dedos da Alice:"));
    let D2 = Number(ler("Dedos do Bob:"));
    
    let soma = D1 + D2;
    let resultado;
    
    if (soma % 2 === 0) {
        resultado = P;
    } 
    
    else {
        resultado = 1 - P;
    }
    
    if (resultado === 0) {
        console.log("Alice");
    } 
    
    else {
        console.log("Bob");
    }
}

menu();