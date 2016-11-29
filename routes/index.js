var express = require('express');
var router = express.Router();
var queries = require('../database/queries.js');

/* GET home page. */
router.get('/', function(req, res, next) {
   queries.getPlayer()
   .then(function(data){
      res.json(data)
   })
   .catch(function(error){
      res.status(500).json(error.message)
   })
});


module.exports = router;
