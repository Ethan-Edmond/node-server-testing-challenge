const Targets = require('./targets-model');

function idValid (req, res, next) {
  next();
}

module.exports = {
  idValid
};
