const users = require('../controllers/user.server.controllers');

module.exports = function(app) {
    app.route("/users").post(users.create);
    app.route("/login").post(users.login);
    app.route("/logout").post(users.logout);
}