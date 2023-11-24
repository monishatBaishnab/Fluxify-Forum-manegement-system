const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    feedback: {
        type: String,
        default: null
    },
    report: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
