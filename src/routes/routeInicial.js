const express = require('express');
const router = express.Router();

const controllerCadastro = require('../controllers/controllerCadastro');

router.get('/cadastro', controllerCadastro.paginaCadastro);

module.exports = router;