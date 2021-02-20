const mongoose = require('mongoose');

const uri = 'mongodb+srv://eric123:e1r2i3c4@trackit.qla4h.mongodb.net/trackit?retryWrites=true&w=majority'

// mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost:27017/TrackIt', {
  mongoose.connect(uri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


module.exports = db;

// :279017


