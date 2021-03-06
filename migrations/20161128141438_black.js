exports.up = function(knex, Promise) {
  return knex.schema.createTable('black', function(table){
    table.increments();
    table.integer('course_id');
    table.integer('hole1');
    table.integer('hole2');
    table.integer('hole3');
    table.integer('hole4');
    table.integer('hole5');
    table.integer('hole6');
    table.integer('hole7');
    table.integer('hole8');
    table.integer('hole9');
    table.integer('hole10');
    table.integer('hole11');
    table.integer('hole12');
    table.integer('hole13');
    table.integer('hole14');
    table.integer('hole15');
    table.integer('hole16');
    table.integer('hole17');
    table.integer('hole18');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('black');
};
