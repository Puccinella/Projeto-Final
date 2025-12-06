const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');

router.get('/cadastroJogos',controllerCadastroJogos.paginaCadastroJogos);
router.post('/cadastroJogos', controllerCadastroJogos.cadastroJogos);
router.post('/cadastroJogos', upload.single('imagem'), controllerCadastroJogos.cadastroJogos);

module.exports = router;