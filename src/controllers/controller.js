const paginaInicio = (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'inicio.html'))
};


module.exports = {
    paginaInicio
};