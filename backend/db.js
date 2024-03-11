const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://omtrivedioo3:78wXMxojl1rc0rSZ@cluster0.vmygbyn.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//  password : 78wXMxojl1rc0rSZ



var db = mongoose.connection;
try {
    db.on("error", console.error.bind(console, "Connecton error"));
    db.once("open", function () {
        console.log("mongoDB connected");
    });
} catch (err) {
    console.log(err);
}

module.exports = db;
