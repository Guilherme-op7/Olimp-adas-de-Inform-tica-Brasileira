import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let A = Number(ler('Alunos: '));
    let M = Number(ler('Monitores: '));
    
    if (A + M <= 50) {
        console.log('S');
    } 
    
    else {
        console.log('N');
    }
}

menu();