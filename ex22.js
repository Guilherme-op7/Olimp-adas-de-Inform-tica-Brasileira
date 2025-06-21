import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let C = Number(ler("Capacidade da cabine:"));
    let A = Number(ler("Número de alunos:"));
    
    let viagens = 0;
    let alunosRestantes = A;
    let capacidadePorViagem = C - 1;
    
    while (alunosRestantes > 0) {
        viagens++;
        
        if (alunosRestantes > capacidadePorViagem) {
            alunosRestantes -= capacidadePorViagem;
        } 
        
        else {
            alunosRestantes = 0;
        }
    }
    
    console.log(viagens);
}

menu();