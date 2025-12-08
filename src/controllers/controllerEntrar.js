const path = require("path");
const { Usuario } = require("../models/usuario.cjs");
const bcrypt = require("bcrypt");

const paginaEntrar = (req, res) => {
    res.render('pages/entrar');
};

const login = async (req, res) => {
    try {
        const email = req.body.email;
        const senha = req.body.password;

        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            console.log("Email inválido");
            return res.redirect('/entrar');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            console.log("Senha inválida");
            return res.redirect('/entrar');
        }

        req.session.idUsuario = usuario.id;
        req.session.nome = usuario.nome;
        req.session.email = usuario.email;
        req.session.telefone = usuario.telefone;
        req.session.tipoUsuario = usuario.tipoUsuario;

        console.log(req.session.idUsuario, req.session.nome, req.session.email, req.session.telefone, req.session.tipoUsuario);
        
        return res.redirect('/');
    } catch (err) {
        console.error('Erro no login:', err);
        return res.status(500).send('Erro no servidor');
    }
};

module.exports = {
    paginaEntrar,
    login
};