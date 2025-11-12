const express = require('express');
const router = express.Router();

const controllerCadastro = require('../controllers/controllerCadastro');

router.get('/', controllerCadastro.paginaCadastro);
router.get('../views/pages/cadastro', controllerCadastro.paginaCadastro);

module.exports = router;