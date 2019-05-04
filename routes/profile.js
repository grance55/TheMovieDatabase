const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const UserController = require('../controllers/users');
const MovieController = require('../controllers/movies');

router.get('/', checkAuth, async (req, res) => {
  const user = await UserController.handleAuth(req.cookies.token);

  const myMovies = await MovieController.fetchArrayMovies(user.favorites);

  res.render('profile', {
    title: 'The Movie Database',
    email: user.email,
    movies: myMovies,
  });
});

module.exports = router;
