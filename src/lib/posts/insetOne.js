const Post = require("../../models/posts");

const findOneById = async (id) => {
    const res = await Post.findOne({ _id: id }).populate('user');
    return res;
}
 module.exports = findOneById;