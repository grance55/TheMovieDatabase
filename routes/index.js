const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
require('dotenv').config()

const checkAuth = require('../middleware/checkAuth');
const moviesList = require('../config/movieList');
const Movie = require('../models/movies');

router.get('/', checkAuth, async (req, res) => {
  const page = req.query.page || 1;

  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`);
  const moviesData = await movieRes.json();
  console.log(moviesData);
  const movieArray = moviesData.results.map((item) => new Movie(item));

  res.render('index', {
    title: 'The Movie Database',
    movies: movieArray,
    activePage: page,
  });
});

module.exports = router;
