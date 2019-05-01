const User = require('../models/users');
const bcrypt = require('bcryptjs');

async function handleLogin(email, password) {
  const user = await User.findOne({email, password});

  console.log(user);

  return user;
}

async function handleRegister(email, password) {
  const salt = bcrypt.genSaltSync(10);

  const user = new User({
    email,
    password: bcrypt.hashSync(password, salt)
  });

  try {
    const savedUser = await user.save();

    console.log(savedUser);

    return user;
  } catch(e) {
    return null;
  }
}
