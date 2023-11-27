const findAll = require('../../api/comments/controllers/findAll');
const findOne = require('../../api/comments/controllers/findOne');
const insertOne = require('../../api/comments/controllers/insertOne');
const updateOne = require('../../api/comments/controllers/updateOne');
const deleteOne = require('../../api/comments/controllers/deleteOne');

module.exports = {
    findAll,
    findOne,
    insertOne,
    updateOne,
    deleteOne
}