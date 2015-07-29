var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var pages = [];

  var pad = function(number, length) {
    var str = '' + number;
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  for (var i = 1; i <= 40; i++) {
    pages.push({index: i-1, url: 'images/book-sample/sample-'+pad(i, 3)+'.jpg'});
  }

  res.render('legacy', { title: 'AUO Enterprise Integrity Handbook (Traditional Chinese)', pages: pages });
});

module.exports = router;
