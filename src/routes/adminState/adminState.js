const verifyAdmin = require('../../middlewares/verifyAdmin');
const verifyUser = require('../../middlewares/verifyUser');
const User = require('../../models/users');

const router = require('express').Router();

router.get('/admin-states', verifyUser, verifyAdmin, async (req, res, next) => {
    try {
        const totalPage = await User.aggregate([
            {
                $lookup: {
                    from: 'posts',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'post'
                }
            },
            {
                $lookup: {
                    from: 'comments',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'comments'
                }
            },
            {
                $group: {
                    _id: null,
                    users: {$sum: 1},
                    posts: {$sum: {$size: '$post'}},
                    comments: {$sum: {$size: '$comments'}}
                }
            },
            {
                $project: {
                    _id: 0,
                    users: 1,
                    posts: 1,
                    comments: 1
                }
            }
        ])

        res.send(totalPage[0]);
    } catch (error) {
        next(error);
    }
})
module.exports = router;