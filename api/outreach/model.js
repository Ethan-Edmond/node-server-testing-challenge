const db = require('../../data/dbConfig');

function add (target) {
  return db('outreach')
    .insert(target)
    .then(id => {
      return db('outreach')
        .where({id})
        .first();
    });
}

function remove (id) {
  return db('outreach')
    .del()
    .where({id});
}

module.exports = {
  add,
  remove
};
