// função para buscar o endereço automaticamente
//  via API dos correios    

async function buscarEndereco()
{
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    if(cep !== ""){

        const expressaovalidacao = /^[0-9] {8}$/;
        if (expressaovalidacao.test(cep))
        {
            const resposta = await fetch(`https://viacep.com/ws/${cep}/json`)
            const dados = await resposta.json();
            if(!dados.erro)
            {
                document.getElementById('rua').value = dados.logradouro;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
            }

            else{
                alert("CEP não foi encontrado");
            }
        }
    }
}