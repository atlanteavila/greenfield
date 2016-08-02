var express = require('express');
var mongoose = require('mongoose');
var Dog = require('./app/scripts/models/dog');
var Owner = require('./app/scripts/models/owner');

var app = express();

mongoose.connect('mongodb://localhost/cbb');

require('./config/midleware.js')(app, express);

app.listen(8000);

module.exports = app;