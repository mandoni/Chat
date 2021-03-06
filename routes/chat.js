var express = require('express');
var router = express.Router();
const messageElement = require('../models/message');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:user', function(req, res, next) {
  res.json({name: req.params.user});
});

module.exports = router;
