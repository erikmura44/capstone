
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('black').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('black').insert({
           course_id: '1',
           hole1: 525, hole2: 380, hole3: 477, hole4: 435, hole5: 185, hole6: 410, hole7: 225, hole8: 585, hole9: 414, hole10: 374, hole11: 545, hole12: 342, hole13: 534, hole14: 195, hole15: 343, hole16: 172, hole17: 404, hole18: 458,
        }),
        knex('black').insert({
           course_id: '2',
           hole1: 418, hole2: 573, hole3: 434, hole4: 326, hole5: 214, hole6: 462, hole7: 341, hole8: 174, hole9: 519, hole10: 416, hole11: 448, hole12: 529, hole13: 172, hole14: 346, hole15: 464, hole16: 374, hole17: 193, hole18: 639,
        })
      ]);
    });
};
