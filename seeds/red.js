
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('red').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('red').insert({
           course_id: '1',
           hole1: 414,
           hole2: 280,
           hole3: 336,
           hole4: 308,
           hole5: 110,
           hole6: 312,
           hole7: 118,
           hole8: 442,
           hole9: 330,
           front9yards: 2650,
           hole10: 275,
           hole11: 399,
           hole12: 281,
           hole13: 426,
           hole14: 111,
           hole15: 275,
           hole16: 119,
           hole17: 311,
           hole18: 283,
           back9yards: 2480,
           totalRedYards: 5130
        })
      ]);
    });
};
