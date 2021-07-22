
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_targets').truncate();
  await knex('targets').truncate();
  return await knex('users').truncate();
};
