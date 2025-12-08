const path = require('path');
const Pedido = require('../models/pedido.cjs');
const { Usuario } = require('../models/usuario.cjs');
const {jogo: Jogo} = require('../models/jogo.cjs');
const itemPedido = require('../models/itemPedido.cjs');
const pedido = require('../models/pedido.cjs');

const paginaCarrinho = (req, res) => {
    res.render('../views/pages/carrinho');
};


async function adicionarItem(req, res) {
    const {jogo_id, preco_unitario} = req.body;
    const usuario_id = req.session.idUsuario;
    const usuario = await Usuario.findByPk(usuario_id);

    if (usuario.tipoUsuario === "administrador") {
        console.log("Administrador não pode comprar jogos");
        return res.redirect('/');
    } else {
        const pedido = await Pedido.findOne({
            where: { comprador_id: usuario_id, situacao: "pendente" }
        });
        if (!pedido) {
            pedido = await Pedido.create({
                comprador_id: usuario,
                preco_total: 0,
                situacao: "pendente"
            });
        };
    };

    const item = await itemPedido.create({
        pedido_id: pedido.id,
        jogo_id: jogo_id,
        preco_unitario: preco_unitario
    });

    const listaItens = await itemPedido.findAll({
        where: {pedido_id: pedido.id}
    });

    const precoTotal = listaItens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco_unitario, 0);
    pedido.preco_total = precoTotal;
    await pedido.save();
};

async function removerItem(req, res) {
    const {item_id} = req.params;
    const item = await itemPedido.findByPk(item_id);
    item.destroy();
    const precoTotal = listaItens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco_unitario, 0);
    pedido.preco_total = precoTotal;
    await pedido.save();
};


module.exports = {
    paginaCarrinho
};