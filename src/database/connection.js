const { Sequelize } = require('sequelize')

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
