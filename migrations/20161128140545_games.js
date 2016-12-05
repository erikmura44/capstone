exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    table.increments();
    table.integer('course_id');
    table.date('date').defaultTo(knex.fn.now());
    table.integer('score1');
    table.integer('score2');
    table.integer('score3');
    table.integer('score4');
    table.integer('score5');
    table.integer('score6');
    table.integer('score7');
    table.integer('score8');
    table.integer('score9');
    table.integer('score10');
    table.integer('score11');
    table.integer('score12');
    table.integer('score13');
    table.integer('score14');
    table.integer('score15');
    table.integer('score16');
    table.integer('score17');
    table.integer('score18');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
