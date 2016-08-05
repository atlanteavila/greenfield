var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema({
  firstName : String,
  lastName : String,
  age : Number,
  location : String,
  favorite : String,
  numberOfBreeds : Number,
  numberOfDogs : String,
  username : String,
  password : String,
  dogs : [{ type: Schema.Types.ObjectId, ref: 'Dog' }]
});

module.exports = mongoose.model('Owner', OwnerSchema);