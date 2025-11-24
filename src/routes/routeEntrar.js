const express = require("express");
const router = express.Router();

const controllerEntrar = require('../controllers/controllerEntrar');

router.get('/entrar', controllerEntrar.paginaEntrar);
router.post('/loguin', controllerEntrar.login);

module.exports = router;