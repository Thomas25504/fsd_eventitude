const db = require('../../config/database');

const insert = function(event, done){
    let values = [event.name, event.description ,event.location, event.start, event.close_registration, event.max_attendees, event.creator_id];

    db.run('INSERT INTO events (name, description, location, start_date, close_registration, max_attendees, creator_id) VALUES (?, ?, ?, ?, ?, ?, ?)', values, function(err){
        if(err){
            return done(err);
        }
        return done(null, this.lastID);
    });
};

module.exports = {
    insert: insert
}