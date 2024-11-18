const users = require('../models/user.server.models');
const validator = require('../lib/validator');

const create = (req, res) => {

    let user = Object.assign({}, req.body);

    const {error} = validator.validate(user);

    if(error){
        return res.status(400).json({error_message: error.details[0].message});
    }
    
    else{
        users.insert(user, (err, id) => {

            if(err){
                return res.status(400).send({error_message: err.message});
            }else{
                return res.status(201).send({user_id: id});
            }

        });
    }
};

const login = (req, res) => {
    let username = req.body.email;
    let password = req.body.password;
    
    if(!validator.validate(username, password)){
        return res.status(400).send({error_message: err});
    }
    else{
        users.authenticateUser(req.body.email, req.body.password, (err, id) => {
            if(err){
                return res.status(400).send({error_message: err});
            }
            else{
                users.getSessionToken(id, (err, token) => {
                    if(err){
                        return res.status(400).send({error_message: err.message});
                    }
                    else{
                        if(token !== null){
                            return res.status(200).send({user_id: id, session_token: token});
                        }
                        else{
                            users.setSessionToken(id, (err, token) => {
                                if(err){
                                    return res.status(400).send({error_message: err.message});
                                }
                                else{
                                    return res.status(200).send({user_id: id, session_token: token});
                                }
                            });
                        }
                        
                    }
                });
            }  
        });
    }
    
}

const logout = (req, res) => {
    return res.sendStatus(500);
}

module.exports = {
    create: create,
    login: login,
    logout: logout
}