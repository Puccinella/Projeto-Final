const express = require('express');
const router = express.Router();
const controllerRoutes = require('../controllers/controllerRoutes');
const controllerConfigJogo = require('../controllers/controllerConfigJogo');
const upload = require('../config/upload');

router.get('/configJogo', controllerRoutes.verificador_administrador, controllerConfigJogo.paginaConfigJogo);
router.post('/configJogo', controllerRoutes.verificador_administrador, upload.single('imagem') ,controllerConfigJogo.alterarJogo);

module.exports = router;