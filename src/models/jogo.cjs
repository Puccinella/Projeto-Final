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
    },
    desenvolvedor: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

async function cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor) {
    return jogo.create({
        titulo: titulo,
        preco: preco,
        distribuidora: distribuidora,
        categoria: categoria,
        descricao: descricao,
        desenvolvedor: desenvolvedor
    });
}

async function excluirJogo(id) {
    return jogo.destroy({
        where: { id: id}
    })
};

module.exports = {
    jogo,
    cadastrarJogo,
}
