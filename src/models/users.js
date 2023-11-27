const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        default: 'Bronze'
    },
    role: {
        type: String,
        default: 'author'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', userSchema);

module.exports = User;
