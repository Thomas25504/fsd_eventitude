const events = require("../controllers/event.server.controllers");
const auth = require('../lib/midleware');


module.exports = function(app) {
    app.route("/events").post(auth.isAuthenticated,events.create);
    app.route("/event/:event_id").get(events.getEvent);
    app.route("/event/:event_id").patch(auth.isAuthenticated,events.updateEvent);
    app.route("/event/:event_id").post(auth.isAuthenticated,events.registerAttendee);
    app.route("/event/:event_id").delete(auth.isAuthenticated,events.deleteEvent);
    app.route("/search").get(events.search);
}