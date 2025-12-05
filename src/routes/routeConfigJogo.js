const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerConfigJogo = require('../controllers/controllerConfigJogo');

router.get('/configJogo', controllerRoutes.verificador_administrador, controllerConfigJogo.paginaConfigJogo);

module.exports = router;