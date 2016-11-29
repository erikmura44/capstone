
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('courses').insert({
           courseName: 'Tijeras Creek',
           location: 'Rancho Santa Margarita, CA',
           par1: 5, par2: 4, par3: 4, par4: 4, par5: 3, par6: 4, par7: 3, par8: 5, par9: 4, par10: 4, par11: 5, par12: 4, par13: 5, par14: 3, par15: 4, par16: 3, par17: 4, par18: 4,
        }),
        knex('courses').insert({
           courseName: 'Green Valley Ranch',
           location: 'Green Vally Ranch, CO',
           par1: 4, par2: 5, par3: 4, par4: 4, par5: 3, par6: 4, par7: 4, par8: 3, par9: 5, par10: 4, par11: 4, par12: 5, par13: 3, par14: 4, par15: 4, par16: 4, par17: 3, par18: 5,
        }),
      ]);
    });
};
