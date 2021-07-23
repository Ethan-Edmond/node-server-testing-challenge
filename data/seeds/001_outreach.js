
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('outreach').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('outreach').insert([
        { name: 'Gabe', linkedin: 'gabeslinkedin'},
        { name: 'Warren', linkedin: 'warrenslinkedin'},
        { name: 'Dominick', linkedin: 'dominickslinkedin'}
      ]);
    });
};
