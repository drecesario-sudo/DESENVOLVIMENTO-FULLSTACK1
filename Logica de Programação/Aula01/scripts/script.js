const nomejs = document.getElementById("nome"); /* o nome js é apenas o caminho, ele busca o valor inserido pelo usuario */
const resultadojs = document.getElementById("resultado");
const botaoOK = document.getElementById("ok");
 
function Atividade01 ()
{
 
 
 
    for (let contador = 1; contador <=7; contador++)
    {
        const paragrafo = document.createElement("p");
        let mensagem = `mensagem ${contador} - ${nomejs.value} é um desenvolvedor full stack`
        paragrafo.textContent = mensagem.trim();
        resultadojs.appendChild(paragrafo);
 
    }
}
 
botaoOK.addEventListener("click", Atividade01)