var mongoose = require('mongoose');
var db = require('./index.js')
mongoose.Promise = global.Promise;

var vehicleSchema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  nick_name: String,
  vin: String,
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;

