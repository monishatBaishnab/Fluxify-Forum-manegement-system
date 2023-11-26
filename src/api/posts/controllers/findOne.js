const findOneById = require("../../../lib/posts/insetOne");
const Post = require("../../../models/posts");

const findOne =  async(req, res, next) => {
    try {
        const result = await findOneById(req.params.id);
        res.send(result);
    } catch (error) {
        next(error);
    }
}

module.exports = findOne;