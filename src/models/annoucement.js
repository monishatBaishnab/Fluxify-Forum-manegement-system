const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const announcementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Announcement = model('Annoucement', announcementSchema);

module.exports = Announcement;
