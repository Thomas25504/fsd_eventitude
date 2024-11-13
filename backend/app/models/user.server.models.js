const db = require('../../config/database');
const crypto = require('crypto');

const getHash = function(password, salt){
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

const insert = function(user, done){
    let salt = crypto.randomBytes(64);
    let hash = getHash(user.password, salt);
    let values = [user.first_name, user.last_name ,user.email, hash, salt.toString('hex')];

    
    db.run('INSERT INTO users (first_name, last_name, email, password, salt) VALUES (?, ?, ?, ?,?)', values, function(err){
        if(err){
            return done(err);
        }
        return done(null, this.lastID);
    });
};

const authenticateUser = function(email, password, done){
    db.get('SELECT user_id, password FROM users WHERE email = ?', [email], function(err, row){
        if(err || row === undefined){
            return done(true);
        }
        else{
            return done(null, row.user_id);
        }
    })
};

const setSessionToken = function(user_id, done){
    let token = crypto.randomBytes(16).toString('hex');

    db.run('UPDATE users SET session_token = ? WHERE user_id = ?', [token, user_id], function(err){
        if(err){
            return done(err);
        }
        return done(null, token);
    })
};

const getSessionToken = function(user_id, done){
    db.get('SELECT session_token FROM users WHERE user_id = ?', [user_id], function(err, row){
        if(err){
            return done(err);
        }
        else{
            return done(null, row.session_token);
        }
    });
}


module.exports = {
    insert: insert,
    authenticateUser: authenticateUser,
    setSessionToken: setSessionToken,
    getSessionToken: getSessionToken
};