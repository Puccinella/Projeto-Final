const path = require('path');
const Usuario = require('../models/usuario.cjs');

const paginaConfigConta = (req, res) => {
    res.render('../views/pages/configConta');
};

const alterarCadastro = (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar"){
        const novoNome = req.body.newName;
        const novoEmail = req.body.newEmail;
        const novoTelefone = req.body.newPhone;
        const novaSenha = req.body.newPassword;

        const idUsuario = req.session.idUsuario;

        Usuario.editarUsuario(idUsuario, novoNome, novoEmail, novoTelefone, novaSenha);
        res.redirect('/')
    }
    if (acao === "excluir"){
        const idUsuario = req.session.idUsuario;
        Usuario.deletarUsuario(idUsuario);
        res.redirect('/cadastro')
    }
    

}

module.exports = {
    paginaConfigConta,
    alterarCadastro
};