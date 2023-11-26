const { findAll, findOne, insertOne, updateUpvote, updateDownvote, deleteOne } = require('../../api/posts');
const findByTag = require('../../api/posts/controllers/fineByTag');
const verifyUser = require('../../middlewares/verifyUser');

const router = require('express').Router();

router.get('/posts', findAll);

// router.get('/posts', findByTag);

router.get('/posts/:id', verifyUser, findOne);

router.post('/posts', insertOne);

// router.put('/posts/:id/upvote', verifyUser, updateUpvote);
router.put('/like/:id', verifyUser, updateUpvote);

router.put('/unlike/:id', verifyUser, updateDownvote);

router.delete('/posts/:id', deleteOne);

module.exports = router;