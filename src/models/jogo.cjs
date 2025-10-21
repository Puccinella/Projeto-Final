const db = require("../config/db.cjs")

const jogo = db.sequelize.define("Jogos",{
    titulo: {
        type: db.sequelize.STRING,
        allowNull: true,
        unique: true
    },
    preco: {
        type: db.sequelize.FLOAT,
        allowNull: true
    },
    distribuidora: {
        type: db.sequelize.STRING,
        allowNull: true,
    },
    categoria: {
        type: db.sequelize.STRING,
        allowNull: true,
    },
    descricao: {
        type: db.sequelize.TEXT,
        allowNull: true
    }
})

module.exports = jogo;