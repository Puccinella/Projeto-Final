const paginaCadastro = (req, res) => {
    res.sendFile(path.join(__dirname, 'views/pages/', 'index.ejs'))
};

module.exports = {
   paginaCadastro
};