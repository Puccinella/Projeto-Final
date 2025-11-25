const usuario = require('./usuario.cjs');
const jogo = require('./jogo.cjs');
const pedido = require('./pedido.cjs');

usuario.hasOne(pedido, { foreignKey: 'comprador_id' });
pedido.belongsTo(usuario, { foreignKey: 'comprador_id' });


usuario.hasMany(jogo, { foreignKey: 'desenvolvedor' });
jogo.belongsTo(usuario, { foreignKey: 'desenvolvedor' });

jogo.belongsTo(usuario, { foreignKey: 'desenvolvedor' });

module.exports = { usuario, pedido, jogo };