const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

//informações para banco de dados
const funcionarios = sequelize.define("funcionarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,                                      //não habilita campo nulo
    validate: {
      isAlpha: {                                       
        msg: 'O campo deve conter somente letras',
      }
    }
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: 'O campo deve conter somente letras',
      }
    }
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: 'O campo deve conter somente os números do CPF',
      }
    }
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isIn: {                                                     // escolher entre as opções
          args: [["gerente", "recepcionista", "camareira", "supervisor"]],
          msg: "Escolha um cargo entre as opções disponiveis"      
      }
    }
  },
  dataAdmissao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
      validate: {
        isAlphanumeric: {
          msg: 'Insira um valor',
      },
      len: {                                                    //incluir limitação de caracteres
        args: [4, 7],
          msg: 'Esse campo precisa ter entre 4 e 7 caracteres'
      }
    }
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false,
    isInt: {
      Validate: {
        isIn: {
      args: [["matutino", "vespertino", "noturno"]],
      msg: "Escolha um turno entre matutino, vespertino e noturno",
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Preencha com um email válido',
        }
      }
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          msg: 'Escreva somente os números do telefone',
        }
      }
    },
});

module.exports = funcionarios;
