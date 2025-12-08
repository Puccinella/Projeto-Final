const express = require('express');
const path = require('path');
const session = require("express-session");
const app = express();
const multer = require('multer');
const ImageKit = require('imagekit');
const upload = multer({ dest: 'uploads/' });
const relacionarModels = require("./models/relacoes.cjs");

relacionarModels();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "chave-super-secreta",
    resave: false,
    saveUninitialized: false
}));

const routesInicial = require('./routes/routeInicial');
const routeCadastro = require('./routes/routeCadastro');
const routeConfigConta = require('./routes/routeConfigConta');
const routeConfigJogo = require('./routes/routeConfigJogo');
const routeCadastroJogos = require('./routes/routeCadastroJogos');
const routeCarrinho = require('./routes/routeCarrinho');
const routePagamento = require('./routes/routePagamento');
const routeEntrar = require("./routes/routeEntrar");
const routeBiblioteca = require("./routes/routeBiblioteca");

app.use('/', routesInicial);
app.use('/', routeCadastro);
app.use('/', routeConfigConta);
app.use('/', routeConfigJogo);
app.use('/', routeCadastroJogos);
app.use('/', routeCarrinho);
app.use('/', routePagamento);
app.use('/', routeEntrar);
app.use('/', routeBiblioteca);

module.exports = { app };