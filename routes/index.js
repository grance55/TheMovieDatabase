var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'The Movie Database' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'The Movie Database' });
});

module.exports = router;
