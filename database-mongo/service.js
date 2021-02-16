var mongoose = require('mongoose');
var db = require('./index.js')

mongoose.Promise = global.Promise;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var serviceSchema = mongoose.Schema({
  vehicleId: String,
  milage: Number,
  service: String,
  note: String,
  cost: Number,
});

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;