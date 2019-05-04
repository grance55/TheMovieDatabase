const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const MoviesController = require('../controllers/movies');
const UserController = require('../controllers/users');

router.get('/', checkAuth, async (req, res) => {
  const page = req.query.page || 1;
  const movieArray = await MoviesController.fetchHomeMovies(page);

  res.render('index', {
    title: 'The Movie Database',
    movies: movieArray,
    activePage: page,
  });
});

router.post('/favorite', async (req, res) => {
  const { id } = req.body;
  const user = await UserController.addToFavorites(req.cookies.token, id);

  console.log('NAKON SVEGA ===>', user);

  res.redirect('/');
})

module.exports = router;
