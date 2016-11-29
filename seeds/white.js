
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('white').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('white').insert({
           course_id: '1', hole1: 491, hole2: 326, hole3: 418, hole4: 369, hole5: 151, hole6: 366, hole7: 174, hole8: 524, hole9: 388, hole10: 327, hole11: 493, hole12: 328, hole13: 505, hole14: 142, hole15: 321, hole16: 149, hole17: 354, hole18: 380,
        }),
        knex('white').insert({
           course_id: '2', hole1: 312, hole2: 518, hole3: 374, hole4: 285, hole5: 159, hole6: 411, hole7: 301, hole8: 148, hole9: 478, hole10: 388, hole11: 360, hole12: 474, hole13: 124, hole14: 289, hole15: 418, hole16: 295, hole17: 142, hole18: 549,
        }),
      ]);
    });
};
