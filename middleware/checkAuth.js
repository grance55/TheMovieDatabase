const userController = require('../controllers/users');

module.exports = (req, res, next) => {
  if (req.cookies && req.cookies.token && userController.handleAuth(req.cookies.token)) {
    next();
  } else {
    res.redirect('/login');
  }
}
