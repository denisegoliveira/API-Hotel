const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

//informações para banco de dados
const funcionarios = sequelize.define("funcionarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, //não habilita campo nulo
    validate: {
      notEmpty: {
        msg: "Digite somente o seu nome",
      }
    }
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Digite o seu sobrenome",
      }
    }
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Digite somente os números do CPF",
      },
      len: {
        args: [11, 11],
        msg: 'Digite somente os números do seu CPF, sem pontos e traços'
      }
    }
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [["gerente", "recepcionista", "camareira", "supervisor"]],
        msg: "Escolha um cargo entre as opções disponíveis",
      }
    }
  },
  dataAdmissao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Insira uma data válida",
      }
    }
  },
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Insira um valor sem pontos e sem vírgulas",
      },
      len: {
        args: [4, 7],
        msg: "O valor precisa ser um número entre 4 e 7 digitos",
      }
    }
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [["matutino", "vespertino", "noturno"]],
        msg: "Escolha um turno entre as opções disponíveis",
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Digite um email válido",
      }
    }
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Digite os números de seu telefone",
      },
      len: {
        args: [10, 11],
        msg: 'Digite os números do telefone com DDD'
      }
    }
  }
});



module.exports = funcionarios;
