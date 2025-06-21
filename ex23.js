import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let A = Number(ler("Peso de A:"));
    let B = Number(ler("Peso de B:"));
    let C = Number(ler("Peso de C:"));
    let D = Number(ler("Peso de D:"));
    
    if (A === B + C + D && B + C === D && B === C) {
        console.log("S");
    } 
    
    else {
        console.log("N");
    }
}

menu();