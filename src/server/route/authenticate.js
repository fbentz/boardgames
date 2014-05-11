var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  next();
});

router.get('', function(req, res) {
  res.json(req.host);
});

module.exports = router;
