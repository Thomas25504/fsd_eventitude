const events = require("../controllers/event.server.controllers");

module.exports = function(app) {
    app.route("/events").post(events.create);
    app.route("/event/{event_id}").get(events.getEvent);
    app.route("/event/{event_id}").patch(events.updateEvent);
    app.route("/event/{event_id}").post(events.registerAttendee);
    app.route("/event/{event_id}").delete(events.deleteEvent);
    app.route("/search").get(events.search);
}