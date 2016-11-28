
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('players').insert({
           name: 'Erik Mura',
           initials: 'EM',
           handicap: '0'
        }),
      ]);
    });
};
