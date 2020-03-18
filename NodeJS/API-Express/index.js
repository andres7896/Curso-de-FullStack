const express = require('express'); //Requerimos a express en nuesto proyecto

const app = express(); //Convertimos en un objeto

app.use('/', (req, res) =>{
    res.send('Hola Andrés');
}).listen(4200);

