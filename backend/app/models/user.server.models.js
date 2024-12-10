// Import the database configuration
const db = require('../../config/database');
const crypto = require('crypto');

// Get the hash of a password
const getHash = function(password, salt){
    return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

// Insert a new user
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

// Authenticate a user
const authenticateUser = function(email, password, done){
    db.get('SELECT user_id, password, salt FROM users WHERE email = ?', [email], function(err, id){
        if(err || id === undefined || password === undefined){
            return done(true);
        }
        else{
            if(id.user_salt == null){
                id.user_salt = '';
            }

            let salt = Buffer.from(id.salt, 'hex');

            if(id.password === getHash(password, salt)){
                return done(null, id.user_id);
            }
            else{
                return done(true);
            }
        }
    })
};

// Set the session token for a user
const setSessionToken = function(user_id, done){
    let token = crypto.randomBytes(16).toString('hex');

    db.run('UPDATE users SET session_token = ? WHERE user_id = ?', [token, user_id], function(err){
        if(err){
            return done(err);
        }
        return done(null, token);
    })
};

// Get the session token for a user
const getSessionToken = function(user_id, done){
    db.get('SELECT session_token FROM users WHERE user_id = ?', [user_id], function(err, id){
        if(err){
            return done(err);
        }
        else{
            return done(null, id.session_token);
        }
    });
}

// Remove the session token for a user
const removeToken = function(token, done){
    db.run('UPDATE users SET session_token = NULL WHERE session_token = ?', [token], function(err){
        if(err){
            return done(err);
        }
        return done(null);
    });
}

const getIdFromToken = function(token, done){
    const sql = 'SELECT user_id FROM users WHERE session_token = ?';
    const params = [token];
    db.run(sql, params, function(err, id){
        if(err || id === undefined){
            return done(true, null);
        }
        else{
            return done(null, id.user_id);
        }
    });
}

// Export the module
module.exports = {
    insert: insert,
    authenticateUser: authenticateUser,
    setSessionToken: setSessionToken,
    getSessionToken: getSessionToken,
    removeToken: removeToken,
    getIdFromToken: getIdFromToken
};