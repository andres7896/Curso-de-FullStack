const User = require('../models/User'); //Exportamos el modelo.
const crypto = require('crypto'); //npm install crypto --save
const fs = require('fs'); 
const path= require('path'); //npm install path --save

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
            res.send({
                message: 'Error en el servidor',
                statusCode: 500
            })
        }else{
            if (!userUpdated) {
                res.send({
                    message: 'Error al actualizar el usuario',
                    statusCode: 400
                })
            }else{
                res.send({
                    message: 'Mensaje Actualizado',
                    statusCode: 200,
                    dataUser: userUpdated
                })
            }
        }
    })
}

function login(req, res) {
    let params = req.body;

    User.findOne({ email: params.email }, (error, userLogged) => {
        if (error) {
            res.send({
                message: 'Error en el servidor',
                statusCode: 500
            })
        }else{
            if (!userLogged) {
                res.send({
                    message: 'E usuario no existe',
                    statusCode: 400
                })
            }else{
                let password = encriptacion(params.password);
                if (password === userLogged.password) {
                    res.send({
                        message: 'Los datos son correctos',
                        statusCode: 200,
                        dataUser: userLogged
                    })
                }else{
                    res.send({
                        message: 'Los datos no son correctos',
                        statusCode: 401
                    })
                }
            }
        }
    })
}

/**
 * Función la cual permitira modificar el avatar de usuario
 * @param {*} req 
 * @param {*} res 
 */
function saveImage(req, res) {
    let id = req.params.id;
    if (req.files) {
        //let imageName = req.files.image.path.split('/').pop();

        console.log(req.files);

        let imageName = req.files.image.path.split('\\');
        if (imageName.length === 1) {
            imageName = req.files.image.path.split('/');
        }
        imageName = imageName[2]
        //console.log('Esta es la imagen -----> ', imageName);

        User.findByIdAndUpdate(id, { image: imageName }, ( error, dataUser ) => {
            if (error) {
                res.send({
                    statusCode: 500,
                })
            }else if (!dataUser) {
                res.send({
                    statusCode: 401
                })
            }else{
                res.send({
                    statusCode: 200,
                    dataUser: dataUser,
                    image: imageName
                })
            }
        });
    }
}

function showImage(req, res) {
    let image = req.params.image;
    let nameImage = image === 'undefined' ? 'whitoutImage.png' : image; //if corto
    let imageRoute = './assets/images/'+ nameImage;
    fs.exists( imageRoute, (exists) => {
        if (exists) {
            res.sendFile( path.resolve(imageRoute) );
        }else{
            res.send({
                statusCode: 400,
                message: 'La imagen no existe'
            })
        }
    })
}

function changePassword(req, res){
    let id = req.params.id;
    let password = encriptacion(req.body.password);

    User.findByIdAndUpdate(id, { password: password }, (error, dataUser) =>{
        if (error) {
            res.send({
                statusCode: 500
            })
        }else if (!dataUser) {
            res.send({
                statusCode: 401
            })
        }else{
            res.send({
                statusCode: 200
            })
        }
    })
}


module.exports = {
    create, 
    update,
    login, 
    saveImage,
    showImage,
    changePassword
}