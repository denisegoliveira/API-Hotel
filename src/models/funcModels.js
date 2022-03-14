const sequelize = require('../database/connection.js')
const { DataTypes } = require('sequelize')

//informações para banco de dados
const funcionariosModels = sequelize.define('funcionarios', {
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  dataAdmissao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false,
    isInt: {
        args: [["matutino", "vespertino", "noturno"]],
        msg: "Escolha um turno entre matutino, vespertino e noturno",
      },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}
})

module.exports = funcionariosModels;