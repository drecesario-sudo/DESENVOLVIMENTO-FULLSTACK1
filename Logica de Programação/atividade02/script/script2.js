const salarioHtml = document.getElementById("salario");
const totalVendashtml = document.getElementById("resultados");
const botaoCalcularHtml = document.getElementById("calcular");

const resultadoHtml = document.getElementById("resultados"); 

let comissao = 0;

let nomeJs = nomeHtml.value;
let salarioJs = parseFLoat(salarioHtml.value);
let totalVendashtml = parseFloat(totalVendashtml.value);

let comissaoJs = totalVendasJs * 0.75;

let paragrafo3 = document.createElement("p");
paragrafo3.innerText = `o Total das vendas dos vendedor é: ${totalVendasJs}`;
resultadoHtml.appendChild(paragrafo3);

function calcularComissao(){

    let comissaoJs = totalVendasJs * 0.75;

    let paragrafo = document.createElement("p");
paragrafo3.innerText = `o Total das vendas dos vendedor é: ${totalVendasJs}`;
resultadoHtml.appendChild(paragrafo);

    let paragrafo1 = document.createElement("p");
paragrafo3.innerText = `o Total das vendas dos vendedor é: ${totalVendasJs}`;
resultadoHtml.appendChild(paragrafo1);

    let paragrafo2 = document.createElement("p");
paragrafo3.innerText = `o Total das vendas dos vendedor é: ${totalVendasJs}`;
resultadoHtml.appendChild(paragrafo2);

    let paragrafo3 = document.createElement("p");
paragrafo3.innerText = `o Total das vendas dos vendedor é: ${totalVendasJs}`;
resultadoHtml.appendChild(paragrafo3);

}