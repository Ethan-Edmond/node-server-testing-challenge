const router = require('express').Router();

router.post('/', (req, res, next) => {
  next({
    message: 'post not implemented'
  });
});

router.delete('/:id', (req, res, next) => {
  next({
    message: 'delete not implemented'
  });
});

module.exports = router;
