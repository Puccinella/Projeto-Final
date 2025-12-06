const path = require('path');
const jogo = require('../models/jogo.cjs');
const imagekit = require('../config/imagekit');

const paginaCadastroJogos = (req, res) => {
    res.render('../views/pages/cadastroJogos');
};

const cadastroJogos = async (req, res) => {
    const titulo = req.body.title;
    const preco = req.body.price;
    const distribuidora = req.body.publisher;
    const categoria = req.body.category;
    const descricao = req.body.description;
    const desenvolvedor = req.body.developer;

    const uploadImagem = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: `${Date.now}`
    });

    jogo.cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor);

    console.log(titulo, preco, distribuidora, categoria, descricao, desenvolvedor);
    res.redirect('/cadastroJogos');
};

module.exports = {
    paginaCadastroJogos,
    cadastroJogos
};