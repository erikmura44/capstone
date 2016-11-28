const knex = require('knex')

function create (user) {
  return knex('users').returning('id').insert(user)
}

module.exports = {
  create
}
