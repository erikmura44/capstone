
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('courses').insert({
           courseName: 'Tijeras Creek',
           location: 'Rancho Santa Margarita, CA',
           blackYards: '7003',
           blueYards: '6580',
           whiteYards: '6206',
           redYards: '5130',
           par1: 5,
           par2: 4,
           par3: 4,
           par4: 4,
           par5: 3,
           par6: 4,
           par7: 3,
           par8: 5,
           par9: 4,
           front9par: 36,
           par10: 4,
           par11: 5,
           par12: 4,
           par13: 5,
           par14: 3,
           par15: 4,
           par16: 3,
           par17: 4,
           par18: 4,
           back9par: 36,
           totalPar: 72
        }),
      ]);
    });
};
