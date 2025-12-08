const path = require('path');
const Pedido = require('../models/pedido.cjs');
const { Usuario } = require('../models/usuario.cjs');

const paginaPagamento = (req, res) => {
    res.render('../views/pages/pagamento');
};

async function realizarPagamento(req, res) {
    const {pedido_id} = req.params;
    const usuario_id = req.session.idUsuario;

    const pedido = await Pedido.findByPk(pedido_id);
    pedido.situacao = "finalizado";
    await pedido.save();

    console.log("Pagamento realizado com sucesso! - Pedido Finalizado");
    return res.redirect('/biblioteca');
}



module.exports = {
    paginaPagamento
}