const path = require('path');
const Usuario = require('../models/usuario.cjs');

const paginaCadastro = (req, res) => {
    res.render('pages/cadastro');
};

const cadastro = (req, res) => {
    const senha = req.body.password;
    const repetirSenha = req.body.repeatpassword;
    if (senha === repetirSenha){
        const nome = req.body.username;
        const telefone = req.body.telefone;
        const email = req.body.email;
        
        const tipoUsuario = 'cliente';

        Usuario.criarUsuario(nome, telefone, email, senha, tipoUsuario);

        console.log(nome, telefone, email, senha, tipoUsuario);
        res.redirect('/entrar');
    }
    else {
        res.send("Senhas não são iguais");
    }
}

module.exports = {
    paginaCadastro,
    cadastro
};

