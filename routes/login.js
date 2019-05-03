const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');

router.get('/', (req, res) => {
  res.render('login', { title: 'The Movie Database', error: false });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await UserController.handleLogin(email, password);
    if (user) {
      res.cookie('token', user.token);
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } else {
    res.redirect('/login');
  }
})

module.exports = router;
