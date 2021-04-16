const mongoose = require('mongoose');
const config = require('config');

const dbconn = config.get('mongoDBConnection');

const connectDB = async () => {
  try {
    await mongoose.connect(dbconn, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database connected');
  } catch (err) {
    console.log('unable to connect');
    process.exit();
  }
};

module.exports = connectDB;