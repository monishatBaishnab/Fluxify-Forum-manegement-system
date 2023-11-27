const { findAll, findOne, updateOne, insertOne, deleteOne } = require('../../api/comments');
const verifyUser = require('../../middlewares/verifyUser');
const Comment = require('../../models/comments');


const router = require('express').Router();

router.get('/comments', verifyUser, findAll);

router.get('/comments/:id', verifyUser, findOne);

router.patch('/comments/:id', verifyUser, updateOne)

router.post('/comments', verifyUser, insertOne);

router.delete('/comments/:id', verifyUser, deleteOne);

module.exports = router;