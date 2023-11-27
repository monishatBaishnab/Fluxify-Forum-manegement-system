const { findAll, findOne, insertOne, updateUpvote, updateDownvote, deleteOne, countById } = require('../../api/posts');
const findByTag = require('../../api/posts/controllers/fineByTag');
const verifyUser = require('../../middlewares/verifyUser');

const router = require('express').Router();

router.get('/posts', findAll);

router.get('/posts/count', countById);

router.get('/posts/:id', verifyUser, findOne);

router.post('/posts', verifyUser, insertOne);

router.put('/like/:id', verifyUser, updateUpvote);

router.put('/unlike/:id', verifyUser, updateDownvote);

router.delete('/posts/:id', verifyUser, deleteOne);

module.exports = router;