const express = require('express');
const router = express.Router();

const controllerCarrrinho = require('../controllers/controllerCarrinho');

router.get('/carrinho', controllerCarrrinho.paginaCarrinho);

module.exports = router;