const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerCarrrinho = require('../controllers/controllerCarrinho');

router.get('/carrinho', controllerRoutes.verificador_login, controllerCarrrinho.paginaCarrinho);

module.exports = router;