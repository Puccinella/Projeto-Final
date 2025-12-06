const { Sequelize, DataTypes, where } = require('sequelize');
const sql = require('../config/db.cjs');
const bcrypt = require('bcrypt');

sql.sync({ force: false }) 
  .then(() => console.log('Tabelas sincronizadas!'))
  .catch(err => console.error(err));

const Usuario = sql.define("Usuarios",{
    nome: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
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
    tipoUsuario: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    },
    {
    tableName: 'Usuarios'
});

async function criarUsuario(nome, telefone, email, senha, tipoUsuario) {
    const senhacriptografada = await bcrypt.hash(senha, 10);;
    return Usuario.create({
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senhacriptografada,
        tipoUsuario: tipoUsuario
    }) 
}

async function editarUsuario(idUsuario ,novoNome, novoTelefone, novoEmail, novaSenha) {
    const id = idUsuario;
    const novasenhacriptografada = await bcrypt.hash(novaSenha, 10);
    const verificador_telefone = await Usuario.findAll({
        where: {telefone: novoTelefone}
    });
    const verificador_email = await Usuario.findAll({
        where: {email: novoEmail}
    })

    if(verificador_telefone.length > 0 || verificador_email.length > 0){
        console.log("Email e/ou telefone já existentes!")
    }
    else {
        return Usuario.update({
            nome: novoNome,
            email: novoEmail,
            telefone: novoTelefone,
            senha: novasenhacriptografada,
        },
        {
            where: {id: id}
        }
        )
        
    }
};

function deletarUsuario(id) {
    return Usuario.destroy({
        where: {id: id}
    })
}

async function procurarAdmin(adminEmail) {
    const administrador = await Usuario.findOne({
        where: {email: adminEmail}
    });
    if (!administrador) {
        await criarUsuario('Admin Pedro','1201234567', 'pedro@email.com', 'pedro123', 'administrador');
    };
}

procurarAdmin('pedro@email.com');


module.exports = {
    Usuario,
    criarUsuario,
    editarUsuario,
    deletarUsuario
};
