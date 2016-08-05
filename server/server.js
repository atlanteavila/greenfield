
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();

// adding the ability to serve out static html files within express
app.use(express.static(__dirname + '/public'));

app.listen(8000);

module.exports = app;