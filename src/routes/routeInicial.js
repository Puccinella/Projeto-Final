const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerInicio = require('../controllers/controllerInicio');

router.get('/', controllerRoutes.verificador_login, controllerInicio.paginaInicio);
router.get("/categoria/:nomeCategoria", controllerInicio.filtrarPorCategoria);

module.exports = router;