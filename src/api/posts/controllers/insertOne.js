const Post = require("../../../models/posts");

// {
//     "user": ,
//     "title": ,
//     "description": 
//     "tags": []
// }


const insertOne = async (req, res, next) => {
    try {
        const postData = new Post(req.body);
        const result = await postData.save();
        res.send(result);
    } catch (error) {
        next(error);
        console.log(error.message);
    }
};

module.exports = insertOne;