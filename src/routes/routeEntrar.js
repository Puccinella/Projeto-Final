const express = require("express");
const router = express.Router();

const controllerEntrar = require('../controllers/controllerEntrar');

router.get('/entrar', controllerEntrar.paginaEntrar);

module.exports = router;