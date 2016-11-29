const knexfile = require('../knexfile')
const knex = require('knex')


// change this value to not always be development if you are deploying this.
const environment = 'development'
module.exports = require('knex')(knexfile[environment]);
