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

const getEventByID = function(id, done){

    db.get('SELECT * FROM events WHERE event_id = ?', [id], function(err, row){
        if(err){
            return done(err, null);
        }
        return done(null, row);
    });
};

const getCreatorByEvent = function(id, done){

    db.get('SELECT creator_id FROM events WHERE event_id = ?', [id], function(err, id){
        if(err){
            return done(err, null);
        }
        return done(null, id.creator_id);
    });
};

const updateEvent = function(event, done){
    let values = [event.name, event.description, event.location, event.start, event.close_registration, event.max_attendees, event.event_id];
    db.run('UPDATE events SET name = ?, description = ?, location = ?, start_date = ?, close_registration = ?, max_attendees = ? WHERE event_id = ?', values, function(err){
        if(err){
            return done(err);
        }
        return done(null);
    });
}

const deleteEvent = function(id, done){
    db.run('DELETE FROM events WHERE event_id = ?', [id], function(err){
        if(err){
            return done(err);
        }
        return done(null);
    });
};

const search = function(done){
   db.all('SELECT * FROM events', function(err, rows){
       if(err){
           return done(err, null);
       }
       return done(null, rows);
   });
};

module.exports = {
    insert: insert,
    getEventByID: getEventByID,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent,
    getCreatorByEvent: getCreatorByEvent,
    search: search
}