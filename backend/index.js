require("dotenv").config();
const path =require('path')
const express = require("express");
const cors = require("cors");
// const bcrypt = require("bcrypt");
const userRouter = require("./routes/user")
const studentRouter = require("./routes/student")
const mongoDB = require("./db")
// mongoDB();
// import userRouter from "./routes/user.js";

const PORT = 5000
console.log( "my port",process.env.PORT)

const app = express();

 __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", require("./routes/user").router);
app.use("/", require("./routes/student").router)


app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


app.listen(5000, () => {
    console.log(`BE started at port ${PORT}`);
});