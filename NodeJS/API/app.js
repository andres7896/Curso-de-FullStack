const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/userRoutes');

const app = express();
app.use(bodyParser.json()); //Analiza los datos que se pasan por una URL

app.use( (req, res, next) => {
    res.header('Access-Control-All-Origin', '*'); //Configuracion todos los dominios

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Content-Type, Accept, Access-Control-Allow-Request-Method'); //Permite todos los metadatos y cookies

    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); //Habilita todos los metodos de http.

    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS'); //Confirmación de los metodos http

    next();
} )

app.use('/api', routers);

module.exports = app;
