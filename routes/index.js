const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
require('dotenv').config()

const checkAuth = require('../middleware/checkAuth');
const moviesList = require('../config/movieList');
const Movie = require('../models/movies');

router.get('/', checkAuth, async (req, res) => {
  const movieRes = await Promise.all(moviesList.slice(0, 6).map((item) => {
    return fetch(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${encodeURIComponent(item)}`)
  }))
  const moviesData = await Promise.all(movieRes.map(item => item.json()));

  if (moviesData.length) {
    res.render('index', {
      title: 'The Movie Database',
      movies: moviesData.map((item) => new Movie(item))
    });
  } else {
    res.render('index', { title: 'The Movie Database', movies: [] });
  }
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
