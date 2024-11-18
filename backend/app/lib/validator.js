const Joi = require('joi');

const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6)
    .max(30)
    .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/)
    .required(),
}).unknown(false);


/*const validate = (user) => {
    if(userSchema.validate(user).error){
        return {error: userSchema.validate(user).error};
    }

    return {value: userSchema.validate(user).value};
}*/

const validate = (user) => {
    const { value, error } = userSchema.validate(user, { abortEarly: false });
        
    if (error) {
        return {error: error};
    }else{
        return {value: value};
    }
    
};
 



module.exports = {
    validate: validate
};