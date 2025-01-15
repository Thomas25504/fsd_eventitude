const users = require('../models/user.server.models');

const isAuthenticated = function(req, res, next){
    let token = req.get('X-Authorization');
    users.getIdFromToken(token, (err, id) => {
        if(err || id === null){
            return res.status(401).send({error_message: 'Unauthorized'});
        }
        next();
    });
}

module.exports = {
    isAuthenticated: isAuthenticated
}