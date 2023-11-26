const Comment = require("../../../models/comments");

const findAll =  async(req, res, next) => {
    try {
        const filterObj = {};

        const postId = req.query.postId;
        if(postId){
            filterObj.post = postId;
        }

        const result = await Comment.find(filterObj).populate({path: 'user', select: 'name badge'});
        res.send(result);
    } catch (error) {
        next(error);
    }
};

module.exports = findAll;