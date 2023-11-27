const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const postTagSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
})

const PostTag = model('PostTag', postTagSchema);

module.exports = PostTag;