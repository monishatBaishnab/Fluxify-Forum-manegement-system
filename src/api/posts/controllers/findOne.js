const Post = require("../../../models/posts");

const findOne =  async(req, res, next) => {
    try {
        const result = await Post.findOne({_id: req.params.id}).populate('user');
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = findOne;