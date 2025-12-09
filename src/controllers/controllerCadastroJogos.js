const path = require('path');
const { jogo, cadastrarJogo } = require('../models/jogo.cjs');
const imagekit = require('../config/imagekit');

const paginaCadastroJogos = (req, res) => {
    res.render('../views/pages/cadastroJogos', {
        mensagens: {},
        preco:  null,
        distribuidora: null,
        categoria: null,
        descricao: null,
        desenvolvedor: null,
        usuario: req.session
    });
};

const cadastroJogos = async (req, res) => {
    const titulo = req.body.title;
    const preco = req.body.price;
    const distribuidora = req.body.publisher;
    const categoria = req.body.category;
    const descricao = req.body.description;
    const desenvolvedor = req.body.developer;
    
    const mensagens = {
        mensagemTitulo: null,
    }

    const verificarNome = await jogo.findOne({ where: {titulo}});
    if (verificarNome){
        mensagens.mensagemTitulo = "Título de jogo já existente"
    }

    if (mensagens.mensagemTitulo){
        return res.render('pages/cadastroJogos', {
            mensagens,
            preco,
            distribuidora,
            categoria,
            descricao,
            desenvolvedor,
            usuario: req.session
        })
    }

    const uploadImage = await imagekit.upload({
        file: req.file.buffer.toString('base64'),
        fileName: `${Date.now()}-${req.file.originalname}`,
        folder: '/capasJogos'
    });

    const idArquivo = uploadImage.fileId;
    console.log("fileId: ", idArquivo);

    await cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor, uploadImage.url);

    console.log(titulo, preco, distribuidora, categoria, descricao, desenvolvedor, uploadImage.url);

    res.redirect('/cadastroJogos');
};

module.exports = {
    paginaCadastroJogos,
    cadastroJogos
};