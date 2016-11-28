
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('games').insert({
           course_id: '1',
           date: '11/18/16',
           score1: 5,
           score2: 4,
           score3: 4,
           score4: 4,
           score5: 3,
           score6: 4,
           score7: 4,
           score8: 6,
           score9: 3,
           front9score: 37,
           score10: 4,
           score11: 5,
           score12: 4,
           score13: 5,
           score14: 3,
           score15: 4,
           score16: 3,
           score17: 4,
           score18: 4,
           back9score: 36,
           totalScore: 73
        }),
      ]);
    });
};
