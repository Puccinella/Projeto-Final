const path = require('path');
const { jogo, editarJogo, excluirJogo } = require('../models/jogo.cjs')

const paginaConfigJogo = async (req, res) => {
    const jogos = await jogo.findAll();
    res.render('../views/pages/configJogo', {
        jogos
    });
};



const alterarJogo = async (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar") {
        const novoTitulo = req.body.newTitle;
        const novoPreco = req.body.newPrice;
        const novaDistribuidora = req.body.newPublisher;
        const novaCategoria = req.body.newCategory;
        const novaDescricao = req.body.newDescription;
        const novoDesenvolvedor = req.body.newDeveloper;

        await editarJogo(novoTitulo, novoPreco, novaDistribuidora, novaCategoria, novaDescricao, novoDesenvolvedor);

    }
    if (acao === "excluir") {
        const idJogo = req.session.idJogo;
        await excluirJogo(idJogo);
        res.redirect('/')
    }
}


module.exports = {
    paginaConfigJogo
};