var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DogSchema = new Schema({
  name: String,
  age: Number,
  location: String,
  breed: String,
  sex: String
});

module.exports = mongoose.model('Dog', DogSchema);