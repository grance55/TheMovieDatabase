const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const UserController = require('../controllers/users');

router.get('/', checkAuth, async (req, res) => {
  const user = await UserController.handleAuth(req.cookies.token);
  console.log(user);

  res.render('profile', {
    title: 'The Movie Database',
    email: user.email
  });
});

module.exports = router;
