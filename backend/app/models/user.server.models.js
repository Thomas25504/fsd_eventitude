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
            console.log(err);
            return done(err);
        }
        return done(null, this.lastID);
    });
};

const check_user = function(user, done){
    db.get('SELECT * FROM users WHERE email = ?', [user.email], (err, row) => {
        if(err){
            return done(err);
        }
        if(row){
            let hash = getHash(user.password, Buffer.from(row.salt, 'hex'));
            if(hash === row.password){
                return done(null, row);
            }
        }
        return done(null, null);
    });
};

module.exports = {
    insert: insert,
    check_user: check_user
};