const { Sequelize } = require("sequelize");
require("dotenv-safe/config.js");

const sequelize = new Sequelize(process.env.DB_URL); //manipular banco de dados

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.log(`Erro ao conectar banco: ${error}`);
  }
}

connect();

module.exports = sequelize;
