const path = require('path');
const { jogo } = require('../models/jogo.cjs')
const { Op } = require('sequelize')

const paginaInicio = async (req, res) => {
    const jogos = await jogo.findAll();
    res.render('../views/pages/inicio', {
        usuario: req.session,
        jogos
    });
};

const filtrarPorCategoria = async (req, res) => {
    const categoria = req.params.nomeCategoria;

    const jogos = await jogo.findAll({
        where: {
            categoria: {
                [Op.like]: `%${categoria}%` 
            }
        }
    });

    res.render('../views/pages/inicio', {
        usuario: req.session,
        jogos
    });
};

module.exports = {
    paginaInicio,
    filtrarPorCategoria
};
