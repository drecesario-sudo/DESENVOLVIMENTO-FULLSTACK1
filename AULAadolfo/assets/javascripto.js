// JavaScript tem diverso métodos para manipular elementos HTML (manipular = pegar)
// Primeiro pega o elemento e armazena em memória
// Window (Janela) e Document (Documento)
 
const btnMudarCor = document.getElementById('btnMudarCor');
console.log(btnMudarCor);
 
const corpoPagina = document.body;
console.log(corpoPagina);
 
btnMudarCor.addEventListener('click', function() {
    // const corParmeira = "#0C6636";
    
    const corAleatoria = '#' + Math.floor(Math.random()*1677215).toString(16);
    corpoPagina.style.backgroundColor = corAleatoria;
});


//BOTOES DO CONTADOR
const BotaoContador = document.getElementById('BotaoContador')
const BotaoZerar = document.getElementById('BotaoZerar')
const spanNumeroCliques = document.getElementById('NumeroCliques')

let contagemCliques = 0;

BotaoContador.addEventListener('click', function(){
    contagemCliques = contagemCliques + 1;
    spanNumeroCliques.textContent = contagemCliques;
})

BotaoZerar.addEventListener('click',function(){
    contagemCliques = 0;
    spanNumeroCliques.textContent = contagemCliques;
} );



        




