const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost:27017/TrackIt', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;

// :279017

// mongodb+srv://eric123:<e1r2i3c4>@trackit.qla4h.mongodb.net/<TrackIt>?retryWrites=true&w=majority