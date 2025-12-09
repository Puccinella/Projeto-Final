const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerConfigConta = require('../controllers/controllerConfigConta');

router.get('/configConta', controllerRoutes.verificador_login, controllerConfigConta.paginaConfigConta);
router.post('/configConta', controllerRoutes.verificador_login, controllerConfigConta.alterarCadastro);

module.exports = router;