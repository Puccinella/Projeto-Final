const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');

router.get('/cadastroJogos', controllerRoutes.verificador_login ,controllerRoutes.verificador_administrador , controllerCadastroJogos.paginaCadastroJogos);
router.post('/cadastroJogos',controllerRoutes.verificador_login ,controllerRoutes.verificador_administrador ,controllerCadastroJogos.cadastroJogos);

module.exports = router;