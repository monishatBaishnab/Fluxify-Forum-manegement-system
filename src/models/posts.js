const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    upvote: {
        type: Array,
        default: []
    },
    downvote: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Post = model('Post', postSchema);

module.exports = Post;