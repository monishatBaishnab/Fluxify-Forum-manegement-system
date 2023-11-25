const Comment = require("../../../models/comments");

const findAll =  async(req, res, next) => {
    try {
        const result = await Comment.find().populate('user').populate({path: 'post', select: 'title description'});
        res.send(result);
    } catch (error) {
        next(error);
    }
};

module.exports = findAll;