exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table){
    table.increments();
    table.string('name');
    table.string('initials');
    table.integer('handicap');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players');
};
