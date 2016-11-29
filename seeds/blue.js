
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blue').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blue').insert({
           course_id: '1', hole1: 507, hole2: 346, hole3: 445, hole4: 402, hole5: 162, hole6: 393, hole7: 200, hole8: 550, hole9: 409, hole10: 342, hole11: 516, hole12: 337, hole13: 519, hole14: 165, hole15: 338, hole16: 167, hole17: 373, hole18: 409,
        }),
        knex('blue').insert({
           course_id: '2', hole1: 344, hole2: 534, hole3: 404, hole4: 318, hole5: 182, hole6: 417, hole7: 332, hole8: 164, hole9: 506, hole10: 402, hole11: 419, hole12: 510, hole13: 141, hole14: 313, hole15: 436, hole16: 331, hole17: 184, hole18: 602,
        }),
      ]);
    });
};
