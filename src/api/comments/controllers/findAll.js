const Comment = require("../../../models/comments");

const findAll =  async(req, res, next) => {
    try {
        const filterObj = {};

        const postId = req.query.postId;
        const report = req.query.report;
        
        if(postId){
            filterObj.post = postId;
        }
        if(report){
            filterObj.report = 'true';
        }
        const result = await Comment.find(filterObj).populate('user');
        res.send(result);
    } catch (error) {
        next(error);
    }
};

module.exports = findAll;