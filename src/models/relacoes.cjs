const usuario = require('./usuario.cjs');
const pedido = require('./pedido.cjs');
const jogo = require('./jogo.cjs');

usuario.hasOne(pedido, { foreignKey: 'comprador_id' });
pedido.belongsTo(usuario, { foreignKey: 'comprador_id' });


usuario.hasMany(jogo, { foreignKey: 'desenvolvedor' });
jogo.belongsTo(usuario, { foreignKey: 'desenvolvedor' });


usuario.findOne({ where: { nome: 'Pedro' } })
  .then(usuarioEncontrado => {
    if (!usuarioEncontrado) throw new Error('Usuário não encontrado');

    return pedido.create({
      comprador_id: usuarioEncontrado.id,
      preco_total: 259.98,
      qtd_produtos: 2,
      produtos: 'GTA V, The Witcher 3',
      data_compra: new Date(2025, 5, 15)
    });
  })
  .then(() => console.log('Pedido criado com sucesso!'))
  .catch(err => console.error('Erro:', err));



  usuario.hasMany(jogo, {
    foreignKey: 'desenvolvedor',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});



jogo.belongsTo(usuario, {
    foreignKey: 'desenvolvedor'
});

module.exports = { usuario, pedido, jogo };