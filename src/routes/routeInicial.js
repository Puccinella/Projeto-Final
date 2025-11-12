const express = require('express');
const router = express.Router();

const controllerInicio = require('../controllers/controllerInicio');

router.get('/', controllerInicio.paginaInicio);

module.exports = router;