const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');
const bcrypt = require('bcrypt');

sql.sync({ force: false }) 
  .then(() => console.log('Tabelas sincronizadas!'))
  .catch(err => console.error(err));



const Usuario = sql.define("Usuarios",{
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
    },
    {
    tableName: 'Usuarios'
});


Usuario.sync().then(() => {
    console.log('Tabela Usuários criada com sucesso!');
    return Usuario.create({
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

async function criarUsuario(nome, telefone, email, senha) {
    const senhacriptografada = await bcrypt.hash(senha, 10);
    return Usuario.create({
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senhacriptografada,
    }) 
}

function editarUsuario(req, res) {
    const id = req.session.idUsuario
    return Usuario.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senhacriptografada
    },
    {
        where: {id: id}
    }
    )
}

module.exports = {
    Usuario,
    criarUsuario
};
