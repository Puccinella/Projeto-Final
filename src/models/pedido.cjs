const db = require("../config/db.cjs")

const pedido = db.sequelize.define("Pedidos",{
    comprador: {
        type: db.Sequelize.STRING,
        allowNull: true,
    },
    preco_total: {
        type: db.Sequelize.FLOAT,
        allowNull: true,
    },
    qtd_produtos: {
        type: db.Sequelize.INT,
        allowNull: true,
        unique: true
    },
    produtos: {
        type: db.Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    data_compra: {
        type: db.Sequelize.DATE,
        allowNull: true,
    }
})

module.exports = pedido;