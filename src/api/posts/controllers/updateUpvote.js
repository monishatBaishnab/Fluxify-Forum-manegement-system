const findOneById = require("../../../lib/posts/insetOne");
const Post = require("../../../models/posts");

const updateUpvote = async (req, res, next) => {
    try {
        const user = req.query.user;
        const postId = req.params.id;
        const post = await findOneById(postId);

        const findUser = post?.upvote?.filter(findUser => findUser === user);
        if(findUser.length > 0){
            return res.send('User alreay liked this post');
        };

        const result = await Post.findByIdAndUpdate(
            postId,
            { $push: { upvote: user } },
            { new: true }
        );
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateUpvote;