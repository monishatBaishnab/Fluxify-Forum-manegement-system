
const Post = require("../../../models/posts");
const mongoose = require('mongoose');

const countById = async (req, res, next) => {
    try {
        const userId = req.query.id;

        const countResult = await Post.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(userId),
                }
            },
            {
                $group: {
                    _id: null,
                    count: {$sum: 1}
                }
            }
        ])

        res.send({ count: countResult })
    } catch (error) {
        next(error);
    }
}
module.exports = countById;