const path = require('path');
const Usuario = require('../models/usuario.cjs');

const paginaCadastro = (req, res) => {
    res.render('pages/cadastro');
};

const cadastro = (req, res) => {
    const nome = req.body.username;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const senha = req.body.password;

    Usuario.criarUsuario(nome, telefone, email, senha);

    res.send("Usuario cadastrado");
    console.log(nome, telefone, email, senha);
    res.resdirect('/entrar');
}


module.exports = {
    paginaCadastro,
    cadastro
};

