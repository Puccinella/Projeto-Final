const path = require('path');
const Usuario = require('../models/usuario.cjs');

const paginaConfigConta = (req, res) => {
    res.render('pages/configConta', {
        usuario: req.session
    });
};

const alterarCadastro = async (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar"){
        const novoNome = req.body.newName;
        const novoEmail = req.body.newEmail;
        const novoTelefone = req.body.newPhone;
        const novaSenha = req.body.newPassword;

        const idUsuario = req.session.idUsuario;

        Usuario.editarUsuario(idUsuario, novoNome, novoTelefone, novoEmail, novaSenha);
        req.session.nome = novoNome;
        req.session.email = novoEmail;
        req.session.telefone = novoTelefone;
        res.redirect('/');
    }
    else if (acao === "excluir"){
        const idUsuario = req.session.idUsuario;
        Usuario.deletarUsuario(idUsuario);
        req.session.destroy();
        res.redirect('/cadastro');
    }
};

module.exports = {
    paginaConfigConta,
    alterarCadastro
};