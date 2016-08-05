var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DogSchema = new Schema({
  _owner : { type: Number, ref: 'Owner' },
  name : String,
  age : Number,
  location : String,
  breed : String,
  sex : String
});

module.exports = mongoose.model('Dog', DogSchema);