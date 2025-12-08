const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const itemPedido = sql.define("ItemPedido", {
    pedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jogoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = itemPedido;