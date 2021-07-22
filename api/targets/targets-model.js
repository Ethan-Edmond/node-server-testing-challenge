const db = require('../../data/dbConfig');

function getAll(user_id) {
  return db('users_targets')
    .select('targets.*')
    .join('targets', 'target_id', 'targets.id')
    .where({user_id});
}

function getById() {}

function add () {}

function update () {}

function remove () {}

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
};
