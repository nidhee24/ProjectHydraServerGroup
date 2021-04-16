const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Career', CareerSchema);