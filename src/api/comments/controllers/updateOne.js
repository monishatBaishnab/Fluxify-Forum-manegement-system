const Comment = require("../../../models/comments");

const updateOne = async (req, res, next) => {
    try {
        const result = await Comment.updateOne({_id: req.params.id}, {$set: {...req.body}});
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateOne;