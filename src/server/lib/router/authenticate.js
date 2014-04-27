var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log(req.host);
  next();
});

router.get('', function(req, res) {
  res.json(req.host);
});

router.get('/auth', function(req, res) {
  res.json(req.user);
});

module.exports = router;
