const events = require('../models/event.server.models');
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
    return res.sendStatus(500);
};

const updateEvent = (req, res) => {
    return res.sendStatus(401);
};

const deleteEvent = (req, res) => {
    return res.sendStatus(500);
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