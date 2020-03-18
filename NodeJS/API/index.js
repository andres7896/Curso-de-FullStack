const mongoose = require('mongoose');  //Requerimos moongose.
const app = require('./app');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/bictiaMusic', 
{useNewUrlParser: true, useUnifiedTopology: true}, 
(error, res) => {
    if (error) {
        console.log('Error de conexión', error);
    }else{
        console.log('Nos conectamos correctamente');
        app.listen(port, () =>{
            console.log('Escuchando en el puerto: ', port);
        });
    }
});