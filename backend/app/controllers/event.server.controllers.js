const events = require('../models/event.server.models');
const users = require('../models/user.server.models');
const validator = require('../lib/validator');

const create = (req, res) => {

    let event = Object.assign({}, req.body);

    const {error} = validator.validateEvent(event);
    if(error){
        return res.status(400).json({error_message: error.details[0].message});
    }else
    {events.insert(event, (err, id) => {
        if(err){
            return res.status(400).send({error_message: err.message});
        }
        else{ 
            return res.status(201).send({event_id: id});
        }

    });}
};

const getEvent = (req, res) => {

    let id = parseInt(req.params.event_id);

    if(id === undefined){
        return res.status(400).send({error_message: "Invalid event id"});
    }else{
        events.getEventByID(id, (err, row) => {
            if(err){
                return res.status(400).send({error_message: err});
            }else{
                return res.status(200).json(row);
            }
    })}
};

const updateEvent = (req, res) => {
    let event = Object.assign({}, req.body);

    const {error} = validator.validateEvent(event);
    
    if(error){
        return res.status(400).json({error_message: error.details[0].message});
    }else{
        events.updateEvent(event, (err) => {
            if(err){
                return res.status(400).send({error_message: err});
            }else{
                return res.sendStatus(200);
            }
        });
    }
};

const deleteEvent = (req, res) => {
    let id = parseInt(req.params.event_id);

    events.deleteEvent(id, (err) => {
        if(id === undefined){
            return res.status(400).send({error_message: "Invalid event id"});
        }

        if(err){
            return res.status(400).send({error_message: err});
        }else{
            return res.sendStatus(200);
        }
    });
};

const registerAttendee = (req, res) => {
    return res.sendStatus(500);
};

const search = (req, res) => {
    return res.sendStatus(500);
};


module.exports = {
    create: create,
    getEvent: getEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent,
    registerAttendee: registerAttendee,
    search: search
}