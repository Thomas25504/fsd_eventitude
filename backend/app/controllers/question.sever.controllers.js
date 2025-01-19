const questions = require('../models/question.server.models');

const createQuestion = (req, res) => {
    let question = Object.assign({}, req.body);
    questions.insert(question, (err, id) => {
        if(err){
            return res.status(400).send({error_message: err.message});
        }else{
            return res.status(201).send({question_id: id});
        }
    });
};

const deleteQuestion = (req, res) => {
    return res.status(200).json({message: 'Question deleted successfully'});
};

const upvoteQuestion = (req, res) => {
    return res.status(200).json({message: 'Question upvoted successfully'});
}

const downvoteQuestion = (req, res) => {
    return res.status(200).json({message: 'Question downvoted successfully'});
};

module.exports = {
    createQuestion: createQuestion,
    deleteQuestion: deleteQuestion,
    upvoteQuestion: upvoteQuestion,
    downvoteQuestion: downvoteQuestion
}