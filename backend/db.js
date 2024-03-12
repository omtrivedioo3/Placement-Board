const mongoose = require("mongoose");
const URL=process.env.MONGO_URL
// con
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//  password : 78wXMxojl1rc0rSZ



var db = mongoose.connection;
try {
    db.on("error", console.error.bind(console, "Connecton error"));
    db.once("open", function () {
        console.log(URL)
        console.log("mongoDB connected");
    });
} catch (err) {
    console.log(err);
}

module.exports = db;
