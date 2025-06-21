import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let A = Number(ler());
    let B = Number(ler());
    let C = Number(ler());
    let H = Number(ler());
    let L = Number(ler());
    
    let passa = false;
    
    if ((A <= H && B <= L) || (A <= L && B <= H)) {
        passa = true;
    }

    if ((A <= H && C <= L) || (A <= L && C <= H)) {
        passa = true;
    }


    if ((B <= H && C <= L) || (B <= L && C <= H)) {
        passa = true;
    }
    
    console.log(passa ? 'S' : 'N');
}

menu();