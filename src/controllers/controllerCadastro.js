const path = require('path');
const { Usuario, criarUsuario } = require('../models/usuario.cjs');


const paginaCadastro = (req, res) => {
    res.render('pages/cadastro', {
        mensagens: {},
        nome: null,
        telefone: null,
        email: null,
    });
};

const cadastro = async (req, res) => {
    const nome = req.body.username;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const senha = req.body.password;
    const repetirSenha = req.body.repeatpassword;

    const mensagens ={
        mensagemEmail: null,
        mensagemNome: null,
        mensagemTelefone: null,
        mensagemSenha: null
    }

    const Verificaremail = await Usuario.findOne({where: {email}});
    if (Verificaremail){
        mensagens.mensagemEmail = "Email já existente";
    }

    const VerificarNome = await Usuario.findOne({where: {nome}});
    if (VerificarNome){
        mensagens.mensagemNome = "Nome de usuário já existente";
    }

    const verificarTelefone = await Usuario.findOne({where: {telefone}});
    if (verificarTelefone){
        mensagens.mensagemTelefone = "Telefone já existente";
    }

    if (senha !== repetirSenha){
        mensagens.mensagemSenha = "As senhas não são iguais";
    }
    
    if (mensagens.mensagemEmail || mensagens.mensagemNome || mensagens.mensagemTelefone || mensagens.mensagemSenha){
        return res.render('pages/cadastro', {
            mensagens,
            nome, 
            telefone,
            email,
            senha,
        });
    }

    const tipoUsuario = 'cliente';

    await criarUsuario(nome, telefone, email, senha, tipoUsuario);

    console.log(nome, telefone, email, senha, tipoUsuario);
    res.redirect('/entrar');

};

module.exports = {
    paginaCadastro,
    cadastro
};

