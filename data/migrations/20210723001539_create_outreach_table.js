
exports.up = function(knex) {
  return knex.schema
    .createTable('outreach', table => {
      table.increments();
      table.string('name', 256)
        .notNullable();
      table.text('linkedin')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('outreach');
};
