const Jogo = require("./jogo.cjs");
const Pedido = require("./pedido.cjs");
const Usuario = require("./usuario.cjs");
const itemPedido = require("./itemPedido.cjs");

function relacionarModels() {
    // Usuario 1:N Pedido
    Usuario.hasMany(Pedido, { foreignKey: 'comprador_id' });
    Pedido.belongsTo(Usuario, { foreignKey: 'comprador_id' });

    // Pedido 1:N PedidoItem
    Pedido.hasMany(PedidoItem, { foreignKey: 'pedido_id' });
    PedidoItem.belongsTo(Pedido, { foreignKey: 'pedido_id' });

    // Jogo 1:N PedidoItem
    Jogo.hasMany(PedidoItem, { foreignKey: 'jogo_id' });
    PedidoItem.belongsTo(Jogo, { foreignKey: 'jogo_id' });
};

module.exports = relacionarModels;