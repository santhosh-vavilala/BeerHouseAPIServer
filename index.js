var express = require('express');
var app = express();
var request = require('request');
var port = process.env.PORT || 3000;
var router = express.Router();
router.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  request({
    uri: 'http://api.brewerydb.com/v2/beers',
    qs: {
      key: 'dd1b9ea105cb7bcabd012c76c9576c51',
      query: 'stella'
    }
  }).pipe(res);
  //res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/:qstring', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  request({
    uri: 'http://api.brewerydb.com/v2/search',
    qs: {
      key: 'dd1b9ea105cb7bcabd012c76c9576c51',
      q: req.params.qstring
    }
  }).pipe(res);
  //res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/beer/:qstring', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  request({
    uri: 'http://api.brewerydb.com/v2/beer/' + req.params.qstring,
    qs: {
      key: 'dd1b9ea105cb7bcabd012c76c9576c51'
    }
  }).pipe(res);
  //res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
