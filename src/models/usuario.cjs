const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

sql.sync({ force: false }) 
  .then(() => console.log('Tabelas sincronizadas!'))
  .catch(err => console.error(err));



const Usuario = sql.define("Usuario",{
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
    },
    tableName: 'usuarios'
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

module.exports = Usuario; 
