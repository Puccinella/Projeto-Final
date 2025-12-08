const path = require('path');
const { Usuario } = require('../models/usuario.cjs');
const {jogo: Jogo} = require('../models/jogo.cjs');
const { itemPedido } = require('../models/itemPedido.cjs');
const {pedido} = require('../models/pedido.cjs');
const { adicionarItemAoCarrinho } = require('../controllers/controllerInicio');
const { findSourceMap } = require('module');


const paginaCarrinho = async (req, res) => {
    const oPedido = await pedido.findOne({
        where:  { comprador_id: req.session.idUsuario, situacao: "pendente" },
        include: [{
            model: itemPedido,
            include: [Jogo]
        }]
    });

    let itens = [];
    if(oPedido) { itens = oPedido.ItemPedidos };

    console.log("oPedido:", oPedido);
    console.log("itens:", itens);

    res.render('../views/pages/carrinho', {
        usuario: req.session,
        itens,
        precoTotal: oPedido ? oPedido.preco_total : 0,
        pedidoId: oPedido ? oPedido.id : null
    });
};


async function realizarPagamento(req, res) {
    const {pedidoId} = req.params;
    const oPedido = await pedido.findByPk(pedidoId, {
    include: [{
        model: itemPedido,
        include: [Jogo]
    }]
    }); 
    oPedido.situacao = "finalizado";
    await oPedido.save();

    console.log("Pagamento realizado com sucesso! - Pedido Finalizado");
    return res.redirect('/biblioteca');
};


async function removerItem(req, res) {
    const {itemId} = req.params;
    const item = await itemPedido.findByPk(itemId);
    await item.destroy();
    const pedidoId = item.pedido_id;

    const listaItens = await itemPedido.findAll({
        where: {pedido_id: pedidoId}
    });
    const precoTotal = listaItens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco_unitario, 0);

    const oPedido = await pedido.findByPk(pedidoId, {
    include: [{
        model: itemPedido,
        include: [Jogo]
    }]
    });

    oPedido.preco_total = precoTotal;
    await oPedido.save();

    let itens = [];
    if(oPedido) { itens = oPedido.ItemPedidos };

    return res.render('../views/pages/carrinho', {
        usuario: req.session,
        itens,
        precoTotal: oPedido ? oPedido.preco_total : 0,
        pedidoId: oPedido ? oPedido.id : null
    });
};


module.exports = {
    paginaCarrinho,
    realizarPagamento,
    removerItem
};