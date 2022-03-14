const funcionariosModels = require('../models/funcModels.js')


class funcionariosController {
  //static async showAll(req, res) 
  //static async showById(req, res)

  static async create(req, res) {                                  //informações para rotas
    const {
      nomeCompleto,
      cpf,
      cargo,
      dataAdmissao,
      salario,
      turno,
      email,
      telefone,
    } = req.body

    if (
      !nomeCompleto ||
      !cpf ||
      !cargo ||
      !dataAdmissao ||
      !salario ||
      !turno ||
      !email ||
      !telefone     
    ) {
        return res.status(401).json({
          status: 401,
          message: 'Todos os campos precisam ser preenchidos!'
        })
      }
  
      const funcionarioExists = await Funcionario.findOne({ where: { cpf } })   //localizar informações já existentes
  
      if (funcionarioExists) {
        return res.status(401).json({
          status: 401,
          message: 'O funcionário com o CPF informado já está cadastrado'
        })
      }
  
      const newFuncionario = {               //adicionar novas informaçoes ao banco de dados
        nomeCompleto,
        cpf,
        cargo,
        dataAdmissao,
        salario,
        turno,
        email,
        telefone,
      }
  
      try {
        await Funcionario.create(newFuncionario)
        res
          .status(201)
          .json({ status: 201, message: 'Funcionário cadastrado com sucesso!' })
      } catch (error) {
        return res.status(401).json({ status: 401, message: error.message })
      }
    }
  }
  
  module.exports = funcionarioController;