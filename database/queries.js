const knex = require('./knex')

function getPlayer (player) {
  return knex('players')
}

function getBlackTees (course_id) {
   return knex('black').first().where("course_id", course_id).then(function(data){
      data.color = 'black'
      return data
   })
}
function getBlueTees (course_id) {
   return knex('blue').first().where("course_id", course_id).then(function(data){
      data.color = 'blue'
      return data
   })
}
function getWhiteTees (course_id) {
   return knex('white').first().where("course_id", course_id).then(function(data){
      data.color = 'white'
      return data
  })
}
function getRedTees (course_id) {
   return knex('red').first().where("course_id", course_id).then(function(data){
      data.color = 'red'
      return data
   })
}
function getPar (id) {
   return knex('courses').first().where("id", id).then(function(data){
      return data
   })
}

function sendScoresToDB (game){
   return knex('games').insert(game)
}

module.exports = {
  getPlayer: getPlayer,
  getBlackTees: getBlackTees,
  getBlueTees: getBlueTees,
  getWhiteTees: getWhiteTees,
  getRedTees: getRedTees,
  getPar: getPar,
  sendScoresToDB: sendScoresToDB
}
