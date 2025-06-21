import prompt from 'prompt-sync';
let ler = prompt();

function menuu() {
    let A1 = Number(ler());
    let D1 = Number(ler());
    let A2 = Number(ler());
    let D2 = Number(ler());
    
    if (D1 !== A2 && D2 === A1) {
        console.log(1);
    } 
    
    else if (D2 !== A1 && D1 === A2) {
        console.log(2);
    } 
    
    else {
        console.log(-1);
    }
}

menuu();