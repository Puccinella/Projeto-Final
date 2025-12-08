const path = require('path');
const { jogo } = require('../models/jogo.cjs');
const { Op } = require('sequelize');
const { Usuario } = require('../models/usuario.cjs');
const { pedido } = require('../models/pedido.cjs');
const { itemPedido } = require('../models/itemPedido.cjs');
const { jogosComprados } = require('../controllers/controllerBiblioteca');

const paginaInicio = async (req, res) => {
    const jogos = await jogo.findAll();
    res.render('../views/pages/inicio', {
        usuario: req.session,
        jogos
    });
};

const filtrarPorCategoria = async (req, res) => {
    const categoria = req.params.nomeCategoria;

    const jogos = await jogo.findAll({
        where: {
            categoria: {
                [Op.like]: `%${categoria}%` 
            }
        }
    });

    res.render('../views/pages/inicio', {
        usuario: req.session,
        jogos
    });
};


async function adicionarItemAoCarrinho(req, res) {
    const jogo_id = req.body.idJogo; 
    const preco_unitario = Number(req.body.PrecoJogo);
    const usuario_id = req.session.idUsuario;
    const usuario = await Usuario.findByPk(usuario_id);


    if (usuario.tipoUsuario === "administrador") {
        console.log("Administrador não pode comprar jogos");
        return res.redirect('/');
    };

    
    const pedidos = await pedido.findAll({
        where: {
            comprador_id: usuario_id,
            situacao: "finalizado"
        },
        include: [{
            model: itemPedido,
            include: [{
                model: jogo
            }]
        }]
    });

    const jogosComprados = [];

    pedidos.forEach(p => {
        p.ItemPedidos.forEach(item => {
            jogosComprados.push(item.Jogo);
        });
    });


    const verificador = 

    let pedidoAtual = await pedido.findOne({
        where: { comprador_id: usuario_id, situacao: "pendente" }
    });
    if (!pedidoAtual) {
        pedidoAtual = await pedido.create({
            comprador_id: usuario.id,
            preco_total: 0,
            situacao: "pendente"
        });
    };



    await itemPedido.create({
        pedido_id: pedidoAtual.id,
        jogo_id: jogo_id,
        preco_unitario: preco_unitario
    });

    const listaItens = await itemPedido.findAll({
        where: {pedido_id: pedidoAtual.id}
    });



    const precoTotal = listaItens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco_unitario, 0);
    pedidoAtual.preco_total = precoTotal;
    await pedidoAtual.save();
    return res.redirect('/carrinho');
};


module.exports = {
    paginaInicio,
    filtrarPorCategoria,
    adicionarItemAoCarrinho
};