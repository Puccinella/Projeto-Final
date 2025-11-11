const paginaCadastro = (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'))
};

module.exports = {
   paginaCadastro
};