const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TrackIt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;

// :279017
