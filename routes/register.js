const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');

router.get('/register', (req, res) => {
  res.render('register', { title: 'The Movie Database', error: false });
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = await UserController.handleRegister(email, password);

    if (user) {
      res.cookie('token', user.token);
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } else {
    res.redirect('/register');
  }
})

module.exports = router;
