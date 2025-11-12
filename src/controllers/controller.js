const path = require('path');

const paginaInicio = (req, res) => {
    res.render('../views/pages/inicio');
};

module.exports = {
    paginaInicio
};