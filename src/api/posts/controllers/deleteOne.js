const Post = require("../../../models/posts");

const deleteOne = async (req, res, next) => {
    try {
        const result = await Post.deleteOne({_id: req.params.id});
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = deleteOne;