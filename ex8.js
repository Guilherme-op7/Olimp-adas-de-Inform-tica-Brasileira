import prompt from 'prompt-sync';
let ler = prompt();

function exx() {
    let N = Number(ler('Quantidade de números: '));
    let numeros = [];
    
    for (let i = 0; i < N; i++) {
        let valor = Number(ler(`Número ${i+1}: `));

        if (valor === 0) {
            if (numeros.length > 0) {
                numeros.pop();
            }
        } 
        
        else {
            numeros.push(valor);
        }
    }
    
    let soma = 0;
    
    for (let num of numeros) {
        soma += num;
    }
    
    console.log(soma);
}

exx();