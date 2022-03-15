require('dotenv-safe/config.js');

const express = require('express');
const PORT = process.env.PORT

const funcionarios = require('./src/models/funcModels.js')
const sequelize = require('./src/database/connection.js')                 //conectar banco de dados - database
const rotas = require('./src/routes/funcRoutes.js') 

const app = express();

app.use(express.json());

app.use('/funcionarios', funcRoutes)

//sincronizar banco
async function sincronizar() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Servidor rodando na ${PORT}`));
        } catch (error) {
        console.log('Erro ao conectar banco: ${error}')
    }
}

sincronizar()