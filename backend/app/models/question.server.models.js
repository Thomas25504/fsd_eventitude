const db = require('../../config/database');

const insert = function(question, done){
    let values = [question.event_id, question.user_id, question.content, question.vote];
    db.run('INSERT INTO questions (event_id, user_id, content, vote) VALUES (?, ?, ?, ?)', values, function(err){
        if(err){
            return done(err);
        }
        return done(null, this.lastID);
    });
}

const getIdParams = function(body){
    return parseInt(body.question_id);
}

const getQuestionByID = function(id, done){
    db.get('SELECT * FROM questions WHERE question_id = ?', id, function(err, row){
        if(err){
            return done(err);
        }
        return done(null, row);
    });
}

module.exports = {
    insert: insert
};