const Post = require("../../../models/posts");

const updateDownvote = async (req, res, next) => {
    try {
        const result = await Post.findByIdAndUpdate(
            req.params.id,
            { $inc: { downvote: 1 } },
            { new: true }
        );
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateDownvote;