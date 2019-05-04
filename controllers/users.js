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
  const user = await User.findOne({email});
  if (Boolean(user)) {
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

async function addToFavorites(token, id) {
  const user = await User.findOneAndUpdate({token}, {
    $addToSet: {
      favorites: [id],
    }
  });

  return user;
}

async function removeFromFavorites(token, id) {
  const user = await User.findOneAndUpdate({token}, {
    $pull: {
      favorites: id,
    }
  });

  return user;
}

module.exports = {
  handleAuth,
  handleRegister,
  handleLogin,
  addToFavorites,
  removeFromFavorites,
}
