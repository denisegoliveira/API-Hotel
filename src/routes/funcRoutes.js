const express = require('express');
const router = express.Router();
const funcionarioController = require("../controllers/funcController.js");

router.post('/create', funcionarioController.create)     //criar novos

router.get('/', funcionarioController.showAll)               //listar todos

router.get('/:id', funcionarioController.showById)          //buscar por id

router.delete('/:id', funcionarioController.deleteById)        //

router.patch('/:id', funcionarioController.updateById)



module.exports = router;