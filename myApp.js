require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");
// app.get ("/",function(req, res) {
//     res.send('Hello Express');
// });
// app.get("/", function(req,res) {
//     res.sendFile(__dirname + "/views/index.html");
// });
// app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE==="uppercase") {
    return res.json({
        "message" : "HELLO JSON"
    })}
    else {
    res.json({
        "message" : "Hello json"
    });}
});





























 module.exports = app;
