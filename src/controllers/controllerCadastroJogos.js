const path = require('path');

const paginaCadastroJogos = (req, res) => {
    res.render('../views/pages/cadastroJogos');
};

module.exports = {
    paginaCadastroJogos
};