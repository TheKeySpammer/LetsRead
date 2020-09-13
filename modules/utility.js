const db = require('./database');
const User = require('../models/User');


module.exports = {
    user: {
        createUser: (data) => {
            return User.create({...data});
        },
        userExists: (username, password) => {
            User.findOne({where: {username: username}}).then(function(user) {
                if (user == null) {
                    return null;
                }
                if (users.correctPassword(password)) {
                    return true;
                } else {
                    return false;
                }
            }).catch(err => {
                console.log(err);
                throw new Error('DB ERROR');
            });
        }
    },
    
}