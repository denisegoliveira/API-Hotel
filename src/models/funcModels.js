const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

//informações para banco de dados
const funcionarios = sequelize.define("funcionarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, //não habilita campo nulo
    validate: {
      notEmpty: {
        msg: "O campo precisa ser preenchido somente com seu nome",
      }
    }
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O campo precisa ser preenchido com seu sobrenome",
      }
    }
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "O campo precisa ser preenchido com os números do CPF",
      },
      len: {
        args: [11, 11],
        msg: 'Escreva somente os números do seu CPF'
      }
    }
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [["gerente", "recepcionista", "camareira", "supervisor"]],
        msg: "Escolha um cargo entre as opções disponiveis",
      }
    }
  },
  dataAdmissao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true,
    }
  },
  //ajustar validação do salario
  salario: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Insira um valor sem pontos e sem vírgulas",
      },
      len: {
        args: [4, 7],
        msg: "O valor precisa ser um núemro entre 4 e 7 digitos",
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
        msg: "Preencha com um email válido",
      }
    }
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Preencha com os números de seu telefone",
      },
      len: {
        args: [10, 11],
        msg: 'Preencha somente com os números do telefone, incluindo DDD'
      }
    }
  }
});



module.exports = funcionarios;
