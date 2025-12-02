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
pedido.sync().then(() => {
    console.log('Tabela Pedidos criada com sucesso!');
    return pedido.create({
        comprador_id: 1,
        preco_total: 259.98,
        qtd_produtos: 2,
        produtos: 'GTA V, The Witcher 3',
        data_compra: new Date(2025, 5, 15)
    });
}).then(novoPedido => {
    console.log('pedido criado com sucesso');
}).catch(erro => {
    console.error('Erro:', erro);
});

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
