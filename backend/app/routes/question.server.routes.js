const questions = require('../controllers/question.server.controller');
const auth = require('../lib/middleware');

module.exports = function(app) {
    app.route('/event/:question_id/question').post(auth.isAuthenticated,questions.createQuestion);
    app.route('/question/:question_id').delete(auth.isAuthenticated,questions.deleteQuestion);
    app.route('/question/:question_id/vote').post(auth.isAuthenticated,questions.upvoteQuestion);
    app.route('/question/:question_id/vote').delete(auth.isAuthenticated,questions.downvoteQuestion);
}