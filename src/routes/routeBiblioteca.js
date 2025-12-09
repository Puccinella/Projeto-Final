const express = require('express');
const router = express.Router();
const controllerBiblioteca = require('../controllers/controllerBiblioteca');
const controllerRoutes = require('../controllers/controllerRoutes');

router.get('/biblioteca', controllerRoutes.verificador_login , controllerBiblioteca.paginaBiblioteca);


module.exports = router;