const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
const controllerCadastro = require('../controllers/controllerCadastro');
const controllerConfigConta = require('../controllers/controllerConfigConta');
const controllerCadastroJogos = require('../controllers/controllerCadastroJogos');
const controllerCarrinho = require('../controllers/controllerCarrinho');
const controllerPagamento = require('../controllers/controllerPagamento');

router.get('/inicio', controller.paginaInicio);
router.get('/cadastro', controllerCadastro.paginaCadastro);
router.get('/configConta', controllerConfigConta.paginaConfigConta);
router.get('/cadastroJogos', controllerCadastroJogos.paginaCadastroJogos);
router.get('/carrinho', controllerCarrinho.paginaCarrinho);
router.get('/pagamento', controllerPagamento.paginaPagamento);

module.exports = router;