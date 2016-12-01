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

function gameData (game){
   return knex('games').innerJoin('courses', 'courses.id', 'games.course_id')
}

function handicap (game){
   return knex.raw(`SELECT AVG((score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17 + score18) - 72) AS handicap FROM games`)
}

module.exports = {
  getPlayer: getPlayer,
  getBlackTees: getBlackTees,
  getBlueTees: getBlueTees,
  getWhiteTees: getWhiteTees,
  getRedTees: getRedTees,
  getPar: getPar,
  sendScoresToDB: sendScoresToDB,
  gameData: gameData,
  handicap: handicap
}
