module.exports = {
    auth: {
        notLoggedIn: (redirect = '/') => {
            return (req, res, next) => {
                if (req.session.loggedin) {
        
                }else{
                    next();
                }
            }
        },
        loggedIn: (redirect = '/auth/login') => {
            return (req, res, next) => {
                if (!req.session.loggedin) {
                    
                }else{
                    next();
                }
            }
        },     
    }
}