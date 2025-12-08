const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const pedido = sql.define("Pedidos",{
    comprador_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    preco_total: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    situacao: {
        type: DataTypes.STRING,
        defaultValue: "pendente",
    }
})


module.exports = {
    pedido,
    cadastrarPedido,
}
