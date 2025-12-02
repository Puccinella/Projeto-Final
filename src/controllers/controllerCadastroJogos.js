const path = require('path');
const jogo = require('../models/jogo.cjs');

const paginaCadastroJogos = (req, res) => {
    res.render('../views/pages/cadastroJogos');
};

const cadastroJogos = (req, res) => {
    const titulo = req.body.title;
    const preco = req.body.price;
    const distribuidora = req.body.publisher;
    const categoria = req.body.category;
    const descricao = req.body.description;
    const desenvolvedor = req.body.developer;

    jogo.cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor);

    res.send("Jogo cadastrado");
    console.log(titulo, preco, distribuidora, categoria, descricao, desenvolvedor);
    res.resdirect('/cadastroJogos');
};

module.exports = {
    paginaCadastroJogos,
    cadastroJogos
};