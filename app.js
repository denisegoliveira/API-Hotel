const express = require('express');

const app = express();

const sequelize = require('./src/database/connection.js') //conectar banco de dados

app.use(express.json());

//sincronizar banco
async function sincronizar() {
    try {
        await sequelize.sync()
        app.listen(3000, () => console.log(`Servidor rodando`));
        }catch (error) {
        console.log('Erro ao conectar banco: ${error}')
    }
}

sincronizar()