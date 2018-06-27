require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.port || 1337;

var levelsController = require('./Controller/Level')();

app.use("/api/levels", levelsController);

app.listen(port, function() {
    var datetime = new Date();
    var message = "Server running on Port:- " + port + " Started at:- " + datetime;
    console.log(message);
});