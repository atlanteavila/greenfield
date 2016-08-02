<<<<<<< HEAD
var express = require('express'),
=======
var express = require('express');
>>>>>>> 78e19104047711d9a37fa04ed4e7a81b1cb27794
var mongoose = require('mongoose');

var app = express();

<<<<<<< HEAD
 mongoose.connect('mongodb://localhost/'); // connect to mongo database named shortly

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

// export our app for testing and flexibility, required by index.js
=======
mongoose.connect('mongodb://localhost/');

require('./config/midleware.js')(app, express);
>>>>>>> 78e19104047711d9a37fa04ed4e7a81b1cb27794

app.listen(8000);

module.exports = app;