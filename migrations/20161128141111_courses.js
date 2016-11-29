exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', function(table){
    table.increments();
    table.string('courseName')
    table.string('location');
    table.integer('par1');
    table.integer('par2');
    table.integer('par3');
    table.integer('par4');
    table.integer('par5');
    table.integer('par6');
    table.integer('par7');
    table.integer('par8');
    table.integer('par9');
    table.integer('par10');
    table.integer('par11');
    table.integer('par12');
    table.integer('par13');
    table.integer('par14');
    table.integer('par15');
    table.integer('par16');
    table.integer('par17');
    table.integer('par18');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('courses');
};
