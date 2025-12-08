const path = require('path');
const { Usuario, editarUsuario, deletarUsuario }= require('../models/usuario.cjs');
const { Op } = require('sequelize')

const paginaConfigConta = (req, res) => {
    res.render('pages/configConta.ejs', {
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
        const repetirnovaSenha = req.body.repeatnewPassword;

        const mensagens ={
            mensagemEmail: null,
            mensagemNome: null,
            mensagemTelefone: null,
            mensagemSenha: null
        }

        const Verificaremail = await Usuario.findOne({where: {
            email: novoEmail,
            id: { [Op.ne]: req.session.idUsuario },
        } });
        if (Verificaremail){
            mensagens.mensagemEmail = "Email já existente";
        }

        const VerificarNome = await Usuario.findOne({where: {
            nome: novoNome,
            id: { [Op.ne]: req.session.idUsuario },
        } });
        if (VerificarNome){
            mensagens.mensagemNome = "Nome de usuário já existente";
        }

        const verificarTelefone = await Usuario.findOne({where: {
            telefone: novoTelefone,
            id: { [Op.ne]: req.session.idUsuario },
        } });
        if (verificarTelefone){
            mensagens.mensagemTelefone = "Telefone já existente";
        }

        if (novaSenha !== repetirnovaSenha){
            mensagens.mensagemSenha = "As senhas não são iguais";
        }
        if (mensagens.mensagemEmail || mensagens.mensagemNome || mensagens.mensagemTelefone || mensagens.mensagemSenha){
            return res.render('pages/configConta', {
                usuario: req.session,
                mensagens,
                novoNome,
                novoTelefone,
                novoEmail,
        });
        }
    
        const idUsuario = req.session.idUsuario;

        await editarUsuario(idUsuario, novoNome, novoTelefone, novoEmail, novaSenha);
        req.session.nome = novoNome;
        req.session.email = novoEmail;
        req.session.telefone = novoTelefone;
        res.redirect('/');
    }
    else if (acao === "excluir"){
        const idUsuario = req.session.idUsuario;
        await deletarUsuario(idUsuario);
        req.session.destroy();
        res.redirect('/cadastro');
    }
};

module.exports = {
    paginaConfigConta,
    alterarCadastro
};