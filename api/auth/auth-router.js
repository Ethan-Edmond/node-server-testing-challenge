const router = require('express').Router();
const {
  usernameExists,
  passwordValid
} = require('./middleware');

router.post('/login', usernameExists, passwordValid, (req, res, next) => {
  res.json({message: 'y'})
});

module.exports = router;
