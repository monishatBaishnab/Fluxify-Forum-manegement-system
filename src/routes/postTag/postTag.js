const verifyAdmin = require('../../middlewares/verifyAdmin');
const verifyUser = require('../../middlewares/verifyUser');
const PostTag = require('../../models/postTag');

const router = require('express').Router();

router.post('/post-tags', verifyUser, verifyAdmin, async (req, res, next) => {
    try {
        const newTag = PostTag(req.body);
        const result = await newTag.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/post-tags', verifyUser, async (req, res, next) => {
    try {
        const result = await PostTag.find();
        res.send(result);
    } catch (error) {
        next(error);
    }
})
module.exports = router;