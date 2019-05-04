const mongoose = require('mongoose');
const env = require('./env');

const connectDb = () => {
  return mongoose.connect(env.DATABASE_URL);
};

module.exports = { connectDb };
