
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('white').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('white').insert({
           course_id: '1',
           hole1: 491,
           hole2: 326,
           hole3: 418,
           hole4: 369,
           hole5: 151,
           hole6: 366,
           hole7: 174,
           hole8: 524,
           hole9: 388,
           front9yards: 3207,
           hole10: 327,
           hole11: 493,
           hole12: 328,
           hole13: 505,
           hole14: 142,
           hole15: 321,
           hole16: 149,
           hole17: 354,
           hole18: 380,
           back9yards: 2999,
           totalWhiteYards: 6206
        })
      ]);
    });
};
