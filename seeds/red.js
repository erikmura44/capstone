
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('red').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('red').insert({
           course_id: '1', hole1: 414, hole2: 280, hole3: 336, hole4: 308, hole5: 110, hole6: 312, hole7: 118, hole8: 442, hole9: 330, hole10: 275, hole11: 399, hole12: 281, hole13: 426, hole14: 111, hole15: 275, hole16: 119, hole17: 311, hole18: 283,
        }),
        knex('red').insert({
           course_id: '2', hole1: 286, hole2: 467, hole3: 334, hole4: 276, hole5: 138, hole6: 369, hole7: 271, hole8: 130, hole9: 472, hole10: 333, hole11: 326, hole12: 411, hole13: 108, hole14: 241, hole15: 376, hole16: 269, hole17: 112, hole18: 524,
        }),
      ]);
    });
};
