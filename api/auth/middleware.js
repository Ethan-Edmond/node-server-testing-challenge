const Users = require('./auth-model');

exports.usernameExists = function ({body: {username}}, res, next) {
  User.getByUsername(username)
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
