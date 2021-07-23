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

async function remove (id) {
  const deleted = await db('outreach')
        .where({id})
        .first();
  await db('outreach')
    .del()
    .where({id});
  return deleted;
}

module.exports = {
  add,
  remove
};
