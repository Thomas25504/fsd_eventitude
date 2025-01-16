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

const getIdParams = function(req){
    return req.params.event_id;
};

const getEventByID = function(id, done){
    db.get('SELECT * FROM events WHERE event_id = ?', id, function(err, row){
        if(err){
            return done(err);
        }
        return done(null, row);
    });
};

const updateEventByID = function(event, done){
    let values = [event.name, event.description, event.location, event.start, event.close_registration, event.max_attendees, event.creator_id, event.event_id];
    db.run('UPDATE events SET name = ?, description = ?, location = ?, start_date = ?, close_registration = ?, max_attendees = ?, creator_id = ? WHERE event_id = ?', values, function(err){
        if(err){
            return done(err);
        }
        return done(null);
    });
}

module.exports = {
    insert: insert,
    getIdParams: getIdParams,
    getEventByID: getEventByID,
    updateEventByID: updateEventByID
}