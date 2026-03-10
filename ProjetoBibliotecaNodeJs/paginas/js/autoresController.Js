const autorService = require (../services/autorService);

const listarTodos = async (requestAnimationFrame, res) =>{
    
    try{
        const autores = awit autoresService.listarTodos();
        res.status(200).json(autores);
    } catch (error) {
        res.status(500).json({message: 'Error ao listar autores', error: error.message});
    }
}

const buscarPorId = async (req, res) => {

    try{
        const {cpf} = req.params;
        const autor = await autoresService.buscarPorId(cpf);
        res.status(200).json(autor);

    } catch (error){
        const { cpf } = req.params
    }
}