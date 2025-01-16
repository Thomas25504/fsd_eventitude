const validator = require('../validators/question.validator');

const createQuestion = (req, res) => {
    let question = Object.assign({}, req.body);
    
        const {error} = validator.validateQuestion(question);
        if(error){
            return res.status(400).json({error_message: error.details[0].message});
        }
};

const deleteQuestion = (req, res) => {

};

const upvoteQuestion = (req, res) => {

}

const downvoteQuestion = (req, res) => {

};

module.exports = {
    createQuestion: createQuestion,
    deleteQuestion: deleteQuestion,
    upvoteQuestion: upvoteQuestion,
    downvoteQuestion: downvoteQuestion
}