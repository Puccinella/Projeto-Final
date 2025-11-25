const path = require('path');
const Usuario = require('../models/usuario.cjs');
const { where } = require('sequelize');

const paginaConfigConta = (req, res) => {
    res.render('../views/pages/configConta');
};

const alterarCadastro = (req, res) => {
    const novoNome = req.body.newName;
    const novoEmail = req.body.newEmail;
    const novoTelefone = req.body.newPhone;
    const novaSenha = req.body.newPassword;

    const idUsuario = req.session.idUsuario;

    Usuario.editarUsuario(idUsuario, novoNome, novoEmail, novoTelefone, novaSenha);
    res.redirect('/')
}

module.exports = {
    paginaConfigConta,
    alterarCadastro
};