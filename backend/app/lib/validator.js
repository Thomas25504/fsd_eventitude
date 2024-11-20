// Desc: Joi schema for user validation
const Joi = require('joi');

// Define the schema
const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6)
    .max(30)
    .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)
    .required(),
  
}).unknown(false);

// Define the schema for user login
const eventSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    start: Joi.date().min('now').required(),
    close_registration: Joi.date().max(Joi.ref('start')).min('now').required(),
    max_attendees: Joi.number().integer().min(1).required(),
    creator_id: Joi.number().integer()
})

// Validate the user object
const validateUser = (user) => {
    if(userSchema.validate(user).error){
        return {error: userSchema.validate(user).error};
    }else{
        return {error: null};
    }
}

// Validate the user login object
const validateUserLogin = (user) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required()
    }).unknown(false);
    if(loginSchema.validate(user).error){
        return {error: loginSchema.validate(user).error};
    }else{
        return {error: null};
    }
}

// Validate the event object
const validateEvent = (event) => {
    if(eventSchema.validate(event).error){
        return {error: eventSchema.validate(event).error};
    }else{
        return {error: null};
    }
}
 


// Export the module
module.exports = {
    validateUser: validateUser,
    validateUserLogin: validateUserLogin,
    validateEvent: validateEvent
};