import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let N = Number(ler());
    let A = 0;
    let B = 0;
    
    for (let i = 0; i < N; i++) {

        let interruptor = Number(ler());
        
        if (interruptor === 1) {
            A = 1 - A;
        } 
        
        else if (interruptor === 2) {
            A = 1 - A;
            B = 1 - B;
        }   
    }
    
    console.log(A);
    console.log(B);
}

menu();