const express = require('express');
const router = express.Router();

const controllerConfigJogo = require('../controllers/controllerConfigJogo');

router.get('/configJogo', controllerConfigJogo.paginaConfigJogo);

module.exports = router;