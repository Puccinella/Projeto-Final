const path = require('path');

const paginaCadastro = (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/', 'cadastro.ejs'))
};

module.exports = {
    paginaCadastro
};