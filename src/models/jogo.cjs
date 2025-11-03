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
        allowNull: true,
        references: {
            model: 'Usuarios',
            key: 'id'
        }
    }
});
jogo.sync().then(() => {
    console.log('Tabela Jogos criada com sucesso!');
    return jogo.create({
        titulo: 'GTA V',
        preco: 129.99,
        distribuidora: 'Rockstar Games',
        categoria: 'Ação/Aventura',
        descricao: 'Explore a vasta cidade de Los Santos e embarque em missões emocionantes neste jogo de mundo aberto.'
    });
}).then(novoJogo => {
    console.log('Jogo criado com sucesso');
}).catch(erro => {
    console.error('Erro:', erro);
});

function cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor) {
    return jogo.create({
        titulo: titulo,
        preco: preco,
        distribuidora: distribuidora,
        categoria: categoria,
        descricao: descricao,
        desenvolvedor: desenvolvedor
    });
}


module.exports = jogo;
