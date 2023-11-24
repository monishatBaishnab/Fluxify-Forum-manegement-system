const Post = require("../../../models/posts");

const updateUpvote = async (req, res, next) => {
    try {
        const result = await Post.findByIdAndUpdate(
            req.params.id,
            { $inc: { upvote: 1 } },
            { new: true }
        );
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateUpvote;