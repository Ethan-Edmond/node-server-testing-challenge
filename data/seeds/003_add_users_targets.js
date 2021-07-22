
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_targets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_targets').insert([
        { user_id: 1, target_id: 1},
        { user_id: 1, target_id: 2},
        { user_id: 2, target_id: 3}
      ]);
    });
};
