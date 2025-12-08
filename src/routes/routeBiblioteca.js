const express = require('express');
const router = express.Router();
const controllerBiblioteca = require('../controllers/controllerBiblioteca');

router.get('/biblioteca', controllerBiblioteca.paginaBiblioteca);


module.exports = router;