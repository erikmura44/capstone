const knex = require('./knex')

function getPlayer (player) {
  return knex('players')
}

module.exports = {
  getPlayer: getPlayer
}
