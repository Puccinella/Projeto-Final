const path = require('path');
const { Usuario, editarUsuario, deletarUsuario }= require('../models/usuario.cjs');

const paginaConfigConta = (req, res) => {
    res.render('pages/configConta', {
        usuario: req.session,
        mensagens: {},
        novoNome: null,
        novoTelefone: null,
        novoEmail: null,
    });
};

const alterarCadastro = async (req, res) => {
    const acao = req.body.acao;
    if (acao === "atualizar"){
        const novoNome = req.body.newName;
        const novoEmail = req.body.newEmail;
        const novoTelefone = req.body.newPhone;
        const novaSenha = req.body.newPassword;
        const repetirSenha = req.body.repeatNewPassword;

        const mensagens ={
            mensagemEmail: null,
            mensagemNome: null,
            mensagemTelefone: null,
            mensagemSenha: null
        }

        const Verificaremail = await Usuario.findOne({where: {novoEmail}});
        if (Verificaremail){
            mensagens.mensagemEmail = "Email já existente";
        }

        const VerificarNome = await Usuario.findOne({where: {novoNome}});
        if (VerificarNome){
            mensagens.mensagemNome = "Nome de usuário já existente";
        }

        const verificarTelefone = await Usuario.findOne({where: {novoTelefone}});
        if (verificarTelefone){
            mensagens.mensagemTelefone = "Telefone já existente";
        }

        if (senha !== repetirSenha){
            mensagens.mensagemSenha = "As senhas não são iguais";
        }
        if (mensagens.mensagemEmail || mensagens.mensagemNome || mensagens.mensagemTelefone || mensagens.mensagemSenha){
            return res.render('pages/configConta', {
                mensagens,
                novoNome,
                novoTelefone,
                novoEmail,
        });
        }
    
        const idUsuario = req.session.idUsuario;

        editarUsuario(idUsuario, novoNome, novoTelefone, novoEmail, novaSenha);
        req.session.nome = novoNome;
        req.session.email = novoEmail;
        req.session.telefone = novoTelefone;
        res.redirect('/');
    }
    else if (acao === "excluir"){
        const idUsuario = req.session.idUsuario;
        deletarUsuario(idUsuario);
        req.session.destroy();
        res.redirect('/cadastro');
    }
};

module.exports = {
    paginaConfigConta,
    alterarCadastro
};