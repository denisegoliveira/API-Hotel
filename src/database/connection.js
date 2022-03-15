const { Sequelize } = require('sequelize')
require('dotenv-safe/config.js');

const sequelize = new Sequelize('sqlite:./src/database/database.sqlite') //manipular banco de dados

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Banco de dados conectado!')
  } catch (error) {
    console.log(`Erro ao conectar banco: ${error}`)
  }
}

connect()

module.exports = sequelize;
