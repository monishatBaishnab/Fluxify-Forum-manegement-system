const Post = require("../../../models/posts");

const findAll =  async(req, res, next) => {
    try {
        const result = await Post.find().populate('user');
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = findAll;