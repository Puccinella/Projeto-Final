const express = require('express');
const router = express.Router();

const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');

router.get('/cadastroJogos', controllerCadastroJogos.paginaCadastroJogos);

module.exports = router;