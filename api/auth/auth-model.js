const db = require('../../data/dbConfig');

function getAll() {
  return db('users');
};

function getById() {};

function add() {};


module.exports = {
  getAll,
  getById,
  add
};
