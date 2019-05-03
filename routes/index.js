const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const MoviesController = require('../controllers/movies');

router.get('/', checkAuth, async (req, res) => {
  const page = req.query.page || 1;
  const movieArray = await MoviesController.fetchHomeMovies(page);

  res.render('index', {
    title: 'The Movie Database',
    movies: movieArray,
    activePage: page,
  });
});

module.exports = router;
