var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/year', function(req, res, next) {
  const currentYear = new Date().getFullYear().toString();
  res.json({ year: currentYear });
});

module.exports = router;
