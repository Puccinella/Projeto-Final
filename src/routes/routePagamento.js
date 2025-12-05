const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerPagamento = require('../controllers/controllerPagamento');

router.get('/pagamento', controllerRoutes.verificador_login,controllerPagamento.paginaPagamento);

module.exports = router;