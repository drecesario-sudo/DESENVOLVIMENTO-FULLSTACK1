// src/config/database.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
 
dotenv.config();
 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// teste rapido de conexão ao iniciar
pool.getConnection()
    .then(connection => {
        console.log('Sucesso: Conexão com o Banco de Dados MySQL estabelecida');
        connection.release();
    })
    .catch(error => {
        console.error('erro: Falha ao conbectar ao Banco de Dados.', error);
    });

module.exports = pool;