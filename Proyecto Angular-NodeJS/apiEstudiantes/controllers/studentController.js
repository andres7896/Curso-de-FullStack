const Students = require('../models/Student');

function createStudent(req, res) {
    var user = new Students();
    var params = req.body;

    user.nameStudent = params.nameStudent;
    user.lastName = params.lastName;
    user.email = params.email;
    user.cel = params.cel;
    console.log('parametros ---->', params);

    user.save( (error, studentCreated) => {
        if (error) {
            res.send({
                statusCode: 500,
                message: 'Error en el servidor'
            })
        } else if (!studentCreated) {
            res.send({
                statusCode: 400,
                message: 'Error al crear el usuario'
            })
        }else{
            res.send({
                statusCode: 200,
                message: 'Estudiante creado correctamente'
            })
        }
    } )
}

module.exports = {
    createStudent
}