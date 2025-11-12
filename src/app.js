const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routesInicial = require('./routes/routeInicial');
const routeCadastro = require('./routes/routeCadastro');
const routeConfigConta = require('./routes/routeConfigConta');
const routeCadastroJogos = require('./routes/routeCadastroJogos');
const routeCarrinho = require('./routes/routeCarrinho');
const routePagamento = require('./routes/routePagamento');

app.use('/', routesInicial);
app.use('/', routeCadastro);
app.use('/', routeConfigConta);
app.use('/', routeCadastroJogos);
app.use('/', routeCarrinho);
app.use('/', routePagamento);

module.exports = { app };