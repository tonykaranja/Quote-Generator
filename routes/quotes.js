var express = require('express');
var router  = express.router();
var Quotes = require('../models/quotes.js')

//Get quotes
router.get('/', function (req, res, next) {
  Quotes
  .find()
  .exec(function (err, data) {
    if (err) {
      res.send('Oops! db error')
    } else {
      res.json(data)
    }
  })
})
