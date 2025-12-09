const path = require('path');
const { Op } = require('sequelize')
const { jogo, editarJogo, excluirJogo } = require('../models/jogo.cjs')
const imagekit = require('../config/imagekit');

const paginaConfigJogo = async (req, res) => {
    const jogos = await jogo.findAll();
    res.render('../views/pages/configJogo', {
        jogos,
        mensagem: null,
        usuario: req.session
    });
};



const alterarJogo = async (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar") {
        const idJogo = req.body.idJogo;        
        
        const novoTitulo = req.body.newNome;

        const verificarTitulo = await jogo.findOne({ where: {
            titulo: novoTitulo,
            id: { [Op.ne] : idJogo}
        }});

        if (verificarTitulo){
            const jogos = await jogo.findAll();
            return res.render('../views/pages/configJogo', {
                jogos,
                mensagem: 'Título Já existente',
                usuario: req.session
        });

        }
        const novaCategoria = req.body.newCategoria;
        const novoPreco = req.body.newPreco;
        const novaDescricao = req.body.newDescricao;
        const novaDistribuidora = req.body.newpublisher; 
        const novoDesenvolvedor = req.body.newdeveloper;

        const ImagemURL = await imagekit.upload({
            file: req.file.buffer.toString('base64'),
            fileName: `${Date.now()}-${req.file.originalname}`,
            folder: '/capasJogos'
        });

            
        await editarJogo(idJogo,novoTitulo,novoPreco,novaDistribuidora,novaCategoria,novaDescricao,novoDesenvolvedor,ImagemURL.url);

        return res.redirect('/');
        }

    if (acao === "excluir") {

        const idJogoExcluir = req.body.idJogoExcluir;
        await excluirJogo(idJogoExcluir);

        return res.redirect('/');
    }


}


module.exports = {
    paginaConfigJogo,
    alterarJogo
};