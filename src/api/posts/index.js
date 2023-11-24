const deleteOne = require('../../api/posts/controllers/deleteOne');
const findAll = require('../../api/posts/controllers/findAll');
const findOne = require('../../api/posts/controllers/findOne');
const insertOne = require('../../api/posts/controllers/insertOne');
const updateDownvote = require('../../api/posts/controllers/updateDownvote');
const updateUpvote = require('../../api/posts/controllers/updateUpvote');

module.exports = {
    deleteOne,
    findAll,
    findOne,
    insertOne,
    updateDownvote,
    updateUpvote
}