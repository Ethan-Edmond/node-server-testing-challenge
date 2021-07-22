const db = require('../../data/dbConfig');

function getAll() {
  return db('users');
};

function getById(id) {
  return db('users')
    .where({id})
    .first();
};

function add({username, password}) {
  return db('users').insert({username, password});
};


module.exports = {
  getAll,
  getById,
  add
};
