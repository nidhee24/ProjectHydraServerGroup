const mongoose = require('mongoose');

//schema
const Rental = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    tariff: {
        type: String,
    },

});

module.exports = mongoose.model('Rental', Rental);