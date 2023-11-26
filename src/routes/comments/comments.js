const { findAll, findOne, updateOne, insertOne } = require('../../api/comments');
const verifyUser = require('../../middlewares/verifyUser');


const router = require('express').Router();

// {
//     "comment": 
//     "date": 
//     "feedback": null,
//     "report": false,
//     "user": 
//     "post": 
//}

router.get('/comments', findAll);

router.get('/comments/:id',verifyUser, findOne);

router.put('/comments/:id',verifyUser, updateOne)

router.post('/comments',verifyUser, insertOne);

module.exports = router;