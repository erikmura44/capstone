'use strict'

const express = require('express')
const router = express.Router()

const indexModel = require('../model/queries')

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Golf App' })
})


module.exports = router
