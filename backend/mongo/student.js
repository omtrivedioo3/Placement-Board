const mongoose = require('mongoose')

const { Schema } = mongoose;
const studentSchema = new Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    package: { type: Number, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },

});

exports.student = mongoose.model('student', studentSchema)
