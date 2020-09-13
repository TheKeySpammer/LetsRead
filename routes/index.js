var express = require('express');
var router = express.Router();

const utility = require('../modules/utility');
const middleware = require('../modules/middleware');


/* GET home page. */
router.get('/', middleware.auth.loggedIn(), function(req, res, next) {
  console.log('Dashboard');
  res.render('dashboard', { title: 'Express' });
});

module.exports = router;
