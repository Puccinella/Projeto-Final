const express = require('express');
const router = express.Router();
const controllerCadastro = require('../controllers/controllerCadastro');

router.get('/cadastro', controllerCadastro.paginaCadastro);
router.post('/cadastro', controllerCadastro.cadastro);

module.exports = router;