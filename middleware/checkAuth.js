// const userController = require('../controllers/users');

module.exports = (req, res, next) => {
  if (req.cookies && req.cookies.token && req.cookies.token === 'tigar-token') {
    next();
  } else {
    res.redirect('/login');
  }
}
