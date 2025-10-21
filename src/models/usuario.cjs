const db = require("../config/db.cjs")

const usuario = db.sequelize.define("Usuários",{
    nome: {
        type: db.Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: true,
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: true,
        unique: true
    }
})
