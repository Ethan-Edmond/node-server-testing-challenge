const router = require('express').Router();
const {
  usernameExists
} = require('./middleware');

router.post('/login', usernameExists, (req, res, next) => {
  res.json({message: 'y'})
});

module.exports = router;
