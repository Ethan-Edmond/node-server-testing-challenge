const db = require('../../data/dbConfig');

function add (target) {
  return db('outreach')
    .insert(target)
    .then(id => {
      return db('outreach')
        .where({id});
    });
  
}

function remove () {
  
}

module.exports = {
  add,
  remove
};
