const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const jogo = sql.define("Jogos",{
    titulo: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    distribuidora: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = jogo;
