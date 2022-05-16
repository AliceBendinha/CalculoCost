alert ("EFECTUANDO CÁLCULOS BÁSICOS");0


//Selecionando os elementos

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let elementH2 = document.getElementById("text-resultado");


//Usando funções
function somar(){

    //concatenar é juntar textos

    let numero1 = parseFloat(input1.value);
    let numero2 =  parseFloat(input2.value);
    let resultado = numero1 + numero2; // 2 * 2,  2 / 2, 2 - 2


    elementH2.innerHTML = "O resultado da operação é:" + resultado;

}

function multiplicar(){

    //concatenar é juntar textos

    let numero1 = parseFloat(input1.value);
    let numero2 =  parseFloat(input2.value);
    let resultado = numero1 * numero2; 


    elementH2.innerHTML = "O resultado da operação é: " + resultado;

}

function dividir(){

    let numero1 = parseFloat(input1.value);
    let numero2 =  parseFloat(input2.value);
    let resultado = numero1 / numero2; // 2 * 2,  2 / 2, 2 - 2


    elementH2.innerHTML = "O resultado da operação é: " + resultado;

}

function subtrair(){

    //concatenar é juntar textos

    let numero1 = parseFloat(input1.value);
    let numero2 =  parseFloat(input2.value);
    let resultado = numero1 - numero2; 


    elementH2.innerHTML = "O resultado da operação é: " + resultado;

}


