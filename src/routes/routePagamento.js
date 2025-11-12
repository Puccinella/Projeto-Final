const express = require('express');
const router = express.Router();

const controllerPagamento = require('../controllers/controllerPagamento');

router.get('/pagamento', controllerPagamento.paginaPagamento);

module.exports = router;