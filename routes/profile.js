const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const UserController = require('../controllers/users');
const MovieController = require('../controllers/movies');

router.get('/', checkAuth, async (req, res) => {
  const user = await UserController.handleAuth(req.cookies.token);
  console.log(user);

  await MovieController.fetchArrayMovies(user.favorites);
  // const movies

  res.render('profile', {
    title: 'The Movie Database',
    email: user.email
  });
});

module.exports = router;
