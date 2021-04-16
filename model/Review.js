const mongoose = require('mongoose');

//schema
const Review = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    feedback: {
        type: String,
    },

});

module.exports = mongoose.model('Review', Review);