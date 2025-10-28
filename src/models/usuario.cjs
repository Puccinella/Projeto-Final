const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

const usuario = sql.define("Usuários",{
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
});


usuario.sync().then(() => {
    console.log('Tabela Usuários criada com sucesso!');
    return usuario.create({
        nome: 'Pedro',
        email: 'pedro@email.com',
        senha: 'pedro123',
        telefone: '1201234567'
    });
}).then(novoUsuario => {
    console.log('Usuário criado com sucesso');
}).catch(erro => {
    console.error('Erro:', erro);
});

module.exports = usuario;