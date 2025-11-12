const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/demaisRoutes');
const routesInicial = require('./routes/routeInicial');

app.use('/', routesInicial);
app.use('/tasks', routes);

modle.exports = app;