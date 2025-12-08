const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const itemPedido = sql.define("ItemPedido", {
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jogo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = {
    itemPedido
};