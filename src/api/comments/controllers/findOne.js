const Comment = require("../../../models/comments");

const findOne = async (req, res, next) => {
    try {
        const result = await Comment.findOne({_id: req.params.id}).populate('user').populate({ path: 'post', select: 'title description' }).select();
        res.send(result);
    } catch (error) {
        next(error);
    }
};

module.exports = findOne;