const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, async (req, res) => {
  res.render('profile', {
    title: 'The Movie Database',
  });
});

module.exports = router;
