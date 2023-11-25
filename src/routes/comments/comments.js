const { findAll, findOne, updateOne, insertOne } = require('../../api/comments');


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

router.get('/comments/:id', findOne);

router.put('/comments/:id', updateOne)

router.post('/comments', insertOne);

module.exports = router;