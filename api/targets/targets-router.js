const router = require('express').Router();
const {
  idValid
} = require('./middleware');
const Targets = require('./targets-model');

router.get('/', (req, res, next) => {
});

router.get('/:id', idValid, (req, res, next) => {});

router.post('/', (req, res, next) => {});

router.put('/:id', idValid, (req, res, next) => {});

router.delete('/:id', idValid, (req, res, next) => {
  Targets.remove(1, req.params.id)
    .then(deleted => {
      res.json(deleted);
    })
    .catch(next);
});


module.exports = router;
