const User = require('../models/users');
const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid/v4');

async function handleAuth(token) {
  return User.findOne({token});
}

async function handleLogin(email, password) {
  const user = await User.findOne({email});

  if (user && user.validatePassword(password)) {
    return user;
  }

  return null;
}

async function handleRegister(email, password) {
  if (User.findOne({email})) {
    return null;
  }

  const salt = bcrypt.genSaltSync(10);
  const newUser = new User({
    email,
    password: bcrypt.hashSync(password, salt),
    token: uuidv4(),
  });

  try {
    return await newUser.save();
  } catch(e) {
    return null;
  }
}

module.exports = {
  handleAuth,
  handleRegister,
  handleLogin,
}
