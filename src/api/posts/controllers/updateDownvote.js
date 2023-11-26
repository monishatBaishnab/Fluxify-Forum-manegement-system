const findOneById = require("../../../lib/posts/insetOne");
const Post = require("../../../models/posts");

const updateDownvote = async (req, res, next) => {
    try {
        const user = req.query.user;
        const postId = req.params.id;
        const post = await findOneById(postId);

        const findUser = post?.downvote?.filter(findUser => findUser === user);
        
        if(findUser.length > 0){
            return res.send('User alreay liked this post');
        };
        
        const result = await Post.findByIdAndUpdate(
            postId,
            { $push: { downvote: user } },
            { new: true }
        );
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateDownvote;