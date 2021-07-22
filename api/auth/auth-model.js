const db = require('../../data/dbConfig');

function getAll() {
  return db('users');
};

function getById(id) {
  return db('users')
    .where({id})
    .first();
};

function getByUsername() {
}

function add({username, password}) {
  return db('users').insert({username, password})
    .then(id => {
      return getById(id);
    });
};


module.exports = {
  getAll,
  getById,
  getByUsername,
  add
};
