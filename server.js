require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
const cors = require('cors');

var levelsController = require('./Controller/Level')();
var statsController = require('./Controller/stats')();
app.use(cors());
app.use("/api/levels", levelsController);
app.use("/api/stats", statsController);

app.listen(port, function() {
    var datetime = new Date();
    var message = "Server running on Port:- " + port + " Started at:- " + datetime;
    console.log(message);
});