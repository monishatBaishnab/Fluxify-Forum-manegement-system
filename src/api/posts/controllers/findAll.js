const Post = require("../../../models/posts");

const findAll = async (req, res, next) => {
    try {
        const filterObj = {};

        const tag = req.query.tag;

        if (tag) {
            filterObj.tags = { $in: [tag] }
        }

        const result = await Post.find(filterObj)
            .select({ title: 1, tags: 1, upvote: 1, downvote: 1, time: 1, user: 1, image: 1 })
            .populate({ path: 'user', select: 'name image' });

        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = findAll;