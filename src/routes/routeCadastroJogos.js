const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');

router.get('/cadastroJogos', controllerRoutes.verificador_login, controllerRoutes.verificador_administrador ,controllerCadastroJogos.paginaCadastroJogos);
router.post('/cadastroJogos', controllerRoutes.verificador_administrador, controllerRoutes.verificador_login ,upload.single('imagem'), controllerCadastroJogos.cadastroJogos);

module.exports = router;