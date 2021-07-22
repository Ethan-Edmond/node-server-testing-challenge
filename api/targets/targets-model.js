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

async function remove (user_id, target_id) {
  await db('users_targets')
    .del()
    .where({user_id, target_id});
  try {
    await db('targets')
      .del()
      .where({id: target_id});
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
};
