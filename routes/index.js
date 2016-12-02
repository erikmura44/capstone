var express = require('express');
var router = express.Router();
var queries = require('../database/queries.js');

/* GET home page. */

router.get('/gameData', function(req, res, next){
   Promise.all(
      [
         queries.gameData()
      ]
   )
   .then(function(data){
      res.json(data)
   })
})
router.get('/handicap', function(req, res, next){
   Promise.all(
      [
         queries.handicap()
      ]
   )
   .then(function(data){
      res.json(data)
   })
   .catch(function(error){
   })
})

router.get('/:course_id', function(req, res, next) {
   Promise.all(
      [
         queries.getBlackTees(req.params.course_id),
         queries.getBlueTees(req.params.course_id),
         queries.getWhiteTees(req.params.course_id),
         queries.getRedTees(req.params.course_id),
         queries.getPar(req.params.course_id)
      ]
   )
   .then(function(data){
      res.json(data)
   })
   .catch(function(error){
      res.status(500).json(error.message)
   })
});

router.get('/', function(req, res, next){
   Promise.all(
      [
         queries.getPlayer()
      ]
   )
})

router.post('/postscores', function(req, res, next){
   queries.sendScoresToDB(req.body)
   .then(function(games){
      res.sendStatus(200)
   })
})





module.exports = router;
