const users = require('../models/user.server.models');

const create = (req, res) => {
    let user = Object.assign({}, req.body);

    users.insert(user, (err, id) => {
        if(err){
            return res.status(500);
        }else{
            return res.status(201).send(res.body = {user_id: id});
        }

    });
};

const login = (req, res) => {
    return res.sendStatus(500);
};

const logout = (req, res) => {
    return res.sendStatus(500);
}

module.exports = {
    create: create,
    login: login,
    logout: logout
}