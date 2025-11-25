const express = require('express');
const router = express.Router();

const controllerConfigConta = require('../controllers/controllerConfigConta');

router.get('/configConta', controllerConfigConta.paginaConfigConta);
router.post('/configConta/atualizar', controllerConfigConta.alterarCadastro);

module.exports = router;