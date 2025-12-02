const path = require('path');
const jogo = require('../models/jogo.cjs');

const paginaConfigJogo = (req, res) => {
    res.render('../views/pages/configJogo');
};



const alterarJogo = (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar") {
        const novoTitulo = req.body.newTitle;
        const novoPreco = req.body.newPrice;
        const novaDistribuidora = req.body.newPublisher;
        const novaCategoria = req.body.newCategory;
        const novaDescricao = req.body.newDescription;
        const novoDesenvolvedor = req.body.newDeveloper;

        jogo.alterarJogo(novoTitulo, novoPreco, novaDistribuidora, novaCategoria, novaDescricao, novoDesenvolvedor);

    }
    if (acao === "excluir") {
        const idJogo = req.session.idJogo;
        jogo.excluirJogo(idJogo);
        res.redirect('/')
    }
}


module.exports = {
    paginaConfigJogo
};