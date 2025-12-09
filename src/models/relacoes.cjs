const { jogo: Jogo } = require("./jogo.cjs");
const { pedido: Pedido } = require("./pedido.cjs");
const { Usuario } = require("./usuario.cjs");
const { itemPedido } = require("./itemPedido.cjs");

function relacionarModels() {

    Usuario.hasMany(Pedido, { foreignKey: 'comprador_id' });
    Pedido.belongsTo(Usuario, { foreignKey: 'comprador_id' });

    Pedido.hasMany(itemPedido, { foreignKey: 'pedido_id' });
    itemPedido.belongsTo(Pedido, { foreignKey: 'pedido_id' });

    Jogo.hasMany(itemPedido, { foreignKey: 'jogo_id' });
    itemPedido.belongsTo(Jogo, { foreignKey: 'jogo_id' });
};

module.exports = relacionarModels;