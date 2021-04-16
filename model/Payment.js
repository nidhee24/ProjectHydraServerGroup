const mongoose = require('mongoose');

//schema
const Payment = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    first_Name: {
        type: String,
        required: true,
    },
    last_Name: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    },
    country: {
        type: String,
    },
    zip_code: {
        type: String,
    },
});

module.exports = mongoose.model('Payment', Payment);