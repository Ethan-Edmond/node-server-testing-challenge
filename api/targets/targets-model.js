const db = require('../../data/dbConfig');

function getAll(user_id) {
  return db('users_targets')
    .select('targets.*')
    .join('targets', 'target_id', 'targets.id')
    .where({user_id});
}

function getById(user_id, target_id) {
  return db('users_targets')
    .select('targets.*')
    .join('targets', 'target_id', 'targets.id')
    .where({user_id, target_id})
    .first();
}

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
