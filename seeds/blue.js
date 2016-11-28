
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blue').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blue').insert({
           course_id: '1',
           hole1: 507,
           hole2: 346,
           hole3: 445,
           hole4: 402,
           hole5: 162,
           hole6: 393,
           hole7: 200,
           hole8: 550,
           hole9: 409,
           front9yards: 3414,
           hole10: 342,
           hole11: 516,
           hole12: 337,
           hole13: 519,
           hole14: 165,
           hole15: 338,
           hole16: 167,
           hole17: 373,
           hole18: 409,
           back9yards: 3166,
           totalBlueYards: 6580
        })
      ]);
    });
};
