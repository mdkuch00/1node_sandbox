require('dotenv').config();
let express = require('express');
let app = express();
console.log("... Up & running");
// app.get ("/",function(req, res) {
//     res.send('Hello Express');
// });
// app.get("/", function(req,res) {
//     res.sendFile(__dirname + "/views/index.html");
// });
// app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", (req, res) => {
//     if (process.env.MESSAGE_STYLE==="uppercase") {
//     return res.json({
//         "message" : "HELLO JSON"
//     })}
//     else {
//     res.json({
//         "message" : "Hello json"
//     });}
// });

app.get("/json", (req, res, next) => {
    var callerid = req.method + " " + req.path + " - " + req.ip;
    console.log(callerid);
    next()
})





























 module.exports = app;
