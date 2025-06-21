import prompt from 'prompt-sync';
let ler = prompt();

function menu() {
    let comp1 = Number(ler("Comprimento do primeiro local:"));
    let larg1 = Number(ler("Largura do primeiro local:"));
    let comp2 = Number(ler("Comprimento do segundo local:"));
    let larg2 = Number(ler("Largura do segundo local:"));
    
    let area1 = calcularArea(comp1, larg1);
    let area2 = calcularArea(comp2, larg2);
    
    if (area1 > area2) {
        console.log(area1);
    } 
    
    else {
        console.log(area2);
    }
}

function calcularArea(comprimento, largura) {
    return comprimento * largura;

}

menu();