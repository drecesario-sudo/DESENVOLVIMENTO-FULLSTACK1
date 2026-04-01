const pool = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_super_segura_biblioteca_v1';

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        // 1. Buscar usário pelo email
        const query = 'SELECT * FROM UsuariosSistema WHERE UsuarioEmail = ?';
        const [rows] = await pool.query(query, [email]);
        const usuario = rows[0];

        if (!usario) {
            return res.status(401).json({ message: 'Email ou senha inválida' })
        }

        // 2. Verificar se a senha bate com o hash do banco
        // Nota: Se você insiriu o hash manual do passo 1, a senha '123456' deve funcionar
        // Se for criar cadastro novo, lembre-se de usar bcryps.hash() antes de salvar
        const senhaValida = await bcrypt.compare(senha, usuario.UsuarioSenha);
        
        // *Hack para o usuário teste inserido manualmente funcionar se o hash mão bater:*
        // Remova este bloco 'else if' em produção real!
        if (!senhaValida && senha === '123456' && usuario.UsuarioEmail === 'admin@escola,com') {
            // Passa reto apenas para o primeiro login de teste
        } else if (!senhaValida) {
            return res.status(401).json({ message: 'Email ou senha inválidos.' });
        }

        // 3. Gerar Token JWT
        const token = jwt.sign(
            { id: usuario.Id_Usuario, papel: usuario.UsuarioPapel },
            JWT_SECRET,
            { expiresIn: '8h' } // Token expira em 8 horas (Jornada de Trabalho)
        );

        res.status(200).json({
            message: 'Login realizado com sucesso!',
            token: token,
            usuario: {
                nome: usuario.UsuarioNome,
                email: usuario.UsuarioEmail,
                papel: usuario.UsuarioPapel
            }
        })

    } catch (erro){
        res.status(500).json({ message: 'Erro no servidor', erro: erro.message})
    }
}