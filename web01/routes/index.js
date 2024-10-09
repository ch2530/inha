var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: '한 페이지가 될 수 있게', pageName:'home.ejs'});
});

module.exports = router;
