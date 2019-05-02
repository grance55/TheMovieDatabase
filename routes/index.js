const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const UserController = require('../controllers/users');

router.get('/', checkAuth, (req, res) => {
  res.render('index', { title: 'The Movie Database' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'The Movie Database', error: false });
});

router.post('/login', async (req, res) => {
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
