const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerCarrrinho = require('../controllers/controllerCarrinho');
const controllerInicio = require('../controllers/controllerInicio');

router.get('/carrinho', controllerRoutes.verificador_login, controllerCarrrinho.paginaCarrinho);
router.post('/carrinho', controllerRoutes.verificador_login, controllerInicio.adicionarItemAoCarrinho);
router.post('/carrinho/remover/:itemId', controllerRoutes.verificador_login, controllerCarrrinho.removerItem);
router.post('/carrinho/pagar/:pedidoId', controllerRoutes.verificador_login, controllerCarrrinho.realizarPagamento);
module.exports = router;