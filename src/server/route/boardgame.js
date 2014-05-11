var express = require('express');
var router = express.Router();
var Boardgame = require('../models/boardgame');

router.use(function(req, res, next) {
  next();
});

router.get('', function(req, res) {
  res.json('boardgames');
});

router.param(':id', function(req, res, next) {
  next();
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var boardgame = new Boardgame();
  boardgame.get(id, function(err, body) {
    if (err) {
      throw err;
    }
    res.json(body);
  });
});

module.exports = router;
