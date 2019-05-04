const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {type: String, required: true, index: { unique: true }},
  password: {type: String, required: true},
  token: {type: String, required: true},
  favorites: {type: Array},
});

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
