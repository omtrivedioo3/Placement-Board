const model = require('../mongo/student')
const express = require('express')
const Item = model.student;
const router = express.Router()
// const Category = require('../models/Category')

router.post('/studentData', async (req, res) => {
    try {
        const fetched_data = await Item.find();
        console.log("om");
        console.log(fetched_data);
        res.send(fetched_data);
    } catch (error) {
        console.log(error.message);
        res.send("server error")
    }
})

exports.router = router;