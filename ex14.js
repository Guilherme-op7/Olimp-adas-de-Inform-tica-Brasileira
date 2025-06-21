import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let N = Number(ler());
    let M = Number(ler());

    let compradas = {};

    let faltam = 0;
    
    for (let i = 0; i < M; i++) {

        let x = Number(ler());
        compradas[x] = true;

    }
    
    for (let i = 1; i <= N; i++) {
        
        if (!compradas[i]) {
            faltam++;
        }
    }
    
    console.log(faltam);
}

menu();