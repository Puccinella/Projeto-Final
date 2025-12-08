const { Sequelize, DataTypes } = require('sequelize');
const sql = require('../config/db.cjs');

sql.sync({ force: false }) 
  .then( async () => {
    console.log('Tabelas sincronizadas!');

    await cadastrarJogo('Minecraft', 99.90, 'Mojang', 'Sobrevivência', 'Jogo 3D em um mundo quadrado', 'Mojang Studios', 'https://ik.imagekit.io/pp8w8qiza/capasJogos/imgMinecraft.jpg' );

    await cadastrarJogo('Gta V', 100, 'Rockstar', 'Ação / Aventura', 'TA V se passa em um mundo aberto — o fictício estado de San Andreas, incluindo a cidade de Los Santos e seus arredores.', 'Rockstar Games', 'https://ik.imagekit.io/pp8w8qiza/capasJogos/gtaV.jpg');
  })

  .catch(err => console.error(err));

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
        type: DataTypes.STRING,
        allowNull: true
    },
    imagemURL: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

async function cadastrarJogo(titulo, preco, distribuidora, categoria, descricao, desenvolvedor, imagemURL) {
    return jogo.create({
        titulo: titulo,
        preco: preco,
        distribuidora: distribuidora,
        categoria: categoria,
        descricao: descricao,
        desenvolvedor: desenvolvedor,
        imagemURL: imagemURL
    });
};

async function editarJogo(idJogo, newTitle, newPrice, newPublisher, newCategory, newDescription, newDeveloper, imagemURL) {
    return jogo.update({
        titulo: newTitle,
        preco: newPrice,
        distribuidora: newPublisher,
        categoria: newCategory,
        descricao: newDescription,
        desenvolvedor: newDeveloper,
        imagemURL: imagemURL
    },
    {
    where: {id: id}
    })
};


async function excluirJogo(id) {
    return jogo.destroy({
        where: { id: id}
    })
};


module.exports = {
    jogo,
    cadastrarJogo,
    editarJogo,
    excluirJogo
}
