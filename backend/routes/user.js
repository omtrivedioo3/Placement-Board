const model = require("../mongo/user");
const User = model.User;
const express = require("express");
// const Router = require("router");
const { mongo } = require("mongoose");
// const router = Router();
const router = express.Router()
const bcrypt = require("bcrypt");

let newuser = {}
let user;
// User login request
router.post("/login", async (req, res) => {
    let success = false;
    const { email, Enrollment_no, password } = req.body;
    user = await User.findOne({ email: email });
    console.log(user)
    if (user) {
        newuser.email = email;
        const hashPassword = await bcrypt.compare(password, user.password);
        if (Enrollment_no === user.Enrollment_no) {
            if (hashPassword) {
                res.send({
                    message: "Login Successfull", user: user,
                    success: true
                });
            } else {
                success = false;
                res.send({
                    message: "Password didn't match",
                    success: false
                });
            }
           
        }
        else {
            success = false;
            res.send({
                message: "Enrollment number didn't match",
                success: false
            });
        }
    } else {
        success = false;
        res.send({ message: "User not registered", success: false });
    }
    // }
});


// User register request
router.post("/register", async (req, res) => {

    const { name, number, email, Enrollment_no, password, tenthMarks, twelfthMarks, resumePdf, address, skills, CPI, clg_name, department, semester } = req.body;
    let success = false;
    try {
        let user = await User.findOne({ email: email });
        if (user) {
            success = false;
            res.send({
                message: "User already registerd",
                user: user,
                success: success,
            });
        } else {
            const user = new User({
                name, number, email, Enrollment_no, password, tenthMarks, twelfthMarks, resumePdf, address, skills, CPI, clg_name, department, semester
            });
            const hashPassword = await bcrypt.hash(password, 10);
            user.password = hashPassword;
            const doc = await user.save();
            console.log(doc);
            success = true;
            res.json({
                message: "User registered Successfull, Please Login now...",
                success: success,
            });
        }
    } catch (err) {
        success = false;
        res.send(err);
    }
});
exports.router = router;
