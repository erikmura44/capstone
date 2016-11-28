
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('black').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('black').insert({
           course_id: '1',
           hole1: 525,
           hole2: 380,
           hole3: 477,
           hole4: 435,
           hole5: 185,
           hole6: 410,
           hole7: 225,
           hole8: 585,
           hole9: 414,
           front9yards: 3636,
           hole10: 374,
           hole11: 545,
           hole12: 342,
           hole13: 534,
           hole14: 195,
           hole15: 343,
           hole16: 172,
           hole17: 404,
           hole18: 458,
           back9yards: 3367,
           totalBlackYards: 7003
        })
      ]);
    });
};
