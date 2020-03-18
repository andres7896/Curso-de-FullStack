const express = require('express');
const UserController = require('../controllers/UserController'); //Requierimos el controlador
const api = express.Router();

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

module.exports = api;