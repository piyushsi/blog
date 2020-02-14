var express = require('express');
var router = express.Router();
var Feed = require('rss-to-json');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/:id', function(req, res, next) {
  Feed.load(`https://medium.com/feed/@${req.params.id}/`, function(err, rss){
    res.render('index', { rss });
});

});


 
module.exports = router;
