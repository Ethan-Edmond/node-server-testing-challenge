const Users = require('./auth-model');

exports.usernameExists = function (req, res, next) {
  Users.getByUsername(req.body.username)
    .then(user => {
      if (user) {
        next();
      } else {
        next({
          status: 404,
          message: 'Invalid Credentials'
        });
      }
    })
    .catch(next);
};