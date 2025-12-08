const { pedido } = require('../models/pedido.cjs');
const { itemPedido } = require('../models/itemPedido.cjs');
const { jogo } = require('../models/jogo.cjs');
const relacoes = require('../models/relacoes.cjs');
relacoes();

const paginaBiblioteca = async (req, res) => {
    const Idusuario = req.session.idUsuario;
    const pedidos = await pedido.findAll({
        where: {
            comprador_id: Idusuario,
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

    res.render('pages/biblioteca', {
        jogos: jogosComprados,
        usuario: req.session
    });
}

module.exports = {
    paginaBiblioteca
};