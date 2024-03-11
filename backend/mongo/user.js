const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    CPI: { type: Number },
    number: { type: Number, required: true },
    Enrollment_no: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String,
        minLength: 8,
        required: [true, "User password required"],
    },
    tenthMarks: Number,
    twelfthMarks: Number,
    resumePdf: String,
    address: String,
    skills: String,
    clg_name: String,
    department: String,
    semester: Number,
});

exports.User = new mongoose.model("User", userSchema);
