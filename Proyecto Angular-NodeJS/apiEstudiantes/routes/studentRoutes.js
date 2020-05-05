const express = require('express');
const studentController = require('../controllers/studentController');
const api = express.Router();

api.get('/getStudents', (req, res) => {
    console.log('Lista de estudiantes');
});

api.post('/createStudent', studentController.createStudent);

module.exports = api;