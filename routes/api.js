var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// connect our app to mongodb
mongoose.connect('mongodb://localhost/cbb');


// require the Owner model for our db
var Owner = require('./../app/scripts/models/owner');
var Dog = require('./../app/scripts/models/dog');

// configure the app to use bodyParser();
// allows us to get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// set up middleware
router.use(function(req, res, next){
  // log for every request.
  console.log('Route is working');

  next(); // makes sure we go to the next routes and not force a stop here.
});

// set up the default api route's message.
router.get('/', function(req, res) {
  res.json({ message: 'Api is running!' })
});

/* ------------ OWNER ROUTES ------------*/

// routes for owners in our api
router.route('/owners')

  // on POST
  .post(function(req, res){
  
    var reqBody = req.query

    // create a new instance of the Owner model
    var owner = new Owner();

    // set the owner's name (comes from the request);
    owner.firstName = reqBody.firstName;
    owner.lastName = reqBody.lastName;
    owner.age = reqBody.age;
    owner.location = reqBody.location;
    owner.favorite = reqBody.favorite;
    owner.numberOfBreeds = reqBody.numberOfBreeds;
    owner.numberOfDogs = reqBody.numberOfDogs;
    owner.username = reqBody.username;
    owner.password = reqBody.password;

    owner.save(function(err){
      if (err) { res.send(err); }
    }).then(
      res.json({ message: 'Owner Created' })
    );

  })

  .get(function(req, res){
    Owner.find(function(err, owners){
      if (err) { res.send(err); }

      res.json(owners);
    });
  });

/* ------------ END OWNER ROUTES ------------*/


/* ------------ DOG ROUTES ------------*/


// routes for owners in our api
router.route('/dogs')

  // on POST
  .post(function(req, res){
  
    var reqBody = req.query

    // create a new instance of the Owner model
    var dog = new Dog();

    // set the owner's name (comes from the request);
    dog.name = reqBody.name;
    dog.age = reqBody.age;
    dog.location = reqBody.location;
    dog.breed = reqBody.breed;
    dog.sex = reqBody.sex;

    dog.save(function(err){
      if (err) { res.send(err); }
    }).then(
      res.json({ message: 'Dog Created' })
    );

  })

  .get(function(req, res){
    Dog.find(function(err, dogs){
      if (err) { res.send(err); }

      res.json(dogs);
    });
  });

/* ------------ END DOG ROUTES ------------*/


module.exports = router;


