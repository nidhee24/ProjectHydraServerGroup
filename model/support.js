const mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Support', SupportSchema);