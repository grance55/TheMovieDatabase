const express = require('express');
// const fetch = require('node-fetch');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
// const env = require('../config/env');
// const moviesList = require('../config/movieList');
// const Movie = require('../models/movies');

router.get('/', checkAuth, async (req, res) => {
  res.render('profile', {
    title: 'The Movie Database',
  });
});

module.exports = router;
