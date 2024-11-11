const db = require('../../config/database');

const insert = function(user, done){
    let values = [user.first_name, user.last_name ,user.email, user.password];

    db.run('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', values, function(err){
        if(err){
            console.log(err);
            return done(err);
        }
        return done(null, this.lastID);
    });
};

module.exports = {
    insert: insert
};