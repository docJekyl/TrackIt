const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost:27017/TrackIt', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var serviceSchema = mongoose.Schema({
  vehicleId: String,
  milage: Number,
  service: String,
  note: String,
  cost: Number,
});

var vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  nick_name: String,
  vin: String,
});

const db = mongoose;

var Vehicle = mongoose.model('Vehicle', vehicleSchema);
var Service = mongoose.model('Service', serviceSchema);

module.exports = {
  Vehicle, Service
};

// :279017


