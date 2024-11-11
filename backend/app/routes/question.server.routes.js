const question = require('../controllers/question.server.controller');

module.exports = function(app) {
    app.route('/event/{event_id}/question').post();
    app.route('/question/{question_id}').delete();
    app.route('/question/{question_id}/vote').post();
    app.route('/question/{question_id}/vote').delete();
}