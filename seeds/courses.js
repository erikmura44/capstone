
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('courses').insert({
           courseName: 'Tijeras Creek Golf Course',
           location: 'Rancho Santa Margarita, CA',
           par1: 5, par2: 4, par3: 4, par4: 4, par5: 3, par6: 4, par7: 3, par8: 5, par9: 4, par10: 4, par11: 5, par12: 4, par13: 5, par14: 3, par15: 4, par16: 3, par17: 4, par18: 4,
        }),
        knex('courses').insert({
           courseName: 'Green Valley Ranch Golf Club',
           location: 'Green Vally Ranch, CO',
           par1: 4, par2: 5, par3: 4, par4: 4, par5: 3, par6: 4, par7: 4, par8: 3, par9: 5, par10: 4, par11: 4, par12: 5, par13: 3, par14: 4, par15: 4, par16: 4, par17: 3, par18: 5,
        }),
        knex('courses').insert({
           courseName: 'Deer Creek Golf Club',
           location: 'Littleton, CO',
           par1: 4, par2: 5, par3: 4, par4: 3, par5: 4, par6: 5, par7: 4, par8: 3, par9: 4, par10: 4, par11: 4, par12: 5, par13: 3, par14: 4, par15: 5, par16: 3, par17: 4, par18: 4,
        }),
        knex('courses').insert({
           courseName: 'Todd Creek Golf Course',
           location: 'Brighton, CO',
           par1: 4, par2: 4, par3: 3, par4: 5, par5: 4, par6: 4, par7: 3, par8: 5, par9: 4, par10: 4, par11: 3, par12: 4, par13: 4, par14: 5, par15: 4, par16: 4, par17: 3, par18: 5,
        }),
        knex('courses').insert({
           courseName: 'Fossil Trace Golf Club',
           location: 'Golden, CO',
           par1: 5, par2: 4, par3: 3, par4: 4, par5: 3, par6: 4, par7: 4, par8: 4, par9: 5, par10: 4, par11: 3, par12: 5, par13: 4, par14: 3, par15: 5, par16: 3, par17: 4, par18: 5,
        }),
        knex('courses').insert({
           courseName: 'Arroyo Trabuco Golf Club',
           location: 'Mission Viejo, CA',
           par1: 4, par2: 4, par3: 5, par4: 3, par5: 4, par6: 4, par7: 5, par8: 3, par9: 4, par10: 4, par11: 3, par12: 4, par13: 3, par14: 5, par15: 4, par16: 4, par17: 4, par18: 5,
        }),
        knex('courses').insert({
           courseName: 'Talega Golf Club',
           location: 'San Clemente, CA',
           par1: 4, par2: 5, par3: 4, par4: 4, par5: 3, par6: 5, par7: 3, par8: 3, par9: 4, par10: 4, par11: 5, par12: 3, par13: 5, par14: 4, par15: 5, par16: 4, par17: 3, par18: 4,
        }),
        knex('courses').insert({
           courseName: 'Colorado National Golf Club',
           location: 'Erie, CO',
           par1: 4, par2: 5, par3: 4, par4: 4, par5: 3, par6: 4, par7: 5, par8: 4, par9: 3, par10: 4, par11: 4, par12: 5, par13: 4, par14: 3, par15: 5, par16: 3, par17: 4, par18: 4,
        }),
        knex('courses').insert({
           courseName: 'Arrowhead Golf Club',
           location: 'Littleton, CO',
           par1: 4, par2: 5, par3: 3, par4: 5, par5: 4, par6: 4, par7: 4, par8: 4, par9: 3, par10: 4, par11: 3, par12: 5, par13: 3, par14: 4, par15: 4, par16: 5, par17: 3, par18: 5,
        }),
        knex('courses').insert({
           courseName: 'Commonground Golf Club',
           location: 'Aurora, CO',
           par1: 4, par2: 3, par3: 5, par4: 4, par5: 4, par6: 3, par7: 5, par8: 4, par9: 4, par10: 4, par11: 5, par12: 3, par13: 4, par14: 3, par15: 4, par16: 4, par17: 3, par18: 5,
        }),
      ]);
    });
};
