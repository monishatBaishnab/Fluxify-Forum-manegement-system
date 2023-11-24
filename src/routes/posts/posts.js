const { findAll, findOne, insertOne, updateUpvote, updateDownvote, deleteOne } = require('../../api/posts');
const verifyUser = require('../../middlewares/verifyUser');

const router = require('express').Router();

router.get('/posts', findAll);

router.get('/posts/:id', findOne);

router.post('/posts', insertOne);

router.put('/posts/:id/upvote', updateUpvote);

router.put('/posts/:id/downvote', updateDownvote);

router.delete('/posts/:id', deleteOne);

module.exports = router;