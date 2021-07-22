
exports.up = function(knex) {
  return knex.schema
    .createTable('users_targets', table => {
      table.increments();
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      table.integer('target_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('targets')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users_targets');
};
