const router = require('express').Router();
const Outreach = require('./model');

router.post('/', (req, res, next) => {
  Outreach.add(req.body)
    .then(added => {
      res.status(201).json(added);
    });
});

router.delete('/:id', (req, res, next) => {
  next({
    message: 'delete not implemented'
  });
});

module.exports = router;
