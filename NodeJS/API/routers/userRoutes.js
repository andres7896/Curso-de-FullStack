const express = require('express');
const UserController = require('../controllers/UserController'); //Requierimos el controlador
const api = express.Router();
let multipar = require('connect-multiparty'); //npm install connect-party --save
let imageDir = multipar( { uploadDir: './assets/images' } )
/** 
 * POST: Para insertar datos.
 * GET: Obtener datos.
 * PUT: Modificar infomación.
 * DELETE: Eliminar información.
*/

api.get('/saludo', (req, res) => {
    console.log('Primera ruta con Express');
});

api.post('/createUser', UserController.create);
api.put('/updateUser/:id', UserController.update);
api.post('/loginUser', UserController.login);
api.put('/saveImage/:id', imageDir, UserController.saveImage);
api.get('/showImage/:image', UserController.showImage);
api.put('/changePassword/:id', UserController.changePassword);

module.exports = api;