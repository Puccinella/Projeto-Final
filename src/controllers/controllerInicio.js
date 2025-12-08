const path = require('path');
const { jogo } = require('../models/jogo.cjs')


const paginaInicio = async (req, res) => {
    const jogos = await jogo.findAll();
    res.render('../views/pages/inicio', {
        usuario: req.session,
        jogos
    });
};


module.exports = {
    paginaInicio
};