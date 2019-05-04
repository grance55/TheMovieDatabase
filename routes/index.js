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

router.post('/add-favorite', async (req, res) => {
  const { id } = req.body;
  await UserController.addToFavorites(req.cookies.token, id);

  res.redirect('/');
})

router.post('/remove-favorite', async(req, res) => {
  console.log('tu sam');
  const { id } = req.body;
  await UserController.removeFromFavorites(req.cookies.token, id);

  res.redirect('/profile');
})

module.exports = router;
