// Importing the user model
const users = require('../models/user.server.models');
const validator = require('../lib/validator');

// Create a new user
const create = (req, res) => {

    // Creating a new user object
    let user = Object.assign({}, req.body);

    // Validating the user object
    const {error} = validator.validateUser(user);

    // If the user object is invalid, return an error message
    if(error){
        return res.status(400).json({error_message: error.details[0].message});
    }
    
    // If the user object is valid, insert the user into the database
    else{
        users.insert(user, (err, id) => {
            // If there is an error, return an error message
            if(err){
                return res.status(400).send({error_message: err.message});
            }
            // If the user is successfully inserted, return the user id
            else{ 
                return res.status(201).send({user_id: id});
            }

        });
    }
};

// Login a user
const login = (req, res) => {
    // Validating the user object
    if(!validator.validateUser(req.body)){
        return res.status(400).send({error_message: err});
    }
    // If the user object is valid, authenticate the user
    else{
        users.authenticateUser(req.body.email, req.body.password, (err, id) => {
            // If there is an error, return an error message
            if(err){
                return res.status(400).send({error_message: err});
            }
            // If the user is successfully authenticated, return the user id and session token
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

// Logout a user
const logout = (req, res) => {
    return res.status(200).send({message: 'Successfully logged out'});
}

// Exporting the functions
module.exports = {
    create: create,
    login: login,
    logout: logout
}