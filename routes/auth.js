const express = require('express');
const router = express.Router();

const utility = require('../modules/utility');
const middleware = require('../modules/middleware');
const { route } = require('.');

router.get('/', middleware.auth.notLoggedIn(), (req, res) => {
    res.redirect('/auth/login');
});

router.get('/login', middleware.auth.notLoggedIn(), (req, res) => {
    res.render('auth/login');
});

router.post('/login', middleware.auth.notLoggedIn(), (req, res) => {
    var username = request.body.username.trim();
    var password = request.body.password.trim();
    var exists = utility.user.userExists(username, password)
    if (exists == null || !exists) {

    }else{
        request.session.loggedin = true;
		request.session.username = username;
		response.redirect('/');
    }
});


module.exports = router;
