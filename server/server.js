
var express = require('express');
var mongoose = require('mongoose');

// require the Dog modle for our db
var Dog = require('./app/scripts/models/dog');

// require the Owner model for our db
var Owner = require('./app/scripts/models/owner');

var app = express();

// connect our app to mongodb
mongoose.connect('mongodb://localhost/cbb');

// adding the ability to serve out static html files within express
app.use(express.static(__dirname + '/public'));

app.listen(8000);

module.exports = app;