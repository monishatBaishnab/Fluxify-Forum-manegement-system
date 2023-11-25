const Comment = require("../../../models/comments");

const insertOne = async(req, res, next) => {
    try {
        const commentData = new Comment(req.body);
        const result = await commentData.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = insertOne;