const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); //Libreria que permite confiurar las cabeceras - npm install cors --save
const routes = require('./routes/studentRoutes');

const app = express();

app.use(bodyParser.json());

//Configura las cabeceras
app.use( cors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE'
}) );

app.use('/api', routes);

module.exports = app;