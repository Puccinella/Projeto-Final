const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const pedido = sql.define("Pedidos",{
    comprador_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        refences: {
            model: 'Usuários',
            key: 'id'
        }
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
        comprador: 'Pedro',
        preco_total: 259.98,
        qtd_produtos: 2,
        produtos: 'GTA V, The Witcher 3',
        data_compra: new Date(2025, 5, 15)
    });
}).then(novopedido => {
    console.log('pedido criado com sucesso');
}).catch(erro => {
    console.error('Erro:', erro);
});

module.exports = pedido;