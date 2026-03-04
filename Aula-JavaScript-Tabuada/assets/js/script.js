

const botaoGerar = document.getElementById("botaoGerar");


function gerarATabuada(){
       
    const entradaNumero = document.getElementById("entradaNumero")
    const resultado = document.getElementById("resultado")

    let numero = parseInt(entradaNumero.value);

    if(isNaN || numero < 1 || numero > 10){
        resultado.innerText = "número informado inválido! Verifique.";
        return;
    }

    for(let contador=-1; contador <= 10; ){

        linha = document.createElement("p");

        linha.textContent = `${numero} x ${contador} = ${numero * contador}`;
    }

}

botaoGerar.addEventListener("click", gerarATabuada)
