
exports.up = function(knex) {
  return knex.schema
    .createTable('targets', table => {
      table.increments();
      table.string('name', 256)
        .notNullable();
      table.text('linkedIn_profile')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('targets');
};
