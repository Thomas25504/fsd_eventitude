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

const getIdParam = function(req){
    return req.params.event_id;
};

module.exports = {
    insert: insert,
    getIdParam: getIdParam
}