// JavaScript tem diverso métodos para manipular elementos HTML (manipular = pegar)
// Primeiro pega o elemento e armazena em memória
// Window (Janela) e Document (Documento)


 


// CALCULADORA

//const numero1 = document.getElementById('numero1')
//const numero2 = document.getElementById('numero2')
//const botaodesoma = document.getElementById('botaodesoma')
//const resultado = document.getElementById('resultado')

//botaodesoma.addEventListener('click', function (){

        //const valor1 = inputNumero1.value;
        //const valor2 = inputNumero2.value;

        //const numero1 = parseFloat(valor1);
        //const numero2 = parseFloat(valor2);
        //if (isNaN(numero1) || isNaN(numero2)) {
           // return;
       // }

       // const soma = valor1 + valor2;
       // elementoResultado.textContent = `O resultado é: ${soma}`;
      //  })


// -----------------------------------------------CALCULADORA--------------------------------------------//

//-------------------------------------------------------------------------------------------------//


const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
const operacao = document.getElementById('operacao');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const terceiroNumero = document.getElementById('terceiroNumero');
const resultado = document.getElementById('resultado');

function RealizarOperacao() {
    const op = operacao.value;
    const num1 = Number(primeiroNumero.value);
    const num2 = Number(segundoNumero.value);
    const num3 = Number(terceiroNumero.value);

    if (primeiroNumero.value === "" || segundoNumero.value === "" || terceiroNumero.value === "") {
        alert("Preencha todos os números!");
        return;
    }

    let res = 0;
    if (op === "somar") res = num1 + num2 + num3;
    else if (op === "subtrair") res = num1 - num2 - num3;
    else if (op === "multiplicar") res = num1 * num2 * num3;
    else if (op === "dividir") {
        if (num2 === 0 || num3 === 0) {
            alert("Não é possível dividir por zero!");
            return;
        }
        res = num1 / num2 / num3;
    }

    resultado.innerText = res;
}

function LimparCampos() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    terceiroNumero.value = "";
    resultado.innerText = "";
}

calcular.addEventListener('click', RealizarOperacao);
limpar.addEventListener('click', LimparCampos);


          



        














