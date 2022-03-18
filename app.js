require("dotenv-safe/config.js");

const express = require("express");
const PORT = process.env.PORT;
const app = express();

const sequelize = require("./src/database/connection.js"); //conectar database
const funcionarios = require("./src/models/funcModels.js"); //conectar models
const rotas = require("./src/routes/funcRoutes.js"); //conectar rotas

app.use(express.json());

app.use("/funcionarios", rotas);

//sincronizar banco
async function sincronizar() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.log("Erro ao conectar banco: ${error}");
  }
}

sincronizar();
