const express = require('express');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/demaisRoutes');
const routesInicial = require('./routes/routeInicial');

app.use('/', routesInicial);
app.use('/tasks', routes);

module.exports = {app, path};  