const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    nameStudent: String,
    lastName: String,
    email: String,
    cel: String
});

module.exports = mongoose.model('Student', studentSchema);
