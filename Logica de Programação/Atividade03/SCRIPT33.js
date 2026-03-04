const nome = document.getElementById("nomePessoa");
const idade = document.getElementById("idadePessoa");
const resultado = document.getElementById("resultado");
const botaoP = document.getElementById("B");


function A(){

        let idadeP = parseInt(idade.value);

    if(idadeP => 18){

        paragrafo = document.createElement("p");
        paragrafo.innerText=`Você é maior de idade!!`;
        
        resultado.appendChild(paragrafo)
    }

    else{
        paragrafo2 = document.createElement("p");
        paragrafo2.inneText=`Você é menor de idade`;

        resultado.appendChild(paragrafo2)
    }
}

botaoP.addEventListener("click", A);


