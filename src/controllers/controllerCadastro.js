const path = require('path');

const paginaCadastro = (req, res) => {
    res.render('../views/pages/cadastro');
};

module.exports = {
    paginaCadastro
};