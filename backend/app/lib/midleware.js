const users = require('../models/user.server.models');

const isAuthenticated = function(req, res, next){
    let token = req.get('X-Authorization');

    users.getIdFromToken(token, (err, id) => {
        if(err || id === null){
            return res.status(401);
        }
        next();
    });
}

module.exports = {
    isAuthenticated: isAuthenticated
}