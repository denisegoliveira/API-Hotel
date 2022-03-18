const funcionarioModels = require("../models/funcModels.js");

class funcionarioController {
  static async showAll(req, res) {
    try {
      const funcionarios = await funcionarioModels.findAll({
        attributes: { exclude: ["createAt", "updateAt"] },
      });

      return res.status(200).json({ resultado: funcionarios });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }
  }

  static async showById(req, res) {
    const id = req.params.id;

    try {
      const funcionarios = await funcionarioModels.findByPk(id, {
        attributes: { exclude: ["createAt", "updateAt"] },
      });

      if (!funcionarios) {
        return res
          .status(400)
          .json({ status: 400, message: "O funcionário não foi encontrado!" });
      }

      return res.status(200).json(funcionarios);
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }
  }

  static async create(req, res) {
    //informações para rotas
    const {
      nome,
      sobrenome,
      cpf,
      cargo,
      dataAdmissao,
      salario,
      turno,
      email,
      telefone,
    } = req.body;

    if (
      !nome ||
      !sobrenome ||
      !cpf ||
      !cargo ||
      !dataAdmissao ||
      !salario ||
      !turno ||
      !email ||
      !telefone
    ) {
      return res.status(400).json({
        status: 400,
        message: "Todos os campos precisam ser preenchidos!",
      });
    }

    const funcionarioExists = await funcionarioModels.findOne({
      where: { cpf: cpf },
    }); //localizar informações já existentes

    if (funcionarioExists) {
      return res.status(400).json({
        status: 400,
        message: "O funcionário já está cadastrado",
      });
    }

    const newFuncionario = {
      //adicionar novas informaçoes ao banco de dados
      nome,
      sobrenome,
      cpf,
      cargo, //const para objeto
      dataAdmissao,
      salario,
      turno,
      email,
      telefone,
    };

    try {
      //tratar erro
      await funcionarioModels.create(newFuncionario);
      res
        .status(200)
        .json({ status: 200, message: "Funcionário cadastrado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
    }
  }

  static async updateById(req, res) {
    const { id } = req.params;
    const {
      nome,
      sobrenome,
      cpf,
      cargo, //const para objeto
      dataAdmissao,
      salario,
      turno,
      email,
      telefone,
    } = req.body;

    const funcionarios = await funcionarioModels.findOne({
      where: { id: id },
      raw: true,
    });

    if (!funcionarios) {
      return res.status(400).json({
        status: 400,
        message: "O funcionário não foi encontrado!",
      });
    }

    const novosDados = {
      nome,
      sobrenome,
      cpf,
      cargo,
      dataAdmissao,
      salario,
      turno,
      email,
      telefone,
    };

    try {
      await funcionarioModels.update(novosDados, { where: funcionarios });
      return res
        .status(200)
        .json({ status: 200, message: "Funcionário atualizado com sucesso!" });
    } catch (error) {
      return res
        .status(400)
        .json({ status: 400, message: `Algo deu errado: ${error}` });
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params

    const funcionarios = await funcionarioModels.findOne({
      where: { id: id },
      raw: true,
    });

    if (!funcionarios) {
      return res.status(400).json({
        status: 400,
        message: "O funcionário não foi encontrado",
      });
    }

    try {
      await funcionarioModels.destroy({ where: funcionarios });
      return res
        .status(200)
        .json({ status: 200, message: "Funcionário deletado!" });
    } catch (error) {
      return res.status(400).json({ status: 400, message: `Erro: ${error}` });
    }
  }
}

module.exports = funcionarioController;
