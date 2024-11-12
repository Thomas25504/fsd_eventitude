const users = require('../models/user.server.models');
const validator = require('../lib/validator');

const create = (req, res) => {

    let user = Object.assign({}, req.body);

    const {error} = validator.validate(user);

    if(error){
        return res.status(400).send({error_message: error.details[0].message});
    }
    
    else{
        users.insert(user, (err, id) => {

            if(err){
                return res.status(500);
            }else{
                return res.status(201).send({user_id: id});
            }

        });
    }
};

const login = (req, res) => {
    users.check_user(req.body, (err, user) => {
        if(err){
            return res.status(500);
        }
        if(user){
            return res.status(200).send({user_id: user.id});
        }else{
            return res.status(401).send({error_message: 'Invalid email or password'});
        }
    }
    );
};

const logout = (req, res) => {
    return res.sendStatus(500);
}

module.exports = {
    create: create,
    login: login,
    logout: logout
}