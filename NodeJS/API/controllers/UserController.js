const User = require('../models/User'); //Exportamos el modelo.
const crypto = require('crypto');

/**
 * Función paraun usuario
 * @param {*} req : Lo que viene por la URL
 * @param {*} res : Respuesta que nos retorna
 */

function encriptacion(pass) {
    let algorithm = 'aes-256-cbc';
    let key = crypto.createCipher(algorithm, pass);
    let encriptedPass = key.update(pass, 'utf8', 'hex');
    encriptedPass += key.final('hex');

    return encriptedPass;
}

function create(req, res) {
    var user = new User(); //Nueva instancia del modelo user
    var params = req.body;

    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.password = encriptacion(params.password)



    user.save( (error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: 'Error en el servidor'
            })
        }else{
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: 'Error al crear el usuario'
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: 'Usuario creado correctamente'
                })
            }
        }
    })
}

function update(req, res) {
    var parameters = req.body;
    var id = req.params.id;
    let password = parameters.password;

    if (password != undefined && password != null) {
        parameters.password = encriptacion(password);
    }

    User.findByIdAndUpdate(id, parameters, (error, userUpdated) =>{
        if (error) {
            res.status(500).send({
                message: 'Error en el servidor',
                statusCode: 500
            })
        }else{
            if (!userUpdated) {
                res.status(400).send({
                    message: 'Error al actualizar el usuario',
                    statusCode: 400
                })
            }else{
                res.status(200).send({
                    message: 'Mensaje Actualizado',
                    statusCode: 200
                })
            }
        }
    })
}

function login(req, res) {
    let params = req.body;

    User.findOne({ email: params.email }, (error, userLogged) => {
        if (error) {
            res.status(500).send({
                message: 'Error en el servidor',
                statusCode: 500
            })
        }else{
            if (!userLogged) {
                res.status(400).send({
                    message: 'E usuario no existe',
                    statusCode: 400
                })
            }else{
                let password = encriptacion(params.password);
                if (password === userLogged.password) {
                    res.status(200).send({
                        message: 'Los datos son correctos',
                        statusCode: 200
                    })
                }else{
                    res.status(401).send({
                        message: 'Los datos no son correctos',
                        statusCode: 401
                    })
                }
            }
        }
    })
}


module.exports = {
    create, 
    update,
    login
}