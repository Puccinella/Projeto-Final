const express = require('express');
const path = require('path');
const session = require("express-session");
const app = express();
const multer = require('multer');
const ImageKit = require('imagekit');
const upload = multer({ dest: 'uploads/' });


app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "chave-super-secreta",
    resave: false,
    saveUninitialized: false
}));

app.post('/upload-file', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully')
})

const routesInicial = require('./routes/routeInicial');
const routeCadastro = require('./routes/routeCadastro');
const routeConfigConta = require('./routes/routeConfigConta');
const routeCadastroJogos = require('./routes/routeCadastroJogos');
const routeCarrinho = require('./routes/routeCarrinho');
const routePagamento = require('./routes/routePagamento');
const routeEntrar = require("./routes/routeEntrar");

app.use('/', routesInicial);
app.use('/', routeCadastro);
app.use('/', routeConfigConta);
app.use('/', routeCadastroJogos);
app.use('/', routeCarrinho);
app.use('/', routePagamento);
app.use('/', routeEntrar);

module.exports = { app };