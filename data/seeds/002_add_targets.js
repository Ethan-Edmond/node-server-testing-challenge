
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('targets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('targets').insert([
        { name: 'Gabe', linkedIn_profile: 'gabe-linkedin'},
        { name: 'Warren', linkedIn_profile: 'warren-linkedin'},
        { name: 'Dominick', linkedIn_profile: 'dominick-linkedin'}
      ]);
    });
};
