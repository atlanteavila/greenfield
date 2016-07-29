var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/');

require('./config/midleware.js')(app, express);

app.listen(8000);

module.exports = app;