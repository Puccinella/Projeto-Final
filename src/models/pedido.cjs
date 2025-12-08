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
    qtd_produtos: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    produtos: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: true,
    }

})


function cadastrarPedido(comprador_id, preco_total, qtd_produtos, produtos, data_compra) {
    return pedido.create({
        comprador_id: comprador_id,
        preco_total: preco_total,
        qtd_produtos: qtd_produtos,
        produtos: produtos,
        data_compra: data_compra
    });
}


module.exports = {
    pedido,
    cadastrarPedido,
}
