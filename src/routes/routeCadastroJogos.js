const express = require('express');
const router = express.Router();

const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');

router.get('/cadastroJogos', controllerCadastroJogos.paginaCadastroJogos);
router.post('/cadastroJogos', controllerCadastroJogos.cadastroJogos);

module.exports = router;