const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers/userRoutes');

const app = express();
app.use(bodyParser.json()); //Analiza los datos que se pasan por una URL

app.use('/api', routers);

module.exports = app;
